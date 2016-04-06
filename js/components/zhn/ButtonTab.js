'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  div: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: '300px',
    backgroundColor: '#232F3B',
    color: 'rgba(164, 135, 212, 1)',
    paddingLeft: '6px',
    paddingRight: '6px',
    paddingTop: '3px',
    paddingBottom: '3px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    cursor: 'pointer'
  }
};

var ButtonTab = _react2.default.createClass({
  displayName: 'ButtonTab',
  render: function render() {
    var _props = this.props;
    var caption = _props.caption;
    var onClick = _props.onClick;

    return _react2.default.createElement(
      'div',
      {
        style: styles.div,
        onClick: onClick
      },
      caption
    );
  }
});

exports.default = ButtonTab;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\zhn\ButtonTab.js.map