# 尺寸

- order: 1

TimePickerNext 使用和 Input 组件相同的输入框尺寸，可以通过 `size` 属性进行设置。

:::lang=en-us
# Size

- order: 1

Setting picker size by `size`.

:::

---

````jsx
import { TimePickerNext } from '@alifd/next';


ReactDOM.render(<div>
    <TimePickerNext size="large" />&nbsp;&nbsp;
    <TimePickerNext />&nbsp;&nbsp;
    <TimePickerNext size="small" />
</div>, mountNode);
````
