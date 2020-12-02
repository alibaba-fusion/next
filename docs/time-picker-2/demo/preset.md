# 预设

-   order: 8

预设

:::lang=en-us

# Preset

-   order: 8

preset

:::

---

```jsx
import { TimePicker2 } from '@alifd/next';

const preset = [
    {
        label: '此刻',
        value: () => new Date(),
        type: 'secondary',
    },
];

ReactDOM.render(<TimePicker2 onChange={console.log} ranges={preset} />, mountNode);
```
