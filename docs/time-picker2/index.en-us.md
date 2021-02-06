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

By default, TimePicker using dayjs instance as input value, which is the suggestion way. In addition, input value as string is also supported, e.g. "12:00:00". The type of the first parameter in the callback of `onChange` is based on the input value.

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
| format           | time format<br><https://dayjs.gitee.io/docs/zh-CN/display/format>                                                                                                     | String    | 'HH:mm:ss' |
| hourStep         | Step of hour  | Number    | -          |
| minuteStep       | Step of minute | Number    | -          |
| secondStep       | Step of second | Number    | -          |
| disabledHours    | Function to disable hours <br><br>**signature**:<br>Function(index: Number) => Boolean<br>**paramter**:<br>_index_: {Number} hour 0 - 23<br>**return**:<br>{Boolean} if disabled<br>                            | Function  | -          |
| disabledMinutes  | Function to disable minutes <br><br>**signature**:<br>Function(index: Number) => Boolean<br>**paramter**:<br>_index_: {Number} minute 0 - 59<br>**return**:<br>{Boolean} if disabled<br>                            | Function  | -          |
| disabledSeconds  | Function to disable seconds <br><br>**signature**:<br>Function(index: Number) => Boolean<br>**paramter**:<br>_index_: {Number} second 0 - 59<br>**return**:<br>{Boolean} if disabled<br>                            | Function  | -          |
| renderTimeMenuItems | Render time menu<br>[{<br> label: '01',<br> value: 1<br>}]<br><br>**签名**:<br>Function(list: Array, mode: String, value: dayjs) => Array<br>**参数**:<br>_list_: {Array} default time menu list<br>_mode_: {String} menu type: hour, minute, second<br>_value_: {dayjs} value <br>**返回值**:<br>{Array}<br>
| visible          | Visible state of popup | Boolean   | -          |
| defaultVisible   | Default visible state of popup  | Boolean   | -          |
| popupContainer   | Container of popup<br><br>**signature**:<br>Function(target: Object) => ReactNode<br>**paramter**:<br>_target_: {Object} target container<br>**return**:<br>{ReactNode} container element<br>                            | Function  | -          |
| popupAlign       | Align of popup, @see Overylay doc for detail  | String    | 'tl tl'    |
| popupTriggerType | Trigger type of popup<br><br>**option**:<br>'click', 'hover'                                                                                                                        | Enum      | 'click'    |
| onVisibleChange  | Callback when visible changes<br><br>**signature**:<br>Function(visible: Boolean, reason: String) => void<br>**paramter**:<br>_visible_: {Boolean} visible of popup<br>_reason_: {String} reason to change visible | Function  | func.noop  |
| popupStyle       | Custom style of popup | Object    | -          |
| popupClassName   | Custom className of popup  | String    | -          |
| popupProps       | Props of popup  | Object    | -          |
| followTrigger    | follow Trigger or not                | Boolean         | -                                         |
| disabled         | Disable the picker  | Boolean   | false      |
| hasBorder           | Whether the input has border | Boolean   | true       |
| preset           | Rreset values, shown below the time panel.<br>Can be object or array of object, with the following properties.<br>**properties**:<br>label: {String} shown text <br> name: {String} key of React element, can be empty, and index will become key instead <br> value: {String/dayjs instance} date value | Object/Array   | -       |
| onChange         | Callback when date changes<br><br>**signature**:<br>Function(value: Object/String) => void<br>**paramter**:<br>_value_: {Object/String} date value                                                                  | Function  | func.noop  |

## ARIA and KeyBoard

| 按键    | 说明               |
| :---- | :--------------- |
| Enter | Open time select popup    |
| Esc   | Close time select popup |
| Up | Input previous seconds （if `disabledMinutes={true}` is previous minutes or previous hours） |
| Down | Input next seconds （if `disabledMinutes={true}`  is next minutes or next hours） |
| Page Up | Input previous minutes |
| Page Down |  Input next minutes |
| Alt + Page Up | Input previous hours |
| Alt + Page Down | Input next hours |
