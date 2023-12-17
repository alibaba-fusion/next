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
        <NumberPicker format={intlize} defaultValue={5000} />
        <br/><br/>
        <NumberPicker label="p:" format={val => `${val}%`} defaultValue={85} />
        <br/><br/>
        <NumberPicker innerAfter="%" />
    </div>,
    mountNode
);
````
