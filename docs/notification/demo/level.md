# 不同类型的通知框

- order: 3

`success`, `warning`, `error`, `notice`, `help` 类型的通知框

:::lang=en-us
# Level Notification

- order: 3

More level Noticfiction

:::

---

```jsx
import { Notification, Button } from '@alifd/next';

const openNotification = (type) => {
    Notification.open({
        title: 'Notification Title',
        content: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        type,
    });
};

ReactDOM.render(
    <div className="button-row">
        <Button onClick={() => openNotification('success')}>
            success
        </Button>
        <Button onClick={() => openNotification('warning')}>
            warning
        </Button>
        <Button onClick={() => openNotification('error')}>
            error
        </Button>
        <Button onClick={() => openNotification('notice')}>
            notice
        </Button>
        <Button onClick={() => openNotification('help')}>
            help
        </Button>
    </div>,
    mountNode,
);
```

```css
.button-row .next-btn {
    margin-right: 10px;
}
```
