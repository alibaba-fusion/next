# 更多分页
-   order: 2

当分页数大于5时，自动展示 `...`

:::lang=en-us
# More Pagination
-   order: 2
Show `...` when pagination number exceeds 5.
:::

---

````jsx
import { Pagination } from '@alifd/next';

ReactDOM.render(
    <Pagination total={500} />,
    mountNode
);
````
