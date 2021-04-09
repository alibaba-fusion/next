# 自定义节点

- order: 4

可以自定义面包屑的节点，比如 react 路由。

:::lang=en-us
# Set Separator
- order: 4
You can put your content in BreadCrumb.Item, like ReactRouter.
:::
---

````jsx
import { Breadcrumb } from '@alifd/next';
import { HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Breadcrumb separator="/">
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/categories">All Categories</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/categories/shirts">Shirts</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Shirt 78，999</Breadcrumb.Item>
        </Breadcrumb>
        <Switch>
            <Route path="/categories/shirts" render={() => <span>Shirts</span>} />
            <Route path="/categories" render={() => <span>All Categories</span>} />
            <Route path="/" render={() => <span>Home</span>} />
        </Switch>
    </HashRouter>,
    mountNode);
````
