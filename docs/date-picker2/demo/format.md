# 格式化

-   order: 3

使用`format`属性，可以自定义日期显示格式。

:::lang=en-us

# Basic

-   order: 3

Using attribute `format` to change the displayed dates, it will be also used to check user inputs.

:::

---

```jsx
import { useState } from 'react';
import { DatePicker2 } from '@alifd/next';

const { RangePicker} = DatePicker2;

const now = new Date();

function customizeFormatter(v) {
    return `custom: ${v.format('YYYY/MM/DD')}`;
}

function App() {
    return (
        <div className="app">
            <div><DatePicker2 defaultValue={now} format="YYYY/MM/DD"/></div>
            <div><DatePicker2 defaultValue={now}  showTime format="YYYY/MM/DD HH:mm:ss"/></div>
            <div><DatePicker2 defaultValue={now}  format="YYYY/MM/DD HH:mm" showTime timePanelProps={{format: "HH:mm"}}/></div>
            <div><RangePicker defaultValue={[now, now]}  format="YYYY/MM/DD" /></div>
            <div><RangePicker defaultValue={[now, now]} format="YYYY/MM/DD HH:mm:ss" showTime/></div>
            <div><DatePicker2 defaultValue={now}  format={customizeFormatter}/></div>
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
