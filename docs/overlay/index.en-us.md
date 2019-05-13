# Overlay

-   category: Utility
-   family: Util
-   chinese: 弹层

---

A collection of tool for generating overlay.

## Guide

Overlay provides a series of components for creating overlay:

### Overlay

Overlay can pop up a layer in the page, provides positioning, animation and other common functions. Overlay is designed as a stateless component that does not control the state of its own visible.

**Note:** Configurations like canCloseby\* also need to work with onRequestClose to close the overlay.

#### Safe node

Overlay provides the function of hiding itself by clicking document. If you want to click a node and do not hide the overlay (for example, the node that triggers the overlay to open), pass the node to the safeNode property.

#### Alignment

1. The value of the align property can be a space-separated string, such as `tl bl`, `tl` means the top left of the target element and `bl` means the bottom left of the reference element, so `tl bl` means the top left of the target element aligns with the bottom left of the reference element. Among the available options are `tl`, `tc`, `tr`, `cl`, `cc`, `cr`, `bl`, `bc`, `br`. `t` is short for `top`, `b` is short for `bottom`, `c` is short for `center`, `l` is short for `left`, and `r` is short for `right`.

2. The align support Boolean value is only false. When set to false, JS positioning is not used, so you can pass the style or className for CSS positioning according to your needs.

3. Under RTL Mode, Overylay will transfer r(right) and l(left) to each other automatically. It means `tl bl` under RTL Mode works the same to `tr br` under Non-RTL Mode
The following example shows how to position the overlay to the top right corner of the page:

```html
<Overlay visible align="tr tr"><span>123</span></Overlay>
```

### Popup

Popup is the wrapper of Overlay. It receives a node as a trigger node and pops up a overlay. This overlay uses the node as the reference element for positioning by default.

## API

### Overlay

| Param | Descripiton  | Type  | Default Value |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------ |
| children               | conent of overlay                                                                                                                                                                                                                                                                                                        | any            | -                                          |
| visible                | whether to show the overlay                                                                                                                                                                                                                                                                                                      | Boolean        | false                                      |
| onRequestClose         | callback function that triggers an event when the overlay request closed<br><br>**signatures**:<br>Function(type: String, e: Object) => void<br>**params**:<br>_type_: {String} the reason of the overlay closure<br>_e_: {Object} DOM event                                                                                                                                                                 | Function       | func.noop                                  |
| target                 | reference element for overlay positioning                                                                                                                                                                                                                                                                                                   | any            | Position.VIEWPORT                          |
| align                  | alignment of the overlay relative to the reference element, see [Alignment](#Alignment)                                                                                                                                                                                                                                                                          | String/Boolean | 'tl bl'                                    |
| offset                 | offset of the overlay relative to the reference element                                                                                                                                                                                                                                                                                              | Array          | [0, 0]                                     |
| container              | container of the overlay, if it is a function, it should return ref, if it is a string, it is should be the id of the DOM element, it can also be passed the DOM element directly.                                                                                                                                                                                                                                                     | any            | -                                          |
| hasMask                | whether to show the mask                                                                                                                                                                                                                                                                                                      | Boolean        | false                                      |
| canCloseByEsc          | whether to support pressing esc to close the overlay                                                                                                                                                                                                                                                                                             | Boolean        | true                                       |
| canCloseByOutSideClick | whether to support clicking the outside to close the overlay when the mask is hidden                                                                                                                                                                                                                                                                                    | Boolean        | true                                       |
| canCloseByMask         | whether to support clicking the mask to close the overlay when the mask is visible                                                                                                                                                                                                                                                                                       | Boolean        | true                                       |
| beforeOpen             | callback function that triggers the event before the overlay opens<br><br>**signatures**:<br>Function() => void                                                                                                                                                                                                                                                         | Function       | func.noop                                  |
| onOpen                 | callback function that triggers the event when the overlay opens<br><br>**signatures**:<br>Function() => void                                                                                                                                                                                                                                                         | Function       | func.noop                                  |
| afterOpen              | callback function that triggers the event after the overlay opens, if enable animations, trigger after the animation ends<br><br>**signatures**:<br>Function() => void                                                                                                                                                                                                                                        | Function       | func.noop                                  |
| beforeClose            | callback function that triggers the event before the overlay closes<br><br>**signatures**:<br>Function() => void                                                                                                                                                                                                                                                         | Function       | func.noop                                  |
| onClose                | callback function that triggers the event when the overlay closes<br><br>**signatures**:<br>Function() => void                                                                                                                                                                                                                                                         | Function       | func.noop                                  |
| afterClose             | callback function that triggers the event after the overlay closes, if enable animations, trigger after the animation ends<br><br>**signatures**:<br>Function() => void                                                                                                                                                                                                                                        | Function       | func.noop                                  |
| beforePosition         | callback function that triggers the event before the overlay posiitons<br><br>**signatures**:<br>Function() => void                                                                                                                                                                                                                                                           | Function       | func.noop                                  |
| onPosition             | callback function that triggers the event when the overlay posiitons<br><br>**signatures**:<br>Function(config: Object, node: Object) => void<br>**params**:<br>_config_: {Object} position arguments<br>_config.align_: {Array} alignment, such as ['cc', 'cc'] (if you enable needAdjust, it may be different from pre-set align)<br>_config.top_: {Number} distance from the top of the viewport<br>_config.left_: {Number} distance from the left of the viewport<br>_node_: {Object} container node | Function       | func.noop                                  |
| shouldUpdatePosition   | whether to force the update of positioning after each rerendered, which is generally used to maintain the original positioning when the size of the content area changes.                                                                                                                                                                                                                                                          | Boolean        | false                                      |
| autoFocus              | whether to focus the element in the overlay automatically when the overlay is opened                                                                                                                                                                                                                                                                                         | Boolean        | false                                      |
| needAdjust             | when the overlay is not visible due to scrolling of the page, does it automatically adjust the position to appear in the visible area?                                                                                                                                                                                                                                                                 | Boolean        | true                                       |
| disableScroll          | whether to disable page scrolling                                                                                                                                                                                                                                                                                                    | Boolean        | false                                      |
| cache                  | whether to keep dom nodes when hidden                                                                                                                                                                                                                                                                                                  | Boolean        | false                                      |
| safeNode               | when clicking on the document, does not close the overlay if the node is included. If it is a function, it should return ref, if it is a string, it should be the id of the DOM element, it can also be directly passed to the DOM element, or the above values Array                                                                                                                                                                                                            | any            | -                                          |
| wrapperClassName       | class name of the overlay's wrapper node                                                                                                                                                                                                                                                                                                  | String         | -                                          |
| wrapperStyle           | inline stylesheet of the overlay's wrapper node                                                                                                                                                                                                                                                                                                | Object         | -                                          |
| animation              | configure animation, support the {in: 'enter-class', out: 'leave-class' } object parameters, if set to false, do not play the animation. Refer to `Animate` component documentation for available animations.                                                                                                                                                                                                                             | Object/Boolean | { in: 'expandInDown', out: 'expandOutUp' } |

### Overlay.Popup

> Inherited Overlay's API unless otherwise specified

| Param | Descripiton  | Type  | Default Value |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- |
| children              | content of overlay                                                                                                                                                                                            | ReactNode    | -               |
| trigger               | trigger the overlay to show or hide elements                                                                                                                                                                                    | ReactElement | -               |
| triggerType           | trigger the overlay to show or hide operations, either 'click', 'hover', 'focus', or an array of them, such as ['hover', 'focus']                                                                                                                                   | String/Array         | 'hover'         |
| triggerClickKeycode   | Customize the keyboard trigger keys that will trigger click event handlers when trigger is focused. It will only take effect when the triggerType is 'click'.                         | Number/Array | [KEYCODE.SPACE, KEYCODE.ENTER] |
| visible               | whether the overlay is visiible currently                                                                                                                                                                                        | Boolean      | -               |
| defaultVisible        | whether the overlay is visiible default                                                                                                                                                                                        | Boolean      | false           |
| onVisibleChange       | callback function triggered when the ovlery is visible or hidden<br><br>**signatures**:<br>Function(visible: Boolean, type: String, e: Object) => void<br>**params**:<br>_visible_: {Boolean} whether the overlay is visible<br>_type_: {String} the reason that triggers the overlay to show or hide<br>_e_: {Object} DOM event | Function     | func.noop       |
| disabled              | if set this property, the overlay cannot be shown or hidden                                                                                                                                                                                 | Boolean      | false           |
| delay                 | The delay time, in milliseconds, that the overlay shows or hides and only works when triggerType is set to hover                                                                                                                                              | Number       | 200             |
| canCloseByTrigger     | whether the trigger element can close the overlay                                                                                                                                                                                    | Boolean      | true            |
| target                | reference element for overlay positioning                                                                                                                                                                                       | any          | trigger element |
| followTrigger         | follow trigger to scroll or not                                                                                                                                                                                 | Boolean      | false           |



## ARIA and KeyBoard

`Description`: This component needs to be used in conjunction with other components to be prompted. Refer to the above `overlay`