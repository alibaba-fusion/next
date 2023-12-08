# 全屏日历

- order: 0

最简单的日历用法，用户可以切换年/月。

:::lang=en-us
# Fullscreen

- order: 0

A basic fullscreen calendar.

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
