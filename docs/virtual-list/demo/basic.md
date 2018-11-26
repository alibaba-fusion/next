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

const generateLi = (index = 'index') => {
    const data = [];
    if (index % 3 === 0) {
        return <li key={`key-${index}`} style={{lineHeight: '30px', background: '#5f83ff', color: '#fff'}}>key-{index}</li>;
    } else {
        return <li key={`key-${index}`}  style={{lineHeight: '20px'}}>key-{index}</li>;
    }
};

for (let i = 0; i < 1000; i++) {
    dataSource.push(generateLi(i));
}
console.log(dataSource)
const getHeight = index => index % 3 === 0 ? 20 : 30;

const demo = (
    <div className={'virtual-box'}>
        <VirtualList>
            {dataSource}
        </VirtualList>
    </div>
);


ReactDOM.render(demo, mountNode);
````

````css
.virtual-box {
    height: 200px;
    width: 200px;
    border: 1px solid #ddd;
    overflow: auto;
}
.virtual-box ul {
    padding: 0;
    margin: 0;
    list-style: none;
}
.virtual-box li {
    padding-left: 10px;
    border-bottom: 1px solid #333;
}
````
