# NumberPicker

-   category: Components
-   family: DataEntry
-   chinese: 数字输入框
-   type: 表单

---

数字选择器。

## 何时使用

数字选择器，并对输入的数据做正确性检查、自动订正。

## 如何使用

1.  自动订正可能会导致 onChange 返回值和你输入的数据不一样。

2.  其中有些中间输入状态无法触发 onChange，主要考虑到自动订正可能永远无法到达想要的值了。例如：

    -   `0`=>`0.`=>`0.0`=>`0.01` 中间两步不会触发onChange，因为如果订正会一直停留在0导致永远无法到达想要的值
    -   min=10 的情况下, 输入 `1`=>`12` 第一步 `1` 不会触发onChange也不会订正数据，因为数字是一个一个输入的

3.  如果输入时没触发 onChange，会在 onBlur 检测数据正确性并触发 onChange

4.  在 `1.24` 版本加入大数支持，通过 `stringMode` 开启大数或高精度小数支持，输入输出都变为 `String` 类型，具体参考[大数与高精度小数](#bignumber-container)

5.  如果需要输入小数，需设置 `precision` 小数点位数

## API

### NumberPicker

| 参数              | 说明                                                                                                                                               | 类型                                                                                                                                                                            | 默认值    | 是否必填 | 支持版本 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------- | -------- |
| size              | 大小                                                                                                                                               | 'large' \| 'medium' \| 'small'                                                                                                                                                  | 'medium'  |          | -        |
| type              | 设置类型(当 device 为 phone 时，NumberPicker 的类型强制为 normal，不可通过 type 修改)                                                              | 'normal' \| 'inline'                                                                                                                                                            | 'normal'  |          | -        |
| value             | 当前值                                                                                                                                             | number \| string                                                                                                                                                                | -         |          | -        |
| defaultValue      | 默认值                                                                                                                                             | number \| string                                                                                                                                                                | -         |          | -        |
| disabled          | 是否禁用                                                                                                                                           | boolean                                                                                                                                                                         | -         |          | -        |
| step              | 步长                                                                                                                                               | number \| string                                                                                                                                                                | 1         |          | -        |
| precision         | 保留小数点后位数                                                                                                                                   | number                                                                                                                                                                          | 0         |          | -        |
| editable          | 用户是否可以输入                                                                                                                                   | boolean                                                                                                                                                                         | true      |          | -        |
| autoFocus         | 自动焦点                                                                                                                                           | boolean                                                                                                                                                                         | -         |          | -        |
| onChange          | 数值被改变的事件<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 新的数值。<br/>_e_: DOM 事件对象。                                                  | (value: number \| string \| undefined, e: (React.FocusEvent<HTMLInputElement> \| React.KeyboardEvent<HTMLInputElement>) & { triggerType: 'up' \| 'down' \| undefined }) => void | func.noop |          | -        |
| onKeyDown         | 键盘按下<br/><br/>**签名**:<br/>**参数**:<br/>_e_: DOM 事件对象。                                                                                  | InputProps['onKeyDown']                                                                                                                                                         | func.noop |          | -        |
| onFocus           | 焦点获得<br/><br/>**签名**:<br/>**参数**:<br/>_e_: DOM 事件对象。                                                                                  | InputProps['onFocus']                                                                                                                                                           | -         |          | -        |
| onBlur            | 焦点失去<br/><br/>**签名**:<br/>**参数**:<br/>_e_: DOM 事件对象。                                                                                  | InputProps['onBlur']                                                                                                                                                            | func.noop |          | -        |
| onCorrect         | 数值订正后的回调<br/><br/>**签名**:<br/>**参数**:<br/>_obj_: 包含 currentValue 和 oldValue 的对象。                                                | (obj: { currentValue: number \| string; oldValue: number \| string }) => void                                                                                                   | func.noop |          | -        |
| max               | 最大值                                                                                                                                             | number \| string                                                                                                                                                                | -         |          | -        |
| min               | 最小值                                                                                                                                             | number \| string                                                                                                                                                                | -         |          | -        |
| format            | 格式化当前值<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 当前的数值。<br/>**返回值**:<br/>格式化后的值，可以是字符串或数字。                     | (value: string \| number) => string \| number                                                                                                                                   | -         |          | -        |
| hasTrigger        | 是否展示点击按钮                                                                                                                                   | boolean                                                                                                                                                                         | true      |          | -        |
| alwaysShowTrigger | 是否一直显示点击按钮(无须hover)                                                                                                                    | boolean                                                                                                                                                                         | false     |          | -        |
| label             | 内联 左侧label                                                                                                                                     | React.ReactNode                                                                                                                                                                 | -         |          | -        |
| innerAfter        | 内联 右侧附加内容                                                                                                                                  | React.ReactNode                                                                                                                                                                 | -         |          | -        |
| upBtnProps        | 增加按钮的props                                                                                                                                    | ButtonProps                                                                                                                                                                     | -         |          | -        |
| downBtnProps      | 减少按钮的props                                                                                                                                    | ButtonProps                                                                                                                                                                     | -         |          | -        |
| isPreview         | 是否为预览态                                                                                                                                       | boolean                                                                                                                                                                         | -         |          | -        |
| renderPreview     | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 当前值。<br/>_props_: 传入的组件参数。<br/>**返回值**:<br/>Element 渲染内容。 | (value: number \| string, props: NumberPickerProps) => React.ReactNode                                                                                                          | -         |          | -        |
| stringMode        | 开启大数支持，输入输出均为string类型                                                                                                               | boolean                                                                                                                                                                         | false     |          | 1.24     |
| state             | 状态                                                                                                                                               | 'error' \| 'success'                                                                                                                                                            | -         |          | -        |

## 无障碍键盘操作指南

| 按键       | 说明     |
| :--------- | :------- |
| Up Arrow   | 数字增加 |
| Down Arrow | 数字减小 |
