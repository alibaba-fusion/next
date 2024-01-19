import React from 'react';
import ReactDOM from 'react-dom';
import { Transfer, Table } from '@alifd/next';

// 生成 transfer 数据源
const generateTransferDataSource = (i, j) => {
    const result = [];
    for (let a = i; a < j; a++) {
        result.push({
            label: `Quotation Nano ${3 + i}`,
            value: `${100306660940 + a}`,
        });
    }
    return result;
};

const TransferDataSource = generateTransferDataSource(0, 3);

// datasource 转换
const transferToTable = dataSource => {
    const newTableDataSource = dataSource.map(v => ({
        label: v.label,
        id: v.value,
    }));

    return newTableDataSource;
};

const TableDataSource = transferToTable(TransferDataSource);

const render = (value, index, record) => {
    return <a href="javascript:;">Remove({record.id})</a>;
};

class Demo extends React.Component {
    state = {
        selectedValue: [],
        leftTableDataSource: TableDataSource,
        rightTableDataSource: [],
        rselectedRowKeys: [],
        lselectedRowKeys: [],
    };

    handleChange = (value, data, extra) => {
        console.log('handleChange', value, data, extra);
        this.setState({
            leftTableDataSource: transferToTable(extra.leftData),
            rightTableDataSource: transferToTable(data),
            rselectedRowKeys: [],
            lselectedRowKeys: [],
        });
    };

    render() {
        const {
            selectedValue,
            leftTableDataSource,
            rightTableDataSource,
            rselectedRowKeys,
            lselectedRowKeys,
        } = this.state;
        return (
            <Transfer
                dataSource={TransferDataSource}
                titles={['Source', 'Target']}
                onChange={this.handleChange}
                showCheckAll={false}
                className="table-transfer-demo"
            >
                {({ position, onChange, value, dataSource }) => {
                    // console.log(position, onChange, value, dataSource);
                    if (position === 'left') {
                        return (
                            <Table
                                dataSource={leftTableDataSource}
                                rowSelection={{
                                    onChange: (selectedRowKeys, records) => {
                                        console.log(selectedRowKeys, records);
                                        this.setState(
                                            {
                                                lselectedRowKeys: selectedRowKeys,
                                            },
                                            () => {
                                                onChange(position, selectedRowKeys);
                                            }
                                        );
                                    },
                                    selectedRowKeys: lselectedRowKeys,
                                }}
                            >
                                <Table.Column title="Label" dataIndex="label" width={150} />
                                <Table.Column title="Id" dataIndex="id" width={150} />
                                <Table.Column cell={render} width={200} />
                            </Table>
                        );
                    } else {
                        return (
                            <Table
                                dataSource={rightTableDataSource}
                                rowSelection={{
                                    onChange: (selectedRowKeys, records) => {
                                        console.log(selectedRowKeys, records);
                                        this.setState(
                                            {
                                                rselectedRowKeys: selectedRowKeys,
                                            },
                                            () => {
                                                onChange(position, selectedRowKeys);
                                            }
                                        );
                                    },
                                    selectedRowKeys: rselectedRowKeys,
                                }}
                            >
                                <Table.Column title="Label" dataIndex="label" width={150} />
                            </Table>
                        );
                    }
                }}
            </Transfer>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
