# 禁用时分秒

- order: 3

禁用全部和禁用部分选择项

:::lang=en-us
# Disable cells

- order: 3

Disable some time celles.

:::

---

````jsx
import { TimePickerNext } from '@alifd/next';

const disabledHours = [1, 2, 3, 4, 5];
const disabledMinutes = [10, 20, 30, 40, 50];
const disabledSeconds = [10, 20, 30, 40, 50];

const disabledItems = (list) => (index) => {
    return list.indexOf(index) >= 0;
};

ReactDOM.render(<div>
    <p>Disable TimePickerNext</p>
    <TimePickerNext disabled />
    <p>Disable Hours/Minutes/Seconds</p>
    <TimePickerNext disabledHours={disabledItems(disabledHours)} disabledMinutes={disabledItems(disabledMinutes)} disabledSeconds={disabledItems(disabledSeconds)} />
</div>, mountNode);
````
