# 讨嫌的小红点

- order: 2

没有具体的数字。

:::lang=en-us
# Red Dot

- order: 2

Just a red dot, not a number.

:::
---

````jsx
import { Badge, Icon } from '@alifd/next';


ReactDOM.render(
    <div>
        <Badge dot>
            <Icon type="email" />
        </Badge>
        <Badge dot>
            <a href="#">A Link</a>
        </Badge>
    </div>, mountNode);
````

````css
.next-badge {
    margin-right: 16px;
}
````
