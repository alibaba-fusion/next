# 尺寸

- order: 3

TimePicker2 使用和 Input 组件相同的输入框尺寸，可以通过 `size` 属性进行设置。

:::lang=en-us
# Size

- order: 3

Setting picker size by `size`.

:::

---

````jsx
import { TimePicker2 } from '@alifd/next';


ReactDOM.render(<div>
    <TimePicker2 size="large" /><br /><br />
    <TimePicker2 /><br /><br />
    <TimePicker2 size="small" />
</div>, mountNode);
````
