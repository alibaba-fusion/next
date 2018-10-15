# 步长

- order: 5

可以通过 `hourStep`, `minuteStep`, `secondStep` 分别设置时分秒的选项间隔。

:::lang=en-us
# Time step

- order: 5

Setting time interval by `hourStep`, `minuteStep`, `secondStep`.

:::

---

````jsx
import { TimePicker } from '@alifd/next';

ReactDOM.render(<TimePicker onChange={(val) => console.log(val.format('HH:mm:ss'))} hourStep={2} minuteStep={5} secondStep={5} />, mountNode);
````
