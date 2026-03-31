import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Input } from '@alifd/next';
import type { InputProps } from '@alifd/next/types/input';
import type { ColumnProps } from '@alifd/next/types/table';

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
type EditablePaneProps = {
    defaultTitle: string;
};
class EditablePane extends React.Component<
    EditablePaneProps,
    {
        cellTitle: string;
        editable: boolean;
    }
> {
    constructor(props: EditablePaneProps) {
        super(props);
        this.state = {
            cellTitle: props.defaultTitle,
            editable: false,
        };
    }

    componentWillReceiveProps(nextProps: EditablePaneProps) {
        if (nextProps.defaultTitle !== this.state.cellTitle) {
            this.setState({
                cellTitle: nextProps.defaultTitle,
            });
        }
    }

    onKeyDown: InputProps['onKeyDown'] = e => {
        const { keyCode } = e;
        // Stop bubble up the events of keyUp, keyDown, keyLeft, and keyRight
        if (keyCode > 36 && keyCode < 41) {
            e.stopPropagation();
        }
    };

    onBlur: InputProps['onBlur'] = e => {
        this.setState({
            editable: false,
            cellTitle: e.target.value,
        });
    };

    onDblClick = () => {
        this.setState({
            editable: true,
        });
    };

    render() {
        const { cellTitle, editable } = this.state;
        if (editable) {
            return (
                <Input
                    autoFocus
                    defaultValue={cellTitle}
                    onKeyDown={this.onKeyDown}
                    onBlur={this.onBlur}
                />
            );
        }
        return <span onDoubleClick={this.onDblClick}>{cellTitle}</span>;
    }
}

class Demo extends React.Component {
    state = {
        dataSource: result,
        id: '',
    };
    renderCell: ColumnProps['cell'] = (value: string) => {
        return <EditablePane defaultTitle={value} />;
    };

    render() {
        return (
            <div>
                <Table dataSource={this.state.dataSource}>
                    <Table.Column title="Id" dataIndex="id" />
                    <Table.Column title="Title" dataIndex="title.name" cell={this.renderCell} />
                    <Table.Column title="Time" dataIndex="time" />
                </Table>
            </div>
        );
    }
}
ReactDOM.render(<Demo />, mountNode);
