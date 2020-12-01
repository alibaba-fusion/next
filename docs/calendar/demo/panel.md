# 日历面板

-   order: 5

日历面板通用用于嵌套在弹层容器中。

:::lang=en-us

# Panel

-   order: 5

A calendar panel is usually used for embedding in a popup container.

:::

---

```jsx
import { Calendar } from '@alifd/next';
import moment from 'moment';

ReactDOM.render(
    <div>
        <Calendar shape="panel" defaultValue={moment().add(1, 'days')} />
    </div>,
    mountNode
);
```
