# Input

-   category: Components
-   family: DataEntry
-   chinese: 输入框
-   type: 表单

---

## 开发指南

### 何时使用

表单输入，一般配合Form使用

## API

### Input

| 参数              | 说明                                                                                                                                                                                                                           | 类型               | 默认值       |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | --------- |
| value           | 当前值                                                                                                                                                                                                                          | String/Number    | -         |
| size            | 尺寸<br><br>**可选值**:<br>'small'(小)<br>'medium'(中)<br>'large'(大)                                                                                                                                                                | Enum             | 'medium'  |
| defaultValue    | 初始化值                                                                                                                                                                                                                         | String/Number    | -         |
| onChange        | 发生改变的时候触发的回调<br><br>**签名**:<br>Function(value: String, e: Event) => void<br>**参数**:<br>_value_: {String} 数据<br>_e_: {Event} DOM事件对象                                                                                          | Function         | func.noop |
| onKeyDown       | 键盘按下的时候触发的回调<br><br>**签名**:<br>Function(e: Event, opts: Object) => void<br>**参数**:<br>_e_: {Event} DOM事件对象<br>_opts_: {Object} 可扩展的附加信息：<br> - opts.overMaxLength: {Boolean} 已超出最大长度<br> - opts.beTrimed: {Boolean} 输入的空格被清理 | Function         | func.noop |
| disabled        | 禁用状态                                                                                                                                                                                                                         | Boolean          | false     |
| maxLength       | 最大长度                                                                                                                                                                                                                         | Number           | null      |
| hasLimitHint    | 是否展现最大长度样式                                                                                                                                                                                                                   | Boolean          | false     |
| cutString       | 当设置了maxLength时，是否截断超出字符串                                                                                                                                                                                                     | Boolean          | true      |
| readOnly        | 只读                                                                                                                                                                                                                           | Boolean          | false     |
| trim            | onChange返回会自动去除头尾空字符                                                                                                                                                                                                         | Boolean          | false     |
| placeholder     | 输入提示                                                                                                                                                                                                                         | String           | -         |
| onFocus         | 获取焦点时候触发的回调<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} DOM事件对象                                                                                                                                  | Function         | func.noop |
| onBlur          | 失去焦点时候触发的回调<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} DOM事件对象                                                                                                                                  | Function         | func.noop |
| getValueLength  | 自定义字符串计算长度方式<br><br>**签名**:<br>Function(value: String) => Number<br>**参数**:<br>_value_: {String} 数据<br>**返回值**:<br>{Number} 自定义长度<br>                                                                                        | Function         | func.noop |
| htmlType        | 原生type                                                                                                                                                                                                                       | String           | -         |
| name            | name                                                                                                                                                                                                                         | String           | -         |
| state           | 状态<br><br>**可选值**:<br>'error'(错误)<br>'loading'(校验中)<br>'success'(成功)<br>'warning'(警告)                                                                                                                                        | Enum             | -         |
| isPreview       | 是否为预览态                                                                                                                                                                                                                       | Boolean          | false     |
| renderPreview   | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: number) => void<br>**参数**:<br>_value_: {number} 评分值                                                                                                                            | Function         | -         |
| label           | label                                                                                                                                                                                                                        | ReactNode        | -         |
| hasClear        | 是否出现clear按钮                                                                                                                                                                                                                  | Boolean          | -         |
| hasBorder       | 是否有边框                                                                                                                                                                                                                        | Boolean          | true      |
| onPressEnter    | 按下回车的回调<br><br>**签名**:<br>Function() => void                                                                                                                                                                                 | Function         | func.noop |
| hint            | 水印 (Icon的type类型，和hasClear占用一个地方)                                                                                                                                                                                             | String/ReactNode | -         |
| innerBefore     | 文字前附加内容                                                                                                                                                                                                                      | ReactNode        | -         |
| innerAfter      | 文字后附加内容                                                                                                                                                                                                                      | ReactNode        | -         |
| addonBefore     | 输入框前附加内容                                                                                                                                                                                                                     | ReactNode        | -         |
| addonAfter      | 输入框后附加内容                                                                                                                                                                                                                     | ReactNode        | -         |
| addonTextBefore | 输入框前附加文字                                                                                                                                                                                                                     | ReactNode        | -         |
| addonTextAfter  | 输入框后附加文字                                                                                                                                                                                                                     | ReactNode        | -         |
| autoComplete    | (原生input支持)                                                                                                                                                                                                                  | String           | 'off'     |
| autoFocus       | 自动聚焦(原生input支持)                                                                                                                                                                                                              | Boolean          | -         |

### Input.TextArea

| 参数             | 说明                                                                                                                                                                                                                           | 类型             | 默认值       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------- |
| value          | 当前值                                                                                                                                                                                                                          | String/Number  | -         |
| defaultValue   | 初始化值                                                                                                                                                                                                                         | String/Number  | -         |
| onChange       | 发生改变的时候触发的回调<br><br>**签名**:<br>Function(value: String, e: Event) => void<br>**参数**:<br>_value_: {String} 数据<br>_e_: {Event} DOM事件对象                                                                                          | Function       | func.noop |
| onKeyDown      | 键盘按下的时候触发的回调<br><br>**签名**:<br>Function(e: Event, opts: Object) => void<br>**参数**:<br>_e_: {Event} DOM事件对象<br>_opts_: {Object} 可扩展的附加信息：<br> - opts.overMaxLength: {Boolean} 已超出最大长度<br> - opts.beTrimed: {Boolean} 输入的空格被清理 | Function       | func.noop |
| disabled       | 禁用状态                                                                                                                                                                                                                         | Boolean        | false     |
| maxLength      | 最大长度                                                                                                                                                                                                                         | Number         | null      |
| hasLimitHint   | 是否展现最大长度样式                                                                                                                                                                                                                   | Boolean        | false     |
| cutString      | 当设置了maxLength时，是否截断超出字符串                                                                                                                                                                                                     | Boolean        | true      |
| readOnly       | 只读                                                                                                                                                                                                                           | Boolean        | false     |
| trim           | onChange返回会自动去除头尾空字符                                                                                                                                                                                                         | Boolean        | false     |
| placeholder    | 输入提示                                                                                                                                                                                                                         | String         | -         |
| onFocus        | 获取焦点时候触发的回调<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} DOM事件对象                                                                                                                                  | Function       | func.noop |
| onBlur         | 失去焦点时候触发的回调<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} DOM事件对象                                                                                                                                  | Function       | func.noop |
| getValueLength | 自定义字符串计算长度方式<br><br>**签名**:<br>Function(value: String) => Number<br>**参数**:<br>_value_: {String} 数据<br>**返回值**:<br>{Number} 自定义长度<br>                                                                                        | Function       | func.noop |
| htmlType       | 原生type                                                                                                                                                                                                                       | String         | -         |
| name           | name                                                                                                                                                                                                                         | String         | -         |
| state          | 状态<br><br>**可选值**:<br>'error'(错误)<br>'warning'                                                                                                                                                                               | Enum           | -         |
| isPreview      | 是否为预览态                                                                                                                                                                                                                       | Boolean        | false     |
| renderPreview  | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: number) => void<br>**参数**:<br>_value_: {number} 评分值                                                                                                                            | Function       | -         |
| hasBorder      | 是否有边框                                                                                                                                                                                                                        | Boolean        | true      |
| autoHeight     | 自动高度 true / {minRows: 2, maxRows: 4}                                                                                                                                                                                         | Boolean/Object | false     |
| rows           | 多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)                                                                                                                                                                         | Number         | 4         |

### Input.Group

| 参数                   | 说明          | 类型        | 默认值 |
| -------------------- | ----------- | --------- | --- |
| addonBefore          | 输入框前附加内容    | ReactNode | -   |
| addonBeforeClassName | 输入框前附加内容css | String    | -   |
| addonAfter           | 输入框后附加内容    | ReactNode | -   |
| addonAfterClassName  | 输入框后额外css   | String    | -   |
| rtl                  | rtl         | Boolean   | -   |

## Input/TextArea 内部函数(通过refs获取)

| 参数           | 说明                                                                                                                           | 类型       | 默认值 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- | -------- | --- |
| getInputNode | 获取真正input节点                                                                                                                  | Function |     |
| focus        | 获取焦点<br><br>**签名**:<br> Function(start:Number, end: Number)<br>**参数**:<br>_start_: {Number} 光标起始位置<br>_end_: {Number} 选择结束位置 | Function |     |

## ARIA and KeyBoard

| 按键    | 说明            |
| :---- | :------------ |
| Enter | 触发onKeyDown事件 |
| Any   | 触发onChange事件  |
