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
import { useState } from 'react';
import dayjs from 'dayjs';
import { TimePicker2 } from '@alifd/next';

const preset = [
    {
        label: '此刻',
        value: () => new Date(),
    },
];

function Picker() {
    const [value, onChange] = useState(dayjs('12:00:00', 'HH:mm:ss', true));

    return <TimePicker2 value={value} onChange={onChange} preset={preset} />;
}

ReactDOM.render(<Picker />, mountNode);
```
