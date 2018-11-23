# TreeSelect

-   category: Components
-   family: DataEntry
-   chinese: 树型选择控件
-   type: 基本

---

## 开发指南

### 何时使用

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

## API

### TreeSelect

| 参数                      | 说明                                                                                                                                                                                                                                                       | 类型                      | 默认值         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------- |
| children                | 树节点                                                                                                                                                                                                                                                      | ReactNode               | -           |
| size                    | 选择框大小<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                                                                                                                                      | Enum                    | 'medium'    |
| placeholder             | 选择框占位符                                                                                                                                                                                                                                                   | String                  | -           |
| disabled                | 是否禁用                                                                                                                                                                                                                                                     | Boolean                 | false       |
| hasArrow                | 是否有下拉箭头                                                                                                                                                                                                                                                  | Boolean                 | true        |
| hasBorder               | 是否有边框                                                                                                                                                                                                                                                    | Boolean                 | true        |
| hasClear                | 是否有清空按钮                                                                                                                                                                                                                                                  | Boolean                 | false       |
| label                   | 自定义内联 label                                                                                                                                                                                                                                              | ReactNode               | -           |
| readOnly                | 是否只读，只读模式下可以展开弹层但不能选择                                                                                                                                                                                                                                    | Boolean                 | -           |
| autoWidth               | 下拉框是否与选择器对齐                                                                                                                                                                                                                                              | Boolean                 | true        |
| dataSource              | 数据源，该属性优先级高于 children                                                                                                                                                                                                                                    | Array&lt;Object>        | -           |
| value                   | （受控）当前值                                                                                                                                                                                                                                                  | String/Array&lt;String> | -           |
| defaultValue            | （非受控）默认值                                                                                                                                                                                                                                                 | String/Array&lt;String> | null        |
| onChange                | 选中值改变时触发的回调函数<br><br>**签名**:<br>Function(value: String/Array, data: Object/Array) => void<br>**参数**:<br>_value_: {String/Array} 选中的值，单选时返回单个值，多选时返回数组<br>_data_: {Object/Array} 选中的数据，包括 value, label, pos, key属性，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点 | Function                | () => {}    |
| showSearch              | 是否显示搜索框                                                                                                                                                                                                                                                  | Boolean                 | false       |
| onSearch                | 在搜索框中输入时触发的回调函数<br><br>**签名**:<br>Function(keyword: String) => void<br>**参数**:<br>_keyword_: {String} 输入的关键字                                                                                                                                             | Function                | () => {}    |
| notFoundContent         | 无数据时显示内容                                                                                                                                                                                                                                                 | ReactNode               | 'Not Found' |
| multiple                | 是否支持多选                                                                                                                                                                                                                                                   | Boolean                 | false       |
| treeCheckable           | 下拉框中的树是否支持勾选节点的复选框                                                                                                                                                                                                                                       | Boolean                 | false       |
| treeCheckStrictly       | 下拉框中的树勾选节点复选框是否完全受控（父子节点选中状态不再关联）                                                                                                                                                                                                                        | Boolean                 | false       |
| treeCheckedStrategy     | 定义选中时回填的方式<br><br>**可选值**:<br>'all'(返回所有选中的节点)<br>'parent'(父子节点都选中时只返回父节点)<br>'child'(父子节点都选中时只返回子节点)                                                                                                                                                    | Enum                    | 'parent'    |
| treeDefaultExpandAll    | 下拉框中的树是否默认展开所有节点                                                                                                                                                                                                                                         | Boolean                 | false       |
| treeDefaultExpandedKeys | 下拉框中的树默认展开节点key的数组                                                                                                                                                                                                                                       | Array&lt;String>        | \[]         |
| treeLoadData            | 下拉框中的树异步加载数据的函数，使用请参考[Tree的异步加载数据Demo](https://fusion.design/component/tree)<br><br>**签名**:<br>Function(node: ReactElement) => void<br>**参数**:<br>_node_: {ReactElement} 被点击展开的节点                                                                        | Function                | -           |
| treeProps               | 透传到 Tree 的属性对象                                                                                                                                                                                                                                           | Object                  | {}          |
| defaultVisible          | 初始下拉框是否显示                                                                                                                                                                                                                                                | Boolean                 | false       |
| visible                 | 当前下拉框是否显示                                                                                                                                                                                                                                                | Boolean                 | -           |
| onVisibleChange         | 下拉框显示或关闭时触发事件的回调函数<br><br>**签名**:<br>Function(visible: Boolean, type: String) => void<br>**参数**:<br>_visible_: {Boolean} 是否显示<br>_type_: {String} 触发显示关闭的操作类型                                                                                            | Function                | () => {}    |
| popupStyle              | 下拉框自定义样式对象                                                                                                                                                                                                                                               | Object                  | -           |
| popupClassName          | 下拉框样式自定义类名                                                                                                                                                                                                                                               | String                  | -           |
| popupContainer          | 下拉框挂载的容器节点                                                                                                                                                                                                                                               | String/Function         | -           |
| popupProps              | 透传到 Popup 的属性对象                                                                                                                                                                                                                                          | Object                  | -           |

<!-- api-extra-start -->

### TreeSelect.Node

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

### dataSource 数据结构

```js
const dataSource = [{
    label: '服装',
    value: '1',
    key: '1',
    selectable: false,
    children: [{
        label: '男装',
        value: '2',
        key: '2',
        children: [{
            label: '外套',
            value: '4',
            key: '4',
            disableCheckbox: true
        }, {
            label: '夹克',
            value: '5',
            key: '5',
            disabled: true
        }]
    }, {
        label: '女装',
        value: '3',
        key: '3',
        children: [{
            label: '裙子',
            value: '6',
            key: '6'
        }]
    }]
}];
```

如果不传入 key，TreeSelect 会使用内部计算出来的位置字符串作为 key 值，如果你想指定诸如 treeDefaultExpandedKeys 这样的属性，请传入自定义的 key 值，让它和 value 是一个值，是一个很好的办法。

<!-- api-extra-end -->
