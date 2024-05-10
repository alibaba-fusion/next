import React from 'react';
import ReactDOM from 'react-dom';

import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;

const defaultVal = '2020-02-02';
const defaultRangeVal = ['2020-01-01', '2020-02-02'];
function customizeFormatter(v) {
    return `DATE: ${v.format('YYYY/MM/DD')}`;
}

function App() {
    return (
        <div className="app">
            <div>
                <DatePicker2 defaultValue={defaultVal} format="YYYY/MM/DD" />
            </div>
            <div>
                <DatePicker2 defaultValue={defaultVal} showTime format="YYYY/MM/DD HH:mm:ss" />
            </div>
            <div>
                <DatePicker2
                    defaultValue={defaultVal}
                    format="YYYY/MM/DD HH:mm"
                    showTime
                    timePanelProps={{ format: 'HH:mm' }}
                />
            </div>
            <div>
                <RangePicker defaultValue={defaultRangeVal} format="YYYY/MM/DD" />
            </div>
            <div>
                <RangePicker defaultValue={defaultRangeVal} format="YYYY/MM/DD HH:mm:ss" showTime />
            </div>
            <div>
                <DatePicker2 defaultValue={defaultVal} format={customizeFormatter} />
            </div>
            <div>
                <DatePicker2 defaultValue={defaultVal} format="MMM D, YYYY" />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
