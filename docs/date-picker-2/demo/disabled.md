# 禁用

- order: 7

通过 `format` 属性可以约束日期选择器的日期格式，该格式同时会限定用户的输入格式。

:::lang=en-us
# Format

- order: 7

Using attribute `format` to change the displayed dates, it will be also used to check user inputs.

:::

---

````jsx
import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;
const onChange = val => console.log(val);

ReactDOM.render(<div>
    <DatePicker2 format="YYYY-M-D" onChange={onChange} />
    <br /><br />
    <DatePicker2 format="YYYY-M-D" onChange={onChange} showTime={{ format: 'HH:mm' }} />
    <br /><br />
    <RangePicker format="YYYY-M-D" onChange={onChange} />
    <br /><br />
    <RangePicker format="YYYY-M-D H:m" onChange={onChange} showTime={{ format: 'HH:mm' }} />
</div>, mountNode);
````
