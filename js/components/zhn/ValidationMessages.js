'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = _DialogStyles2.default;
var STYLE = {
  MSG_SPAN: {
    whiteSpace: 'pre',
    fontWeight: 'bold'
  }
};

var ValidationMessages = (_temp2 = _class = function (_Component) {
  _inherits(ValidationMessages, _Component);

  function ValidationMessages() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ValidationMessages);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ValidationMessages.__proto__ || Object.getPrototypeOf(ValidationMessages)).call.apply(_ref, [this].concat(args))), _this), _this._renderValidationMessages = function (validationMessages) {
      return validationMessages.map(function (msg, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'div',
            { style: styles.validationMessageNumber },
            index + 1
          ),
          _react2.default.createElement(
            'span',
            { style: STYLE.MSG_SPAN },
            msg
          )
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ValidationMessages, [{
    key: 'render',
    value: function render() {
      var validationMessages = this.props.validationMessages;

      return _react2.default.createElement(
        'div',
        { style: styles.validationContainer },
        this._renderValidationMessages(validationMessages)
      );
    }
  }]);

  return ValidationMessages;
}(_react.Component), _class.propTypes = {
  validationMessages: _react.PropTypes.array
}, _class.defaultProps = {
  validationMessages: []
}, _temp2);
exports.default = ValidationMessages;
//# sourceMappingURL=ValidationMessages.js.map