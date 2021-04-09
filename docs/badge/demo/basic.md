# 基本

- order: 0

简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。

:::lang=en-us
# Basic Usage

- order: 0

Simple usage of badge component.

:::
---

````jsx
import { Badge } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge count={5}>
            <a href="#" className="basic-example"></a>
        </Badge>
        <Badge count={0} showZero>
            <a href="#" className="basic-example"></a>
        </Badge>
    </div>
    , mountNode);
````

````css
.basic-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
}

.next-badge {
    margin-right: 16px;
}
````
