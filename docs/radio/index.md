# Radio

-   category: Components
-   family: DataEntry
-   chinese: 单选框
-   type: 表单

---

单选框。

## 何时使用

-   单选框允许用户从一个数据集中选择单个选项。面向用户需要并排看到所有的可选项，并使用单选框进行排他操作的场景。

-   对于选项过多的场景，考虑使用下拉列表，相对于显示所有的选项占用更少的空间。

## API

### Radio

| 参数             | 说明                                                                                                                                                                                                    | 类型                    | 默认值       |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------- |
| id             | 组件input的id                                                                                                                                                                                            | String                | -         |
| checked        | 设置radio是否选中                                                                                                                                                                                           | Boolean               | -         |
| defaultChecked | 设置radio是否默认选中                                                                                                                                                                                         | Boolean               | -         |
| label          | 通过属性配置label                                                                                                                                                                                           | ReactNode             | -         |
| onChange       | 状态变化时触发的事件<br><br>**签名**:<br>Function(checked: Boolean, e: Event) => void<br>**参数**:<br>_checked_: {Boolean} 是否选中<br>_e_: {Event} Dom 事件对象                                                            | Function              | func.noop |
| onMouseEnter   | 鼠标进入enter事件<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} Dom 事件对象                                                                                                          | Function              | func.noop |
| onMouseLeave   | 鼠标离开事件<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} Dom 事件对象                                                                                                               | Function              | func.noop |
| disabled       | radio是否被禁用                                                                                                                                                                                            | Boolean               | -         |
| value          | radio 的value                                                                                                                                                                                          | String/Number/Boolean | -         |
| name           | name                                                                                                                                                                                                  | String                | -         |
| isPreview      | 是否为预览态                                                                                                                                                                                                | Boolean               | false     |
| renderPreview  | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(checked: Boolean, props: Object) => reactNode<br>**参数**:<br>_checked_: {Boolean} 是否选中<br>_props_: {Object} 所有传入的参数<br>**返回值**:<br>{reactNode} Element 渲染内容<br> | Function              | -         |

## 无障碍键盘操作指南

| 按键  | 说明                                                     |
| :-- | :----------------------------------------------------- |
| Tab | 获取焦点，如果没有任何选中就是第一个，之后可以空格选中。如果有选中的就聚焦到选中项，然后通过左右键直接选中。 |
