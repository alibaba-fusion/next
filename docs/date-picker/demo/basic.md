# 基本用法

- order: 0

最基本的用法。可以通过 `onChange` 监听选中值的变化。

:::lang=en-us
# Basic

- order: 0

A basic usage case.

:::

---

````jsx
import { DatePicker } from '@alifd/next';

const { RangePicker, MonthPicker, YearPicker, WeekPicker } = DatePicker;
const onChange = val => console.log(val);

ReactDOM.render(<div>
    <DatePicker onChange={onChange} /> <br /><br />
    <DatePicker showTime onChange={onChange} /> <br /><br />
    <MonthPicker onChange={onChange} /> <br /><br />
    <YearPicker onChange={onChange} /> <br /><br />
    <WeekPicker onChange={onChange} /> <br /><br />
    <RangePicker type="year" onChange={onChange} /><br /><br />
    <RangePicker type="month" onChange={onChange} /><br /><br />
    <RangePicker onChange={onChange} />
</div>, mountNode);
````
