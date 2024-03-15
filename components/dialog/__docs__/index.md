# Dialog

-   chinese: 弹窗
-   family: Feedback
-   category: Components
-   type: 弹层

---

对话框。

## 何时使用

对话框是用于在不离开主路径的情况下，提供用户快速执行简单的操作、确认用户信息或反馈提示的辅助窗口。

### `v2` 版本更新指示

1.25 版本增加 v2 api 支持开启新版本弹窗，功能如下

功能变化：

-   位置不再通过 js 计算，通过 css 完成，响应式性能更好
-   新增 `closeIcon` 可定制关闭按钮 icon
-   新增 `width` 固定弹窗宽度，默认值为 520px, 或者设置 auto 跟随内容变化。
-   新增 `dialogRender` 配合 `react-draggable` 以支持拖拽弹窗

API 变化：

-   移除了 `align` `shouldUpdatePosition`, Dialog 会自动调整位置
-   移除了 `minMargin` , 改用 `top` `bottom`
-   移除了 `isFullScreen` ，改用 `overflowScroll` 默认开启超出滚动

## API

### Dialog

| 参数                 | 说明                                                                                                                                                                             | 类型                                                                               | 默认值                                 | 是否必填 | 支持版本 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------- | -------- | -------- |
| visible              | 是否显示                                                                                                                                                                         | boolean                                                                            | false                                  |          | -        |
| title                | 标题                                                                                                                                                                             | React.ReactNode                                                                    | -                                      |          | -        |
| children             | 内容                                                                                                                                                                             | React.ReactNode                                                                    | -                                      |          | -        |
| footer               | 底部内容，设置为 false，则不进行显示                                                                                                                                             | boolean \| React.ReactNode                                                         | -                                      |          | -        |
| footerAlign          | 底部按钮的对齐方式                                                                                                                                                               | 'left' \| 'center' \| 'right'                                                      | 'right'                                |          | -        |
| footerActions        | 指定确定按钮和取消按钮是否存在以及如何排列                                                                                                                                       | Array<'ok' \| 'cancel'>                                                            | ['ok', 'cancel']                       |          | -        |
| cache                | 隐藏时是否保留子节点，不销毁                                                                                                                                                     | boolean                                                                            | false                                  |          | 1.23     |
| onOk                 | 在点击确定按钮时触发的回调函数                                                                                                                                                   | (event: React.MouseEvent) => void                                                  | -                                      |          | -        |
| onCancel             | 在点击取消按钮时触发的回调函数                                                                                                                                                   | (event: React.MouseEvent) => void                                                  | -                                      |          | -        |
| okProps              | 应用于确定按钮的属性对象                                                                                                                                                         | ButtonProps                                                                        | -                                      |          | -        |
| cancelProps          | 应用于取消按钮的属性对象                                                                                                                                                         | ButtonProps                                                                        | -                                      |          | -        |
| closeable            | [废弃] 同 closeMode, 控制对话框关闭的方式                                                                                                                                        | 'close' \| 'mask' \| 'esc' \| boolean \| 'close,mask' \| 'close,esc' \| 'mask,esc' | 'esc,close'                            |          | -        |
| closeMode            | [推荐] 控制对话框关闭的方式                                                                                                                                                      | CloseMode[] \| CloseMode                                                           | -                                      |          | 1.21     |
| onClose              | 对话框关闭时触发的回调函数                                                                                                                                                       | (trigger: string, event: React.MouseEvent \| KeyboardEvent) => void                | -                                      |          | -        |
| afterClose           | 对话框关闭后触发的回调函数，如果有动画，则在动画结束后触发                                                                                                                       | () => void                                                                         | -                                      |          | -        |
| hasMask              | 是否显示遮罩                                                                                                                                                                     | boolean                                                                            | -                                      |          | -        |
| animation            | 显示隐藏时动画的播放方式                                                                                                                                                         | Record<'in' \| 'out', string> \| false                                             | \{ in: 'fadeInUp', out: 'fadeOutUp' \} |          | -        |
| autoFocus            | 对话框弹出时是否自动获得焦点                                                                                                                                                     | boolean                                                                            | false                                  |          | -        |
| align                | [v2 废弃] 对话框对齐方式，具体见 Overlay 文档                                                                                                                                    | string \| boolean                                                                  | -                                      |          | -        |
| isFullScreen         | [v2 废弃] 当对话框高度超过浏览器视口高度时，是否显示所有内容而不是出现滚动条以保证对话框完整显示在浏览器视口内，该属性仅在对话框垂直水平居中时生效，即 align 被设置为 'cc cc' 时 | boolean                                                                            | -                                      |          | -        |
| shouldUpdatePosition | [v2 废弃] 是否在对话框重新渲染时及时更新对话框位置，一般用于对话框高度变化后依然能保证原来的对齐方式                                                                             | boolean                                                                            | -                                      |          | -        |
| minMargin            | [v2 废弃] 对话框距离浏览器顶部和底部的最小间距，align 被设置为 'cc cc' 并且 isFullScreen 被设置为 true 时不生效                                                                  | number                                                                             | 40                                     |          | -        |
| overlayProps         | 透传到弹层组件的属性对象                                                                                                                                                         | OverlayProps                                                                       | -                                      |          | -        |
| locale               | 自定义国际化文案对象                                                                                                                                                             | Partial<{<br/> ok: string;<br/> cancel: string;<br/> }>                            | -                                      |          | -        |
| height               | 对话框的高度样式属性                                                                                                                                                             | string \| number                                                                   | -                                      |          | -        |
| width                | 弹窗宽度                                                                                                                                                                         | string \| number                                                                   | -                                      |          | 1.25     |
| popupContainer       | 自定义弹窗挂载位置                                                                                                                                                               | string \| HTMLElement \| ((target?: HTMLElement) => HTMLElement)                   | -                                      |          | -        |
| v2                   | 开启 v2 版本弹窗                                                                                                                                                                 | false \| undefined                                                                 | false                                  |          | -        |
| noPadding            | 去除 body 内间距                                                                                                                                                                 | boolean                                                                            | false                                  |          | 1.26     |
| closeIcon            | 定制关闭按钮 icon                                                                                                                                                                | React.ReactNode                                                                    | -                                      |          | 1.25     |

### Dialog V2

| 参数             | 说明                                                                                                                                                                             | 类型                                                                | 默认值                                 | 是否必填 | 支持版本 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------- | -------- | -------- |
| visible          | 是否显示                                                                                                                                                                         | boolean                                                             | false                                  |          | -        |
| title            | 标题                                                                                                                                                                             | React.ReactNode                                                     | -                                      |          | -        |
| children         | 内容                                                                                                                                                                             | React.ReactNode                                                     | -                                      |          | -        |
| footer           | 底部内容，设置为 false，则不进行显示                                                                                                                                             | boolean \| React.ReactNode                                          | -                                      |          | -        |
| footerAlign      | 底部按钮的对齐方式                                                                                                                                                               | 'left' \| 'center' \| 'right'                                       | 'right'                                |          | -        |
| footerActions    | 指定确定按钮和取消按钮是否存在以及如何排列                                                                                                                                       | Array<'ok' \| 'cancel'>                                             | ['ok', 'cancel']                       |          | -        |
| cache            | 隐藏时是否保留子节点，不销毁                                                                                                                                                     | boolean                                                             | false                                  |          | 1.23     |
| onOk             | 在点击确定按钮时触发的回调函数                                                                                                                                                   | (event: React.MouseEvent) => void                                   | -                                      |          | -        |
| onCancel         | 在点击取消按钮时触发的回调函数                                                                                                                                                   | (event: React.MouseEvent) => void                                   | -                                      |          | -        |
| okProps          | 应用于确定按钮的属性对象                                                                                                                                                         | ButtonProps                                                         | -                                      |          | -        |
| cancelProps      | 应用于取消按钮的属性对象                                                                                                                                                         | ButtonProps                                                         | -                                      |          | -        |
| closeMode        | [推荐] 控制对话框关闭的方式                                                                                                                                                      | CloseMode[] \| CloseMode                                            | -                                      |          | 1.21     |
| onClose          | 对话框关闭时触发的回调函数                                                                                                                                                       | (trigger: string, event: React.MouseEvent \| KeyboardEvent) => void | -                                      |          | -        |
| afterClose       | 对话框关闭后触发的回调函数，如果有动画，则在动画结束后触发                                                                                                                       | () => void                                                          | -                                      |          | -        |
| hasMask          | 是否显示遮罩                                                                                                                                                                     | boolean                                                             | -                                      |          | -        |
| animation        | 显示隐藏时动画的播放方式                                                                                                                                                         | Record<'in' \| 'out', string> \| false                              | \{ in: 'fadeInUp', out: 'fadeOutUp' \} |          | -        |
| autoFocus        | 对话框弹出时是否自动获得焦点                                                                                                                                                     | boolean                                                             | false                                  |          | -        |
| isFullScreen     | [v2 废弃] 当对话框高度超过浏览器视口高度时，是否显示所有内容而不是出现滚动条以保证对话框完整显示在浏览器视口内，该属性仅在对话框垂直水平居中时生效，即 align 被设置为 'cc cc' 时 | boolean                                                             | -                                      |          | -        |
| minMargin        | [v2 废弃] 对话框距离浏览器顶部和底部的最小间距，align 被设置为 'cc cc' 并且 isFullScreen 被设置为 true 时不生效                                                                  | number                                                              | 40                                     |          | -        |
| overlayProps     | 透传到弹层组件的属性对象                                                                                                                                                         | OverlayProps                                                        | -                                      |          | -        |
| locale           | 自定义国际化文案对象                                                                                                                                                             | Partial<{<br/> ok: string;<br/> cancel: string;<br/> }>             | -                                      |          | -        |
| height           | 对话框的高度样式属性                                                                                                                                                             | string \| number                                                    | -                                      |          | -        |
| popupContainer   | 自定义弹窗挂载位置                                                                                                                                                               | string \| HTMLElement \| ((target?: HTMLElement) => HTMLElement)    | -                                      |          | -        |
| v2               | 开启 v2 版本弹窗                                                                                                                                                                 | true                                                                | false                                  |          | -        |
| closeIcon        | 定制关闭按钮 icon                                                                                                                                                                | React.ReactNode                                                     | -                                      |          | 1.25     |
| width            | 弹窗宽度                                                                                                                                                                         | string \| number                                                    | -                                      |          | 1.25     |
| noPadding        | 去除 body 内间距                                                                                                                                                                 | boolean                                                             | false                                  |          | 1.26     |
| top              | [v2] 弹窗上边距。默认 100，设置 centered=true 后默认 40                                                                                                                          | number                                                              | -                                      |          | 1.25     |
| bottom           | [v2] 弹窗下边距                                                                                                                                                                  | number                                                              | 40                                     |          | 1.25     |
| overflowScroll   | [v2] 对话框高度超过浏览器视口高度时，对话框是否展示滚动条。关闭此功后对话框会随高度撑开页面                                                                                      | boolean                                                             | -                                      |          | 1.25     |
| centered         | [v2] 弹窗居中对齐                                                                                                                                                                | boolean                                                             | -                                      |          | 1.25     |
| dialogRender     | [v2] 自定义渲染弹窗                                                                                                                                                              | (modal: React.ReactNode) => React.ReactNode                         | -                                      |          | -        |
| wrapperClassName | [v2] 最外包裹层 className                                                                                                                                                        | string                                                              | -                                      |          | 1.26     |
| wrapperStyle     | [v2] 最外包裹层 style                                                                                                                                                            | React.CSSProperties                                                 | -                                      |          | 1.26     |

<!-- api-extra-start -->

### Dialog.alert(config)/Dialog.confirm(config)

以下只列举 config 可以传入的常用属性，Dialog 组件的其他属性也可以传入

| 属性         | 说明                           | 类型      | 默认值   |
| :----------- | :----------------------------- | :-------- | :------- |
| title        | 标题                           | ReactNode | ''       |
| content      | 内容                           | ReactNode | ''       |
| onOk         | 在点击确定按钮时触发的回调函数 | Function  | () => {} |
| onCancel     | 在点击取消按钮时触发的回调函数 | Function  | () => {} |
| messageProps | 内嵌 Message 组件属性对象      | Object    | {}       |

### Dialog.show

以下只列举 config 可以传入的常用属性，Dialog 组件其他属性也可以传入

| 属性     | 说明                           | 类型      | 默认值   |
| :------- | :----------------------------- | :-------- | :------- |
| title    | 标题                           | ReactNode | ''       |
| content  | 内容                           | ReactNode | ''       |
| onOk     | 在点击确定按钮时触发的回调函数 | Function  | () => {} |
| onCancel | 在点击取消按钮时触发的回调函数 | Function  | () => {} |

### Dialog.withContext

上面的`Dialog.alert/confirm/show`这种命令式 API，虽然使用起来很方便，但是如果你的应用使用了多次`ConfigProvider`，当你通过命令式 API 调起的 Dialog 的时候，它到底会使用哪份 fusion config（比如 prefix、文案），是一件无法确定的事情（详见[#2005](https://github.com/alibaba-fusion/next/issues/2005)）。你可以从 withContext Example 看到这个问题。

为了解决这个问题，我们提供了一个新的 API：`Dialog.withContext`。
对于要使用命令式 API 的组件，使用`Dialog.withContext`HOC 来包裹一下。然后你就可以在你的组件 props.contextDialog 拿到 `alert, confirm, show` 这 3 个命令式方法。通过这 3 个方法来调起的 Dialog，它使用的 fusion config 是符合预期的。请看 withContext Example 的使用示例。

<!-- api-extra-end -->

## 无障碍键盘操作指南

| 键盘      | 说明                                                                       |
| :-------- | :------------------------------------------------------------------------- |
| esc       | 按下 ESC 键将会关闭 dialog 而不触发任何的动作                              |
| tab       | 正向聚焦到任何可以被聚焦的元素，在 Dialog 显示的时候，焦点始终保持在框体内 |
| shift+tab | 反向聚焦到任何可以被聚焦的元素，在 Dialog 显示的时候，焦点始终保持在框体内 |

## FAQ

### 对话框高度发生变化时无法感知重新使用 JS 定位？

Dialog 组件默认使用 JS 进行定位，当内容过长时使用 JS 自动调整对话框高度，以使得操作按钮在可视区域内出现，但是这会造成在对话框高度发生变化时无法感知重新使用 JS 定位，有下面两种解决方案：

1.  设置 `shouldUpdatePosition`，在内容更新后，会重新进行定位。

2.  使用 `isFullScreen`，启动 CSS 进行定位，无论对话框高度如何变化都能自适应居中，但是当内容过长时无法让操作按钮在可视区域内出现。
