'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiUtils = require('../utils/ApiUtils');

var _ApiUtils2 = _interopRequireDefault(_ApiUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuandlApi = {};

QuandlApi.rootUrl = "https://www.quandl.com/api/v3/datasets/";
QuandlApi.BLANK = '';

QuandlApi.getRequestUrl = function (option) {
  var queryDate = option.fromDate && option.toDate ? 'sort_order=asc&trim_start=' + option.fromDate + '&trim_end=' + option.toDate : QuandlApi.BLANK;

  var apiKey = void 0;
  if (option.apiKey) {
    apiKey = queryDate ? '&api_key=' + option.apiKey : 'api_key=' + option.apiKey;
  } else {
    apiKey = QuandlApi.BLANK;
  }

  var uri = '' + QuandlApi.rootUrl + option.value + '.json?' + queryDate + apiKey;

  return _ApiUtils2.default.createUri(uri);
};

var CheckCaptions = {
  CLIENT: 'Request Error',
  SERVER: 'Response Error'
};
QuandlApi.checkResponse = function (response, json) {
  var status = response.status;
  var statusText = response.statusText;

  if (status >= 200 && status < 400) {
    return true;
  } else if (status >= 400 && status < 500) {
    if (json.quandl_error && json.quandl_error.message) {
      throw { zhCaption: CheckCaptions.CLIENT, message: json.quandl_error.message };
    } else {
      throw { zhCaption: CheckCaptions.CLIENT, message: statusText };
    }
  } else if (status >= 500 && status < 600) {
    throw { zhCaption: CheckCaptions.SERVER, message: statusText };
  } else {
    return false;
  }
};

exports.default = QuandlApi;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\api\QuandlApi.js.map