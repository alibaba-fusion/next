# 基本

- order: 0

最简单的用法。

:::lang=en-us
# basic

- order: 0

simple usage
:::
---

````jsx
import { Paragraph } from '@alifd/next';

const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

ReactDOM.render(<div>
    <Paragraph>{content}</Paragraph>
    <br/>
    <Paragraph size="small">{content}</Paragraph>
</div>, mountNode);
````
