"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var C = {
  PERIOD: 5,
  ALL: 'all',
  BU_ALL_PARAMS: 'p=0&max=3000',
  NU_ALL_PARAMS: 'p=0',
  //rg=2 Export
  BU_PREFIX: 'https://comtrade.un.org/api/get?fmt=JSON&head=M&freq=A&px=H4',
  NU_PREFIX: 'https://comtrade.un.org/db/dqBasicQueryResults.aspx?px=H4&y=2017&so=1001',
  DF_RG: 2,
  DF_MEASURE: 'NetWeight'
};

var _crPeriod = function _crPeriod(period) {
  var yearNow = new Date().getUTCFullYear(),
      arr = [];

  for (var i = 1; i <= period; i++) {
    arr.push(yearNow - i);
  }

  return arr.reverse().join(',');
};

var UnComtradeApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _option$one = option.one,
        one = _option$one === void 0 ? C.ALL : _option$one,
        two = option.two,
        _option$rg = option.rg,
        rg = _option$rg === void 0 ? 2 : _option$rg,
        _ps = _crPeriod(C.PERIOD);

    if (one !== C.ALL) {
      option.nativeHref = C.NU_PREFIX + "&r=" + one + "&cc=" + two;
      return C.BU_PREFIX + "&rg=" + rg + "&r=" + one + "&cc=" + two + "&ps=" + _ps;
    } else {
      option.nativeHref = C.NU_PREFIX + "&" + C.NU_ALL_PARAMS + "&r=" + one + "&cc=" + two;
      return C.BU_PREFIX + "&" + C.BU_ALL_PARAMS + "&rg=" + rg + "&r=" + one + "&cc=" + two + "&ps=" + _ps;
    }
  },
  checkResponse: function checkResponse(json) {
    return true;
  },
  addPropsTo: function addPropsTo(option) {
    var one = option.one,
        v = option.v,
        _option$rg2 = option.rg,
        rg = _option$rg2 === void 0 ? C.DF_RG : _option$rg2,
        _option$measure = option.measure,
        measure = _option$measure === void 0 ? C.DF_MEASURE : _option$measure;

    if (!one) {
      var arr = v.substring(3).split('_');
      Object.assign(option, {
        one: arr[0],
        two: arr[1]
      });
    }

    Object.assign(option, {
      rg: rg,
      measure: measure
    });
  }
};
var _default = UnComtradeApi;
exports["default"] = _default;
//# sourceMappingURL=Api.js.map