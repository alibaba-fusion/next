import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from '@alifd/next';

const dataSource = j => {
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
const render = (value, index, record) => {
    return <a>Remove({record.id})</a>;
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };
        this.onRowMouseEnter = (_, i) => {
            //   this.setState({
            //     openRowKeys: [i]
            //   })
        };
    }
    state = {
        scrollToRow: 20,
    };
    onBodyScroll = start => {
        this.setState({
            scrollToRow: start,
        });
    };
    onChange(ids, records) {
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
                // scrollToRow={this.state.scrollToRow}
                onBodyScroll={this.onBodyScroll}
                expandedRowRender={() => (
                    <div>
                        <button>1</button>
                    </div>
                )}
                hasExpandedRowCtrl={false}
                expandedRowIndent={[0, 0]}
                rowSelection={this.state.rowSelection}
                onRowMouseEnter={this.onRowMouseEnter}
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
