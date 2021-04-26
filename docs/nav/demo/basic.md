# 顶部导航

- order: 0

水平的顶部导航菜单，四种样式模式可选。可以通过 `noIcon` 显示/隐藏下拉展开按钮

:::lang=en-us
# Basic

- order: 0

The simplest way to use it.
:::

---

````jsx
import { Nav } from '@alifd/next';


const { Item, SubNav, PopupItem, Group } = Nav;

const header = <span className="fusion">FUSION</span>;
const footer = <a className="login-in" href="javascript:;">Login in</a>;

ReactDOM.render(
    <Nav iconOnly style={{ width: '200px' }}>
                <Item icon="account" key="1">
                    First
                </Item>
                <Item key="2">Second</Item>
                <SubNav icon="account" label="SubNav label">
                    <Item icon="account" key="1">
                        First
                    </Item>
                    <Item icon="account" key="2">
                        Second
                    </Item>
                </SubNav>
                <SubNav label="SubNav label">
                    <Item icon="account" key="1">
                        First
                    </Item>
                    <Item icon="account" key="2">
                        Second
                    </Item>
                </SubNav>
                <PopupItem icon="account" label="PopupItem label">
                    <Item icon="account" key="1">
                        First
                    </Item>
                    <Item icon="account" key="2">
                        Second
                    </Item>
                </PopupItem>
                <PopupItem label="PopupItem label">
                    <Item icon="account" key="1">
                        First
                    </Item>
                    <Item icon="account" key="2">
                        Second
                    </Item>
                </PopupItem>
                <Group icon="account" label="Group label">
                    <Item icon="account" key="1">
                        First
                    </Item>
                    <Item icon="account" key="2">
                        Second
                    </Item>
                </Group>
            </Nav>
    , mountNode);
````

````css
.basic-nav .fusion {
    margin: 8px 20px;
    width: 100px;
    color: #FFFFFF;
    font-size: 20px;
}
.basic-nav .login-in {
    margin: 0 20px;
    color: #FFFFFF;
}

````
