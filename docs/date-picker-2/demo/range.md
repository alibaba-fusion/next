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
import { DatePicker2 } from '@alifd/next';

const DatePicker = DatePicker2;
const { RangePicker } = DatePicker;

const onChange = val => console.log(val);

const App = () => <div>
    <RangePicker type="date" onChange={onChange} />
    <RangePicker type="month" onChange={onChange} />
    <RangePicker type="year" onChange={onChange} />
    // week range picker ?
    <RangePicker type="week" onChange={onChange} />
</div>

ReactDOM.render(<App />, mountNode);
```
