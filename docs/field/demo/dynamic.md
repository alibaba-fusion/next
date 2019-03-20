# 动态表格

- order: 6

通过 `spliceArray` 可以删除数组格式 name (eg: name.{index}) 的数据, 并且自动订正其他 name 的 index - 1 问题

:::lang=en-us
# mix usage

- order: 6

by use `spliceArray` could delete array type keys (eg: name.{index}), and make larger keys auto -1
:::
---


````jsx
import { Button, Input, Table, Field } from '@alifd/next';


class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tableSource: [1, 2, 3].map(i => {
                return { id: i };
            })
        };
        this.idx = 3;

        this.field = new Field(this, {
            parseName: true,
        });
    }

    getValues = () => {
        const values = this.field.getValues();
        console.log(values);
    }

    add = () => {
        const { tableSource } = this.state;
        tableSource.push({
            id: ++this.idx
        });

        this.setState({ tableSource });
    }

    removeItem(index) {
        const { tableSource } = this.state;
        tableSource.splice(index, 1);
        this.field.spliceArray('name.{index}', index);
        this.setState({ tableSource });
    }

    input = (value, index) => <Input  {...this.field.init(`name.${index}`, { initValue: index })} />;
    delete = (value, index) => <Button warning onClick={this.removeItem.bind(this, index)}>delete</Button>;

    render() {
        return (
            <div>
                <Table dataSource={this.state.tableSource}>
                    <Table.Column title="id" dataIndex="id" />
                    <Table.Column title="input" dataIndex="id" cell={this.input} />
                    <Table.Column title="operation" cell={this.delete} width={100} />
                </Table>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" onClick={this.getValues} >print</Button>
                    <Button type="normal" onClick={this.add} style={{ marginLeft: 8 }}>Add</Button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
