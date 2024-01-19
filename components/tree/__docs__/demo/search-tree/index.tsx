import React from 'react';
import ReactDOM from 'react-dom';
import { Search, Tree } from '@alifd/next';

const data = [
    {
        label: 'Component',
        key: '1',
        children: [
            {
                label: 'Form',
                key: '2',
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

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expandedKeys: ['2'],
            autoExpandParent: true,
        };

        this.matchedKeys = [];

        this.handleSearch = this.handleSearch.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
    }

    handleSearch(value) {
        value = value.trim();
        if (!value) {
            this.matchedKeys = null;
            return;
        }

        const matchedKeys = [];
        const loop = data =>
            data.forEach(item => {
                if (item.label.indexOf(value) > -1) {
                    matchedKeys.push(item.key);
                }
                if (item.children && item.children.length) {
                    loop(item.children);
                }
            });
        loop(data);

        this.setState({
            expandedKeys: [...matchedKeys],
            autoExpandParent: true,
        });
        this.matchedKeys = matchedKeys;
    }

    handleExpand(keys) {
        this.setState({
            expandedKeys: keys,
            autoExpandParent: false,
        });
    }

    render() {
        const { expandedKeys, autoExpandParent } = this.state;
        const filterTreeNode = node => {
            return this.matchedKeys && this.matchedKeys.indexOf(node.props.eventKey) > -1;
        };

        return (
            <div>
                <Search
                    shape="simple"
                    size="medium"
                    style={{ width: '200px', marginBottom: '10px' }}
                    onChange={this.handleSearch}
                />
                <Tree
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    filterTreeNode={filterTreeNode}
                    onExpand={this.handleExpand}
                    dataSource={data}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
