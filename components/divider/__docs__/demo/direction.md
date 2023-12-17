# 垂直展示

- order: 1

通过`direction`设置垂直分隔符展示。

:::lang=en-us
# Direction

- order: 1

Set vertical Divider using `direction`.

:::
---

````jsx
import { Divider } from '@alifd/next';

ReactDOM.render(
    <div>
        <a href="#">Add</a>
        <Divider direction="ver" />
        <a href="#">Edit</a>
        <Divider direction="ver" />
        <a href="#">Delete</a>
    </div>
    , mountNode);
````
