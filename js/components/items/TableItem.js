"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));

var _Table = _interopRequireDefault(require("../zhn-table/Table"));

var _ItemHeader = _interopRequireDefault(require("./ItemHeader"));

var S = {
  ROOT: {
    paddingBottom: 8
  },
  ROOT_HEADER: {
    position: 'sticky',
    top: -1,
    zIndex: 1,
    willChange: 'transform'
  },
  CAPTION: {
    width: '100%'
  },
  SHOW_HIDE: {
    paddingTop: 8,
    paddingBottom: 8
  },
  DATA_SOURCE: {
    paddingTop: 2,
    paddingLeft: 12,
    color: '#909090',
    fontSize: '11px'
  }
};

var TableItem = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(TableItem, _Component);

  function TableItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isOpen: true
    };

    _this._hToggle = function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    };

    return _this;
  }

  var _proto = TableItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        thMoreStyle = _this$props.thMoreStyle,
        config = _this$props.config,
        onCloseItem = _this$props.onCloseItem,
        id = config.id,
        title = config.title,
        headers = config.headers,
        rows = config.rows,
        tableFn = config.tableFn,
        dataSource = config.dataSource,
        dsStyle = config.dsStyle,
        _gridId = "tb_" + id,
        isOpen = this.state.isOpen;

    return /*#__PURE__*/_react["default"].createElement("div", {
      style: S.ROOT
    }, /*#__PURE__*/_react["default"].createElement(_ItemHeader["default"], {
      isOpen: isOpen,
      rootStyle: S.ROOT_HEADER,
      caption: title,
      captionStyle: S.CAPTION,
      onClick: this._hToggle,
      onClose: onCloseItem
    }), /*#__PURE__*/_react["default"].createElement(_ShowHide["default"], {
      isShow: isOpen,
      style: S.SHOW_HIDE
    }, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
      gridId: _gridId,
      thMoreStyle: thMoreStyle,
      headers: headers,
      rows: rows,
      tableFn: tableFn
    }), dataSource && /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, S.DATA_SOURCE, dsStyle)
    }, dataSource)));
  };

  return TableItem;
}(_react.Component);

var _default = TableItem;
exports["default"] = _default;
//# sourceMappingURL=TableItem.js.map