'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModalPopup = require('../zhn-moleculs/ModalPopup');

var _ModalPopup2 = _interopRequireDefault(_ModalPopup);

var _SubMenuItem = require('./SubMenuItem');

var _SubMenuItem2 = _interopRequireDefault(_SubMenuItem);

var _ModalMenu = require('./ModalMenu.Style');

var _ModalMenu2 = _interopRequireDefault(_ModalMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalMenuFn = function ModalMenuFn(_ref) {
  var isShow = _ref.isShow,
      onClose = _ref.onClose,
      onX2H = _ref.onX2H,
      onCopy = _ref.onCopy,
      onPasteTo = _ref.onPasteTo;
  return _react2.default.createElement(
    _ModalPopup2.default,
    {
      isShow: isShow,
      style: _ModalMenu2.default.ROOT,
      onClose: onClose
    },
    _react2.default.createElement(
      'div',
      { style: _ModalMenu2.default.PANE },
      _react2.default.createElement(_SubMenuItem2.default, {
        caption: 'x2H',
        onClick: onX2H
      }),
      _react2.default.createElement(_SubMenuItem2.default, {
        caption: 'Copy',
        isNotActive: true,
        onClick: onCopy
      }),
      _react2.default.createElement(_SubMenuItem2.default, {
        caption: 'PasteTo',
        isNotActive: true,
        onClick: onPasteTo
      })
    )
  );
};

exports.default = ModalMenuFn;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\items\ModalMenuFn.js.map