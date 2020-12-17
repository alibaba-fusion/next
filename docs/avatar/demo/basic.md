# 基本

- order: 0

简单的头像展示，支持三种尺寸，两种形状。

:::lang=en-us
# Basic Usage

- order: 0

Simple usage of Avatar component, it has 3 sizes and 2 shapes.

:::
---

````jsx
import { Avatar } from '@alifd/next';

ReactDOM.render(
    <div>
        <div className="avatar-demo">
            <Avatar size={64} icon="account" />
            <Avatar size="large" icon="account" />
            <Avatar size="medium" icon="account" />
            <Avatar size="small" icon="account" />
        </div>
        <div className="avatar-demo">
            <Avatar shape="square" size={64} icon="account" />
            <Avatar shape="square" size="large" icon="account" />
            <Avatar shape="square" size="medium" icon="account" />
            <Avatar shape="square" size="small" icon="account" />
        </div>
    </div>
    , mountNode);
````

````css
.avatar-demo .next-avatar {
    margin: 20px 20px 0 0;
}
````
