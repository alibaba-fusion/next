# 自定义图标

- order: 2

可以设置使用的图标

:::lang=en-us
# Custom Icon

- order: 1

Change Icon


:::

---

```jsx
import { Notification, Button } from '@alifd/next';

const openNotification = () => {
    const args = {
        title: 'Notification Title',
        content: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        icon: 'smile'
    };
    Notification.open(args);
};

ReactDOM.render(
    <div>
        <Button type="primary" onClick={openNotification} style={{marginLeft: 20}}>
            Open Notification
        </Button>
    </div>,
    mountNode,
);
```
