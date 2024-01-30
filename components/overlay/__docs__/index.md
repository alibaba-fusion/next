# Overlay

-   category: Utility
-   family: Util
-   chinese: 弹层

---

用于生成弹层的工具类集合。

## 如何使用

Overlay 提供了一系列组件用于创建弹层。其中包含：

### `v2` 版本更新指示

1.25 版本增加 v2 支持开启新版本弹，功能如下：

功能变化：

-   弹窗位置计算的算法优化：一次即可完成位置计算，不会出现死循环、闪烁等情况。（上一个版本的弹窗打开可能会触发 n 次计算）
-   自动位置调整：根据空间的大小自动调整位置
-   彻底解决在滚动容器中 trigger 和 弹窗会分离的问题，新版本会自动调整位置。使用者不再需要去研究怎么用 container 修改弹窗挂载位置
-   彻底解决多层弹窗嵌套，点击子弹窗可能导致父弹窗消失的问题。

API变化：

### Overlay

Overlay 可以在页面中弹出一个浮层，封装了定位，动画及其他一些可用性的功能。Overlay 被设计为无状态的组件，其本身并不控制自己显示和隐藏的状态。

**注意:** 类似 canCloseby\* 的配置也需要配合 onRequestClose 才能关闭弹层。

#### 安全节点

Overlay 提供了点击弹层外文档中节点隐藏该弹层的功能，如果想让某个节点点击后不隐藏弹层（如：触发弹层打开的节点），请将该节点传入 safeNode 属性。

#### 定位

1.  align 的值可以是由空格隔开的字符串，如 `tl bl`，其中 `tl` 代表目标元素的左上方，`bl` 代表基准元素的左下方，所以 `tl bl` 的意思是目标元素的左上方对齐基准元素左下方。其中定位的可选值有 `tl`, `tc`, `tr`, `cl`, `cc`, `cr`, `bl`, `bc`, `br`。`t` 为 `top` 的缩写，`b` 为 `bottom` 的缩写，`c` 为 `center` 的缩写，`l` 为 `left` 的缩写，`r` 为 `right` 的缩写.

2.  align 支持的 Boolean 值仅为 false，在设置为 false 时，不使用 JS 定位，这样你可以根据你的需要传入 style 或者 className 进行 CSS 定位。

3.  rtl情况下会自动翻转 r(right)与 l(left),

### Popup

Popup 是对 Overlay 的封装，它接收某个节点作为触发节点，弹出一个浮层，这个浮层默认情况下使用这个节点作为定位的参照对象。

## API

### Overlay

| 参数                   | 说明                                                                                                                                                                | 类型                                                           | 默认值                                       | 是否必填 | 支持版本 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------- | -------- | -------- |
| children               | 弹层内容                                                                                                                                                            | React.ReactElement & { ref?: React.RefCallback\<HTMLElement> } | -                                            |          | -        |
| visible                | 是否显示弹层                                                                                                                                                        | boolean                                                        | false                                        |          | -        |
| onRequestClose         | 弹层请求关闭时触发事件的回调函数, v2 版本第一个参数是 event                                                                                                         | (type: string, e: Event \| React.MouseEvent\<Element>) => void | -                                            |          | -        |
| target                 | 弹层定位的参照元素                                                                                                                                                  | Target                                                         | Position.VIEWPORT                            |          | -        |
| align                  | 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)                                                                                                           | string \| boolean                                              | 'tl bl'                                      |          | -        |
| offset                 | 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量 e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px                      | Array\<number>                                                 | [0, 0]                                       |          | -        |
| container              | 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点                                                                       | Target                                                         | -                                            |          | -        |
| hasMask                | 是否显示遮罩                                                                                                                                                        | boolean                                                        | false                                        |          | -        |
| canCloseByEsc          | 是否支持 esc 按键关闭弹层                                                                                                                                           | boolean                                                        | true                                         |          | -        |
| canCloseByOutSideClick | 点击弹层外的区域是否关闭弹层，不显示遮罩时生效                                                                                                                      | boolean                                                        | true                                         |          | -        |
| canCloseByMask         | 点击遮罩区域是否关闭弹层，显示遮罩时生效                                                                                                                            | boolean                                                        | true                                         |          | -        |
| beforeOpen             | 弹层打开前触发事件的回调函数                                                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| onOpen                 | 弹层打开时触发事件的回调函数                                                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| afterOpen              | 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| beforeClose            | 弹层关闭前触发事件的回调函数                                                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| onClose                | 弹层关闭时触发事件的回调函数                                                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| afterClose             | 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| beforePosition         | 弹层定位完成前触发的事件                                                                                                                                            | () => void                                                     | -                                            |          | -        |
| onPosition             | 弹层定位完成时触发的事件                                                                                                                                            | (config: object, node?: object) => void                        | -                                            |          | -        |
| shouldUpdatePosition   | 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式                                                                | boolean                                                        | false                                        |          | -        |
| autoFocus              | 弹层打开时是否让其中的元素自动获取焦点                                                                                                                              | boolean                                                        | false                                        |          | -        |
| needAdjust             | 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域                                                                                            | boolean                                                        | true                                         |          | -        |
| disableScroll          | 是否禁用页面滚动                                                                                                                                                    | boolean                                                        | false                                        |          | -        |
| cache                  | 隐藏时是否保留子节点                                                                                                                                                | boolean                                                        | false                                        |          | -        |
| safeNode               | 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组 | React.ReactNode                                                | -                                            |          | -        |
| wrapperClassName       | 弹层的根节点的样式类                                                                                                                                                | string                                                         | -                                            |          | -        |
| wrapperStyle           | 弹层的根节点的内联样式                                                                                                                                              | React.CSSProperties                                            | -                                            |          | -        |
| animation              | 配置动画的播放方式，支持 \{ in: 'enter-class', out: 'leave-class' \} 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名         | string \| boolean \| AnimationObjectType \| undefined          | \{ in: 'expandInDown', out: 'expandOutUp' \} |          | -        |
| v2                     | 开启 v2 版本                                                                                                                                                        | false \| undefined                                             | false                                        |          | 1.25     |
| points                 | [v2] align 的数组形式，不能和 align 同时使用                                                                                                                        | Array\<string>                                                 | -                                            |          | 1.25     |
| useCapture             | 是否在捕获阶段监听，适配 react 17 事件模型变更                                                                                                                      | boolean                                                        | -                                            |          | 1.25     |

### Overlay V2

| 参数                   | 说明                                                                                                                                                                | 类型                                                           | 默认值                                       | 是否必填 | 支持版本 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------- | -------- | -------- |
| children               | 弹层内容                                                                                                                                                            | React.ReactElement & { ref?: React.RefCallback\<HTMLElement> } | -                                            |          | -        |
| visible                | 是否显示弹层                                                                                                                                                        | boolean                                                        | false                                        |          | -        |
| onRequestClose         | 弹层请求关闭时触发事件的回调函数, v2 版本第一个参数是 event                                                                                                         | (type: string, e: Event \| React.MouseEvent\<Element>) => void | -                                            |          | -        |
| target                 | 弹层定位的参照元素                                                                                                                                                  | Target                                                         | Position.VIEWPORT                            |          | -        |
| align                  | 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)                                                                                                           | string                                                         | 'tl bl'                                      |          | -        |
| offset                 | 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量 e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px                      | Array\<number>                                                 | [0, 0]                                       |          | -        |
| container              | 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点                                                                       | Target                                                         | -                                            |          | -        |
| hasMask                | 是否显示遮罩                                                                                                                                                        | boolean                                                        | false                                        |          | -        |
| canCloseByEsc          | 是否支持 esc 按键关闭弹层                                                                                                                                           | boolean                                                        | true                                         |          | -        |
| canCloseByOutSideClick | 点击弹层外的区域是否关闭弹层，不显示遮罩时生效                                                                                                                      | boolean                                                        | true                                         |          | -        |
| canCloseByMask         | 点击遮罩区域是否关闭弹层，显示遮罩时生效                                                                                                                            | boolean                                                        | true                                         |          | -        |
| beforeOpen             | 弹层打开前触发事件的回调函数                                                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| onOpen                 | 弹层打开时触发事件的回调函数                                                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| afterOpen              | 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| beforeClose            | 弹层关闭前触发事件的回调函数                                                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| onClose                | 弹层关闭时触发事件的回调函数                                                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| afterClose             | 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发                                                                                                        | (target?: React.ReactNode) => void                             | -                                            |          | -        |
| beforePosition         | 弹层定位完成前触发的事件                                                                                                                                            | () => void                                                     | -                                            |          | -        |
| onPosition             | 弹层定位完成时触发的事件                                                                                                                                            | (config: object, node?: object) => void                        | -                                            |          | -        |
| shouldUpdatePosition   | 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式                                                                | boolean                                                        | false                                        |          | -        |
| autoFocus              | 弹层打开时是否让其中的元素自动获取焦点                                                                                                                              | boolean                                                        | false                                        |          | -        |
| disableScroll          | 是否禁用页面滚动                                                                                                                                                    | boolean                                                        | false                                        |          | -        |
| cache                  | 隐藏时是否保留子节点                                                                                                                                                | boolean                                                        | false                                        |          | -        |
| safeNode               | 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组 | React.ReactNode                                                | -                                            |          | -        |
| wrapperClassName       | 弹层的根节点的样式类                                                                                                                                                | string                                                         | -                                            |          | -        |
| wrapperStyle           | 弹层的根节点的内联样式                                                                                                                                              | React.CSSProperties                                            | -                                            |          | -        |
| animation              | 配置动画的播放方式，支持 \{ in: 'enter-class', out: 'leave-class' \} 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名         | string \| false \| AnimationObjectType \| undefined            | \{ in: 'expandInDown', out: 'expandOutUp' \} |          | -        |
| v2                     | 开启 v2 版本                                                                                                                                                        | true                                                           | false                                        |          | 1.25     |
| points                 | [v2] align 的数组形式，不能和 align 同时使用                                                                                                                        | Array\<string>                                                 | -                                            |          | 1.25     |
| useCapture             | 是否在捕获阶段监听，适配 react 17 事件模型变更                                                                                                                      | boolean                                                        | -                                            |          | 1.25     |

### Overlay.Popup

| 参数                | 说明                                                                                                      | 类型                                                           | 默认值                         | 是否必填 |
| ------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------ | -------- |
| autoAdjust          | [v2] 浮窗被遮挡时是否自动调整位置                                                                         | boolean                                                        | -                              |          |
| children            | 弹层内容                                                                                                  | React.ReactElement                                             | -                              |          |
| autoFit             | 弹层是否自适应内容                                                                                        | boolean                                                        | false                          |          |
| visible             | 弹层当前是否显示                                                                                          | boolean                                                        | false                          |          |
| target              | 弹层定位的参照元素                                                                                        | Target                                                         | -                              |          |
| trigger             | 触发弹层显示或隐藏的元素                                                                                  | React.ReactElement                                             | -                              |          |
| triggerType         | 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus'] | string \| Array\<string>                                       | 'hover'                        |          |
| triggerClickKeycode | 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码                                            | number \| Array\<number>                                       | [KEYCODE.SPACE, KEYCODE.ENTER] |          |
| defaultVisible      | 弹层默认是否显示                                                                                          | boolean                                                        | false                          |          |
| onVisibleChange     | 弹层显示或隐藏时触发的回调函数, v2 版本第二个参数是 event                                                 | (visible: boolean, type: string \| object, e?: object) => void | -                              |          |
| disabled            | 设置此属性，弹层无法显示或隐藏                                                                            | boolean                                                        | false                          |          |
| delay               | 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效                            | number                                                         | 200                            |          |
| mouseEnterDelay     | 鼠标放置后的延时显示, 单位毫秒 ms, 优先级高于delay                                                        | number                                                         | -                              |          |
| mouseLeaveDelay     | 鼠标离开后的延时显示, 单位毫秒 ms, 优先级高于delay                                                        | number                                                         | -                              |          |
| canCloseByTrigger   | trigger 是否可以关闭弹层                                                                                  | boolean                                                        | true                           |          |
| followTrigger       | 是否跟随trigger滚动                                                                                       | boolean                                                        | false                          |          |
| v2                  | 开启 v2 版本                                                                                              | false \| undefined                                             | -                              |          |
| placement           | [v2] 快捷位置                                                                                             | string                                                         | 'tr'                           |          |

### Overlay.Popup

| 参数                | 说明                                                                                                      | 类型                                                           | 默认值                         | 是否必填 |
| ------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------ | -------- |
| autoAdjust          | [v2] 浮窗被遮挡时是否自动调整位置                                                                         | boolean                                                        | -                              |          |
| children            | 弹层内容                                                                                                  | React.ReactElement                                             | -                              |          |
| autoFit             | 弹层是否自适应内容                                                                                        | boolean                                                        | false                          |          |
| visible             | 弹层当前是否显示                                                                                          | boolean                                                        | false                          |          |
| target              | 弹层定位的参照元素                                                                                        | Target                                                         | -                              |          |
| trigger             | 触发弹层显示或隐藏的元素                                                                                  | React.ReactElement                                             | -                              |          |
| triggerType         | 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus'] | string \| Array\<string>                                       | 'hover'                        |          |
| triggerClickKeycode | 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码                                            | number \| Array\<number>                                       | [KEYCODE.SPACE, KEYCODE.ENTER] |          |
| defaultVisible      | 弹层默认是否显示                                                                                          | boolean                                                        | false                          |          |
| onVisibleChange     | 弹层显示或隐藏时触发的回调函数, v2 版本第二个参数是 event                                                 | (visible: boolean, type: string \| object, e?: object) => void | -                              |          |
| disabled            | 设置此属性，弹层无法显示或隐藏                                                                            | boolean                                                        | false                          |          |
| delay               | 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效                            | number                                                         | 200                            |          |
| mouseEnterDelay     | 鼠标放置后的延时显示, 单位毫秒 ms, 优先级高于delay                                                        | number                                                         | -                              |          |
| mouseLeaveDelay     | 鼠标离开后的延时显示, 单位毫秒 ms, 优先级高于delay                                                        | number                                                         | -                              |          |
| canCloseByTrigger   | trigger 是否可以关闭弹层                                                                                  | boolean                                                        | true                           |          |
| followTrigger       | 是否跟随trigger滚动                                                                                       | boolean                                                        | false                          |          |
| v2                  | 开启 v2 版本                                                                                              | true                                                           | -                              |          |
| placement           | [v2] 快捷位置                                                                                             | string                                                         | 'tr'                           |          |

### Overlay.Position

| 参数     | 说明               | 类型                 | 默认值 | 是否必填 |
| -------- | ------------------ | -------------------- | ------ | -------- |
| children | 弹层内容           | React.ReactElement   | -      |          |
| target   | 弹层定位的参照元素 | Target \| 'viewport' | -      |          |

### Overlay.Gateway

| 参数     | 说明               | 类型                                                                             | 默认值 | 是否必填 |
| -------- | ------------------ | -------------------------------------------------------------------------------- | ------ | -------- |
| children | 弹层内容           | null \| React.ReactElement & { ref?: React.RefCallback\<HTMLElement> \| string } | -      |          |
| target   | 弹层定位的参照元素 | Target                                                                           | -      |          |

### AnimationObjectType

```typescript
export type AnimationObjectType = Record<'in' | 'out', string>;
```

### Target

```typescript
export type Target<T = unknown> =
    | React.ReactInstance
    | string
    | ((param?: T) => React.ReactInstance | Element | Text | Node | null | void | undefined)
    | Element
    | Node
    | Text
    | null
    | false
    | undefined;
```

## 无障碍键盘操作指南

`说明`： 此组件需要结合其他组件使用，会有提示。
