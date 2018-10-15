# 固定表头

- order: 9

表格可以固定表头,支持sticky方式

:::lang=en-us
# Fixed table header

- order: 9

Table header can be fixed, support sticky.
:::

---

````jsx
import { Table, Button } from '@alifd/next';

const dataSource = (length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
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
        sticky: false
    }
    onSwitch() {
        this.setState({
            sticky: true
        });
    }
    render() {
        return (<div>
            <p><Button onClick={this.onSwitch.bind(this)}>enable sticky</Button></p>
            <Table dataSource={dataSource(50)} fixedHeader stickyHeader={this.state.sticky}>
                <Table.Column title="Id" dataIndex="id"/>
                <Table.Column title="Title" dataIndex="title.name"/>
                <Table.Column title="Time" dataIndex="time"/>
            </Table>
        </div>
        );
    }
}

ReactDOM.render(<App/>, mountNode);
````
