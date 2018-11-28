# 横向菜单条

- order: 8

展示横向导航菜单条的用法。

:::lang=en-us
# Horizontal menu bar

- order: 8

Demo the usage of the horizontal navigation menu bar.
:::

---

````jsx
import { Menu } from '@alifd/next';

const { SubMenu, Item } = Menu;

ReactDOM.render(
    <Menu header="aaa" direction="hoz" mode="popup" className="my-hoz-menu" popupClassName="my-hoz-menu" popupAutoWidth>
        <Item key="1">First</Item>
        <Item key="2">Second</Item>
        <SubMenu label="Sub Nav">
            <Item key="sub-1">Sub option 1</Item>
            <Item key="sub-2">Sub option 2</Item>
            <SubMenu label="Sub Sub Nav">
                <Item key="sub-sub-1">Sub sub option 1</Item>
                <Item key="sub-sub-2">Sub sub option 2</Item>
            </SubMenu>
        </SubMenu>
        <Item key="3">Third</Item>
    </Menu>
, mountNode);
````

````css
.my-hoz-menu .next-menu-item {
    width: 160px;
}
````
