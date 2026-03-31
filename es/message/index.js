import ConfigProvider from '../config-provider';
import Message from './message';
import toast, { withContext } from './toast';
import message from './toast2';
import { assignSubComponent } from '../util/component';
var WithSubMessage = assignSubComponent(Message, {
    show: toast.show,
    success: toast.success,
    warning: toast.warning,
    error: toast.error,
    notice: toast.notice,
    help: toast.help,
    loading: toast.loading,
    hide: toast.hide,
    withContext: withContext,
});
var MessageProvider = ConfigProvider.config(WithSubMessage, {
    componentName: 'Message',
});
export default MessageProvider;
var openV2 = false;
// 调用 config 开启 v2 版本的 message
MessageProvider.config = function (config) {
    message.config(config);
    if (!openV2) {
        MessageProvider.show = message.open; // 兼容 show 用法, 后续计划都改成 open（ Notification 已经用了 open）
        MessageProvider.open = message.open;
        MessageProvider.hide = message.close; // 兼容 hide 用法, 后续计划都改成 open（ Notification 已经用了 close)
        MessageProvider.close = message.close;
        MessageProvider.destory = message.destory;
        MessageProvider.success = message.success;
        MessageProvider.warning = message.warning;
        MessageProvider.error = message.error;
        MessageProvider.notice = message.notice;
        MessageProvider.help = message.help;
        MessageProvider.loading = message.loading;
        openV2 = true;
    }
};
