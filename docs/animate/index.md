# Animate

-   category: Utility
-   family: Util
-   chinese: 动画

---

## 开发指南

### 何时使用

需要自定义动效

## API

### Animate

| 参数              | 说明                                                                                                                                                | 类型                                  | 默认值      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | -------- |
| animation       | 动画 className                                                                                                                                      | String/Object                       | -        |
| animationAppear | 子元素第一次挂载时是否执行动画                                                                                                                                   | Boolean                             | true     |
| component       | 包裹子元素的标签                                                                                                                                          | any                                 | 'div'    |
| singleMode      | 是否只有单个子元素，如果有多个子元素，请设置为 false                                                                                                                     | Boolean                             | true     |
| children        | 子元素                                                                                                                                               | ReactElement/Array&lt;ReactElement> | -        |
| beforeAppear    | 执行第一次挂载动画前触发的回调函数<br><br>**签名**:<br>Function(node: HTMLElement) => void<br>**参数**:<br>_node_: {HTMLElement} 执行动画的 dom 元素                         | Function                            | () => {} |
| onAppear        | 执行第一次挂载动画，添加 xxx-appear-active 类名后触发的回调函数<br><br>**签名**:<br>Function(node: HTMLElement) => void<br>**参数**:<br>_node_: {HTMLElement} 执行动画的 dom 元素 | Function                            | () => {} |
| afterAppear     | 执行完第一次挂载动画后触发的函数<br><br>**签名**:<br>Function(node: HTMLElement) => void<br>**参数**:<br>_node_: {HTMLElement} 执行动画的 dom 元素                          | Function                            | () => {} |
| beforeEnter     | 执行进场动画前触发的回调函数<br><br>**签名**:<br>Function(node: HTMLElement) => void<br>**参数**:<br>_node_: {HTMLElement} 执行动画的 dom 元素                            | Function                            | () => {} |
| onEnter         | 执行进场动画，添加 xxx-enter-active 类名后触发的回调函数<br><br>**签名**:<br>Function(node: HTMLElement) => void<br>**参数**:<br>_node_: {HTMLElement} 执行动画的 dom 元素     | Function                            | () => {} |
| afterEnter      | 执行完进场动画后触发的回调函数<br><br>**签名**:<br>Function(node: HTMLElement) => void<br>**参数**:<br>_node_: {HTMLElement} 执行动画的 dom 元素                           | Function                            | () => {} |
| beforeLeave     | 执行离场动画前触发的回调函数<br><br>**签名**:<br>Function(node: HTMLElement) => void<br>**参数**:<br>_node_: {HTMLElement} 执行动画的 dom 元素                            | Function                            | () => {} |
| onLeave         | 执行离场动画，添加 xxx-leave-active 类名后触发的回调函数<br><br>**签名**:<br>Function(node: HTMLElement) => void<br>**参数**:<br>_node_: {HTMLElement} 执行动画的 dom 元素     | Function                            | () => {} |
| afterLeave      | 执行完离场动画后触发的回调函数<br><br>**签名**:<br>Function(node: HTMLElement) => void<br>**参数**:<br>_node_: {HTMLElement} 执行动画的 dom 元素                           | Function                            | () => {} |

## Animation List

| In           | Out           |
| ------------ | ------------- |
| fadeIn       | fadeOut       |
| fadeInDown   | fadeOutDown   |
| fadeInLeft   | fadeOutLeft   |
| fadeInRight  | fadeOutRight  |
| fadeInUp     | fadeOutUp     |
| zoomIn       | zoomOut       |
| expandInDown | expandOutUp   |
| expandInUp   | expandOutDown |
| pulse        |               |
