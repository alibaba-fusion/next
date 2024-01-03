import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Input } from '@alifd/next';

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

class EditablePane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cellTitle: props.defaultTitle,
            editable: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultTitle !== this.state.cellTitle) {
            this.setState({
                cellTitle: nextProps.defaultTitle,
            });
        }
    }

    onKeyDown = e => {
        const { keyCode } = e;
        // Stop bubble up the events of keyUp, keyDown, keyLeft, and keyRight
        if (keyCode > 36 && keyCode < 41) {
            e.stopPropagation();
        }
    };

    onBlur = e => {
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
    constructor(props) {
        super(props);

        this.state = {
            dataSource: result,
            id: '',
        };
    }
    renderCell = (value, index, record) => {
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
