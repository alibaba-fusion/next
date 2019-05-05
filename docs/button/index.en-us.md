# Button

-   category: Components
-   family: General
-   chinese: 按钮
-   type: Form

---

Button used to trigger an action.

## Guide

### When To Use

Buttons are used for emphasizing important functions on your page.

## API

### Button

| Param        | Description                                                                                                           | Type       | Default Value      |
| --------- | ------------------------------------------------------------------------------------------------------------ | -------- | -------- |
| size      | Size of button<br><br>**return**:<br>'small', 'medium', 'large'                                                          | Enum     | 'medium' |
| type      | Typeo of button<br><br>**return**:<br>'primary', 'secondary', 'normal'                                                    | Enum     | 'normal' |
| iconSize  | Size of icon in button <br><br>**return**:<br>'xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl' | Enum     | -        |
| htmlType  | Original html type <br><br>**return**:<br>'submit', 'reset', 'button'  | Enum     | 'button' |
| component | The html tag to be rendered <br><br>**return**:<br>'button', 'a', 'div', 'span'                                                                       | Enum     | 'button' |
| loading   | Loading state of a button | Boolean  | false    |
| ghost     | Setting ghost button<br><br>**return**:<br>true, false, 'light', 'dark'                                                      | Enum     | false    |
| text      | Setting text button | Boolean  | false    |
| warning   | Settting warning button | Boolean  | false    |
| disabled  | whether is disabled     | Boolean  | false    |
| onClick   | Callback of click event <br><br>**signature**:<br>Function(e: Object) => void<br>**return**:<br>_e_: {Object} Event Object               | Function | () => {} |

### Button.Group

| Param   | Description                  | Type     | Default Value      |
| ---- | ------------------- | ------ | -------- |
| size | Size of buttons in group | String | 'medium' |


## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Enter       | Trigger the onClick event    |
| SPACE       | Trigger the onClick event    |
