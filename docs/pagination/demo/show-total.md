# 显示总数

-   order: 8

分页组件默认不显示总数，你可以通过 totalRender 自定义总数的显示结果。

:::lang=en-us
# Display Total Number

-   order: 8

By default, the paging component does not display the total number. You can customize the total display result by using totalRender.

:::
---

````jsx
import { Pagination } from '@alifd/next';

const total = 50;

ReactDOM.render(
    <Pagination className="custom-pagination" total={total} totalRender={total => `Total: ${total}`} />,
    mountNode
);
````

````css
.custom-pagination {
    display: inline-block;
    margin-left: 10px;
}
````
