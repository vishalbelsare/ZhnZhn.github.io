'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHART = {
  SCATTER_MARGIN_BOTTOM: 24,
  LONG_FORM: {
    chart: {
      marginBottom: 40
    },
    credits: {
      enabled: true
    }
  }
};

var _checkIsWithScatter = function _checkIsWithScatter(chart) {
  var max = chart.series.length;
  var i = 0;
  for (; i < max; i++) {
    var seria = chart.series[i];
    if (seria.visible && seria.options.type === 'scatter' && seria.options.data && seria.options.data.length > 0) {
      return true;
    }
  }
  return false;
};

var _fOptionShortForm = function _fOptionShortForm() {
  var marginBottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return {
    chart: {
      spacingBottom: 0,
      marginBottom: marginBottom
    },
    credits: {
      enabled: false
    }
  };
};

var WithAreaChartFn = {
  arMetricOption: function arMetricOption(chart, isShow) {
    if (!isShow) {
      if (!_checkIsWithScatter(chart)) {
        return _fOptionShortForm();
      } else {
        return _fOptionShortForm(CHART.SCATTER_MARGIN_BOTTOM);
      }
    } else {
      return CHART.LONG_FORM;
    }
  },
  arCalcDeltaYAxis: function arCalcDeltaYAxis(chart) {
    var yAxis = chart.yAxis[1],
        _yAxis$getExtremes = yAxis.getExtremes(),
        max = _yAxis$getExtremes.max,
        _maxLen = max ? ('' + max).length : 0,
        _maxLabelLenght = yAxis.maxLabelLength;


    return _maxLen !== 0
    //? 10*_maxLen + 25 - (_maxLen - 1)
    ? 25 + Math.round(_maxLabelLenght) : 0;
  }
};

exports.default = WithAreaChartFn;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\charts\WithAreaChartFn.js.map