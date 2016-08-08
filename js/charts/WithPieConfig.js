'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Chart = require('./Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithPieConfig = {
  fBasePieConfig: function fBasePieConfig() {
    return {
      zhSeries: {
        count: 0
      },
      zhDetailCharts: [],

      credits: _Chart2.default.fCreditsRightBottom(),
      title: _Chart2.default.fTitle({ y: _Chart2.default.SEMIDONUT_TITLE_Y }),
      subtitle: _Chart2.default.fSubtitle({ y: _Chart2.default.SEMIDONUT_SUBTITLE_Y }),
      legend: _Chart2.default.fLegend()
    };
  },
  fInnerPieSeria: function fInnerPieSeria(_ref) {
    var center = _ref.center;
    var year = _ref.year;
    var bTotal = _ref.bTotal;

    return {
      type: 'pie',
      borderColor: 'transparent',
      colors: ['transparent'],
      center: center,
      //size : '60%',
      size: 250 * 0.6,
      startAngle: -90,
      endAngle: 90,
      data: [{
        name: '<span style="color:#A487D4;">' + year + '</span><br/>' + bTotal.toString(),
        y: 1
      }],
      dataLabels: {
        enabled: true,
        distance: -70,
        style: {
          fontWeight: 'bold',
          fontSize: '18px',
          color: 'black',
          textShadow: 'none;'
        }
      }
    };
  },
  fOuterPieSeria: function fOuterPieSeria(_ref2) {
    var zhSeriaId = _ref2.zhSeriaId;
    var center = _ref2.center;
    var data = _ref2.data;
    var _ref2$isDataLabels = _ref2.isDataLabels;
    var isDataLabels = _ref2$isDataLabels === undefined ? false : _ref2$isDataLabels;
    var _ref2$isShowInLegend = _ref2.isShowInLegend;
    var isShowInLegend = _ref2$isShowInLegend === undefined ? false : _ref2$isShowInLegend;

    return {
      zhSeriaId: zhSeriaId,
      type: 'pie',
      colorByPoint: true,
      allowPointSelect: true,
      borderColor: null,
      center: center,

      //size : '100%',
      size: 250,
      //innerSize : '60%',
      innerSize: 250 * 0.6,
      startAngle: -90,
      endAngle: 90,
      showInLegend: isShowInLegend,
      data: data,
      dataLabels: {
        enabled: isDataLabels,
        distance: -5
      },

      tooltip: _Chart2.default.fTooltip(_Tooltip2.default.fnPiePointFormatter)

    };
  }
};

exports.default = WithPieConfig;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\charts\WithPieConfig.js.map