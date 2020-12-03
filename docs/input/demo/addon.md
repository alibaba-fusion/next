# 前后扩展

- order: 2

:::lang=en-us

# Addon

- order: 2

:::
---

````jsx
import { Input } from '@alifd/next';

ReactDOM.render(<div>
    <Input showLimitHint
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="large"
        defaultValue="alibaba"
        maxLength={5}
        aria-label="input with config of addonTextBefore and addonTextAfter" /><br /><br />

    <Input
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="medium"
        value="alibaba"
        aria-label="input with config of addonTextBefore and addonTextAfter" /><br /><br />

    <Input
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="small"
        value="alibaba"
        aria-label="input with config of addonTextBefore and addonTextAfter" />
</div>
    , mountNode);
````
