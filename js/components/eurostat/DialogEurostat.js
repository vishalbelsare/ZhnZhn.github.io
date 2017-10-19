'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;
//import PropTypes from "prop-types";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DialogCell = require('../dialogs/DialogCell');

var _DialogCell2 = _interopRequireDefault(_DialogCell);

var _Decorators = require('../dialogs/decorators/Decorators');

var _Decorators2 = _interopRequireDefault(_Decorators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogEurostat = (_dec = _Decorators2.default.withToolbar, _dec2 = _Decorators2.default.withValidationLoad, _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(DialogEurostat, _Component);

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
      msgOnNotSelected: PropTypes.func,
    onShow: PropTypes.func,
    loadFn: PropTypes.func
  }
  */

  function DialogEurostat(props) {
    (0, _classCallCheck3.default)(this, DialogEurostat);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialogEurostat.__proto__ || Object.getPrototypeOf(DialogEurostat)).call(this));

    _this._handleSelectOne = function (one) {
      _this.one = one;
    };

    _this._handleSelectTwo = function (two) {
      _this.two = two;
    };

    _this._handleLoad = function () {
      _this._handleWithValidationLoad(_this._createValidationMessages(), _this._createLoadOption);
    };

    _this._createValidationMessages = function () {
      var _this$props = _this.props,
          oneCaption = _this$props.oneCaption,
          twoCaption = _this$props.twoCaption;

      var msg = [];

      if (!_this.one) {
        msg.push(_this.props.msgOnNotSelected(oneCaption));
      }
      if (!_this.two) {
        msg.push(_this.props.msgOnNotSelected(twoCaption));
      }

      msg.isValid = msg.length === 0 ? true : false;
      return msg;
    };

    _this._createLoadOption = function () {
      return _this.props.loadFn(_this.props, { one: _this.one, two: _this.two });
    };

    _this._handleClose = function () {
      _this._handleWithValidationClose(_this._createValidationMessages);
      _this.props.onClose();
    };

    _this.one = undefined;
    _this.two = undefined;
    _this.toolbarButtons = [{ caption: 'I', onClick: _this._clickInfoWithToolbar.bind(_this) }];
    _this._commandButtons = [_react2.default.createElement(_DialogCell2.default.Button.Load, { onClick: _this._handleLoad })];
    _this.state = {
      validationMessages: []
    };
    return _this;
  }

  (0, _createClass3.default)(DialogEurostat, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props !== nextProps) {
        if (this.props.isShow === nextProps.isShow) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          isShow = _props.isShow,
          onShow = _props.onShow,
          onFront = _props.onFront,
          oneCaption = _props.oneCaption,
          oneURI = _props.oneURI,
          oneJsonProp = _props.oneJsonProp,
          twoCaption = _props.twoCaption,
          twoURI = _props.twoURI,
          twoJsonProp = _props.twoJsonProp,
          validationMessages = this.state.validationMessages;


      return _react2.default.createElement(
        _DialogCell2.default.DraggableDialog,
        {
          caption: caption,
          isShow: isShow,
          commandButtons: this._commandButtons,
          onShowChart: onShow,
          onFront: onFront,
          onClose: this._handleClose
        },
        _react2.default.createElement(_DialogCell2.default.ToolbarButtonCircle, {
          buttons: this.toolbarButtons
        }),
        _react2.default.createElement(_DialogCell2.default.SelectWithLoad, {
          isShow: isShow,
          uri: oneURI,
          jsonProp: oneJsonProp,
          caption: oneCaption,
          optionNames: 'Items',
          onSelect: this._handleSelectOne
        }),
        _react2.default.createElement(_DialogCell2.default.SelectWithLoad, {
          isShow: isShow,
          uri: twoURI,
          jsonProp: twoJsonProp,
          caption: twoCaption,
          optionNames: 'Items',
          onSelect: this._handleSelectTwo
        }),
        _react2.default.createElement(_DialogCell2.default.ValidationMessages, {
          validationMessages: validationMessages
        })
      );
    }
  }]);
  return DialogEurostat;
}(_react.Component)) || _class) || _class);
exports.default = DialogEurostat;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\eurostat\DialogEurostat.js.map