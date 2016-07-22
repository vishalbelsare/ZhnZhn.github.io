'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

var _purify = require('purify');

var _purify2 = _interopRequireDefault(_purify);

var _DateUtils = require('../utils/DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

var _Type = require('../constants/Type');

var _ChartConfig = require('../charts/ChartConfig');

var _ChartConfig2 = _interopRequireDefault(_ChartConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuandlFn2 = {
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
    var _json$dataset = json.dataset;
    var dataset = _json$dataset === undefined ? {} : _json$dataset;
    var _dataset$name = dataset.name;
    var name = _dataset$name === undefined ? '' : _dataset$name;
    var _dataset$description = dataset.description;
    var description = _dataset$description === undefined ? '' : _dataset$description;
    var _dataset$newest_avail = dataset.newest_available_date;
    var newest_available_date = _dataset$newest_avail === undefined ? '' : _dataset$newest_avail;
    var _dataset$oldest_avail = dataset.oldest_available_date;
    var oldest_available_date = _dataset$oldest_avail === undefined ? '' : _dataset$oldest_avail;
    var _dataset$frequency = dataset.frequency;
    var frequency = _dataset$frequency === undefined ? '' : _dataset$frequency;
    var _description = _purify2.default.sanitize(description);

    return {
      name: name,
      description: _description,
      newest_available_date: newest_available_date,
      oldest_available_date: oldest_available_date,
      frequency: frequency
    };
  },
  createZhConfig: function createZhConfig(option) {
    return {
      id: option.value,
      columnName: option.columnName,
      dataColumn: option.dataColumn,
      itemCaption: option.itemCaption
    };
  },
  createPercent: function createPercent(_ref) {
    var _ref$bValue = _ref.bValue;
    var bValue = _ref$bValue === undefined ? (0, _big2.default)('0.0') : _ref$bValue;
    var _ref$bTotal = _ref.bTotal;
    var bTotal = _ref$bTotal === undefined ? (0, _big2.default)('0.0') : _ref$bTotal;

    return !bTotal.eq((0, _big2.default)(0.0)) ? bValue.times(100).div(bTotal).abs().toFixed(2) : (0, _big2.default)(0.0);
  },
  createValueMoving: function createValueMoving(_ref2) {
    var _ref2$bNowValue = _ref2.bNowValue;
    var bNowValue = _ref2$bNowValue === undefined ? (0, _big2.default)('0.0') : _ref2$bNowValue;
    var _ref2$bPrevValue = _ref2.bPrevValue;
    var bPrevValue = _ref2$bPrevValue === undefined ? (0, _big2.default)('0.0') : _ref2$bPrevValue;


    var _bDelta = bPrevValue.minus(bNowValue),
        _direction = void 0;
    if (_bDelta.gt(0.0)) {
      _direction = _Type.Direction.DOWN;
    } else if (!_bDelta.gte(0.0)) {
      _direction = _Type.Direction.UP;
    } else {
      _direction = _Type.Direction.EQUAL;
    }

    _bDelta = _bDelta.abs().round(4);

    var _bPercent = this.createPercent({ bValue: _bDelta, bTotal: bPrevValue });

    var _bNowValue = (0, _big2.default)(bNowValue).round(4);
    if (_bNowValue.gt('1000000')) {
      _bNowValue = bNowValue.toFixed(0);
      _bDelta = _bDelta.toFixed(0);
    }

    return {
      value: _ChartConfig2.default.fnNumberFormat(_bNowValue),
      delta: _ChartConfig2.default.fnNumberFormat(_bDelta),
      percent: _bPercent.toString() + '%',
      direction: _direction
    };
  },
  createValueMovingFromSeria: function createValueMovingFromSeria(seria) {
    var len = seria.length,
        bNowValue = len > 0 ? seria[len - 1][1] ? seria[len - 1][1] : '0.0' : '0.0',
        bPrevValue = len > 1 ? seria[len - 2][1] ? (0, _big2.default)(seria[len - 2][1]) : (0, _big2.default)(0.0) : (0, _big2.default)(0.0);

    return this.createValueMoving({ bNowValue: bNowValue, bPrevValue: bPrevValue });
  },
  getRecentDate: function getRecentDate() {
    var seria = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var json = arguments[1];
    var len = seria.length;
    var _json$dataset2 = json.dataset;
    var dataset = _json$dataset2 === undefined ? {} : _json$dataset2;
    var _dataset$frequency2 = dataset.frequency;
    var frequency = _dataset$frequency2 === undefined ? '' : _dataset$frequency2;
    var millisUTC = len > 0 && seria[len - 1][0] && typeof seria[len - 1][0] === 'number' ? seria[len - 1][0] : '';
    var d = millisUTC ? frequency.toLowerCase() === 'annual' ? new Date(millisUTC).getUTCFullYear() : _DateUtils2.default.formatTo(millisUTC) : '';
    return d;
  },
  setTitleToConfig: function setTitleToConfig() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var option = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var title = option.title;
    var subtitle = option.subtitle;

    config.title.text = title ? title : '';
    config.subtitle.text = subtitle ? subtitle + ':' : '';
  },
  findColumnIndex: function findColumnIndex(obj) {
    var columnName = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

    var column_names = Array.isArray(obj) ? obj : obj.dataset.column_names ? obj.dataset.column_names : [],
        _columnName = columnName.toLowerCase();

    if (columnName && column_names) {
      for (var i = 0, max = column_names.length; i < max; i++) {
        if (column_names[i].toLowerCase() === _columnName) {
          return i;
        }
      }
    }
    return undefined;
  },
  getDataColumnIndex: function getDataColumnIndex(json, option) {
    var columnName = option.columnName;
    var dataColumn = option.dataColumn;
    var _dataColumn = this.findColumnIndex(json, columnName);
    var _columnIndex = _dataColumn ? _dataColumn : dataColumn ? dataColumn : 1;

    return _columnIndex;
  }
};

exports.default = QuandlFn2;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\adapters\QuandlFn2.js.map