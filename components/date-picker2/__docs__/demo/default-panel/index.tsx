import React from 'react';
import ReactDOM from 'react-dom';

import { DatePicker2 } from '@alifd/next';
import dayjs, { type Dayjs } from 'dayjs';

const { RangePicker } = DatePicker2;

const onChange = (date: Dayjs | Dayjs[], dateStr: string | string[]) => console.log(date, dateStr);
const onPanelChange = (value: Dayjs, mode: string) => console.log(value.format('YYYY-MM-DD'), mode);

function App() {
    return (
        <div className="app">
            <div>
                <DatePicker2
                    defaultPanelValue={dayjs('2020-11')}
                    onPanelChange={onPanelChange}
                    onChange={onChange}
                />
            </div>
            <div>
                <DatePicker2
                    showTime
                    defaultPanelValue={dayjs('2020-11')}
                    onPanelChange={onPanelChange}
                    onChange={onChange}
                />
            </div>
            <div>
                <DatePicker2
                    mode="month"
                    defaultPanelValue={dayjs('2020-11')}
                    onPanelChange={onPanelChange}
                    onChange={onChange}
                />
            </div>
            <div>
                <DatePicker2
                    mode="year"
                    defaultPanelValue={dayjs('2030')}
                    onPanelChange={onPanelChange}
                    onChange={onChange}
                />
            </div>
            <div>
                <RangePicker
                    defaultPanelValue={dayjs('2020-11')}
                    onPanelChange={onPanelChange}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
ReactDOM.render(<App />, mountNode);
