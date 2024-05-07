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

    -   `0`=>`0.`=>`0.0`=>`0.01` 中间两步不会触发 onChange，因为如果订正会一直停留在 0 导致永远无法到达想要的值
    -   min=10 的情况下，输入 `1`=>`12` 第一步 `1` 不会触发 onChange 也不会订正数据，因为数字是一个一个输入的

3.  如果输入时没触发 onChange，会在 onBlur 检测数据正确性并触发 onChange

4.  在 `1.24` 版本加入大数支持，通过 `stringMode` 开启大数或高精度小数支持，输入输出都变为 `String` 类型，具体参考[大数与高精度小数](#bignumber-container)

5.  如果需要输入小数，需设置 `precision` 小数点位数

## API

### NumberPicker

| 参数              | 说明                                                                                                                                                                                                                                                  | 类型          | 默认值    | 版本支持 |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- | -------- |
| size              | 大小<br/><br/>**可选值**:<br/>'large', 'medium', 'small'                                                                                                                                                                                              | Enum          | 'medium'  |          |
| type              | 设置类型 (当 device 为 phone/tablet 时，NumberPicker 的类型强制为 inline，不可通过 type 修改)<br/><br/>**可选值**:<br/>'normal'(普通)<br/>'inline'(内联)                                                                                              | Enum          | 'normal'  |          |
| value             | 当前值                                                                                                                                                                                                                                                | Number/String | -         |          |
| defaultValue      | 默认值                                                                                                                                                                                                                                                | Number/String | -         |          |
| disabled          | 是否禁用                                                                                                                                                                                                                                              | Boolean       | -         |          |
| step              | 步长                                                                                                                                                                                                                                                  | Number/String | 1         |          |
| precision         | 保留小数点后位数                                                                                                                                                                                                                                      | Number        | 0         |          |
| editable          | 用户是否可以输入                                                                                                                                                                                                                                      | Boolean       | true      |          |
| autoFocus         | 自动焦点                                                                                                                                                                                                                                              | Boolean       | -         |          |
| onChange          | 数值被改变的事件<br/><br/>**签名**:<br/>Function(value: Number/String, e: Event) => void<br/>**参数**:<br/>_value_: {Number/String} 数据<br/>_e_: {Event} DOM 事件对象                                                                                | Function      | func.noop |          |
| onKeyDown         | 键盘按下<br/><br/>**签名**:<br/>Function(e: Event) => void<br/>**参数**:<br/>_e_: {Event} DOM 事件对象                                                                                                                                                | Function      | func.noop |          |
| onFocus           | 焦点获得<br/><br/>**签名**:<br/>Function(e: Event) => void<br/>**参数**:<br/>_e_: {Event} DOM 事件对象                                                                                                                                                | Function      | -         |          |
| onBlur            | 焦点失去<br/><br/>**签名**:<br/>Function(e: Event) => void<br/>**参数**:<br/>_e_: {Event} DOM 事件对象                                                                                                                                                | Function      | func.noop |          |
| onCorrect         | 数值订正后的回调<br/><br/>**签名**:<br/>Function(obj: Object) => void<br/>**参数**:<br/>_obj_: {Object} {currentValue,oldValue:String}                                                                                                                | Function      | func.noop |          |
| max               | 最大值                                                                                                                                                                                                                                                | Number/String | -         |          |
| min               | 最小值                                                                                                                                                                                                                                                | Number/String | -         |          |
| format            | 格式化当前值<br/><br/>**签名**:<br/>Function(value: Number) => String/Number<br/>**参数**:<br/>_value_: {Number} null<br/>**返回值**:<br/>{String/Number} null<br/>                                                                                   | Function      | -         |          |
| upBtnProps        | 增加按钮的 props                                                                                                                                                                                                                                      | Object        | -         |          |
| downBtnProps      | 减少按钮的 props                                                                                                                                                                                                                                      | Object        | -         |          |
| label             | 内联 左侧 label                                                                                                                                                                                                                                       | ReactNode     | -         |          |
| innerAfter        | 内联 右侧附加内容                                                                                                                                                                                                                                     | ReactNode     | -         |          |
| isPreview         | 是否为预览态                                                                                                                                                                                                                                          | Boolean       | -         |          |
| renderPreview     | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>Function(value: Number/String, props: Object) => reactNode<br/>**参数**:<br/>_value_: {Number/String} 当前值<br/>_props_: {Object} 传入的组件参数<br/>**返回值**:<br/>{reactNode} Element 渲染内容<br/> | Function      | -         |          |
| device            | 预设屏幕宽度<br/><br/>**可选值**:<br/>'phone', 'tablet', 'desktop'                                                                                                                                                                                    | Enum          | -         |          |
| hasTrigger        | 是否展示点击按钮                                                                                                                                                                                                                                      | Boolean       | true      |          |
| alwaysShowTrigger | 是否一直显示点击按钮 (无须 hover)                                                                                                                                                                                                                     | Boolean       | false     |          |
| stringMode        | 开启大数支持，输入输出均为 string 类型                                                                                                                                                                                                                | Boolean       | false     | 1.24     |

## 无障碍键盘操作指南

| 按键       | 说明     |
| :--------- | :------- |
| Up Arrow   | 数字增加 |
| Down Arrow | 数字减小 |
