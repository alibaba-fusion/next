# Tree

-   category: Components
-   family: DataDisplay
-   chinese: 树形控件
-   type: 基本

---

## 开发指南

### 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用`树控件`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## API

### Tree.Node

| 参数               | 说明                              | 类型        | 默认值   |
| ---------------- | ------------------------------- | --------- | ----- |
| children         | 树节点                             | ReactNode | -     |
| label            | 节点文本内容                          | ReactNode | '---' |
| selectable       | 单独设置是否支持选中，覆盖 Tree 的 selectable | Boolean   | -     |
| checkable        | 单独设置是否出现复选框，覆盖 Tree 的 checkable | Boolean   | -     |
| editable         | 单独设置是否支持编辑，覆盖 Tree 的 editable   | Boolean   | -     |
| draggable        | 单独设置是否支持拖拽，覆盖 Tree 的 draggable  | Boolean   | -     |
| disabled         | 是否禁止节点响应                        | Boolean   | false |
| checkboxDisabled | 是否禁止勾选节点复选框                     | Boolean   | false |
| isLeaf           | 是否是叶子节点，设置loadData时生效           | Boolean   | false |

<!-- api-extra-start -->

可以为 Tree.Node 设置 `key` 值：`<TreeNode key="102894" label="女装" />`，一般为数据的 id 值，但必需保证其全局唯一性，`key` 的默认值为 Tree 内部计算出的位置字符串。

<!-- api-extra-end -->
