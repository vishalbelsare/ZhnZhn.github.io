"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CL = {
  ROOT: 'svg-move',
  SVG: 'svg-move__svg svg-down'
};

var SvgDown = function SvgDown() {
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: CL.ROOT
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 12 12",
    width: "100%",
    height: "100%",
    className: CL.SVG,
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0,0 L 6,4 11,0 6,12, 0,0"
  })));
};

var _default = SvgDown;
exports["default"] = _default;
//# sourceMappingURL=SvgDown.js.map