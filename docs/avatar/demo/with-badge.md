# 带徽标

- order: 2

通常用于消息提示。

:::lang=en-us
# With Badge

- order: 2

Usually used for reminders and notifications.

:::
---

````jsx
import { Avatar, Badge } from '@alifd/next';

ReactDOM.render(
    <div>
        <span style={{ marginRight: 24 }}>
            <Badge count={1}>
                <Avatar shape="square" icon="account" />
            </Badge>
        </span>
        <span>
            <Badge dot>
                <Avatar shape="square" icon="account" />
            </Badge>
        </span>
    </div>
    , mountNode);
````

````css

````
