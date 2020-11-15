# 树节点占满一行

-   order: 9

可以通过设置 `isNodeBlock` 为 `true`，来让树节点占满一行，`isNodeBlock` 也可传入一个对象，支持设置 `defaultPaddingLeft`（默认的左内边距）和 `indent` （缩进距离），另外注意 `showLine`  在开启 `isNodeBlock` 时失效。

:::lang=en-us

# Tree node is block

-   order: 9

You can set `isNodeBlock` to `true` to make the node block. The `isNodeBlock` can also pass in an object. You can set `defaultPaddingLeft` (the default left padding) and `indent`. Also note `isNodeBlock` will not work if you set `showLine` to true.
:::

---

````jsx
import { Tree } from '@alifd/next';

const TreeNode = Tree.Node;

ReactDOM.render(
    <Tree
        defaultExpandAll
        isNodeBlock={{ defaultPaddingLeft: 50 }}
        defaultSelectedKeys={['1']}
        style={{ width: '300px' }}
    >
        <TreeNode label="Component" key="0">
            <TreeNode label="Form" key="1" disabled>
                <TreeNode label="Select" key="2">
                    <TreeNode label="TreeSelect" key="3" />
                </TreeNode>
                <TreeNode label="Input" key="4" />
            </TreeNode>
            <TreeNode label="Display" key="5">
                <TreeNode label="Card" key="6" />
                <TreeNode label="Table" key="7" />
            </TreeNode>
        </TreeNode>
    </Tree>,
    mountNode
);
````
