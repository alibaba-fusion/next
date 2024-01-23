# Animate

-   category: Utility
-   family: Util
-   chinese: 动画

---

动画组件。

## 何时使用

为组件增加自定义动画效果。

## API

### Animate

| 参数            | 说明                                                            | 类型                                                              | 默认值 | 是否必填 |
| --------------- | --------------------------------------------------------------- | ----------------------------------------------------------------- | ------ | -------- |
| animation       | 动画 className                                                  | string \| Partial<Record<'appear' \| 'enter' \| 'leave', string>> | -      |          |
| animationAppear | 子元素第一次挂载时是否执行动画                                  | boolean                                                           | true   |          |
| component       | 包裹子元素的标签                                                | React.ElementType                                                 | 'div'  |          |
| singleMode      | 是否只有单个子元素，如果有多个子元素，请设置为 false            | boolean                                                           | true   |          |
| beforeAppear    | 执行第一次挂载动画前触发的回调函数                              | (node: HTMLElement) => void                                       | -      |          |
| onAppear        | 执行第一次挂载动画，添加 xxx-appear-active 类名后触发的回调函数 | (node: HTMLElement) => void                                       | -      |          |
| afterAppear     | 执行完第一次挂载动画后触发的函数                                | (node: HTMLElement) => void                                       | -      |          |
| beforeEnter     | 执行进场动画前触发的回调函数                                    | (node: HTMLElement) => void                                       | -      |          |
| onEnter         | 执行进场动画，添加 xxx-enter-active 类名后触发的回调函数        | (node: HTMLElement) => void                                       | -      |          |
| afterEnter      | 执行完进场动画后触发的回调函数                                  | (node: HTMLElement) => void                                       | -      |          |
| beforeLeave     | 执行离场动画前触发的回调函数                                    | (node: HTMLElement) => void                                       | -      |          |
| onLeave         | 执行离场动画，添加 xxx-leave-active 类名后触发的回调函数        | (node: HTMLElement) => void                                       | -      |          |
| afterLeave      | 执行完离场动画后触发的回调函数                                  | (node: HTMLElement) => void                                       | -      |          |

### Animate.Expand

| 参数        | 说明                                                     | 类型                                                              | 默认值 | 是否必填 |
| ----------- | -------------------------------------------------------- | ----------------------------------------------------------------- | ------ | -------- |
| animation   | 动画 className                                           | string \| Partial<Record<'appear' \| 'enter' \| 'leave', string>> | -      |          |
| beforeEnter | 执行进场动画前触发的回调函数                             | (node: HTMLElement) => void                                       | -      |          |
| onEnter     | 执行进场动画，添加 xxx-enter-active 类名后触发的回调函数 | (node: HTMLElement) => void                                       | -      |          |
| afterEnter  | 执行完进场动画后触发的回调函数                           | (node: HTMLElement) => void                                       | -      |          |
| beforeLeave | 执行离场动画前触发的回调函数                             | (node: HTMLElement) => void                                       | -      |          |
| onLeave     | 执行离场动画，添加 xxx-leave-active 类名后触发的回调函数 | (node: HTMLElement) => void                                       | -      |          |
| afterLeave  | 执行完离场动画后触发的回调函数                           | (node: HTMLElement) => void                                       | -      |          |

### Animate.OverlayAnimate

| 参数          | 说明                                                                                                  | 类型                                                                                                        | 默认值 | 是否必填 |
| ------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------ | -------- |
| animation     | 动画 className                                                                                        | string \| false \| Record<'in' \| 'out', string>                                                            | -      |          |
| visible       | 是否显示                                                                                              | boolean                                                                                                     | -      |          |
| children      | 子元素                                                                                                | ReactElement                                                                                                | -      | 是       |
| timeout       | 过渡的超时时间。                                                                                      | \| number<br/> \| { appear?: number \| undefined; enter?: number \| undefined; exit?: number \| undefined } | -      |          |
| style         | 子元素样式                                                                                            | React.CSSProperties                                                                                         | -      |          |
| mountOnEnter  | 在第一次 `in={true}` 时“惰性”挂载组件                                                                 | boolean                                                                                                     | false  |          |
| unmountOnExit | 在第一次 `in={false}` 时“惰性”卸载组件                                                                | boolean                                                                                                     | false  |          |
| onEnter       | 在“进入”状态被应用前触发的回调。<br/><br/>**签名**:<br/>**参数**:<br/>_isAppearing_: 是否在初次挂载   | (node: HTMLElement, isAppearing: boolean) => void                                                           | -      |          |
| onEntering    | 在“进入”状态被应用后触发的回调。<br/><br/>**签名**:<br/>**参数**:<br/>_isAppearing_: 是否在初次挂载   | (node: HTMLElement, isAppearing: boolean) => void                                                           | -      |          |
| onEntered     | 在“已进入”状态被应用后触发的回调。<br/><br/>**签名**:<br/>**参数**:<br/>_isAppearing_: 是否在初次挂载 | (node: HTMLElement, isAppearing: boolean) => void                                                           | -      |          |
| onExit        | 在“离开”状态被应用前触发的回调。                                                                      | (node: HTMLElement) => void                                                                                 | -      |          |
| onExiting     | 在“离开”状态被应用后触发的回调。                                                                      | (node: HTMLElement) => void                                                                                 | -      |          |
| onExited      | 在“已离开”状态被应用后触发的回调。                                                                    | (node: HTMLElement) => void                                                                                 | -      |          |
| appear        | 初次挂载时实现过渡效果                                                                                | boolean                                                                                                     | -      |          |
| enter         | 启用或禁用进场动画                                                                                    | boolean                                                                                                     | -      |          |
| exit          | 启用或禁用离场动画                                                                                    | boolean                                                                                                     | -      |          |

## Animation List

| In           | Out           |
| ------------ | ------------- |
| fadeIn       | fadeOut       |
| fadeInDown   | fadeOutDown   |
| fadeInLeft   | fadeOutLeft   |
| fadeInRight  | fadeOutRight  |
| fadeInUp     | fadeOutUp     |
| slideInDown  | slideOutUp    |
| slideInLeft  | slideOutLeft  |
| slideInRight | slideOutRight |
| slideInUp    | slideOutDown  |
| zoomIn       | zoomOut       |
| expandInDown | expandOutUp   |
| expandInUp   | expandOutDown |
| pulse        |               |
