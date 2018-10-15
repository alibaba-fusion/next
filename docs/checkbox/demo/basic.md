# 基本

- order: 0

使用 `Checkbox` 渲染的基本组件。


:::lang=en-us
# Basic Usage
- order: 0
Basic components rendered using `Checkbox`.
:::
---

````jsx
import { Checkbox } from '@alifd/next';

ReactDOM.render((
    <div>
        <h6>Different status without label:</h6>
        Unchecked：<Checkbox />&nbsp;
        DefaultChecked：<Checkbox defaultChecked />&nbsp;
        Indeterminate：<Checkbox defaultIndeterminate />&nbsp;
        Disabled：<Checkbox disabled />&nbsp;
        Checked-Disabled：<Checkbox disabled checked />&nbsp;
        Checked：<Checkbox checked />&nbsp;
        <h6>Using with label</h6>
        <Checkbox>Banana</Checkbox>&nbsp;
        <Checkbox id="apple" /><label htmlFor="apple" className="next-checkbox-label">Apple</label>&nbsp;
        <label>
            <Checkbox id="pear" />
            <span className="next-checkbox-label">Pear</span>
        </label>&nbsp;
        <Checkbox label="Banana" />
    </div>
), mountNode);
````
