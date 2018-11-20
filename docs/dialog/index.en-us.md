# Dialog

-   chinese: 弹窗
-   family: Feedback
-   category: Components
-   type: 弹层

---

## Guide

## When To Use

The dialog is used to provide the user with an auxiliary window for quickly performing a simple operation, confirming user information, or providing a feedback prompt without leaving the main path.

## API

### Dialog

| Param | Descripiton  | Type  | Default Value |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------- |
| visible              | whether is visible                                                                                                                                                                                                                                                | Boolean           | false                                                                             |
| title                | title of dialog                                                                                                                                                                                                                                                  | ReactNode         | -                                                                                 |
| children             | content of dialog                                                                                                                                                                                                                                                  | ReactNode         | -                                                                                 |
| footer               | bottom content, if yout set to false, will not display                                                                                                                                                                                                                              | Boolean/ReactNode | [&lt;Button type="primary"&gt;Ok&lt;/Button&gt;, &lt;Button&gt;Cancel&lt;/Button&gt;] |
| footerAlign          | alignment of footer<br><br>**option**:<br>'left', 'center', 'right'                                                                                                                                                                                              | Enum              | 'right'                                                                           |
| footerActions        | specify whether the ok button and the cancel button exist and how they are arranged<br><br>**option**：<br>['ok', 'cancel'] (The ok and the cancel buttons exist at the same time, and the ok button is on the left)<br>['cancel', 'ok'] (The ok and the cancel buttons exist at the same time, and the cancel button is on the left)<br>['ok'] (only ok button exists)<br>['cancel'] (only cancel button exists)                                                                                      | Array             | ['ok', 'cancel']                                                                  |
| onOk                 | callback function triggered when the ok button is clicked<br><br>**signatures**:<br>Function(event: Object) => void<br>**params**:<br>_event_: {Object} clicked event                                                                                                                                            | Function          | () => {}                                                                          |
| onCancel             | callback function triggered when the cancel button is clicked<br><br>**signatures**:<br>Function(event: Object) => void<br>**params**:<br>_event_: {Object} clicked event                                                                                                                                             | Function          | () => {}                                                                          |
| okProps              | properties of the ok button                                                                                                                                                                                                                                       | Object            | {}                                                                                |
| cancelProps          | properties of the cancel button                                                                                                                                                                                                                                        | Object            | {}                                                                                |
| closeable            | controls how the dialog is closed. The value can be either a String or Boolean, where the string consists of the following values: <br>**close** clicking the close button can close the dialog <br>**mask** clicking the mask can close the dialog <br>**esc** pressing the esc key can close the dialog <br> such as 'close' or 'close,esc,mask'<br>If set to true, all of the above close methods take effect <br>If set to false, all of the above close methods will fail | String/Boolean    | 'esc,close'                                                                       |
| onClose              | callback function triggered when the dialog closes<br><br>**signatures**:<br>Function(trigger: String, event: Object) => void<br>**params**:<br>_trigger_: {String} behavior triggered closed<br>_event_: {Object} closed event                                                                                        | Function          | () => {}                                                                          |
| afterClose           | callback function triggered after the dialog closed, if enabel animation, it will trigger after the animation ends. <br><br>**signatures**:<br>Function() => void                                                                                                                                                                                 | Function          | () => {}                                                                          |
| hasMask              | whether to has mask                                                                                                                                                                                                                                              | Boolean           | true                                                                              |
| animation            | open and close animation class name                                                                                                                                                                                                                                        | Object/Boolean    | {     in: 'fadeInDown',     out: 'fadeOutUp' }                                    |
| autoFocus            | whether to focus the element in the dialog automatically when the dialog is opened                                                                                                                                                                                                                                      | Boolean           | false                                                                             |
| align                | alignment of dialog, @see overlay docs for detail                                                                                                                                                                                                                                             | String/Boolean    | 'cc cc'                                                                           |
| isFullScreen         | when the height of the dialog exceeds the viewport height of the browser, whether to display all content of dialog or display scrollbars to ensure that the dialog is fully displayed in the viewport. This property is only effective when the dialog is vertically horizontally centered, that is, align is set to 'cc cc'                                                                                                                                                        | Boolean           | false                                                                             |
| shouldUpdatePosition | whether to update the dialog position when the dialog is rerendered. It is generally used to ensure the original alignment after the height of the dialog changes.                                                                                                                                                                                                       | Boolean           | false                                                                             |
| minMargin            | the minimum distance between the dialog box at the top and bottom of the browser, it will not work if set align to 'cc cc' and set isFullScreen to true                                                                                                                                                                               | Number            | 40                                                                                |
| overlayProps         | properties of Overlay                                                                                                                                                                                                                                        | Object            | {}                                                                                |

<!-- api-extra-start -->

### Dialog.alert(config)/Dialog.confirm(config)

The following only list common properties that config can pass, and other properties of the Dialog can also be passed in.

| Param | Descripiton  | Type  | Default Value |
| :----------- | :---------------- | :-------- | :------- |
| title        | title of dialog                | ReactNode | ''       |
| content      | content of dialog                | ReactNode | ''       |
| onOk         | callback function triggered when the ok button is clicked   | Function  | () => {} |
| onCancel     | callback function triggered when the cancel button is clicked   | Function  | () => {} |
| messageProps | properties of Message | Object    | {}       |

### Dialog.show

The following only list common properties that config can pass, and other properties of the Dialog can also be passed in.

| Param | Descripiton  | Type  | Default Value |
| :------- | :-------------- | :-------- | :------- |
| title    | title of dialog              | ReactNode | ''       |
| content  | content of dialog              | ReactNode | ''       |
| onOk     | callback function triggered when the ok button is clicked | Function  | () => {} |
| onCancel | callback function triggered when the cancel button is clicked | Function  | () => {} |

<!-- api-extra-end -->

## Know Issue

### Stay centered when the dialog height changes

The Dialog uses JS for positioning by default. When the content is too long, JS automatically adjusts the height of the dialog so that the action button appears in the visible area. However, this may result in the inability to perceive the reuse of JS positioning when the height of the dialog changes. There are two solutions:

1. Set `shouldUpdatePosition` to true to reposition after content is updated.

2. Use `isFullScreen` to enable CSS positioning. It can be adaptively centered no matter how the height of the dialog changes, but the action button cannot appear in the visible area when the content is too long.

## ARIA and Keyboard

| Keyboard        | Descripiton                                       |
| :-------- | :--------------------------------------- |
| esc       | pressing ESC will close dialog                |
| tab       | focus on any element that can be focused, the focus remains in the dialog when the dialog is displayed |
| shift+tab | back focus on any element that can be focused, the focus remains in the dialog when the dialog is displayed  |
