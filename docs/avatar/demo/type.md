# 多种类型

- order: 1

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

:::lang=en-us
# Types

- order: 1

Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.

:::
---

````jsx
import { Avatar, Icon } from '@alifd/next';

ReactDOM.render(
    <div>
        <Avatar icon="account" />
        <Avatar icon={<Icon type="account" />} />
        <Avatar>U</Avatar>
        <Avatar src="https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png" />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon="account" />
    </div>
    , mountNode);
````

````css
.next-avatar {
    margin-right: 12px;
}
````
