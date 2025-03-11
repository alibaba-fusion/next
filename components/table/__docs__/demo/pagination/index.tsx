import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Pagination } from '@alifd/next';
import type { ColumnProps } from '@alifd/next/types/table';
import type { PaginationProps } from '@alifd/next/types/pagination';

const dataSource = (j: number) => {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push({
                title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
                id: 100306660940 + i + j,
                time: 2000 + j,
            });
        }
        return result;
    },
    render: ColumnProps['cell'] = (value, index, record) => {
        return <a href="javascript:;">Remove({record.id})</a>;
    };

class App extends React.Component {
    state: {
        dataSource: ReturnType<typeof dataSource>;
        loading?: boolean;
    } = {
        dataSource: dataSource(5),
    };

    onChange: PaginationProps['onChange'] = currentPage => {
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            this.setState({
                dataSource: dataSource(currentPage * 5),
                loading: false,
            });
        }, 200);
    };
    render() {
        return (
            <div>
                <Table dataSource={this.state.dataSource} loading={this.state.loading}>
                    <Table.Column title="Id1" dataIndex="id" width={140} />
                    <Table.Column title="Time" dataIndex="time" width={500} />
                    <Table.Column cell={render} width={200} />
                </Table>
                <Pagination onChange={this.onChange} className="page-demo" />
            </div>
        );
    }
}
ReactDOM.render(<App />, mountNode);
