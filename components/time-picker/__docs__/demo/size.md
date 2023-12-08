# 尺寸

- order: 1

TimePicker 使用和 Input 组件相同的输入框尺寸，可以通过 `size` 属性进行设置。

:::lang=en-us
# Size

- order: 1

Setting picker size by `size`.

:::

---

````jsx
import { TimePicker, Box } from '@alifd/next';


ReactDOM.render(
    <Box direction="row" spacing={20}>
    <TimePicker size="large" />
    <TimePicker />
    <TimePicker size="small" />
</Box>, mountNode);
````
