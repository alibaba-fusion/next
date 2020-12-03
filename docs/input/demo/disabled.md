# 禁用状态

- order: 7

为 `Input` 设置 `disabled` 状态；


:::lang=en-us

# Disabled state

- order: 7

Set `Input` as `disabled` state

:::

---

````jsx
import { Input } from '@alifd/next';

ReactDOM.render(
    <div>
        <Input disabled aria-label="disabled" placeholder="disabled" size="small"/><br /><br />

        <Input
            disabled
            aria-label="disabled"
            addonTextBefore="http://"
            addonTextAfter=".com"
            size="medium"
            value="alibaba"/><br /><br />

        <Input disabled aria-label="disabled" placeholder="medium" maxLength={10} showLimitHint/><br /><br />

        <Input.TextArea disabled aria-label="disabled" placeholder="medium" maxLength={10} showLimitHint/>
    </div>
    , mountNode);
````
