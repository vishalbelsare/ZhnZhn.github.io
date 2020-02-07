"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ButtonCircle = _interopRequireDefault(require("../zhn/ButtonCircle"));

/*
const S = {
  BT: {
    color: '#7cb5ec',
    borderColor: '#7cb5ec'
  }
};
*/
var BtCounter = function BtCounter(_ref, ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      title = _ref.title,
      _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? 1 : _ref$initialValue,
      _ref$maxValue = _ref.maxValue,
      maxValue = _ref$maxValue === void 0 ? 4 : _ref$maxValue;

  var _useState = (0, _react.useState)(initialValue),
      value = _useState[0],
      setValue = _useState[1],
      _onClick = (0, _react.useCallback)(function () {
    if (value < maxValue) {
      setValue(function (v) {
        return v + 1;
      });
    } else {
      setValue(1);
    }
  }, [value, maxValue]);

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        return value;
      }
    };
  }, [value]);
  return isShow ? _react["default"].createElement(_ButtonCircle["default"], {
    style: style,
    title: title,
    caption: value,
    onClick: _onClick
  }) : null;
};

var _default = _react["default"].forwardRef(BtCounter);

exports["default"] = _default;
//# sourceMappingURL=BtCounter.js.map