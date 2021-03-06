"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _createrFns = _interopRequireDefault(require("./createrFns"));

var crCaption = _createrFns["default"].crCaption,
    crItemKey = _createrFns["default"].crItemKey;

var _toIds = function _toIds(_ref, items) {
  var dfId = _ref.dfId;
  var _arr = [dfId];
  items.forEach(function (_temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
        slice = _ref2.slice;

    if (slice) {
      _arr.push(slice[Object.keys(slice)[0]]);
    }
  });
  return _arr;
};

var createLoadOptions = function createLoadOptions(props, options) {
  if (props === void 0) {
    props = {};
  }

  if (options === void 0) {
    options = {};
  }

  var _props = props,
      loadId = _props.loadId,
      dataSource = _props.dataSource,
      _props$dfProps = _props.dfProps,
      dfProps = _props$dfProps === void 0 ? {} : _props$dfProps,
      timeId = _props.timeId,
      _options = options,
      _options$items = _options.items,
      items = _options$items === void 0 ? [] : _options$items,
      titles = _options.titles,
      dialogOptions = _options.dialogOptions,
      _options$chartType = _options.chartType,
      chartType = _options$chartType === void 0 ? {} : _options$chartType,
      seriaColor = _options.seriaColor,
      seriaWidth = _options.seriaWidth,
      date = _options.date,
      dateDefault = _options.dateDefault,
      selectOptions = _options.selectOptions,
      seriaType = chartType.value,
      zhCompType = chartType.compType,
      _crCaption = crCaption(items, titles),
      itemCaption = _crCaption.itemCaption,
      title = _crCaption.title,
      subtitle = _crCaption.subtitle,
      time = date ? date.value : dateDefault,
      _items = _toIds(dfProps, items),
      _itemKey = crItemKey(_items, seriaType, time);

  return (0, _extends2["default"])({}, dfProps, dialogOptions, {
    _itemKey: _itemKey,
    itemCaption: itemCaption,
    loadId: loadId,
    title: title,
    subtitle: subtitle,
    seriaType: seriaType,
    seriaColor: seriaColor,
    seriaWidth: seriaWidth,
    zhCompType: zhCompType,
    time: time,
    timeId: timeId,
    dataSource: dataSource,
    items: items,
    selectOptions: selectOptions
  });
};

var _default = createLoadOptions;
exports["default"] = _default;
//# sourceMappingURL=statN.js.map