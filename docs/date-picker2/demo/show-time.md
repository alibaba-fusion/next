# 日期时间选择

- order: 5

如果需要同时选择时间，可以通过 `showTime` 属性开启，`showTime` 支持传入 TimePickerPanel 的属性，例如 `format`, `defaultValue` 等。

:::lang=en-us
# With time

- order: 5

Enable `showTime` to create a DatePicker2/RangePicker with time.

:::

---

````jsx
import { DatePicker2 } from '@alifd/next';
import moment from 'moment';

const { RangePicker } = DatePicker2;
const onChange = (value) => console.log(value);
const onOk = (value) => console.log('onOK:', value.format('YYYY-MM-DD HH:mm:ss'));
const onRangeOk = (value) => console.log('onOk: [%s, %s]', ...value);

const defaultTimeValue = moment('09:00:00', 'HH:mm:ss', true);
const defaultTimeValues = [moment('09:00:00', 'HH:mm:ss', true), moment('23:59:59', 'HH:mm:ss', true)];

ReactDOM.render(<div>
    <p>DatePicker2 With Time</p>
    <DatePicker2 showTime onChange={onChange} onOk={onOk} />
    <p>DatePicker2 with Time, reset 00:00:00 for every select</p>
    <DatePicker2 showTime onChange={onChange} onOk={onOk} resetTime />
    <p>DatePicker2 with Time, with default time value</p>
    <DatePicker2 showTime timePanelProps={{ defaultValue: defaultTimeValue, secondStep: 10 }} onChange={onChange} onOk={onOk} />
    <p>RangePicker with Time</p>
    <RangePicker showTime onChange={onChange} onOk={onRangeOk} />
    <p>RangePicker with Time, reset 00:00:00 for every select</p>
    <RangePicker showTime resetTime onChange={onChange} onOk={onRangeOk} />
    <p>RangePicker with Time, with default time value, hide seconds</p>
    <RangePicker showTime timePanelProps={{ defaultValue: defaultTimeValue, format: 'HH:mm', minuteStep: 15 }} onChange={onChange} onOk={onRangeOk} />
    <p>RangePicker with Time, with default start & end time value, hide seconds</p>
    <RangePicker showTime timePanelProps={{ defaultValue: defaultTimeValues, format: 'HH:mm', minuteStep: 15 }} onChange={onChange} onOk={onRangeOk} />
</div>, mountNode);
````
