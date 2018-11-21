# 简单用法

- order: 0

使用 VirtualList 最简单的例子。

:::lang=en-us
# Basic

- order: 0

A simple case.

:::

---

````jsx
import { VirtualList } from '@alifd/next';

const dataSource = [];

const generateLi = (num, prefix = 'prefix') => {
    const data = [];
    for (let i = 0; i < num; i++) {
        if (prefix % 3 === 0) {
            data.push(<li key={`${i}-${prefix}`} style={{lineHeight: '20px'}}>{i}-{prefix}</li>);
        } else {
            data.push(<li key={`${i}-${prefix}`}  style={{lineHeight: '30px'}}>{i}-{prefix}</li>);
        }
    }

    return data;
};

for (let i = 0; i < 1000; i++) {
    dataSource.push(generateLi(1, i));
}


const demo = (
    <div className={'test'}>
        <VirtualList>
            {dataSource}
        </VirtualList>
    </div>
);


ReactDOM.render(demo, mountNode);
````

````css
.test {
    height: 200px;
    width: 200px;
    border: 1px solid #ddd;
    overflow: auto;
    list-style-type: none;
}
````
