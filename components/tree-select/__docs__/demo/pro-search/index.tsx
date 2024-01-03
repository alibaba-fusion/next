import React from 'react';
import ReactDOM from 'react-dom';
import { TreeSelect } from '@alifd/next';

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
    constructor(props) {
        super(props);

        this.state = {
            value: ['浙江'],
            treeData: defaultTreeData,
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(searchVal, data) {
        clearTimeout(this.timeId);

        if (searchVal) {
            this.timeId = setTimeout(() => {
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
    }

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
