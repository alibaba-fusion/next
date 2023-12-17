# 农历

- order: 3

农历

:::lang=en-us
# Lunar Calendar

- order: 3

A lunar calendar.

:::

---

````jsx
import { Calendar2 } from '@alifd/next';
import dayjs from 'dayjs';
import solarLunar from 'solarlunar';

function onDateChange(value) {
    console.log(value.format());
}

function dateCellRender(value) {
    const solar2lunarData = solarLunar.solar2lunar(value.year(), value.month(), value.date());

    return (<div className="custom-cell">
        {value.date()}
        <span>{solar2lunarData.lDay === 1 ? solar2lunarData.monthCn: solar2lunarData.dayCn}</span>
    </div>);
}


ReactDOM.render(<div>
    <Calendar2 onSelect={onDateChange} dateCellRender={dateCellRender} defaultValue={dayjs().add(1, 'days')} /></div>, mountNode);
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
