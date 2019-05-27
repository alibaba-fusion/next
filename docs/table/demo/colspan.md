# 行列合并

- order: 7

通过 cellProps 进行列合并。

:::lang=en-us
# Consolidation

- order: 7

Merging column through cellProps.
:::

---

````jsx
import { Table } from '@alifd/next';

const onRowClick = function (record, index, e) {
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
    },
    render = (value, index, record) => {
        return <a>Remove({record.id})</a>;
    },
    cellProps = (rowIndex, colIndex) => {
        if (rowIndex === 2 && colIndex === 1) {
            return {
                colSpan: 2,
                rowSpan: 3
            };
        }
        if (rowIndex === 1 && colIndex === 2) {
            return {
                colSpan: 2,
                rowSpan: 1
            };
        }
    };

ReactDOM.render(<Table dataSource={dataSource()} onRowClick={onRowClick} cellProps={cellProps}>
    <Table.Column title="Id" dataIndex="id"/>
    <Table.Column title="Title" dataIndex="title.name" />
    <Table.Column title="Time" dataIndex="time"/>
    <Table.Column cell={render} width={200}/>
</Table>, mountNode);
````
