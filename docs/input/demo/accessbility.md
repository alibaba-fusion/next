# 无障碍

- order: 11

请参考`ARIA and KeyBoard`。

:::lang=en-us
# Accessibility

- order: 11

Please refer to `ARIA and KeyBoard`.

:::

---

````jsx
import { Input } from '@alifd/next';

function onChange(v) {
    console.log(v);
}
function onkeyDown(v) {
    console.log(v);
}
ReactDOM.render(
    <div>
        <Input size="large" placeholder="please input" onChange={onChange} onKeyDown={onkeyDown} aria-label="please input" /><br /><br />
    </div>
    , mountNode);
````