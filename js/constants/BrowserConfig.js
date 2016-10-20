'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BrowserConfig;

var _Type = require('./Type');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BrowserConfig = (_BrowserConfig = {}, _defineProperty(_BrowserConfig, _Type.BrowserType.EUROSTAT, {
  browserType: _Type.BrowserType.EUROSTAT,
  isDynamic: true,
  caption: 'European Statistics',
  sourceMenuUrl: './data/eurostat/source-menu.json'
}), _defineProperty(_BrowserConfig, _Type.BrowserType.ECONOMIC, {
  browserType: _Type.BrowserType.ECONOMIC,
  isDynamic: false
}), _defineProperty(_BrowserConfig, _Type.BrowserType.GOOGLE, {
  browserType: _Type.BrowserType.GOOGLE,
  isDynamic: true,
  caption: 'Quandl : Google Stocks',
  sourceMenuUrl: './data/google/source-menu.json'
}), _defineProperty(_BrowserConfig, _Type.BrowserType.YAHOO, {
  browserType: _Type.BrowserType.YAHOO,
  isDynamic: true,
  caption: 'Quandl : Yahoo Stocks',
  sourceMenuUrl: './data/yahoo/source-menu.json'
}), _defineProperty(_BrowserConfig, _Type.BrowserType.PREMIUM_SAMPLE, {
  browserType: _Type.BrowserType.PREMIUM_SAMPLE,
  isDynamic: true,
  caption: 'Quandl Premium Sample',
  sourceMenuUrl: './data/quandl-sample/source-menu.json'
}), _defineProperty(_BrowserConfig, _Type.BrowserType.FRANCE_STATISTICS, {
  browserType: _Type.BrowserType.FRANCE_STATISTICS,
  isDynamic: true,
  caption: 'Quandl : France Statistics',
  sourceMenuUrl: './data/france-statistics/source-menu.json'
}), _defineProperty(_BrowserConfig, _Type.BrowserType.US_STOCKS, {
  browserType: _Type.BrowserType.US_STOCKS,
  isDynamic: true,
  caption: 'Quandl : Stocks by Sectors',
  sourceMenuUrl: './data/us-stocks/source-menu.json',
  withoutItemCounter: true,
  modalDialogType: _Type.ModalDialog.US_STOCK_BY_SECTOR,
  itemType: 'Item',
  descrUrl: './data/us-stocks/description.html'
}), _defineProperty(_BrowserConfig, _Type.BrowserType.NYSE_STOCKS, {
  browserType: _Type.BrowserType.NYSE_STOCKS,
  isDynamic: true,
  caption: 'Quandl : US NYSE by Sectors',
  sourceMenuUrl: './data/nyse-stocks/source-menu.json',
  withoutItemCounter: true,
  modalDialogType: _Type.ModalDialog.STOCKS_BY_SECTOR,
  itemType: 'ItemWithCap',
  descrUrl: './data/nyse-stocks/nyse-stocks.html'
}), _defineProperty(_BrowserConfig, _Type.BrowserType.WATCH_LIST, {
  browserType: _Type.BrowserType.WATCH_LIST,
  isDynamic: false,
  withoutItemCounter: true
}), _BrowserConfig);

exports.default = BrowserConfig;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\constants\BrowserConfig.js.map