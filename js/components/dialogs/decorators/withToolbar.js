"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _withSet = _interopRequireDefault(require("./withSet"));

var _withToggle = _interopRequireDefault(require("./withToggle"));

var C = {
  BT_I: {
    M: '_clickInfoWithToolbar',
    BT_C: 'A',
    BT_T: 'About Datasource'
  },
  BT_L: {
    M_T: '_clickLabelWithToolbar',
    PN: 'isShowLabels',
    BT_C: 'L',
    BT_T: "Click to toggle input labels"
  },
  BT_V: {
    M_T: '_clickValueWithToolbar',
    PN: 'isValue',
    BT_C: 'V',
    BT_T: "Click to toggle row value"
  },
  BT_D: {
    M_T: '_clickDateWithToolbar',
    PN: 'isShowDate',
    BT_C: 'D',
    BT_T: "Click to toggle date input"
  },
  BT_O: {
    M: 'Options',
    PN: 'isOptions',
    BT_C: 'O',
    BT_T: 'Chart Options'
  },
  BT_T: {
    M: 'Toggle',
    PN: 'isToggle',
    BT_C: 'T',
    BT_T: 'Toggle Inputs'
  },
  BT_TO: {
    M_T: '_toggleOptionWithToolbar',
    PN: 'isToggleOptions',
    BT_C: 'O',
    BT_T: "Click to toggle dialog's options"
  },
  BT_SO: {
    M_T: '_clickOptionsWithToolbar',
    PN: 'isShowOptions',
    BT_C: 'O',
    BT_T: "Toggle Input Options"
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _addBtTo = function _addBtTo(arr, CONF, onClick) {
  arr.push({
    caption: CONF.BT_C,
    title: CONF.BT_T,
    onClick: onClick
  });
};

var _addToggleBt = function _addToggleBt(_ref) {
  var inst = _ref.inst,
      buttons = _ref.buttons,
      key = _ref.key;
  var _toggle = inst._toggleStateByWithToggle,
      CONF = C[key];
  inst[CONF.M_T] = _toggle.bind(inst, CONF.PN);

  _addBtTo(buttons, CONF, inst[CONF.M_T]);
};

var _addShowHideBt = function _addShowHideBt(_ref2) {
  var inst = _ref2.inst,
      buttons = _ref2.buttons,
      key = _ref2.key;

  var _set = inst._setStateByWithSet,
      CONF = C[key],
      _hidePn = "_hide" + CONF.M + "WithToolbar",
      _showPn = "_show" + CONF.M + "WithToolbar";

  inst[_hidePn] = _set.bind(inst, CONF.PN, false);
  inst[_showPn] = _set.bind(inst, CONF.PN, true);

  _addBtTo(buttons, CONF, inst[_showPn]);
};

var _createType2WithToolbar = function _createType2WithToolbar(props, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp,
      noDate = _ref3.noDate,
      noLabels = _ref3.noLabels,
      isValue = _ref3.isValue,
      isOptions = _ref3.isOptions,
      isToggle = _ref3.isToggle,
      isToggleOptions = _ref3.isToggleOptions,
      isShowOptions = _ref3.isShowOptions;

  var buttons = [];

  if (!noLabels) {
    _addToggleBt({
      inst: this,
      buttons: buttons,
      key: 'BT_L'
    });
  }

  if (isValue) {
    _addToggleBt({
      inst: this,
      buttons: buttons,
      key: 'BT_V'
    });
  }

  if (isToggle) {
    _addShowHideBt({
      inst: this,
      buttons: buttons,
      key: 'BT_T'
    });
  }

  if (!props.noDate && !noDate) {
    _addToggleBt({
      inst: this,
      buttons: buttons,
      key: 'BT_D'
    });
  }

  if (isOptions) {
    _addShowHideBt({
      inst: this,
      buttons: buttons,
      key: 'BT_O'
    });

    this.dialogOptions = {};
    this._toggleOptionWithToolbar = this._toggleOptionWithToolbar.bind(this);
  } //AlphaIntradayDialog


  if (isToggleOptions) {
    _addToggleBt({
      inst: this,
      buttons: buttons,
      key: 'BT_TO'
    });
  }

  if (isShowOptions) {
    _addToggleBt({
      inst: this,
      buttons: buttons,
      key: 'BT_SO'
    });
  }

  if (_isFn(props.onClickInfo)) {
    _addBtTo(buttons, C.BT_I, this._clickInfoWithToolbar.bind(this));
  }

  return buttons;
};

var _toggleWithToolbar = function _toggleWithToolbar() {
  this.setState(function (prevState) {
    return {
      isToolbar: !prevState.isToolbar
    };
  });
};

var _clickInfoWithToolbar = function _clickInfoWithToolbar() {
  var onClickInfo = this.props.onClickInfo;
  onClickInfo();
};

var _toggleOptionWithToolbar = function _toggleOptionWithToolbar(propName) {
  this.dialogOptions[propName] = !this.dialogOptions[propName];
};

var withToolbar = function withToolbar(target) {
  (0, _withSet["default"])(target);
  (0, _withToggle["default"])(target);
  Object.assign(target.prototype, {
    _toggleWithToolbar: _toggleWithToolbar,
    _createType2WithToolbar: _createType2WithToolbar,
    _clickInfoWithToolbar: _clickInfoWithToolbar,
    _toggleOptionWithToolbar: _toggleOptionWithToolbar
  });
};

var _default = withToolbar;
exports["default"] = _default;
//# sourceMappingURL=withToolbar.js.map