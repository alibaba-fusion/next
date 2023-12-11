# zh-CN order=4

# 位置

可以设置通知从右上角、右下角、左下角、左上角弹出。

```jsx
import { Notification, Button } from '@alifd/next';

const openNotification = placement => {
    Notification.config({ placement });
    Notification.open({
        title: 'Notification Title',
        content:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

ReactDOM.render(
    <div className="button-row">
        <Button type="primary" onClick={() => openNotification('tl')}>
            Top Left
        </Button>
        <Button type="primary" onClick={() => openNotification('tr')}>
            Top Right
        </Button>
        <Button type="primary" onClick={() => openNotification('bl')}>
            Bottom Left
        </Button>
        <Button type="primary" onClick={() => openNotification('br')}>
            Bottom Right
        </Button>
    </div>,
    mountNode
);
```

```css
.button-row .next-btn {
    margin-right: 10px;
}
```

# en-US order=4

# Position

Can setting `tl`, `tr`, `bl`, `br`
