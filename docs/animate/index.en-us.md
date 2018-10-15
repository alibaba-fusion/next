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

| param              | desc                                                                                                                                                | type                                  | default      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | -------- |
| animation       | animation class names                                                                                                                                      | String/Object                       | -        |
| animationAppear | whether the child elements performs animation when it is first mounted                                                                                                                                   | Boolean                             | true     |
| component       | component wrapped child element                                                                                                                                          | any                                 | 'div'    |
| singleMode      | whether there is only a single child element, if there is more than one child element, set it to false                                                                                                                     | Boolean                             | true     |
| children        | child elements                                                                                                                                               | ReactElement/Array&lt;ReactElement> | -        |
| beforeAppear    | triggered before performing the first mount animation<br><br>**signatures**:<br>Function() => void                                                                                            | Function                            | () => {} |
| onAppear        | triggered after adding the xxx-appear-active class name<br><br>**signatures**:<br>Function(node: HTMLElement) => void<br>**params**:<br>_node_: {HTMLElement} animated dom element | Function                            | () => {} |
| afterAppear     | triggered after performing the first mount animation<br><br>**signatures**:<br>Function(node: HTMLElement) => void<br>**params**:<br>_node_: {HTMLElement} animated dom element                          | Function                            | () => {} |
| beforeEnter     | triggered before performing the enter animation<br><br>**signatures**:<br>Function(node: HTMLElement) => void<br>**params**:<br>_node_: {HTMLElement} animated dom element                            | Function                            | () => {} |
| onEnter         | triggered after adding the xxx-enter-active class name<br><br>**signatures**:<br>Function(node: HTMLElement) => void<br>**params**:<br>_node_: {HTMLElement} animated dom element     | Function                            | () => {} |
| afterEnter      | triggered after performing the enter animation<br><br>**signatures**:<br>Function(node: HTMLElement) => void<br>**params**:<br>_node_: {HTMLElement} animated dom element                           | Function                            | () => {} |
| beforeLeave     | triggered before performing the leave animation<br><br>**signatures**:<br>Function(node: HTMLElement) => void<br>**params**:<br>_node_: {HTMLElement} animated dom element                            | Function                            | () => {} |
| onLeave         | triggered after adding the xxx-leave-active class name<br><br>**signatures**:<br>Function(node: HTMLElement) => void<br>**params**:<br>_node_: {HTMLElement} animated dom element     | Function                            | () => {} |
| afterLeave      | triggered after performing the leave animation<br><br>**signatures**:<br>Function(node: HTMLElement) => void<br>**params**:<br>_node_: {HTMLElement} animated dom element                           | Function                            | () => {} |
