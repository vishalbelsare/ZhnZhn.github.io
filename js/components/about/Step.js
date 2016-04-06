'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  step: {
    display: 'inline-block',
    color: '#80c040',
    border: '2px solid #80c040',
    borderRadius: '50%',
    width: '22px',
    height: '22px',
    textAlign: 'center'
  }
};

var Step = _react2.default.createClass({
  displayName: 'Step',
  render: function render() {
    return _react2.default.createElement(
      'span',
      { style: styles.step },
      this.props.step
    );
  }
});

exports.default = Step;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\about\Step.js.map