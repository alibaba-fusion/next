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

Calendar use dayjs as a core part to manipulate and display time values. For real usage, it could be used with the latest `dayjs` package. Setting dayjs's locale by:

```js
import { DatePicker2, ConfigProvider } from '@alifd/next';
import 'dayjs/locale/en';
import en from '@alifd/next/lib/locale/en-us';

function App() {
    return (
        <ConfigProvider locale={en}>
            <DatePicker2 />
        </ConfigProvider>
    );
}
ReactDOM.render(<App />, mountNode);
```

## API

### Calendar

| Param               | Description                                                                                                                                                                                                                                                        | Type             | Default Value           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | ----------------------- |
| defaultValue        | Default value of calendar                                                                                                                                                                                                                                          | custom           | -                       |
| shape               | Shape of calendar<br><br>**option**:<br>'card', 'fullscreen', 'panel'                                                                                                                                                                                              | Enum             | 'fullscreen'            |
| value               | Value of calendar                                                                                                                                                                                                                                                  | custom           | -                       |
| mode                | Mode of panel <br><br>**option**:<br>'date', 'month', 'year'                                                                                                                                                                                                       | Enum             | 'date'                  |
| showOtherMonth      | Show dates of other month in current date                                                                                                                                                                                                                          | Boolean          | true                    |
| defaultVisibleMonth | Default visible month of panel<br><br>**signature**:<br>Function() => void                                                                                                                                                                                         | Function         | -                       |
| onSelect            | Callback when select a date <br><br>**signature**:<br>Function(value: Object) => void<br>**parameter**:<br>_value_: {Object} date object                                                                                                                           | Function         | func.noop               |
| onPanelChange       | Callback when the pane changed <br><br>**签名**:<br>Function(value: Object, mode: string) => void<br>**参数**:<br>_value_: {Object} date object<br>_mode_: {string} mode type: date month                                                                          | Function         | func.noop               |
| dateCellRender      | Render function for date cell<br><br>**signature**:<br>Function(value: Object) => ReactNode<br>**parameter**:<br>_value_: {Object} date object<br>**return**:<br>{ReactNode} null<br>                                                                              | Function         | (value) => value.date() |
| monthCellRender     | Render function for month cell<br><br>**signature**:<br>Function(calendarDate: Object) => ReactNode<br>**parameter**:<br>_calendarDate_: {Object} current date object<br>**return**:<br>{ReactNode} null<br>                                                       | Function         | -                       |
| yearRange           | Year Range，[START_YEAR, END_YEAR] \(only shape in ‘card’, 'fullscreen')                                                                                                                                                                                           | Array&lt;Number> | -                       |
| disabledDate        | Function to disable dates <br><br>**signature**:<br>Function(calendarDate: Object) => Boolean<br>**parameter**:<br>_calendarDate_: {Object} current date object<br>_view_: {Enum} current view type: 'year', 'month', 'date' <br>**return**:<br>{Boolean} null<br> | Function         | -                       |
