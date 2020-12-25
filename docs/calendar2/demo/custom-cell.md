# 定制日历内容

- order: 6

通过 `dateCellRender` 和  `monthCellRender`， 可以在日历中添加自定义内容。

:::lang=en-us
# Custom cell

- order: 6

Render custom contents by `dateCellRender` and `monthCellRender`.

:::

---

````jsx
import { Calendar2 } from '@alifd/next';
import dayjs from 'dayjs';

const currentDate = dayjs();
const localeData = currentDate.clone().localeData();
const monthLocale = localeData.monthsShort();


function dateCellRender(date) {
    const dateNum = date.date();
    if (currentDate.month() !== date.month()) {
        return dateNum;
    }

    let eventList;
    switch (dateNum) {
        case 1:
            eventList = [
                { type: 'primary', content: 'Event 1' },
                { type: 'normal', content: 'Event 2' }
            ];
            break;
        case 10:
            eventList = [
                { type: 'normal', content: 'Event 3' },
                { type: 'normal', content: 'Event 4' }
            ];
            break;
        case 11:
            eventList = [
                { type: 'primary', content: 'Event 5' },
                { type: 'primary', content: 'Event 6' }
            ];
            break;
        default:
            eventList = [];
    }

    return (<div className="custom-calendar-cell">
        <div className="custom-calendar-cell-value">{dateNum}</div>
        <div className="custom-calendar-cell-content">
            <ul className="event-list">
                {eventList.map((item, key) => <li className={`${item.type}-event`} key={key}>{item.content}</li>)}
            </ul>
        </div>
    </div>);
}

function monthCellRender(date) {
    if (currentDate.month() === date.month()) {
        return (<div>
            <div>{monthLocale[date.month()]}</div>
            <div>Events</div>
        </div>);
    }
    return monthLocale[date.month()];
}

ReactDOM.render(<Calendar2 dateCellRender={dateCellRender} monthCellRender={monthCellRender} />, mountNode);
````

````css
.custom-calendar-guide {
    width: 270px;
    border: 1px solid #C4C6CF;
    border-radius: 3px;
    overflow: hidden;
    margin-top: 20px;
}

.custom-calendar-cell-content {
    height: 50px;
    text-align: left;
}

.event-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.primary-event {
    color: white;
    background: red;
    border-radius: 3px;
    padding-left: 10px;
    margin-bottom: 3px;
}

.normal-event {
    color: white;
    background: blue;
    border-radius: 3px;
    padding-left: 10px;
    margin-bottom: 3px;
}
````
