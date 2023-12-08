# 更新消息内容

- order: 7
- debug: true

通过唯一的 `key` 来动态更新内容。

:::lang=en-us
# Closeable

- order: 7

You can update message content by using unique `key`.
:::

---

````jsx
import { Message, Button } from '@alifd/next';

const key = 'updatable';

const openMessage = () => {
  Message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    Message.success({ content: 'Loaded!', key, duration: 2000 });
  }, 1000);
};

ReactDOM.render(
  <Button type="primary" onClick={openMessage}>
    Open the message box
  </Button>,
  mountNode,
);
````
