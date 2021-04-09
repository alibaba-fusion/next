# 弹窗便捷用法

- order: 6

可以通过`Message.success`等静态方法来快速显示指定类型的信息弹窗。

:::lang=en-us
# Quick way of toast

- order: 6

You can use static method such as `Message.success` to show the specified type toast.
:::


---

````jsx
import { Message, Button } from '@alifd/next';


const showSuccess = () => Message.success('success');
const showWarning = () => Message.warning('warning');
const showError = () => Message.error('error');
const showNotice = () => Message.notice('notice');
const showHelp = () => Message.help('help');
const showLoading = () => Message.loading('loading');

ReactDOM.render(
    <div className="message-toast-quick-demo">
        <Button type="primary" onClick={showSuccess}>success</Button>
        <Button type="primary" onClick={showWarning}>warning</Button>
        <Button type="primary" onClick={showError}>error</Button>
        <Button type="primary" onClick={showNotice}>notice</Button>
        <Button type="primary" onClick={showHelp}>help</Button>
        <Button type="primary" onClick={showLoading}>loading</Button>
    </div>, mountNode);
````

````css
.message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
}
````
