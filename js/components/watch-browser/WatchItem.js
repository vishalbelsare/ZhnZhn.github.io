'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ITEM_DIV: {
    position: 'relative',
    paddingRight: '40px',
    lineHeight: 1.4,
    paddingTop: '5px',
    paddingBottom: '5px'
  },
  ITEM_SPAN: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '100%',
    maxWidth: '250px',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },

  SVG_CLOSE: {
    position: 'absolute',
    right: 0
  }

};

var WatchItem = function WatchItem(props) {
  var item = props.item;
  var className = props.className;
  var isModeEdit = props.isModeEdit;
  var option = props.option;
  var onClick = props.onClick;
  var onClose = props.onClose;
  var onDragStart = props.onDragStart;
  var onDragEnter = props.onDragEnter;
  var onDragOver = props.onDragOver;
  var onDragLeave = props.onDragLeave;
  var onDrop = props.onDrop;
  var caption = item.caption;
  var _btClose = isModeEdit ? _react2.default.createElement(_SvgClose2.default, {
    style: STYLE.SVG_CLOSE,
    onClose: onClose.bind(null, option)
  }) : undefined;
  return _react2.default.createElement(
    'div',
    {
      className: className,
      style: STYLE.ITEM_DIV,
      onClick: onClick.bind(null, item)
      //onClick={ComponentActions.showModalDialog.bind(null, ModalDialog.LOAD_ITEM, item)}
      , draggable: isModeEdit,
      onDragStart: isModeEdit && onDragStart.bind(null, option),
      onDrop: isModeEdit && onDrop.bind(null, option),
      onDragOver: isModeEdit && onDragOver,
      onDragEnter: isModeEdit && onDragEnter,
      onDragLeave: isModeEdit && onDragLeave
    },
    _react2.default.createElement(
      'span',
      { style: STYLE.ITEM_SPAN },
      caption
    ),
    _btClose
  );
};

exports.default = WatchItem;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\watch-browser\WatchItem.js.map