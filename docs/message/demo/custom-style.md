# 自定义样式

- order: 8

使用 `style` 和 `className` 来定义样式。

:::lang=en-us
# Custom Style

- order: 8

You can set message style by using `className` and `style`.
:::

---

````jsx
import { Message, Button } from '@alifd/next';

const success = () => {
  Message.success({
    content: 'Message with custom className and style',
    className: 'custom-message',
    style: {
      marginTop: '50vh',
    },
  });
};

ReactDOM.render(<div>
    <Message className="custom-message" style={{ backgroundColor: 'rgba(3,193,253,.3)'}}> 
        Customized Message
    </Message>
    <br/>
    <br/>
    <Button type="primary" onClick={success}>Customized style</Button>
    </div>
    , mountNode);
````
