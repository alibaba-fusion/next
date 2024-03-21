# Drawer

-   chinese: 抽屉
-   family: Feedback
-   category: Components
-   type: 弹层

---

## Guide

## When To Use

The Drawer is used to provide the user with an auxiliary window for quickly performing a simple operation, confirming user information, or providing a feedback prompt without leaving the main path.

### `v2` update

version 1.25 add api `v2` to support open new version Dialog, feature as list:

feature：

-   use css (not js) to compute position, will easier
-   support `width/height` to fix width/height of drawer, or you can set `auto` to follow content width/height

## API

### Drawer

| Param           | Description                                                                                                          | Type                                                                               | Default Value                                | Required | Supported Version |
| --------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- | -------- | ----------------- |
| closeable       | [Deprecated] Control the way the drawer is closed                                                                    | 'close' \| 'mask' \| 'esc' \| boolean \| 'close,mask' \| 'close,esc' \| 'mask,esc' | true                                         |          | -                 |
| closeMode       | Control the way the dialog is closed                                                                                 | CloseMode \| CloseMode[]                                                           | -                                            |          | 1.21              |
| cache           | Whether to retain the child node when hiding                                                                         | boolean                                                                            | -                                            |          | -                 |
| title           | Title                                                                                                                | React.ReactNode                                                                    | -                                            |          | -                 |
| bodyStyle       | Style on body                                                                                                        | React.CSSProperties                                                                | -                                            |          | -                 |
| headerStyle     | Style on header                                                                                                      | React.CSSProperties                                                                | -                                            |          | -                 |
| animation       | Animation playback method when showing and hiding<br/><br/>**signature**:<br/>**params**:<br/>_animation_: animation | { in: string; out: string } \| false                                               | \{ in: 'expandInDown', out: 'expandOutUp' \} |          | -                 |
| visible         | Whether to show                                                                                                      | boolean                                                                            | -                                            |          | -                 |
| width           | Width, only effective when placement is left right                                                                   | number \| string                                                                   | -                                            |          | -                 |
| height          | Height, only effective when placement is the top bottom                                                              | number \| string                                                                   | -                                            |          | -                 |
| onClose         | Callback when the dialog is closed                                                                                   | (reason: string, e: React.MouseEvent \| KeyboardEvent) => void                     | `() => {}`                                   |          | -                 |
| placement       | The position of the page                                                                                             | 'top' \| 'right' \| 'bottom' \| 'left'                                             | 'right'                                      |          | -                 |
| v2              | Enable v2 version                                                                                                    | false \| undefined                                                                 | false                                        |          | -                 |
| content         | Content                                                                                                              | React.ReactNode                                                                    | -                                            |          | -                 |
| popupContainer  | Render component container                                                                                           | string \| HTMLElement \| null                                                      | -                                            |          | -                 |
| hasMask         | Whether there is a mask                                                                                              | boolean                                                                            | true                                         |          | -                 |
| afterOpen       | Callback after the dialog is opened                                                                                  | () => void                                                                         | -                                            |          | -                 |
| onVisibleChange | [v2 Deprecated] Controlled mode (without trigger), only triggered when closed, equivalent to onClose                 | (visible: boolean, reason: string, e?: React.MouseEvent) => void                   | -                                            |          | -                 |

### Drawer V2

| Param          | Description                                                                                                          | Type                                                                               | Default Value                                | Required | Supported Version |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- | -------- | ----------------- |
| closeable      | [Deprecated] Control the way the drawer is closed                                                                    | 'close' \| 'mask' \| 'esc' \| boolean \| 'close,mask' \| 'close,esc' \| 'mask,esc' | true                                         |          | -                 |
| closeMode      | Control the way the dialog is closed                                                                                 | CloseMode \| CloseMode[]                                                           | -                                            |          | 1.21              |
| cache          | Whether to retain the child node when hiding                                                                         | boolean                                                                            | -                                            |          | -                 |
| title          | Title                                                                                                                | React.ReactNode                                                                    | -                                            |          | -                 |
| bodyStyle      | Style on body                                                                                                        | React.CSSProperties                                                                | -                                            |          | -                 |
| headerStyle    | Style on header                                                                                                      | React.CSSProperties                                                                | -                                            |          | -                 |
| animation      | Animation playback method when showing and hiding<br/><br/>**signature**:<br/>**params**:<br/>_animation_: animation | { in: string; out: string } \| false                                               | \{ in: 'expandInDown', out: 'expandOutUp' \} |          | -                 |
| visible        | Whether to show                                                                                                      | boolean                                                                            | -                                            |          | -                 |
| width          | Width, only effective when placement is left right                                                                   | number \| string                                                                   | -                                            |          | -                 |
| height         | Height, only effective when placement is the top bottom                                                              | number \| string                                                                   | -                                            |          | -                 |
| afterClose     | Callback after the dialog is closed                                                                                  | () => void                                                                         | -                                            |          | -                 |
| onClose        | Callback when the dialog is closed                                                                                   | (reason: string, e: React.MouseEvent \| KeyboardEvent) => void                     | `() => {}`                                   |          | -                 |
| placement      | The position of the page                                                                                             | 'top' \| 'right' \| 'bottom' \| 'left'                                             | 'right'                                      |          | -                 |
| v2             | Enable v2 version                                                                                                    | true                                                                               | false                                        |          | -                 |
| content        | Content                                                                                                              | React.ReactNode                                                                    | -                                            |          | -                 |
| popupContainer | Render component container                                                                                           | string \| HTMLElement \| null                                                      | -                                            |          | -                 |
| hasMask        | Whether there is a mask                                                                                              | boolean                                                                            | true                                         |          | -                 |

### CloseMode

```typescript
export type CloseMode = 'close' | 'mask' | 'esc';
```

<!-- api-extra-start -->

### Drawer.show

The following only list common properties that config can pass, and other properties of the Dialog can also be passed in.

| Param   | Descripiton       | Type      | Default Value |
| :------ | :---------------- | :-------- | :------------ |
| title   | title of drawer   | ReactNode | ''            |
| content | content of drawer | ReactNode | ''            |

<!-- api-extra-end -->

## ARIA and Keyboard

| Keyboard  | Descripiton                                                                                                 |
| :-------- | :---------------------------------------------------------------------------------------------------------- |
| esc       | pressing ESC will close dialog                                                                              |
| tab       | focus on any element that can be focused, the focus remains in the dialog when the dialog is displayed      |
| shift+tab | back focus on any element that can be focused, the focus remains in the dialog when the dialog is displayed |
