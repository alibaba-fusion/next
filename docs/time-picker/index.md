# TimePicker

-   category: Components
-   family: DataEntry
-   chinese: 时间选择框
-   type: 表单

---

## Guide

### 何时使用

当用户需要输入一个时间，可以点击输入框，在弹出的时间选择面板上操作。时间选择面板仅支持 24 小时制。`format` 支持的时间格式如下：

| 格式     | 例子      | 说明       |
| ------ | ------- | -------- |
| `H HH` | `0..23` | 时，24 小时制 |
| `m mm` | `0..59` | 分        |
| `s ss` | `0..59` | 秒        |

组件默认使用 moment 实例作为输入输出值，推荐使用结合 moment 的方式使用组件。此外，组件也支持传入时间字符串的方式，例如直接传入 "12:00:00"。用户传入什么类型的 value/defaultValue 值，就会在 onChange 中返回相应的类型。

## API

### TimePicker

| 参数                  | 说明                                                                                                                                                                                                                                                                                              | 类型        | 默认值        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- |
| label               | 按钮的文案                                                                                                                                                                                                                                                                                           | ReactNode | -          |
| size                | 时间选择框的尺寸<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                                                                                                                                                                          | Enum      | 'medium'   |
| state               | 输入框状态<br><br>**可选值**:<br>'error', 'success'                                                                                                                                                                                                                                                     | Enum      | -          |
| placeholder         | 输入框提示                                                                                                                                                                                                                                                                                           | String    | -          |
| value               | 时间值（moment 对象或时间字符串，受控状态使用）                                                                                                                                                                                                                                                                     | custom    | -          |
| defaultValue        | 时间初值（moment 对象或时间字符串，非受控状态使用）                                                                                                                                                                                                                                                                   | custom    | -          |
| hasClear            | 是否允许清空时间                                                                                                                                                                                                                                                                                        | Boolean   | true       |
| format              | 时间的格式<br><https://momentjs.com/docs/#/parsing/string-format/>                                                                                                                                                                                                                                   | String    | 'HH:mm:ss' |
| hourStep            | 小时选项步长                                                                                                                                                                                                                                                                                          | Number    | -          |
| minuteStep          | 分钟选项步长                                                                                                                                                                                                                                                                                          | Number    | -          |
| secondStep          | 秒钟选项步长                                                                                                                                                                                                                                                                                          | Number    | -          |
| disabledHours       | 禁用小时函数<br><br>**签名**:<br>Function(index: Number) => Boolean<br>**参数**:<br>_index_: {Number} 时 0 - 23<br>**返回值**:<br>{Boolean} 是否禁用<br>                                                                                                                                                          | Function  | -          |
| disabledMinutes     | 禁用分钟函数<br><br>**签名**:<br>Function(index: Number) => Boolean<br>**参数**:<br>_index_: {Number} 分 0 - 59<br>**返回值**:<br>{Boolean} 是否禁用<br>                                                                                                                                                          | Function  | -          |
| disabledSeconds     | 禁用秒钟函数<br><br>**签名**:<br>Function(index: Number) => Boolean<br>**参数**:<br>_index_: {Number} 秒 0 - 59<br>**返回值**:<br>{Boolean} 是否禁用<br>                                                                                                                                                          | Function  | -          |
| renderTimeMenuItems | 渲染的可选择时间列表<br>[{<br> label: '01',<br> value: 1<br>}]<br><br>**签名**:<br>Function(list: Array, mode: String, value: moment) => Array<br>**参数**:<br>_list_: {Array} 默认渲染的列表<br>_mode_: {String} 渲染的菜单 hour, minute, second<br>_value_: {moment} 当前时间，可能为 null<br>**返回值**:<br>{Array} 返回需要渲染的数据<br> | Function  | -          |
| visible             | 弹层是否显示（受控）                                                                                                                                                                                                                                                                                      | Boolean   | -          |
| defaultVisible      | 弹层默认是否显示（非受控）                                                                                                                                                                                                                                                                                   | Boolean   | -          |
| popupContainer      | 弹层容器<br><br>**签名**:<br>Function(target: Object) => ReactNode<br>**参数**:<br>_target_: {Object} 目标节点<br>**返回值**:<br>{ReactNode} 容器节点<br>                                                                                                                                                          | Function  | -          |
| popupAlign          | 弹层对齐方式, 详情见Overlay 文档                                                                                                                                                                                                                                                                           | String    | 'tl tl'    |
| popupTriggerType    | 弹层触发方式<br><br>**可选值**:<br>'click', 'hover'                                                                                                                                                                                                                                                      | Enum      | 'click'    |
| onVisibleChange     | 弹层展示状态变化时的回调<br><br>**签名**:<br>Function(visible: Boolean, type: String) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否隐藏和显示<br>_type_: {String} 触发弹层显示和隐藏的来源 fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发                                                                            | Function  | func.noop  |
| popupStyle          | 弹层自定义样式                                                                                                                                                                                                                                                                                         | Object    | -          |
| popupClassName      | 弹层自定义样式类                                                                                                                                                                                                                                                                                        | String    | -          |
| popupProps          | 弹层属性                                                                                                                                                                                                                                                                                            | Object    | -          |
| followTrigger       | 是否跟随滚动                                                                                                                                                                                                                                                                                          | Boolean   | -          |
| disabled            | 是否禁用                                                                                                                                                                                                                                                                                            | Boolean   | false      |
| onChange            | 时间值改变时的回调<br><br>**签名**:<br>Function(value: Object/String) => void<br>**参数**:<br>_value_: {Object/String} 时间对象或时间字符串                                                                                                                                                                            | Function  | func.noop  |

## ARIA and KeyBoard

| 按键              | 说明                                                    |
| :-------------- | :---------------------------------------------------- |
| Enter           | 打开时间选择框                                               |
| Esc             | 关闭时间选择框                                               |
| Up              | 输入上一秒的时间 （如果 `disabledMinutes={true}` 则可能是上一分钟或者上一小时） |
| Down            | 输入下一秒的时间 （如果 `disabledMinutes={true}` 则可能是下一分钟或者下一小时） |
| Page Up         | 输入上一分钟的时间                                             |
| Page Down       | 输入下一分钟的时间                                             |
| Alt + Page Up   | 输入上一小时的时间                                             |
| Alt + Page Down | 输入下一小时的时间                                             |
