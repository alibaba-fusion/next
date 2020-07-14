# Button

-   category: Components
-   family: General
-   chinese: 按钮
-   type: 表单

---

按钮用于开始一个即时操作。

## Guide

### 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## API

### Button

| 参数        | 说明                                                                                             | 类型          | 默认值      |
| --------- | ---------------------------------------------------------------------------------------------- | ----------- | -------- |
| size      | 按钮的尺寸<br><br>**可选值**:<br>'small', 'medium', 'large'                                            | Enum        | 'medium' |
| type      | 按钮的类型<br><br>**可选值**:<br>'primary', 'secondary', 'normal'                                      | Enum        | 'normal' |
| icons     | 按钮中可配置的 Icon，格式为 { loading: <Icon type="loading" /> }                                          | Object      | {}       |
| iconSize  | 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小                                                                   | Enum/Number | -        |
| htmlType  | 当 component = 'button' 时，设置 button 标签的 type 值<br><br>**可选值**:<br>'submit', 'reset', 'button'   | Enum        | 'button' |
| component | 设置标签类型<br><br>**可选值**:<br>'button', 'a', 'div', 'span'                                         | Enum        | 'button' |
| loading   | 设置按钮的载入状态                                                                                      | Boolean     | false    |
| ghost     | 是否为幽灵按钮<br><br>**可选值**:<br>true, false, 'light', 'dark'                                        | Enum        | false    |
| text      | 是否为文本按钮                                                                                        | Boolean     | false    |
| warning   | 是否为警告按钮                                                                                        | Boolean     | false    |
| disabled  | 是否禁用                                                                                           | Boolean     | false    |
| onClick   | 点击按钮的回调<br><br>**签名**:<br>Function(e: Object) => void<br>**参数**:<br>_e_: {Object} Event Object | Function    | () => {} |

### Button.Group

| 参数   | 说明                  | 类型     | 默认值      |
| ---- | ------------------- | ------ | -------- |
| size | 统一设置 Button 组件的按钮大小 | String | 'medium' |

## ARIA and KeyBoard

| 按键    | 说明          |
| :---- | :---------- |
| Enter | 触发onClick事件 |
| SPACE | 触发onClick事件 |
