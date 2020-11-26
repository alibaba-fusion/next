# 自动省略

- order: 2

自动显示省略号。

:::lang=en-us
# Show Omission
- order: 2
The ellipses are displayed automatically when Breadcrumb overflow.
:::
---

````jsx
import { Breadcrumb } from '@alifd/next';

ReactDOM.render(
    <Breadcrumb maxNode="auto" style={{ width: 200 }}>
        <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Whatever 2</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">All Categories 3</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Women’s Clothing 4</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Blouses & Shirts 5</Breadcrumb.Item>
        <Breadcrumb.Item>T-shirts 6</Breadcrumb.Item>
    </Breadcrumb>,
    mountNode);
````
