'use strict';

exports.__esModule = true;

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _toast = require('./toast');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_message2.default.show = _toast2.default.show;
_message2.default.success = _toast2.default.success;
_message2.default.warning = _toast2.default.warning;
_message2.default.error = _toast2.default.error;
_message2.default.notice = _toast2.default.notice;
_message2.default.help = _toast2.default.help;
_message2.default.loading = _toast2.default.loading;
_message2.default.hide = _toast2.default.hide;

exports.default = _configProvider2.default.config(_message2.default, {
    componentName: 'Message'
});
module.exports = exports['default'];