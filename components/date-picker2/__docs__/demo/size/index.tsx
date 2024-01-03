import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker2, Radio } from '@alifd/next';

const { useState } = React;
const RadioGroup = Radio.Group;

const dataSource = [
    {
        value: 'large',
        label: 'Large',
    },
    {
        value: 'medium',
        label: 'Medium',
    },
    {
        value: 'small',
        label: 'Small',
    },
];
const { RangePicker } = DatePicker2;

function Demo() {
    const [size, setSize] = useState('medium');
    const onChange = val => console.log(val);

    return (
        <div>
            <RadioGroup
                shape="button"
                type="primary"
                defaultValue={size}
                dataSource={dataSource}
                onChange={v => setSize(v)}
            />
            <br />
            <br />
            <DatePicker2 size={size} onChange={onChange} />
            <br />
            <br />
            <RangePicker size={size} onChange={onChange} />
            <br />
            <br />
        </div>
    );
}

ReactDOM.render(<Demo />, mountNode);
