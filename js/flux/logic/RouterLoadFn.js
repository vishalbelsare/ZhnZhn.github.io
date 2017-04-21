'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('../creaters/type3');

var _type2 = _interopRequireDefault(_type);

var _type3 = require('../creaters/type4');

var _type4 = _interopRequireDefault(_type3);

var _type5 = require('../creaters/type5');

var _type6 = _interopRequireDefault(_type5);

var _futures = require('../creaters/futures3');

var _futures2 = _interopRequireDefault(_futures);

var _futuresWiki = require('../creaters/futuresWiki');

var _futuresWiki2 = _interopRequireDefault(_futuresWiki);

var _bigMac = require('../creaters/bigMac');

var _bigMac2 = _interopRequireDefault(_bigMac);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noopFn = function noopFn() {};

var _r = {
  BigMac: _bigMac2.default,

  DEFAULT: _type2.default,
  DialogType3: _type2.default,
  DialogType4: _type4.default,
  DialogType4A: _type4.default,
  DialogType5: _type6.default,

  Futures3Dialog: _futures2.default,
  FuturesWikiDialog: _futuresWiki2.default
};

var RouterLoadFn = {
  getFn: function getFn(loadFnType, dialogType) {
    if (loadFnType) {
      if (_r[loadFnType]) {
        return _r[loadFnType];
      } else {
        return noopFn;
      }
    } else if (dialogType && _r[dialogType]) {
      return _r[dialogType];
    } else {
      return _r.DEFAULT;
    }
  }
};

exports.default = RouterLoadFn;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\flux\logic\RouterLoadFn.js.map