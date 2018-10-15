# 基本

- order: 0

使用 `Radio` 渲染的基本组件。

:::lang=en-us
# Basic Usage
- order: 0
Basic components rendered using `Radio`.
:::

---

````jsx
import { Radio } from '@alifd/next';

ReactDOM.render((
    <div>
        <h4>Without Label</h4>
        <Radio defaultChecked />&nbsp;
        <Radio checked />&nbsp;
        <Radio disabled />&nbsp;
        <Radio checked disabled />&nbsp;
        <Radio />
        <br />
        <h4>With Label</h4>
        <Radio id="apple">Apple</Radio>&nbsp;
        <Radio id="banana" /><label htmlFor="banana" className="next-radio-label">Banana</label>&nbsp;
        <Radio id="apple2" label="Apple" className="testClassname" />
    </div>
), mountNode);
````
