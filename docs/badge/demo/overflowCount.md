# 封顶数字

- order: 1

超过`overflowCount`的数值，会显示`${overflowCount}+`，`overflowCount`默认值为`99`。

:::lang=en-us
# Overflow Count

- order: 1

Display `\${overflowCount}+` when count is greater than `overflowCount`, default value of `overflowCount` is `99`.

:::
---

````jsx
import { Badge } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge count={99}>
            <a href="#" className="head-example"></a>
        </Badge>
        <Badge count={100}>
            <a href="#" className="head-example"></a>
        </Badge>
        <Badge count={100} overflowCount={10}>
            <a href="#" className="head-example"></a>
        </Badge>
        <Badge count={1000} overflowCount={999}>
            <a href="#" className="head-example"></a>
        </Badge>
    </div>, mountNode);
````

````css
.next-badge {
    margin-right: 16px;
}
.head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
}
````
