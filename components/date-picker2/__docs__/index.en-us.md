# DatePicker

-   category: Components
-   family: DataEntry
-   chinese: 日期选择框
-   type: 表单

---

## Guide

DatePicker are used to select a single date for an input.

## API

### DatePicker2

| Param              | Description                                                                                                                              | Type                                                                                                 | Default Value | Required |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------- | -------- |
| type               | Date picker type                                                                                                                         | 'date' \| 'range'                                                                                    | 'date'        |          |
| mode               | Date panel mode                                                                                                                          | ModeType                                                                                             | 'date'        |          |
| value              | Time value (Dayjs object or time string, controlled state use)                                                                           | string \| Dayjs \| null \| (Dayjs \| null \| string)[]                                               | -             |          |
| defaultValue       | Time init value (Dayjs object or time string, uncontrolled state use)                                                                    | string \| Dayjs \| (Dayjs \| null \| string)[]                                                       | -             |          |
| defaultPanelValue  | Default panel value                                                                                                                      | Dayjs                                                                                                | -             |          |
| disabledDate       | Disable date function<br/><br/>**signature**:<br/>**params**:<br/>_value_: value<br/>_mode_: mode                                        | (value: Dayjs, mode: ModeType) => boolean                                                            | -             |          |
| extraFooterRender  | Bottom extra rendering                                                                                                                   | React.ReactNode \| (() => React.ReactNode)                                                           | -             |          |
| preset             | Preset values                                                                                                                            | PresetType \| PresetType[]                                                                           | -             |          |
| showTime           | Whether to show time                                                                                                                     | boolean                                                                                              | -             |          |
| showOk             | Whether to show the confirmation button                                                                                                  | boolean                                                                                              | -             |          |
| resetTime          | Whether to reset the time                                                                                                                | boolean                                                                                              | -             |          |
| timePanelProps     | Time panel properties                                                                                                                    | Partial\<TimePanelProps>                                                                             | -             |          |
| disabledTime       | Disable time                                                                                                                             | object                                                                                               | -             |          |
| onOk               | Callback when the confirm button is clicked<br/><br/>**signature**:<br/>**params**:<br/>_value_: value<br/>_strVal_: strVal              | ((value: Dayjs, strVal: string) => void) \| ((value: Array\<Dayjs>, strVal: Array\<string>) => void) | -             |          |
| onChange           | Callback when the value changes<br/><br/>**signature**:<br/>**params**:<br/>_value_: value<br/>_strVal_: strVal                          | (value: Dayjs, strVal: string) => void                                                               | -             |          |
| onVisibleChange    | Callback when the panel visible changes<br/><br/>**signature**:<br/>**params**:<br/>_visible_: visible                                   | (visible: boolean) => void                                                                           | -             |          |
| onPanelChange      | Callback when the panel mode changes<br/><br/>**signature**:<br/>**params**:<br/>_panelValue_: panelValue<br/>_mode_: mode               | (<br/> panelValue: Dayjs,<br/> mode: ModeType<br/> ) => void                                         | -             |          |
| format             | Date format                                                                                                                              | string \| ((value: Dayjs) => string)                                                                 | 'YYYY-MM      |          |
| outputFormat       | Output format: control the output value format of onChange and onOk events                                                               | string \| ((value: Dayjs) => string)                                                                 | -             |          |
| disabled           | Whether to disable                                                                                                                       | boolean \| boolean[]                                                                                 | -             |          |
| state              | Date selection state                                                                                                                     | 'success' \| 'loading' \| 'error'                                                                    | -             |          |
| size               | Input size                                                                                                                               | 'small' \| 'medium' \| 'large'                                                                       | -             |          |
| hasBorder          | Whether to show the border                                                                                                               | boolean                                                                                              | -             |          |
| inputProps         | Input properties                                                                                                                         | InputProps                                                                                           | -             |          |
| inputReadOnly      | Whether the input is read                                                                                                                | boolean                                                                                              | -             |          |
| hasClear           | Whether to display the clear button                                                                                                      | boolean                                                                                              | -             |          |
| label              | Label                                                                                                                                    | React.ReactNode                                                                                      | -             |          |
| separator          | Separator                                                                                                                                | React.ReactNode                                                                                      | -             |          |
| placeholder        | Input placeholder                                                                                                                        | string \| string[]                                                                                   | -             |          |
| visible            | Whether the panel is displayed                                                                                                           | boolean                                                                                              | -             |          |
| defaultVisible     | Whether the default panel is displayed                                                                                                   | boolean                                                                                              | false         |          |
| trigger            | Trigger element                                                                                                                          | React.ReactNode \| (() => React.ReactNode)                                                           | -             |          |
| popupTriggerType   | Popup trigger type                                                                                                                       | 'click' \| 'hover'                                                                                   | 'click'       |          |
| popupAlign         | Popup alignment                                                                                                                          | string                                                                                               | -             |          |
| popupContainer     | Popup container                                                                                                                          | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement)                                      | -             |          |
| popupStyle         | Popup style                                                                                                                              | React.CSSProperties                                                                                  | -             |          |
| popupClassName     | Popup className                                                                                                                          | string                                                                                               | -             |          |
| popupProps         | Popup properties                                                                                                                         | PopupProps                                                                                           | -             |          |
| followTrigger      | Whether Pop                                                                                                                              | boolean                                                                                              | -             |          |
| popupComponent     | Popup component                                                                                                                          | React.Component                                                                                      | -             |          |
| dateCellRender     | Custom rendering of date cell<br/><br/>**signature**:<br/>**params**:<br/>_value_: value                                                 | (value: Dayjs) => React.ReactNode                                                                    | -             |          |
| monthCellRender    | Custom rendering of month cell<br/><br/>**signature**:<br/>**params**:<br/>_value_: value                                                | (value: Dayjs) => React.ReactNode                                                                    | -             |          |
| dateInputAriaLabel | Date input aria                                                                                                                          | string                                                                                               | -             |          |
| isPreview          | Whether it is preview                                                                                                                    | boolean                                                                                              | -             |          |
| renderPreview      | Content rendered in preview mode<br/><br/>**signature**:<br/>**params**:<br/>_value_: value                                              | (value: Dayjs \| Dayjs[]) => React.ReactNode                                                         | -             |          |
| onCalendarChange   | Callback when the date panel value changes<br/><br/>**signature**:<br/>**params**:<br/>_values_: values<br/>_formatString_: formatString | (values: Dayjs[] \| null, formatString: string[]) => void                                            | -             |          |

### DatePicker2.RangePicker

| Param              | Description                                                                                                                              | Type                                                                                          | Default Value | Required |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------- | -------- |
| value              | Time value (controlled state use)                                                                                                        | Array\<ConfigType>                                                                            | -             |          |
| defaultValue       | Time default value                                                                                                                       | Array\<ConfigType>                                                                            | -             |          |
| format             | Time format                                                                                                                              | string \| ((value: Dayjs) => string) \| (string \| ((value: Dayjs) => string))[]              | -             |          |
| onOk               | Callback when the ok button is clicked                                                                                                   | (value: Array\<Dayjs>, strVal: Array\<string>) => void                                        | -             |          |
| onChange           | Callback when the value changes                                                                                                          | (value: Array\<Dayjs>, strVal: Array\<string>) => void                                        | -             |          |
| outputFormat       | Output format: control the output value format of onChange and onOk events                                                               | \| string<br/> \| ((value: Dayjs) => string)<br/> \| (string \| ((value: Dayjs) => string))[] | -             |          |
| placeholder        | Input placeholder                                                                                                                        | string \| Array\<string>                                                                      | -             |          |
| dateInputAriaLabel | Date input aria                                                                                                                          | Array\<string> \| string                                                                      | -             |          |
| disabled           | Whether to disable                                                                                                                       | boolean \| boolean[]                                                                          | -             |          |
| onCalendarChange   | Callback when the date panel value changes<br/><br/>**signature**:<br/>**params**:<br/>_values_: values<br/>_formatString_: formatString | (values: [Dayjs, Dayjs], formatString: [string, string]) => void                              | -             |          |

## ARIA and KeyBoard

When the `Date Picker` is focused, press `enter` will open popup to input date or time.

| 按键            | 说明                                                                                |
| :-------------- | :---------------------------------------------------------------------------------- |
| number key      | Need to manual input the date, the specified date format                            |
| Enter           | open the calendar or select date after input date                                   |
| Esc             | close the calendar                                                                  |
| Up              | Input previous day（Month Picker is previous month， Year Picker is previous year） |
| Down            | Input next day（Month Picker is next month， Year Picker is next year）             |
| Page Up         | Input previous month                                                                |
| Page Down       | Input next month                                                                    |
| Alt + Page Up   | Input previous year                                                                 |
| Alt + Page Down | Input next year                                                                     |
