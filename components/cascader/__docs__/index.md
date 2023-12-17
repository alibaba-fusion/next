# Cascader

-   category: Components
-   family: DataDisplay
-   chinese: 级联
-   type: 基本

---

级联组件。

## 何时使用

-   适用于从一组具有关联性的数据集合中进行选择的交互方式。
-   由于子集目录隐藏，级联是一种节约屏幕空间的有效方法。
-   级别数因业务需求而定，建议不超过5级。
-   级联多用于表单场景，可以独立在页面中使用，也可以与其他元素组合使用，如级联选择。

## API

### Cascader

| 参数                   | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 类型                      | 默认值                | 版本支持 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------ | ---- |
| dataSource           | 数据源，结构可参考下方说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Array&lt;Object>        | \[]                |      |
| defaultValue         | （非受控）默认值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | String/Array&lt;String> | null               |      |
| value                | （受控）当前值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String/Array&lt;String> | -                  |      |
| onChange             | 选中值改变时触发的回调函数<br/><br/>**签名**:<br/>Function(value: String/Array, data: Object/Array, extra: Object) => void<br/>**参数**:<br/>_value_: {String/Array} 选中的值，单选时返回单个值，多选时返回数组<br/>_data_: {Object/Array} 选中的数据，包括 value 和 label，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点<br/>_extra_: {Object} 额外参数<br/>_extra.selectedPath_: {Array} 单选时选中的数据的路径<br/>_extra.checked_: {Boolean} 多选时当前的操作是选中还是取消选中<br/>_extra.currentData_: {Object} 多选时当前操作的数据<br/>_extra.checkedData_: {Array} 多选时所有被选中的数据<br/>_extra.indeterminateData_: {Array} 多选时半选的数据 | Function                | -                  |      |
| defaultExpandedValue | （非受控）默认展开值，如果不设置，组件内部会根据 defaultValue/value 进行自动设置                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Array&lt;String>        | -                  |      |
| expandedValue        | （受控）当前展开值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Array&lt;String>        | -                  |      |
| expandTriggerType    | 展开触发的方式<br/><br/>**可选值**:<br/>'click', 'hover'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Enum                    | 'click'            |      |
| onExpand             | 展开时触发的回调函数<br/><br/>**签名**:<br/>Function(expandedValue: Array) => void<br/>**参数**:<br/>_expandedValue_: {Array} 各列展开值的数组                                                                                                                                                                                                                                                                                                                                                                                                               | Function                | -                  |      |
| useVirtual           | 是否开启虚拟滚动                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Boolean                 | false              |      |
| multiple             | 是否多选                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Boolean                 | false              |      |
| canOnlySelectLeaf    | 单选时是否只能选中叶子节点                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Boolean                 | false              |      |
| canOnlyCheckLeaf     | 多选时是否只能选中叶子节点                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Boolean                 | false              |      |
| checkStrictly        | 父子节点是否选中不关联                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Boolean                 | false              |      |
| listStyle            | 每列列表样式对象                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Object                  | -                  |      |
| listClassName        | 每列列表类名                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | String                  | -                  |      |
| itemRender           | 每列列表项渲染函数<br/><br/>**签名**:<br/>Function(data: Object) => ReactNode<br/>**参数**:<br/>_data_: {Object} 数据<br/>**返回值**:<br/>{ReactNode} 列表项内容<br/>                                                                                                                                                                                                                                                                                                                                                                                         | Function                | item => item.label |      |
| loadData             | 异步加载数据函数<br/><br/>**签名**:<br/>Function(data: Object, source: Object) => void<br/>**参数**:<br/>_data_: {Object} 当前点击异步加载的数据<br/>_source_: {Object} 当前点击数据，source是原始对象                                                                                                                                                                                                                                                                                                                                                                    | Function                | -                  |      |
| immutable            | 是否是不可变数据                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Boolean                 | false              | 1.23 |

<!-- api-extra-start -->

### dataSource数据结构

```js
const dataSource = [{
    value: '2974',
    label: '西安',
    children: [
        { value: '2975', label: '西安市', disabled: true },
        { value: '2976', label: '高陵县', checkboxDisabled: true },
        { value: '2977', label: '蓝田县' },
        { value: '2978', label: '户县' },
        { value: '2979', label: '周至县' },
        { value: '4208', label: '灞桥区' },
        { value: '4209', label: '长安区' },
        { value: '4210', label: '莲湖区' },
        { value: '4211', label: '临潼区' },
        { value: '4212', label: '未央区' },
        { value: '4213', label: '新城区' },
        { value: '4214', label: '阎良区' },
        { value: '4215', label: '雁塔区' },
        { value: '4388', label: '碑林区' },
        { value: '610127', label: '其它区' }
    ]
}];
```

数组中 Item 的自定义属性也会被透传到 onChange 函数的 data 参数中。

<!-- api-extra-end -->

## 无障碍键盘操作指南

| 按键          | 说明                     |
| :---------- | :--------------------- |
| Left Arrow  | 获取同级当前项前一项焦点           |
| Right Arrow | 获取同级当前项后一项焦点           |
| Tab         | 进入当前项的子元素，并获取第一个子元素为焦点 |
| Esc         | 返回当前项的父元素并获取焦点         |
| SPACE       | 选择当前项                  |
