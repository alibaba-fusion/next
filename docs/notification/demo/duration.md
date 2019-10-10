# 自动关闭延时

- order: 1

自定义关闭的延迟，默认 `4.5s`, 为 `0` 时则一直存在

:::lang=en-us
# Duration

- order: 1

`Duration` can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically.


:::

---

```jsx
import { Notification, Button, NumberPicker } from '@alifd/next';

let duration = 4500;
const openNotification = () => {
    const args = {
        title: 'Notification Title',
        content: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration,
    };
    Notification.open(args);
};

ReactDOM.render(
    <div>
        <NumberPicker defaultValue={duration} onChange={(v) => (duration = v || 0)} />
        <Button type="primary" onClick={openNotification} style={{marginLeft: 20}}>
            Open Notification
        </Button>
    </div>,
    mountNode,
);
```
