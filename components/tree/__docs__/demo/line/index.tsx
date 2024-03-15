import { Tree } from '@alifd/next';
import React from 'react';
import ReactDOM from 'react-dom';

const data = [
    {
        label: 'Component',
        key: '1',
        children: [
            {
                label: 'Form',
                key: '2',
                selectable: false,
                children: [
                    {
                        label: 'Input',
                        key: '4',
                    },
                    {
                        label: 'Select',
                        key: '5',
                    },
                ],
            },
            {
                label: 'Display',
                key: '3',
                children: [
                    {
                        label: 'Table',
                        key: '6',
                    },
                ],
            },
        ],
    },
];

ReactDOM.render(<Tree defaultExpandAll showLine dataSource={data} />, mountNode);
