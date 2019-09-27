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
        <h3>medium</h3>
        <NumberPicker defaultValue={0} size="medium" />
        <br/><br/>
        <NumberPicker defaultValue={0} size="medium" type="inline" />
        <br/><br/>
        <h3>large</h3>
        <NumberPicker defaultValue={0} size="large" />
        <br/><br/>
        <NumberPicker defaultValue={0} size="large" type="inline" />
    </div>,
    mountNode
);
````
