# 基本用法

- order: 0

onChange 第二个参数 e.type 可以获取事件类型。

如果是点击`+` `-` 触发，可以通过 `e.triggerType` 获取

:::lang=en-us
# Basic usage

- order: 0

you can get event type from onChange function second param `e.type`。

if events are triggered by '+' button or '-' button, you can get event type from onChange function third param `e.triggerType`.
:::

---

````jsx
import { NumberPicker } from '@alifd/next';

function onChange(value, e) {
    console.log(value, e.type, e.triggerType);
}

ReactDOM.render(
    <div>
        <NumberPicker onChange={onChange}/>
        <br/><br/>
        <NumberPicker defaultValue={0} type="inline" onChange={onChange}/>
    </div>,
    mountNode
);
````
