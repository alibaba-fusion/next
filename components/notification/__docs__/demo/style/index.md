# zh-CN order=6

# 自定义样式

使用 `style` 和 `className` 来定义样式。

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
    mountNode
);
```

# en-US order=6

# Custom Style

use `style` or `className` to custom style;
