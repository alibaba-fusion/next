# 无障碍

- order: 2

组件已支持无障碍。

:::lang=en-us
# Accessibility

- order: 2

Components already support accessibility
:::

---

````jsx
import { Paragraph } from '@alifd/next';

const content = 'Accessibility check is very important for all of us.';

ReactDOM.render(<div>
    <Paragraph>{content}</Paragraph>
    <br/>
    <Paragraph size="small">{content}</Paragraph>
</div>, mountNode);
````

