# 基本

- order: 0

最简单的用法。支持 `Button` 的 `type`, `size`, `component`, `ghost` 等属性透传。

:::lang=en-us
# Basic

- order: 0

Use SplitButton as Button.

:::

---

````jsx
import { SplitButton, Box } from '@alifd/next';

const { Item } = SplitButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(<Box direction="row" spacing={20}>
    <SplitButton label="Edit Document">{menu}</SplitButton>
    <SplitButton label="Edit Document" type="primary">{menu}</SplitButton>
    <SplitButton label="Edit Document" type="primary" model="outline">{menu}</SplitButton>
    <SplitButton label="Edit Document" type="primary" model="text">{menu}</SplitButton>
</Box>, mountNode);
````
