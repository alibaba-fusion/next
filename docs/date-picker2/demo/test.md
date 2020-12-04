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
import { DatePicker2, Input } from '@alifd/next';

const { RangePicker} = DatePicker2;

function App() {
    return (
        <div className="app">
            inputReadOnly:
            <div> <DatePicker2 inputReadOnly/></div>
            <div> <RangePicker inputReadOnly/></div>

            disabled:
            <div> <DatePicker2 disabled/><Input disabled/></div>
            <div> <RangePicker disabled/></div>
            <div> <RangePicker disabled={[true, false]} defaultValue={[Date(), null]}/></div>


            <div><DatePicker2  mode="month" /></div>
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
.app {
    line-height: 1.8;
}
.app > div {
    margin-bottom: 20px;
}
```
