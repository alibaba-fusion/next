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
import { DatePicker2 } from '@alifd/next';

const { RangePicker} = DatePicker2;

function App() {
    return (
        <div className="app">
            <div><DatePicker2/></div>
            <div><DatePicker2 mode="month" /></div>
            <div><DatePicker2 mode="week" /></div>
            <div><DatePicker2 mode="year" /></div>
            <div><RangePicker defaultValue={['2020-12-12', '2021-11-13']} /></div>
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
