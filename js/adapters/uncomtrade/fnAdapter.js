'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ChartConfig = require('../../charts/ChartConfig');

var _ChartConfig2 = _interopRequireDefault(_ChartConfig);

var _Chart = require('../../charts/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _Tooltip = require('../../charts/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _AdapterFn = require('../AdapterFn');

var _AdapterFn2 = _interopRequireDefault(_AdapterFn);

var _fnDescr = require('./fnDescr');

var _fnDescr2 = _interopRequireDefault(_fnDescr);

var _fnHm = require('./fnHm');

var _fnHm2 = _interopRequireDefault(_fnHm);

var _fnLegend = require('./fnLegend');

var _fnLegend2 = _interopRequireDefault(_fnLegend);

var _conf = require('./conf');

var _conf2 = _interopRequireDefault(_conf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fnAdapter = {

  crChartId: function crChartId(option) {
    var value = option.value,
        _option$rg = option.rg,
        rg = _option$rg === undefined ? 2 : _option$rg,
        _option$measure = option.measure,
        measure = _option$measure === undefined ? "A" : _option$measure;

    return value + '_' + rg + '_' + measure;
  },

  crSeriaOption: function crSeriaOption(id) {
    return { zhSeriaId: id };
  },

  addSeriaTo: function addSeriaTo(_ref) {
    var config = _ref.config,
        hm = _ref.hm,
        name = _ref.name,
        i = _ref.i,
        color = _ref.color,
        seriaOption = _ref.seriaOption,
        _ref$isShow = _ref.isShow,
        isShow = _ref$isShow === undefined ? false : _ref$isShow;

    var _config$zhConfig = config.zhConfig,
        key = _config$zhConfig.key,
        legend = _config$zhConfig.legend,
        _color = color || _ChartConfig2.default.getColor(i),
        _seriaOption = seriaOption !== null ? isShow ? _conf2.default.SPLINE : _conf2.default.SPLINE_NOT_VISIBLE : null;

    _ChartConfig2.default.setSerieData(config, hm[name], i, name, _seriaOption, this.crSeriaOption(key + '_' + name));
    legend.push(_AdapterFn2.default.legendItem(i, _color, name, isShow));
  },
  addSeriesFromHmTo: function addSeriesFromHmTo(_ref2) {
    var _this = this;

    var config = _ref2.config,
        hm = _ref2.hm,
        fromIndex = _ref2.fromIndex;

    var i = fromIndex;

    _fnHm2.default.toSeriaNames(hm).forEach(function (item) {
      var name = item.name,
          _isShow = i < _conf2.default.MAX_SHOW ? true : false;
      _this.addSeriaTo({ config: config, hm: hm, name: name, i: i, isShow: _isShow });
      i++;
    });
  },
  addSeriasTo: function addSeriasTo(config, json, option) {
    var one = option.one,
        measure = option.measure,
        _json$dataset = json.dataset,
        dataset = _json$dataset === undefined ? [] : _json$dataset,
        _ref3 = one !== _conf2.default.ALL ? _fnHm2.default.toHmCategories({
      dataset: dataset,
      pnValue: measure
    }) : _fnHm2.default.toHmCategories({
      dataset: dataset,
      pnValue: measure,
      pnCountry: 'rtTitle'
    }),
        hm = _ref3.hm,
        categories = _ref3.categories;

    if (hm[_conf2.default.WORLD] && one !== _conf2.default.ALL) {
      this.addSeriaTo({
        config: config, hm: hm,
        i: 0, name: _conf2.default.WORLD, color: _conf2.default.WORLD_COLOR,
        seriaOption: null, isShow: true
      });
      this.addSeriesFromHmTo({ config: config, hm: hm, fromIndex: 1 });
    } else {
      this.addSeriesFromHmTo({ config: config, hm: hm, fromIndex: 0 });
    }

    var legend = config.zhConfig.legend;
    config.zhConfig.legend = one !== _conf2.default.ALL ? _fnLegend2.default.toWorldLegend(legend, hm) : _fnLegend2.default.toAllLegend(legend, hm, measure);

    Object.assign(config.xAxis, { categories: categories }, _conf2.default.X_AXIS);
    Object.assign(config.yAxis, _conf2.default.Y_AXIS);
  },
  crBaseConfig: function crBaseConfig(json, option) {
    var value = option.value,
        dataSource = option.dataSource,
        title = option.title,
        subtitle = option.subtitle,
        nativeHref = option.nativeHref;

    return Object.assign(_ChartConfig2.default.fBaseAreaConfig(), {
      title: _Chart2.default.fTitle({
        text: title,
        y: _Chart2.default.STACKED_TITLE_Y
      }),
      subtitle: _Chart2.default.fSubtitle({
        text: subtitle,
        y: _Chart2.default.STACKED_SUBTITLE_Y
      }),
      tooltip: _Chart2.default.fTooltip(_Tooltip2.default.fnBasePointFormatterC),
      info: {
        description: _fnDescr2.default.toDescr(json),
        frequency: "Annual"
      },
      zhConfig: {
        id: value,
        key: this.crChartId(option),
        isWithLegend: true,
        legend: [],
        dataSource: dataSource,
        linkFn: "UN_COMTRADE",
        item: nativeHref
      }
    });
  },
  toConfig: function toConfig(json, option) {
    var config = this.crBaseConfig(json, option);
    Object.assign(config.chart, _conf2.default.CHART);
    this.addSeriasTo(config, json, option);

    return config;
  }
};

exports.default = fnAdapter;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\adapters\uncomtrade\fnAdapter.js.map