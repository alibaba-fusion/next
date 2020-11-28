# 日期时间选择

-   order: 1

增加选择时间功能，当 `showTime` 为一个对象时，其属性会传递给内建的 `TimePicker`。

:::lang=en-us

# RangePicker

-   order: 1

DatePicker with TimePicker.

:::

---

```jsx
import { DatePicker2 } from '@alifd/next';

const DatePicker = DatePicker2;
const { RangePicker } = DatePicker;

const onChange = val => console.log(val);

const App = () => <div>
    <DatePicker onChange={onChange} showTime />
    <WeekPicker onChange={onChange} showTime />
    <MonthPicker onChange={onChange} showTime />
    <YearPicker onChange={onChange} showTime  />
</div>

ReactDOM.render(<App />, mountNode);
```
