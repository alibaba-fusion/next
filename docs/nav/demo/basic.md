# 基本

- order: 0

最简单的使用方式。

:::lang=en-us
# Basic

- order: 0

The simplest way to use it.
:::

---

````jsx
import { Nav } from '@alifd/next';


const { Item, SubNav } = Nav;

const header = <span className="fusion">FUSION</span>;
const footer = <a className="login-in" href="javascript:;">Login in</a>;

ReactDOM.render(
    <Nav className="basic-nav" direction="hoz" type="primary" header={header} footer={footer} defaultSelectedKeys={['home']} triggerType="hover">
        <Item key="home">Home</Item>
        <SubNav label="Component" selectable>
            <Item key="next">Next</Item>
            <Item key="mext">Mext</Item>
        </SubNav>
        <Item key="document">Document</Item>
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
.basic-nav .next-nav-item {
    width: 120px;
}
````
