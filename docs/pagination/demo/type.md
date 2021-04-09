# 简洁/迷你 风格

-   order: 7

可以通过指定 `type` 属性来设置分页器的类型。

:::lang=en-us
# Type of Pagination

-   order: 7

Set the component type by specifying the `type` property.

:::
---

````jsx
import { Pagination } from '@alifd/next';

ReactDOM.render(
    <div>
        <h3>normal</h3>
        <Pagination defaultCurrent={2} />
        <h3>simple</h3>
        <Pagination defaultCurrent={2} type="simple" />
        <h3>mini</h3>
        <Pagination defaultCurrent={2} type="mini" />
    </div>,
    mountNode
);
````
