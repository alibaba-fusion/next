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

const { RangePicker, MonthPicker, YearPicker } = DatePicker;
const onChange = val => console.log(val);

const now = new Date();
const start = (new Date()).setDate(1);
const end = (new Date()).setDate(7);


const quickRanges = {
    Today: [ now, now ],
    'First Week': [ start, end ],
};


ReactDOM.render(<div>
    <DatePicker onChange={onChange} /> <br /><br />
    <MonthPicker onChange={onChange} /> <br /><br />
    <YearPicker onChange={onChange} /> <br /><br />
    <RangePicker ranges={quickRanges} onChange={onChange} />
</div>, mountNode);
````
