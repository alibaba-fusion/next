# Drawer

-   chinese: 抽屉
-   family: Feedback
-   category: Components
-   type: 弹层

---

## Guide

## When To Use

The Drawer is used to provide the user with an auxiliary window for quickly performing a simple operation, confirming user information, or providing a feedback prompt without leaving the main path.

## API

### Drawer

> Inherited Overlay.Popup's API unless otherwise specified

| Param | Descripiton  | Type  | Default Value |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------- |
| trigger               | trigger the overlay to show or hide elements                                                                                                                                                                                    | ReactElement | -               |
| triggerType           | trigger the overlay to show or hide operations, either 'click', 'hover', 'focus', or an array of them, such as ['hover', 'focus']                                                                                                                                   | String/Array         | 'hover'         |
| visible               | whether the overlay is visiible currently                                                                                                                                                                                        | Boolean      | -               |
| animation              | configure animation, support the {in: 'enter-class', out: 'leave-class' } object parameters, if set to false, do not play the animation. Refer to `Animate` component documentation for available animations.                                                                                                                                                                                                                             | Object/Boolean | { in: 'expandInDown', out: 'expandOutUp' } |
| hasMask                | whether to show the mask                                                                                                                                                                                                                                                                                                      | Boolean        | false                                      |
| closeable            | controls how the dialog is closed. The value can be either a String or Boolean, where the string consists of the following values: <br>**close** clicking the close button can close the dialog <br>**mask** clicking the mask can close the dialog <br>**esc** pressing the esc key can close the dialog <br> such as 'close' or 'close,esc,mask'<br>If set to true, all of the above close methods take effect <br>If set to false, all of the above close methods will fail | String/Boolean    | 'esc,close'                                                                       |
| onVisibleChange       | callback function triggered when the ovlery is visible or hidden<br><br>**signatures**:<br>Function(visible: Boolean, type: String, e: Object) => void<br>**params**:<br>_visible_: {Boolean} whether the overlay is visible<br>_type_: {String} the reason that triggers the overlay to show or hide<br>_e_: {Object} DOM event | Function     | func.noop       |
| placement       | placement of the drawer <br><br>**options**:<br>'top', 'right', 'bottom', 'left'                                                                                                                                                                                     | Enum           | 'right' |

## ARIA and Keyboard

| Keyboard        | Descripiton                                       |
| :-------- | :--------------------------------------- |
| esc       | pressing ESC will close dialog                |
| tab       | focus on any element that can be focused, the focus remains in the dialog when the dialog is displayed |
| shift+tab | back focus on any element that can be focused, the focus remains in the dialog when the dialog is displayed  |
