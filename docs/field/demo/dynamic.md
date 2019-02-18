# 动态表格

- order: 6

Input 的 name 必须全局唯一, 否则可能会出现串行的错误

:::lang=en-us
# mix usage

- order: 6

name of Input must be unique
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
            autoUnmount: true
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
        this.setState({ tableSource });
    }

    // name.${value} 全局唯一
    input = (value) => <Input {...this.field.init(`name.${value}`, { initValue: value })} />;
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
                    <Button type="primary" onClick={this.getValues}>print</Button>
                    <Button type="normal" onClick={this.add} style={{ marginLeft: 4 }}>Add</Button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.demo .next-btn {
    margin-right: 5px;
}
````
