# 基本

- order: 0

最简单的用法。支持`Button`的 `shape`, `type`, `size`, `component`, `ghost` 等属性透传。

:::lang=en-us
# Basic

- order: 0

Use MenuButton as Button.

:::

---

````jsx
import { MenuButton, Box } from '@alifd/next';

const { Item } = MenuButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(<div>
    <Box direction="row" spacing={20}>
        <MenuButton label="Document Edit">{menu}</MenuButton>
        <MenuButton type="primary" label="Document Edit">{menu}</MenuButton>
        <MenuButton type="primary" model="outline" label="Document Edit">{menu}</MenuButton>
    </Box>
    <br />
    <Box direction="row" spacing={20}>
        <MenuButton model="text" label="Document Edit">{menu}</MenuButton>
        <MenuButton model="text" type="primary" label="Document Edit">{menu}</MenuButton>
        <MenuButton model="text" label="Document Edit">{menu}</MenuButton>
    </Box>
    </div>, mountNode);
````
