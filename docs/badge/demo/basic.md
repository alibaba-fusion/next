# 基本

- order: 0

简单的徽章展示。

:::lang=en-us
# Basic Usage

- order: 0

Simple usage of badge component.

:::
---

````jsx
import { Badge } from '@alifd/next';

ReactDOM.render(
    <Badge count={5}>
        <a href="#" className="basic-example"></a>
    </Badge>, mountNode);
````

````css
.basic-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
}
````
