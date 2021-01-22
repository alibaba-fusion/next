# 配合 react-router 使用

-   order: 11

单页应用场景下，Pagination 组件可以使用外部跳转的方法来实现单页内部跳转。

:::lang=en-us
# Using With React-Router

-   order: 11

In a single-page application scenario, the Pagination component can use external jump methods to implement single-page internal jumps.

:::
---

````jsx
import { Pagination } from '@alifd/next';
import { hashHistory } from 'react-router';

function handleChange(page) {
    hashHistory.push(page.toString());
}

ReactDOM.render(
    <Pagination defaultCurrent={2} onChange={handleChange} />,
    mountNode
);
````
