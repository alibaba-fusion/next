# 简单用法

- order: 0

使用 VirtualTree 最简单的例子。

:::lang=en-us
# Basic

- order: 0

A simple case.

:::

---

````jsx
import { VirtualTree } from '@alifd/next';

const data = [];

for (let i = 0; i < 50; i++) {
    data.push({ id: `root-${i}`, name: `Node Id ${i}`, expanded: false });
    for (let j = 0; j < 3; j++) {
        data.push({ id: `file-${i}-${j}`, pId: `root-${i}`, name: `File Id ${j}` });
    }
}

ReactDOM.render(
    <div className="demo-box">
        <div className="tree-block"><VirtualTree nextList={data} /></div>
    </div>, mountNode);
````

````css
.demo-box {
    width: 100%;
    height: 400px;
    border: 1px solid #ddd;
    overflow: auto;
}
.tree-block {
    float: left;
    width: 250px;
    height: 100%;
}
````
