# 菜单选择模式

- order: 3

通过 selectMode 控制菜单的选择模式。

:::lang=en-us
# selectMode

- order: 3

Change select mode of menu by `selectMode`.

:::

---

````jsx
import { MenuButton } from '@alifd/next';

const { Item } = MenuButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(<div>
    <MenuButton label="Document Edit" selectMode="single" onSelect={keys => console.log(keys)}>{menu}</MenuButton>
</div>, mountNode);
````
