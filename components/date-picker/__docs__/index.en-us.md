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

| Param                | Description                                                                               | Type                                                               | Default Value | Required |
| -------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------- | -------- |
| label                | Inset label of input                                                                      | React.ReactNode                                                    | -             |          |
| state                | Input status                                                                              | 'success' \| 'loading' \| 'error'                                  | -             |          |
| placeholder          | Placeholder                                                                               | string                                                             | -             |          |
| defaultVisibleMonth  | Default displayed month                                                                   | () => Moment                                                       | -             |          |
| defaultVisibleYear   | Default displayed year                                                                    | () => Moment                                                       | -             |          |
| value                | Date value, moment object, controlled                                                     | string \| Moment \| null                                           | -             |          |
| defaultValue         | Initial date value, moment object, uncontrolled                                           | string \| Moment \| null                                           | -             |          |
| format               | Date value format(for restricting user input and display)                                 | string                                                             | 'YYYY-MM      |          |
| showTime             | Whether to use time control, pass the props of TimePicker \{ defaultValue, format, ... \} | TimePickerProps \| boolean                                         | false         |          |
| resetTime            | Whether to reset time when selecting a date(only valid when showTime is enabled)          | boolean                                                            | false         |          |
| disabledDate         | Disable date function                                                                     | (date: Moment, view: string) => boolean                            | -             |          |
| footerRender         | Custom panel footer                                                                       | () => React.ReactNode                                              | -             |          |
| onChange             | Callback when the date value changes                                                      | (value: string \| Moment \| null) => void                          | -             |          |
| onOk                 | Callback when the confirm button is clicked                                               | (value: string \| Moment \| null) => void                          | -             |          |
| size                 | Input box size                                                                            | 'small' \| 'medium' \| 'large'                                     | 'medium'      |          |
| disabled             | Whether to disable                                                                        | boolean                                                            | -             |          |
| hasClear             | Whether to display the clear button                                                       | boolean                                                            | true          |          |
| visible              | Pop                                                                                       | boolean                                                            | -             |          |
| defaultVisible       | Pop                                                                                       | boolean                                                            | false         |          |
| onVisibleChange      | Callback when the pop                                                                     | (visible: boolean, reason: string) => void                         | -             |          |
| onVisibleMonthChange | Callback when the pop                                                                     | (value: Moment, reason: string) => void                            | -             |          |
| popupTriggerType     | Pop                                                                                       | 'click' \| 'hover'                                                 | 'click'       |          |
| popupAlign           | Pop                                                                                       | string                                                             | 'tl tl'       |          |
| popupContainer       | Pop                                                                                       | PopupProps['container']                                            | -             |          |
| popupStyle           | Pop                                                                                       | React.CSSProperties                                                | -             |          |
| popupClassName       | Pop                                                                                       | string                                                             | -             |          |
| popupProps           | Pop                                                                                       | React.PropsWithRef\<PopupProps>                                    | -             |          |
| inputProps           | Input box other attributes                                                                | InputProps                                                         | -             |          |
| dateCellRender       | Custom date rendering function                                                            | (calendarDate: Moment) => React.ReactNode                          | -             |          |
| monthCellRender      | Custom month rendering function                                                           | (calendarDate: Moment) => React.ReactNode                          | -             |          |
| yearCellRender       | Custom year rendering function                                                            | (calendarDate: Moment) => React.ReactNode                          | -             |          |
| dateInputAriaLabel   | Date input box aria                                                                       | string                                                             | -             |          |
| timeInputAriaLabel   | Time input box aria                                                                       | string                                                             | -             |          |
| isPreview            | Whether it is a preview state                                                             | boolean                                                            | -             |          |
| renderPreview        | Preview state custom rendering function                                                   | (value: Moment \| null, props: DatePickerProps) => React.ReactNode | -             |          |
| followTrigger        | Whether Pop                                                                               | boolean                                                            | -             |          |
| popupComponent       | Custom pop                                                                                | React.ComponentType\<unknown>                                      | -             |          |
| popupContent         | Custom pop                                                                                | React.ReactElement                                                 | -             |          |
| disableChangeMode    | Disable date selection                                                                    | boolean                                                            | -             |          |
| yearRange            | Year range, [START_YEAR, END_YEAR]                                                        | [start: number, end: number]                                       | -             |          |

### DatePicker.MonthPicker

| Param              | Description                                               | Type                                                     | Default Value | Required |
| ------------------ | --------------------------------------------------------- | -------------------------------------------------------- | ------------- | -------- |
| label              | Inset label of input                                      | React.ReactNode                                          | -             |          |
| state              | Input status                                              | 'success' \| 'loading' \| 'error'                        | -             |          |
| placeholder        | Placeholder                                               | string                                                   | -             |          |
| defaultVisibleYear | Default displayed year                                    | () => Moment \| null                                     | -             |          |
| value              | Date value, moment object, controlled                     | string \| Moment \| null                                 | -             |          |
| defaultValue       | Initial date value, moment object, uncontrolled           | string \| Moment \| null                                 | -             |          |
| format             | Date value format(for restricting user input and display) | string                                                   | 'YYYY         |          |
| disabledDate       | Disable date function                                     | (date: Moment, view: string) => boolean                  | -             |          |
| footerRender       | Custom panel footer                                       | () => React.ReactNode                                    | -             |          |
| onChange           | Callback when the date value changes                      | (value: Moment \| string \| null) => void                | -             |          |
| size               | Input box size                                            | 'small' \| 'medium' \| 'large'                           | 'medium'      |          |
| disabled           | Whether to disable                                        | boolean                                                  | -             |          |
| hasClear           | Whether to display the clear button                       | boolean                                                  | true          |          |
| visible            | Pop                                                       | boolean                                                  | -             |          |
| defaultVisible     | Pop                                                       | boolean                                                  | -             |          |
| onVisibleChange    | Callback when the pop                                     | (visible: boolean, reason: string) => void               | -             |          |
| popupTriggerType   | Pop                                                       | 'click' \| 'hover'                                       | 'click'       |          |
| popupAlign         | Pop                                                       | string                                                   | 'tl tl'       |          |
| popupContainer     | Pop                                                       | PopupProps['container']                                  | -             |          |
| popupStyle         | Pop                                                       | React.CSSProperties                                      | -             |          |
| popupClassName     | Pop                                                       | string                                                   | -             |          |
| popupProps         | Pop                                                       | React.PropsWithRef\<PopupProps>                          | -             |          |
| popupComponent     | Custom pop                                                | React.ComponentType\<unknown>                            | -             |          |
| popupContent       | Custom pop                                                | React.ReactElement                                       | -             |          |
| followTrigger      | Whether Pop                                               | boolean                                                  | -             |          |
| inputProps         | Input box other attributes                                | InputProps                                               | -             |          |
| monthCellRender    | Custom month rendering function                           | (calendarDate: Moment) => React.ReactNode                | -             |          |
| dateInputAriaLabel | Date input box aria                                       | string                                                   | -             |          |
| renderPreview      | Preview state custom rendering function                   | (value: Moment \| null, props: MonthPickerProps) => void | -             |          |
| yearCellRender     | Custom year rendering function                            | (calendarDate: Moment) => React.ReactNode                | -             |          |
| isPreview          | Whether it is a preview state                             | boolean                                                  | -             |          |

### DatePicker.RangePicker

| Param                   | Description                                                                               | Type                                                                                                                                                              | Default Value | Required |
| ----------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| type                    | Date range type                                                                           | 'date' \| 'month' \| 'year'                                                                                                                                       | -             |          |
| defaultVisibleMonth     | Default displayed start month                                                             | () => Moment \| null                                                                                                                                              | -             |          |
| placeholder             | Placeholder                                                                               | Array\<string> \| string                                                                                                                                          | -             |          |
| value                   | Date range value array [moment, moment]                                                   | [start: Moment \| string \| null \| undefined, end?: Moment \| string \| undefined \| null]                                                                       | -             |          |
| defaultValue            | Initial date range value array [moment, moment]                                           | [<br/> start: Moment \| string \| null \| undefined,<br/> end?: Moment \| string \| undefined \| null,<br/> ]                                                     | -             |          |
| format                  | Date value format(for restricting user input and display)                                 | string                                                                                                                                                            | -             |          |
| showTime                | Whether to use time control, pass the props of TimePicker \{ defaultValue, format, ... \} | \| (Omit\<TimePickerProps, 'defaultValue'> & {<br/> defaultValue?: Moment \| string \| null \| (Moment \| string \| null \| undefined)[];<br/> })<br/> \| boolean | false         |          |
| resetTime               | Whether to reset time when selecting a date(only valid when showTime is enabled)          | boolean                                                                                                                                                           | false         |          |
| disabledDate            | Disable date function                                                                     | (date: Moment, view: string) => boolean                                                                                                                           | -             |          |
| footerRender            | Custom panel footer                                                                       | () => React.ReactNode                                                                                                                                             | -             |          |
| onChange                | Callback when the date range value changes                                                | (value: (string \| Moment \| null \| undefined)[]) => void                                                                                                        | -             |          |
| onOk                    | Callback when the confirm button is clicked                                               | (value: (string \| Moment \| null \| undefined)[]) => void                                                                                                        | -             |          |
| label                   | Inset label of input                                                                      | React.ReactNode                                                                                                                                                   | -             |          |
| state                   | Input status                                                                              | 'error' \| 'loading' \| 'success'                                                                                                                                 | -             |          |
| size                    | Input box size                                                                            | 'small' \| 'medium' \| 'large'                                                                                                                                    | 'medium'      |          |
| disabled                | Whether to disable                                                                        | boolean                                                                                                                                                           | -             |          |
| hasClear                | Whether to display the clear button                                                       | boolean                                                                                                                                                           | true          |          |
| visible                 | Pop                                                                                       | boolean                                                                                                                                                           | -             |          |
| defaultVisible          | Pop                                                                                       | boolean                                                                                                                                                           | false         |          |
| onVisibleChange         | Callback when the pop                                                                     | (visible: boolean, reason: string) => void                                                                                                                        | -             |          |
| popupTriggerType        | Pop                                                                                       | 'click' \| 'hover'                                                                                                                                                | 'click'       |          |
| popupAlign              | Pop                                                                                       | string                                                                                                                                                            | 'tl tl'       |          |
| popupContainer          | Pop                                                                                       | PopupProps['container']                                                                                                                                           | -             |          |
| popupStyle              | Pop                                                                                       | React.CSSProperties                                                                                                                                               | -             |          |
| popupClassName          | Pop                                                                                       | string                                                                                                                                                            | -             |          |
| popupProps              | Pop                                                                                       | React.PropsWithRef\<PopupProps>                                                                                                                                   | -             |          |
| inputProps              | Input box other attributes                                                                | InputProps                                                                                                                                                        | -             |          |
| dateCellRender          | Custom date rendering function                                                            | () => void                                                                                                                                                        | -             |          |
| startDateInputAriaLabel | Start date input box aria                                                                 | string                                                                                                                                                            | -             |          |
| startTimeInputAriaLabel | Start time input box aria                                                                 | string                                                                                                                                                            | -             |          |
| endDateInputAriaLabel   | End date input box aria                                                                   | string                                                                                                                                                            | -             |          |
| endTimeInputAriaLabel   | End time input box aria                                                                   | string                                                                                                                                                            | -             |          |
| renderPreview           | Preview state custom rendering function                                                   | (<br/> value: [Moment \| null, Moment \| null],<br/> props: RangePickerProps<br/> ) => React.ReactNode                                                            | -             |          |
| onVisibleMonthChange    | Callback when the displayed month changes                                                 | RangeCalendarProps['onVisibleMonthChange']                                                                                                                        | -             |          |
| popupComponent          | Custom pop                                                                                | React.ComponentType\<unknown>                                                                                                                                     | -             |          |
| popupContent            | Custom pop                                                                                | React.ReactElement                                                                                                                                                | -             |          |
| monthCellRender         | Custom month rendering function                                                           | (calendarDate: Moment) => React.ReactNode                                                                                                                         | -             |          |
| yearCellRender          | Custom year rendering function                                                            | (calendarDate: Moment) => React.ReactNode                                                                                                                         | -             |          |
| followTrigger           | Whether Pop                                                                               | boolean                                                                                                                                                           | -             |          |
| isPreview               | Whether it is a preview state                                                             | boolean                                                                                                                                                           | -             |          |
| yearRange               | Year range, [START_YEAR, END_YEAR]                                                        | [start: number, end: number]                                                                                                                                      | -             |          |
| disableChangeMode       | Disable date selection                                                                    | boolean                                                                                                                                                           | false         |          |

### DatePicker.YearPicker

| Param              | Description                                             | Type                                                               | Default Value | Required |
| ------------------ | ------------------------------------------------------- | ------------------------------------------------------------------ | ------------- | -------- |
| label              | Inset label of input                                    | React.ReactNode                                                    | -             |          |
| state              | Input status                                            | 'success' \| 'loading' \| 'error'                                  | -             |          |
| placeholder        | Input prompt                                            | string                                                             | -             |          |
| value              | Date value (controlled) moment object                   | string \| Moment \| null                                           | -             |          |
| defaultValue       | Initial date value, moment object                       | string \| Moment \| null                                           | -             |          |
| format             | Date value format (for limiting user input and display) | string                                                             | 'YYYY'        |          |
| disabledDate       | Disable date function                                   | (date: Moment, view: string) => boolean                            | -             |          |
| footerRender       | Custom panel footer                                     | () => React.ReactNode                                              | -             |          |
| onChange           | Callback when the date value changes                    | (value: Moment \| string \| null) => void                          | -             |          |
| size               | Input box size                                          | 'small' \| 'medium' \| 'large'                                     | 'medium'      |          |
| disabled           | Whether it is disabled                                  | boolean                                                            | -             |          |
| hasClear           | Whether to display the clear button                     | boolean                                                            | true          |          |
| visible            | Pop                                                     | boolean                                                            | -             |          |
| defaultVisible     | Pop                                                     | boolean                                                            | -             |          |
| onVisibleChange    | Callback when the pop                                   | (visible: boolean, reason: string) => void                         | -             |          |
| popupTriggerType   | Pop                                                     | 'click' \| 'hover'                                                 | 'click'       |          |
| popupAlign         | Pop                                                     | string                                                             | 'tl tl'       |          |
| popupContainer     | Pop                                                     | PopupProps['container']                                            | -             |          |
| popupStyle         | Pop                                                     | React.CSSProperties                                                | -             |          |
| popupClassName     | Pop                                                     | string                                                             | -             |          |
| popupProps         | Pop                                                     | React.PropsWithRef\<PopupProps>                                    | -             |          |
| inputProps         | Input box other attributes                              | InputProps                                                         | -             |          |
| dateInputAriaLabel | Date input box aria                                     | string                                                             | -             |          |
| renderPreview      | Preview state custom rendering function                 | (value: Moment \| null, props: DatePickerProps) => React.ReactNode | -             |          |
| popupComponent     | Custom pop                                              | React.ComponentType\<unknown>                                      | -             |          |
| popupContent       | Custom pop                                              | React.ReactElement                                                 | -             |          |
| followTrigger      | Whether Pop                                             | boolean                                                            | -             |          |
| yearCellRender     | Custom year rendering function                          | (calendarDate: Moment) => React.ReactNode                          | -             |          |
| isPreview          | Whether it is a preview state                           | boolean                                                            | -             |          |

### DatePicker.WeekPicker

| Param                | Description                                             | Type                                                               | Default Value | Required |
| -------------------- | ------------------------------------------------------- | ------------------------------------------------------------------ | ------------- | -------- |
| value                | Date value (controlled) moment object                   | string \| Moment \| null                                           | -             |          |
| defaultValue         | Initial date value, moment object                       | string \| Moment \| null                                           | -             |          |
| visible              | Pop                                                     | boolean                                                            | -             |          |
| defaultVisible       | Pop                                                     | boolean                                                            | -             |          |
| format               | Date value format (for limiting user input and display) | string                                                             | 'GGGG         |          |
| onChange             | Callback when the date value changes                    | (value: Moment \| string \| null) => void                          | -             |          |
| onVisibleChange      | Callback when the pop                                   | (visible: boolean, reason: string) => void                         | -             |          |
| renderPreview        | Preview state custom rendering function                 | (value: Moment \| null, props: DatePickerProps) => React.ReactNode | -             |          |
| dateCellRender       | Custom date rendering function                          | (calendarDate: Moment) => React.ReactNode                          | -             |          |
| label                | Input box built                                         | React.ReactNode                                                    | -             |          |
| state                | Input box status                                        | 'success' \| 'loading' \| 'error'                                  | -             |          |
| defaultVisibleMonth  | Default displayed month                                 | () => Moment                                                       | false         |          |
| onVisibleMonthChange | Callback when the pop                                   | (value: Moment, reason: string) => void                            | -             |          |
| disabledDate         | Disable date function                                   | (date: Moment, view: string) => boolean                            | -             |          |
| footerRender         | Custom panel footer                                     | () => React.ReactNode                                              | -             |          |
| size                 | Input box size                                          | 'small' \| 'medium' \| 'large'                                     | 'medium'      |          |
| disabled             | Whether to disable                                      | boolean                                                            | -             |          |
| hasClear             | Whether to display the clear button                     | boolean                                                            | true          |          |
| popupTriggerType     | Pop                                                     | 'click' \| 'hover'                                                 | 'click'       |          |
| popupAlign           | Pop                                                     | string                                                             | 'tl tl'       |          |
| popupContainer       | Pop                                                     | PopupProps['container']                                            | -             |          |
| popupStyle           | Pop                                                     | React.CSSProperties                                                | -             |          |
| popupClassName       | Pop                                                     | string                                                             | -             |          |
| popupProps           | Pop                                                     | React.PropsWithRef\<PopupProps>                                    | -             |          |
| popupComponent       | Custom pop                                              | React.ComponentType\<unknown>                                      | -             |          |
| popupContent         | Custom pop                                              | React.ReactElement                                                 | -             |          |
| followTrigger        | Whether Pop                                             | boolean                                                            | -             |          |
| inputProps           | Input box other attributes                              | InputProps                                                         | -             |          |
| monthCellRender      | Custom month rendering function                         | (calendarDate: Moment) => React.ReactNode                          | -             |          |
| yearCellRender       | Custom year rendering function                          | (calendarDate: Moment) => React.ReactNode                          | -             |          |
| isPreview            | Whether it is a preview state                           | boolean                                                            | -             |          |

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
