# 步长

- order: 9

可以通过 `hourStep`, `minuteStep`, `secondStep` 分别设置时分秒的选项间隔。

:::lang=en-us
# Time step

- order: 9

Setting time interval by `hourStep`, `minuteStep`, `secondStep`.

:::

---

````jsx
import { TimePicker2 } from '@alifd/next';

ReactDOM.render(<TimePicker2 onChange={(val) => console.log(val.format('HH:mm:ss'))} hourStep={2} minuteStep={5} secondStep={5} />, mountNode);
````
