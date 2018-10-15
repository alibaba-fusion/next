# 按钮类型

- order: 0

按钮有三种视觉层次：主按钮、次按钮、普通按钮。不同的类型可以用来区别按钮的重要程度。

:::lang=en-us
# Type

- order: 0

The types of button includes: primary, secondary, normal. Each one used to describe the importance level of a button.

:::

---

````jsx
import { Button } from '@alifd/next';

ReactDOM.render(<div>
    <Button type="normal">Normal</Button> &nbsp;&nbsp;
    <Button type="primary">Prirmary</Button> &nbsp;&nbsp;
    <Button type="secondary">Secondary</Button>
    <br /><br />
    <Button type="normal" text>Normal</Button> &nbsp;&nbsp;
    <Button type="primary" text>Primary</Button> &nbsp;&nbsp;
    <Button type="secondary" text>Secondary</Button>
    <br /><br />
    <Button type="normal" warning>Normal</Button> &nbsp;&nbsp;
    <Button type="primary" warning>Primary</Button> &nbsp;&nbsp;
</div>, mountNode);
````
