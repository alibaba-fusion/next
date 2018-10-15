# 精度

- order: 4

通过 precision 控制小数点位数


:::lang=en-us
# precision

- order: 4

Use precision to Control the number of decimal places.
:::
---

````jsx
import { NumberPicker } from '@alifd/next';

function onChange(value) {
    console.log('changed', value);
}
function onCorrect(obj) {
    console.log(obj);
}
ReactDOM.render(
    <div>
        <NumberPicker defaultValue={-3.99} onChange={onChange} onCorrect={onCorrect} step={2} precision={2}/>
    </div>, mountNode);
````
