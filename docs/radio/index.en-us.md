# Radio

-   category: Components
-   family: DataEntry
-   type: Form Component

---

## Guide

Radio

### When to use

Radio buttons allow the user to select a single option from data-set. User can use the radio button for exlusive opration and see all the options side by side. Otherwsie, consider using `<DropDown/>` that take up less space than showing all the option.

## API

### Radio

| Param | Descripiton  | Type  | Default Value |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------- |
| id             | Input`s id in component            | String   | -         |
| checked        | To set radio button is checked                                                                                                                               | Boolean  | -         |
| defaultChecked | To set radio button default to be checked                                                                                                                 | Boolean  | -         |
| label          | To set the radio label                                                                                                                                | String   | -         |
| onChange       | Callback on state change<br><br>**signatures**:<br>Function(checked: Boolean, e: Event) => void<br>**params**:<br>_checked_: {Boolean} Is checked<br>_e_: {Event} Dom Event | Function | func.noop |
| onMouseEnter   | Callback on mouse enter<br><br>**signatures**:<br>Function(e: Event) => void<br>**params**:<br>_e_: {Event} Dom Event                                               | Function | func.noop |
| onMouseLeave   | Callback on mouse leave<br><br>**signatures**:<br>Function(e: Event) => void<br>**params**:<br>_e_: {Event} Dom Event                                                    | Function | func.noop |
| disabled       | Set radio button disabel to be used                                                                                                                                 | Boolean  | -         |
| value          | value                                                                                                                               | String/Number/Boolean | -         |
| name           | name                                                                                                                                       | String                | -         |

### Radio.Group

| Param | Descripiton  | Type  | Default Value |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------- |
| name         | name                                                                                                                                               | String                              | -         |
| value        | The value of the Item witch is selected in radio group                  | String/Number/Boolean               | -         |
| size         | Used with `shape` prop，valid when shape is set to button<br><br>**option**:<br>'large'<br>'medium'<br>'small'              | Enum                                | 'medium'  |
| shape        | Make radio shape like button, when it set value to 'button'<br><br>**option**:<br>'button'                                                                                                 | Enum                                | -         |
| defaultValue | The value of the Item witch is default selected in radio group                                                                                                                            | String/Number/Boolean               | -         |
| onChange     | Callback on state change<br><br>**signatures**:<br>Function(value: String/Number, e: Event) => void<br>**params**:<br>_value_: {String/Number} The selected value <br>_e_: {Event} Dom Event | Function                            | () => { } |
| disabled     | All the radios in group are  disable to be used                        | Boolean                             | -         |
| dataSource   | The data of radio buttons, it can be a String or a Object. For example: `['apple', 'pear', 'orange']`                                                                                     | Array&lt;any>                       | \[]       |
| children     | To set radio button by setting children components                   | Array&lt;ReactElement>/ReactElement | -         |
| itemDirection    | The direction of item's aligning<br>- hoz: horizonal (default)<br>- ver: vertical<br><br>**Allowed values**:<br>'hoz', 'ver'                                                 | Enum                                | 'hoz' |


## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Tab       | Get the focus, if there is no selection, it is the first one, then you can select it with a space. If it is selected, it will focus on the selected item, and then left-right will navigate and select radio.    |