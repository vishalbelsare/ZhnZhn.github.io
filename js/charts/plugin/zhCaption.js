"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var S = {
  TEXT: {
    color: 'black',
    'font-size': '16px',
    'font-weight': 800
  },
  INLINE: {
    display: 'inline'
  },
  NONE: {
    display: 'none'
  }
};
var C = {
  HIDE: {
    chart: {
      spacingTop: 0,
      marginTop: 18
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      style: {
        display: 'none'
      }
    },
    title: {
      style: {
        display: 'none'
      }
    }
  },
  SHOW: {
    chart: {
      spacingTop: 25,
      marginTop: 70
    },
    exporting: {
      enabled: true
    },
    subtitle: {
      style: {
        display: 'inline-block'
      }
    },
    title: {
      style: {
        display: 'inline-block'
      }
    }
  }
};
var PN = {
  TITLE: 'zhElTitle',
  SUBTITLE: 'zhElSubtitle'
};

var _renderTextTo = function _renderTextTo(chart, objText, x, y, propName) {
  var _el = chart[propName];

  if (_el && _el.css) {
    _el.css((0, _extends2["default"])({}, S.INLINE));

    return;
  }

  var _ref = objText || {},
      text = _ref.text;

  if (text) {
    chart[propName] = chart.renderer.text(text, x, y).css((0, _extends2["default"])({}, S.TEXT)).add();
  }
};

var _hideEl = function _hideEl(chart, propName) {
  var _el = chart[propName];

  if (_el && _el.css) {
    _el.css((0, _extends2["default"])({}, S.NONE));
  }
};

var zhCaption = function zhCaption(Chart) {
  Chart.prototype.zhHideCaption = function () {
    try {
      var _height = this.chartHeight - 40;

      this.update(C.HIDE, false);
      this.setSize(null, _height, true);
      var _ = this.options;

      _renderTextTo(this, _.title, 40, 70, PN.TITLE);

      _renderTextTo(this, _.subtitle, 40, 90, PN.SUBTITLE);
    } catch (err) {
      console.log(err.msg);
    }
  };

  Chart.prototype.zhShowCaption = function () {
    try {
      var _height = this.chartHeight + 40;

      this.update(C.SHOW, false);
      this.setSize(null, _height, true);

      _hideEl(this, PN.TITLE);

      _hideEl(this, PN.SUBTITLE);
    } catch (err) {
      console.log(err.msg);
    }
  };
};

var _default = zhCaption;
exports["default"] = _default;
//# sourceMappingURL=zhCaption.js.map