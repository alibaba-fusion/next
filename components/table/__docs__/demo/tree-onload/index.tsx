import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from '@alifd/next';

const generateRandomKey = () => Math.ceil(Math.random() * 10000);

const data = [
    {
        key: 1,
        name: 'Jack',
        age: 32,
        address: 'Zhejiang Province, China',
        // 非叶子结点需要带着children，并且设置一条空数据先
        children: [{ key: generateRandomKey() }],
    },
    {
        key: 2,
        name: 'Rose',
        age: 30,
        address: 'Beijing, China',
        isLeaf: true,
    },
    {
        key: 3,
        name: 'Andy',
        age: 22,
        address: 'Shanghai, China',
        isLeaf: true,
    },
];

class App extends React.Component {
    state = { dataSource: data, loading: false, openRowKeys: [] };
    render() {
        return (
            <span>
                <Table
                    dataSource={this.state.dataSource}
                    openRowKeys={this.state.openRowKeys}
                    onRowOpen={(openRowKeys, currentRowKey, expanded, currentRecord) => {
                        if (currentRecord.isLeaf) {
                            currentRecord.children = [];
                        } else if (expanded) {
                            this.setState({ loading: true });
                            // Get data async
                            setTimeout(() => {
                                const success = true;
                                let keys = openRowKeys;
                                if (!success) {
                                    currentRecord.children = [{ key: generateRandomKey() }];
                                    keys = keys.filter(cu => cu !== currentRowKey);
                                } else {
                                    currentRecord.children = [
                                        {
                                            key: `${currentRowKey}-a`,
                                            name: `${currentRecord.name}-son`,
                                            age: 10,
                                            address: 'Earth',
                                            // 非叶子结点需要带着children，并且设置一条空数据先
                                            children: [{ key: generateRandomKey() }],
                                        },
                                        {
                                            key: `${currentRowKey}-b`,
                                            name: `${currentRecord.name}-daughter`,
                                            age: 10,
                                            address: 'Earth',
                                            isLeaf: true,
                                        },
                                    ];
                                }

                                this.setState({
                                    openRowKeys: keys,
                                    loading: false,
                                });
                            }, 300);
                        } else {
                            this.setState({
                                openRowKeys: openRowKeys,
                            });
                        }
                        console.log(openRowKeys, currentRowKey, expanded, currentRecord);
                    }}
                    primaryKey="key"
                    isTree
                    loading={this.state.loading}
                    rowSelection={{ onChange: () => {} }}
                >
                    <Table.Column title="Key" dataIndex="key" />
                    <Table.Column title="Name" dataIndex="name" />
                    <Table.Column title="Age" dataIndex="age" />
                    <Table.Column title="Address" dataIndex="address" />
                </Table>
            </span>
        );
    }
}

ReactDOM.render(<App />, mountNode);
