# 可展开-锁列

- order: 6

 `Table.StickyLock` 模式下(IE不支持，会fallback到旧有逻辑)，展开行的可视区域宽度与 `Table` 占屏幕宽度保持一致, 本模式下 `expandedRowIndent` 为 `[0, 0]`，不可修改。

:::lang=en-us
# Expandable

- order: 6

(Can't work with IE)When you use `Table.StickyLock`, the width of expanded row will be the same as the width of table take in screen. `expandedRowIndent` will be `[0, 0]`, and it can't be modified.
:::

---

````jsx
import { Table, Button } from '@alifd/next';

const dataSource = () => {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push({
                title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
                id: 100306660940 + i,
                time: 2000 + i,
                expandable:  i !== 2
            });
        }
        return result;
    },
    expandedRowRender = (record, rowIndex) => {
        if(rowIndex === 0) {
            return record.title;
        }
        return (<Table.StickyLock hasBorder={false} dataSource={dataSource()}>
            <Table.Column title="Id" dataIndex="id" lock width={100}/>
            <Table.Column title="Title" dataIndex="title" width={200}/>
            <Table.Column title="Time" dataIndex="time" width={200}/>
            <Table.Column title="Title" dataIndex="title" width={200}/>
            <Table.Column title="Title" dataIndex="title" width={200}/>
            <Table.Column title="Title" dataIndex="title" width={200}/>
            <Table.Column title="Title" dataIndex="title" width={200}/>
        </Table.StickyLock>);
    },
    render = (value, index, record) => {
        return <a>Remove({record.id})</a>;
    };

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: dataSource(),
            loading: false,
        };
    }

    toggleLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }

    render() {
        return (<div>
            <Button onClick={this.toggleLoading}>Toggle Loading</Button>
            <br /><br />
            <Table.StickyLock
                loading={this.state.loading}
                expandedIndexSimulate
                dataSource={this.state.dataSource}
                hasBorder={false}
                // expandedRowIndent 仅在IE下才会生效，非IE模式下为[0,0]且不可修改
                expandedRowIndent={[2, 0]}
                expandedRowRender={expandedRowRender}
                rowExpandable={record => record.expandable}
                onRowClick={() => console.log('rowClick')}
            >
                <Table.Column title="Id" dataIndex="id" lock width={100}/>
                <Table.Column title="Title" dataIndex="title" width={200}/>
                <Table.Column title="Time" dataIndex="time" width={200}/>
                <Table.Column cell={render} width={300}/>
            </Table.StickyLock>
        </div>);
    }
}

ReactDOM.render(<App/>, mountNode);
````
