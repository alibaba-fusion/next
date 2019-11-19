# 基本

- order: 0

简单的头像展示，有三种尺寸，两种形状可选。

:::lang=en-us
# Basic Usage

- order: 0

Simple usage of Avatar component, it has 3 sizes and 2 shape.

:::
---

````jsx
import { Avatar } from '@alifd/next';

ReactDOM.render(
    <div>
        <div>
            <Avatar size={64} icon="account" />
            <Avatar size="large" icon="account" />
            <Avatar icon="account" />
            <Avatar size="small" icon="account" />
        </div>
        <div>
            <Avatar shape="square" size={64} icon="account" />
            <Avatar shape="square" size="large" icon="account" />
            <Avatar shape="square" icon="account" />
            <Avatar shape="square" size="small" icon="account" />
        </div>
    </div>
    , mountNode);
````

````css
.next-avatar {
    margin: 20px 20px 0 0;
}
````
