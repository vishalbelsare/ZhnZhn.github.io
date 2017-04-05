'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _ObjUtil = require('../ObjUtil');

var _ObjUtil2 = _interopRequireDefault(_ObjUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('findInPropArrayByProp', function () {
  test('should return obj', function () {
    var obj = {
      lists: [{ a: 1 }, { a: 2 }, { a: 3 }]
    },
        fn = _ObjUtil2.default.findInPropArrayByProp('lists', 'a');

    expect(typeof fn === 'undefined' ? 'undefined' : (0, _typeof3.default)(fn)).toBe('function');
    expect(fn(obj, 1)).toEqual({ a: 1 });
    expect(fn(obj, 2)).toEqual({ a: 2 });
    expect(fn(obj, 3)).toEqual({ a: 3 });
  });
});
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\utils\__tests__\ObjUtil.test.js.map