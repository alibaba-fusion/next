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
        <Message title="Success" type="success">
            Content Content Content Content
        </Message>
        <Message title="Warning" type="warning">
            Content Content Content Content
        </Message>
        <Message title="Error" type="error">
            Content Content Content Content
        </Message>
        <Message title="Notice" type="notice">
            Content Content Content Content
        </Message>
        <Message title="Help" type="help">
            Content Content Content Content
        </Message>
        <Message title="Loading" type="loading">
            Content Content Content Content
        </Message>
    </div>, mountNode);
````

````css
.message-type-demo .next-message {
    margin-bottom: 10px;
}
````
