import React from 'react';
import ReactDOM from 'react-dom';
import { TreeSelect } from '@alifd/next';

const treeData = [
    {
        label: 'Component',
        value: '1',
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
            {
                label: 'Display',
                value: '3',
                children: [
                    {
                        label: 'Table',
                        value: '6',
                    },
                    {
                        label: 'Table1',
                        value: '61',
                    },
                    {
                        label: 'Table2',
                        value: '62',
                    },
                ],
            },
        ],
    },
];

class Demo extends React.Component {
    render() {
        return (
            <div>
                <TreeSelect
                    treeDefaultExpandAll
                    valueRender={(item, itemPaths) => {
                        return itemPaths.map(t => t.label).join('/');
                    }}
                    dataSource={treeData}
                    defaultValue={['4']}
                    style={{ width: 200 }}
                />
                <br />
                <br />
                <TreeSelect
                    treeDefaultExpandAll
                    valueRender={(item, itemPaths) => {
                        return itemPaths.map(t => t.label).join('/');
                    }}
                    multiple
                    dataSource={treeData}
                    defaultValue={['4', '6']}
                    style={{ width: 300 }}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
