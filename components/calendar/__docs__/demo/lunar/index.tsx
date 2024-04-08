import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '@alifd/next';
import moment from 'moment';
import solarLunar from 'solarlunar';
import { type CalendarProps } from '@alifd/next/lib/calendar';

const onDateChange: CalendarProps['onSelect'] = value => {
    console.log(value.format('L'));
};

const dateCellRender: CalendarProps['dateCellRender'] = value => {
    const solar2lunarData = solarLunar.solar2lunar(value.year(), value.month(), value.date());

    return (
        <div className="custom-cell">
            {value.date()}
            <span>
                {solar2lunarData.lDay === 1 ? solar2lunarData.monthCn : solar2lunarData.dayCn}
            </span>
        </div>
    );
};

ReactDOM.render(
    <div>
        <Calendar
            onSelect={onDateChange}
            dateCellRender={dateCellRender}
            defaultValue={moment().add(1, 'days')}
        />
    </div>,
    mountNode
);
