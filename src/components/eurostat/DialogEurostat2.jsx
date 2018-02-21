import React, { Component } from 'react';
//import PropTypes from "prop-types";

import crDateConfig from './crDateConfig'

import D from '../dialogs/DialogCell'
import Decor from '../dialogs/decorators/Decorators';

import RouterOptions from './RouterOptions';

const  MAP_FREQUENCY_DF = 'M';

@Decor.withToolbar
@Decor.withValidationLoad
class DialogEurostat2 extends Component {
  static defaultProps = {
    oneCaption: 'Item',
    oneJsonProp: 'items',
    twoCaption: 'Metric',
    twoJsonProp: 'metrics',
  }

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    caption: PropTypes.string,

    oneCaption: PropTypes.string,
    oneURI: PropTypes.string,
    oneJsonProp: PropTypes.string,

    twoCaption: PropTypes.string,
    twoURI: PropTypes.string,
    twoJsonProp: PropTypes.string,

    mapFrequency: PropTypes.oneOf(['M', 'Q', 'Y']),
    mapDateDf: PropTypes.number,

    msgOnNotSelected: PropTypes.func,
    onShow: PropTypes.func,
    loadFn: PropTypes.func
  }
 */
  constructor(props){
    super();
    this.one = undefined;
    this.two = undefined;
    this.date = undefined;
    this.chartType = undefined;

    this.toolbarButtons = this._createType2WithToolbar(props)

    this._commandButtons = [
      <D.Button.Load onClick={this._handleLoad} />
    ];

    this._chartOptions = RouterOptions.crOptions(props)

    this.state = {
      isShowLabels: true,
      isShowDate: false,
      ...crDateConfig('EMPTY'),
      validationMessages: []
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.props !== nextProps){
       if (this.props.isShow === nextProps.isShow){
          return false;
       }
    }
    return true;
  }

  _isCategory = () => {
    return RouterOptions.isCategory(this.chartType)
  }

  _updateForDate = () => {
    this.date = null;
    const frequency = (this.two)
             ? (this.props.mapFrequency)
                  ? this.props.mapFrequency
                  : (this.two.mapFrequency)
                       ? this.two.mapFrequency
                       : MAP_FREQUENCY_DF
             : null
         , { mapDateDf } = this.props
         , dateConfig = (frequency)
             ? crDateConfig(frequency, mapDateDf)
             : crDateConfig('EMPTY')

    this.setState({
       isShowDate: true,
       ...dateConfig
    });
  }

  _handleSelectOne = (one) => {
    this.one = one;
  }

  _handleSelectTwo = (two) => {
    this.two = two;
    if (this._isCategory()) {
      this._updateForDate();
    }
  }

  _handleSelectChartType = (chartType) => {
    this.chartType = chartType;
    if (this._isCategory()) {
      this._updateForDate();
    } else {
      this.setState({ isShowDate : false });
    }
  }

  _handleSelectDate = (date) => {
    this.date = date;
  }

  _handleLoad = () => {
    this._handleWithValidationLoad(
      this._createValidationMessages(),
      this._createLoadOption
    );
  }
  _createValidationMessages = () => {
     const { oneCaption, twoCaption } = this.props;
     const msg = [];

     if (!this._isCategory()) {
        if (!this.one) { msg.push(this.props.msgOnNotSelected(oneCaption)); }
     }
     if (!this.two) { msg.push(this.props.msgOnNotSelected(twoCaption)); }

     msg.isValid = (msg.length === 0) ? true : false;
     return msg;
  }
  _createLoadOption = () => {
    const {
            one, two, chartType, date,
            compSelect1, compSelect2
          } = this
        , { dateDefault } = this.state;
    return this.props.loadFn(
      this.props, {
        one, two, chartType, date, dateDefault,
        selectOptions: [
          compSelect1.getOptions(),
          compSelect2.getOptions()
        ]
      }
    );
  }

  _handleClose = () => {
    this._handleWithValidationClose()
  }

  _refSelect1 = (comp) => {
    this.compSelect1 = comp
  }
  _refSelect2 = (comp) => {
    this.compSelect2 = comp
  }

  render(){
    const {
           caption, isShow, onShow, onFront,
           oneCaption, oneURI, oneJsonProp,
           twoCaption, twoURI, twoJsonProp
          } = this.props
        , {
            isShowLabels, isShowDate,
            dateDefault, dateOptions,
            validationMessages
          } = this.state;

    return(
        <D.DraggableDialog
             caption={caption}
             isShow={isShow}
             commandButtons={this._commandButtons}
             onShowChart={onShow}
             onFront={onFront}
             onClose={this._handleClose}
         >
             <D.ToolbarButtonCircle
               buttons={this.toolbarButtons}
             />
             <D.SelectWithLoad
               ref={this._refSelect1}
               isShow={isShow}
               isShowLabels={isShowLabels}
               uri={oneURI}
               jsonProp={oneJsonProp}
               caption={oneCaption}
               optionNames="Items"
               onSelect={this._handleSelectOne}
             />
             <D.SelectWithLoad
               ref={this._refSelect2}
               isShow={isShow}
               isShowLabels={isShowLabels}
               uri={twoURI}
               jsonProp={twoJsonProp}
               caption={twoCaption}
               optionNames="Metrics"
               onSelect={this._handleSelectTwo}
             />
             <D.RowInputSelect
               isShowLabels={isShowLabels}
               caption="Chart"
               placeholder="Default: Area"
               options={this._chartOptions}
               onSelect={this._handleSelectChartType}
             />
             <D.ShowHide isShow={isShowDate}>
               <D.RowInputSelect
                  isShowLabels={isShowLabels}
                  caption="For Date"
                  placeholder={dateDefault}
                  options={dateOptions}
                  onSelect={this._handleSelectDate}
               />
             </D.ShowHide>
             <D.ValidationMessages
                 validationMessages={validationMessages}
             />
        </D.DraggableDialog>
    );
  }
}

export default DialogEurostat2
