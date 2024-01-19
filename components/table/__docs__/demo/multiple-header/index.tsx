import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from '@alifd/next';

const onRowClick = function (record, index, e) {
        console.log(record, index, e);
    },
    dataSource = j => {
        const result = [];
        for (let i = 0; i < j; i++) {
            result.push({
                title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
                id: 100306660940 + i,
                time: 2000 + i,
            });
        }
        return result;
    },
    render = (value, index, record) => {
        return <a>Remove({record.id})</a>;
    };

class App extends React.Component {
    state = {
        dataSource: dataSource(50),
    };
    onClick = () => {
        this.setState({
            dataSource: dataSource(4),
        });
    };
    render() {
        return (
            <div>
                <p>
                    <Button onClick={this.onClick}>Reduce count</Button>
                </p>
                <Table
                    dataSource={this.state.dataSource}
                    onRowClick={onRowClick}
                    fixedHeader
                    maxBodyHeight={400}
                >
                    <Table.Column title="Title1" dataIndex="id" width={140} />
                    <Table.ColumnGroup title="Group2-7">
                        <Table.Column title="Title2" dataIndex="id" lock width={140} />
                        <Table.Column title="Title3" dataIndex="title.name" width={200} />
                        <Table.ColumnGroup title="Group4-7">
                            <Table.Column title="Title4" dataIndex="title.name" width={400} />
                            <Table.Column title="Title5" dataIndex="title.name" width={200} />
                            <Table.ColumnGroup title="Group6-7">
                                <Table.Column title="Title6" dataIndex="title.name" width={400} />
                                <Table.Column title="Title7" dataIndex="title.name" width={200} />
                            </Table.ColumnGroup>
                        </Table.ColumnGroup>
                    </Table.ColumnGroup>
                    <Table.ColumnGroup>
                        <Table.Column title="Time" dataIndex="time" width={500} />
                        <Table.Column cell={render} width={200} lock="right" />
                    </Table.ColumnGroup>
                </Table>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
