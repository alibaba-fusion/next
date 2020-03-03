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
const disabledDate = function (date, view) {
    switch (view) {
        case 'date':
            return date.valueOf() <= currentDate.valueOf();
        case 'year':
            return date.year() < currentDate.year();
        case 'month':
            return date.year() * 100 + date.month() < currentDate.year() * 100 + currentDate.month();
        default: return false;
    }
};

ReactDOM.render(<div>
    <DatePicker disabledDate={disabledDate} onChange={val => console.log(val)} /><br /><br />
    <MonthPicker disabledDate={disabledDate} onChange={val => console.log(val)} /><br /><br />
    <YearPicker disabledDate={disabledDate} onChange={val => console.log(val)} /><br /><br />
    <RangePicker disabledDate={disabledDate} onChange={val => console.log(val)} /><br /><br />
    <RangePicker type='month' disabledDate={disabledDate} onChange={val => console.log(val)} /><br /><br />
    <RangePicker type='year' disabledDate={disabledDate} onChange={val => console.log(val)} />
</div>, mountNode);
````
