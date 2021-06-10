# 禁用

- order: 3

选择框的不可用状态。你也可以通过数组单独禁用 `RangePicker` 的其中一项。

:::lang=en-us
# Disable dates

- order: 3

A disabled state of the `DatePicker`. You can also set as array to disable one of input.

:::

---

````jsx
import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;

ReactDOM.render(<div>
    <DatePicker2 disabled defaultValue="2021-02-12" /><br /><br />
    <RangePicker disabled defaultValue={['2021-01-12', '2021-02-12']} /><br /><br />
    <RangePicker disabled={[false, true]} defaultValue={['2021-01-12', '2021-02-12']} /><br /><br />
</div>, mountNode);
````
