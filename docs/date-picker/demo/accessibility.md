# 无障碍支持

- order: 13

支持手动输入或键盘操作，请参考[#无障碍键盘操作指南](#无障碍键盘操作指南)。

:::lang=en-us
# Accessibility

- order: 13

Support manual input or keyboard operation,Please refer to `ARIA and KeyBoard`.

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
