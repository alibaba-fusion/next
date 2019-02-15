# 无障碍

- order: 6

组件已支持无障碍

:::lang=en-us
# Accessibility

- order: 6

Components already support accessibility
:::

---

````jsx
import { Nav } from '@alifd/next';


const { Item, SubNav } = Nav;

const header = <span className="a">Accessibility</span>;
const footer = <a className="login-in" href="javascript:;">Login in</a>;

ReactDOM.render(
    <Nav className="basic-nav" direction="hoz" type="primary" header={header} footer={footer} defaultSelectedKeys={['home']} triggerType="hover">
        <Item key="Accessibility home">Home</Item>
        <SubNav label="Accessibility Component" selectable>
            <Item key="next">Next</Item>
            <Item key="mext">Mext</Item>
        </SubNav>
        <Item key="Accessibility document">Document</Item>
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
