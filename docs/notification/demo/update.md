# 更新通知内容

- order: 5

可以通过唯一的 `key` 来更新内容。

:::lang=en-us
# Update Content

- order: 5

Update content with unique key.

:::

---

```jsx
import { Notification, Button } from '@alifd/next';

const key = 'updatable';

const openNotification = () => {
    Notification.open({
        key,
        title: 'Notification Title',
        content: 'description.',
    });
    setTimeout(() => {
        Notification.open({
            key,
            title: 'New Title',
            content: 'New description.',
        });
    }, 1000);
};

ReactDOM.render(
    <Button type="primary" onClick={openNotification}>
        Open Notification
    </Button>,
    mountNode,
);
```
