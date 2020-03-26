# 十字参考轴

- order: 25

适用于表头比较复杂，需要做表头分类的场景。

:::lang=en-us
# Crossline

- order: 25

It is usually used in the case of header is complex and needs to be classified.
:::

---

````jsx
import { Table } from '@alifd/next';

const dataSource = () => {
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
const render = (current) => {
    return <a> remove {current}</a>;
};

ReactDOM.render(<Table dataSource={dataSource()} crossline>
    <Table.Column title="Id" dataIndex="id"/>
    <Table.Column title="Title" dataIndex="title.name" />
    <Table.Column title="Time" dataIndex="time"/>
    <Table.Column title="Operation" dataIndex="id" cell={render}/>
</Table>, mountNode);
````
