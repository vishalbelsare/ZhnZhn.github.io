"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _crDateConfig = _interopRequireDefault(require("./crDateConfig"));

var _DialogCell = _interopRequireDefault(require("../dialogs/DialogCell"));

var _MenuMore = _interopRequireDefault(require("../dialogs/MenuMore"));

var _Decorators = _interopRequireDefault(require("../dialogs/decorators/Decorators"));

var _withForDate = _interopRequireDefault(require("./withForDate"));

var _RouterOptions = _interopRequireDefault(require("./RouterOptions"));

var _ModalOptions = _interopRequireDefault(require("./ModalOptions"));

var _ModalToggle = _interopRequireDefault(require("./ModalToggle"));

var _RowChart = _interopRequireDefault(require("./RowChart"));

var _dec, _class, _class2, _temp;

var DF_MAP_FREQUENCY = 'M';

var _crIsId = function _crIsId(id) {
  return "is" + id + "Select";
};

var _crIsToggleInit = function _crIsToggleInit(selectProps) {
  var _isToggleInit = {};
  selectProps.forEach(function (item) {
    _isToggleInit[_crIsId(item.id)] = true;
  });
  return _isToggleInit;
};

var _isCategory = function _isCategory(chartType) {
  return _RouterOptions["default"].isCategory(chartType);
};

var DialogSelectN = (_dec = _Decorators["default"].dialog, _dec(_class = (0, _withForDate["default"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(DialogSelectN, _Component);

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    caption: PropTypes.string,
    selectProps: PropTypes.arrayOf(
       PropTypes.shape({
          id: PropTypes.string,
          caption: PropTypes.string,
          uri: PropTypes.string,
          jsonProp: PropTypes.string
       })
    ),
      noDate: PropTypes.string,
    dfProps: PropTypes.shape({
      mapFrequency: PropTypes.oneOf(['M', 'Q', 'Y']),
      mapDateDf: PropTypes.number,
    }),
    msgOnNotSelected: PropTypes.func,
      onShow: PropTypes.func,
    onFront: PropTypes.func,
    loadFn: PropTypes.func,
      descrUrl: PropTypes.string,
    onClickInfo: PropTypes.func,
      onClose: PropTypes.func,
    onLoad: PropTypes.func
  }
  */
  function DialogSelectN(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._toggleStateBy = function (propName) {
      _this.setState(function (prevState) {
        var _ref;

        return _ref = {}, _ref[propName] = !prevState[propName], _ref;
      });
    };

    _this._checkCaptionBy = function (index) {
      _this._titles.push(index);
    };

    _this._uncheckCaption = function (index) {
      _this._titles = _this._titles.filter(function (v) {
        return v !== index;
      });
    };

    _this._updateForDate = function (chartType) {
      _this.date = void 0;

      var _this$props$dfProps = _this.props.dfProps,
          dfProps = _this$props$dfProps === void 0 ? {} : _this$props$dfProps,
          mapFrequency = dfProps.mapFrequency,
          mapDateDf = dfProps.mapDateDf,
          _frequency = mapFrequency || DF_MAP_FREQUENCY,
          dateConfig = (0, _crDateConfig["default"])(_frequency, mapDateDf);

      _this.setState((0, _extends2["default"])({
        isShowDate: true,
        chartType: chartType
      }, dateConfig));
    };

    _this._hSelectChartType = function (chartType) {
      if (_isCategory(chartType)) {
        _this._updateForDate(chartType);
      } else {
        _this.setState({
          chartType: chartType,
          isShowDate: false
        });
      }
    };

    _this._onRegColor = function (comp) {
      _this.colorComp = comp;
    };

    _this._hSelectDate = function (date) {
      _this.date = date;
    };

    _this._handleLoad = function () {
      _this._handleWithValidationLoad(_this._createValidationMessages(), _this._createLoadOption);
    };

    _this._createValidationMessages = function () {
      var _this$props = _this.props,
          msgOnNotSelected = _this$props.msgOnNotSelected,
          selectProps = _this$props.selectProps,
          chartType = _this.state.chartType,
          _max = selectProps.length,
          msg = [];
      var i = _isCategory(chartType) ? 1 : 0;

      for (; i < _max; i++) {
        if (!_this._items[i]) {
          msg.push(msgOnNotSelected(selectProps[i].caption));
        }
      }

      msg.isValid = msg.length === 0 ? true : false;
      return msg;
    };

    _this._createLoadOption = function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          colorComp = _assertThisInitialize.colorComp,
          dialogOptions = _assertThisInitialize.dialogOptions,
          chartType = _this.state.chartType,
          _ref2 = colorComp ? colorComp.getConf() : {},
          seriaColor = _ref2.seriaColor,
          seriaWidth = _ref2.seriaWidth,
          date = _this._getDateWithForDate(),
          isCategory = _isCategory(chartType),
          items = isCategory ? _this._items.slice(1) : _this._items;

      return _this.props.loadFn(_this.props, {
        items: items,
        titles: _this._titles,
        dialogOptions: dialogOptions,
        chartType: chartType,
        seriaColor: seriaColor,
        seriaWidth: seriaWidth,
        isCategory: isCategory,
        date: date
        /*
        selectOptions: [
          compSelect1.getOptions(),
          compSelect2.getOptions()
        ]
        */

      });
    };

    _this._hClose = function () {
      _this._handleWithValidationClose();
    };

    _this._hSelect = function (id, index, item) {
      if (item) {
        item.id = id;
      }

      _this._items[index] = item;
    };

    _this._refSelect = function (id, comp) {
      _this._compSelect[id] = comp;
    };

    _this._renderSelects = function (selectProps, isShow, isShowLabels) {
      return selectProps.map(function (item, index) {
        var id = item.id,
            restItem = (0, _objectWithoutPropertiesLoose2["default"])(item, ["id"]);

        var _isShow = _this.state[_crIsId(id)];

        return _react["default"].createElement(_DialogCell["default"].ShowHide, {
          key: id,
          isShow: _isShow
        }, _react["default"].createElement(_DialogCell["default"].SelectWithLoad, (0, _extends2["default"])({}, restItem, {
          ref: _this._refSelect.bind(null, id),
          isShow: isShow,
          isShowLabels: isShowLabels,
          onSelect: _this._hSelect.bind(null, id, index)
        })));
      });
    };

    _this._items = [];
    _this._titles = [0];
    _this._compSelect = {}; //this.date = undefined;

    _this._menuMore = (0, _MenuMore["default"])((0, _assertThisInitialized2["default"])(_this), {
      toggleToolBar: _this._toggleWithToolbar,
      onAbout: _this._clickInfoWithToolbar
    });
    _this.toolbarButtons = _this._createType2WithToolbar(props, {
      noDate: true,
      isOptions: true,
      isToggle: true
    });
    _this._commandButtons = _this._crCommandsWithLoad((0, _assertThisInitialized2["default"])(_this));
    _this._chartOptions = _RouterOptions["default"].crOptions(props);
    _this.state = (0, _extends2["default"])({}, _this._isWithInitialState(), {
      isOptions: false,
      isToggle: false,
      isShowChart: true,
      isShowDate: false
    }, (0, _crDateConfig["default"])('EMPTY'), {}, _crIsToggleInit(props.selectProps));
    return _this;
  }

  var _proto = DialogSelectN.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      if (this.props.isShow === nextProps.isShow) {
        return false;
      }
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        caption = _this$props2.caption,
        isShow = _this$props2.isShow,
        onShow = _this$props2.onShow,
        onFront = _this$props2.onFront,
        selectProps = _this$props2.selectProps,
        noDate = _this$props2.noDate,
        noForDate = _this$props2.noForDate,
        _this$state = this.state,
        chartType = _this$state.chartType,
        isToolbar = _this$state.isToolbar,
        isOptions = _this$state.isOptions,
        isToggle = _this$state.isToggle,
        isShowLabels = _this$state.isShowLabels,
        isShowChart = _this$state.isShowChart,
        isShowDate = _this$state.isShowDate,
        dateDefault = _this$state.dateDefault,
        dateOptions = _this$state.dateOptions,
        validationMessages = _this$state.validationMessages;
    return _react["default"].createElement(_DialogCell["default"].DraggableDialog, {
      isShow: isShow,
      caption: caption,
      menuModel: this._menuMore,
      commandButtons: this._commandButtons,
      onShowChart: onShow,
      onFront: onFront,
      onClose: this._hClose
    }, _react["default"].createElement(_DialogCell["default"].Toolbar, {
      isShow: isToolbar,
      buttons: this.toolbarButtons
    }), _react["default"].createElement(_ModalOptions["default"], {
      isShow: isOptions,
      toggleOption: this._toggleOptionWithToolbar,
      onClose: this._hideOptionsWithToolbar
    }), _react["default"].createElement(_ModalToggle["default"], {
      isShow: isToggle,
      noForDate: noForDate,
      selectProps: selectProps,
      isShowChart: isShowChart,
      isShowDate: isShowDate,
      crIsId: _crIsId,
      onToggle: this._toggleStateBy,
      onCheckCaption: this._checkCaptionBy,
      onUnCheckCaption: this._uncheckCaption,
      onClose: this._hideToggleWithToolbar
    }), this._renderSelects(selectProps, isShow, isShowLabels), _react["default"].createElement(_RowChart["default"], {
      chartType: chartType,
      isShowLabels: isShowLabels,
      isShowChart: isShowChart,
      chartOptions: this._chartOptions,
      onSelectChart: this._hSelectChartType,
      onRegColor: this._onRegColor,
      noDate: noDate,
      isShowDate: isShowDate,
      dateDefault: dateDefault,
      dateOptions: dateOptions,
      onSelecDate: this._hSelectDate
    }), _react["default"].createElement(_DialogCell["default"].ValidationMessages, {
      validationMessages: validationMessages
    }));
  };

  return DialogSelectN;
}(_react.Component), _class2.defaultProps = {
  selectProps: []
}, _temp)) || _class) || _class);
var _default = DialogSelectN;
exports["default"] = _default;
//# sourceMappingURL=DialogSelectN.js.map