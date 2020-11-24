# 全屏日历

-   order: 0

最简单的日历用法，用户可以切换年/月。

:::lang=en-us

# Fullscreen

-   order: 0

A basic fullscreen calendar.

:::

---

```jsx
import React, { useState } from 'react';
import { CalendarNext } from '@alifd/next';
import moment from 'moment';

function App() {
    const [value, setValue] = useState(new Date());

    function onDateChange(v) {
        console.log('onDateChange', v);
        setValue(v);
    }

    return (
        <div>
            {[value].map((v, index) => (
                <p key={index}>{(v || '').toString()}</p>
            ))}
            <CalendarNext onChange={onDateChange} defaultValue={value} />
            <CalendarNext onChange={onDateChange} defaultValue={value} />
            <CalendarNext onChange={onDateChange} defaultValue={value} />
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
```
