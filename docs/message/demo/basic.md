# 基本

- order: 0

简单的信息提示反馈。

:::lang=en-us
# Basic Usage

- order: 0

Basic usage of Message.
:::

---

````jsx
import { Message, Button } from '@alifd/next';

const notice = () => {
  Message.notice('This is a Toast Message Notice');
};

ReactDOM.render(<div>
        <Message type='notice'>This is an Inline Message Notice</Message>
        <br/>
        <Button type="primary" onClick={notice}>
        Display Toast Message Notice
        </Button>
    </div>,
    mountNode,
);
````
