"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));

var _LabelNew = _interopRequireDefault(require("./LabelNew"));

var _MenuBadge = _interopRequireDefault(require("./MenuBadge"));

var _MenuTopic = _interopRequireDefault(require("./MenuTopic"));

var CL_ROW = "row__topic not-selected";
var S = {
  MP_LEVEL_2: {
    paddingLeft: 6
  },
  OPEN_COLOR: "#80c040"
};
var _isArr = Array.isArray;

var MenuItem = function MenuItem(_ref) {
  var title = _ref.title,
      counter = _ref.counter,
      isNew = _ref.isNew,
      isOpen = _ref.isOpen,
      onBadgeClick = _ref.onBadgeClick,
      onBadgeClose = _ref.onBadgeClose,
      onClick = _ref.onClick;

  var _hKeyDown = (0, _useKeyEnter["default"])(onClick);

  return /*#__PURE__*/_react["default"].createElement("div", {
    tabIndex: "0",
    role: "menuitem",
    className: CL_ROW,
    onClick: onClick,
    onKeyDown: _hKeyDown
  }, title, counter !== 0 ? /*#__PURE__*/_react["default"].createElement(_MenuBadge["default"], {
    counter: counter,
    isOpen: isOpen,
    onClick: onBadgeClick,
    onBadgeClose: onBadgeClose
  }) : null, isNew ? /*#__PURE__*/_react["default"].createElement(_LabelNew["default"], null) : null);
};

var MenuItems = function MenuItems(_ref2) {
  var items = _ref2.items;
  return items.map(function (item, index) {
    return _isArr(item.items) ? /*#__PURE__*/_react["default"].createElement(_MenuTopic["default"], (0, _extends2["default"])({}, item, {
      key: index,
      style: S.MP_LEVEL_2,
      openColor: S.OPEN_COLOR
    })) : /*#__PURE__*/_react["default"].createElement(MenuItem, (0, _extends2["default"])({}, item, {
      key: index
    }));
  });
};

var _default = MenuItems;
exports["default"] = _default;
//# sourceMappingURL=MenuItems.js.map