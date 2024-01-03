import React from 'react';
import ReactDOM from 'react-dom';
import { Radio } from '@alifd/next';

const RadioGroup = Radio.Group;

const list = [
    {
        value: 'apple',
        label: 'Apple',
        disabled: false,
    },
    {
        value: 'pear',
        label: 'Pear',
        disabled: true,
    },
    {
        value: 'orange',
        label: 'Orange',
    },
];

const UnControlApp = () => {
    return (
        <div>
            <RadioGroup dataSource={list} defaultValue={'apple'} />
        </div>
    );
};

ReactDOM.render(<UnControlApp />, mountNode);
