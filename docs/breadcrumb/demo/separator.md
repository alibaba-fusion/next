# 设置分隔符

- order: 4

也可以设置不同的分隔符。

:::lang=en-us
# Set Separator
- order: 4
You can also set specific separators.
:::
---

````jsx
import { Breadcrumb } from '@alifd/next';

ReactDOM.render(
    <Breadcrumb separator="/">
        <Breadcrumb.Item link="javascript:void(0);">Home</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">All Categories</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Women’s Clothing</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Blouses & Shirts</Breadcrumb.Item>
        <Breadcrumb.Item>T-shirts</Breadcrumb.Item>
    </Breadcrumb>,
    mountNode);
````
