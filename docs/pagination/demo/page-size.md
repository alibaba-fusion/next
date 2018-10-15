# 每页显示

-   order: 5

可以通过设置 `pageSize` 属性来指定每页显示的数量。<br>
可以通过设置 `pageSizeSelector` 属性来指定是否显示 每页数量选择 的部件以及部件形状。<br>
可以通过设置 `pageSizeList` 属性来指定 每页显示数量 可选的值。<br>
可以通过设置 `pageSizePosition` 属性来指定 每页显示数量选择 的部件显示在整个组件的开始位置还是结束位置。
可以通过设置 `onPageSizeChange` 属性来指定每页显示的数量变化时的回调函数。

:::lang=en-us
# Every Page Display

-   order: 5

The `Page Size` property can be set to specify the number of records on the page.<br>
The `pageSizeSelector` property can be set to specify whether to display the number of parts selected per page and the part shape.
The `pageSizeList` property can specify the number of displayable values per page. <br>
By setting the `pageSizePosition` property, you can specify whether the part selected by the display quantity per page is displayed at the beginning or end of the entire component .
The `onPageSizeChange` property can be set to specify the callback function when the number of pages displayed changes.

:::
---

````jsx
import { Pagination } from '@alifd/next';

const handlePageSizeChange = size => console.log(size);

ReactDOM.render(
    <div>
        <h3>To hidden per page size selector</h3>
        <Pagination pageSizeSelector={false} />
        <h3>Type per page size selector of is dropdown，and as for the tail of the entire component</h3>
        <Pagination pageSizeSelector="dropdown" pageSizePosition="end" onPageSizeChange={handlePageSizeChange} />
        <h3>Filter type per page size selector, and use floating layout</h3>
        <Pagination pageSizeSelector="filter" onPageSizeChange={handlePageSizeChange} useFloatLayout />
    </div>,
    mountNode
);
````
