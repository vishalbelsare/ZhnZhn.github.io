import React from 'react';

import ZhDialog from '../ZhDialog';
import WithToolbar from '../dialogs/WithToolbar';
import WithValidation from '../dialogs/WithValidation';

import ToolbarButtonCircle from '../dialogs/ToolbarButtonCircle';
import SelectWithLoad from '../dialogs/SelectWithLoad';
import RowInputSelect from '../dialogs/RowInputSelect';
import SelectParentChild from '../dialogs/SelectParentChild';
import ToolBarButton from '../ToolBarButton';

import DatesFragment from '../DatesFragment';
import ValidationMessagesFragment from '../ValidationMessagesFragment';
import ShowHide from '../zhn/ShowHide';

const unitOptions = [
  { "caption" : "Thousand Barrels per day (kb/d)", "value" : "KD" },
  { "caption" : "Thousand Barrels (kbbl)", "value" : "KB" },
  { "caption" : "Thousand Kilolitres (kl)", "value" : "KL" },
  { "caption" : "Thousand Metric Tons (kmt)", "value" : "KT" },
  { "caption" : "Conversion factor barrels/ktons", "value" : "BK" }
]


const JodiWorldOilDialog = React.createClass({
   ...WithToolbar,
   ...WithValidation,

   getInitialState(){
      this.country = null;
      this.product = null;
      this.flow = null;
      this.units = null;

      this.toolbarButtons = this._createType2WithToolbar();
      return {
        isShowDate : true,
        validationMessages : []
      }
   },

   shouldComponentUpdate(nextProps, nextState){
     if (this.props !== nextProps){
        if (this.props.isShow === nextProps.isShow){
           return false;
        }
     }
     return true;
   },

   _handlerSelectCountry(country){
     this.country = country;
   },
   _handlerSelectUnits(units){
     this.units = units;
   },

   _handlerLoad(){
     this._handlerWithValidationLoad(
       this._createValidationMessages(),
       this._createLoadOption
     );
   },
   _createValidationMessages(){
     const { msgOnNotSelected } = this.props;
     let msg = [];

     if (!this.country) { msg.push(msgOnNotSelected('Country')); }

     const { isValid:isValid1, msg:msg1 } = this.productFlow.getValidation();
     if (!isValid1) { msg = msg.concat(msg1); }

     if (!this.units) {
       this.units = unitOptions[0];
     }

     const { isValid, datesMsg } = this.datesFragment.getValidation();
     if (!isValid) { msg = msg.concat(datesMsg); }

     msg.isValid = (msg.length === 0) ? true : false;
     return msg;
   },
   _createLoadOption(){
      const { parent:product, child:flow } = this.productFlow.getValues()
          , { fromDate, toDate } = this.datesFragment.getValues()
          , { fnValue, dataColumn, loadId } = this.props;
      return {
        value : fnValue(this.country.value, product.value, flow.value, this.units.value),
        fromDate: fromDate,
        toDate: toDate,
        dataColumn : dataColumn,
        loadId : loadId,
        title : `${this.country.caption}:${product.caption}`,
        subtitle : `${flow.caption}:${this.units.caption}`
      }
   },
   _handlerClose(){
     this._handlerWithValidationClose(this._createValidationMessages);
     this.props.onClose();
   },

   render(){
     const {
             caption, isShow, onShow,
             oneCaption, oneURI, oneJsonProp,
             parentCaption, parentChildURI, parentJsonProp, childCaption, msgOnNotSelected,
             initFromDate, initToDate, msgOnNotValidFormat, onTestDate
           } = this.props
         , { isShowDate, validationMessages } = this.state
         , _commandButtons = [
               <ToolBarButton
                  key="a"
                  type="TypeC"
                  caption="Load"
                  onClick={this._handlerLoad}
               />
          ];

     return (
       <ZhDialog
         caption={caption}
         isShow={isShow}
         commandButtons={_commandButtons}
         onShowChart={onShow}
         onClose={this._handlerClose}
       >
          <ToolbarButtonCircle
            buttons={this.toolbarButtons}
          />

          <SelectWithLoad
             isShow={isShow}
             uri={oneURI}
             jsonProp={oneJsonProp}
             caption={oneCaption}
             optionNames={'Items'}
             onSelect={this._handlerSelectCountry}
          />
          <SelectParentChild
             ref={c => this.productFlow = c}
             isShow={isShow}
             uri={parentChildURI}
             parentCaption={parentCaption}
             parentOptionNames="Items"
             parentJsonProp={parentJsonProp}
             childCaption={childCaption}
             msgOnNotSelected={msgOnNotSelected}
          />
          <RowInputSelect
            caption="Units"
            options={unitOptions}
            onSelect={this._handlerSelectUnits}
          />

          <ShowHide isShow={isShowDate}>
            <DatesFragment
              ref={c => this.datesFragment = c}
              initFromDate={initFromDate}
              initToDate={initToDate}
              msgOnNotValidFormat={msgOnNotValidFormat}
              onTestDate={onTestDate}
            />
          </ShowHide>
          <ValidationMessagesFragment
              validationMessages={validationMessages}
          />
       </ZhDialog>
     );
   }
});

export default JodiWorldOilDialog