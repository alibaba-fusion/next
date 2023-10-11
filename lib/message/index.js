'use strict';

exports.__esModule = true;

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _toast = require('./toast');

var _toast2 = _interopRequireDefault(_toast);

var _toast3 = require('./toast2');

var _toast4 = _interopRequireDefault(_toast3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_message2.default.show = _toast2.default.show;
_message2.default.success = _toast2.default.success;
_message2.default.warning = _toast2.default.warning;
_message2.default.error = _toast2.default.error;
_message2.default.notice = _toast2.default.notice;
_message2.default.help = _toast2.default.help;
_message2.default.loading = _toast2.default.loading;
_message2.default.hide = _toast2.default.hide;
_message2.default.withContext = _toast.withContext;

var MessageProvider = _configProvider2.default.config(_message2.default, {
    componentName: 'Message'
});

exports.default = MessageProvider;


var openV2 = false;
// 调用 config 开启 v2 版本的 message
MessageProvider.config = function (config) {
    _toast4.default.config(config);

    if (!openV2) {
        MessageProvider.show = _toast4.default.open; // 兼容 show 用法, 后续计划都改成 open（ Notification 已经用了 open）
        MessageProvider.open = _toast4.default.open;
        MessageProvider.hide = _toast4.default.close; // 兼容 hide 用法, 后续计划都改成 open（ Notification 已经用了 close)
        MessageProvider.close = _toast4.default.close;
        MessageProvider.destory = _toast4.default.destory;
        MessageProvider.success = _toast4.default.success;
        MessageProvider.warning = _toast4.default.warning;
        MessageProvider.error = _toast4.default.error;
        MessageProvider.notice = _toast4.default.notice;
        MessageProvider.help = _toast4.default.help;
        MessageProvider.loading = _toast4.default.loading;

        openV2 = true;
    }
};
module.exports = exports['default'];