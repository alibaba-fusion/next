# Drawer

-   chinese: 抽屉
-   family: Feedback
-   category: Components
-   type: 弹层

---

抽屉组件。

## 何时使用

抽屉是用于在不离开主路径的情况下，提供用户快速执行简单的操作、确认用户信息或反馈提示的辅助窗口。

### `v2` 版本更新指示

1.25 版本增加 v2 api 支持开启新版本弹窗，功能如下

功能变化：

-   位置不再通过 js 计算，通过 css 完成，响应式性能更好
-   支持设置 `width/height` 固定弹窗宽度, 或者设置 auto 跟随内容变化
-   支持 Drawer.show() 快捷调用

## API

### Drawer

| 参数            | 说明                                                                                                  | 类型                                                                               | 默认值                                       | 是否必填 | 支持版本 |
| --------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- | -------- | -------- |
| closeable       | [废弃]同closeMode, 控制对话框关闭的方式，                                                             | 'close' \| 'mask' \| 'esc' \| boolean \| 'close,mask' \| 'close,esc' \| 'mask,esc' | true                                         |          | -        |
| closeMode       | [推荐]控制对话框关闭的方式                                                                            | CloseMode[] \| 'close' \| 'mask' \| 'esc'                                          | -                                            |          | 1.21     |
| cache           | 隐藏时是否保留子节点，不销毁                                                                          | boolean                                                                            | -                                            |          | -        |
| title           | 标题                                                                                                  | React.ReactNode                                                                    | -                                            |          | -        |
| bodyStyle       | body上的样式                                                                                          | React.CSSProperties                                                                | -                                            |          | -        |
| headerStyle     | header上的样式                                                                                        | React.CSSProperties                                                                | -                                            |          | -        |
| animation       | 显示隐藏时动画的播放方式<br/><br/>**签名**:<br/>**参数**:<br/>_animation_: 指定进场和出场动画的对象。 | { in: string; out: string } \| false                                               | \{ in: 'expandInDown', out: 'expandOutUp' \} |          | -        |
| visible         | 是否显示                                                                                              | boolean                                                                            | -                                            |          | -        |
| width           | 宽度，仅在 placement是 left right 的时候生效                                                          | number \| string                                                                   | -                                            |          | -        |
| height          | 高度，仅在 placement是 top bottom 的时候生效                                                          | number \| string                                                                   | -                                            |          | -        |
| onVisibleChange | [v2 废弃] 受控模式下(没有 trigger 的时候)，只会在关闭时触发，相当于onClose                            | (visible: boolean, reason: string, e?: React.MouseEvent) => void                   | -                                            |          | -        |
| onClose         | 对话框关闭时触发的回调函数                                                                            | (reason: string, e: React.MouseEvent \| KeyboardEvent) => void                     | `() => {}`                                   |          | -        |
| placement       | 位于页面的位置                                                                                        | 'top' \| 'right' \| 'bottom' \| 'left'                                             | 'right'                                      |          | -        |
| v2              | 开启v2                                                                                                | false \| undefined                                                                 | false                                        |          | -        |
| content         | 内容                                                                                                  | React.ReactNode                                                                    | -                                            |          | -        |
| popupContainer  | 渲染组件的容器                                                                                        | string \| HTMLElement \| null                                                      | -                                            |          | -        |
| hasMask         | 是否显示遮罩                                                                                          | boolean                                                                            | true                                         |          | -        |
| afterOpen       | [v2 废弃]对话框打开后的回调函数                                                                       | () => void                                                                         | -                                            |          | -        |

### Drawer V2

| 参数           | 说明                                                                                                  | 类型                                                                               | 默认值                                       | 是否必填 | 支持版本 |
| -------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- | -------- | -------- |
| closeable      | [废弃]同closeMode, 控制对话框关闭的方式，                                                             | 'close' \| 'mask' \| 'esc' \| boolean \| 'close,mask' \| 'close,esc' \| 'mask,esc' | true                                         |          | -        |
| closeMode      | [推荐]控制对话框关闭的方式                                                                            | CloseMode[] \| 'close' \| 'mask' \| 'esc'                                          | -                                            |          | 1.21     |
| cache          | 隐藏时是否保留子节点，不销毁                                                                          | boolean                                                                            | -                                            |          | -        |
| title          | 标题                                                                                                  | React.ReactNode                                                                    | -                                            |          | -        |
| bodyStyle      | body上的样式                                                                                          | React.CSSProperties                                                                | -                                            |          | -        |
| headerStyle    | header上的样式                                                                                        | React.CSSProperties                                                                | -                                            |          | -        |
| animation      | 显示隐藏时动画的播放方式<br/><br/>**签名**:<br/>**参数**:<br/>_animation_: 指定进场和出场动画的对象。 | { in: string; out: string } \| false                                               | \{ in: 'expandInDown', out: 'expandOutUp' \} |          | -        |
| visible        | 是否显示                                                                                              | boolean                                                                            | -                                            |          | -        |
| width          | 宽度，仅在 placement是 left right 的时候生效                                                          | number \| string                                                                   | -                                            |          | -        |
| height         | 高度，仅在 placement是 top bottom 的时候生效                                                          | number \| string                                                                   | -                                            |          | -        |
| afterClose     | [v2] 弹窗关闭后的回调                                                                                 | () => void                                                                         | -                                            |          | -        |
| onClose        | 对话框关闭时触发的回调函数                                                                            | (reason: string, e: React.MouseEvent \| KeyboardEvent) => void                     | `() => {}`                                   |          | -        |
| placement      | 位于页面的位置                                                                                        | 'top' \| 'right' \| 'bottom' \| 'left'                                             | 'right'                                      |          | -        |
| v2             | 开启v2                                                                                                | boolean                                                                            | false                                        |          | -        |
| content        | 内容                                                                                                  | React.ReactNode                                                                    | -                                            |          | -        |
| popupContainer | 渲染组件的容器                                                                                        | string \| HTMLElement \| null                                                      | -                                            |          | -        |
| hasMask        | 是否显示遮罩                                                                                          | boolean                                                                            | true                                         |          | -        |

<!-- api-extra-start -->

### Drawer.show

以下只列举 config 可以传入的常用属性，Drawer 组件其他属性也可以传入

| 属性    | 说明 | 类型      | 默认值 |
| :------ | :--- | :-------- | :----- |
| title   | 标题 | ReactNode | ''     |
| content | 内容 | ReactNode | ''     |

### Drawer.withContext

上面的`Drawer.show`这种命令式API，虽然使用起来很方便，但是如果你的应用使用了多次`ConfigProvider`，当你通过命令式API调起的Drawer的时候，它到底会使用哪份fusion config（比如prefix、文案），是一件无法确定的事情（详见[#2005](https://github.com/alibaba-fusion/next/issues/2005)）。你可以从 withContext Example 看到这个问题。

为了解决这个问题，我们提供了一个新的API：`Drawer.withContext`。
对于要使用命令式API的组件，使用`Drawer.withContext`HOC来包裹一下。然后你就可以在你的组件props.contextDrawer拿到 `show` 命令式方法。

<!-- api-extra-end -->

## 无障碍键盘操作指南

| 键盘      | 说明                                                                      |
| :-------- | :------------------------------------------------------------------------ |
| esc       | 按下ESC键将会关闭dialog而不触发任何的动作                                 |
| tab       | 正向聚焦到任何可以被聚焦的元素， 在Dialog显示的时候，焦点始终保持在框体内 |
| shift+tab | 反向聚焦到任何可以被聚焦的元素，在Dialog显示的时候，焦点始终保持在框体内  |
