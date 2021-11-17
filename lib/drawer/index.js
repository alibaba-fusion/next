'use strict';

exports.__esModule = true;

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _drawer = require('./drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _inner = require('./inner');

var _inner2 = _interopRequireDefault(_inner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_drawer2.default.Inner = _inner2.default;
exports.default = _configProvider2.default.config(_drawer2.default);
module.exports = exports['default'];