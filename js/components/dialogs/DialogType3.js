'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ZhDialog = require('../ZhDialog');

var _ZhDialog2 = _interopRequireDefault(_ZhDialog);

var _ZhSelect = require('../ZhSelect');

var _ZhSelect2 = _interopRequireDefault(_ZhSelect);

var _ToolBarButton = require('../ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _DatesFragment = require('../DatesFragment');

var _DatesFragment2 = _interopRequireDefault(_DatesFragment);

var _ValidationMessagesFragment = require('../ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

var _DialogStyles = require('../styles/DialogStyles.js');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;

var DialogType3 = _react2.default.createClass({
  displayName: 'DialogType3',

  getInitialState: function getInitialState() {
    return {
      stock: null,
      validationMessages: []
    };
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      if (this.props.isShow === nextProps.isShow) {
        return false;
      }
    }
    return true;
  },

  _handlerSelectStock: function _handlerSelectStock(stock) {
    this.state.stock = stock;
  },

  _handlerLoad: function _handlerLoad(event) {
    event.target.focus();
    if (this._validateInput()) {
      var _refs$datesFragment$g = this.refs.datesFragment.getValues();

      var fromDate = _refs$datesFragment$g.fromDate;
      var toDate = _refs$datesFragment$g.toDate;

      var option = {
        value: this.state.stock.value,
        stock: this.state.stock,
        fromDate: fromDate,
        toDate: toDate
      };
      this.props.onLoad(option);
    }
    this.setState(this.state);
  },

  _validateInput: function _validateInput() {
    var result = true;
    this.state.validationMessages = [];

    if (!this.state.stock) {
      this.state.validationMessages.push("Stock is Required to Select");
      result = false;
    }

    if (!this.refs.datesFragment.isValid()) {
      this.state.validationMessages.push("Some Date is not in Valid Format");
      result = false;
    }

    return result;
  },

  render: function render() {
    var commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
      key: 'a',
      type: 'TypeC',
      caption: 'Load',
      onClick: this._handlerLoad
    })];

    var _props = this.props;
    var caption = _props.caption;
    var isShow = _props.isShow;
    var onShow = _props.onShow;
    var onClose = _props.onClose;
    var optionStocks = _props.optionStocks;
    var initFromDate = _props.initFromDate;
    var initToDate = _props.initToDate;
    var onTestDate = _props.onTestDate;
    var validationMessages = this.state.validationMessages;


    return _react2.default.createElement(
      _ZhDialog2.default,
      {
        caption: caption,
        isShow: isShow,
        commandButtons: commandButtons,
        onShowChart: onShow,
        onClose: onClose
      },
      _react2.default.createElement(
        'div',
        { style: styles.rowDiv, key: '1' },
        _react2.default.createElement(
          'span',
          { style: styles.labelSpan },
          'Stock:'
        ),
        _react2.default.createElement(_ZhSelect2.default, {
          width: '250',
          onSelect: this._handlerSelectStock,
          options: optionStocks
        })
      ),
      _react2.default.createElement(_DatesFragment2.default, {
        key: '2',
        ref: 'datesFragment',
        initFromDate: initFromDate,
        initToDate: initToDate,
        onTestDate: onTestDate
      }),
      _react2.default.createElement(_ValidationMessagesFragment2.default, {
        key: '3',
        validationMessages: validationMessages
      })
    );
  }
});

exports.default = DialogType3;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\dialogs\DialogType3.js.map