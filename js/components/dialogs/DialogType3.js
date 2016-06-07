'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WithValidation = require('./WithValidation');

var _WithValidation2 = _interopRequireDefault(_WithValidation);

var _WithLoadOptions = require('./WithLoadOptions');

var _WithLoadOptions2 = _interopRequireDefault(_WithLoadOptions);

var _ZhDialog = require('../ZhDialog');

var _ZhDialog2 = _interopRequireDefault(_ZhDialog);

var _RowInputSelect = require('./RowInputSelect');

var _RowInputSelect2 = _interopRequireDefault(_RowInputSelect);

var _ToolBarButton = require('../ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _DatesFragment = require('../DatesFragment');

var _DatesFragment2 = _interopRequireDefault(_DatesFragment);

var _ValidationMessagesFragment = require('../ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogType3 = _react2.default.createClass(_extends({}, _WithValidation2.default, _WithLoadOptions2.default, {

  displayName: 'DialogType3',

  getInitialState: function getInitialState() {
    this.stock = null;
    this.OPTIONS_STATE_PROP = 'optionStocks';
    var _isLoading = this.props.optionURI ? true : false,
        _optionStocks = this.props.optionURI ? [] : this.props.optionStocks;
    return {
      isLoading: _isLoading,
      isLoadingFailed: false,
      optionStocks: _optionStocks,
      validationMessages: []
    };
  },
  componentDidMount: function componentDidMount() {
    if (this.props.optionURI) {
      this._handlerWithLoadOptions(this.OPTIONS_STATE_PROP);
    }
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      if (this.props.isShow === nextProps.isShow) {
        return false;
      }
    }
    return true;
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      if (this.state.isLoadingFailed && this.props.optionURI && this.props.isShow) {
        this._handlerWithLoadOptions(this.OPTIONS_STATE_PROP);
      }
    }
  },
  componetWillUnmount: function componetWillUnmount() {
    this._unmountWithLoadOptions();
  },
  _handlerLoadOptions: function _handlerLoadOptions() {
    //if (this.props.optionURI){
    this._handlerWithLoadOptions(this.OPTIONS_STATE_PROP);
    //}
  },
  _handlerSelectStock: function _handlerSelectStock(stock) {
    this.stock = stock;
  },
  _handlerLoad: function _handlerLoad(event) {
    event.target.focus();
    this._handlerWithValidationLoad(this._createValidationMessages(), this._createLoadOption);
  },

  /*
  _handlerLoad(event){
     event.target.focus();
     const validationMessages = this._getValidationMessages();
     if (validationMessages.isValid){
       const {fromDate, toDate} = this.datesFragment.getValues()
           , {dataColumn, fnItemCaption} = this.props
           , _itemCaption = (typeof fnItemCaption === 'function') ?
                          fnItemCaption(this.stock.value) : undefined;
       const option = {
         value : this.stock.value,
         stock: this.stock,
         fromDate: fromDate,
         toDate: toDate,
         dataColumn : dataColumn,
         itemCaption : _itemCaption
       }
       this.props.onLoad(option);
     }
     this._updateValidationMessages(validationMessages);
  },
  */
  _createValidationMessages: function _createValidationMessages() {
    var _props$itemCaption = this.props.itemCaption;
    var itemCaption = _props$itemCaption === undefined ? 'Stock' : _props$itemCaption;

    var msg = [];
    if (!this.stock) {
      msg.push(this.props.msgOnNotSelected(itemCaption));
    }

    var _datesFragment$getVal = this.datesFragment.getValidation();

    var isValid = _datesFragment$getVal.isValid;
    var datesMsg = _datesFragment$getVal.datesMsg;

    if (!isValid) {
      msg = msg.concat(datesMsg);
    }
    msg.isValid = msg.length === 0 ? true : false;
    return msg;
  },
  _createLoadOption: function _createLoadOption() {
    var _datesFragment$getVal2 = this.datesFragment.getValues();

    var fromDate = _datesFragment$getVal2.fromDate;
    var toDate = _datesFragment$getVal2.toDate;
    var _props = this.props;
    var dataColumn = _props.dataColumn;
    var fnItemCaption = _props.fnItemCaption;
    var _itemCaption = typeof fnItemCaption === 'function' ? fnItemCaption(this.stock.value) : undefined;
    return {
      value: this.stock.value,
      stock: this.stock,
      fromDate: fromDate,
      toDate: toDate,
      dataColumn: dataColumn,
      itemCaption: _itemCaption
    };
  },
  _handlerClose: function _handlerClose() {
    this._handlerWithValidationClose(this._createValidationMessages);
    this.props.onClose();
  },
  render: function render() {
    var _this = this;

    var _props2 = this.props;
    var caption = _props2.caption;
    var isShow = _props2.isShow;
    var onShow = _props2.onShow;
    var onClose = _props2.onClose;
    var _props2$itemCaption = _props2.itemCaption;
    var itemCaption = _props2$itemCaption === undefined ? 'Stock:' : _props2$itemCaption;
    var _props2$optionNames = _props2.optionNames;
    var optionNames = _props2$optionNames === undefined ? 'Stocks' : _props2$optionNames;
    var initFromDate = _props2.initFromDate;
    var initToDate = _props2.initToDate;
    var msgOnNotValidFormat = _props2.msgOnNotValidFormat;
    var onTestDate = _props2.onTestDate;
    var _state = this.state;
    var isLoading = _state.isLoading;
    var isLoadingFailed = _state.isLoadingFailed;
    var optionStocks = _state.optionStocks;
    var validationMessages = _state.validationMessages;
    var _commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
      key: 'a',
      type: 'TypeC',
      caption: 'Load',
      onClick: this._handlerLoad
    })];

    return _react2.default.createElement(
      _ZhDialog2.default,
      {
        caption: caption,
        isShow: isShow,
        commandButtons: _commandButtons,
        onShowChart: onShow,
        onClose: this._handlerClose
      },
      _react2.default.createElement(_RowInputSelect2.default, {
        caption: itemCaption,
        options: optionStocks,
        optionNames: optionNames,
        isLoading: isLoading,
        isLoadingFailed: isLoadingFailed,
        onLoadOption: this._handlerLoadOptions,
        onSelect: this._handlerSelectStock
      }),
      _react2.default.createElement(_DatesFragment2.default, {
        ref: function ref(c) {
          return _this.datesFragment = c;
        },
        initFromDate: initFromDate,
        initToDate: initToDate,
        msgOnNotValidFormat: msgOnNotValidFormat,
        onTestDate: onTestDate
      }),
      _react2.default.createElement(_ValidationMessagesFragment2.default, {
        validationMessages: validationMessages
      })
    );
  }
}));

exports.default = DialogType3;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\dialogs\DialogType3.js.map