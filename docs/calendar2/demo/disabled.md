# 禁用日期

- order: 4

可以通过 `disabledDate` 属性禁止用户选择某些日期。

:::lang=en-us
# Disable dates

- order: 4

Disable specific dates by `disabledDate`.

:::

---

````jsx
import { Calendar2 } from '@alifd/next';
import dayjs from 'dayjs';

const currentDate = dayjs();
const disabledDate = function (date) {
    return date.valueOf() > currentDate.valueOf();
};

ReactDOM.render(<div className="wrapped-calendar">
    <Calendar2 disabledDate={disabledDate} shape="card" />
</div>, mountNode);
````

````css
.wrapped-calendar {
    width: 300px;
    border: 1px solid #C4C6CF;
    border-radius: 3px;
    padding: 8px;
}
````
