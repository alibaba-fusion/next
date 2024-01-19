import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TimePicker2 } from '@alifd/next';

const nowTime = dayjs(new Date());
const currentHour = dayjs().hour(nowTime.hour()).minute(0).second(0);
const nextHour = currentHour.hour(currentHour.hour() + 1);

const preset = [
    {
        label: '此刻',
        value: () => nowTime,
    },
];

const presetRange = [
    {
        label: '当前所在时段',
        value: [currentHour, nextHour],
    },
];

function Picker() {
    const [value, onChange] = useState(dayjs('12:00:00', 'HH:mm:ss', true));

    return (
        <div>
            <TimePicker2 value={value} onChange={onChange} preset={preset} />
            <br />
            <br />
            <TimePicker2.RangePicker onChange={console.log} preset={presetRange} />
        </div>
    );
}

ReactDOM.render(<Picker />, mountNode);
