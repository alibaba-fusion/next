import React from 'react';
import ReactDOM from 'react-dom';
import { TreeSelect } from '@alifd/next';

const TreeNode = TreeSelect.Node;
const dataSource = [
    {
        value: '1',
        label: 'Component',
        children: [
            {
                label: 'Form',
                value: '2',
                children: [
                    {
                        label: 'Input',
                        value: '4',
                    },
                    {
                        label: 'Select',
                        value: '5',
                    },
                ],
            },
        ],
    },
    {
        value: '3',
        label: 'Display',
        children: [
            {
                label: 'Table',
                value: '6',
            },
        ],
    },
];

function App() {
    function handleChange(...args: unknown[]) {
        console.log('onChange', ...args);
    }

    return (
        <div>
            <div>DataSource mode</div>
            <TreeSelect
                useDetailValue
                defaultValue={{ label: 'Form', value: '2' }}
                onChange={handleChange.bind(undefined, 'from dataSource mode')}
                dataSource={dataSource}
                style={{ width: 150 }}
                treeDefaultExpandAll
            />
            <br />
            <br />
            <div>Children mode</div>
            <TreeSelect
                useDetailValue
                defaultValue={{ label: 'Form', value: '2' }}
                onChange={handleChange.bind(undefined, 'from children mode')}
                style={{ width: 150 }}
                treeDefaultExpandAll
            >
                <TreeNode key="1" value="1" label="Component">
                    <TreeNode key="2" value="2" label="Form">
                        <TreeNode key="4" value="4" label="Input" />
                        <TreeNode key="5" value="5" label="Select" disabled />
                    </TreeNode>
                    <TreeNode key="3" value="3" label="Display">
                        <TreeNode key="6" value="6" label="Table" />
                    </TreeNode>
                </TreeNode>
            </TreeSelect>
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
