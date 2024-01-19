import React from 'react';
import ReactDOM from 'react-dom';

import { DatePicker2 } from '@alifd/next';

const { MonthPicker, YearPicker, WeekPicker, QuarterPicker } = DatePicker2;

const onChange = (date, dateStr) => console.log(date, dateStr);

function App() {
    return (
        <div className="app">
            <div>
                <DatePicker2 onChange={onChange} />
            </div>
            <div>
                <MonthPicker onChange={onChange} />
            </div>
            <div>
                <YearPicker onChange={onChange} />
            </div>
            <div>
                <WeekPicker value="2022-01-01" onChange={onChange} />
            </div>
            <div>
                <QuarterPicker onChange={onChange} />
            </div>
        </div>
    );
}
ReactDOM.render(<App />, mountNode);
