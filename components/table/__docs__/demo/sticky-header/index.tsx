import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button, Select, Box } from '@alifd/next';

const Option = Select.Option;
const dataSource = length => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push({
            title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
            id: 100306660940 + i,
            time: 2000 + i,
        });
    }
    return result;
};

const render = (value, index, record) => {
    return (
        <Select
            popupContainer={node => node.parentNode}
            popupProps={{ autoFit: true }}
            defaultValue="jack"
            aria-label="name is"
            showSearch
            hasClear
        >
            <Option value="jack">Jack</Option>
            <Option value="frank">Frank</Option>
            <Option value="hugo">Hugo</Option>
        </Select>
    );
};

class App extends React.Component {
    state = {
        dataSource: dataSource(50),
        container: () => window,
    };

    changeContainer = () => {
        this.setState({
            container: () => document.getElementById('abc'),
        });
    };
    render() {
        return (
            <div>
                <Box direction="row" spacing={20}>
                    <Button onClick={this.changeContainer}>change container</Button>
                </Box>
                <br />
                <div
                    id="abc"
                    style={{
                        height: 300,
                        background: 'purple',
                        padding: 20,
                        width: '100%',
                        overflow: 'auto',
                    }}
                >
                    <Table
                        affixProps={{ container: this.state.container }}
                        dataSource={this.state.dataSource}
                        fixedHeader
                        stickyHeader
                    >
                        <Table.Column
                            title="Id"
                            dataIndex="id"
                            width={200}
                            lock={this.state.lock}
                        />
                        <Table.Column title="Title" dataIndex="title.name" width={200} />
                        <Table.Column title="Time" dataIndex="time" width={200} />
                        <Table.Column title="test" cell={render} width={200} />
                    </Table>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
