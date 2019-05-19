# 无障碍

- order: 13

通过`aria-label`对`Input`组件进行描述。关于键盘操作请参考`ARIA and KeyBoard`。

:::lang=en-us
# Accessibility

- order: 13

Describe the `Input` component by `aria-label`.Please refer to `ARIA and KeyBoard` for keyboard operation.

:::
---

````jsx
import { Input } from '@alifd/next';

function onChange(v) {
    console.log(v);
}
function onKeyDown(v) {
    console.log(v);
}
ReactDOM.render(<div>
    <Input size="large" placeholder="please input" onChange={onChange} onKeyDown={onKeyDown} aria-label="this is input" /> 
</div>
    , mountNode);
````
