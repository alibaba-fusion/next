'use strict';

exports.__esModule = true;

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _iconFont = require('./icon-font');

var _iconFont2 = _interopRequireDefault(_iconFont);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_icon2.default.createFromIconfontCN = _iconFont2.default;

exports.default = _configProvider2.default.config(_icon2.default);
module.exports = exports['default'];