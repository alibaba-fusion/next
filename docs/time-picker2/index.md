# TimePicker2

-   category: Components
-   family: DataEntry
-   chinese: 时间选择框2
-   type: 表单

---

## Guide

### 从 `TimePicker` 升级到 `TimePicker2`

1.22版本增加当前组件

功能变化：

-   交互重构，面板和输入框分离，支持预设日期，支持底部扩展等
-   摆脱了对 `moment` 的依赖，使用 `dayjs`
-   新增 `preset` 预设日期
-   新增 `hasBorder` 支持去掉边框

API变化：

-   `onChange` 和 `onOk` 等事件返回日期对象为 `Dayjs` 类型

### 何时使用

当用户需要输入一个时间，可以点击输入框，在弹出的时间选择面板上操作。时间选择面板仅支持 24 小时制。`format` 支持的时间格式如下：

| 格式     | 例子      | 说明       |
| ------ | ------- | -------- |
| `H HH` | `0..23` | 时，24 小时制 |
| `m mm` | `0..59` | 分        |
| `s ss` | `0..59` | 秒        |

组件默认使用 dayjs 实例作为输入输出值，推荐使用结合 dayjs 的方式使用组件。此外，组件也支持传入时间字符串的方式，例如直接传入 "12:00:00"。用户传入什么类型的 value/defaultValue 值，就会在 onChange 中返回相应的类型。

## API

### TimePicker2

| 参数                  | 说明                                                                                                                                                                                                                                                                                                          | 类型                      | 默认值        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------- |
| label               | 按钮的文案                                                                                                                                                                                                                                                                                                       | ReactNode               | -          |
| size                | 时间选择框的尺寸<br/><br/>**可选值**:<br/>'small', 'medium', 'large'                                                                                                                                                                                                                                                   | Enum                    | 'medium'   |
| state               | 输入框状态<br/><br/>**可选值**:<br/>'error', 'success'                                                                                                                                                                                                                                                              | Enum                    | -          |
| placeholder         | 输入框提示                                                                                                                                                                                                                                                                                                       | String                  | -          |
| value               | 时间值，dayjs格式或者2020-01-01字符串格式，受控状态使用                                                                                                                                                                                                                                                                         | custom                  | -          |
| defaultValue        | 时间初值，dayjs格式或者2020-01-01字符串格式，非受控状态使用                                                                                                                                                                                                                                                                       | custom                  | -          |
| hasClear            | 是否允许清空时间                                                                                                                                                                                                                                                                                                    | Boolean                 | true       |
| format              | 时间的格式<br/><https://dayjs.gitee.io/docs/zh-CN/display/format>                                                                                                                                                                                                                                                | String                  | 'HH:mm:ss' |
| hourStep            | 小时选项步长                                                                                                                                                                                                                                                                                                      | Number                  | -          |
| minuteStep          | 分钟选项步长                                                                                                                                                                                                                                                                                                      | Number                  | -          |
| secondStep          | 秒钟选项步长                                                                                                                                                                                                                                                                                                      | Number                  | -          |
| disabledHours       | 禁用小时函数<br/><br/>**签名**:<br/>Function(index: Number) => Boolean<br/>**参数**:<br/>_index_: {Number} 时 0 - 23<br/>**返回值**:<br/>{Boolean} 是否禁用<br/>                                                                                                                                                              | Function                | -          |
| disabledMinutes     | 禁用分钟函数<br/><br/>**签名**:<br/>Function(index: Number) => Boolean<br/>**参数**:<br/>_index_: {Number} 分 0 - 59<br/>**返回值**:<br/>{Boolean} 是否禁用<br/>                                                                                                                                                              | Function                | -          |
| disabledSeconds     | 禁用秒钟函数<br/><br/>**签名**:<br/>Function(index: Number) => Boolean<br/>**参数**:<br/>_index_: {Number} 秒 0 - 59<br/>**返回值**:<br/>{Boolean} 是否禁用<br/>                                                                                                                                                              | Function                | -          |
| renderTimeMenuItems | 渲染的可选择时间列表<br/>[{<br/> label: '01',<br/> value: 1<br/>}]<br/><br/>**签名**:<br/>Function(list: Array, mode: String, value: dayjs) => Array<br/>**参数**:<br/>_list_: {Array} 默认渲染的列表<br/>_mode_: {String} 渲染的菜单 hour, minute, second<br/>_value_: {dayjs} 当前时间，可能为 null<br/>**返回值**:<br/>{Array} 返回需要渲染的数据<br/> | Function                | -          |
| visible             | 弹层是否显示（受控）                                                                                                                                                                                                                                                                                                  | Boolean                 | -          |
| defaultVisible      | 弹层默认是否显示（非受控）                                                                                                                                                                                                                                                                                               | Boolean                 | -          |
| popupContainer      | 弹层容器                                                                                                                                                                                                                                                                                                        | any                     | -          |
| popupAlign          | 弹层对齐方式, 详情见Overlay 文档                                                                                                                                                                                                                                                                                       | String                  | 'tl bl'    |
| popupTriggerType    | 弹层触发方式<br/><br/>**可选值**:<br/>'click', 'hover'                                                                                                                                                                                                                                                               | Enum                    | 'click'    |
| onVisibleChange     | 弹层展示状态变化时的回调<br/><br/>**签名**:<br/>Function(visible: Boolean, type: String) => void<br/>**参数**:<br/>_visible_: {Boolean} 弹层是否隐藏和显示<br/>_type_: {String} 触发弹层显示和隐藏的来源 fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发                                                                                  | Function                | func.noop  |
| popupStyle          | 弹层自定义样式                                                                                                                                                                                                                                                                                                     | Object                  | -          |
| popupClassName      | 弹层自定义样式类                                                                                                                                                                                                                                                                                                    | String                  | -          |
| popupProps          | 弹层属性                                                                                                                                                                                                                                                                                                        | Object                  | -          |
| followTrigger       | 是否跟随滚动                                                                                                                                                                                                                                                                                                      | Boolean                 | -          |
| disabled            | 是否禁用                                                                                                                                                                                                                                                                                                        | Boolean                 | false      |
| hasBorder           | 输入框是否有边框                                                                                                                                                                                                                                                                                                    | Boolean                 | true       |
| isPreview           | 是否为预览态                                                                                                                                                                                                                                                                                                      | Boolean                 | -          |
| renderPreview       | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>Function(value: DayjsObject) => void<br/>**参数**:<br/>_value_: {DayjsObject} 时间                                                                                                                                                                                             | Function                | -          |
| onChange            | 时间值改变时的回调<br/><br/>**签名**:<br/>Function(date: DayjsObject, dateString: Object/String) => void<br/>**参数**:<br/>_date_: {DayjsObject} dayjs时间对象<br/>_dateString_: {Object/String} 时间对象或时间字符串                                                                                                                  | Function                | func.noop  |
| preset              | 预设值，会显示在时间面板下面                                                                                                                                                                                                                                                                                              | Array&lt;custom>/custom | -          |

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
