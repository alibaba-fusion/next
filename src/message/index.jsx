import ConfigProvider from '../config-provider';
import Message from './message';
import toast, { withContext } from './toast';
import message from './toast2';

Message.show = toast.show;
Message.success = toast.success;
Message.warning = toast.warning;
Message.error = toast.error;
Message.notice = toast.notice;
Message.help = toast.help;
Message.loading = toast.loading;
Message.hide = toast.hide;
Message.withContext = withContext;

const MessageProvider = ConfigProvider.config(Message, {
    componentName: 'Message',
});

export default MessageProvider;

let openV2 = false;
// 调用 config 开启 v2 版本的 message
MessageProvider.config = config => {
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
