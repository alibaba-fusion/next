# 标题

- order: 1

展示不同级别的标题。

:::lang=en-us
# Title

- order: 1

Display title in different level.

:::
---

```jsx
import { Typography } from '@alifd/next';

const { H1, H2, H3, H4, H5, H6 } = Typography;

ReactDOM.render(
  <div>
    <H1>h1. Fusion Design</H1>
    <H2>h2. Fusion Design</H2>
    <H3>h3. Fusion Design</H3>
    <H4>h4. Fusion Design</H4>
    <H5>h5. Fusion Design</H5>
    <H6>h6. Fusion Design</H6>
  </div>,
  mountNode,
);
```
