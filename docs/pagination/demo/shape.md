# 前进后退按钮只显示箭头

-   order: 4

可以通过指定 `shape` 属性来设置前进后退按钮箭头的显示方式。

:::lang=en-us
# Forward and Back Buttons Only Show Arrows

-   order: 4

You can set the forward and back arrow arrows to display by specifying the `shape` property.

:::
---

````jsx
import { Pagination } from '@alifd/next';

ReactDOM.render(
    <div>
        <h3>normal</h3>
        <Pagination defaultCurrent={2} />
        <h3>arrow-only</h3>
        <Pagination defaultCurrent={2} shape="arrow-only" />
        <h3>arrow-prev-only</h3>
        <Pagination defaultCurrent={2} shape="arrow-prev-only" />
        <h3>no-border</h3>
        <Pagination defaultCurrent={2} shape="no-border" type="simple" />
    </div>,
    mountNode
);
````

````css
.next-pagination + .next-pagination {
    margin-top: 20px;
}
````
