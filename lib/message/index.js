"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var message_1 = tslib_1.__importDefault(require("./message"));
var toast_1 = tslib_1.__importStar(require("./toast"));
var toast2_1 = tslib_1.__importDefault(require("./toast2"));
var component_1 = require("../util/component");
var WithSubMessage = (0, component_1.assignSubComponent)(message_1.default, {
    show: toast_1.default.show,
    success: toast_1.default.success,
    warning: toast_1.default.warning,
    error: toast_1.default.error,
    notice: toast_1.default.notice,
    help: toast_1.default.help,
    loading: toast_1.default.loading,
    hide: toast_1.default.hide,
    withContext: toast_1.withContext,
});
var MessageProvider = config_provider_1.default.config(WithSubMessage, {
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
