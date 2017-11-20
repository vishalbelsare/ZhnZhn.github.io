import React, { Component } from 'react';

import D from '../dialogs/DialogCell'
import Decor from '../dialogs/decorators/Decorators'

const typeOptions = [
  { caption: 'Continuous Contract #1', value: 1 },
  { caption: 'Continuous Contract #2', value: 2 },
  { caption: 'Continuous Contract #3', value: 3 },
  { caption: 'Continuous Contract #4', value: 4 },
  { caption: 'Continuous Contract #5', value: 5 }
]

@Decor.withToolbar
@Decor.withValidationLoad
class FuturesWikiDialog extends Component {
  constructor(props){
    super()
    this.type = undefined
    this.toolbarButtons = this._createType2WithToolbar(
      props, { noDate: true }
    )
    this._commandButtons = [
      <D.Button.Load onClick={this._handleLoad} />
    ]
    this.state = {
      isShowLabels: true,
      validationMessages : []
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

  _handleSelectType = (type) => {
    this.type = type
  }

  _handleLoad = () => {
    this._handleWithValidationLoad(
      this._createValidationMessages(),
      this._createLoadOption
    )
  }
  _createValidationMessages = () => {
    const { msgOnNotSelected, msgOnNotValidFormat, isContinious } = this.props
    let   msg = [];

    const { isValid:isValid1, msg:msg1 } = this.exchangeItem.getValidation();
    if (!isValid1) { msg = msg.concat(msg1); }

    if (!this.type) { msg.push(msgOnNotSelected('Type')); }

    if (isContinious && !this.fromDate.isValid()){
      msg.push(msgOnNotValidFormat('From Date'));
    }

    msg.isValid = (msg.length === 0) ? true : false;
    return msg;
  }
  _createLoadOption = () => {
    const { parent:exchange, child:item } = this.exchangeItem.getValues()
        , { isContinious } = this.props
        , fromDate = (isContinious)
              ? this.fromDate.getValue()
              : undefined ;
    return this.props.loadFn(
      this.props,
      { exchange, item , type : this.type, fromDate }
    );
  }

  _handleClose = () => {
    this._handleWithValidationClose()
  }

  render(){
    const {
            isShow, caption, onShow, onFront,
            futuresURI, msgOnNotSelected,
            isContinious, initFromDate, onTestDateOrEmpty, msgTestDateOrEmpty
          } = this.props
        , { isShowLabels, validationMessages } = this.state;

    return (
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

           <D.SelectParentChild
               ref={c => this.exchangeItem = c}
               isShow={isShow}
               isShowLabels={isShowLabels}
               uri={futuresURI}
               parentCaption="Exchange"
               parentOptionNames="Exchanges"
               parentJsonProp="futures"
               childCaption="Asset"
               msgOnNotSelected={msgOnNotSelected}
           />
           <D.RowInputSelect
              isShowLabels={isShowLabels}
              caption="Type"
              options={typeOptions}
              onSelect={this._handleSelectType}
           />
           {
             isContinious &&
             <D.RowDate
                ref={ c => this.fromDate = c}
                isShowLabels={isShowLabels}
                labelTitle="From Date:"
                initValue={initFromDate}
                errorMsg={msgTestDateOrEmpty}
                onTestDate={onTestDateOrEmpty}
             />
           }
           <D.ValidationMessages
              validationMessages={validationMessages}
           />
      </D.DraggableDialog>
    );
  }
}

export default FuturesWikiDialog
