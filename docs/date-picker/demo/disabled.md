# 禁用状态

- order: 8

当开启 `disabled` 属性时，选择框处于完全禁用状态。

:::lang=en-us
# Disabled

- order: 8

Disable the picker.

:::

---


````jsx
import { DatePicker } from '@alifd/next';

const { RangePicker } = DatePicker;

ReactDOM.render(<div>
    <DatePicker disabled />
    <br/>
    <br/>
    <RangePicker disabled />
</div>, mountNode);
````
