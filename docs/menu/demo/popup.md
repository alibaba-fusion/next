# 弹出菜单

- order: 2

展示弹出菜单的用法。

:::lang=en-us
# Pop up menu

- order: 2

Demo the usage of the popup up menu.
:::

---

````jsx
import { Menu } from '@alifd/next';

const { SubMenu, Item, Divider } = Menu;

ReactDOM.render(
    <Menu className="my-menu" mode="popup">
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
