'use strict';

exports.__esModule = true;

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _virtualList = require('./virtual-list');

var _virtualList2 = _interopRequireDefault(_virtualList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_virtualList2.default);
module.exports = exports['default'];