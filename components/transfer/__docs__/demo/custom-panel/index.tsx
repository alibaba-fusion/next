import React from 'react';
import ReactDOM from 'react-dom';
import { Transfer, Button, Tree } from '@alifd/next';

const TreeNode = Tree.Node;

const treeDataSource = [
    {
        label: 'Form',
        key: '2',
        value: '2',
        children: [
            {
                label: 'Input',
                key: '4',
                value: '4',
            },
            {
                label: 'Field',
                key: '7',
                value: '7',
            },
            {
                label: 'Select',
                key: '5',
                value: '5',
            },
        ],
    },
    {
        label: 'Display',
        key: '3',
        value: '3',
        children: [
            {
                label: 'Table',
                key: '6',
                value: '6',
            },
        ],
    },
    {
        label: 'Data',
        key: '8',
        value: '8',
    },
];

const transferDataSource = [];
function flatten(list = []) {
    list.forEach(item => {
        transferDataSource.push(item);
        flatten(item.children);
    });
}
flatten(treeDataSource);

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selected: [],
        };
    }

    handleChange(value, data, extra) {
        this.setState({ selected: value });
    }

    onCheck(keys, info) {}

    getTreeDataSource(dataSource = [], value) {
        return dataSource.map(({ children, ...props }) => (
            <TreeNode
                {...props}
                disabled={props.disabled || value.includes(props.value)}
                key={props.value}
            >
                {this.getTreeDataSource(children, value)}
            </TreeNode>
        ));
    }

    render() {
        const { onChange } = this.props;
        const { selected } = this.state;

        return (
            <Transfer
                dataSource={transferDataSource}
                listStyle={{ width: '200px', height: '192px' }}
                onChange={this.handleChange}
                titles={[
                    <Button key="left" type="primary">
                        Source
                    </Button>,
                    'Target',
                ]}
            >
                {({ position, onChange, value }) => {
                    if (position === 'left') {
                        return (
                            <Tree
                                checkable
                                editable
                                style={{ padding: '10px' }}
                                checkedKeys={value}
                                onCheck={(keys, extra) => {
                                    const newValues = extra.checkedNodes.map(
                                        item => item.props.value
                                    );
                                    onChange(position, newValues);
                                }}
                            >
                                {this.getTreeDataSource(treeDataSource, selected)}
                            </Tree>
                        );
                    }
                }}
            </Transfer>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
