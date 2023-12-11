# zh-CN order=1

# 数据直接生成

使用 dataSource 生成树结构，除设置 `key`, `label`, `children` 属性外，还可传入 `TreeNode` 的其他属性，详细见[TreeNode API](../tree#Tree.Node)，推荐使用该方式生成 Tree 组件。

# en-US order=1

# Render by dataSource

Using the dataSource generate tree structure, in addition to setting the key, label, and children properties, you can pass in other TreeNode properties, including selectable, disabled, checked, checkboxDisabled, and isLeaf. It is recommended to use `dataSource` instead of manually generate a tree, which is easier to use and better performance.
