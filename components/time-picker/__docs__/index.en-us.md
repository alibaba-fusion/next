# TimePicker

-   category: Components
-   family: DataEntry
-   chinese: 时间选择框
-   type: Form

---

## Guide

### When To Use

A TimePicker is used to input a time by displaying an interface the user can interact with. The TimePicker panel only support 24h clock. Setting `format` with:

| Format | Example | Description |
| ------ | ------- | ----------- |
| `H HH` | `0..23` | Hour，24h   |
| `m mm` | `0..59` | Minute      |
| `s ss` | `0..59` | Second      |

By default, TimePicker using moment instance as input value, which is the suggestion way. In addition, input value as string is also supported, e.g. "12:00:00". The type of the first parameter in the callback of `onChange` is based on the input value.

## API

### TimePicker

| Param               | Description                                                                                                                  | Type                                                                                                                                           | Default Value | Required |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| label               | Button text                                                                                                                  | React.ReactNode                                                                                                                                | -             |          |
| state               | Input state                                                                                                                  | 'error' \| 'success'                                                                                                                           | -             |          |
| placeholder         | Input hint                                                                                                                   | string                                                                                                                                         | -             |          |
| value               | Time value (moment object or time string, controlled state use)                                                              | string \| Moment \| null                                                                                                                       | -             |          |
| defaultValue        | Time init value (moment object or time string, uncontrolled state use)                                                       | string \| Moment                                                                                                                               | -             |          |
| size                | Size of time picker                                                                                                          | 'small' \| 'medium' \| 'large'                                                                                                                 | -             |          |
| hasClear            | Whether to allow clearing time                                                                                               | boolean                                                                                                                                        | -             |          |
| format              | Time format                                                                                                                  | string                                                                                                                                         | -             |          |
| hourStep            | Hour option step                                                                                                             | number                                                                                                                                         | -             |          |
| minuteStep          | Minute option step                                                                                                           | number                                                                                                                                         | -             |          |
| secondStep          | Second option step                                                                                                           | number                                                                                                                                         | -             |          |
| disabledHours       | Disable hour function                                                                                                        | (index: number) => boolean                                                                                                                     | -             |          |
| disabledMinutes     | Disable minute function                                                                                                      | (index: number) => boolean                                                                                                                     | -             |          |
| disabledSeconds     | Disable second function                                                                                                      | (index: number) => boolean                                                                                                                     | -             |          |
| visible             | Popup layer display status (controlled)                                                                                      | boolean                                                                                                                                        | -             |          |
| defaultVisible      | Popup layer default display status (uncontrolled)                                                                            | boolean                                                                                                                                        | -             |          |
| popupContainer      | Popup layer container                                                                                                        | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement)                                                                                | -             |          |
| popupAlign          | Popup layer alignment, see Overlay documentation                                                                             | string                                                                                                                                         | -             |          |
| popupTriggerType    | Popup layer trigger type                                                                                                     | 'click' \| 'hover'                                                                                                                             | -             |          |
| onVisibleChange     | Callback when the popup layer display status changes                                                                         | (visible: boolean, reason: string) => void                                                                                                     | -             |          |
| popupStyle          | Popup layer custom style                                                                                                     | React.CSSProperties                                                                                                                            | -             |          |
| popupClassName      | Popup layer custom style class                                                                                               | string                                                                                                                                         | -             |          |
| popupProps          | Popup layer property                                                                                                         | PopupProps                                                                                                                                     | -             |          |
| disabled            | Disabled                                                                                                                     | boolean                                                                                                                                        | -             |          |
| isPreview           | Is preview                                                                                                                   | boolean                                                                                                                                        | -             |          |
| renderPreview       | Content of preview mode                                                                                                      | (value: Moment \| null, props: TimePickerProps) => React.ReactNode                                                                             | -             |          |
| onChange            | Callback when the time value changes                                                                                         | (value: Moment \| string \| null) => void                                                                                                      | -             |          |
| renderTimeMenuItems | Render the selectable time list<br/><br/>**signature**:<br/>**params**:<br/>_list_: list<br/>_mode_: mode<br/>_value_: value | (<br/> list: Array\<TimeMenuListItem>,<br/> mode: TimeMenuProps['mode'],<br/> value: TimeMenuProps['value']<br/> ) => Array\<TimeMenuListItem> | -             |          |
| inputProps          | Custom input property                                                                                                        | InputProps                                                                                                                                     | -             |          |
| popupContent        | Popup content                                                                                                                | React.ReactNode                                                                                                                                | -             |          |
| followTrigger       | Follow trigger element                                                                                                       | boolean                                                                                                                                        | -             |          |

## ARIA and KeyBoard

| 按键            | 说明                                                                                         |
| :-------------- | :------------------------------------------------------------------------------------------- |
| Enter           | Open time select popup                                                                       |
| Esc             | Close time select popup                                                                      |
| Up              | Input previous seconds （if `disabledMinutes={true}` is previous minutes or previous hours） |
| Down            | Input next seconds （if `disabledMinutes={true}` is next minutes or next hours）             |
| Page Up         | Input previous minutes                                                                       |
| Page Down       | Input next minutes                                                                           |
| Alt + Page Up   | Input previous hours                                                                         |
| Alt + Page Down | Input next hours                                                                             |
