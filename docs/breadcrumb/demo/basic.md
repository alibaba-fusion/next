# 基本用法

- order: 0

使用 `Breadcrumb.Item` 来设置面包屑子节点，如果设置其 `link` 属性就是 `<a />` 节点，否则为 `<span />` 节点。

:::lang=en-us
# Basic Usage

- order: 0

Use `Breadcrumb.Item` to set the breadcrumb subnode, if its `link` properity is set to be a `<a />` node, otherwise it is a `<span />`.
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
            T-shirts <b>78,999</b> Results
        </Breadcrumb.Item>
    </Breadcrumb>,
    mountNode);
````
