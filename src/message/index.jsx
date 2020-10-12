import ConfigProvider from '../config-provider';
import Message from './message';
import toast, { withContext } from './toast';

Message.show = toast.show;
Message.success = toast.success;
Message.warning = toast.warning;
Message.error = toast.error;
Message.notice = toast.notice;
Message.help = toast.help;
Message.loading = toast.loading;
Message.hide = toast.hide;
Message.withContext = withContext;

export default ConfigProvider.config(Message, {
    componentName: 'Message',
});
