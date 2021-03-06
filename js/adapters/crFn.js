"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var crFn = {
  crError: function crError(errCaption, message) {
    if (errCaption === void 0) {
      errCaption = '';
    }

    if (message === void 0) {
      message = '';
    }

    return {
      errCaption: errCaption,
      message: message
    };
  },
  crId: function crId() {
    return (Date.now().toString(36) + Math.random().toString(36).substring(2, 9)).toUpperCase();
  },
  crItemLink: function crItemLink(caption, itemUrl) {
    return "<p><a href=\"" + itemUrl + "\" style=\"padding-top: 4px;\">" + caption + "</a></p>";
  }
};
var _default = crFn;
exports["default"] = _default;
//# sourceMappingURL=crFn.js.map