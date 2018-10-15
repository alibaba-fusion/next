# 菜单组

- order: 2

支持菜单组和菜单分割线，使用方法同 `Menu.Group`, `Menu.Item`, `Menu.Divider`。

:::lang=en-us
# Menu

- order: 2

More complex case with custom menu.

:::

---

````jsx
import { MenuButton } from '@alifd/next';

const { Item, Group, Divider } = MenuButton;

function selectItem(id) {
    console.log(id);
}

ReactDOM.render(<MenuButton type="primary" label="Document Edit" onItemClick={selectItem}>
    <Item key="undo">Undo</Item>
    <Item key="redo">Redo</Item>
    <Divider />
    <Group>
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
    </Group>
</MenuButton>, mountNode);
````
