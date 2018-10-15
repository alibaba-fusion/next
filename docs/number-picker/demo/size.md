# 大小

- order: 5

:::lang=en-us
# size

- order: 5
:::
---

````jsx
import { NumberPicker } from '@alifd/next';

ReactDOM.render(
    <div>
        <NumberPicker defaultValue={0} size="large" />
        <br/><br/>
        <NumberPicker defaultValue={0} size="large" type="inline" />
    </div>,
    mountNode
);
````
