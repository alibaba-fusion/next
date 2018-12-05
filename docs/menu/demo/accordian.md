# 内连菜单展开模式

- order: 1

通过设置 openMode 为 'single'，可以让菜单同时只能展开一个内连子菜单，默认为可以同时展开多个。

:::lang=en-us
# Expand mode of inline menu

- order: 1

You can make the inline menu expand only one submenu at the same time by setting openMode to 'single'. By default, you can expand more than one at a time.
:::

---

````jsx
import { Menu } from '@alifd/next';

const { SubMenu, Item } = Menu;

ReactDOM.render(
    <Menu defaultOpenKeys="1" className="my-menu" openMode="single">
        <SubMenu key="0" label="Sub menu 1">
            <Item key="0-0">Sub option 1</Item>
            <Item key="0-1">Sub option 2</Item>
            <Item key="0-2">Sub option 3</Item>
        </SubMenu>
        <SubMenu key="1" label="Sub menu 2">
            <Item key="1-0">Sub option 1</Item>
            <Item key="1-1">Sub option 2</Item>
            <Item key="1-2">Sub option 3</Item>
        </SubMenu>
        <SubMenu key="2" label="Sub menu 3">
            <Item key="2-0">Sub option 1</Item>
            <Item key="2-1">Sub option 2</Item>
            <Item key="2-2">Sub option 3</Item>
        </SubMenu>
        <SubMenu key="3" label="Sub menu 4">
            <Item key="3-0">Sub option 1</Item>
            <Item key="3-1">Sub option 2</Item>
            <Item key="3-2">Sub option 3</Item>
        </SubMenu>
    </Menu>
, mountNode);
````

````css
.my-menu {
    width: 200px;
}
````
