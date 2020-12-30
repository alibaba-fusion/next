'use strict';

exports.__esModule = true;

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

require('./main.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_calendar2.default);
module.exports = exports['default'];