import React from 'react';
import ReactDOM from 'react-dom';

import { DatePicker2 } from '@alifd/next';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker2;
const RangePreset = {
    今天: [dayjs(), dayjs()],
    本月: [dayjs().startOf('month'), dayjs().endOf('month')],
};
const datePreset = {
    此刻: () => dayjs(),
};

function App() {
    return (
        <div className="app">
            <div>
                <DatePicker2 preset={datePreset} />
            </div>
            <div>
                <DatePicker2 preset={datePreset} showTime />
            </div>
            <div>
                <RangePicker preset={RangePreset} />
            </div>
            <div>
                <RangePicker preset={RangePreset} showTime />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
