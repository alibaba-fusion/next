import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from '@alifd/next';

const onRowClick = function (record, index, e) {
        console.log(record, index, e);
    },
    dataSource = () => {
        const result = [];
        for (let i = 0; i < 100; i++) {
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
        dataSource: [],
        cols: [
            <Table.Column title="Title" dataIndex="title.name" width={200} key="name1" />,
            <Table.ColumnGroup title="abc" key="name-group">
                <Table.Column title="Title" dataIndex="title.name" width={100} key="name2" />
                <Table.Column title="Title" dataIndex="title.name" width={400} key="name3" />
            </Table.ColumnGroup>,
            <Table.Column title="Time" dataIndex="time" width={500} key="time" />,
        ],
        loading: true,
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                dataSource: dataSource(),
                loading: false,
            });
        }, 200);
    }
    reduceCol = () => {
        this.setState({
            cols: [
                <Table.Column title="Title" dataIndex="title.name" width={400} key="name1" />,
                <Table.Column title="Time" dataIndex="time" width={100} key="time" lock />,
            ],
        });
    };
    render() {
        return (
            <div>
                <p>
                    <Button onClick={this.reduceCol}>Reduce Cols</Button>
                </p>
                <Table.StickyLock
                    dataSource={this.state.dataSource}
                    onRowClick={onRowClick}
                    fixedHeader
                    loading={this.state.loading}
                >
                    <Table.Column
                        title="Id-Id-Id-Id-Id-Id-Id-Id-Id-Id-Id-Id"
                        dataIndex="id"
                        lock
                        width={140}
                    />
                    {this.state.cols}
                    <Table.Column cell={render} width={200} />
                </Table.StickyLock>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
