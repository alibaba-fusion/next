# Dialog

-   chinese: 弹窗
-   family: Feedback
-   category: Components
-   type: 弹层

---

对话框。

## 何时使用

对话框是用于在不离开主路径的情况下，提供用户快速执行简单的操作、确认用户信息或反馈提示的辅助窗口。

## API

### Dialog

| 参数                   | 说明                                                                                                                                                                                                                                     | 类型                  | 默认值                                                                               | 版本支持 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------- | ---- |
| visible              | 是否显示                                                                                                                                                                                                                                   | Boolean             | false                                                                             |      |
| title                | 标题                                                                                                                                                                                                                                     | ReactNode           | -                                                                                 |      |
| children             | 内容                                                                                                                                                                                                                                     | ReactNode           | -                                                                                 |      |
| footer               | 底部内容，设置为 false，则不进行显示                                                                                                                                                                                                                  | Boolean/ReactNode   | [&lt;Button type="primary"&gt;确定&lt;/Button&gt;, &lt;Button&gt;取消&lt;/Button&gt;] |      |
| footerAlign          | 底部按钮的对齐方式<br/><br/>**可选值**:<br/>'left', 'center', 'right'                                                                                                                                                                              | Enum                | 'right'                                                                           |      |
| footerActions        | 指定确定按钮和取消按钮是否存在以及如何排列,<br><br>**可选值**：<br/>['ok', 'cancel']（确认取消按钮同时存在，确认按钮在左）<br/>['cancel', 'ok']（确认取消按钮同时存在，确认按钮在右）<br/>['ok']（只存在确认按钮）<br/>['cancel']（只存在取消按钮）                                                                     | Array               | ['ok', 'cancel']                                                                  |      |
| onOk                 | 在点击确定按钮时触发的回调函数<br/><br/>**签名**:<br/>Function(event: Object) => void<br/>**参数**:<br/>_event_: {Object} 点击事件对象                                                                                                                          | Function            | () => {}                                                                          |      |
| onCancel             | 在点击取消按钮时触发的回调函数<br/><br/>**签名**:<br/>Function(event: Object) => void<br/>**参数**:<br/>_event_: {Object} 点击事件对象                                                                                                                          | Function            | () => {}                                                                          |      |
| okProps              | 应用于确定按钮的属性对象                                                                                                                                                                                                                           | Object              | {}                                                                                |      |
| cancelProps          | 应用于取消按钮的属性对象                                                                                                                                                                                                                           | Object              | {}                                                                                |      |
| closeable            | [废弃]同closeMode, 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：<br/>**close** 表示点击关闭按钮可以关闭对话框<br/>**mask** 表示点击遮罩区域可以关闭对话框<br/>**esc** 表示按下 esc 键可以关闭对话框<br/>如 'close' 或 'close,esc,mask'<br/>如果设置为 true，则以上关闭方式全部生效<br/>如果设置为 false，则以上关闭方式全部失效 | String/Boolean      | 'esc,close'                                                                       |      |
| closeMode            | [推荐]1.21.x 支持控制对话框关闭的方式，值可以为字符串或者数组，其中字符串、数组均为以下值的枚举：<br/>**close** 表示点击关闭按钮可以关闭对话框<br/>**mask** 表示点击遮罩区域可以关闭对话框<br/>**esc** 表示按下 esc 键可以关闭对话框<br/>如 'close' 或 ['close','esc','mask'], \[]                                             | Array&lt;Enum>/Enum | -                                                                                 | 1.21 |
| onClose              | 对话框关闭时触发的回调函数<br/><br/>**签名**:<br/>Function(trigger: String, event: Object) => void<br/>**参数**:<br/>_trigger_: {String} 关闭触发行为的描述字符串<br/>_event_: {Object} 关闭时事件对象                                                                     | Function            | () => {}                                                                          |      |
| afterClose           | 对话框关闭后触发的回调函数, 如果有动画，则在动画结束后触发<br/><br/>**签名**:<br/>Function() => void                                                                                                                                                                 | Function            | () => {}                                                                          |      |
| hasMask              | 是否显示遮罩                                                                                                                                                                                                                                 | Boolean             | true                                                                              |      |
| animation            | 显示隐藏时动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名                                                                                                                          | Object/Boolean      | { in: 'expandInDown', out: 'expandOutUp' }                                        |      |
| autoFocus            | 对话框弹出时是否自动获得焦点                                                                                                                                                                                                                         | Boolean             | false                                                                             |      |
| align                | 对话框对齐方式, 具体见Overlay文档                                                                                                                                                                                                                  | String/Boolean      | 'cc cc'                                                                           |      |
| isFullScreen         | 当对话框高度超过浏览器视口高度时，是否显示所有内容而不是出现滚动条以保证对话框完整显示在浏览器视口内，该属性仅在对话框垂直水平居中时生效，即 align 被设置为 'cc cc' 时                                                                                                                                            | Boolean             | false                                                                             |      |
| shouldUpdatePosition | 是否在对话框重新渲染时及时更新对话框位置，一般用于对话框高度变化后依然能保证原来的对齐方式                                                                                                                                                                                          | Boolean             | false                                                                             |      |
| minMargin            | 对话框距离浏览器顶部和底部的最小间距，align 被设置为 'cc cc' 并且 isFullScreen 被设置为 true 时不生效                                                                                                                                                                   | Number              | 40                                                                                |      |
| overlayProps         | 透传到弹层组件的属性对象                                                                                                                                                                                                                           | Object              | {}                                                                                |      |
| height               | 对话框的高度样式属性                                                                                                                                                                                                                             | String              | -                                                                                 |      |

<!-- api-extra-start -->

### Dialog.alert(config)/Dialog.confirm(config)

以下只列举 config 可以传入的常用属性，Dialog 组件的其他属性也可以传入

| 属性           | 说明                | 类型        | 默认值      |
| :----------- | :---------------- | :-------- | :------- |
| title        | 标题                | ReactNode | ''       |
| content      | 内容                | ReactNode | ''       |
| onOk         | 在点击确定按钮时触发的回调函数   | Function  | () => {} |
| onCancel     | 在点击取消按钮时触发的回调函数   | Function  | () => {} |
| messageProps | 内嵌 Message 组件属性对象 | Object    | {}       |

### Dialog.show

以下只列举 config 可以传入的常用属性，Dialog 组件其他属性也可以传入

| 属性       | 说明              | 类型        | 默认值      |
| :------- | :-------------- | :-------- | :------- |
| title    | 标题              | ReactNode | ''       |
| content  | 内容              | ReactNode | ''       |
| onOk     | 在点击确定按钮时触发的回调函数 | Function  | () => {} |
| onCancel | 在点击取消按钮时触发的回调函数 | Function  | () => {} |

### Dialog.withContext

上面的`Dialog.alert/confirm/show`这种命令式API，虽然使用起来很方便，但是如果你的应用使用了多次`ConfigProvider`，当你通过命令式API调起的Dialog的时候，它到底会使用哪份fusion config（比如prefix、文案），是一件无法确定的事情（详见[#2005](https://github.com/alibaba-fusion/next/issues/2005)）。你可以从 withContext Example 看到这个问题。

为了解决这个问题，我们提供了一个新的API：`Dialog.withContext`。
对于要使用命令式API的组件，使用`Dialog.withContext`HOC来包裹一下。然后你就可以在你的组件props.contextDialog拿到 `alert, confirm, show` 这3个命令式方法。通过这3个方法来调起的Dialog，它使用的fusion config是符合预期的。请看 withContext Example 的使用示例。

<!-- api-extra-end -->

## 无障碍键盘操作指南

| 键盘        | 说明                                       |
| :-------- | :--------------------------------------- |
| esc       | 按下ESC键将会关闭dialog而不触发任何的动作                |
| tab       | 正向聚焦到任何可以被聚焦的元素， 在Dialog显示的时候，焦点始终保持在框体内 |
| shift+tab | 反向聚焦到任何可以被聚焦的元素，在Dialog显示的时候，焦点始终保持在框体内  |

## FAQ

### 对话框高度发生变化时无法感知重新使用 JS 定位？

Dialog 组件默认使用 JS 进行定位，当内容过长时使用 JS 自动调整对话框高度，以使得操作按钮在可视区域内出现，但是这会造成在对话框高度发生变化时无法感知重新使用 JS 定位，有下面两种解决方案：

1.  设置 `shouldUpdatePosition`，在内容更新后，会重新进行定位。

2.  使用 `isFullScreen`，启动 CSS 进行定位，无论对话框高度如何变化都能自适应居中，但是当内容过长时无法让操作按钮在可视区域内出现。
