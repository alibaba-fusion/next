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
import { CalendarNext } from '@alifd/next';
import moment from 'moment';

ReactDOM.render(
    <div className="wrapped-calendar ">
        <CalendarNext shape="panel" value={moment().add(1, 'days')} />
    </div>,
    mountNode
);
```

```css
.wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
}
```
