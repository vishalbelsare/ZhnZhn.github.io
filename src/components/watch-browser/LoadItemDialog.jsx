import React, { Component } from 'react';
//import PropTypes from "prop-types";

import DateUtils from '../../utils/DateUtils'

import ChartActions from '../../flux/actions/ChartActions'
import { BrowserType as BT, LoadType as LT } from '../../constants/Type'
import CHT from '../../constants/ChartType'

import ModalDialog from '../zhn-moleculs/ModalDialog'
import D from '../dialogs/DialogCell'
import ValidationMessages from '../zhn/ValidationMessages'

import Decor from '../dialogs/decorators/Decorators'

const {
  getFromDate,
  getToDate,
  isYmd,
  mlsToDmy
} = DateUtils;

const S = {
  DIALOG: {
    width: 365,
  },
  DIALOG_SHORT: {
    width: 265
  },
  ITEM_TEXT: {
    display: 'inline-block',
    maxWidth: 250,
    height: 32,
    verticalAlign: 'middle',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
};

const _crValue = (x='', y='') => (`${y} ${mlsToDmy(x)}`).trim();

@Decor.dialog
class LoadItemDialog extends Component {
   /*
   static propTypes = {
     isShow: PropTypes.bool,
     data: PropTypes.shape({
       fromDate: PropTypes.string,
       initToDate: PropTypes.string,
       onTestDate: PropTypes.func
     }),
     store: PropTypes.object,
     onClose: PropTypes.func
   }
   */

   static defaultProps = {
     data: {}
   }

   constructor(props){
     super(props)
     const {
       fromDate,
       initToDate,
       onTestDate,
       itemConf={}
     } = props.data
     , isValue = !!itemConf.x;

     this.toolbarButtons = this._createType2WithToolbar(props, {
       isValue
     })

     this._commandButtons = [
       <D.Button.Load
         key="load"
         onClick={this._handleLoad}
       />
     ]

    this.state = {
       ...this._isWithInitialState(),
       isShowDate: false,
       isValue,
       initFromDate: fromDate || getFromDate(2),
       initToDate: initToDate || getToDate(),
       onTestDate: onTestDate || isYmd
    }
   }

   shouldComponentUpdate(nextProps, nextState){
     if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
       return false;
     }
     return true;
   }

  _handleLoad = () => {
    const validationMessages = this._createValidationMessages();
    if (validationMessages.isValid){
      const { data, onClose } = this.props
          , {
              id,
              title, subtitle, caption,
              columnName, dataColumn, seriaColumnNames,
              itemConf={}
              /*
              _itemKey, url, loadId,
              optionFetch, items,
              itemCaption, seriaType,
              dataSource, dfId, timeId
              */
             } = data
          , { fromDate, toDate } = this.datesFragment.getValues()
          , option = {
             id, title, subtitle,
             value: caption,
             item: caption,
             fromDate, toDate,
             columnName, dataColumn, seriaColumnNames,
             loadId: itemConf.loadId || LT.WL,
             ...itemConf
           };
      ChartActions.loadStock({
        chartType: CHT.WATCH_LIST,
        browserType: BT.WATCH_LIST
      }, option);
      onClose()
    }
    this._updateValidationMessages(validationMessages)
  }

  _createValidationMessages = () => {
    let msg = [];
    const { isValid, datesMsg } = this.datesFragment.getValidation();
    if (!isValid) { msg = msg.concat(datesMsg) }
    msg.isValid = (msg.length === 0) ? true : false
    return msg;
  }

  _handleClose = () => {
    this._handleWithValidationClose(this._createValidationMessages)
    this.props.onClose()
  }

  _refDates = c => this.datesFragment = c

  render(){
    const { isShow, data } = this.props
    , { caption, itemConf={} } = data
    , { dataSource, x, y } = itemConf
    , {
        isShowLabels, isShowDate, isValue,
        initFromDate, initToDate,
        onTestDate, validationMessages
      } = this.state
    , _style = isShowLabels ? S.DIALOG : S.DIALOG_SHORT
    , _value = _crValue(x, y);

    return (
      <ModalDialog
         style={_style}
         isShow={isShow}
         caption="Load Item"
         commandButtons={this._commandButtons}
         onClose={this._handleClose}
      >
        <D.Toolbar
          isShow={true}
          buttons={this.toolbarButtons}
        />
        <D.Row.Text
          isShowLabels={isShowLabels}
          styleText={S.ITEM_TEXT}
          caption="Item:"
          text={caption}
        />
        <D.ShowHide isShow={isValue}>
          <D.Row.Text
            isShowLabels={isShowLabels}
            styleText={S.ITEM_TEXT}
            caption="Value:"
            text={_value}
          />
        </D.ShowHide>
        <D.ShowHide isShow={isShowDate}>
          <D.DatesFragment
              ref={this._refDates}
              isShowLabels={isShowLabels}
              initFromDate={initFromDate}
              initToDate={initToDate}
              onTestDate={onTestDate}
          />
        </D.ShowHide>
        <D.Row.Text
          isShowLabels={isShowLabels}
          styleText={S.ITEM_TEXT}
          caption="Source:"
          text={dataSource}
        />
        <ValidationMessages
            validationMessages={validationMessages}
        />
      </ModalDialog>
    )
  }
}

export default LoadItemDialog
