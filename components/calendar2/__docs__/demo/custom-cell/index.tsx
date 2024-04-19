import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar2 } from '@alifd/next';
import dayjs from 'dayjs';
import type { CalendarProps } from '@alifd/next/lib/calendar2';

const currentDate = dayjs();

const dateCellRender: CalendarProps['dateCellRender'] = date => {
    const dateNum = date.date();
    if (currentDate.month() !== date.month()) {
        return dateNum;
    }

    let eventList: { type: 'primary' | 'normal'; content: string }[] = [];
    switch (dateNum) {
        case 1:
            eventList = [
                { type: 'primary', content: 'Event 1' },
                { type: 'normal', content: 'Event 2' },
            ];
            break;
        case 10:
            eventList = [
                { type: 'normal', content: 'Event 3' },
                { type: 'normal', content: 'Event 4' },
            ];
            break;
        case 11:
            eventList = [
                { type: 'primary', content: 'Event 5' },
                { type: 'primary', content: 'Event 6' },
            ];
            break;
        default:
            eventList = [];
    }

    return (
        <div className="custom-calendar-cell">
            <div className="custom-calendar-cell-value">{dateNum}</div>
            <div className="custom-calendar-cell-content">
                <ul className="event-list">
                    {eventList.map((item, key) => (
                        <li className={`${item.type}-event`} key={key}>
                            {item.content}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const monthCellRender: CalendarProps['monthCellRender'] = date => {
    if (currentDate.month() === date.month()) {
        return (
            <div>
                <div>{date.month()}</div>
                <div>Events</div>
            </div>
        );
    }
    return date.month();
};

ReactDOM.render(
    <Calendar2 dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
    mountNode
);
