# 面板日历

-   order: 2

面板日历通常用来被嵌套在弹层容器中。

:::lang=en-us

# Panel

-   order: 2

A panel calendar is usually used for embedding in a popup container.

:::

---

````jsx
import { Calendar2 } from '@alifd/next';
import dayjs from 'dayjs';

ReactDOM.render(
    <div style={{border: '1px solid #f0f0f0'}}>
        <Calendar2 shape="panel" defaultValue={dayjs().add(1, 'days')} />
    </div>,
    mountNode
);
````
