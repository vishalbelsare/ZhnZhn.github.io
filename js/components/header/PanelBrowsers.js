'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShowHide = require('../zhn/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROOT: {
    position: 'absolute',
    zIndex: 10,
    top: '45px',
    left: '100px',

    backgroundColor: 'rgb(77, 77, 77)',
    border: '2px solid rgb(35, 47, 59)',
    borderBottom: '4px solid green',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 5px',

    padding: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',

    width: '210px'
  }
};

var PanelBrowsers = function PanelBrowsers(props) {
  var isShow = props.isShow;
  var browserConfig = props.browserConfig;
  var onClickQuandl = props.onClickQuandl;
  var onClickDynamic = props.onClickDynamic;
  var onClickWatch = props.onClickWatch;

  return _react2.default.createElement(
    _ShowHide2.default,
    { isShow: isShow, style: STYLE.ROOT },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        {
          className: 'row__topic__odd item__quandl',
          onClick: onClickQuandl
        },
        'Quandl Economic'
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'row__topic__even item__quandl',
          onClick: onClickDynamic.bind(null, browserConfig.YAHOO)
        },
        'Quandl Yahoo Stocks'
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'row__topic__odd item__quandl',
          onClick: onClickDynamic.bind(null, browserConfig.GOOGLE)
        },
        'Quandl Google Stocks'
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'row__topic__even item__eurostat',
          onClick: onClickDynamic.bind(null, browserConfig.EUROSTAT)
        },
        'Eurostat'
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'row__topic__odd item__watch',
          onClick: onClickWatch
        },
        'Watch'
      )
    )
  );
};

exports.default = PanelBrowsers;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\header\PanelBrowsers.js.map