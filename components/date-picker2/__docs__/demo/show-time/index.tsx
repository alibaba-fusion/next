import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;
const onChange = value => console.log('onChange: ', value);
const onOk = value => console.log('onOK: ', value.format('YYYY-MM-DD HH:mm:ss'));
const onRangeOk = value => console.log('onOk: [%s, %s]', ...value);

const defaultTimeValue = '09:00:00';

ReactDOM.render(
    <div className="app">
        <div>
            <DatePicker2 showTime onChange={onChange} onOk={onOk} />
        </div>
        <div>
            <DatePicker2
                showTime
                timePanelProps={{ defaultValue: defaultTimeValue, secondStep: 10 }}
                onChange={onChange}
                onOk={onOk}
            />
        </div>
        <div>
            <RangePicker showTime onChange={onChange} onOk={onRangeOk} />
        </div>
        <div>
            <RangePicker
                showTime
                timePanelProps={{
                    defaultValue: ['09:00', '23:59'],
                    format: 'HH:mm',
                    minuteStep: 15,
                }}
                onChange={onChange}
                onOk={onRangeOk}
            />
        </div>
    </div>,
    mountNode
);
