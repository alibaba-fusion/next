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

| 参数              | 说明                                                                                                                                                                                                                                              | 类型             | 默认值     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------- |
| trigger         | 触发弹层显示或隐藏的元素                                                                                                                                                                                                                                    | ReactElement   | null    |
| triggerType     | 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']                                                                                                                                                                       | String/Array   | 'click' |
| visible         | 是否显示                                                                                                                                                                                                                                            | Boolean        | -       |
| hasMask         | 是否显示遮罩                                                                                                                                                                                                                                          | Boolean        | true    |
| closeable       | 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：<br>**mask** 表示点击遮罩区域可以关闭对话框<br>**esc** 表示按下 esc 键可以关闭对话框<br>如 'mask' 或 'esc,mask'<br>如果设置为 true，则以上关闭方式全部生效<br>如果设置为 false，则以上关闭方式全部失效                                                                    | String/Boolean | true    |
| placement       | 位于页面的位置<br><br>**可选值**:<br>'top', 'right', 'bottom', 'left'                                                                                                                                                                                     | Enum           | 'right' |
| onVisibleChange | 弹层显示或隐藏时触发的回调<br><br>**签名**:<br>Function(visible: Boolean, type: String) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否显示<br>_type_: {String} 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发 | Function       | -       |
| animation       | 显示隐藏时动画的播放方式                                                                                                                                                                                                                                    | Object/Boolean | -       |

## ARIA and Keyboard

| 键盘        | 说明                                       |
| :-------- | :--------------------------------------- |
| esc       | 按下ESC键将会关闭dialog而不触发任何的动作                |
| tab       | 正向聚焦到任何可以被聚焦的元素， 在Dialog显示的时候，焦点始终保持在框体内 |
| shift+tab | 反向聚焦到任何可以被聚焦的元素，在Dialog显示的时候，焦点始终保持在框体内  |
