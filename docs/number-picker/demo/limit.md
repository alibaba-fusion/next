# 最大最小值

- order: 2

min max 来限制value的最大最小值。

当数据自动订正会触发 onCorrect

:::lang=en-us
# max-min

- order: 2

Use the param `min` to limit minimum value,
Use the param `max` to limit maximum value,

That the value exceeds `min` or `max` will trigger onCorrect.
:::

---

````jsx
import { NumberPicker } from '@alifd/next';

function onChange(value, e) {
    console.log('onChange', value, e);
}

function onCorrect(obj) {
    console.log('onCorrect', obj);
}
ReactDOM.render(
    <div>
        <NumberPicker type="inline" step={3} min={6} max={30} defaultValue={6}
            onChange={onChange} onCorrect={onCorrect}/>
    </div>,
    mountNode
);
````
