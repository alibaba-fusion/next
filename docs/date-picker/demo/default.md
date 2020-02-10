# 提供默认值

- order: 1

可以通过 `defaultValue` 属性为日期选择器提供初值，所提供的初值必须为 moment 对象。

:::lang=en-us
# Default value

- order: 1

Setting default value by passing `defaultValue`.

:::

---

````jsx
import { DatePicker } from '@alifd/next';
import moment from 'moment';

const { RangePicker, MonthPicker, YearPicker } = DatePicker;
const startValue = moment('2017-11-20', 'YYYY-MM-DD', true);
const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
const onChange = val => console.log(val);

ReactDOM.render(<div>
    <DatePicker defaultValue={startValue} onChange={onChange} /><br /><br />
    <MonthPicker defaultValue={startValue} onChange={onChange} /><br /><br />
    <YearPicker defaultValue={startValue} onChange={onChange} /><br /><br />
    <RangePicker type="year" defaultValue={[startValue, endValue]} onChange={onChange} /><br /><br />
    <RangePicker type="month" defaultValue={[startValue, endValue]} onChange={onChange} /><br /><br />
    <RangePicker defaultValue={[startValue, endValue]} onChange={onChange} />
</div>, mountNode);
````
