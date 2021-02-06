# 行列合并与锁列

- order: 7

锁列会可能会影响行列合并的 `colIndex`，`lock='left'`的列会被提升到第0列，多个左锁列按照出现的先后顺序，从0到1标记列索引；
`lock='right'`的列会被提升到最后一列，多个右锁列按照出现顺序，从 `lastIndex - n` 到 `lastIndex` 标记列索引。

:::lang=en-us
# Merge cell with lock columns

- order: 7

Merging column through cellProps.
:::

---

````jsx
import { Table, Button } from '@alifd/next';

const columns = new Array(4).fill({
    dataIndex: 'data',
    title: 'Data',
    width: 200,
});
columns.unshift({
    dataIndex: 'id',
    title: 'Id',
    width: 100,
    lock: 'left',
});
columns.push({
    dataIndex: 'state',
    title: 'State',
    width: 200,
});
columns.push({
    title: 'Action',
    width: 100,
    align: 'center',
    cell: () => <Button>delete</Button>,
    lock: 'right'
});

const dataSource = [{
    id: 30000,
    data: '$13.02',
    state: 'normal',
}, {
    id: 30001,
    data: '$16.02',
    state: 'normal',
}, {
    id: 30002,
    data: '$63.0002',
    state: 'error',
}];

ReactDOM.render(
  <Table.StickyLock
    type="primary"
    dataSource={dataSource}
    cellProps={(rowIndex, colIndex) => {
        if (colIndex === 0) {
            return {
                colSpan: 1,
                rowSpan: 2
            };
        }
        if (colIndex === columns.length - 1) {
            return {
                colSpan: 1,
                rowSpan: 3
            };
        }
      }
    }
   >
   {
        columns.map((col, i) => {
            return <Table.Column key={i} {...col} />;
        })
   }
  </Table.StickyLock>,
  mountNode
);
````
