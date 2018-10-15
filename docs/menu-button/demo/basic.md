# 基本

- order: 0

最简单的用法。支持 Button 的 shape, type, size, component, ghost 等属性透传。

:::lang=en-us
# Basic

- order: 0

Use MenuButton as Button.

:::

---

````jsx
import { MenuButton } from '@alifd/next';

const { Item } = MenuButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(<div>
    <MenuButton label="Document Edit">{menu}</MenuButton>&nbsp;&nbsp;
    <MenuButton type="primary" label="Document Edit">{menu}</MenuButton>&nbsp;&nbsp;
    <MenuButton type="secondary" label="Document Edit">{menu}</MenuButton><br /><br />
    <MenuButton text label="Document Edit">{menu}</MenuButton>&nbsp;&nbsp;
    <MenuButton text type="primary" label="Document Edit">{menu}</MenuButton>&nbsp;&nbsp;
    <MenuButton text type="secondary" label="Document Edit">{menu}</MenuButton>
</div>, mountNode);
````
