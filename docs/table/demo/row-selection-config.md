# 选择框属性

- order: 4

通过 rowSelection.getProps 来控制选择框属性

:::lang=en-us
# Checkbox properties

- order: 4

Controlling checkbox properties with rowSelection.getProps
:::

---

````jsx
import { Table } from '@alifd/next';

const onChange = function(...args) {
        console.log(...args);
    },
    dataSource = () => {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push({
                title: {
                    name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
                },
                id: 100306660940 + i,
                time: 2000 + i
            });
        }
        return result;
    },
    render = (value, index, record) => {
        return <a>Remove({record.id})</a>;
    },
    rowSelection = {
        onChange: onChange,
        getProps: (record) => {
            return {
                disabled: record.id === 100306660942
            };
        }
    };

ReactDOM.render(<Table dataSource={dataSource()}
    rowSelection={rowSelection}>
    <Table.Column title="Id" dataIndex="id"/>
    <Table.Column title="Title" dataIndex="title.name"/>
    <Table.Column title="Time" dataIndex="time"/>
    <Table.Column cell={render} width={200}/>
</Table>, mountNode);
````
