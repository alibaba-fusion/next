# 基础日历

- order: 0

最简单的日历用法，用户可以切换年/月。

:::lang=en-us
# Basic

- order: 0

A basic calendar.

:::

---

````jsx
import { Calendar } from '@alifd/next';
import moment from 'moment';

function onDateChange(value) {
    console.log(value.format('L'));
}

ReactDOM.render(<div>
    <Calendar onSelect={onDateChange} defaultValue={moment().add(1, 'days')} /></div>, mountNode);
````
