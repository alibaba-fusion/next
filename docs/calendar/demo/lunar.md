# 农历

- order: 0

农历

:::lang=en-us
# Lunar Calendar

- order: 0

A Lunar calendar.

:::

---

````jsx
import { Calendar } from '@alifd/next';
import moment from 'moment';
import solarLunar from 'solarlunar';

function onDateChange(value) {
    console.log(value.format('L'));
}

function dateCellRender(value) {
    const solar2lunarData = solarLunar.solar2lunar(value.year(), value.month(), value.date());

    return (<div className="custom-cell">
        {value.date()}
        <span>{solar2lunarData.lDay === 1 ? solar2lunarData.monthCn: solar2lunarData.dayCn}</span>
    </div>);
}


ReactDOM.render(<div>
    <Calendar onSelect={onDateChange} dateCellRender={dateCellRender} defaultValue={moment().add(1, 'days')} /></div>, mountNode);
````

```css
.custom-cell {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}
```
