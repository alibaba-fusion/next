# 时间格式

- order: 5

可以通过 `format` 属性格式化时间值，此外该属性还会影响到时间列的展示。

:::lang=en-us
# Time format

- order: 5

You can control the time format by `format`, it will also effect the display of time panel.

:::

---

````jsx
import { TimePicker2 } from '@alifd/next';

ReactDOM.render(<div>
    <TimePicker2 format="HH" />
    <p>Hide seconds</p>
    <TimePicker2 format="HH:mm" />
    <p>Hide hours</p>
    <TimePicker2 format="mm:ss" />
</div>, mountNode);
````
