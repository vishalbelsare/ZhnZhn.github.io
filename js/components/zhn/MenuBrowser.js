'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CaptionRow = require('../CaptionRow');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _MenuPart = require('./MenuPart');

var _MenuPart2 = _interopRequireDefault(_MenuPart);

var _ContainerStyles = require('../styles/ContainerStyles.js');

var _ContainerStyles2 = _interopRequireDefault(_ContainerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _ContainerStyles2.default;

var MenuBrowser = _react2.default.createClass({
  displayName: 'MenuBrowser',

  getInitialState: function getInitialState() {
    var isShow = this.props.isShow ? true : false;
    return {
      isShow: isShow
    };
  },

  componentWillMount: function componentWillMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  },

  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },

  _onStore: function _onStore(actionType, data) {
    if (actionType === this.props.showAction && data === this.props.browserType) {
      this._handlerShow();
    }
  },

  _handlerHide: function _handlerHide() {
    this.state.isShow = false;
    this.setState(this.state);
  },

  _handlerShow: function _handlerShow() {
    this.state.isShow = true;
    this.setState(this.state);
  },

  _renderMenuParts: function _renderMenuParts(menuItems) {
    return menuItems.map(function (menuPart, index) {
      return _react2.default.createElement(_MenuPart2.default, _extends({ key: index }, menuPart));
    });
  },


  render: function render() {
    var _props = this.props;
    var caption = _props.caption;
    var menuItems = _props.menuItems;
    var children = _props.children;


    var styleOpen = this.state.isShow ? { display: 'block' } : { display: 'none' };
    var classOpen = this.state.isShow ? "show-popup" : null;
    return _react2.default.createElement(
      'div',
      { className: classOpen, style: Object.assign({}, styles.browserRootDiv, styleOpen) },
      _react2.default.createElement(_CaptionRow2.default, {
        caption: caption,
        onClose: this._handlerHide
      }),
      this._renderMenuParts(menuItems),
      children
    );
  }
});

exports.default = MenuBrowser;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\zhn\MenuBrowser.js.map