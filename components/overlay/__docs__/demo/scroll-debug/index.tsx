import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Button, Table, Select } from '@alifd/next';

const { Popup } = Overlay;

const style = {
    width: 400,
    height: 100,
    padding: 10,
    background: '#fff',
    borderRadius: 2,
    boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.15)',
};

function TableDemo() {
    const columns = [1, 2, 3].map(v => {
        return { dataIndex: `data${v}`, title: `Data${v}`, width: 200 };
    });
    columns.unshift({
        dataIndex: 'id',
        title: 'Id',
        width: 100,
        lock: 'left',
    });
    columns.push({
        dataIndex: 'state',
        title: 'State',
        width: 200,
    });
    columns.push({
        title: 'Action',
        width: 100,
        cell: () => (
            <Select
                // style={{ width: 100 }}
                popupProps={{ v2: true }}
                dataSource={[
                    { label: '1', value: 1 },
                    { label: '2', value: 2 },
                    { label: '3', value: 3 },
                    { label: '4', value: 4 },
                    { label: '5', value: 5 },
                    { label: '6', value: 6 },
                    { label: '7', value: 7 },
                    { label: '8', value: 8 },
                    { label: '9', value: 9 },
                ]}
            />
        ),
        lock: 'right',
    });

    const dataSource = [
        {
            id: 30000,
            data: '$13.02',
            state: 'normal',
        },
        {
            id: 30001,
            data: '$16.02',
            state: 'normal',
        },
        {
            id: 30002,
            data: '$63.0002',
            state: 'error',
        },
        {
            id: 30003,
            data: '$13.02',
            state: 'normal',
        },
        {
            id: 30004,
            data: '$16.02',
            state: 'normal',
        },
        {
            id: 30005,
            data: '$63.0002',
            state: 'error',
        },
    ];
    return (
        <div className="App">
            <div style={{ height: 200, overflowY: 'scroll', position: 'relative' }}>
                <Table dataSource={dataSource} stickyHeader>
                    {columns.map((col, i) => {
                        return <Table.Column key={i} {...col} />;
                    })}
                </Table>
            </div>
        </div>
    );
}

ReactDOM.render(<TableDemo />, mountNode);
