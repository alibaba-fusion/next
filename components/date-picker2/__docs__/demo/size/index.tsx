import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker2, Radio } from '@alifd/next';
import { type Dayjs } from 'dayjs';

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
    const onChange = (val: Dayjs | Dayjs[]) => console.log(val);

    return (
        <div>
            <RadioGroup
                shape="button"
                // @ts-expect-error RadioGroup上不存在属性 type
                type="primary"
                defaultValue={size}
                dataSource={dataSource}
                onChange={v => setSize(v as string)}
            />
            <br />
            <br />
            <DatePicker2 size={size as 'large' | 'medium' | 'small'} onChange={onChange} />
            <br />
            <br />
            <RangePicker size={size as 'large' | 'medium' | 'small'} onChange={onChange} />
            <br />
            <br />
        </div>
    );
}

ReactDOM.render(<Demo />, mountNode);
