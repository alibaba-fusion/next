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
        <NumberPicker defaultValue={0} size="small" />
        <NumberPicker defaultValue={0} />
        <NumberPicker defaultValue={0} size="large" />
        <br/><br/>
        <NumberPicker defaultValue={0} size="small" type="inline" />
        <NumberPicker defaultValue={0} type="inline" />
        <NumberPicker defaultValue={0} size="large" type="inline" />
    </div>,
    mountNode
);
````
````css
.next-number-picker {
    margin-right: 10px;
}
````
