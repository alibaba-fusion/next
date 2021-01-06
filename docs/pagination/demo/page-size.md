# 每页显示

-   order: 3

可以通过设置 `pageSize` 属性来指定每页显示的数量。<br>
可以通过设置 `pageSizeSelector` 属性来指定是否显示 每页数量选择 的部件以及部件形状。<br>
可以通过设置 `pageSizeList` 属性来指定 每页显示数量 可选的值。<br>
可以通过设置 `pageSizePosition` 属性来指定 每页显示数量选择 的部件显示在整个组件的开始位置还是结束位置。<br>
可以通过设置 `onPageSizeChange` 属性来指定每页显示的数量变化时的回调函数。

:::lang=en-us
# Every Page Display

-   order: 3

The `Page Size` property can be set to specify the number of records on the page.<br>
The `pageSizeSelector` property can be set to specify whether to display the number of parts selected per page and the part shape.
The `pageSizeList` property can specify the number of records per page. <br>
By setting the `pageSizePosition` property, you can specify whether the part selected by the display quantity per page is displayed at the beginning or end of the entire component.<br>
The `onPageSizeChange` property can be set to specify the callback function when the number of pages displayed changes.

:::
---

````jsx
import { Pagination } from '@alifd/next';

class Demo extends React.Component {

    state = {
        pageSize: 20
    }

    handleChange = (pageSize) => {
        this.setState({pageSize});
    }

    render() {
        return (<div>
            <h3>Set page size</h3>
            <Pagination pageSize={20} />
            <h3>Hide page size selector</h3>
            <Pagination pageSizeSelector={false} />
            <h3>Set page size selector to 'dropdown'，and show it in the end</h3>
            <Pagination pageSizeSelector="dropdown" pageSizePosition="end" />
            <h3>Use pageSizeList to specify the number of records per page.</h3>
            <Pagination pageSize={this.state.pageSize} total={100} pageSizeSelector="filter" pageSizeList={[5, 10, 20]} onPageSizeChange={this.handleChange} />
        </div>);
    }
}

ReactDOM.render(
    <Demo />,
    mountNode
);
````
