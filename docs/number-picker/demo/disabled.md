# 不可用

- order: 6

不可用的 number picker。

:::lang=en-us
# Disable

- order: 6

disable number picker。
:::
---

````jsx
import { NumberPicker } from '@alifd/next';

ReactDOM.render(
    <div>
        <NumberPicker defaultValue={0} disabled/>
        <br/><br/>
        <NumberPicker defaultValue={0} type="inline" disabled />
    </div>,
    mountNode
);
````

