# 弹出菜单对齐方式

- order: 4

可以通过设置 popupAlign 为 'outside'，使弹出菜单和父级菜单对齐。

:::lang=en-us
# Alignment of the pop up menu

- order: 4

You can align the popup menu with the parent menu by setting popupAlign to 'outside'.
:::

---

````jsx
import { Menu } from '@alifd/next';

const { SubMenu, Item, Divider } = Menu;

ReactDOM.render(
    <Menu className="my-menu" mode="popup" popupAlign="outside">
        <Item key="1">Option 1</Item>
        <Item key="2">Option 2</Item>
        <Item key="3">Option 3</Item>
        <Divider key="divider" />
        <SubMenu key="sub-1" label="Popup menu 1">
            <Item key="popup-1-1">Popup option 1</Item>
            <Item key="popup-1-2">Popup option 2</Item>
        </SubMenu>
        <SubMenu key="sub-2" label="Popup menu 2">
            <Item key="popup-2-1">Popup option 1</Item>
            <Item key="popup-2-2">Popup option 2</Item>
        </SubMenu>
    </Menu>
, mountNode);
````

````css
.my-menu {
    width: 200px;
}
````
