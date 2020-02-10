# NumberPicker

-   category: Components
-   family: DataEntry
-   chinese: 数字输入框
-   type: 表单

---

## 开发指南

### 何时使用

数字选择器，并对输入的数据做正确性检查、自动订正。

### 注意事项

1.  自动订正可能会导致onChange返回值和你输入的数据不一样。

2.  其中有些中间输入状态无法触发onChange，主要考虑到自动订正可能永远无法到达想要的值了。例如：

    -   `0`=>`0.`=>`0.0`=>`0.01`  中间两步不会触发onChange，因为如果订正会一直停留在0导致永远无法到达想要的值
    -   min=10 的情况下, 输入 `1`=>`12`  第一步 `1` 不会触发onChange也不会订正数据，因为数字是一个一个输入的

3.  如果输入时没触发onChange，会在onBlur检测数据正确性并触发onChange

## API

### NumberPicker

| 参数            | 说明                                                                                                                                             | 类型            | 默认值       |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| size          | 大小<br><br>**可选值**:<br>'large', 'medium'                                                                                                        | Enum          | 'medium'  |
| type          | 设置类型<br><br>**可选值**:<br>'normal'(普通)<br>'inline'(内联)                                                                                           | Enum          | 'normal'  |
| value         | 当前值                                                                                                                                            | Number        | -         |
| defaultValue  | 默认值                                                                                                                                            | Number        | -         |
| disabled      | 是否禁用                                                                                                                                           | Boolean       | -         |
| step          | 步长                                                                                                                                             | Number/String | 1         |
| precision     | 保留小数点后位数                                                                                                                                       | Number        | 0         |
| editable      | 用户是否可以输入                                                                                                                                       | Boolean       | true      |
| autoFocus     | 自动焦点                                                                                                                                           | Boolean       | -         |
| onChange      | 数值被改变的事件<br><br>**签名**:<br>Function(value: Number, e: Event) => void<br>**参数**:<br>_value_: {Number} 数据<br>_e_: {Event} DOM事件对象                | Function      | func.noop |
| onKeyDown     | 键盘按下<br><br>**签名**:<br>Function() => void                                                                                                      | Function      | func.noop |
| onFocus       | 焦点获得<br><br>**签名**:<br>Function() => void                                                                                                      | Function      | -         |
| onBlur        | 焦点失去<br><br>**签名**:<br>Function() => void                                                                                                      | Function      | func.noop |
| onCorrect     | 数值订正后的回调<br><br>**签名**:<br>Function(obj: Object) => void<br>**参数**:<br>_obj_: {Object} {currentValue,oldValue:String}                          | Function      | func.noop |
| max           | 最大值                                                                                                                                            | Number        | Infinity  |
| min           | 最小值                                                                                                                                            | Number        | -Infinity |
| format        | 格式化当前值<br><br>**签名**:<br>Function(value: Number) => String/Number<br>**参数**:<br>_value_: {Number} null<br>**返回值**:<br>{String/Number} null<br> | Function      | -         |
| upBtnProps    | 增加按钮的props                                                                                                                                     | Object        | -         |
| downBtnProps  | 减少按钮的props                                                                                                                                     | Object        | -         |
| label         | 内联 label                                                                                                                                       | ReactNode     | -         |
| innerAfter    | inner after                                                                                                                                    | ReactNode     | -         |
| isPreview     | 是否为预览态                                                                                                                                         | Boolean       | -         |
| renderPreview | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: number) => void<br>**参数**:<br>_value_: {number} 评分值                                              | Function      | -         |
| device        | 预设屏幕宽度<br><br>**可选值**:<br>'phone', 'tablet', 'desktop'                                                                                         | Enum          | -         |

## ARIA and KeyBoard

| 按键         | 说明   |
| :--------- | :--- |
| Up Arrow   | 数字增加 |
| Down Arrow | 数字减小 |
