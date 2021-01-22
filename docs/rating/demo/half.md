# 半星评分

- order: 2

默认情况下评分组件只支持整数评分，通过开启 `allowHalf` 属性可以支持半星评分。

:::lang=en-us
# Half-star Rating

- order: 2

Rating component only support integer score in default situation, bu you can set `allowHalf` attribute to support half star.

:::
---

````jsx
import { Rating } from '@alifd/next';

ReactDOM.render(<Rating defaultValue={3.5} allowHalf />, mountNode);
````
