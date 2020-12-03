# 自定义样式

- order: 6

使用 `style` 和 `className` 来定义样式。

:::lang=en-us
# Custom Style

- order: 6

use `style` or `className` to custom style;

:::

---

```jsx
import { Notification, Button } from '@alifd/next';

const openNotification = () => {
    Notification.open({
        title: 'Notification Title',
        content:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        style: {
            width: 600,
            marginLeft: -225,
        },
    });
};

ReactDOM.render(
    <Button type="primary" onClick={openNotification}>
        Open Notification
    </Button>,
    mountNode,
);
```
