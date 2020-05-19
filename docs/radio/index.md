# Radio

-   category: Components
-   family: DataEntry
-   chinese: 单选框
-   type: 表单

---

## 开发指南

单选框

### 何时使用

单选框允许用户从一个数据集中选择单个选项。如果你觉得用户需要并排看到所有的可选项，使用单选框进行排他操作。此外，考虑使用下拉列表，相对于显示所有的选项占用更少的空间。

## API

### Radio

| 参数             | 说明                                                                                                                                         | 类型                    | 默认值       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | --------- |
| id             | 组件input的id                                                                                                                                 | String                | -         |
| checked        | 设置radio是否选中                                                                                                                                | Boolean               | -         |
| defaultChecked | 设置radio是否默认选中                                                                                                                              | Boolean               | -         |
| label          | 通过属性配置label                                                                                                                                | ReactNode             | -         |
| onChange       | 状态变化时触发的事件<br><br>**签名**:<br>Function(checked: Boolean, e: Event) => void<br>**参数**:<br>_checked_: {Boolean} 是否选中<br>_e_: {Event} Dom 事件对象 | Function              | func.noop |
| onMouseEnter   | 鼠标进入enter事件<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} Dom 事件对象                                               | Function              | func.noop |
| onMouseLeave   | 鼠标离开事件<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} Dom 事件对象                                                    | Function              | func.noop |
| disabled       | radio是否被禁用                                                                                                                                 | Boolean               | -         |
| value          | radio 的value                                                                                                                               | String/Number/Boolean | -         |
| name           | name                                                                                                                                       | String                | -         |
| isPreview      | 是否为预览态                                                                                                                                     | Boolean               | false     |
| renderPreview  | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: number) => void<br>**参数**:<br>_value_: {number} 评分值                                          | Function              | -         |

### Radio.Group

| 参数            | 说明                                                                                                                                                 | 类型                                  | 默认值      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | -------- |
| name          | name                                                                                                                                               | String                              | -        |
| size          | 与 `shape` 属性配套使用，shape设为button时有效<br><br>**可选值**:<br>'large'(大)<br>'medium'(中)<br>'small'(小)                                                       | Enum                                | 'medium' |
| shape         | 可以设置成 button 展示形状<br><br>**可选值**:<br>'normal'(按钮状)<br>'button'                                                                                     | Enum                                | -        |
| value         | radio group的选中项的值                                                                                                                                  | String/Number/Boolean               | -        |
| defaultValue  | radio group的默认值                                                                                                                                    | String/Number/Boolean               | -        |
| component     | 设置标签类型                                                                                                                                             | String/Function                     | 'div'    |
| onChange      | 选中值改变时的事件<br><br>**签名**:<br>Function(value: String/Number, e: Event) => void<br>**参数**:<br>_value_: {String/Number} 选中项的值<br>_e_: {Event} Dom 事件对象 | Function                            | () => {} |
| disabled      | 表示radio被禁用                                                                                                                                         | Boolean                             | -        |
| dataSource    | 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` `[{label: 'apply', value: 'apple'}]`                                                | Array&lt;String>/Array&lt;Object>   | \[]      |
| children      | 通过子元素方式设置内部radio                                                                                                                                   | Array&lt;ReactElement>/ReactElement | -        |
| itemDirection | 子项目的排列方式<br>- hoz: 水平排列 (default)<br>- ver: 垂直排列<br><br>**可选值**:<br>'hoz', 'ver'                                                                   | Enum                                | 'hoz'    |
| isPreview     | 是否为预览态                                                                                                                                             | Boolean                             | false    |
| renderPreview | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: number) => void<br>**参数**:<br>_value_: {number} 评分值                                                  | Function                            | -        |

## ARIA and KeyBoard

| 按键  | 说明                                                     |
| :-- | :----------------------------------------------------- |
| Tab | 获取焦点，如果没有任何选中就是第一个，之后可以空格选中。如果有选中的就聚焦到选中项，然后通过左右键直接选中。 |
