"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var S = {
  BT: {
    color: '#1b2836'
  }
}; //for light
//0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.3)

var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(CSS_RULE) {
    return (0, _extends2["default"])({}, S, {
      ROOT: (0, _extends2["default"])({}, CSS_RULE.BG)
    });
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=ConfigHeaderBar.js.map