# 复杂菜单展示

- order: 3

支持菜单组和菜单分割线，使用方法同 `Menu.Group`, `Menu.Item`, `Menu.Divider`。

:::lang=en-us
# Menu

- order: 3

SplitButton with complex menus.

:::

---

````jsx
import { SplitButton } from '@alifd/next';

const { Item, Group, Divider } = SplitButton;

ReactDOM.render(<SplitButton type="primary" label="Edit Document" onItemClick={key => console.log(key)}>
    <Item>Undo</Item>
    <Item>Redo</Item>
    <Divider />
    <Group>
        <Item helper="CTRL + X">Cut</Item>
        <Item helper="CTRL + C">Copy</Item>
        <Item helper="CTRL + V">Paste</Item>
    </Group>
</SplitButton>, mountNode);
````
