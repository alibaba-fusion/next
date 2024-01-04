import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from '@alifd/next';

const dataSource = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
        result.push({
            title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
            id: 100306660940 + i,
            time: 2000 + i,
        });
    }
    return result;
};
const render = (value, index, record) => {
    return <a href="javascript:;">Remove({record.id})</a>;
};
ReactDOM.render(
    <Table dataSource={dataSource()}>
        <Table.Column title="Id" htmlTitle="Unique Id" dataIndex="id" />
        <Table.Column title="Title" dataIndex="title.name" />
        <Table.Column title="Time" dataIndex="time" />
        <Table.Column cell={render} />
    </Table>,
    mountNode
);
