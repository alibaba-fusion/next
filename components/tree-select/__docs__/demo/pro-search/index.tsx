import React from 'react';
import ReactDOM from 'react-dom';
import { TreeSelect } from '@alifd/next';
import type { TreeSelectProps } from '@alifd/next/lib/tree-select';

const defaultTreeData = [
    {
        label: '浙江',
        value: '浙江',
        children: [
            {
                label: '绍兴',
                value: '绍兴',
            },
        ],
    },
];

class Demo extends React.Component {
    timeId: number;
    state = {
        value: ['浙江'],
        treeData: defaultTreeData,
    };

    handleSearch: TreeSelectProps['onSearch'] = searchVal => {
        clearTimeout(this.timeId);

        if (searchVal) {
            this.timeId = window.setTimeout(() => {
                this.setState({
                    treeData: [
                        {
                            label: searchVal,
                            value: searchVal,
                        },
                    ],
                });
            }, 500);
        } else {
            this.setState({
                treeData: defaultTreeData,
            });
        }
    };

    render() {
        return (
            <TreeSelect
                treeDefaultExpandAll
                showSearch
                onSearch={this.handleSearch}
                dataSource={this.state.treeData}
                style={{ width: 200 }}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
