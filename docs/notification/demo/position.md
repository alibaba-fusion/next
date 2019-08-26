# 位置

- order: 4

可以设置通知从右上角、右下角、左下角、左上角弹出。

:::lang=en-us
# Position

- order: 4

Can setting `topLeft`, `topRight`, `bottomLeft`, `bottomRight`

:::

---

```jsx
import { Notification, Button } from '@alifd/next';

const openNotification = (placement) => {
    Notification.config({placement});
    Notification.open({
        title: 'Notification Title',
        content:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

ReactDOM.render(
    <div className="button-row">
        <Button onClick={() => openNotification('topLeft')}>
            Top Left
        </Button>
        <Button onClick={() => openNotification('topRight')}>
            Top Right
        </Button>
        <Button onClick={() => openNotification('bottomLeft')}>
            Bottom Left
        </Button>
        <Button onClick={() => openNotification('bottomRight')}>
            Bottom Right
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
