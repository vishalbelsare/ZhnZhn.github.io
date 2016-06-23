'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fCreateTreeMapConfig = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

var _Type = require('../constants/Type');

var _Chart = require('../constants/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _ChartConfig = require('../constants/ChartConfig');

var _ChartConfig2 = _interopRequireDefault(_ChartConfig);

var _QuandlFn = require('./QuandlFn');

var _StackedFn = require('./StackedFn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnCreateYearTotals = function _fnCreateYearTotals(jsonData, items) {
  var bYearTotals = [];
  jsonData.forEach(function (year, yearIndex) {
    bYearTotals.push((0, _StackedFn.fnCalcTotal)(year, items));
  });
  return bYearTotals;
};

var _fnCreateDataAndTotal = function _fnCreateDataAndTotal() {
  var jsonData = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var items = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
  var bYearTotals = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

  var yearData = jsonData[0],
      _year = yearData[0] ? yearData[0].split('-')[0] : '',
      bTotal = bYearTotals[0] ? bYearTotals[0] : (0, _big2.default)('0.0');
  var data = [];

  items.forEach(function (item, itemIndex) {
    var value = item.value;
    var caption = item.caption;
    var _value = yearData[value];
    if (_value) {
      var _fnCreateSparkData = (0, _StackedFn.fnCreateSparkData)(jsonData, value, bYearTotals);

      var sparkvalues = _fnCreateSparkData.sparkvalues;
      var sparkpercent = _fnCreateSparkData.sparkpercent;

      data.push({
        sparkvalues: sparkvalues.reverse(),
        sparkpercent: sparkpercent.reverse(),
        year: _year,
        name: caption,
        nameFull: caption,
        value: _value
      });
    }
  });

  data = _lodash2.default.sortBy(data, 'value').reverse();

  return { data: data, bTotal: bTotal };
};

var _fnCalcLevelAndSetPercent = function _fnCalcLevelAndSetPercent(data, bTotal) {
  var _bLevel = (0, _big2.default)('0.0'),
      level60 = 0,
      level90 = 0;

  data.forEach(function (point, pointIndex) {
    var value = point.value;
    var name = point.name;
    var percent = (0, _QuandlFn.fnCreatePercent)({
      bValue: (0, _big2.default)(value), bTotal: bTotal
    }).toString();
    point.total = bTotal.toString();
    point.percent = percent;
    if (!_bLevel.gte('60.0')) {
      point.name = percent + ' ' + name;
      point.dataLabels = {
        style: {
          fontSize: '16px'
        }
      };
      level60 += 1;
    } else if (!_bLevel.gte('90.0')) {
      point.name = percent + ' ' + name.split(';')[0].substring(0, 9);
      level90 += 1;
    } else {
      point.name = percent;
    }
    _bLevel = _bLevel.plus(percent);
  });

  return { level60: level60, level90: level90 };
};

var _fnSetColorToPoint = function _fnSetColorToPoint(data, level60, level90) {
  var period = _Chart2.default.COLOR_PERIOD,
      base1 = _Chart2.default.COLOR_BASE1,
      base2 = _Chart2.default.COLOR_BASE2;

  data.forEach(function (point, pointIndex) {
    if (pointIndex < level60) {
      var deltaColor = pointIndex * (period / level60);
      point.color = _Chart2.default.fCreateMonoColor(base1, deltaColor);
    } else if (pointIndex < level60 + level90) {
      var _deltaColor = (pointIndex - level60) * (period / level90);
      point.color = _Chart2.default.fCreateMonoColor(base2, _deltaColor);
    } else {
      point.color = _Chart2.default.fnGetMonoColor(pointIndex - level60 - level90);
    }
  });
};

var fCreateTreeMapConfig = exports.fCreateTreeMapConfig = function fCreateTreeMapConfig(json, option) {
  var config = _ChartConfig2.default.fBaseTreeMapConfig();
  var _option$sliceItems = option.sliceItems;
  var items100 = _option$sliceItems === undefined ? [] : _option$sliceItems;
  var _option$value = option.value;
  var value = _option$value === undefined ? '' : _option$value;
  var zhSeriaId = value + '_' + _Type.ChartType.TREE_MAP;
  var jsonData = json.dataset && json.dataset.data ? json.dataset.data : [];
  var bYearTotals = _fnCreateYearTotals(jsonData, items100);

  var _fnCreateDataAndTotal2 = _fnCreateDataAndTotal(jsonData, items100, bYearTotals);

  var data = _fnCreateDataAndTotal2.data;
  var bTotal = _fnCreateDataAndTotal2.bTotal;

  var _fnCalcLevelAndSetPer = _fnCalcLevelAndSetPercent(data, bTotal);

  var level60 = _fnCalcLevelAndSetPer.level60;
  var level90 = _fnCalcLevelAndSetPer.level90;
  var bPrevTotal = (0, _StackedFn.fnCalcTotal)(jsonData[1], items100);

  _fnSetColorToPoint(data, level60, level90);

  config.series = [_ChartConfig2.default.fCreateTreeMapSeria(zhSeriaId, data)];
  config.chart.height = _Chart2.default.STACKED_HEIGHT;

  var yearTitle = jsonData[0] && jsonData[0][0] ? jsonData[0][0].split('-')[0] : '';
  option.title = yearTitle + ':' + option.title;
  (0, _QuandlFn.fnSetTitleToConfig)(config, option);

  config.valueMoving = (0, _QuandlFn.fnCreateValueMoving)({
    bNowValue: bTotal,
    bPrevValue: bPrevTotal
  });

  config.zhConfig = (0, _QuandlFn.fnCreateZhConfig)(option);
  config.zhConfig.id = zhSeriaId;
  config.zhConfig.isWithoutAdd = true;
  config.zhConfig.isWithoutIndicator = true;
  config.info = (0, _QuandlFn.fnCreateDatasetInfo)(json);

  return { config: config };
};
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\adapters\QuandlToTreeMap.js.map