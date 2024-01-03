import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from '@alifd/next';

const dataSource = () => {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push({
                title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
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
    constructor(props) {
        super(props);
        this.state = {
            dataSource: dataSource(),
        };
    }
    onSort(dataIndex, order) {
        const dataSource = this.state.dataSource.sort(function (a, b) {
            const result = a[dataIndex] - b[dataIndex];
            return order === 'asc' ? (result > 0 ? 1 : -1) : result > 0 ? -1 : 1;
        });
        this.setState({
            dataSource,
        });
    }
    toggleIndent() {
        this.setState({
            expandedRowIndent: [2, 1],
        });
    }
    toggleCol() {
        this.setState({
            hasExpandedRowCtrl: false,
        });
    }
    render() {
        return (
            <div>
                <p>
                    <Button onClick={this.toggleIndent.bind(this)}> Update indent </Button>
                </p>
                <Table
                    dataSource={this.state.dataSource}
                    isZebra={this.state.isZebra}
                    hasBorder={false}
                    onSort={this.onSort.bind(this)}
                    expandedRowRender={record => record.title}
                    onRowClick={() => console.log('rowClick')}
                    expandedRowIndent={this.state.expandedRowIndent}
                >
                    <Table.Column title="Id" dataIndex="id" sortable />
                    <Table.Column title="Title" dataIndex="title" />
                    <Table.Column title="Time" dataIndex="time" />
                    <Table.Column cell={render} width={200} />
                </Table>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
