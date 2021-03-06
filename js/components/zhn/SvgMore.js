"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var CL_BT_MORE = 'bt-more';
var S = {
  SVG: {
    fill: 'black',
    stroke: 'black'
  }
};

var SvgMore = function SvgMore(_ref) {
  var style = _ref.style,
      svgStyle = _ref.svgStyle,
      btRef = _ref.btRef,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    ref: btRef,
    className: CL_BT_MORE,
    style: style,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    style: (0, _extends2["default"])({}, S.SVG, svgStyle),
    width: "6px",
    height: "22px",
    viewBox: "0 0 6 22",
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "3",
    cy: "4",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "3",
    cy: "11",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "3",
    cy: "18",
    r: "2"
  })));
};

var _default = SvgMore;
exports["default"] = _default;
//# sourceMappingURL=SvgMore.js.map