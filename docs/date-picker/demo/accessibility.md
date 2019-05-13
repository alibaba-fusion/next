# 无障碍

- order: 13

需要用户手动输入日期，请参考`ARIA and KeyBoard`。

:::lang=en-us
# Accessibility

- order: 13

User needs to manually input the date,Please refer to `ARIA and KeyBoard`.

:::

---

````jsx
import { DatePicker } from '@alifd/next';

const { RangePicker, MonthPicker, YearPicker } = DatePicker;
const onChange = val => console.log(val);

ReactDOM.render(<div>
    <DatePicker dateInputAriaLabel="date input" inputProps={{"aria-label": "date picker main"}}  onChange={onChange} /> <br /><br />
    <RangePicker startDateInputAriaLabel="start date" startTimeInputAriaLabel="start time" endDateInputAriaLabel="end date" endTimeInputAriaLabel="end time" onChange={onChange} inputProps={{"aria-label": "range picker main"}} />
</div>, mountNode);
````
