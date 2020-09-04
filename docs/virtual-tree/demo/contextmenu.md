# 右键菜单用法

- order: 2

在目录树中添加右键菜单的例子。

:::lang=en-us
# Basic

- order: 2

A Example to show how to use contextmenu in index tree.

:::

---

````css
.demo-box {
    width: 100%;
    height: 400px;
    border: 1px solid #ddd;
    overflow: auto;
}
.tree-block {
  display: inline-block;
  float: left;
  width: 250px;
  height: 100%;
}
````

````jsx
import { VirtualTree } from '@alifd/next';

const data = [];

for (let i = 0; i < 50; i++) {
  data.push({ id: `root-${i}`, name: `Node Id ${i}`, expanded: false });
  for (let j = 0; j < 3; j++) {
    data.push({ id: `file-${i}-${j}`, pId: `root-${i}`, name: `File Id ${j}` });
  }
}

class Demo extends React.Component {
    ref = React.createRef();
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
    onContextMenuItemClick = (key, item, event, node) => {
        switch (key) {
            case 'createDocument':
                this.ref.current.addNode({
                    id: new Date().getTime(),
                    name: 'document-child',
                    pId: node.id,
                    expanded: false,
                });
                break;
            case 'createNode':
                this.ref.current.addNode({
                    id: new Date().getTime(),
                    name: 'file',
                    pId: node.id,
                });
                break;
            case 'updateNode':
                node.name = 'renamed_node';
                this.ref.current.updateNode(node);
                break;
            case 'delete':
                this.ref.current.deleteNode(node);
                break;
            case 'focus':
                this.ref.current.focusOnNode(node);
                break;
        }
    }
    render() {
        return (
            <div className="demo-box">
                <div className="tree-block">
                    <VirtualTree
                        ref={this.ref}
                        nextList={data}
                        getContextMenuList={this.getContextMenuList}
                        onContextMenuItemClick={this.onContextMenuItemClick}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
