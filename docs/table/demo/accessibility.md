# 无障碍

- order: 23

通过键盘方向键浏览表格。

:::lang=en-us
# Accessibility

- order: 23

Browse the table by keyboard arrow keys.

:::
---

````jsx
import { Table } from '@alifd/next';

const result = [{
    id: '001',
    time: 1951,
    title: {name: 'The Old Man and the Sea'},
}, {
    id: '002',
    time: 1925,
    title: {name: 'the great gatsby'},
}, {
    id: '003',
    time: 1719,
    title: {name: 'The adventures of Robinson Crusoe'},
}];
class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: result,
            id:''
        };
        this.onclick = this.onclick.bind(this);
        this.render = this.render.bind(this);
    }
    onclick(v) {
        let k;
        for (let i = 0; i < result.length; i++) {
            if (v === result[i].id) {
                k = i;
                break;
            }
        }
        result.splice(k, 1);
    }
    getRow(item) {
        this.setState({ id: item.id });
    }
    render() {
        return (<div>
            <Table dataSource={this.state.dataSource}  onRowClick={this.getRow.bind(this)}>
                <Table.Column title="Id" dataIndex="id"/>
                <Table.Column title="Title" dataIndex="title.name" />
                <Table.Column title="Time" dataIndex="time"/>
                <Table.Column title="operate" cell={<a href="javascript:;" onClick={() => this.onclick(this.state.id)}>Remove</a>}/>
            </Table>
        </div>);
    }
}
ReactDOM.render(<Demo />, mountNode);
````
