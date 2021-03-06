"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var INITIAL_WIDTH = 635,
    _isInnerWidth = function _isInnerWidth() {
  return window && window.innerWidth;
},
    _strWidth = window && window.getComputedStyle(document.body, ':after').getPropertyValue('content'),
    _isTouchable = function _isTouchable() {
  return document && 'ontouchstart' in document.documentElement;
};

var has = {
  strWidth: _strWidth,
  isWideWidth: _strWidth.indexOf('W') === -1,
  touch: _isTouchable(),
  wideWidth: function wideWidth() {
    return _isInnerWidth() ? window.innerWidth > 700 : true;
  },
  getWidth: function getWidth(initialWidth) {
    if (initialWidth === void 0) {
      initialWidth = INITIAL_WIDTH;
    }

    return _isInnerWidth() ? window.innerWidth - 16 : initialWidth;
  },
  initWidthStyle: function initWidthStyle(initialWidth, minWidth) {
    if (initialWidth === void 0) {
      initialWidth = INITIAL_WIDTH;
    }

    if (minWidth === void 0) {
      minWidth = 0;
    }

    if (has.wideWidth()) {
      return {
        width: initialWidth
      };
    }

    var width = has.getWidth(initialWidth);
    return width > minWidth ? {
      width: width
    } : {
      width: minWidth
    };
  }
};
var _default = has;
exports["default"] = _default;
//# sourceMappingURL=has.js.map