# 基本用法

- order: 0

使用 `Breadcrumb.Item` 来设置面包屑子节点。

:::lang=en-us
# Basic Usage

- order: 0

Use `Breadcrumb.Item` to set the breadcrumb subnode.
:::
---

````jsx
import { Breadcrumb } from '@alifd/next';

ReactDOM.render(
    <Breadcrumb>
        <Breadcrumb.Item link="javascript:void(0);">Home</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">All Categories</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Women’s Clothing</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Blouses & Shirts</Breadcrumb.Item>
        <Breadcrumb.Item>
            T-shirts&nbsp; <b>78,999</b> Results
        </Breadcrumb.Item>
    </Breadcrumb>,
    mountNode);
````
