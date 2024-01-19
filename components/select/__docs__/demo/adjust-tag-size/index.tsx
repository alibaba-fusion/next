import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from '@alifd/next';

const dataSource = [
    { value: '10001', label: 'Lucy King' },
    { value: 10002, label: 'Lily King' },
    { value: 10003, label: 'Tom Cat' },
];

const style = { width: 200, marginRight: 8 };

ReactDOM.render(
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Select
            mode="multiple"
            value={['10001']}
            size={'small'}
            adjustTagSize
            dataSource={dataSource}
            style={style}
        />
        <Select
            mode="multiple"
            value={['10001']}
            adjustTagSize
            dataSource={dataSource}
            style={style}
        />
    </div>,
    mountNode
);
