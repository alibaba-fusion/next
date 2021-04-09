# 无障碍支持

- order: 10

通过`Enter`键点击`button`时，自动聚焦到`Message`上读取信息。

:::lang=en-us
# Accessibility

- order: 10

When you click `button` through the Enter key, it automatically focuses on `Message` to read the information.

:::
---

````jsx
import { Message, Button } from '@alifd/next';

const showSuccess = () => Message.success('success');
ReactDOM.render(
    <div className="message-toast-quick-demo">
        <Button type="primary" onClick={showSuccess}>success</Button>
    </div>, mountNode);

````
