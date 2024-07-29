# TimePicker

-   category: Components
-   family: DataEntry
-   chinese: 时间选择框
-   type: 表单

---

时间选择器。

## 何时使用

当用户需要输入一个时间，可以点击输入框，在弹出的时间选择面板上操作。时间选择面板仅支持 24 小时制。`format` 支持的时间格式如下：

| 格式   | 例子    | 说明          |
| ------ | ------- | ------------- |
| `H HH` | `0..23` | 时，24 小时制 |
| `m mm` | `0..59` | 分            |
| `s ss` | `0..59` | 秒            |

组件默认使用 moment 实例作为输入输出值，推荐使用结合 moment 的方式使用组件。此外，组件也支持传入时间字符串的方式，例如直接传入 "12:00:00"。用户传入什么类型的 value/defaultValue 值，就会在 onChange 中返回相应的类型。

## API

### TimePicker

| 参数                | 说明                                                                                                                                                                                                   | 类型                                                                                                                                           | 默认值 | 是否必填 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- |
| label               | 按钮的文案                                                                                                                                                                                             | React.ReactNode                                                                                                                                | -      |          |
| state               | 输入框状态                                                                                                                                                                                             | 'error' \| 'success'                                                                                                                           | -      |          |
| placeholder         | 输入框提示                                                                                                                                                                                             | string                                                                                                                                         | -      |          |
| value               | 时间值（moment 对象或时间字符串，受控状态使用）                                                                                                                                                        | string \| Moment \| null                                                                                                                       | -      |          |
| defaultValue        | 时间初值（moment 对象或时间字符串，非受控状态使用）                                                                                                                                                    | string \| Moment                                                                                                                               | -      |          |
| size                | 时间选择框的尺寸                                                                                                                                                                                       | 'small' \| 'medium' \| 'large'                                                                                                                 | -      |          |
| hasClear            | 是否允许清空时间                                                                                                                                                                                       | boolean                                                                                                                                        | -      |          |
| format              | 时间的格式                                                                                                                                                                                             | string                                                                                                                                         | -      |          |
| hourStep            | 小时选项步长                                                                                                                                                                                           | number                                                                                                                                         | -      |          |
| minuteStep          | 分钟选项步长                                                                                                                                                                                           | number                                                                                                                                         | -      |          |
| secondStep          | 秒钟选项步长                                                                                                                                                                                           | number                                                                                                                                         | -      |          |
| disabledHours       | 禁用小时的函数                                                                                                                                                                                         | (index: number) => boolean                                                                                                                     | -      |          |
| disabledMinutes     | 禁用分钟函数                                                                                                                                                                                           | (index: number) => boolean                                                                                                                     | -      |          |
| disabledSeconds     | 禁用秒钟函数                                                                                                                                                                                           | (index: number) => boolean                                                                                                                     | -      |          |
| visible             | 弹层是否显示（受控）                                                                                                                                                                                   | boolean                                                                                                                                        | -      |          |
| defaultVisible      | 弹层默认是否显示（非受控）                                                                                                                                                                             | boolean                                                                                                                                        | -      |          |
| popupContainer      | 弹层容器                                                                                                                                                                                               | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement)                                                                                | -      |          |
| popupAlign          | 弹层对齐方式，详情见 Overlay 文档                                                                                                                                                                      | string                                                                                                                                         | -      |          |
| popupTriggerType    | 弹层触发方式                                                                                                                                                                                           | 'click' \| 'hover'                                                                                                                             | -      |          |
| onVisibleChange     | 弹层展示状态变化时的回调                                                                                                                                                                               | (visible: boolean, reason: string) => void                                                                                                     | -      |          |
| popupStyle          | 弹层自定义样式                                                                                                                                                                                         | React.CSSProperties                                                                                                                            | -      |          |
| popupClassName      | 弹层自定义样式类                                                                                                                                                                                       | string                                                                                                                                         | -      |          |
| popupProps          | 弹层属性                                                                                                                                                                                               | PopupProps                                                                                                                                     | -      |          |
| disabled            | 是否禁用                                                                                                                                                                                               | boolean                                                                                                                                        | -      |          |
| isPreview           | 是否为预览态                                                                                                                                                                                           | boolean                                                                                                                                        | -      |          |
| renderPreview       | 预览态模式下渲染的内容                                                                                                                                                                                 | (value: Moment \| null, props: TimePickerProps) => React.ReactNode                                                                             | -      |          |
| onChange            | 时间值改变时的回调                                                                                                                                                                                     | (value: Moment \| string \| null) => void                                                                                                      | -      |          |
| renderTimeMenuItems | 渲染的可选择时间列表<br/><br/>**签名**:<br/>**参数**:<br/>_list_: 默认渲染的列表<br/>_mode_: 渲染的菜单 hour, minute, second<br/>_value_: 当前时间，可能为 null<br/>**返回值**:<br/>返回需要渲染的数据 | (<br/> list: Array\<TimeMenuListItem>,<br/> mode: TimeMenuProps['mode'],<br/> value: TimeMenuProps['value']<br/> ) => Array\<TimeMenuListItem> | -      |          |
| inputProps          | 自定义输入框属性                                                                                                                                                                                       | InputProps                                                                                                                                     | -      |          |
| popupContent        | 弹层内容                                                                                                                                                                                               | React.ReactNode                                                                                                                                | -      |          |
| followTrigger       | 跟随触发元素                                                                                                                                                                                           | boolean                                                                                                                                        | -      |          |

## 无障碍键盘操作指南

| 按键            | 说明                                                                            |
| :-------------- | :------------------------------------------------------------------------------ |
| Enter           | 打开时间选择框                                                                  |
| Esc             | 关闭时间选择框                                                                  |
| Up              | 输入上一秒的时间 （如果 `disabledMinutes={true}` 则可能是上一分钟或者上一小时） |
| Down            | 输入下一秒的时间 （如果 `disabledMinutes={true}` 则可能是下一分钟或者下一小时） |
| Page Up         | 输入上一分钟的时间                                                              |
| Page Down       | 输入下一分钟的时间                                                              |
| Alt + Page Up   | 输入上一小时的时间                                                              |
| Alt + Page Down | 输入下一小时的时间                                                              |
