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

const dataSourceColorful = [
    { value: '10001', label: 'Lucy King', color: 'orange' },
    { value: 10002, label: 'Lily King', color: 'green' },
    { value: 10003, label: 'Tom Cat', disabled: true, color: 'blue' },
    {
        label: 'Special Group',
        children: [
            { value: -1, label: 'FALSE', color: 'purple' },
            { value: 0, label: 'ZERO', color: 'pink' },
        ],
    },
];

const handleChange: SelectProps['onChange'] = value => {
    console.log(value);
};

ReactDOM.render(
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Select
            aria-label="tag mode"
            mode="tag"
            defaultValue={['10001']}
            onChange={handleChange}
            dataSource={dataSource}
            style={{ width: 300, marginRight: 8 }}
        />

        <Select
            mode="multiple"
            showSearch
            defaultValue={['10001', '10002', '-1']}
            onChange={handleChange}
            dataSource={dataSourceColorful}
            style={{ width: 300 }}
        />
    </div>,
    mountNode
);
