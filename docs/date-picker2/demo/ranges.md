# 预设时间范围快捷选择

-   order: 0

预设时间范围快捷选择。

:::lang=en-us

# Basic

-   order: 0

A basic usage case.

:::

---

```jsx
import { useState } from 'react';
import { DatePicker2 } from '@alifd/next';
import dayjs from 'dayjs';

const { RangePicker} = DatePicker2;

function App() {
    return (
        <div className="app">
            <div>
                <RangePicker ranges={{
                    '今天': [dayjs(), dayjs()],
                    '本月': [dayjs().startOf('month'), dayjs().endOf('month')],
                }}/>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
```

```css
.app > div {
    margin-bottom: 20px;
}
```
