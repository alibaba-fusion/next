# 步长

- order: 3

通过step控制每次加减步长


:::lang=en-us
# step

- order: 3

Use step to control the number change every click.
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
        <NumberPicker defaultValue={0} onChange={onChange} onCorrect={onCorrect} step={.01}/>
    </div>, mountNode);
````
