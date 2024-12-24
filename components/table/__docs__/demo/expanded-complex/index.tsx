import React, { type CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from '@alifd/next';
import type { ColumnProps, RecordItem, TableProps } from '@alifd/next/types/table';

type ExpandedAppProps = {
    dataSource: NonNullable<TableProps['dataSource']>;
    index: number;
};
class ExpandedApp extends React.Component<
    ExpandedAppProps,
    {
        dataSource: NonNullable<TableProps['dataSource']>;
    }
> {
    constructor(props: ExpandedAppProps) {
        super(props);
        this.state = {
            dataSource: this.props.dataSource,
        };
    }
    load() {
        let { dataSource } = this.state;
        dataSource = dataSource.concat(dataSource);
        this.setState({ dataSource });
    }
    render() {
        const style: CSSProperties = {
            borderTop: '1px solid #eee',
            textAlign: 'center',
            background: '#f8f8f8',
            lineHeight: '28px',
        };
        return (
            <div style={{ marginTop: 10 }}>
                <Table dataSource={this.state.dataSource} hasHeader={false} hasBorder={false}>
                    <Table.Column title="Title" dataIndex="title" />
                    <Table.Column title="Time" dataIndex="time" width={200} />
                </Table>
                <p style={style} onClick={this.load.bind(this)}>
                    {this.props.index}: Load more data.{' '}
                </p>
            </div>
        );
    }
}

const dataSource = () => {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push({
                title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
                id: 100306660940 + i,
                time: 2000 + i,
                children: [
                    {
                        title: `Sub title for Quotation ${3 + i}`,
                        time: 2000 + i,
                    },
                    {
                        title: `Sub2 title for Quotation ${3 + i}`,
                        time: 2000 + i,
                    },
                ],
            });
        }
        return result;
    },
    render: ColumnProps['cell'] = (value, index, record) => {
        return <a>Remove({record.id})</a>;
    },
    expandedRowRender: TableProps['expandedRowRender'] = (record, index) => {
        const children = record.children;
        return <ExpandedApp dataSource={children!} index={index} />;
    };

class App extends React.Component {
    state: {
        dataSource: ReturnType<typeof dataSource>;
        hasBorder: boolean;
        openRowKeys: number[];
        getExpandedColProps?: TableProps['getExpandedColProps'];
        hasExpandedRowCtrl?: TableProps['hasExpandedRowCtrl'];
    } = {
        dataSource: dataSource(),
        hasBorder: false,
        openRowKeys: [],
        getExpandedColProps: undefined,
    };
    onSort: TableProps['onSort'] = (dataIndex: 'id', order) => {
        const dataSource = this.state.dataSource.sort(function (a, b) {
            const result = a[dataIndex] - b[dataIndex];
            return order === 'asc' ? (result > 0 ? 1 : -1) : result > 0 ? -1 : 1;
        });
        this.setState({
            dataSource,
        });
    };
    disabledExpandedCol() {
        this.setState({
            getExpandedColProps: (record: RecordItem, index: number) => {
                console.log(index);
                if (index === 3) {
                    return {
                        disabled: true,
                    };
                }
            },
        });
    }
    toggleCol() {
        this.setState({
            hasExpandedRowCtrl: false,
        });
    }
    onRowOpen: TableProps['onRowOpen'] = openRowKeys => {
        this.setState({ openRowKeys });
    };
    toggleExpand(record: RecordItem) {
        const key = record.id as number,
            { openRowKeys } = this.state,
            index = openRowKeys.indexOf(key);
        if (index > -1) {
            openRowKeys.splice(index, 1);
        } else {
            openRowKeys.push(key);
        }
        this.setState({
            openRowKeys: openRowKeys,
        });
    }
    rowProps: TableProps['rowProps'] = (record, index) => {
        return { className: `next-myclass-${index}` };
    };
    render() {
        const renderTitle: ColumnProps['cell'] = (value, index, record) => {
            return (
                <div>
                    {value}
                    <span onClick={this.toggleExpand.bind(this, record)}>index:{index} +++++</span>
                </div>
            );
        };
        return (
            <span>
                <p>
                    {' '}
                    <Button onClick={this.disabledExpandedCol.bind(this)}>
                        {' '}
                        disable fourth row{' '}
                    </Button>
                    <span style={{ marginRight: 20 }} />
                    <Button onClick={this.toggleCol.bind(this)}> hide + </Button>
                </p>
                <Table
                    dataSource={this.state.dataSource}
                    expandedIndexSimulate
                    hasBorder={this.state.hasBorder}
                    onSort={this.onSort}
                    expandedRowRender={expandedRowRender}
                    expandedRowIndent={[1, 1]}
                    openRowKeys={this.state.openRowKeys}
                    getExpandedColProps={this.state.getExpandedColProps}
                    hasExpandedRowCtrl={this.state.hasExpandedRowCtrl}
                    onRowOpen={this.onRowOpen}
                    rowProps={this.rowProps}
                >
                    <Table.Column title="Id" dataIndex="id" sortable />
                    <Table.Column title="Title" dataIndex="title" cell={renderTitle} />
                    <Table.Column title="Time" dataIndex="time" width={200} />
                    <Table.Column cell={render} width={200} />
                </Table>
            </span>
        );
    }
}

ReactDOM.render(<App />, mountNode);
