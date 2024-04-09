import { Tree } from '@alifd/next';
import React, { useState } from 'react';
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
                        disabled: true,
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

function Demo() {
    const [selectedKeys, setSelectedKeys] = useState(['4']);

    // expand tree to the selected node automatically
    const [expandedKeys, setExpandedKeys] = useState(selectedKeys);
    const [autoExpandParent, setAutoExpandParent] = useState(true);

    return (
        <Tree
            dataSource={data}
            selectedKeys={selectedKeys}
            onSelect={(keys, extra) => {
                console.log('onSelect', keys, extra);
                setSelectedKeys(keys);
            }}
            expandedKeys={expandedKeys}
            onExpand={(keys, extra) => {
                console.log('onExpand', keys, extra);
                setExpandedKeys(keys);

                // if not, parent can not collapse when children expanded.
                // or you can remove all expanded children keys.
                setAutoExpandParent(false);
            }}
            autoExpandParent={autoExpandParent}
        />
    );
}

ReactDOM.render(<Demo />, mountNode);
