import React from 'react';
import ReactDOM from 'react-dom';

import { Table } from '@alifd/next';
import { DragDropContext, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import classnames from 'classnames';
import type { ColumnProps, SelectionRowProps, TableProps } from '@alifd/next/types/table';

const { SelectionRow } = Table;

let dragingIndex = -1;

const MyDndProvider = DragDropContext(HTML5Backend)(({ children }) => {
    return children;
});

type MyRowProps = SelectionRowProps & {
    index?: number;
    moveRow?: (dragIndex: number, hoverIndex: number) => void;
    isDragging?: boolean;
    isOver?: boolean;
    connectDragSource?: (node: React.ReactNode) => React.ReactNode;
    connectDropTarget?: (node: React.ReactNode) => React.ReactNode;
};

function MyRow(props: MyRowProps) {
    const {
        isDragging,
        isOver,
        connectDragSource,
        connectDropTarget,
        moveRow,
        className,
        ...others
    } = props;

    const opacity = isDragging ? 0 : 1;
    const style = { ...others.style, cursor: 'move' };

    const cls = classnames({
        [className!]: className,
        'drop-over-upward': isOver && others.index! < dragingIndex,
        'drop-over-downward': isOver && others.index! > dragingIndex,
    });

    return (
        <SelectionRow
            {...others}
            style={{ ...style, ...{ opacity } }}
            className={cls}
            wrapper={row => connectDragSource!(connectDropTarget!(row))}
        />
    );
}

const NewRow = DropTarget(
    'row',
    {
        drop(props: MyRowProps, monitor) {
            const dragIndex = monitor.getItem().index;
            const hoverIndex = props.index;

            if (dragIndex === hoverIndex) {
                return;
            }

            props.moveRow!(dragIndex, hoverIndex!);
            monitor.getItem().index = hoverIndex;
        },
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    })
)(
    DragSource(
        'row',
        {
            beginDrag: (props: MyRowProps) => {
                dragingIndex = props.index!;
                return {
                    id: props.record[props.primaryKey!],
                    index: props.rowIndex,
                };
            },
        },
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        })
    )(MyRow)
);

type InnerTableProps = TableProps;

type InnerTableState = {
    dataSource: NonNullable<TableProps['dataSource']>;
};

class InnerTable extends React.Component<InnerTableProps, InnerTableState> {
    constructor(props: InnerTableProps) {
        super(props);
        this.state = {
            dataSource: [...props.dataSource!],
        };
    }

    componentWillReceiveProps(nextProps: InnerTableProps) {
        if (
            nextProps.dataSource &&
            JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.state.dataSource)
        ) {
            this.setState({ dataSource: [...nextProps.dataSource] });
        }
    }

    moveRow = (dragIndex: number, hoverIndex: number) => {
        const dragRow = this.state.dataSource[dragIndex];
        const dataSource = [...this.state.dataSource];
        dataSource.splice(dragIndex, 1);
        dataSource.splice(hoverIndex, 0, dragRow);
        this.setState({
            dataSource,
        });
    };

    render() {
        const tableProps: TableProps = {
            ...this.props,
            dataSource: this.state.dataSource,
            rowProps: (record, index) => ({
                index,
                moveRow: this.moveRow,
            }),
            components: {
                Row: NewRow,
            },
        };
        ``;

        return <Table {...tableProps} />;
    }
}

const result = [
    {
        id: '001',
        time: 1951,
        title: { name: 'The Old Man and the Sea' },
    },
    {
        id: '002',
        time: 1925,
        title: { name: 'the great gatsby' },
    },
    {
        id: '003',
        time: 1719,
        title: { name: 'The adventures of Robinson Crusoe' },
    },
];

class Demo extends React.Component {
    state = {
        dataSource: result,
    };

    onRemove = (id: string) => {
        const { dataSource } = this.state;
        let index = -1;
        dataSource.forEach((item, i) => {
            if (item.id === id) {
                index = i;
            }
        });
        if (index !== -1) {
            dataSource.splice(index, 1);
            this.setState({
                dataSource,
            });
        }
    };

    renderOper: ColumnProps['cell'] = (value, index, record) => {
        return <a onClick={this.onRemove.bind(this, record.id)}>Remove({record.id})</a>;
    };
    render() {
        return (
            <MyDndProvider>
                <InnerTable dataSource={this.state.dataSource} onSort={console.log}>
                    <Table.Column title="Id" dataIndex="id" width={100} lock />
                    <Table.Column title="Title" dataIndex="title.name" width={400} />
                    <Table.Column title="Time" dataIndex="time" width={300} />
                    <Table.Column title="operate" cell={this.renderOper} width={300} lock="right" />
                </InnerTable>
            </MyDndProvider>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
