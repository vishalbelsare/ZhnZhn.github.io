"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fnAdapter = _interopRequireDefault(require("./fnAdapter"));

var getValue = _fnAdapter["default"].getValue;
var C = {
  URL: 'https://api.coinpaprika.com/v1',
  DF_ID: 'btc-bitcoin'
};
var _isArr = Array.isArray;

var _getCoinId = function _getCoinId(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items;
  return getValue(items[0], {
    dfValue: C.DF_ID
  });
};

var _crUrlDf = function _crUrlDf(option) {
  var fromDate = option.fromDate,
      _coinId = _getCoinId(option);

  return C.URL + "/coins/" + _coinId + "/ohlcv/historical?start=" + fromDate + "&limit=366";
};

var _crUrlTw = function _crUrlTw(option) {
  var _coinId = _getCoinId(option);

  return C.URL + "/coins/" + _coinId + "/twitter";
};

var _crUrlCi = function _crUrlCi(option) {
  var _coinId = _getCoinId(option);

  return C.URL + "/coins/" + _coinId;
};

var _rApi = {
  DF: _crUrlDf,
  TW: _crUrlTw,
  CI: _crUrlCi
};
var CpApi = {
  getRequestUrl: function getRequestUrl(option) {
    var dfRoute = option.dfRoute,
        _crUrl = _rApi[dfRoute] || _rApi.DF;

    return option._itemUrl = _crUrl(option);
  },
  checkResponse: function checkResponse(json, option) {
    var dfRoute = option.dfRoute;
    return _isArr(json) || dfRoute === 'CI' && json;
  }
};
var _default = CpApi;
exports["default"] = _default;
//# sourceMappingURL=CpApi.js.map