# 禁用日期

-   order: 2

可以通过 `disabledDate` 属性禁止用户选择某些日期。

:::lang=en-us

# Disable dates

-   order: 2

Disable specific dates by `disabledDate`.

:::

---

```jsx
import { Calendar2 } from '@alifd/next';
import moment from 'moment';

const currentDate = moment();
const disabledDate = function(date) {
    return date.valueOf() > currentDate.valueOf();
};

ReactDOM.render(
    <div className="wrapped-calendar">
        <Calendar2 disabledDate={disabledDate} shape="card" />
    </div>,
    mountNode
);
```

```css
.wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
}
```
