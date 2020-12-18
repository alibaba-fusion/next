# 类型

- order: 1

支持多种展示类型：内置图标、Icon、字符、图片，并可自定义样式

:::lang=en-us
# Types

- order: 1

Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.

:::
---

````jsx
import { Avatar, Icon } from '@alifd/next';

ReactDOM.render(
    <div className="avatar-demo">
        <Avatar icon="account" />
        <Avatar icon={<Icon type="smile" />} />
        <Avatar>U</Avatar>
        <Avatar src="https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png" />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon="account" />
    </div>
    , mountNode);
````

````css
.avatar-demo .next-avatar {
    margin-right: 12px;
}
````
