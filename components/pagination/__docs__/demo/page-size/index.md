# zh-CN order=3

# 每页显示

可以通过设置 `pageSize` 属性来指定每页显示的数量。<br>
可以通过设置 `pageSizeSelector` 属性来指定是否显示 每页数量选择 的部件以及部件形状。<br>
可以通过设置 `pageSizeList` 属性来指定 每页显示数量 可选的值。<br>
可以通过设置 `pageSizePosition` 属性来指定 每页显示数量选择 的部件显示在整个组件的开始位置还是结束位置。<br>
可以通过设置 `onPageSizeChange` 属性来指定每页显示的数量变化时的回调函数。<br>
`pageSize` 仅支持受控模式，当设置 `pageSizeSelector` 时，需要同时设置 `pageSize`、`onPageSizeChange` 才能达到效果。

# en-US order=3

# Every Page Display

The `Page Size` property can be set to specify the number of records on the page.<br>
The `pageSizeSelector` property can be set to specify whether to display the number of parts selected per page and the part shape.
The `pageSizeList` property can specify the number of records per page. <br>
By setting the `pageSizePosition` property, you can specify whether the part selected by the display quantity per page is displayed at the beginning or end of the entire component.<br>
The `onPageSizeChange` property can be set to specify the callback function when the number of pages displayed changes.<br>
`pageSize` only supports controlled mode. When setting `pageSizeSelector`, you need to set `pageSize` and `onPageSizeChange` at the same time to achieve the effect.
