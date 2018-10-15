# 禁用日期选择

- order: 6

当开启 `disabled` 属性时，选择框处于完全禁用状态。

:::lang=en-us
# Disabled

- order: 6

Disable the picker.

:::

---


````jsx
import { DatePicker } from '@alifd/next';

const { RangePicker } = DatePicker;

ReactDOM.render(<div>
    <DatePicker disabled />&nbsp;&nbsp;<RangePicker disabled />
</div>, mountNode);
````
