"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ButtonCircle = _interopRequireDefault(require("../zhn/ButtonCircle"));

var CL_BT = "bt__watch__bar";
var S = {
  ROOT: {
    marginBottom: 10
  },
  BT_LIST: {
    marginLeft: 20
  }
};

var EditBar = function EditBar(_ref) {
  var isShow = _ref.isShow,
      onClickGroup = _ref.onClickGroup,
      onClickList = _ref.onClickList;
  return isShow ? /*#__PURE__*/_react["default"].createElement("div", {
    style: S.ROOT
  }, /*#__PURE__*/_react["default"].createElement(_ButtonCircle["default"], {
    caption: "GROUP",
    isOverwriteClass: true,
    className: CL_BT,
    onClick: onClickGroup
  }), /*#__PURE__*/_react["default"].createElement(_ButtonCircle["default"], {
    caption: "LIST",
    isOverwriteClass: true,
    className: CL_BT,
    style: S.BT_LIST,
    onClick: onClickList
  })) : null;
};

var _default = EditBar;
exports["default"] = _default;
//# sourceMappingURL=EditBar.js.map