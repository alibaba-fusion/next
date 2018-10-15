# 弹窗便捷方法

- order: 6

可以通过`Message.success`等静态方法来方便的显示指定类型的信息弹窗。

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
        <Button onClick={showSuccess}>success</Button>
        <Button onClick={showWarning}>warning</Button>
        <Button onClick={showError}>error</Button>
        <Button onClick={showNotice}>notice</Button>
        <Button onClick={showHelp}>help</Button>
        <Button onClick={showLoading}>loading</Button>
    </div>, mountNode);
````

````css
.message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
}
````
