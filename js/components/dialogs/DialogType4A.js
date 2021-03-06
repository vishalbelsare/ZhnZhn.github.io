"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _DialogCell = _interopRequireDefault(require("./DialogCell"));

var _dec, _class, _temp;

var Decor = _DialogCell["default"].Decor,
    crMenuMore = _DialogCell["default"].crMenuMore;
var HAS_SECOND_Y_AXIS = 'hasSecondYAxis';
var DialogType4A = (_dec = Decor.dialog, _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DialogType4A, _Component);

  function DialogType4A(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleLoad = function () {
      _this._handleWithValidationLoad(_this._createValidationMessages(), _this._createLoadOption);
    };

    _this._createValidationMessages = function () {
      var msg = [];

      var _this$oneTwo$getValid = _this.oneTwo.getValidation(),
          isValid1 = _this$oneTwo$getValid.isValid,
          msg1 = _this$oneTwo$getValid.msg;

      if (!isValid1) {
        msg = msg.concat(msg1);
      }

      var _this$datesFragment$g = _this.datesFragment.getValidation(),
          isValid = _this$datesFragment$g.isValid,
          datesMsg = _this$datesFragment$g.datesMsg;

      if (!isValid) {
        msg = msg.concat(datesMsg);
      }

      msg.isValid = msg.length === 0 ? true : false;
      return msg;
    };

    _this._createLoadOption = function () {
      var _this$oneTwo$getValue = _this.oneTwo.getValues(),
          one = _this$oneTwo$getValue.one,
          two = _this$oneTwo$getValue.two,
          _this$datesFragment$g2 = _this.datesFragment.getValues(),
          fromDate = _this$datesFragment$g2.fromDate,
          toDate = _this$datesFragment$g2.toDate;

      return _this.props.loadFn(_this.props, {
        one: one,
        two: two,
        fromDate: fromDate,
        toDate: toDate,
        hasSecondYAxis: _this[HAS_SECOND_Y_AXIS]
      });
    };

    _this._handleClose = function () {
      _this._handleWithValidationClose();
    };

    _this._handleMode = function (propName, value) {
      _this[propName] = value;
    };

    _this._refOneTwo = function (c) {
      return _this.oneTwo = c;
    };

    _this._refDates = function (c) {
      return _this.datesFragment = c;
    };

    _this._menuMore = crMenuMore((0, _assertThisInitialized2["default"])(_this), {
      toggleToolBar: _this._toggleWithToolbar,
      onAbout: _this._clickInfoWithToolbar
    });
    _this.toolbarButtons = _this._createType2WithToolbar(props, {
      isShowOptions: true
    });
    _this[HAS_SECOND_Y_AXIS] = false;
    _this._commandButtons = _this._crCommandsWithLoad((0, _assertThisInitialized2["default"])(_this));
    _this.state = (0, _extends2["default"])({}, _this._isWithInitialState(), {
      isShowOptions: false
    });
    return _this;
  }

  var _proto = DialogType4A.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      if (this.props.isShow === nextProps.isShow) {
        return false;
      }
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        caption = _this$props.caption,
        oneCaption = _this$props.oneCaption,
        oneURI = _this$props.oneURI,
        oneJsonProp = _this$props.oneJsonProp,
        twoCaption = _this$props.twoCaption,
        msgOnNotSelected = _this$props.msgOnNotSelected,
        isShow = _this$props.isShow,
        onShow = _this$props.onShow,
        onFront = _this$props.onFront,
        initFromDate = _this$props.initFromDate,
        initToDate = _this$props.initToDate,
        msgOnNotValidFormat = _this$props.msgOnNotValidFormat,
        onTestDate = _this$props.onTestDate,
        _this$state = this.state,
        isToolbar = _this$state.isToolbar,
        isShowLabels = _this$state.isShowLabels,
        isShowDate = _this$state.isShowDate,
        isShowOptions = _this$state.isShowOptions,
        validationMessages = _this$state.validationMessages;
    return /*#__PURE__*/_react["default"].createElement(_DialogCell["default"].DraggableDialog, {
      isShow: isShow,
      caption: caption,
      menuModel: this._menuMore,
      commandButtons: this._commandButtons,
      onShowChart: onShow,
      onFront: onFront,
      onClose: this._handleClose
    }, /*#__PURE__*/_react["default"].createElement(_DialogCell["default"].Toolbar, {
      isShow: isToolbar,
      buttons: this.toolbarButtons
    }), /*#__PURE__*/_react["default"].createElement(_DialogCell["default"].SelectOneTwo, {
      ref: this._refOneTwo,
      isShow: isShow,
      isShowLabels: isShowLabels,
      uri: oneURI,
      oneCaption: oneCaption,
      oneJsonProp: oneJsonProp,
      twoCaption: twoCaption,
      msgOnNotSelected: msgOnNotSelected
    }), /*#__PURE__*/_react["default"].createElement(_DialogCell["default"].ShowHide, {
      isShow: isShowDate
    }, /*#__PURE__*/_react["default"].createElement(_DialogCell["default"].DatesFragment, {
      ref: this._refDates,
      isShowLabels: isShowLabels,
      initFromDate: initFromDate,
      initToDate: initToDate,
      msgOnNotValidFormat: msgOnNotValidFormat,
      onTestDate: onTestDate
    })), /*#__PURE__*/_react["default"].createElement(_DialogCell["default"].ShowHide, {
      isShow: isShowOptions
    }, /*#__PURE__*/_react["default"].createElement(_DialogCell["default"].RowCheckBox, {
      initValue: false,
      caption: "Add Seria with Second YAxis",
      onCheck: this._handleMode.bind(null, HAS_SECOND_Y_AXIS, true),
      onUnCheck: this._handleMode.bind(null, HAS_SECOND_Y_AXIS, false)
    })), /*#__PURE__*/_react["default"].createElement(_DialogCell["default"].ValidationMessages, {
      validationMessages: validationMessages
    }));
  };

  return DialogType4A;
}(_react.Component), _temp)) || _class);
var _default = DialogType4A;
exports["default"] = _default;
//# sourceMappingURL=DialogType4A.js.map