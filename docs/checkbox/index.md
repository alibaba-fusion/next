# Checkbox

-   category: Components
-   family: DataEntry
-   chinese: 复选按钮
-   type: 表单

---

多选框。

## 何时使用

-   在一组可选项中进行多项选择时；
-   单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## API

### Checkbox

| 参数                   | 说明                                                                                                                                                                                                    | 类型            | 默认值       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| id                   | checkbox id, 挂载在input上                                                                                                                                                                                | String        | -         |
| checked              | 选中状态                                                                                                                                                                                                  | Boolean       | -         |
| defaultChecked       | 默认选中状态                                                                                                                                                                                                | Boolean       | false     |
| disabled             | 禁用                                                                                                                                                                                                    | Boolean       | -         |
| label                | 通过属性配置label，                                                                                                                                                                                          | ReactNode     | -         |
| indeterminate        | Checkbox 的中间状态，只会影响到 Checkbox 的样式，并不影响其 checked 属性                                                                                                                                                    | Boolean       | -         |
| defaultIndeterminate | Checkbox 的默认中间态，只会影响到 Checkbox 的样式，并不影响其 checked 属性                                                                                                                                                   | Boolean       | false     |
| onChange             | 状态变化时触发的事件<br><br>**签名**:<br>Function(checked: Boolean, e: Event) => void<br>**参数**:<br>_checked_: {Boolean} 是否选中<br>_e_: {Event} Dom 事件对象                                                            | Function      | func.noop |
| onMouseEnter         | 鼠标进入enter事件<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} Dom 事件对象                                                                                                          | Function      | func.noop |
| onMouseLeave         | 鼠标离开Leave事件<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} Dom 事件对象                                                                                                          | Function      | func.noop |
| value                | checkbox 的value                                                                                                                                                                                       | String/Number | -         |
| name                 | name                                                                                                                                                                                                  | String        | -         |
| isPreview            | 是否为预览态                                                                                                                                                                                                | Boolean       | false     |
| renderPreview        | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(checked: Boolean, props: Object) => reactNode<br>**参数**:<br>_checked_: {Boolean} 是否选中<br>_props_: {Object} 所有传入的参数<br>**返回值**:<br>{reactNode} Element 渲染内容<br> | Function      | -         |

### Checkbox.Group

| 参数            | 说明                                                                                                                                                                                                                               | 类型                                | 默认值      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | -------- |
| disabled      | 整体禁用                                                                                                                                                                                                                             | Boolean                           | -        |
| dataSource    | 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` 或者 `[{value: 'apple', label: '苹果',}, {value: 'pear', label: '梨'}, {value: 'orange', label: '橙子'}]`                                                                | Array&lt;String>/Array&lt;Object> | \[]      |
| value         | 被选中的值列表                                                                                                                                                                                                                          | Array/String/Number               | -        |
| defaultValue  | 默认被选中的值列表                                                                                                                                                                                                                        | Array/String/Number               | -        |
| children      | 通过子元素方式设置内部 checkbox                                                                                                                                                                                                             | Array&lt;ReactElement>            | -        |
| onChange      | 选中值改变时的事件<br><br>**签名**:<br>Function(value: Array, e: Event) => void<br>**参数**:<br>_value_: {Array} 选中项列表<br>_e_: {Event} Dom 事件对象                                                                                               | Function                          | () => {} |
| itemDirection | 子项目的排列方式<br>- hoz: 水平排列 (default)<br>- ver: 垂直排列<br><br>**可选值**:<br>'hoz', 'ver'                                                                                                                                                 | Enum                              | 'hoz'    |
| isPreview     | 是否为预览态                                                                                                                                                                                                                           | Boolean                           | false    |
| renderPreview | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(previewed: Array, props: Object) => reactNode<br>**参数**:<br>_previewed_: {Array} 预览值 [{label: '', value:''},...]<br>_props_: {Object} 所有传入的参数<br>**返回值**:<br>{reactNode} Element 渲染内容<br> | Function                          | -        |

## 无障碍键盘操作指南

| 按键    | 说明       |
| :---- | :------- |
| SPACE | 选择或取消当前项 |
