# 排序与过滤

- order: 3

示例演示了排序和过滤的特性

:::lang=en-us
# Sorting and filtering

- order: 3

Demo the function of sorting and filtering.
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
                time: 2000 + i
            });
        }
        return result;
    },
    render = (value, index, record) => {
        return <a href="javascript:;">Remove({record.id})</a>;
    };

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: dataSource(),
            filterMode: 'multiple'
        };
    }
    onSort(dataIndex, order) {
        const dataSource = this.state.dataSource.sort(function(a, b) {
            const result = a[dataIndex] - b[dataIndex];
            return  (order === 'asc') ? (result > 0 ? 1 : -1) : (result > 0 ? -1 : 1);
        });
        this.setState({
            dataSource,
            sort: {id: order}
        });
    }
    onFilter(filterParams) {
        let ds = dataSource();
        Object.keys(filterParams).forEach(key => {
            const selectedKeys = filterParams[key].selectedKeys;
            if (selectedKeys.length) {
                ds = ds.filter(record => {
                    return selectedKeys.some(value => {
                        return record[key].indexOf(value) > -1;
                    });
                });
            }
        });
        this.setState({dataSource: ds});
    }
    changeMode() {
        this.setState({
            filterMode: 'single'
        });
    }
    clearSort() {
        // your code to reset dataSource
        const newDataSource = this.state.dataSource;

        this.setState({
            dataSource: newDataSource,
            sort: {id: ''}
        });
    }
    render() {
        const filters = [{
            label: 'Nano 3',
            value: 3
        }, {
            label: 'Nano 678',
            value: 678,
            children: [{
                label: 'Nano 67',
                value: 67,
                children: [{
                    label: 'Nano 6',
                    value: 6
                }, {
                    label: 'Nano 7',
                    value: 7
                }]
            }, {
                label: 'Nano 8',
                value: 8
            }]
        }, {
            label: 'Other',
            value: 'other',
            children: [{
                label: 'Nano 4',
                value: 4
            }, {
                label: 'Nano 5',
                value: 5
            }]
        }];
        return (
            <div>
                <p><Button onClick={this.changeMode.bind(this)}>Change filter menu to single select</Button></p>
                <p><Button onClick={this.clearSort.bind(this)}>clearSort</Button></p>
                <Table dataSource={this.state.dataSource}
                    onSort={this.onSort.bind(this)}
                    onFilter={this.onFilter.bind(this)}>
                    <Table.Column title="Id" dataIndex="id" sortable/>
                    <Table.Column title="Title" dataIndex="title" filters={filters} filterMode={this.state.filterMode}/>
                    <Table.Column title="Time" dataIndex="time"/>
                    <Table.Column cell={render} width={200}/>
                </Table>
            </div>
        );
    }
}

ReactDOM.render(<App/>, mountNode);
````
