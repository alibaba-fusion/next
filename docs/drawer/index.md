# Drawer

-   chinese: 抽屉
-   family: Feedback
-   category: Components
-   type: 弹层

---

## 使用指南

抽屉

### 何时使用

抽屉是用于在不离开主路径的情况下，提供用户快速执行简单的操作、确认用户信息或反馈提示的辅助窗口。

## API

### Drawer

| 参数        | 说明                                                                                                                                                                                                               | 类型             | 默认值      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | -------- |
| width     | 宽度，仅在 placement是 left right 的时候生效                                                                                                                                                                                | Number/String  | -        |
| height    | 高度，仅在 placement是 top bottom 的时候生效                                                                                                                                                                                | Number/String  | -        |
| closeable | 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：<br>**close** 表示点击关闭按钮可以关闭对话框<br>**mask** 表示点击遮罩区域可以关闭对话框<br>**esc** 表示按下 esc 键可以关闭对话框<br>如 'close' 或 'close,esc,mask'<br>如果设置为 true，则以上关闭方式全部生效<br>如果设置为 false，则以上关闭方式全部失效 | String/Boolean | true     |
| onClose   | 对话框关闭时触发的回调函数<br><br>**签名**:<br>Function(trigger: String, event: Object) => void<br>**参数**:<br>_trigger_: {String} 关闭触发行为的描述字符串<br>_event_: {Object} 关闭时事件对象                                                     | Function       | () => {} |
| placement | 位于页面的位置<br><br>**可选值**:<br>'top', 'right', 'bottom', 'left'                                                                                                                                                      | Enum           | 'right'  |
| title     | 标题                                                                                                                                                                                                               | ReactNode      | -        |
| bodyStyle | body上的样式                                                                                                                                                                                                         | Object         | -        |
| visible   | 是否显示                                                                                                                                                                                                             | Boolean        | -        |
| hasMask   | 是否显示遮罩                                                                                                                                                                                                           | Boolean        | true     |
| animation | 显示隐藏时动画的播放方式                                                                                                                                                                                                     | Object/Boolean | -        |

## ARIA and Keyboard

| 键盘        | 说明                                       |
| :-------- | :--------------------------------------- |
| esc       | 按下ESC键将会关闭dialog而不触发任何的动作                |
| tab       | 正向聚焦到任何可以被聚焦的元素， 在Dialog显示的时候，焦点始终保持在框体内 |
| shift+tab | 反向聚焦到任何可以被聚焦的元素，在Dialog显示的时候，焦点始终保持在框体内  |
