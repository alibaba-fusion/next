import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from '@alifd/next';
import { type SelectProps } from '@alifd/next/lib/select';

const dataSource = [
    { value: '10001', label: 'Lucy King' },
    { value: 10002, label: 'Lily King' },
    { value: 10003, label: 'Tom Cat', disabled: true },
];

const handleChange: SelectProps['onChange'] = value => {
    console.log(value);
};

ReactDOM.render(
    <Select
        useDetailValue
        defaultValue={{ value: '10001', label: 'Lucy King' }}
        onChange={handleChange}
        dataSource={dataSource}
        style={{ width: 150 }}
    />,
    mountNode
);
