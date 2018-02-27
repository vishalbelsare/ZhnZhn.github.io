'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fTableApi = require('../stat-json/fTableApi');

var _fTableApi2 = _interopRequireDefault(_fTableApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROOT_URL = 'http://api.scb.se/OV0104/v1/doris/en/ssd';
var TableApi = (0, _fTableApi2.default)(ROOT_URL);

exports.default = TableApi;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\adapters\stat-sweden\ApiTable.js.map