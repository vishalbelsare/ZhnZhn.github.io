"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _big = _interopRequireDefault(require("big.js"));

var _mathFn = _interopRequireDefault(require("./mathFn"));

var _seriaHelperFn = _interopRequireDefault(require("./seriaHelperFn"));

var isNumber = _seriaHelperFn["default"].isNumber,
    isPointArr = _seriaHelperFn["default"].isPointArr,
    crPointGetter = _seriaHelperFn["default"].crPointGetter,
    fGetY = _seriaHelperFn["default"].fGetY,
    getZeroCountFromStart = _seriaHelperFn["default"].getZeroCountFromStart,
    getZeroIndexFromEnd = _seriaHelperFn["default"].getZeroIndexFromEnd;
var _isArr = Array.isArray;

var _calcY = function _calcY(yPrev, yNext) {
  if (!isNumber(yPrev) || !isNumber(yNext)) {
    return null;
  }

  if (yNext === 0) {
    return yPrev === 0 ? 0 : yPrev > 0 ? -100 : 100;
  }

  if (yPrev === 0) {
    return null;
  }

  return parseFloat((0, _big["default"])(yNext - yPrev).div(Math.abs(yPrev)).times(100).toFixed(2));
};

var fn = {
  growthRate: function growthRate(d, rt) {
    if (rt === void 0) {
      rt = 1;
    }

    var _rt = parseInt(rt, 10);

    if (!(_isArr(d) && isNumber(_rt))) {
      return [];
    }

    var _d = [],
        max = d.length,
        prevStep = _rt - 1;
    var pPrev = d[0],
        pNext,
        i = _rt;

    for (; i < max; i++) {
      pNext = d[i];

      _d.push([pNext.x, _calcY(pPrev.y, pNext.y)]);

      pPrev = d[i - prevStep];
    }

    return _d;
  },
  normalize: function normalize(d) {
    if (!(_isArr(d) && d[0])) {
      return [];
    }

    var _crPointGetter = crPointGetter(d),
        getX = _crPointGetter.getX,
        getY = _crPointGetter.getY,
        _y0 = getY(d[0]);

    if (!(isNumber(_y0) && _y0 !== 0)) {
      return [];
    }

    var _d = [];
    var i = 0;

    for (; i < d.length; i++) {
      _d.push([getX(d[i]), parseFloat((0, _big["default"])(getY(d[i]) / _y0).times(100).toFixed(2))]);
    }

    return _d;
  },
  findMinY: function findMinY(data) {
    if (!(_isArr(data) && data.length)) {
      return void 0;
    }

    var minY = Number.POSITIVE_INFINITY;

    var _fn = isNumber(data[0].y) ? function (p, min) {
      return isNumber(p.y) && p.y < min ? p.y : min;
    } : function (arr, min) {
      return isNumber(arr[1]) && arr[1] < min ? arr[1] : min;
    };

    var i = 0;

    for (; i < data.length; i++) {
      minY = _fn(data[i], minY);
    }

    return minY !== Number.POSITIVE_INFINITY ? _mathFn["default"].toFixedNumber(minY) : void 0;
  },
  findMaxY: function findMaxY(data) {
    if (!(_isArr(data) && data.length)) {
      return void 0;
    }

    var maxY = Number.NEGATIVE_INFINITY;

    var _fn = isNumber(data[0].y) ? function (p, max) {
      return isNumber(p.y) && p.y > max ? p.y : max;
    } : function (arr, max) {
      return isNumber(arr[1]) && arr[1] > max ? arr[1] : max;
    };

    var i = 0;

    for (; i < data.length; i++) {
      maxY = _fn(data[i], maxY);
    }

    return maxY !== Number.NEGATIVE_INFINITY ? _mathFn["default"].toFixedNumber(maxY) : void 0;
  },
  filterTrimZero: function filterTrimZero(data) {
    if (!_isArr(data)) {
      return data;
    }

    var _getY = fGetY(data[0]);

    if (!_getY) {
      return data;
    }

    var _countZero = getZeroCountFromStart(data, _getY);

    if (_countZero) {
      data.splice(0, _countZero);
    }

    var _zeroIndex = getZeroIndexFromEnd(data, _getY);

    if (_zeroIndex) {
      data.splice(_zeroIndex);
    }

    return data;
  },
  mean: function mean(data) {
    if (!isPointArr(data)) {
      return [];
    }

    var _sum = (0, _big["default"])(0),
        _numberOfPoints = 0,
        i = 0,
        _p;

    for (; i < data.length; i++) {
      _p = data[i];

      if (isNumber(_p[1])) {
        _sum = _sum.add(_p[1]);
        _numberOfPoints++;
      }
    }

    var _maxIndex = data.length - 1,
        _avg = parseInt(_sum.div(_numberOfPoints).toFixed(0), 10);

    return [[data[0][0], _avg], [data[_maxIndex][0], _avg]];
  },
  median: function median(data) {
    if (!isPointArr(data)) {
      return [];
    }

    var _d = data.map(function (arrP) {
      return arrP[1];
    }).sort(function (a, b) {
      return a - b;
    }),
        _len = data.length,
        _half = _len / 2,
        _median = _half % 2 === 0 ? Math.round((_d[_half - 1] + _d[_half]) / 2) : _d[Math.round(_half) - 1];

    return [[data[0][0], _median], [data[_len - 1][0], _median]];
  }
};
var _default = fn;
exports["default"] = _default;
//# sourceMappingURL=seriaFn.js.map