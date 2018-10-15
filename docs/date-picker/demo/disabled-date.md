# 禁止选择某些日期

- order: 4

可以通过 `disabledDate` 属性来禁止用户选择或输入某些特定日期。

:::lang=en-us
# Disable dates

- order: 4

Disable date cells by `disabledDate`.

:::

---

````jsx
import { DatePicker } from '@alifd/next';
import moment from 'moment';

const { RangePicker, MonthPicker, YearPicker } = DatePicker;
const currentDate = moment();

// Disable all dates before today
const disabledDate = function (date) {
    return date.valueOf() <= currentDate.valueOf();
};

ReactDOM.render(<div>
    <DatePicker disabledDate={disabledDate} onChange={val => console.log(val)} /><br /><br />
    <MonthPicker disabledDate={disabledDate} onChange={val => console.log(val)} /><br /><br />
    <YearPicker disabledDate={disabledDate} onChange={val => console.log(val)} /><br /><br />
    <RangePicker disabledDate={disabledDate} onChange={val => console.log(val)} />
</div>, mountNode);
````
