"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_provider_1 = require("../config-provider");
var message_1 = require("./message");
var toast_1 = require("./toast");
var toast2_1 = require("./toast2");
message_1.default.show = toast_1.default.show;
message_1.default.success = toast_1.default.success;
message_1.default.warning = toast_1.default.warning;
message_1.default.error = toast_1.default.error;
message_1.default.notice = toast_1.default.notice;
message_1.default.help = toast_1.default.help;
message_1.default.loading = toast_1.default.loading;
message_1.default.hide = toast_1.default.hide;
message_1.default.withContext = toast_1.withContext;
var MessageProvider = config_provider_1.default.config(message_1.default, {
    componentName: 'Message',
});
exports.default = MessageProvider;
var openV2 = false;
// 调用 config 开启 v2 版本的 message
MessageProvider.config = function (config) {
    toast2_1.default.config(config);
    if (!openV2) {
        MessageProvider.show = toast2_1.default.open; // 兼容 show 用法, 后续计划都改成 open（ Notification 已经用了 open）
        MessageProvider.open = toast2_1.default.open;
        MessageProvider.hide = toast2_1.default.close; // 兼容 hide 用法, 后续计划都改成 open（ Notification 已经用了 close)
        MessageProvider.close = toast2_1.default.close;
        MessageProvider.destory = toast2_1.default.destory;
        MessageProvider.success = toast2_1.default.success;
        MessageProvider.warning = toast2_1.default.warning;
        MessageProvider.error = toast2_1.default.error;
        MessageProvider.notice = toast2_1.default.notice;
        MessageProvider.help = toast2_1.default.help;
        MessageProvider.loading = toast2_1.default.loading;
        openV2 = true;
    }
};
