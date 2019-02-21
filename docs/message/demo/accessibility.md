# 无障碍

- order: 7

当点击`button`时，自动聚焦到`Message`上读取信息。请参考`ARIA and KeyBoard`。

:::lang=en-us

When you click `button`, it automatically focuses on `Message` to read the information.Please refer to `ARIA and KeyBoard`.


# Addon

- order: 7

:::
---

````jsx
import { Message, Button } from '@alifd/next';

const showSuccess = () => Message.success('success');
ReactDOM.render(
    <div className="message-toast-quick-demo">
        <Button onClick={showSuccess}>success</Button>
    </div>, mountNode);

````
