# zh-CN order=0

# 基本

最简单的用法, 4.5s 后关闭

```jsx
import { Notification, Button } from '@alifd/next';

const openNotification = () => {
    Notification.open({
        title: 'Notification Title',
        content:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
            console.log('Notification Clicked!');
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

# en-US order=0

# Basic

Simplest use, closed after 4.5
