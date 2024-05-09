# Input

-   category: Components
-   family: DataEntry
-   chinese: 输入框
-   type: 表单

---

表单输入组件。

## 何时使用

表单输入，一般配合 Form 使用。

-   Input 不支持 Number 类型数字，如有需要使用 NumberPicker 支持数字选择
-   `1.23` 版本新增了 API `composition` , 开启后可以在输入法结束后再触发 onChange（包括中文输入法、日语输入法等）

## API

### Input

| 参数                 | 说明                                                            | 类型                                                                                                                                                                                                                       | 默认值   | 是否必填 | 支持版本 |
| -------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | -------- |
| value                | 当前值（受控）                                                  | string \| number                                                                                                                                                                                                           | -        |          | -        |
| defaultValue         | 默认值（非受控）                                                | string \| number                                                                                                                                                                                                           | -        |          | -        |
| onChange             | 发生改变的时候触发的回调                                        | (<br/> value: string \| number,<br/> e:<br/> \| React.ChangeEvent\<HTMLInputElement><br/> \| React.CompositionEvent\<HTMLInputElement><br/> \| React.KeyboardEvent\<HTMLInputElement>,<br/> reason?: string<br/> ) => void | -        |          | -        |
| onKeyDown            | 键盘按下的时候触发的回调                                        | (<br/> e: React.KeyboardEvent\<HTMLInputElement>,<br/> opts: OnKeyDownOpts<br/> ) => void                                                                                                                                  | -        |          | -        |
| disabled             | 禁用状态                                                        | boolean                                                                                                                                                                                                                    | false    |          | -        |
| maxLength            | 最大长度                                                        | number                                                                                                                                                                                                                     | -        |          | -        |
| hasLimitHint         | 是否展现最大长度样式                                            | boolean                                                                                                                                                                                                                    | false    |          | -        |
| showLimitHint        | 是否展现最大长度样式                                            | boolean                                                                                                                                                                                                                    | false    |          | -        |
| cutString            | 当设置了 maxLength 时，是否截断超出的字符串                     | boolean                                                                                                                                                                                                                    | true     |          | -        |
| readOnly             | 只读                                                            | boolean                                                                                                                                                                                                                    | false    |          | -        |
| trim                 | onChange 返回会自动去除头尾空字符                               | boolean                                                                                                                                                                                                                    | false    |          | -        |
| placeholder          | 输入提示                                                        | string                                                                                                                                                                                                                     | -        |          | -        |
| onFocus              | 获取焦点时候触发的回调                                          | (e: React.FocusEvent\<HTMLInputElement>) => void                                                                                                                                                                           | -        |          | -        |
| onBlur               | 失去焦点时候触发的回调                                          | (e: React.FocusEvent\<HTMLInputElement>) => void                                                                                                                                                                           | -        |          | -        |
| getValueLength       | 自定义字符串计算长度方式                                        | (value: string) => number \| void                                                                                                                                                                                          | -        |          | -        |
| className            | 自定义 class                                                    | string                                                                                                                                                                                                                     | -        |          | -        |
| style                | 自定义内联样式                                                  | React.CSSProperties                                                                                                                                                                                                        | -        |          | -        |
| htmlType             | 原生 type                                                       | string                                                                                                                                                                                                                     | -        |          | -        |
| name                 | name                                                            | string                                                                                                                                                                                                                     | -        |          | -        |
| state                | 状态                                                            | 'error' \| 'loading' \| 'success' \| 'warning'                                                                                                                                                                             | -        |          | -        |
| label                | label                                                           | React.ReactNode                                                                                                                                                                                                            | -        |          | -        |
| hasClear             | 是否出现 clear 按钮                                             | boolean                                                                                                                                                                                                                    | -        |          | -        |
| hasBorder            | 是否有边框                                                      | boolean                                                                                                                                                                                                                    | true     |          | -        |
| size                 | 尺寸                                                            | 'small' \| 'medium' \| 'large'                                                                                                                                                                                             | 'medium' |          | -        |
| onPressEnter         | 按下回车的回调                                                  | (e: React.KeyboardEvent\<HTMLInputElement>) => void                                                                                                                                                                        | -        |          | -        |
| hint                 | 水印 (Icon 的 type 类型，和清除按钮占用同一个地方)              | string \| React.ReactNode                                                                                                                                                                                                  | -        |          | -        |
| innerBefore          | 文字前附加内容                                                  | React.ReactNode                                                                                                                                                                                                            | -        |          | -        |
| innerAfter           | 文字后附加内容                                                  | React.ReactNode                                                                                                                                                                                                            | -        |          | -        |
| addonBefore          | 输入框前附加内容                                                | React.ReactNode                                                                                                                                                                                                            | -        |          | -        |
| addonAfter           | 输入框后附加内容                                                | React.ReactNode                                                                                                                                                                                                            | -        |          | -        |
| addonTextBefore      | 输入框前附加文字                                                | React.ReactNode                                                                                                                                                                                                            | -        |          | -        |
| addonTextAfter       | 输入框后附加文字                                                | React.ReactNode                                                                                                                                                                                                            | -        |          | -        |
| autoComplete         | 自动补全 (原生 input 支持)                                      | string                                                                                                                                                                                                                     | 'off'    |          | -        |
| autoFocus            | 自动聚焦 (原生 input 支持)                                      | boolean                                                                                                                                                                                                                    | -        |          | -        |
| isPreview            | 是否为预览态                                                    | boolean                                                                                                                                                                                                                    | false    |          | -        |
| renderPreview        | 自定义预览态内容                                                | (value: string \| number \| undefined, props: InputProps) => React.ReactNode                                                                                                                                               | -        |          | -        |
| composition          | 开启后会过滤输入法中间字母状态，文字输入完成后才会触发 onChange | boolean                                                                                                                                                                                                                    | false    |          | 1.23     |
| hoverShowClear       | hover 展示 clear (配合 hasClear=true 使用)                      | boolean                                                                                                                                                                                                                    | false    |          | 1.24     |
| extra                | 额外内容                                                        | React.ReactNode                                                                                                                                                                                                            | -        |          | -        |
| htmlSize             | 原生 input 的 size 属性                                         | string                                                                                                                                                                                                                     | -        |          | -        |
| inputRender          | 自定义 input 样式                                               | (input: React.ReactElement) => React.ReactNode                                                                                                                                                                             | -        |          | -        |
| inputStyle           | 自定义 input 样式                                               | React.CSSProperties                                                                                                                                                                                                        | -        |          | -        |
| inputClassName       | 自定义 input 类名                                               | string                                                                                                                                                                                                                     | -        |          | -        |
| innerBeforeClassName | 文字前附加内容类名                                              | string                                                                                                                                                                                                                     | -        |          | -        |
| innerAfterClassName  | 文字后附加内容类名                                              | string                                                                                                                                                                                                                     | -        |          | -        |

### Input.TextArea

| 参数           | 说明                                                            | 类型                                                                                         | 默认值   | 是否必填 | 支持版本 |
| -------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------- | -------- | -------- |
| value          | 当前值（受控）                                                  | string \| number                                                                             | -        |          | -        |
| defaultValue   | 默认值（非受控）                                                | string \| number                                                                             | -        |          | -        |
| onChange       | 发生改变的时候触发的回调                                        | (value: string, e: React.ChangeEvent\<HTMLTextAreaElement>, type?: string) => void           | -        |          | -        |
| onKeyDown      | 键盘按下的时候触发的回调                                        | (<br/> e: React.KeyboardEvent\<HTMLTextAreaElement>,<br/> opts: OnKeyDownOpts<br/> ) => void | -        |          | -        |
| disabled       | 禁用状态                                                        | boolean                                                                                      | false    |          | -        |
| maxLength      | 最大长度                                                        | number                                                                                       | -        |          | -        |
| hasLimitHint   | 是否展现最大长度样式                                            | boolean                                                                                      | false    |          | -        |
| showLimitHint  | 是否展现最大长度样式                                            | boolean                                                                                      | false    |          | -        |
| cutString      | 当设置了 maxLength 时，是否截断超出的字符串                     | boolean                                                                                      | true     |          | -        |
| readOnly       | 只读                                                            | boolean                                                                                      | false    |          | -        |
| trim           | onChange 返回会自动去除头尾空字符                               | boolean                                                                                      | false    |          | -        |
| placeholder    | 输入提示                                                        | string                                                                                       | -        |          | -        |
| onFocus        | 获取焦点时候触发的回调                                          | (e: React.FocusEvent\<HTMLTextAreaElement>) => void                                          | -        |          | -        |
| onBlur         | 失去焦点时候触发的回调                                          | (e: React.FocusEvent\<HTMLTextAreaElement>) => void                                          | -        |          | -        |
| getValueLength | 自定义字符串计算长度方式                                        | (value: string) => number \| void                                                            | -        |          | -        |
| className      | 自定义 class                                                    | string                                                                                       | -        |          | -        |
| style          | 自定义内联样式                                                  | React.CSSProperties                                                                          | -        |          | -        |
| htmlType       | 原生 type                                                       | string                                                                                       | -        |          | -        |
| name           | name                                                            | string                                                                                       | -        |          | -        |
| state          | 状态                                                            | 'error' \| 'warning' \| 'loading'                                                            | -        |          | -        |
| hasBorder      | 是否有边框                                                      | boolean                                                                                      | true     |          | -        |
| autoHeight     | 根据内容自动改变高度                                            | boolean \| { minRows?: number \| string; maxRows?: number \| string }                        | false    |          | -        |
| rows           | 多行文本框高度                                                  | number                                                                                       | 4        |          | -        |
| isPreview      | 是否为预览态                                                    | boolean                                                                                      | false    |          | -        |
| renderPreview  | 自定义预览态内容                                                | (value: string \| number \| undefined, props: TextAreaProps) => React.ReactNode              | -        |          | -        |
| composition    | 开启后会过滤输入法中间字母状态，文字输入完成后才会触发 onChange | boolean                                                                                      | false    |          | 1.23     |
| hasClear       | 是否出现 clear 按钮                                             | boolean                                                                                      | -        |          | -        |
| size           | 尺寸                                                            | 'small' \| 'medium' \| 'large'                                                               | 'medium' |          | -        |

### Input.Group

| 参数                 | 说明                   | 类型            | 默认值 | 是否必填 |
| -------------------- | ---------------------- | --------------- | ------ | -------- |
| addonBefore          | 输入框前附加内容       | React.ReactNode | -      |          |
| addonBeforeClassName | 输入框前附加内容的类名 | string          | -      |          |
| addonAfter           | 输入框后附加内容       | React.ReactNode | -      |          |
| addonAfterClassName  | 输入框后附加内容的类名 | string          | -      |          |
| rtl                  | rtl                    | boolean         | -      |          |
| disabled             | 禁用状态               | boolean         | -      |          |

### Input.Password

继承 Input 的属性

| 参数       | 说明             | 类型    | 默认值 | 是否必填 |
| ---------- | ---------------- | ------- | ------ | -------- |
| showToggle | 是否展示切换按钮 | boolean | true   |          |

### OnKeyDownOpts

| 参数          | 说明             | 类型    | 默认值 | 是否必填 |
| ------------- | ---------------- | ------- | ------ | -------- |
| beTrimed      | 输入的空格被清理 | boolean | -      |          |
| overMaxLength | 已超出最大长度   | boolean | -      |          |

## Input/TextArea 内部函数 (通过 refs 获取)

| 参数         | 说明                                                                                                                                             | 类型     | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ |
| getInputNode | 获取真正 input 节点                                                                                                                              | Function |        |
| focus        | 获取焦点<br><br>**签名**:<br> Function(start:Number, end: Number)<br>**参数**:<br>_start_: {Number} 光标起始位置<br>_end_: {Number} 选择结束位置 | Function |        |

## 无障碍键盘操作指南

| 按键  | 说明                |
| :---- | :------------------ |
| Enter | 触发 onKeyDown 事件 |
| Any   | 触发 onChange 事件  |
