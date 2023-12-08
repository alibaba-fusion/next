# 文本

- order: 2

内置不同样式的文本。

:::lang=en-us
# Text

- order: 2

Provides multiple types of text.
:::
---

```jsx
import { Typography } from '@alifd/next';

const { Text } = Typography;

ReactDOM.render(
  <div>
    <Text>Fusion Design</Text>
    <br />
    <Text mark>Fusion Design</Text>
    <br />
    <Text code>Fusion Design</Text>
    <br />
    <Text underline>Fusion Design</Text>
    <br />
    <Text delete>Fusion Design</Text>
    <br />
    <Text strong>Fusion Design</Text>
  </div>,
  mountNode,
);
```
