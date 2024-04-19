import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from '@alifd/next';
import { type SelectProps } from '@alifd/next/types/select';

const dataSource = [
    { value: '10001', label: 'Lucy King' },
    { value: 10002, label: 'Lily King' },
    { value: 10003, label: 'Tom Cat', disabled: true },
    {
        label: 'Special Group',
        children: [
            { value: -1, label: 'FALSE' },
            { value: 0, label: 'ZERO' },
        ],
    },
];

const handleChange: SelectProps['onChange'] = value => {
    console.log(value);
};

ReactDOM.render(
    <div>
        <Select
            mode="multiple"
            showSearch
            defaultValue={['10001']}
            onChange={handleChange}
            dataSource={dataSource}
            style={{ width: 300, marginRight: 8 }}
        />
    </div>,
    mountNode
);
