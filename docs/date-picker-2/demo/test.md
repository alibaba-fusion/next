# 测试Demo

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
import { DatePicker2 } from '@alifd/next';

const { RangePicker} = DatePicker2;

function App() {
    return (
        <div className="app">
            inputReadOnly:
            <div> <DatePicker2 inputReadOnly/></div>

            disabled
            <div><DatePicker2 disabled mode="month" /></div>
            <div><DatePicker2 mode="week" /></div>
            <div><DatePicker2 mode="year" /></div>
            <div><RangePicker /></div>
            <div><RangePicker mode="week" /></div>
            <div><RangePicker mode="month" /></div>
            <div><RangePicker mode="year" /></div>
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
