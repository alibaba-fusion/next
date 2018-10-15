
# 可关闭组件

- order: 3

通过增加`closeable`属性可以控制提示框是否可关闭。

:::lang=en-us
# Closeable

- order: 3

You can control whether the message can be closed by adding the `closeable` property.
:::

---

````jsx
import { Message } from '@alifd/next';

const onClose = () => console.log('onClose triggered!');
const afterClose = () => console.log('afterClose triggered!');

ReactDOM.render(
    <div>
        <Message title="title" closeable onClose={onClose} afterClose={afterClose}>
            Content Content Content Content
        </Message>
    </div>, mountNode);
````
