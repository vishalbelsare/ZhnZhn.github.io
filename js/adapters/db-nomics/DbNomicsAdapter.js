'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ConfigBuilder = require('../../charts/ConfigBuilder');

var _ConfigBuilder2 = _interopRequireDefault(_ConfigBuilder);

var _fnAdapter = require('./fnAdapter');

var _fnAdapter2 = _interopRequireDefault(_fnAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crData = _fnAdapter2.default.crData,
    crTitle = _fnAdapter2.default.crTitle,
    findMaxY = _fnAdapter2.default.findMaxY,
    findMinY = _fnAdapter2.default.findMinY,
    crConfigOption = _fnAdapter2.default.crConfigOption;


var DbNomicsAdapter = {
  toConfig: function toConfig(json, option) {
    var seriaColor = option.seriaColor,
        isNotZoomToMinMax = option.isNotZoomToMinMax,
        _crTitle = crTitle(option, json),
        title = _crTitle.title,
        subtitle = _crTitle.subtitle,
        data = crData(json),
        seria = (0, _ConfigBuilder2.default)().splineSeria({
      color: seriaColor,
      data: data
    }).toSeria(),
        config = (0, _ConfigBuilder2.default)().area2Config(title, subtitle).addSeries(seria).setMinMax(findMinY(data), findMaxY(data), isNotZoomToMinMax).add((0, _extends3.default)({}, crConfigOption({ json: json, option: option, data: data }))).toConfig();

    if (data.length > 1000) {
      config.plotOptions = Object.assign(config.plotOptions || {}, {
        series: {
          turboThreshold: 0
        }
      });
    }
    return { config: config };
  },
  toSeries: function toSeries(json, option) {
    var _DbNomicsAdapter$toCo = DbNomicsAdapter.toConfig(json, option),
        config = _DbNomicsAdapter$toCo.config;

    return config.series[0];
  }
};

exports.default = DbNomicsAdapter;
//# sourceMappingURL=DbNomicsAdapter.js.map