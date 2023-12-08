# 按钮控制

- order: 9

控制按钮一致显示、隐藏


:::lang=en-us
# trigger controls

- order: 9

control button trigger show without hover or hide
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
        <NumberPicker alwaysShowTrigger/>
        <br/><br/>
        <NumberPicker hasTrigger={false}/>
    </div>, mountNode);
````
