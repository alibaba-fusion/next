# 跳转

-   order: 4

快速跳转到某一页，可以设置 `false` 来隐藏。

:::lang=en-us
# Jump
-   order: 4
Quick jump to some page, and can be hidden via setting showJump to false.
:::

---

````jsx
import { Pagination } from '@alifd/next';

const change = function(value) {
    console.log(value);
};

ReactDOM.render(
    <div>
        <h3>Hide jump forcibly</h3>
        <Pagination total={500} showJump={false} />
    </div>,
    mountNode
);
````
