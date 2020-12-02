# 格式化

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

function customizeFormatter(v) {
    return `custom: ${v.format('YYYY/MM/DD')}`;
}

function App() {
    return (
        <div className="app">
            <div><DatePicker2 format="YYYY/MM/DD"/></div>
            <div><DatePicker2 showTime format="YYYY/MM/DD HH:mm:ss"/></div>
            <div><DatePicker2 format="YYYY/MM/DD HH:mm" showTime timePanelProps={{format: "HH:mm"}}/></div>
            <div><DatePicker2 type="range" format="YYYY/MM/DD" /></div>
            <div><DatePicker2 type="range" format="YYYY/MM/DD HH:mm:ss" showTime/></div>
            <div><DatePicker2 format={customizeFormatter}/></div>
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
