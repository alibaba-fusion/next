# TimePicker

-   category: Components
-   family: DataEntry
-   chinese: 时间选择框
-   type: Form

---

## Guide

### When To Use

A TimePicker is used to input a time by displaying an interface the user can interact with. The TimePicker panel only support 24h clock. Setting `format` with:

| Format     | Example      | Description       |
| ------ | ------- | -------- |
| `H HH` | `0..23` | Hour，24h |
| `m mm` | `0..59` | Minute        |
| `s ss` | `0..59` | Second        |

By default, TimePicker using moment instance as input value, which is the suggestion way. In addition, input value as string is also supported, e.g. "12:00:00". The type of the first parameter in the callback of `onChange` is based on the input value.

## API

### TimePicker

| Param | Descripiton  | Type  | Default Value |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- |
| label            | Inset label of input | ReactNode | -          |
| size             | Size of input <br><br>**option**:<br>'small', 'medium', 'large'                                                                                                            | Enum      | 'medium'   |
| state            | State of input <br><br>**option**:<br>'error', 'success'                                                                                                                       | Enum      | -          |
| placeholder      | Placeholder of input | String    | -          |
| value            | Time value  | custom    | -          |
| defaultValue     | Defualt time value | custom    | -          |
| hasClear         | Has clear icon | Boolean   | true       |
| format           | time format<br><https://momentjs.com/docs/#/parsing/string-format/>                                                                                                     | String    | 'HH:mm:ss' |
| hourStep         | Step of hour  | Number    | -          |
| minuteStep       | Step of minute | Number    | -          |
| secondStep       | Step of second | Number    | -          |
| disabledHours    | Function to disable hours <br><br>**signature**:<br>Function(index: Number) => Boolean<br>**paramter**:<br>_index_: {Number} hour 0 - 23<br>**return**:<br>{Boolean} if disabled<br>                            | Function  | -          |
| disabledMinutes  | Function to disable minutes <br><br>**signature**:<br>Function(index: Number) => Boolean<br>**paramter**:<br>_index_: {Number} minute 0 - 59<br>**return**:<br>{Boolean} if disabled<br>                            | Function  | -          |
| disabledSeconds  | Function to disable seconds <br><br>**signature**:<br>Function(index: Number) => Boolean<br>**paramter**:<br>_index_: {Number} second 0 - 59<br>**return**:<br>{Boolean} if disabled<br>                            | Function  | -          |
| visible          | Visible state of popup | Boolean   | -          |
| defaultVisible   | Default visible state of popup  | Boolean   | -          |
| popupContainer   | Container of popup<br><br>**signature**:<br>Function(target: Object) => ReactNode<br>**paramter**:<br>_target_: {Object} target container<br>**return**:<br>{ReactNode} container element<br>                            | Function  | -          |
| popupAlign       | Align of popup, @see Overylay doc for detail  | String    | 'tl tl'    |
| popupTriggerType | Trigger type of popup<br><br>**option**:<br>'click', 'hover'                                                                                                                        | Enum      | 'click'    |
| onVisibleChange  | Callback when visible changes<br><br>**signature**:<br>Function(visible: Boolean, reason: String) => void<br>**paramter**:<br>_visible_: {Boolean} visible of popup<br>_reason_: {String} reason to change visible | Function  | func.noop  |
| popupStyle       | Custom style of popup | Object    | -          |
| popupClassName   | Custom className of popup  | String    | -          |
| popupProps       | Props of popup  | Object    | -          |
| disabled         | Disable the picker  | Boolean   | false      |
| onChange         | Callback when date changes<br><br>**signature**:<br>Function(value: Object/String) => void<br>**paramter**:<br>_value_: {Object/String} date value                                                                  | Function  | func.noop  |