import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Table, Field } from '@alifd/next';

interface ValueItem {
    id: number;
    input: number;
}
class Demo extends React.Component<unknown> {
    constructor(props: unknown) {
        super(props);

        this.idx = 3;

        this.field = new Field(this, {
            parseName: true,
            values: {
                name: [0, 1, 2, 3].map(i => {
                    return { id: i, input: i };
                }),
            },
        });
    }
    field: Field;
    idx: number;

    getValues = () => {
        const values = this.field.getValues();
        console.log(values);
    };

    addItem(index: number) {
        ++this.idx;
        this.field.addArrayValue('name', index, { id: this.idx, input: this.idx });
    }

    removeItem(index: number) {
        this.field.deleteArrayValue('name', index);
    }

    input = (value: unknown, index: number) => (
        <Input {...this.field.init(`name.${index}.input`)} />
    );
    op = (value: unknown, index: number) => {
        return (
            <span>
                <Button type="primary" onClick={this.addItem.bind(this, index + 1)}>
                    add
                </Button>
                <Button
                    warning
                    onClick={this.removeItem.bind(this, index)}
                    style={{ marginLeft: 4 }}
                >
                    delete
                </Button>
            </span>
        );
    };

    render() {
        const dataSource = this.field.getValue<ValueItem[]>('name');
        return (
            <div>
                <Table dataSource={dataSource}>
                    <Table.Column title="id" dataIndex="id" />
                    <Table.Column title="input" dataIndex="id" cell={this.input} />
                    <Table.Column title="operation" cell={this.op} width={150} />
                </Table>
                <pre style={{ marginTop: 8 }}>{JSON.stringify(dataSource, null, 2)}</pre>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
