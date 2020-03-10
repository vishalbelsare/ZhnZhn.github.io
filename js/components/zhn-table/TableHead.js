"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _SvgMore = _interopRequireDefault(require("../zhn/SvgMore"));

var _ModalMenu = _interopRequireDefault(require("./ModalMenu"));

var _Style = _interopRequireDefault(require("./Style"));

var _tableFn = _interopRequireDefault(require("./tableFn"));

var C = {
  UP: 'UP',
  DOWN: 'DOWN',
  ASC: 'ascending',
  DESC: 'descending'
};

var TableHead =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(TableHead, _Component);

  function TableHead() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isMenuMore: false
    };

    _this._hToggleMenuMore = function (evt) {
      evt.stopPropagation();

      _this.setState(function (prevState) {
        return {
          isMenuMore: !prevState.isMenuMore
        };
      });
    };

    _this._hThKeyPressed = function (pn, evt) {
      evt.preventDefault();
      var which = evt.which;

      if (which === 13 || which === 32) {
        _this.props.onSort(pn);
      }
    };

    _this._renderHeader = function () {
      var _this$props = _this.props,
          gridId = _this$props.gridId,
          thMoreStyle = _this$props.thMoreStyle,
          headers = _this$props.headers,
          sortBy = _this$props.sortBy,
          sortTo = _this$props.sortTo,
          onSort = _this$props.onSort;
      return headers.map(function (h, hIndex) {
        var name = h.name,
            pn = h.pn,
            _FN$crAppearance = _tableFn["default"].crAppearance({
          S: _Style["default"],
          C: C,
          pn: pn,
          name: name,
          sortBy: sortBy,
          sortTo: sortTo
        }),
            style = _FN$crAppearance.style,
            ariaSort = _FN$crAppearance.ariaSort,
            ariaLabel = _FN$crAppearance.ariaLabel,
            _elMore = hIndex === 0 ? _react["default"].createElement(_SvgMore["default"], {
          style: _Style["default"].BT_SVG_MORE,
          svgStyle: _Style["default"].SVG_MORE,
          onClick: _this._hToggleMenuMore
        }) : null,
            _thStyle = hIndex === 0 ? thMoreStyle : null;

        return _react["default"].createElement("th", {
          key: h.name,
          style: (0, _extends2["default"])({}, _Style["default"].TH, {}, _thStyle, {}, style),
          rowSpan: "1",
          colSpan: "1",
          tabIndex: "0",
          "arial-controls": gridId,
          "aria-label": ariaLabel,
          "aria-sort": ariaSort,
          onClick: onSort.bind(null, pn),
          onKeyPress: _this._hThKeyPressed.bind(null, pn)
        }, _elMore, name);
      });
    };

    return _this;
  }

  var _proto = TableHead.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        isGridLine = _this$props2.isGridLine,
        onCheckGridLine = _this$props2.onCheckGridLine,
        onUnCheckGridLine = _this$props2.onUnCheckGridLine,
        isMenuMore = this.state.isMenuMore;
    return _react["default"].createElement("thead", {
      style: _Style["default"].THEAD
    }, _react["default"].createElement("tr", null, this._renderHeader()), _react["default"].createElement(_ModalMenu["default"], {
      isShow: isMenuMore,
      style: _Style["default"].STYLE_MORE,
      onClose: this._hToggleMenuMore,
      isGridLine: isGridLine,
      onCheck: onCheckGridLine,
      onUnCheck: onUnCheckGridLine
    }));
  };

  return TableHead;
}(_react.Component);

var _default = TableHead;
exports["default"] = _default;
//# sourceMappingURL=TableHead.js.map