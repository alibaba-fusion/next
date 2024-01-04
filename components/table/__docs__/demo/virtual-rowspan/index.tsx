import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from '@alifd/next';

const noop = () => {};

const dataSource = j => {
    const result = [];
    for (let i = 0; i < j; i++) {
        result.push({
            title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
            id: `100306660940${i}\nid\ntest`,
            time: 2000 + i,
            index: i,
        });
    }
    return result;
};

const render = (value, index, record) => {
    return <a>remove({record.id})</a>;
};

class App extends React.Component {
    state = {
        scrollToRow: 0,
        dataSource: [],
        scrollToRow2: 0,
    };

    componentDidMount = () => {
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({
                dataSource: dataSource(200),
            });
        }, 1000);
    };
    onBodyScroll = start => {
        this.setState({
            scrollToRow: start,
        });
    };

    onBodyScroll2 = start => {
        this.setState({
            scrollToRow2: start,
        });
    };

    handleAdd = () => {
        this.setState({
            scrollToRow: 180,
        });
    };

    renderCell = () => {
        return (
            <Button text onClick={this.handleAdd}>
                跳到底部
            </Button>
        );
    };

    render() {
        return (
            <div>
                <div>{`keepForwardRenderRows < rowSpan的值时，滚动到第12行后行合并会失效`}</div>
                <Table
                    className="inventory-table"
                    dataSource={this.state.dataSource}
                    maxBodyHeight={400}
                    useVirtual
                    keepForwardRenderRows={12}
                    scrollToRow={this.state.scrollToRow}
                    onBodyScroll={this.onBodyScroll}
                    cellProps={(rowIndex, colIndex) => {
                        if ([0, 17, 34].includes(rowIndex) && colIndex === 0) {
                            return {
                                rowSpan: 17,
                            };
                        }
                    }}
                >
                    <Table.Column title="Id1" dataIndex="id" width={120} />
                    <Table.Column title="Index" dataIndex="index" width={200} />
                    <Table.Column title="Time" dataIndex="time" width={200} />
                    <Table.Column title="remove" dataIndex="remove" cell={render} width={200} />
                    <Table.Column title="add" dataIndex="add" cell={this.renderCell} width={200} />
                </Table>
                <br />
                <div>{`keepForwardRenderRows >= rowSpan的值时，滚动到第12行后行合并不会失效`}</div>
                <Table
                    className="inventory-table"
                    dataSource={this.state.dataSource}
                    maxBodyHeight={400}
                    useVirtual
                    keepForwardRenderRows={17}
                    scrollToRow={this.state.scrollToRow2}
                    onBodyScroll={this.onBodyScroll2}
                    cellProps={(rowIndex, colIndex) => {
                        if ([0, 17, 34].includes(rowIndex) && colIndex === 0) {
                            return {
                                rowSpan: 17,
                            };
                        }
                    }}
                >
                    <Table.Column title="Id1" dataIndex="id" width={120} />
                    <Table.Column title="Index" dataIndex="index" width={200} />
                    <Table.Column title="Time" dataIndex="time" width={200} />
                    <Table.Column title="remove" dataIndex="remove" cell={render} width={200} />
                    <Table.Column title="add" dataIndex="add" cell={this.renderCell} width={200} />
                </Table>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
