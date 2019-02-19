# Overlay

-   category: Utility
-   family: Util
-   chinese: 弹层

---

用于生成弹层的工具类集合.

## 开发指南

Overlay 提供了一系列组件用于创建弹层。其中包含：

### Overlay

Overlay 可以在页面中弹出一个浮层，封装了定位，动画及其他一些可用性的功能。Overlay 被设计为无状态的组件，其本身并不控制自己显示和隐藏的状态。

**注意:** 类似 canCloseby\* 的配置也需要配合 onRequestClose 才能关闭弹层。

#### 安全节点

Overlay 提供了点击弹层外文档中节点隐藏该弹层的功能，如果想让某个节点点击后不隐藏弹层（如：触发弹层打开的节点），请将该节点传入 safeNode 属性。

#### 定位

1.  align 的值可以是由空格隔开的字符串，如 `tl bl`，其中 `tl` 代表目标元素的左上方，`bl` 代表基准元素的左下方，所以 `tl bl` 的意思是目标元素的左上方对齐基准元素左下方。其中定位的可选值有 `tl`, `tc`, `tr`, `cl`, `cc`, `cr`, `bl`, `bc`, `br`。`t` 为 `top` 的缩写，`b` 为 `bottom` 的缩写，`c` 为 `center` 的缩写，`l` 为 `left` 的缩写，`r` 为 `right` 的缩写.

2.  align 支持的 Boolean 值仅为 false，在设置为 false 时，不使用 JS 定位，这样你可以根据你的需要传入 style 或者 className 进行 CSS 定位。

3.  rtl情况下会自动翻转 r(right)与 l(left), 例如 rtl状态下`tl bl`与 非rtl状态下`tr br`等效
    下面的例子演示了如何将弹层定位到页面的右上角：

```html
<Overlay visible align="tr tr"><span>123</span></Overlay>
```

### Popup

Popup 是对 Overlay 的封装，它接收某个节点作为触发节点，弹出一个浮层，这个浮层默认情况下使用这个节点作为定位的参照对象。

## API

### Overlay

| 参数                     | 说明                                                                                                                                                                                                                                                                                                          | 类型             | 默认值                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------ |
| children               | 弹层内容                                                                                                                                                                                                                                                                                                        | any            | -                                          |
| visible                | 是否显示弹层                                                                                                                                                                                                                                                                                                      | Boolean        | false                                      |
| onRequestClose         | 弹层请求关闭时触发事件的回调函数<br><br>**签名**:<br>Function(type: String, e: Object) => void<br>**参数**:<br>_type_: {String} 弹层关闭的来源<br>_e_: {Object} DOM 事件                                                                                                                                                                 | Function       | func.noop                                  |
| target                 | 弹层定位的参照元素                                                                                                                                                                                                                                                                                                   | any            | Position.VIEWPORT                          |
| align                  | 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)                                                                                                                                                                                                                                                                            | String/Boolean | 'tl bl'                                    |
| offset                 | 弹层相对于参照元素定位的微调                                                                                                                                                                                                                                                                                              | Array          | [0, 0]                                     |
| container              | 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点                                                                                                                                                                                                                                                     | any            | -                                          |
| hasMask                | 是否显示遮罩                                                                                                                                                                                                                                                                                                      | Boolean        | false                                      |
| canCloseByEsc          | 是否支持 esc 按键关闭弹层                                                                                                                                                                                                                                                                                             | Boolean        | true                                       |
| canCloseByOutSideClick | 点击弹层外的区域是否关闭弹层，不显示遮罩时生效                                                                                                                                                                                                                                                                                     | Boolean        | true                                       |
| canCloseByMask         | 点击遮罩区域是否关闭弹层，显示遮罩时生效                                                                                                                                                                                                                                                                                        | Boolean        | true                                       |
| beforeOpen             | 弹层打开前触发事件的回调函数<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                                                                         | Function       | func.noop                                  |
| onOpen                 | 弹层打开时触发事件的回调函数<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                                                                         | Function       | func.noop                                  |
| afterOpen              | 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                                                        | Function       | func.noop                                  |
| beforeClose            | 弹层关闭前触发事件的回调函数<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                                                                         | Function       | func.noop                                  |
| onClose                | 弹层关闭时触发事件的回调函数<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                                                                         | Function       | func.noop                                  |
| afterClose             | 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                                                        | Function       | func.noop                                  |
| beforePosition         | 弹层定位完成前触发的事件<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                                                                           | Function       | func.noop                                  |
| onPosition             | 弹层定位完成时触发的事件<br><br>**签名**:<br>Function(config: Object, node: Object) => void<br>**参数**:<br>_config_: {Object} 定位的参数<br>_config.align_: {Array} 对齐方式，如 ['cc', 'cc']（如果开启 needAdjust，可能和预先设置的 align 不同）<br>_config.top_: {Number} 距离视口顶部距离<br>_config.left_: {Number} 距离视口左侧距离<br>_node_: {Object} 定位参照的容器节点 | Function       | func.noop                                  |
| shouldUpdatePosition   | 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式                                                                                                                                                                                                                                                          | Boolean        | false                                      |
| autoFocus              | 弹层打开时是否让其中的元素自动获取焦点                                                                                                                                                                                                                                                                                         | Boolean        | false                                      |
| needAdjust             | 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域                                                                                                                                                                                                                                                                        | Boolean        | true                                       |
| disableScroll          | 是否禁用页面滚动                                                                                                                                                                                                                                                                                                    | Boolean        | false                                      |
| cache                  | 隐藏时是否保留子节点                                                                                                                                                                                                                                                                                                  | Boolean        | false                                      |
| safeNode               | 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组                                                                                                                                                                                                             | any            | -                                          |
| wrapperClassName       | 弹层的根节点的样式类                                                                                                                                                                                                                                                                                                  | String         | -                                          |
| wrapperStyle           | 弹层的根节点的内联样式                                                                                                                                                                                                                                                                                                 | Object         | -                                          |
| animation              | 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画                                                                                                                                                                                                                             | Object/Boolean | { in: 'expandInDown', out: 'expandOutUp' } |

### Overlay.Popup

> 继承 Overlay 的 API，除非特别说明

| 参数                | 说明                                                                                                                                                                                              | 类型           | 默认值             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- |
| children          | 弹层内容                                                                                                                                                                                            | ReactNode    | -               |
| trigger           | 触发弹层显示或隐藏的元素                                                                                                                                                                                    | ReactElement | -               |
| triggerType       | 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']                                                                                                                       | String/Array | 'hover'         |
| visible           | 弹层当前是否显示                                                                                                                                                                                        | Boolean      | -               |
| defaultVisible    | 弹层默认是否显示                                                                                                                                                                                        | Boolean      | false           |
| onVisibleChange   | 弹层显示或隐藏时触发的回调函数<br><br>**签名**:<br>Function(visible: Boolean, type: String, e: Object) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否显示<br>_type_: {String} 触发弹层显示或隐藏的来源<br>_e_: {Object} DOM事件 | Function     | func.noop       |
| disabled          | 设置此属性，弹层无法显示或隐藏                                                                                                                                                                                 | Boolean      | false           |
| delay             | 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效                                                                                                                                               | Number       | 200             |
| canCloseByTrigger | 触发元素是否可以关闭弹层                                                                                                                                                                                    | Boolean      | true            |
| target            | 弹层定位的参照元素                                                                                                                                                                                       | any          | target 属性，即触发元素 |
| followTrigger     | 是否跟随trigger滚动                                                                                                                                                                                   | Boolean      | false           |






## ARIA and KeyBoard

`说明`： 此组件需要结合其他组件使用，会有提示。参考上文`无障碍`。

