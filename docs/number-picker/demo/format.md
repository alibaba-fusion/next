# 格式化

- order: 7

:::lang=en-us
# Formatting

- order: 7
:::

---

````jsx
import { NumberPicker } from '@alifd/next';

const intlize = val => Intl.NumberFormat('en-US').format(val);

ReactDOM.render(
    <div>
        <NumberPicker format={intlize} />
    </div>,
    mountNode
);
````
