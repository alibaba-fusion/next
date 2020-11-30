# 基本用法

-   order: 0

最基本的用法。可以通过 `onChange` 监听选中值的变化。

:::lang=en-us

# Basic

-   order: 0

A basic usage case.

:::

---

```jsx
import { useState } from 'react';
import { DatePicker2, Switch } from '@alifd/next';

function App() {
    const [mode, setMode] = useState('date');

    const onChange = v => {
        setMode(v ? 'date' : 'range');
    };

    return (
        <div>
            <div className="main">
                <DatePicker2 showTime format="YYYY-MM-DD HH:mm:ss" type="range" />
            </div>
            <div className="main">
                <DatePicker2 format="YYYY-MM-DD HH:mm:ss" type="range" />
            </div>
            <div className="main">
                <DatePicker2
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    ranges={{ Now: '2010-11', Next: Date.now() }}
                />
            </div>
            <div className="main">
                <DatePicker2 format="YYYY-MM-DD HH:mm:ss" />
            </div>
            <div className="main">
                <DatePicker2 mode="year" format="YYYY-MM-DD HH:mm:ss" />
            </div>
            <div className="main">
                <DatePicker2 mode="month" format="YYYY-MM-DD HH:mm:ss" />
            </div>
            <div className="main">
                <DatePicker2 mode="week" format="YYYY-MM-DD HH:mm:ss" type="range" />
            </div>
            <div className="main">
                <DatePicker2 mode="year" format="YYYY-MM-DD HH:mm:ss" type="range" />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
```

```css
.main {
    margin-bottom: 20px;
}
```
