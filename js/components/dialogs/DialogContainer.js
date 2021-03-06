"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ModalDialogContainer = _interopRequireDefault(require("../zhn-containers/ModalDialogContainer"));

var _ComponentActions = require("../../flux/actions/ComponentActions");

var _RouterModalDialog = _interopRequireDefault(require("./RouterModalDialog"));

//import PropTypes from "prop-types";
var DialogContainer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DialogContainer, _Component);

  function DialogContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isShow: false,
      inits: {},
      shows: {},
      data: {},
      dialogs: [],
      currentDialog: null
    };

    _this._setTypeTo = function (prevState, type, option) {
      prevState.shows[type] = true;
      prevState.data[type] = option;
      prevState.isShow = true;
      prevState.currentDialog = type;
      return prevState;
    };

    _this._onStore = function (actionType, option) {
      if (actionType === _ComponentActions.ComponentActionTypes.SHOW_MODAL_DIALOG) {
        var type = option.modalDialogType,
            inits = _this.state.inits;

        if (inits[type]) {
          _this.setState(function (prevState) {
            return _this._setTypeTo(prevState, type, option);
          });
        } else {
          _RouterModalDialog["default"].getDialog(type).then(function (comp) {
            return _this.setState(function (prevState) {
              prevState.dialogs.push({
                type: type,
                comp: comp
              });
              prevState.inits[type] = true;
              return _this._setTypeTo(prevState, type, option);
            });
          });
        }
      }
    };

    _this._handleClose = function (type) {
      _this.setState(function (prevState) {
        prevState.shows[type] = false;
        prevState.isShow = false;
        prevState.currentDialog = null;
        return prevState;
      });
    };

    _this._renderDialogs = function () {
      var store = _this.props.store,
          _this$state = _this.state,
          shows = _this$state.shows,
          data = _this$state.data,
          dialogs = _this$state.dialogs;
      return dialogs.map(function (dialog) {
        var type = dialog.type,
            comp = dialog.comp;
        return /*#__PURE__*/_react["default"].createElement(comp, {
          key: type,
          isShow: shows[type],
          data: data[type],
          store: store,
          onClose: _this._handleClose.bind(null, type)
        });
      });
    };

    return _this;
  }

  var _proto = DialogContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var _this$state2 = this.state,
        isShow = _this$state2.isShow,
        currentDialog = _this$state2.currentDialog;
    return /*#__PURE__*/_react["default"].createElement(_ModalDialogContainer["default"], {
      isShow: isShow,
      onClose: this._handleClose.bind(null, currentDialog)
    }, this._renderDialogs());
  };

  return DialogContainer;
}(_react.Component);

var _default = DialogContainer;
exports["default"] = _default;
//# sourceMappingURL=DialogContainer.js.map