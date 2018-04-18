"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HIDE_PERIOD = 300000,
    ANIMATION_PERIOD = 1100,
    MSG = "Can web app ERC collect Your general user's statistics for finding most popular topics by applying Google Analytics with anonymizing IP address?",
    BT_YES = "Yes",
    BT_VIEW = "Only AppView Event",
    BT_NO = "No";

var CL = {
  ROOT: "consent",
  ROW: "consent__row",
  MSG: "consent__msg",
  BT: "consent__btn"
};
var S = {
  SHOW: {
    opacity: "0.9"
  },
  HIDE: {
    display: "none"
  }
};

var ConsentCookiePopup = function (_Component) {
  (0, _inherits3.default)(ConsentCookiePopup, _Component);

  function ConsentCookiePopup() {
    (0, _classCallCheck3.default)(this, ConsentCookiePopup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConsentCookiePopup.__proto__ || Object.getPrototypeOf(ConsentCookiePopup)).call(this));

    _this._startHidingAnimation = function () {
      _this.hideID = setTimeout(_this._hidePopup, ANIMATION_PERIOD);
      _this.setState({ isOpacity: true });
    };

    _this._hidePopup = function () {
      _this.setState({ isDisplay: false });
    };

    _this._hClickOk = function () {
      if (!_this.hideId) {
        clearTimeout(_this.timeID);
        _this.props.onAnswerYes();
        _this._startHidingAnimation();
      }
    };

    _this._hClickView = function () {
      if (!_this.hideId) {
        clearTimeout(_this.timeID);
        _this.props.onAnswerView();
        _this._startHidingAnimation();
      }
    };

    _this._hClickNo = function () {
      if (!_this.hideId) {
        clearTimeout(_this.timeID);
        _this.props.onAnswerNo();
        _this._startHidingAnimation();
      }
    };

    _this._refBtView = function (bt) {
      return _this._btView = bt;
    };

    _this.timeID = undefined;
    _this.hideID = undefined;
    _this.state = {
      isOpacity: true,
      isDisplay: true
    };
    return _this;
  }

  (0, _createClass3.default)(ConsentCookiePopup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeID = setTimeout(function () {
        _this2.props.onNoAnswer();
        _this2._startHidingAnimation();
      }, HIDE_PERIOD);

      setTimeout(function () {
        _this2.setState({ isOpacity: false });
      }, 500);
      if (this._btView) {
        this._btView.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          isOpacity = _state.isOpacity,
          isDisplay = _state.isDisplay,
          _opacityStyle = isOpacity ? undefined : S.SHOW,
          _displayStyle = isDisplay ? undefined : S.HIDE;

      return _react2.default.createElement(
        "div",
        {
          className: CL.ROOT,
          style: (0, _extends3.default)({}, _opacityStyle, _displayStyle)
        },
        _react2.default.createElement(
          "p",
          { className: CL.MSG },
          MSG
        ),
        _react2.default.createElement(
          "div",
          { className: CL.ROW },
          _react2.default.createElement(
            "button",
            {
              className: CL.BT,
              onClick: this._hClickOk
            },
            BT_YES
          ),
          _react2.default.createElement(
            "button",
            {
              ref: this._refBtView,
              className: CL.BT,
              onClick: this._hClickView
            },
            BT_VIEW
          ),
          _react2.default.createElement(
            "button",
            {
              className: CL.BT,
              onClick: this._hClickNo
            },
            BT_NO
          )
        )
      );
    }
  }]);
  return ConsentCookiePopup;
}(_react.Component);

exports.default = ConsentCookiePopup;
//# sourceMappingURL=ConsentCookiePopup.js.map