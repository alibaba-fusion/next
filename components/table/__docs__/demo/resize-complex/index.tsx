import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button, Loading } from '@alifd/next';

const onChange = function (...args) {
        console.log(...args);
    },
    dataSource = () => {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push({
                title: {
                    name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
                },
                id: 100306660940 + i,
                time: 2000 + i,
            });
        }
        return result;
    },
    render = (value, index, record) => {
        return <a href={`#${index}`}>Remove({record.id})</a>;
    },
    rowSelection = {
        onChange: onChange,
        getProps: record => {
            return {
                disabled: record.id === 100306660942,
            };
        },
    };

class App extends React.Component {
    state = {
        loading: false,
        widths: {
            time: 300,
            [`title.name`]: 300,
        },
    };
    onResizeChange = (dataIndex, value) => {
        const { widths } = this.state;
        widths[dataIndex] = widths[dataIndex] + value;
        this.setState({
            widths,
        });
    };
    render() {
        const { widths, loading } = this.state;
        const time = widths.time;
        const name = widths[`title.name`];

        return (
            <React.Fragment>
                <Button
                    onClick={() => {
                        this.setState({ loading: true });
                        setTimeout(() => {
                            this.setState({ loading: false });
                        }, 1000);
                    }}
                >
                    reset
                </Button>
                <Table
                    loading={loading}
                    dataSource={dataSource()}
                    rowSelection={rowSelection}
                    onResizeChange={this.onResizeChange}
                >
                    <Table.Column lock title="Id" dataIndex="id" width={100} />
                    <Table.Column
                        title="Title"
                        dataIndex={'title.name'}
                        asyncResizable
                        width={name}
                    />
                    <Table.Column title="Time" dataIndex="time" asyncResizable width={time} />
                    <Table.Column cell={render} width={200} />
                </Table>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, mountNode);
