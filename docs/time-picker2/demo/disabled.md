# 禁用时分秒

- order: 4

禁用全部和禁用部分选择项

:::lang=en-us
# Disable cells

- order: 4

Disable some time celles.

:::

---

````jsx
import { TimePicker2 } from '@alifd/next';

const disabledHours = [1, 2, 3, 4, 5];
const disabledMinutes = [10, 20, 30, 40, 50];
const disabledSeconds = [10, 20, 30, 40, 50];

const disabledItems = (list) => (index) => {
    return list.indexOf(index) >= 0;
};

ReactDOM.render(<div>
    <p>Disable TimePicker2</p>
    <TimePicker2 disabled />
    <p>Disable Hours/Minutes/Seconds</p>
    <TimePicker2 disabledHours={disabledItems(disabledHours)} disabledMinutes={disabledItems(disabledMinutes)} disabledSeconds={disabledItems(disabledSeconds)} />
</div>, mountNode);
````
