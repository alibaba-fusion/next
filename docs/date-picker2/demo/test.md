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


            defaultValue
            <div> <DatePicker2 defaultValue={Date.now()} /></div>
            <div> <RangePicker defaultValue={[Date(), Date.now()]} /></div>
            <div> <RangePicker defaultValue={['2020-10-10', '2020-11-10']}/></div>
            <div> <RangePicker defaultValue={['2020-12-10', '2020-11-10']}/></div>
            <div> <RangePicker defaultValue={'Invalid value'} /></div>
            <div> <DatePicker2 defaultValue={'Invalid value'} /></div>
            value
            <div> <DatePicker2 value={Date.now()} /></div>
            <div> <RangePicker value={[, Date.now()]} /></div>
            <div> <RangePicker value={['2020-10-10', '2020-11-10']}/></div>
            <div> <RangePicker value={['2020-12-10', '2020-11-10']}/></div>
            <div> <RangePicker value={'Invalid value'} /></div>
            <div> <DatePicker2 value={'Invalid value'} /></div>

            trigger
            <div><DatePicker2  trigger={<a herf=''>选择日期</a>} /></div>

            placeholder
            <div><DatePicker2 placeholder='YYYY/MM/DD' format="YYYY/MM/DD" /></div>
            <div><RangePicker placeholder='YYYY/MM/DD' format="YYYY/MM/DD" /></div>
            <div><RangePicker placeholder={['开始时间', '结束时间']} format="YYYY/MM/DD" /></div>

            timePanelProps
            <div><DatePicker2 format="YYYY/MM/DD HH:mm" showTime timePanelProps={{minuteStep: 15, showSecond: false}} /></div>
            <div><DatePicker2 showTime /></div>
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
