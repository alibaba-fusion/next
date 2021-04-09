# 按钮类型

- order: 0

按钮有三种视觉层次：主按钮、次按钮、普通按钮。不同的类型可以用来区别按钮的重要程度。

默认情况下 Button 组件使用 `<button>` 标签来渲染按钮，通过 `component` 属性可以自定义 Button 的标签类型。
可选值为 `button` 和 `a`。

:::lang=en-us
# Type

- order: 0

The types of button includes: primary, secondary, normal. Each one used to describe the importance level of a button.

:::

---

````jsx
import { Button, Box } from '@alifd/next';

ReactDOM.render(<div >
    <Box direction="row" spacing={20}>
        <Button type="normal">Normal</Button> 
        <Button type="primary">Prirmary</Button> 
        <Button type="secondary">Secondary</Button>
    </Box>
    <br/>
    <Box direction="row" spacing={20}>
        <Button type="normal" text>Normal</Button>
        <Button type="primary" text>Primary</Button> 
        <Button type="secondary" text>Secondary</Button>
    </Box>
    <br/>
    <Box direction="row" spacing={20}>
        <Button type="normal" warning>Normal</Button>
        <Button type="primary" warning>Primary</Button>
    </Box>
</div>, mountNode);
````