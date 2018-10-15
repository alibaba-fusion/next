# 只读模式

- order: 4

设置 `disabled` 属性后，评分组件仅展示模式，不可选择。


:::lang=en-us
# Read-only Mode

- order: 4

Rating component can only display score when you set `disabled` attribute.

:::
---

````jsx
import { Rating } from '@alifd/next';

ReactDOM.render(<Rating defaultValue={3.2} disabled />, mountNode);
````
