# 自定义样式

- order: 12

通过style设置宽度



:::lang=en-us

# Custom Style

- order: 12

Custom style can be set using  param `style`.

:::
---

````jsx
import { Input } from '@alifd/next';

ReactDOM.render(
    <div>
        <Input placeholder="width:400" style={{width: 400}} aria-label="style width 400" /><br/><br/>

        <Input
            addonTextBefore="http://"
            addonTextAfter=".com"
            size="medium"
            value="alibaba"
            style={{width: 400}} aria-label="style width 400" /><br/><br/>

        <Input
            placeholder="medium"
            maxLength={10}
            hasLimitHint
            style={{width: 400}} aria-label="style width 400" /><br/><br/>

        <Input
            placeholder="medium"
            hasClear maxLength={10}
            hasLimitHint style={{width: 400}}
            className="my-input-class"
            state="success"
            aria-label="style width 400" /><br/><br/>

        <Input placeholder="className" className="my-input-class" aria-label="custom my input class" />
        <Input htmlType="hidden" aria-label="hidden input" />
    </div>
    , mountNode);
````

````css
body .my-input-class {
    width:500px;
}
````
