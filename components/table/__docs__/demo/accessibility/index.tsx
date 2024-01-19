import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from '@alifd/next';

const result = [
    {
        id: '001',
        time: 1951,
        title: { name: 'The Old Man and the Sea' },
    },
    {
        id: '002',
        time: 1925,
        title: { name: 'the great gatsby' },
    },
    {
        id: '003',
        time: 1719,
        title: { name: 'The adventures of Robinson Crusoe' },
    },
];
class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: result,
        };
    }

    onRemove = id => {
        const { dataSource } = this.state;
        let index = -1;
        dataSource.forEach((item, i) => {
            if (item.id === id) {
                index = i;
            }
        });
        if (index !== -1) {
            dataSource.splice(index, 1);
            this.setState({
                dataSource,
            });
        }
    };

    renderOper = (value, index, record) => {
        return <a onClick={this.onRemove.bind(this, record.id)}>Remove({record.id})</a>;
    };
    render() {
        return (
            <div>
                <Table dataSource={this.state.dataSource}>
                    <Table.Column title="Id" dataIndex="id" />
                    <Table.Column title="Title" dataIndex="title.name" />
                    <Table.Column title="Time" dataIndex="time" />
                    <Table.Column title="operate" cell={this.renderOper} />
                </Table>
            </div>
        );
    }
}
ReactDOM.render(<Demo />, mountNode);
