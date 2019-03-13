# DatePicker

-   category: Components
-   family: DataEntry
-   chinese: 日期选择框
-   type: 表单

---

## Guide

DatePicker are used to select a single date for an input.

## API

### DatePicker

| Param | Descripiton  | Type  | Default Value |
| ----- |---------------- | -------------- | ------------ |
| label               | Inset label of input  | ReactNode      | -            |
| size                | Size of input<br><br>**option**:<br>'small', 'medium', 'large'                                                                                                            | Enum           | 'medium'     |
| state               | State of input<br><br>**option**:<br>'success', 'error'                                                                                                                    | Enum           | -            |
| placeholder         | Placeholder of input        | String         | -            |
| defaultVisibleMonth | Default visible month <br><br>**signature**:<br>Function() => MomentObject<br>**return**:<br>{MomentObject} moment instance with specified month<br>                                                    | Function       | -            |
| value               | Value of date-picker | custom         | -            |
| defaultValue        | Default value of date-picker  | custom         | -            |
| format              | Format of date value (it will also effect user input) | String         | 'YYYY-MM-DD' |
| showTime            | Enable time-picker, pass object like `{ defaultValue, format, ... }`       | Object/Boolean | false        |
| resetTime           | If reset time for every re-select | Boolean        | false        |
| disabledDate        | Function to disable date <br><br>**signature**:<br>Function(dateValue: MomentObject) => Boolean<br>**parameter**:<br>_dateValue_: {MomentObject} null<br>_view_: {Enum} current view type: 'year', 'month', 'date'<br>**return**:<br>{Boolean} if disable current date<br>                     | Function       | () => false  |
| footerRender        | Template render for custom footer<br><br>**signature**:<br>Function() => Node<br>**return**:<br>{Node} Custom footer<br>   | Function       | () => null   |
| onChange            | Callback when date changes <br><br>**signature**:<br>Function() => MomentObject<br>**return**:<br>{MomentObject} dateValue<br> | Function       | func.noop    |
| onOk                | Callback when click the ok button<br><br>**signature**:<br>Function() => MomentObject<br>**return**:<br>{MomentObject} dateValue<br>                                                                  | Function       | func.noop    |
| disabled            | Disable the picker    | Boolean        | -            |
| hasClear            | Has clear icon   | Boolean        | true         |
| visible             | Visible state of popup  | Boolean        | -            |
| defaultVisible      | Default visible state of popup   | Boolean        | -            |
| onVisibleChange     | Callback when visible state changes<br><br>**signature**:<br>Function(visible: Boolean, reason: String) => void<br>**parameter**:<br>_visible_: {Boolean} if popup visible<br>_reason_: {String} reason to change visible | Function       | func.noop    |
| popupTriggerType    | Trigger type of popup<br><br>**option**:<br>'click', 'hover'                                                                                                                     | Enum           | 'click'      |
| popupAlign          | Align of popup, see Overlay doc for detail  | String         | 'tl tl'      |
| popupContainer      | Container of popup <br><br>**signature**:<br>Function(target: Element) => Element<br>**parameter**:<br>_target_: {Element} target element<br>**return**:<br>{Element} container of popup<br>                        | Function       | -            |
| popupStyle          | Custom style of popup | Object         | -            |
| popupClassName      | Custom className of popup  | String         | -            |
| popupProps          | Props of popup    | Object         | -            |

### DatePicker.RangePicker

| Param | Description  | Type  | Default Value  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------ |
| size                | Size of input <br><br>**option**:<br>'small', 'medium', 'large'                                                                                                            | Enum           | 'medium'     |
| defaultVisibleMonth | Default visible month <br><br>**signature**:<br>Function() => MomentObject<br>**return**:<br>{MomentObject} moment instance with specified month<br>                                                 | Function       | -            |
| value               | Range value `[moment, moment]` | Array          | -            |
| defaultValue        | Default range value `[moment, moment]`    | Array          | - |
| format              | Date format    | String         | 'YYYY-MM-DD' |
| showTime            | Enable time picker  | Object/Boolean | false        |
| resetTime           | If reset time for every select     | Boolean        | false        |
| disabledDate        | Function to disable dates <br><br>**signature**:<br>Function(dateValue: MomentObject) => Boolean<br>**parameter**:<br>_dateValue_: {MomentObject} null<br>_view_: {Enum} current view type: 'year', 'month', 'date'<br>**return**:<br>{Boolean} if disabled<br>                     | Function       | () => false  |
| footerRender        | Template render for footer<br><br>**signature**:<br>Function() => Node<br>**return**:<br>{Node} custom footer<br>                                                                              | Function       | () => null   |
| onChange            | Callback when date changes <br><br>**signature**:<br>Function() => MomentObject<br>**return**:<br>{MomentObject} range values<br>                                                                 | Function       | func.noop    |
| onOk                | Callback when click ok button <br><br>**signature**:<br>Function() => MomentObject<br>**return**:<br>{MomentObject} range values<br>                                                                  | Function       | func.noop    |
| label               | Inset label of input  | ReactNode      | -            |
| state               | State of input<br><br>**option**:<br>'error', 'success'  | Enum           | -            |
| disabled            | Disable the picker | Boolean        | -            |
| hasClear            | Has clear icon  | Boolean        | true         |
| visible             | Visible state of popup  | Boolean        | -            |
| defaultVisible      | Default visible state of popup   | Boolean        | -            |
| onVisibleChange     | Callback when visible state changes<br><br>**signature**:<br>Function(visible: Boolean, reason: String) => void<br>**parameter**:<br>_visible_: {Boolean} if popup visible<br>_reason_: {String} reason to change visible | Function       | func.noop    |
| popupTriggerType    | Trigger type of popup <br><br>**option**:<br>'click', 'hover'   | Enum           | 'click'      |
| popupAlign          | Align of popup   | String         | 'tl tl'      |
| popupContainer      | Container of a popup<br><br>**signature**:<br>Function(target: Element) => Element<br>**option**:<br>_target_: {Element} target element<br>**return**:<br>{Element} coninter element of popup<br>                        | Function       | -            |
| popupStyle          | Custom style of popup  | Object         | -            |
| popupClassName      | Custom className of popup   | String         | -            |
| popupProps          | Props of popup  | Object         | -            |




## ARIA and KeyBoard

| 按键          | 说明                           |
| :---------- | :------------------------------ |
| number key    | Need to manual input  the date, the specified date format        |
| Enter       | open the calendar or select date                           |
| Esc         | close the calendar                  |
