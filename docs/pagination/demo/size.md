# 分页尺寸

-   order: 5

可以通过指定 `size` 属性来设置分页的尺寸。

:::lang=en-us
# Page Size

-   order: 5

You can set the paging size by specifying the `size` property.

:::
---

````jsx
import { Pagination } from '@alifd/next';

ReactDOM.render(
    <div>
        <h3>small</h3>
        <Pagination defaultCurrent={2} size="small" />
        <h3>medium</h3>
        <Pagination defaultCurrent={2} size="medium" />
        <h3>large</h3>
        <Pagination defaultCurrent={2} size="large" />
    </div>,
    mountNode
);
````
