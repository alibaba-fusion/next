# Calendar

-   category: Components
-   family: DataDisplay
-   chinese: 日历
-   type: Display

---

## Guide

A container for displaying calendar data.

### When to Use

Calendar could be used to display dates, such as schedules, timetables, price calendar, lunar calendar, and so on.

### Values with locale

Calendar use moment as a core part to manipulate and display time values. For real usage, it could be used with the latest `moment` package. Setting moment's locale by:

```js
import moment from 'moment';

moment.locale('zh-cn');
```

## API

### Calendar

| Param                | Description                                                                                   | Type                                                    | Default Value             | Required |
| -------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------- | -------- |
| defaultValue         | Default selected date (moment object)                                                         | Moment \| null                                          | -                         |          |
| shape                | Display shape                                                                                 | 'card' \| 'fullscreen' \| 'panel'                       | 'fullscreen'              |          |
| value                | Selected date value (moment object)                                                           | Moment \| null                                          | -                         |          |
| mode                 | Panel mode                                                                                    | CalendarMode                                            | -                         |          |
| showOtherMonth       | Whether to show dates outside the current month                                               | boolean                                                 | true                      |          |
| defaultVisibleMonth  | Default displayed month                                                                       | () => Moment                                            | -                         |          |
| onModeChange         | Callback when the panel mode changes<br/><br/>**signature**:<br/>**params**:<br/>_mode_: mode | (mode: string) => void                                  | -                         |          |
| onSelect             | Callback when selecting a date cell                                                           | (value: Moment) => void                                 | -                         |          |
| onVisibleMonthChange | Callback when the displayed month changes                                                     | (value: Moment, reason: VisibleMonthChangeType) => void | -                         |          |
| dateCellRender       | Customize date rendering function                                                             | (value: Moment) => React.ReactNode                      | value =\> value.date()    |          |
| monthCellRender      | Customize month rendering function                                                            | (calendarDate: Moment) => React.ReactNode               | -                         |          |
| disabledDate         | Disabled date                                                                                 | (calendarDate: Moment, view: string) => boolean         | -                         |          |
| className            | Customize style class                                                                         | string                                                  | -                         |          |
| modes                | Panel mode list that can be changed, only received once at initialization                     | CalendarMode[]                                          | ['date', 'month', 'year'] |          |
| format               | Date value format(for date title display format)                                              | string                                                  | 'YYYY-MM                  |          |
| yearRange            | Year range, [START_YEAR, END_YEAR] (only effective when shape is 'card', 'fullscreen')        | [number, number]                                        | -                         |          |

### Calendar.RangeCalendar

| Param                | Description                                                                            | Type                                                    | Default Value          | Required |
| -------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------------- | -------- |
| mode                 | Panel mode                                                                             | CalendarMode                                            | 'date'                 |          |
| format               | Date value format(for date title display format)                                       | string                                                  | 'YYYY-MM               |          |
| dateCellRender       | Customize date rendering function                                                      | (value: Moment) => React.ReactNode                      | value =\> value.date() |          |
| onSelect             | Callback when selecting a date cell                                                    | (value: Moment) => void                                 | -                      |          |
| onVisibleMonthChange | Callback when the displayed month changes                                              | (value: Moment, reason: VisibleMonthChangeType) => void | -                      |          |
| showOtherMonth       | Whether to show dates outside the current month                                        | boolean                                                 | true                   |          |
| startValue           | Start date (moment object)                                                             | Moment \| null                                          | -                      |          |
| endValue             | End date (moment object)                                                               | Moment \| null                                          | -                      |          |
| defaultStartValue    | Default start date (moment object)                                                     | Moment \| null                                          | -                      |          |
| defaultEndValue      | Default end date (moment object)                                                       | Moment \| null                                          | -                      |          |
| monthCellRender      | Customize month rendering function                                                     | (calendarDate: Moment) => React.ReactNode               | -                      |          |
| defaultVisibleMonth  | Default displayed month                                                                | () => Moment                                            | -                      |          |
| disabledDate         | Disabled date                                                                          | (calendarDate: Moment, view: string) => boolean         | -                      |          |
| shape                | Display shape                                                                          | 'card' \| 'fullscreen' \| 'panel'                       | -                      |          |
| yearRange            | Year range, [START_YEAR, END_YEAR] (only effective when shape is 'card', 'fullscreen') | [number, number]                                        | -                      |          |

### CalendarMode

```typescript
export type CalendarMode = 'date' | 'month' | 'year';
```

### VisibleMonthChangeType

```typescript
export type VisibleMonthChangeType = 'cellClick' | 'buttonClick' | 'yearSelect' | 'monthSelect';
```
