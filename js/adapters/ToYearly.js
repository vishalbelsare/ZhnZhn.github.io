'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ConfigBuilder = require('../charts/ConfigBuilder');

var _ConfigBuilder2 = _interopRequireDefault(_ConfigBuilder);

var _Tooltip = require('../charts/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CATEGORIES = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

var C = {
  NOW: {
    index: 3,
    color: 'yellow'
  },
  PREV: {
    index: 2,
    color: '#f45b5b'
  },
  AVG: {
    index: 1,
    color: 'black',
    isVisible: false
  },
  RANGE: {
    index: 0,
    color: '#7cb5ec'
  }
};

var _getYear = function _getYear(str) {
  return str.split("-")[0];
};
var _getMonth = function _getMonth(str) {
  return str.split("-")[1];
};

var _crSeria = function _crSeria(name, _ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? 'spline' : _ref$type,
      data = _ref.data,
      color = _ref.color,
      _ref$isVisible = _ref.isVisible,
      isVisible = _ref$isVisible === undefined ? true : _ref$isVisible;

  return { type: type, name: name, data: data, color: color, visible: isVisible };
};
var _crItem = function _crItem(name, _ref2) {
  var index = _ref2.index,
      color = _ref2.color,
      _ref2$isVisible = _ref2.isVisible,
      isVisible = _ref2$isVisible === undefined ? true : _ref2$isVisible;

  return { name: name, index: index, color: color, isVisible: isVisible };
};

var _crPoint = function _crPoint(item) {
  return {
    c: _getMonth(item[0]),
    y: item[1]
  };
};
var _crHighLowPoint = function _crHighLowPoint(key, arr) {
  return {
    c: key,
    high: Math.max.apply(null, arr),
    low: Math.min.apply(null, arr)
  };
};
var _calcAvg = function _calcAvg(arr) {
  var sum = arr.reduce(function (acc, a) {
    return acc + a;
  }, 0),
      avg = arr.length !== 0 ? parseFloat((sum / arr.length).toFixed(4)) : 0;
  return avg;
};
var _crAvgPoint = function _crAvgPoint(key, arr) {
  return {
    y: _calcAvg(arr),
    c: key
  };
};

var _crSeriaData = function _crSeriaData(data, i, year) {
  var crPoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _crPoint;

  var arr = [],
      max = data.length;
  for (; i < max; i++) {
    var item = data[i];
    if (_getYear(item[0]) !== year) {
      break;
    }
    arr.push(crPoint(item));
  }
  return { i: i, arr: arr.reverse() };
};

var _crSeries = function _crSeries(data) {
  var firtsItem = data[0][0],
      _yearNow = _getYear(firtsItem),
      _crSeriaData2 = _crSeriaData(data, 0, _yearNow),
      i = _crSeriaData2.i,
      _dNow = _crSeriaData2.arr,
      prevItem = data[i][0],
      _yearPrev = _getYear(prevItem),
      _crSeriaData3 = _crSeriaData(data, i, _yearPrev),
      _dPrev = _crSeriaData3.arr;


  return {
    nowSeria: _crSeria(_yearNow, (0, _extends3.default)({}, C.NOW, { data: _dNow })),
    nowItem: _crItem(_yearNow, C.NOW),
    prevSeria: _crSeria(_yearPrev, (0, _extends3.default)({}, C.PREV, { data: _dPrev })),
    prevItem: _crItem(_yearPrev, C.PREV)
  };
};

var _hmToSeriaData = function _hmToSeriaData(hm, crPoint) {
  var data = [];
  CATEGORIES.forEach(function (key) {
    data.push(crPoint(key, hm[key]));
  });
  return data;
};

var _crBaseHm = function _crBaseHm() {
  var hm = Object.create(null);
  CATEGORIES.forEach(function (key) {
    hm[key] = [];
  });
  return hm;
};
var _crHm = function _crHm(i, data, stopYear) {
  var hm = _crBaseHm(),
      max = data.length;
  var isBreaked = false;
  for (; i < max; i++) {
    var _item = data[i],
        _y = _item[0];
    if (_y === stopYear) {
      isBreaked = true;
      break;
    }
    var _m = _getMonth(_item[0]);
    hm[_m].push(_item[1]);
  }

  return { hm: hm, isBreaked: isBreaked };
};

var _crRangeSeria = function _crRangeSeria(data) {
  var refYear = parseFloat(_getYear(data[0][0])),
      stopYear = '' + (refYear - 5),
      _crHm2 = _crHm(0, data, stopYear),
      hm = _crHm2.hm,
      isBreaked = _crHm2.isBreaked,
      max = data.length,
      _stopYear = isBreaked ? stopYear : _getYear(data[max - 1][0]),
      name = 'Range ' + refYear + ':' + _stopYear,
      _data = _hmToSeriaData(hm, _crHighLowPoint);


  return {
    rangeSeria: (0, _ConfigBuilder2.default)().initAreaRange(_Tooltip2.default.categoryAreaRange, {
      data: _data,
      name: name,
      point: {}
    }).toConfig(),
    rangeItem: _crItem(name, C.RANGE)
  };
};

var _findStartYearIndex = function _findStartYearIndex(data, yearStop) {
  var max = data.length;
  var i = 0;
  for (; i < max; i++) {
    if (_getYear(data[i][0]) !== yearStop) {
      break;
    }
  }
  return i;
};

var _crAvgSeria = function _crAvgSeria(data) {
  var yearNow = _getYear(data[0][0]),
      fromYear = parseFloat(yearNow) - 1,
      stopYear = '' + (parseFloat(yearNow) - 5),
      max = data.length,
      startIndex = _findStartYearIndex(data, yearNow),
      _crHm3 = _crHm(startIndex, data, stopYear),
      hm = _crHm3.hm,
      isBreaked = _crHm3.isBreaked,
      _stopYear = isBreaked ? stopYear : _getYear(data[max - 1][0]),
      _data = _hmToSeriaData(hm, _crAvgPoint),
      name = 'Avg ' + fromYear + ':' + _stopYear;


  return {
    avgSeria: _crSeria(name, (0, _extends3.default)({}, C.AVG, { data: _data })),
    avgItem: _crItem(name, C.AVG)
  };
};

var _crZhConfig = function _crZhConfig(option, _ref3) {
  var legend = _ref3.legend;

  var value = option.value,
      dataSource = option.dataSource,
      _id = value + '_' + 'YEARLY';

  return {
    id: _id,
    key: _id,
    isWithLegend: true,
    legend: legend,
    dataSource: dataSource
  };
};

var ToYearly = {
  toConfig: function toConfig(data, option) {
    var title = option.title,
        subtitle = option.subtitle,
        _crSeries2 = _crSeries(data),
        nowSeria = _crSeries2.nowSeria,
        nowItem = _crSeries2.nowItem,
        prevSeria = _crSeries2.prevSeria,
        prevItem = _crSeries2.prevItem,
        _crRangeSeria2 = _crRangeSeria(data),
        rangeSeria = _crRangeSeria2.rangeSeria,
        rangeItem = _crRangeSeria2.rangeItem,
        _crAvgSeria2 = _crAvgSeria(data),
        avgSeria = _crAvgSeria2.avgSeria,
        avgItem = _crAvgSeria2.avgItem,
        legend = [nowItem, prevItem, rangeItem, avgItem],
        config = (0, _ConfigBuilder2.default)().initBaseCategories(CATEGORIES).add('chart', { spacingTop: 25, marginTop: 45 }).addCaption(title, subtitle).addSeriaBy(0, rangeSeria).addSeriaBy(1, avgSeria).addSeriaBy(2, prevSeria).addSeriaBy(3, nowSeria).addTooltip(_Tooltip2.default.category).add('zhConfig', _crZhConfig(option, { legend: legend })).toConfig();

    return config;
  }
};

exports.default = ToYearly;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\adapters\ToYearly.js.map