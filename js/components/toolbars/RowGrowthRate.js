'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DialogCell = require('../dialogs/DialogCell');

var _DialogCell2 = _interopRequireDefault(_DialogCell);

var _A = require('../zhn/A');

var _A2 = _interopRequireDefault(_A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_COLOR = '#d2b772';
//const OC_COLOR = '#1b2836';
var OC_COLOR = 'black';
var DF_PERIOD = 1;

var S = {
  ROOT_OC: {
    marginLeft: -8
  },
  OC: {
    width: 'auto',
    paddingRight: 8
  },
  CAPTION: {
    color: OC_COLOR
  },
  PERIOD_INPUT: {
    width: 56,
    marginRight: 12
  },
  PL_6: {
    paddingLeft: 6
  },
  PL_8: {
    paddingLeft: 8
  },
  PL_24: {
    paddingLeft: 24
  },
  TEXT: {
    display: 'inline-block',
    color: 'grey',
    paddingLeft: 4,
    fontWeight: 'bold'
  },
  INLINE: {
    display: 'inline-block'
  },
  NONE: {
    display: 'none'
  },
  fnSpan: function fnSpan(color) {
    return {
      color: color, paddingLeft: 8
    };
  }
};

var InputPlus = function InputPlus(_ref) {
  var initValue = _ref.initValue,
      onChangePeriod = _ref.onChangePeriod,
      onPlus = _ref.onPlus;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_A2.default.InputText, {
      style: S.PERIOD_INPUT,
      type: 'number',
      initValue: initValue,
      min: 1,
      max: 999,
      maxLength: 3,
      onInputChange: onChangePeriod,
      onEnter: onPlus
    }),
    _react2.default.createElement(_A2.default.SvgPlus, { style: S.INLINE, onClick: onPlus })
  );
};
var MinusPeriod = function MinusPeriod(_ref2) {
  var color = _ref2.color,
      period = _ref2.period,
      onMinus = _ref2.onMinus;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_A2.default.SvgMinus, {
      style: S.INLINE,
      onClick: onMinus
    }),
    _react2.default.createElement(
      'span',
      { style: S.fnSpan(color) },
      period
    )
  );
};

var RowGrowthRate = function RowGrowthRate(_ref3) {
  var is = _ref3.is,
      onMinus = _ref3.onMinus,
      onPlus = _ref3.onPlus;

  var _refColor = (0, _react.useRef)(INITIAL_COLOR),
      _refPeriod = (0, _react.useRef)(DF_PERIOD),
      _refSeriaType = (0, _react.useRef)('column'),
      _refOnTop = (0, _react.useRef)(false),
      _onColor = function _onColor(color) {
    return _refColor.current = color;
  },
      _onChangePeriod = function _onChangePeriod(n) {
    return _refPeriod.current = parseInt(n, 10) || DF_PERIOD;
  },
      _onCheckColumn = function _onCheckColumn() {
    return _refSeriaType.current = 'column';
  },
      _onUnCheckColumn = function _onUnCheckColumn() {
    return _refSeriaType.current = 'spline';
  },
      _onCheckTop = function _onCheckTop() {
    return _refOnTop.current = true;
  },
      _onUnCheckTop = function _onUnCheckTop() {
    return _refOnTop.current = false;
  },
      _onPlus = function _onPlus() {
    return onPlus({
      color: _refColor.current,
      type: _refSeriaType.current,
      zIndex: _refOnTop.current ? undefined : -1
    }, _refPeriod.current);
  };

  return _react2.default.createElement(
    _A2.default.OpenClose,
    {
      isClose: true,
      rootStyle: S.ROOT_OC,
      ocStyle: S.OC,
      caption: 'Growth Rate',
      captionStyle: S.CAPTION,
      openColor: OC_COLOR,
      CompAfter: is ? _react2.default.createElement(MinusPeriod, {
        color: _refColor.current,
        period: _refPeriod.current,
        onMinus: onMinus
      }) : _react2.default.createElement(InputPlus, {
        initValue: _refPeriod.current,
        onChangePeriod: _onChangePeriod,
        onPlus: _onPlus
      })
    },
    _react2.default.createElement(
      'div',
      { style: S.PL_8 },
      _react2.default.createElement(_DialogCell2.default.RowInputColor, {
        styleCaption: S.NONE,
        initValue: INITIAL_COLOR,
        onEnter: _onColor
      }),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_DialogCell2.default.RowCheckBox, {
          caption: 'Column',
          rootStyle: (0, _extends3.default)({}, S.INLINE, S.PL_6),
          styleCaption: S.PL_6,
          checkedColor: OC_COLOR,
          initValue: true,
          onCheck: _onCheckColumn,
          onUnCheck: _onUnCheckColumn
        }),
        _react2.default.createElement(_DialogCell2.default.RowCheckBox, {
          caption: 'OnTop',
          rootStyle: (0, _extends3.default)({}, S.INLINE, S.PL_24),
          styleCaption: S.PL_6,
          checkedColor: OC_COLOR,
          initValue: false,
          onCheck: _onCheckTop,
          onUnCheck: _onUnCheckTop
        })
      ),
      _react2.default.createElement(
        'div',
        { style: S.TEXT },
        'Def: 100*(\u0394y',
        _react2.default.createElement(
          'sub',
          null,
          't1-t0'
        ),
        '/y',
        _react2.default.createElement(
          'sub',
          null,
          't0'
        ),
        ')'
      )
    )
  );
};

exports.default = RowGrowthRate;
//# sourceMappingURL=RowGrowthRate.js.map