'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

var _dompurify = require('dompurify');

var _dompurify2 = _interopRequireDefault(_dompurify);

var _mathFn = require('../../math/mathFn');

var _mathFn2 = _interopRequireDefault(_mathFn);

var _DateUtils = require('../../utils/DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

var _Type = require('../../constants/Type');

var _ChartConfig = require('../../charts/ChartConfig');

var _ChartConfig2 = _interopRequireDefault(_ChartConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mlsToDmy = _DateUtils2.default.mlsToDmy;


var _isArr = Array.isArray;
var _isStr = function _isStr(str) {
  return typeof str === 'string';
};
var _isNumber = function _isNumber(n) {
  return typeof n === 'number' && !Number.isNaN(n);
};

var _crItemCaption = function _crItemCaption(_ref) {
  var dfItemCaption = _ref.dfItemCaption,
      items = _ref.items,
      itemCaption = _ref.itemCaption;
  return _isNumber(dfItemCaption) && _isArr(items) && items[dfItemCaption - 1] ? items[dfItemCaption - 1].caption || itemCaption : itemCaption;
};

var _isStrEqTo = function _isStrEqTo(str, strTo) {
  return _isStr(str) && str.toLowerCase() === strTo;
};

var QuandlFn2 = {
  getData: function getData(json) {
    var _json$dataset = json.dataset,
        dataset = _json$dataset === undefined ? {} : _json$dataset,
        _json$datatable = json.datatable,
        datatable = _json$datatable === undefined ? {} : _json$datatable;

    return dataset.data || datatable.data || [];
  },

  getColumnNames: function getColumnNames(json) {
    var dataset = json.dataset,
        datatable = json.datatable;

    if (dataset) {
      return dataset.column_names || [];
    }
    if (datatable && _isArr(datatable.columns)) {
      return datatable.columns.map(function (c) {
        return c.name;
      });
    }
    return [];
  },

  isPrevDateAfter: function isPrevDateAfter(arr, checkedDate, predicate) {
    var length = arr.length;
    if (length === 0) {
      return true;
    }
    var prevDate = arr[length - 1].x;
    if (Math.abs((checkedDate.valueOf() - prevDate.valueOf()) / (24 * 60 * 60 * 1000)) < predicate) {
      return false;
    } else {
      return true;
    }
  },
  createDatasetInfo: function createDatasetInfo(json) {
    var _json$dataset2 = json.dataset,
        dataset = _json$dataset2 === undefined ? {} : _json$dataset2,
        _dataset$name = dataset.name,
        name = _dataset$name === undefined ? '' : _dataset$name,
        _dataset$description = dataset.description,
        description = _dataset$description === undefined ? '' : _dataset$description,
        _dataset$newest_avail = dataset.newest_available_date,
        newest_available_date = _dataset$newest_avail === undefined ? '' : _dataset$newest_avail,
        _dataset$oldest_avail = dataset.oldest_available_date,
        oldest_available_date = _dataset$oldest_avail === undefined ? '' : _dataset$oldest_avail,
        _dataset$frequency = dataset.frequency,
        frequency = _dataset$frequency === undefined ? '' : _dataset$frequency,
        _dataset$database_cod = dataset.database_code,
        database_code = _dataset$database_cod === undefined ? '' : _dataset$database_cod,
        _dataset$dataset_code = dataset.dataset_code,
        dataset_code = _dataset$dataset_code === undefined ? '' : _dataset$dataset_code,
        _description = _dompurify2.default.sanitize(description);

    return {
      name: name,
      toDate: newest_available_date,
      fromDate: oldest_available_date,
      frequency: frequency,
      database_code: database_code,
      dataset_code: dataset_code,
      description: _description
    };
  },
  createZhConfig: function createZhConfig(option) {
    var item = option.item,
        title = option.title,
        _option$subtitle = option.subtitle,
        subtitle = _option$subtitle === undefined ? '' : _option$subtitle,
        id = option.value,
        key = option.key,
        columnName = option.columnName,
        dataColumn = option.dataColumn,
        fromDate = option.fromDate,
        seriaColumnNames = option.seriaColumnNames,
        linkFn = option.linkFn,
        dataSource = option.dataSource,
        _dataSource = dataSource ? 'Quandl: ' + dataSource : 'Quandl',
        _itemCaption = _crItemCaption(option);

    return {
      item: item,
      title: title, subtitle: subtitle,
      id: id, key: key,
      columnName: columnName, dataColumn: dataColumn,
      fromDate: fromDate, seriaColumnNames: seriaColumnNames,
      linkFn: linkFn,
      itemCaption: _itemCaption,
      dataSource: _dataSource
    };
  },
  createPercent: function createPercent(_ref2) {
    var _ref2$bValue = _ref2.bValue,
        bValue = _ref2$bValue === undefined ? (0, _big2.default)('0.0') : _ref2$bValue,
        _ref2$bTotal = _ref2.bTotal,
        bTotal = _ref2$bTotal === undefined ? (0, _big2.default)('0.0') : _ref2$bTotal;

    return _mathFn2.default.calcPercent({ bValue: bValue, bTotal: bTotal });
  },
  createValueMoving: function createValueMoving(_ref3) {
    var _ref3$bNowValue = _ref3.bNowValue,
        bNowValue = _ref3$bNowValue === undefined ? (0, _big2.default)('0.0') : _ref3$bNowValue,
        _ref3$bPrevValue = _ref3.bPrevValue,
        bPrevValue = _ref3$bPrevValue === undefined ? (0, _big2.default)('0.0') : _ref3$bPrevValue;

    return _mathFn2.default.crValueMoving({
      nowValue: bNowValue,
      prevValue: bPrevValue,
      Direction: _Type.Direction,
      fnFormat: _ChartConfig2.default.fnNumberFormat
    });
  },
  getRecentDate: function getRecentDate() {
    var seria = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var json = arguments[1];
    var len = seria.length,
        _json$dataset3 = json.dataset,
        dataset = _json$dataset3 === undefined ? {} : _json$dataset3,
        _dataset$frequency2 = dataset.frequency,
        frequency = _dataset$frequency2 === undefined ? '' : _dataset$frequency2,
        mlsUTC = len > 0 && seria[len - 1][0] && _isNumber(seria[len - 1][0]) ? seria[len - 1][0] : '';

    return mlsUTC ? frequency.toLowerCase() === 'annual' ? new Date(mlsUTC).getUTCFullYear() : mlsToDmy(mlsUTC) : '';
  },
  setTitleToConfig: function setTitleToConfig(config) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var title = option.title,
        subtitle = option.subtitle;

    config.title.text = title || '';
    config.subtitle.text = subtitle ? subtitle + ':' : '';
  },
  findColumnIndex: function findColumnIndex(obj) {
    var columnName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var column_names = _isArr(obj) ? obj : QuandlFn2.getColumnNames(obj),
        _columnName = columnName.toLowerCase();

    if (_columnName && column_names) {
      for (var i = 0, max = column_names.length; i < max; i++) {
        if (_isStrEqTo(column_names[i], _columnName)) {
          return i;
        }
      }
    }
    return void 0;
  },
  getDataColumnIndex: function getDataColumnIndex(json, option) {
    var columnName = option.columnName,
        dataColumn = option.dataColumn,
        _dataColumn = QuandlFn2.findColumnIndex(json, columnName);

    return _dataColumn || dataColumn || 1;
  }
};

exports.default = QuandlFn2;
//# sourceMappingURL=QuandlFn2.js.map