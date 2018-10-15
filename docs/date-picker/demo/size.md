# 不同尺寸

- order: 3

通过 `size` 属性可以改变 Input 组件的尺寸，默认为 `medium`。

:::lang=en-us
# Size

- order:3

Change size by attribute `size`.

:::

---

````jsx
import { DatePicker } from '@alifd/next';

ReactDOM.render(<div>
    <DatePicker size="large" /> &nbsp;&nbsp;
    <DatePicker /> &nbsp;&nbsp;
    <DatePicker size="small" />
</div>, mountNode);
````
