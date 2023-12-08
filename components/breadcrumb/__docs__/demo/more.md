# 显示省略

- order: 1

当超过设置的最大个数的时候，显示省略号。

:::lang=en-us
# Show Omission
- order: 1
When the maximum number of settings is exceeded, the ellipses are displayed.
:::
---

````jsx
import { Breadcrumb } from '@alifd/next';

ReactDOM.render(
    <Breadcrumb maxNode={5}>
        <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Whatever 2</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">All Categories 3</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Women’s Clothing 4</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Blouses & Shirts 5</Breadcrumb.Item>
        <Breadcrumb.Item>T-shirts 6</Breadcrumb.Item>
    </Breadcrumb>,
    mountNode);
````
