# 范围选择

-   order: 1

指定范围选择器类型。

:::lang=en-us

# RangePicker

-   order: 1

Choose a RangePicker.

:::

---

```jsx
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;

const App = () => {
    const [mode, setMode] = useState('month');
    const onChange = (date, dateStr) => console.log(date, dateStr);
    const onModeChange = (date, dateStr) => {
        console.log(date, dateStr);
        setMode('year');
    };

    return (
        <div className="app">
            <div><RangePicker onChange={onChange} /></div>
            <div><RangePicker placeholder={['开始月', '结束月']} mode={mode} onChange={onModeChange} value={['2023-06', '2024-05']}/></div>
            <div><RangePicker placeholder={['开始年', '结束年']} mode="year" onChange={onChange} /></div>
            <div><RangePicker placeholder={['开始周', '结束周']} mode="week" onChange={onChange} /></div>
            <div><RangePicker placeholder={['开始季度', '结束季度']} mode="quarter" onChange={onChange} /></div>
        </div>
    );

};

ReactDOM.render(<App />, mountNode);
```
```css
.app > div {
    margin-bottom: 20px;
}
