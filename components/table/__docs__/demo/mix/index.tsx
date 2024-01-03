import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from '@alifd/next';

const data = [
    {
        key: 1,
        name: 'a',
        age: 32,
        address: 'aa',
        children: [
            {
                key: 11,
                name: 'b',
                age: 33,
                address: 'bb',
            },
            {
                key: 12,
                name: 'c',
                age: 33,
                address: 'cc',
                children: [
                    {
                        key: 121,
                        name: 'd',
                        age: 33,
                        address: 'dd',
                    },
                ],
            },
            {
                key: 13,
                name: 'e',
                age: 33,
                address: 'ee',
                children: [
                    {
                        key: 131,
                        name: 'f',
                        age: 33,
                        address: 'ff',
                        children: [
                            {
                                key: 1311,
                                name: 'g',
                                age: 33,
                                address: 'gg',
                            },
                            {
                                key: 1312,
                                name: 'h',
                                age: 33,
                                address: 'hh',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 2,
        name: 'i',
        age: 32,
        address: 'ii',
        children: [],
    },
];

const tableMixTree = (
    <Table dataSource={data} primaryKey="key" isTree rowSelection={{ onChange: () => {} }}>
        <Table.Column title="Key" dataIndex="key" />
        <Table.Column title="Name" dataIndex="name" />
        <Table.Column title="Age" dataIndex="age" />
        <Table.Column title="Address" dataIndex="address" />
    </Table>
);

const tableMixExpanded = (
    <Table
        dataSource={data}
        primaryKey="key"
        expandedRowRender={record => record.address}
        rowSelection={{ onChange: () => {} }}
    >
        <Table.Column title="Key" dataIndex="key" />
        <Table.Column title="Name" dataIndex="name" />
        <Table.Column title="Age" dataIndex="age" />
        <Table.Column title="Address" dataIndex="address" />
    </Table>
);

const tableMixSelectionTreeLock = (
    <div style={{ width: '500px' }}>
        <Table dataSource={data} primaryKey="key" rowSelection={{ onChange: () => {} }} isTree>
            <Table.Column title="Key" dataIndex="key" width={100} />
            <Table.Column title="Name" dataIndex="name" lock width={100} />
            <Table.Column title="Age" dataIndex="age" width={200} lock="right" />
            <Table.Column title="Address" dataIndex="address" width={200} />
        </Table>
    </div>
);

const tableMixLock = (
    <div style={{ width: '500px' }}>
        <Table dataSource={data} primaryKey="key" rowSelection={{ onChange: () => {} }}>
            <Table.Column title="Key" dataIndex="key" width={100} />
            <Table.Column title="Name" dataIndex="name" lock width={100} />
            <Table.Column title="Age" dataIndex="age" width={200} lock="right" />
            <Table.Column title="Address" dataIndex="address" width={200} />
        </Table>
    </div>
);

const tableMixExpandedLock = (
    <div style={{ width: '500px' }}>
        <Table
            dataSource={data}
            primaryKey="key"
            rowSelection={{ onChange: () => {} }}
            expandedRowRender={record => record.address}
            expandedRowIndent={[3, 1]}
        >
            <Table.Column title="Key" dataIndex="key" width={100} />
            <Table.Column title="Name" dataIndex="name" lock width={100} />
            <Table.Column title="Age" dataIndex="age" width={200} lock="right" />
            <Table.Column title="Address" dataIndex="address" width={200} />
        </Table>
    </div>
);

const tableMixTreeLock = (
    <div style={{ width: '500px' }}>
        <Table dataSource={data} primaryKey="key" isTree>
            <Table.Column title="Key" dataIndex="key" width={100} />
            <Table.Column title="Name" dataIndex="name" lock width={100} />
            <Table.Column title="Age" dataIndex="age" width={200} lock="right" />
            <Table.Column title="Address" dataIndex="address" width={200} />
        </Table>
    </div>
);

ReactDOM.render(
    <div className="mix-demo">
        <div className="row">
            <h4>tree & select</h4>
            {tableMixTree}
        </div>
        <div className="row">
            <h4>extra & select</h4>
            {tableMixExpanded}
        </div>
        <div className="row">
            <h4>tree & lock column & select</h4>
            {tableMixSelectionTreeLock}
        </div>
        <div className="row">
            <h4>extra & lock column & select</h4>
            {tableMixExpandedLock}
        </div>
        <div className="row">
            <h4>lock column & select</h4>
            {tableMixLock}
        </div>
        <div className="row">
            <h4>tree & lock column</h4>
            {tableMixTreeLock}
        </div>
    </div>,
    mountNode
);
