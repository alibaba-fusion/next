# 带线样式

- order: 2

展示Tree组件带线的样式外观。

:::lang=en-us
# Show line

- order: 2

Demo the tree with line.
:::

---

````jsx
import { Tree } from '@alifd/next';

const TreeNode = Tree.Node;

ReactDOM.render(
    <Tree defaultExpandAll showLine>
        <TreeNode label="Trunk">
            <TreeNode label="Branch">
                <TreeNode label="Branch">
                    <TreeNode label="Leaf" />
                </TreeNode>
                <TreeNode label="Leaf" />
            </TreeNode>
            <TreeNode label="Branch">
                <TreeNode label="Leaf" />
                <TreeNode label="Leaf" />
            </TreeNode>
        </TreeNode>
    </Tree>, mountNode);
````
