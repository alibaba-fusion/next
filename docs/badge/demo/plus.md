# 大数字

- order: 1

超过overflow的数值，会显示`\${overflow}+`，overflow默认值为`99`。

:::lang=en-us
# Large Number

- order: 1

Display `\${overflowCount}+` when count is greater than overflowCount, default value of overflow is `99`.

:::
---

````jsx
import { Badge } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge count={100}>
            <a href="#" className="head-example"></a>
        </Badge>
        <Badge count={200} overflowCount={199}>
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
