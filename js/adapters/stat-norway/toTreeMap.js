"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsonstat = _interopRequireDefault(require("jsonstat"));

var _Chart = _interopRequireDefault(require("../../charts/Chart"));

var _ConfigBuilder = _interopRequireDefault(require("../../charts/ConfigBuilder"));

var _Tooltip = _interopRequireDefault(require("../../charts/Tooltip"));

var _fnAdapter = _interopRequireDefault(require("./fnAdapter"));

var crTitle = _fnAdapter["default"].crTitle,
    crTid = _fnAdapter["default"].crTid,
    crChartOption = _fnAdapter["default"].crChartOption,
    numberFormat = _fnAdapter["default"].numberFormat,
    roundBy = _fnAdapter["default"].roundBy;
var NUMBER_STYLE = 'style="color:#333;"';

var _crPointName = function _crPointName(label, value) {
  return label + " <br/>\n  <span " + NUMBER_STYLE + ">" + numberFormat(value) + "</span>";
};

var _fCrTreeMapPoint = function _fCrTreeMapPoint(c, title) {
  return function (v, i) {
    var label = c.Category(i).label,
        value = v.value;
    return {
      name: _crPointName(label, value),
      value: value,
      label: label,
      title: title
    };
  };
};

var _toHm = function _toHm(arr) {
  var hm = Object.create(null);
  arr.forEach(function (item) {
    hm[item.caption] = item;
  });
  return hm;
};

var _fIsPoint = function _fIsPoint(dfT, hm, depth) {
  return function (p) {
    if (dfT && p.label === dfT) {
      return false;
    }

    if (hm[p.label].d !== depth) {
      return false;
    }

    return p.y !== null && p.y !== 0;
  };
};

var _findLevelBy = function _findLevelBy(data, from, sum, stopSum) {
  var _maxIndex = data.length;

  if (from >= _maxIndex) {
    return {
      index: _maxIndex,
      sum: sum
    };
  }

  var index = _maxIndex,
      i = from;

  for (; i < _maxIndex; i++) {
    sum += data[i].value;

    if (sum >= stopSum) {
      index = i;
      break;
    }
  }

  if (index < _maxIndex) {
    index += 1;
  }

  return {
    index: index,
    sum: sum
  };
};

var _findLevelIndex = function _findLevelIndex(data, level1, level2) {
  var _t = data.reduce(function (acc, p) {
    return acc + p.value;
  }, 0),
      _v1 = _t / 100 * level1,
      _v2 = _t / 100 * level2,
      _findLevelBy2 = _findLevelBy(data, 0, 0, _v1),
      index1 = _findLevelBy2.index,
      sum1 = _findLevelBy2.sum,
      _findLevelBy3 = _findLevelBy(data, index1, sum1, _v2),
      index2 = _findLevelBy3.index;

  return {
    index1: index1,
    index2: index2
  };
};

var _compareByValue = function _compareByValue(a, b) {
  return a.value - b.value;
};

var _crCategory = function _crCategory(option, by, depth) {
  var _option$items = option.items,
      items = _option$items === void 0 ? [] : _option$items,
      dfC = option.dfC,
      dfT = option.dfT,
      dfC2 = option.dfC2,
      dfT2 = option.dfT2;

  switch (by) {
    case '2':
      return {
        category: dfC2,
        cTotal: dfT2,
        itemSlice: items[0].slice,
        depth: depth
      };

    default:
      return {
        category: dfC,
        cTotal: dfT,
        itemSlice: items[1].slice,
        depth: depth
      };
  }
};

var _addPercent = function _addPercent(data) {
  var _total = data.reduce(function (acc, item) {
    return acc + item.value;
  }, 0),
      _onePercent = _total / 100;

  return data.map(function (p) {
    return (0, _extends2["default"])({}, p, {
      percent: roundBy(p.value / _onePercent)
    });
  });
};

var _addColor = function _addColor(data, level60, level90) {
  var period = _Chart["default"].COLOR_PERIOD,
      base1 = _Chart["default"].COLOR_BASE1,
      base2 = _Chart["default"].COLOR_BASE2;

  var _level90 = level90 - level60;

  var deltaColor;
  data.forEach(function (point, pointIndex) {
    if (pointIndex < level60) {
      deltaColor = pointIndex * (period / level60);
      point.color = _Chart["default"].fCreateMonoColor(base1, deltaColor);
    } else if (pointIndex < level60 + _level90) {
      deltaColor = (pointIndex - level60) * (period / _level90);
      point.color = _Chart["default"].fCreateMonoColor(base2, deltaColor);
    } else {
      point.color = _Chart["default"].fnGetMonoColor(pointIndex - level60 - _level90);
    }
  });
};

var _crData = function _crData(values, categories, Tid, option) {
  var selectOptions = option.selectOptions,
      depth = option.depth,
      cTotal = option.cTotal;

  if (!Array.isArray(values)) {
    return [];
  }

  return values.map(_fCrTreeMapPoint(categories, Tid)).filter(_fIsPoint(cTotal, _toHm(selectOptions[0]), depth)).sort(_compareByValue).reverse();
};

var toTreeMap = {
  crConfig: function crConfig(json, option) {
    var category = option.category,
        itemSlice = option.itemSlice,
        time = option.time,
        dfTSlice = option.dfTSlice,
        seriaType = option.seriaType,
        isCluster = option.isCluster,
        _option$items2 = option.items,
        items = _option$items2 === void 0 ? [] : _option$items2,
        ds = (0, _jsonstat["default"])(json).Dataset(0),
        categories = ds.Dimension(category),
        Tid = crTid(time, ds),
        _title = crTitle(option),
        _subtitle = (items[1].caption || '') + ": " + Tid,
        values = ds.Data((0, _extends2["default"])({
      Tid: Tid
    }, itemSlice, dfTSlice)),
        _d1 = _crData(values, categories, Tid, option),
        _c = _d1.map(function (item) {
      return item.c;
    }),
        _data = _addPercent(_d1),
        _findLevelIndex2 = _findLevelIndex(_data, 60, 90),
        index1 = _findLevelIndex2.index1,
        index2 = _findLevelIndex2.index2;

    if (isCluster) {
      _addColor(_data, index1, index2);
    }

    var _seria = (0, _ConfigBuilder["default"])().treeMapSeria(_Tooltip["default"].treeMap, {
      zhSeriaId: _fnAdapter["default"].crId(),
      data: _data
    }).toSeria();

    var config = (0, _ConfigBuilder["default"])().treeMapConfig(_c, seriaType) //.addCaption(C.TITLE, _subtitle)
    .addCaption(_title, _subtitle).addSeries(_seria).add((0, _extends2["default"])({
      chart: {
        spacingTop: 25,
        marginTop: 50,
        marginRight: 5,
        height: 500
      }
    }, crChartOption(ds, Tid, option))).alignButtonExport().toConfig();
    return config;
  },
  fCrConfig: function fCrConfig(param, config) {
    if (param === void 0) {
      param = {};
    }

    if (config === void 0) {
      config = {};
    }

    return function (json, option) {
      return toTreeMap.crConfig(json, (0, _extends2["default"])({}, option, param, _crCategory(option, config.by, config.depth)));
    };
  }
};
var _default = toTreeMap;
exports["default"] = _default;
//# sourceMappingURL=toTreeMap.js.map