# 基本用法

- order: 0

最简单的用法。

:::lang=en-us
# Basic Usage

- order: 0

a basic way to use it
:::
---

````jsx
import { Loading } from '@alifd/next';

ReactDOM.render(<Loading tip="loading...">
    <div className="demo">test</div>
</Loading>, mountNode);
````

````css
.demo {
    width: 500px;
    background-color: #F2F3F7;
    text-align: center;
    padding:50px;
}
````
