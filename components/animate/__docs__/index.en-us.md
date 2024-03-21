# Animate

-   category: Utility
-   family: Util
-   chinese: 动画

---

## Guide

### When To Use

Need to customize animation.

## API

### Animate

| Param           | Description                                                               | Type                                                                | Default Value | Required |
| --------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------- | -------- |
| animation       | The animation className                                                   | string \| Partial\<Record\<'appear' \| 'enter' \| 'leave', string>> | -             |          |
| animationAppear | Whether to execute animation on the first mount                           | boolean                                                             | true          |          |
| component       | The tag of the wrapper                                                    | React.ElementType                                                   | 'div'         |          |
| singleMode      | Whether to only have a single child                                       | boolean                                                             | true          |          |
| beforeAppear    | Callback fired before the "entering" status of the first mount is applied | (node: HTMLElement) => void                                         | -             |          |
| onAppear        | Callback fired after the "entering" status of the first mount is applied  | (node: HTMLElement) => void                                         | -             |          |
| afterAppear     | Callback fired after the "entered" status of the first mount is applied   | (node: HTMLElement) => void                                         | -             |          |
| beforeEnter     | Callback fired before the "entering" status is applied                    | (node: HTMLElement) => void                                         | -             |          |
| onEnter         | Callback fired after the "entering" status is applied                     | (node: HTMLElement) => void                                         | -             |          |
| afterEnter      | Callback fired after the "entered" status is applied                      | (node: HTMLElement) => void                                         | -             |          |
| beforeLeave     | Callback fired before the "exiting" status is applied                     | (node: HTMLElement) => void                                         | -             |          |
| onLeave         | Callback fired after the leave stage                                      | (node: HTMLElement) => void                                         | -             |          |
| afterLeave      | Callback fired after the leave stage                                      | (node: HTMLElement) => void                                         | -             |          |

### Animate.Expand

| Param       | Description                                            | Type                                                                | Default Value | Required |
| ----------- | ------------------------------------------------------ | ------------------------------------------------------------------- | ------------- | -------- |
| animation   | The animation className                                | string \| Partial\<Record\<'appear' \| 'enter' \| 'leave', string>> | -             |          |
| beforeEnter | Callback fired before the "entering" status is applied | (node: HTMLElement) => void                                         | -             |          |
| onEnter     | Callback fired after the "entering" status is applied  | (node: HTMLElement) => void                                         | -             |          |
| afterEnter  | Callback fired after the "entered" status is applied   | (node: HTMLElement) => void                                         | -             |          |
| beforeLeave | Callback fired before the "exiting" status is applied  | (node: HTMLElement) => void                                         | -             |          |
| onLeave     | Callback fired after the "exiting" status is applied   | (node: HTMLElement) => void                                         | -             |          |
| afterLeave  | Callback fired after the "exited" status is applied    | (node: HTMLElement) => void                                         | -             |          |

### Animate.OverlayAnimate

| Param         | Description                                                                                                                    | Type                                                                                                        | Default Value | Required |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| animation     | The animation className                                                                                                        | string \| false \| Record\<'in' \| 'out', string>                                                           | -             |          |
| visible       | Show the component; triggers the enter or exit states                                                                          | boolean                                                                                                     | -             |          |
| children      | The element to be wrapped                                                                                                      | ReactElement                                                                                                | -             | yes      |
| timeout       | The duration of the transition.                                                                                                | \| number<br/> \| { appear?: number \| undefined; enter?: number \| undefined; exit?: number \| undefined } | -             |          |
| style         | The style of the child element                                                                                                 | React.CSSProperties                                                                                         | -             |          |
| mountOnEnter  | "lazy mount" the component on the first `in={true}`                                                                            | boolean                                                                                                     | false         |          |
| unmountOnExit | "lazy unmount" the component on the first `in={false}`                                                                         | boolean                                                                                                     | false         |          |
| onEnter       | Callback fired before the "entering" status is applied.<br/><br/>**signature**:<br/>**params**:<br/>_isAppearing_: IsAppearing | (node: HTMLElement, isAppearing: boolean) => void                                                           | -             |          |
| onEntering    | Callback fired after the "entering" status is applied.<br/><br/>**signature**:<br/>**params**:<br/>_isAppearing_: IsAppearing  | (node: HTMLElement, isAppearing: boolean) => void                                                           | -             |          |
| onEntered     | Callback fired after the "entered" status is applied.<br/><br/>**signature**:<br/>**params**:<br/>_isAppearing_: IsAppearing   | (node: HTMLElement, isAppearing: boolean) => void                                                           | -             |          |
| onExit        | Callback fired before the "exiting" status is applied.                                                                         | (node: HTMLElement) => void                                                                                 | -             |          |
| onExiting     | Callback fired after the "exiting" status is applied.                                                                          | (node: HTMLElement) => void                                                                                 | -             |          |
| onExited      | Callback fired after the "exited" status is applied.                                                                           | (node: HTMLElement) => void                                                                                 | -             |          |
| appear        | Transition on the first mount.                                                                                                 | boolean                                                                                                     | -             |          |
| enter         | Enable or disable enter transitions.                                                                                           | boolean                                                                                                     | -             |          |
| exit          | Enable or disable exit transitions.                                                                                            | boolean                                                                                                     | -             |          |

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
