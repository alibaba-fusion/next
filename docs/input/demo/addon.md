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
    <Input hasLimitHint
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="large"
        defaultValue="alibaba"
        maxLength={2}
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
