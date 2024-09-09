import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from '@alifd/next';
import moment, { type Moment } from 'moment';

const { RangePicker, MonthPicker } = DatePicker;

function onVisibleMonthChange(val: Moment, reason: string) {
    console.log(val.format('L'), reason);
}

ReactDOM.render(
    <div>
        <p>Setting last month as default visible month</p>
        <DatePicker
            defaultVisibleMonth={() => moment().add(-1, 'months')}
            onVisibleMonthChange={onVisibleMonthChange}
        />
        <br />
        <br />
        <RangePicker
            defaultVisibleMonth={() => moment().add(-1, 'months')}
            onVisibleMonthChange={onVisibleMonthChange}
        />
        <br />
        <br />
        <p>Setting 2019 as default visible year</p>
        <MonthPicker defaultVisibleYear={() => moment('2019', 'YYYY')} />
    </div>,
    mountNode
);
