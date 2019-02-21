# 无障碍

- order: 13

需要用户手动输入日期，请参考`ARIA and KeyBoard`。

:::lang=en-us

User needs to manually input the date,Please refer to `ARIA and KeyBoard`.

# Addon

- order: 13

:::
---

````jsx
import { DatePicker } from '@alifd/next';

const { RangePicker, MonthPicker, YearPicker } = DatePicker;
const onChange = val => console.log(val);

ReactDOM.render(<div>
    <DatePicker onChange={onChange} /> <br /><br />
    <RangePicker onChange={onChange} />
</div>, mountNode);
````
