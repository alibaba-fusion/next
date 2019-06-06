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

| Param                  | Description                                                                                                                                                                        | Type       | Default Value                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------- |
| defaultValue        | Default value of calendar  | custom   | -                       |
| shape               | Shape of calendar<br><br>**option**:<br>'card', 'fullscreen', 'panel'                                                                                                                     | Enum     | 'fullscreen'            |
| value               | Value of calendar  | custom   | -                       |
| mode                | Mode of panel <br><br>**option**:<br>'date', 'month', 'year'  | Enum     | 'date'                  |
| showOtherMonth      | Show dates of other month in current date | Boolean  | true                    |
| defaultVisibleMonth | Default visible month of panel<br><br>**signature**:<br>Function() => void                                                                                                                              | Function | -                       |
| onSelect            | Callback when select a date <br><br>**signature**:<br>Function(value: Object) => void<br>**parameter**:<br>_value_: {Object} date object                                                          | Function | func.noop               |
| onModeChange         | Callback when change mode <br><br>**签名**:<br>Function(mode: string) => void<br>**参数**:<br>_mode_: {string} mode type: date month year                                                                                                                       | Function | func.noop             |
| dateCellRender      | Render function for date cell<br><br>**signature**:<br>Function(value: Object) => ReactNode<br>**parameter**:<br>_value_: {Object} date object<br>**return**:<br>{ReactNode} null<br>                        | Function | (value) => value.date() |
| monthCellRender     | Render function for month cell<br><br>**signature**:<br>Function(calendarDate: Object) => ReactNode<br>**parameter**:<br>_calendarDate_: {Object} current date object<br>**return**:<br>{ReactNode} null<br> | Function | -                       |
| disabledDate        | Function to disable dates <br><br>**signature**:<br>Function(calendarDate: Object) => Boolean<br>**parameter**:<br>_calendarDate_: {Object} current date object<br>_view_: {Enum} current view type: 'year', 'month', 'date' <br>**return**:<br>{Boolean} null<br>       | Function | -                       |

