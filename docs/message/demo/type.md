# 信息类型

- order: 0

通过设置`type`调整信息类型

:::lang=en-us
# Type

- order: 0

You can control the type of message by setting the `type` property.
:::

---

````jsx
import { Message } from '@alifd/next';

ReactDOM.render(
    <div className="message-type-demo">
        <Message title="title">
            Content Content Content Content
        </Message>
        <Message title="title" type="warning">
            Content Content Content Content
        </Message>
        <Message title="title" type="error">
            Content Content Content Content
        </Message>
        <Message title="title" type="notice">
            Content Content Content Content
        </Message>
        <Message title="title" type="help">
            Content Content Content Content
        </Message>
        <Message title="title" type="loading">
            Content Content Content Content
        </Message>
    </div>, mountNode);
````

````css
.message-type-demo .next-message {
    margin-bottom: 10px;
}
````
