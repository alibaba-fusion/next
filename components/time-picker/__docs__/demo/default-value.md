# 默认值

- order: 1

可以通过 `defaultValue` 传入默认时间值，并且可以通过选择改变该值。`onChange` 回调参数的值的类型取决于 `defaultValue` 的类型。

:::lang=en-us
# Default value

- order: 1

Setting default value by passing `defaultValue`.

:::

---

````jsx
import { TimePicker } from '@alifd/next';
import moment from 'moment';

const defaultVal = moment('12:00:00', 'HH:mm:ss', true);

ReactDOM.render(<div>
    <TimePicker defaultValue={defaultVal} onChange={(val) => console.log(val)} /><br /><br />
    <TimePicker defaultValue="12:00:00" onChange={(val) => console.log(val)} />
</div>, mountNode);
````
