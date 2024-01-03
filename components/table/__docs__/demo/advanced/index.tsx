import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from '@alifd/next';
import PropTypes from 'prop-types';
/* eslint-disable react/no-multi-comp,react/prop-types */
const { Header, Cell } = Table;
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
};

const AppHeader = (props, context) => {
    const { columns } = props;
    const { onChange } = context;
    const length = columns[columns.length - 1].length;
    return (
        <Header {...props}>
            <tr>
                <Cell colSpan={length}>
                    <a onClick={() => onChange(true)} href="javascript:;">
                        Select all
                    </a>
                    <span style={{ marginRight: 20 }} />
                    <a onClick={() => onChange(false)} href="javascript:;">
                        Unselect all
                    </a>
                </Cell>
            </tr>
        </Header>
    );
};

AppHeader.contextTypes = {
    onChange: PropTypes.func,
};

class App extends React.Component {
    static childContextTypes = {
        onChange: PropTypes.func,
    };
    state = {
        selectedKeys: [],
    };
    getChildContext() {
        return {
            onChange: this.onChange,
        };
    }
    dataSource = dataSource();
    onChange = checked => {
        let selectedKeys = [];
        if (checked) {
            selectedKeys = this.dataSource.map(item => item.id);
        }
        this.onRowChange(selectedKeys);
    };
    onRowChange = selectedKeys => {
        this.setState({
            selectedKeys,
        });
    };
    render() {
        return (
            <span>
                <Table
                    dataSource={this.dataSource}
                    components={{
                        Header: AppHeader,
                    }}
                    rowSelection={{
                        selectedRowKeys: this.state.selectedKeys,
                        onChange: this.onRowChange,
                    }}
                >
                    <Table.Column title="Id" dataIndex="id" />
                    <Table.Column title="Title" dataIndex="title" />
                    <Table.Column title="Time" dataIndex="time" />
                </Table>
            </span>
        );
    }
}

ReactDOM.render(<App />, mountNode);
