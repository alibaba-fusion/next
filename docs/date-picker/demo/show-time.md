# 日期时间选择

- order: 5

如果需要同时选择时间，可以通过 `showTime` 属性开启，`showTime` 支持传入 TimePickerPanel 的属性，例如 `format`, `defaultValue` 等。

:::lang=en-us
# With time

- order: 5

Enable `showTime` to create a DatePicker/RangePicker with time.

:::

---

````jsx
import { DatePicker } from '@alifd/next';
import moment from 'moment';

const { RangePicker } = DatePicker;
const onChange = (value) => console.log(value);
const onOk = (value) => console.log('onOK:', value.format('YYYY-MM-DD HH:mm:ss'));
const onRangeOk = (value) => console.log('onOk: [%s, %s]', value[0].format('YYYY-MM-DD HH:mm:ss'), value[1].format('YYYY-MM-DD HH:mm:ss'));

const defaultTimeValue = moment('09:00:00', 'HH:mm:ss', true);

ReactDOM.render(<div>
    <p>DatePicker With Time</p>
    <DatePicker showTime onChange={onChange} onOk={onOk} />
    <p>DatePicker with Time, reset 00:00:00 for every select</p>
    <DatePicker showTime onChange={onChange} onOk={onOk} resetTime />
    <p>DatePicker with Time, with default time value</p>
    <DatePicker showTime={{ defaultValue: defaultTimeValue, secondStep: 10 }} onChange={onChange} onOk={onOk} />
    <p>RangePicker with Time</p>
    <RangePicker showTime onChange={onChange} onOk={onRangeOk} />
    <p>RangePicker with Time, reset 00:00:00 for every select</p>
    <RangePicker showTime resetTime onChange={onChange} onOk={onRangeOk} />
    <p>RangePicker with Time, with default time value, hide seconds</p>
    <RangePicker showTime={{ defaultValue: defaultTimeValue, format: 'HH:mm', minuteStep: 15 }} onChange={onChange} onOk={onRangeOk} />
</div>, mountNode);
````
