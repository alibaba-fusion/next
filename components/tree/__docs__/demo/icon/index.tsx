import React from 'react';
import ReactDOM from 'react-dom';
import { Tree, Checkbox, Icon } from '@alifd/next';

const data = [
    {
        label: 'Component',
        key: '1',
        icon: <Icon type="favorites-filling" />,
        children: [
            {
                label: 'Form',
                key: '2',
                icon: 'form',
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
                icon: 'form',
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

ReactDOM.render(<Tree defaultExpandAll dataSource={data} />, mountNode);
