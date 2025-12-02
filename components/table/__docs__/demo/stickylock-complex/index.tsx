import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from '@alifd/next';
import type { ColumnProps, RecordItem, TableProps } from '@alifd/next/types/table';

const dataSource = (j: number) => {
    const result = [];
    for (let i = 0; i < j; i++) {
        result.push({
            title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
            id: `100306660940${i}`,
            time: 2000 + i,
            time2: 2000 + i,
            index: i,
        });
    }
    return result;
};
const render: ColumnProps['cell'] = (value, index, record) => {
    return <a>Remove({record.id})</a>;
};

class App extends React.Component {
    state: {
        rowSelection: NonNullable<TableProps['rowSelection']>;
        openRowKeys: string[];
        scrollToRow: number;
    } = {
        rowSelection: {
            onChange: this.onChange.bind(this),
            onSelect: function (selected, record, records) {
                console.log('onSelect', selected, record, records);
            },
            onSelectAll: function (selected, records) {
                console.log('onSelectAll', selected, records);
            },
            selectedRowKeys: [100306660940, 100306660941],
            getProps: record => {
                return {
                    disabled: record.id === 100306660941,
                };
            },
        },
        openRowKeys: [],
        scrollToRow: 20,
    };
    onBodyScroll: TableProps['onBodyScroll'] = start => {
        this.setState({
            scrollToRow: start,
        });
    };
    onChange(ids: (string | number)[], records: RecordItem[]) {
        const { rowSelection } = this.state;
        rowSelection.selectedRowKeys = ids;
        console.log('onChange', ids, records);
        this.setState({ rowSelection });
    }
    render() {
        return (
            <Table.StickyLock
                dataSource={dataSource(200)}
                maxBodyHeight={400}
                useVirtual
                onBodyScroll={this.onBodyScroll}
                expandedRowRender={() => (
                    <div>
                        <button>1</button>
                    </div>
                )}
                hasExpandedRowCtrl={false}
                expandedRowIndent={[0, 0]}
                rowSelection={this.state.rowSelection}
                openRowKeys={this.state.openRowKeys}
                primaryKey="index"
            >
                <Table.Column title="Id1" dataIndex="id" width={100} lock />
                <Table.Column title="Index" dataIndex="index" width={200} />
                <Table.Column title="Time" dataIndex="time" width={200} />
                <Table.Column title="Time2" dataIndex="time2" width={200} />
                <Table.Column cell={render} width={200} lock="left" />
            </Table.StickyLock>
        );
    }
}

ReactDOM.render(<App />, mountNode);
