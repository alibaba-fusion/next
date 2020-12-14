# 尺寸大小

- order: 8

通过 `size` 属性可以约束日期选择器的日期格式，该格式同时会限定用户的输入格式。

:::lang=en-us
# Format

- order: 8

Using attribute `format` to change the displayed dates, it will be also used to check user inputs.

:::

---

````jsx
import { DatePicker2, Input } from '@alifd/next';

const { RangePicker } = DatePicker2;
const onChange = val => console.log(val);

ReactDOM.render(<div>
    <DatePicker2 size="small" onChange={onChange} />
    <br /><br />
    <RangePicker size="small" onChange={onChange} />
    <br /><br />
    <DatePicker2  onChange={onChange}  />
    <br /><br />
    <RangePicker  onChange={onChange} />
    <br /><br />
    <DatePicker2 size="large" onChange={onChange} showTime={{ format: 'HH:mm' }} />
    <br /><br />
    <RangePicker size="large" onChange={onChange} showTime={{ format: 'HH:mm' }} />
</div>, mountNode);
````
