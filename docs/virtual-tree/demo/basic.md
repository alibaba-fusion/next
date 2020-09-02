# 简单用法

- order: 0

使用 VirtualTree 最简单的例子。

:::lang=en-us
# Basic

- order: 0

A simple case.

:::

---

````css
.virtual-box {
    height: 200px;
    width: 200px;
    border: 1px solid #ddd;
    overflow: auto;
}
````

````jsx
import React from 'react';
import { VirtualTree } from '@alifd/next';

const data = [];

for (let i = 0; i < 50; i++) {
  data.push({
    id: `root-${i}`,
    name: `root-${i}`,
    expanded: false,
  });
  for (let j = 0; j < 3; j++) {
    data.push({
      id: `folder-${i}-${j}`,
      pId: `root-${i}`,
      name: `folder-${j}`,
      expanded: false,
    });
    for (let k = 0; k < 30; k++) {
      data.push({
        id: `file-${i}-${j}-${k}`,
        pId: `folder-${i}-${j}`,
        name: `file-${k}`,
      });
    }
  }
}

export default data;

class Demo extends React.Component {
  state = {
    data: [],
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    this.setState({ data: data.splice(0, 10000) });
    setTimeout(() => {
      if (data.length > 0) {
        this.getData();
      }
    }, 10);
  }
  getContextMenuList = (node) => {
    const { expanded } = node;
    const isParent = expanded !== undefined;
    return ([
      {
        key: 'edit',
        type: 'subMenu',
        title: 'Edit',
        content: [
          { key: 'createDocument', type: 'item', title: 'Create Document', disabled: !isParent },
          { key: 'createNode', type: 'item', title: 'Create Node', disabled: !isParent },
          { key: 'updateNode', type: 'item', title: 'Rename' },
          { key: 'delete', type: 'item', title: 'Delete' },
        ],
      },
      { key: 'focus', type: 'item', title: 'Focus' },
    ]);
  }
  render() {
    return (
      <div className={'virtual-box'}>
        <VirtualTree
          nextList={this.state.data}
          getContextMenuList={this.getContextMenuList}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
````
