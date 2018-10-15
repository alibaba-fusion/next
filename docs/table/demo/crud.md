# 增删改查

- order: 8

演示对表格的增删改查

:::lang=en-us
# Add, delete and change

- order: 8

Demo the addition, deletion and change of the table.
:::

---

````jsx
import { Table, Button } from '@alifd/next';

const onRowClick = function(record, index, e) {
        console.log(record, index, e);
    },
    dataSource = () => {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push({
                title: {name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`},
                id: 100306660940 + i,
                time: 2000 + i
            });
        }
        return result;
    };

class App extends React.Component {
    state = {
        dataSource: dataSource()
    }
    onAdd = () => {
        const {dataSource} = this.state;
        dataSource.push({
            title: {
                name: 'Quotation for 1PCS Nano controller compatible',
            },
            id: Date.now(),
            time: 2000
        });
        this.setState({
            dataSource
        });
    }

    onRemove = (id) => {
        const {dataSource} = this.state;
        let index = -1;
        dataSource.forEach((item, i) => {
            if (item.id === id) {
                index = i;
            }
        });
        if (index !== -1) {
            dataSource.splice(index, 1);
            this.setState({
                dataSource
            });
        }
    }

    render() {
        const renderOper = (value, index, record) => {
            return <a onClick={this.onRemove.bind(this, record.id)}>Remove({record.id})</a>;
        };
        return (<div>
            <p><Button onClick={this.onAdd}>Add Item</Button></p>
            <Table dataSource={this.state.dataSource} onRowClick={onRowClick}>
                <Table.Column title="Id" dataIndex="id"/>
                <Table.Column title="Title" dataIndex="title.name" />
                <Table.Column title="Time" dataIndex="time"/>
                <Table.Column cell={renderOper} width="20%"/>
            </Table>
        </div>);
    }
}

ReactDOM.render(<App/>, mountNode);
````
