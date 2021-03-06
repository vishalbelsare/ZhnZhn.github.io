"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _isEmpty = _interopRequireDefault(require("../../utils/isEmpty"));

var C = {
  ROOT: 'https://www.alphavantage.co/query',
  ERR_PROP: 'Error Message',
  REQ_ERROR: 'Request Error',
  RES_EMPTY: 'Response Empty',
  MSG_EMPTY: 'Empty response from data provider'
};

var _crError = function _crError(errCaption, message) {
  return {
    errCaption: errCaption,
    message: message
  };
};

var AlphaApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _option$indicator = option.indicator,
        indicator = _option$indicator === void 0 ? 'SMA' : _option$indicator,
        _option$ticket = option.ticket,
        ticket = _option$ticket === void 0 ? 'MSFT' : _option$ticket,
        _option$period = option.period,
        period = _option$period === void 0 ? '50' : _option$period,
        _option$apiKey = option.apiKey,
        apiKey = _option$apiKey === void 0 ? 'demo' : _option$apiKey;

    switch (indicator) {
      case 'SECTOR':
        return C.ROOT + "?function=" + indicator + "&apikey=" + apiKey;

      case 'TIME_SERIES_INTRADAY':
        {
          var interval = option.interval;
          return C.ROOT + "?function=" + indicator + "&interval=" + interval + "&symbol=" + ticket + "&apikey=" + apiKey;
        }

      case 'TIME_SERIES_DAILY':
        {
          var _option$outputsize = option.outputsize,
              outputsize = _option$outputsize === void 0 ? 'compact' : _option$outputsize;
          return C.ROOT + "?function=" + indicator + "&outputsize=" + outputsize + "&symbol=" + ticket + "&apikey=" + apiKey;
        }

      case 'TIME_SERIES_DAILY_ADJUSTED':
        {
          var _outputsize = option.outputsize;
          return C.ROOT + "?function=" + indicator + "&outputsize=" + _outputsize + "&symbol=" + ticket + "&apikey=" + apiKey;
        }

      default:
        return C.ROOT + "?function=" + indicator + "&symbol=" + ticket + "&interval=daily&time_period=" + period + "&series_type=close&apikey=" + apiKey;
    }
  },
  checkResponse: function checkResponse(json) {
    if ((0, _isEmpty["default"])(json)) {
      throw _crError(C.RES_EMPTY, C.MSG_EMPTY);
    }

    if (!json[C.ERR_PROP]) {
      return true;
    } else {
      throw _crError(C.REQ_ERROR, json[C.ERR_PROP]);
    }
  }
};
var _default = AlphaApi;
exports["default"] = _default;
//# sourceMappingURL=Api.js.map