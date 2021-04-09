# 不同尺寸

- order: 11

通过 `size` 属性可以改变 Input 组件的尺寸，默认为 `medium`。

:::lang=en-us
# Size

- order: 11

Change size by attribute `size`.

:::

---

````jsx
import { DatePicker, Box } from '@alifd/next';

ReactDOM.render(<Box direction="row" spacing={20}>
    <DatePicker size="large" />
    <DatePicker />
    <DatePicker size="small" />
</Box>, mountNode);
````
