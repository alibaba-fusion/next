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

| Param             | Description                                                 | Type                                                                                                                                                                                                                                                                                                     | Default Value | Required |
| ----------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| defaultValue      | Default selected date (dayjs object)                        | ConfigType                                                                                                                                                                                                                                                                                               | -             |          |
| value             | Selected date value (dayjs object)                          | ConfigType                                                                                                                                                                                                                                                                                               | -             |          |
| defaultPanelValue | Default displayed date                                      | ConfigType                                                                                                                                                                                                                                                                                               | -             |          |
| panelValue        | Displayed date                                              | ConfigType                                                                                                                                                                                                                                                                                               | -             |          |
| shape             | Display shape                                               | 'card' \| 'fullscreen' \| 'panel'                                                                                                                                                                                                                                                                        | 'fullscreen'  |          |
| mode              | Date mode                                                   | CalendarMode                                                                                                                                                                                                                                                                                             | 'month'       |          |
| panelMode         | Panel mode, will be inferred automatically if not specified | CalendarPanelMode                                                                                                                                                                                                                                                                                        | -             |          |
| onSelect          | Callback when selecting a date cell                         | (value: Dayjs, strVal: string) => void                                                                                                                                                                                                                                                                   | -             |          |
| onChange          | Callback when value changes                                 | (value: Dayjs, strVal: string) => void                                                                                                                                                                                                                                                                   | -             |          |
| onPanelChange     | Callback when date panel changes                            | (value: Dayjs, mode: string, reason?: string) => void                                                                                                                                                                                                                                                    | -             |          |
| className         | Custom style class                                          | string                                                                                                                                                                                                                                                                                                   | -             |          |
| dateCellRender    | Custom date rendering                                       | CustomCellRender                                                                                                                                                                                                                                                                                         | -             |          |
| monthCellRender   | Custom month rendering function                             | CustomCellRender                                                                                                                                                                                                                                                                                         | -             |          |
| yearCellRender    | Custom year rendering function                              | CustomCellRender                                                                                                                                                                                                                                                                                         | -             |          |
| quarterCellRender | Custom quarter rendering function                           | CustomCellRender                                                                                                                                                                                                                                                                                         | -             |          |
| disabledDate      | Disabled date                                               | (value: Dayjs, mode: CalendarPanelMode) => boolean                                                                                                                                                                                                                                                       | -             |          |
| onPrev            | Callback when clicking the left single arrow                | OnPrevOrNext                                                                                                                                                                                                                                                                                             | -             |          |
| onNext            | Callback when clicking the right single arrow               | OnPrevOrNext                                                                                                                                                                                                                                                                                             | -             |          |
| onSuperPrev       | Callback when clicking the left double arrow                | OnPrevOrNext                                                                                                                                                                                                                                                                                             | -             |          |
| onSuperNext       | Callback when clicking the right double arrow               | OnPrevOrNext                                                                                                                                                                                                                                                                                             | -             |          |
| headerRender      | Header custom rendering                                     | (props: HeaderPanelProps) => React.ReactNode                                                                                                                                                                                                                                                             | -             |          |
| validValue        | Valid year range                                            | [Dayjs, Dayjs]                                                                                                                                                                                                                                                                                           | -             |          |
| renderHeaderExtra | Render header extra content                                 | (props: HeaderPanelProps) => React.ReactNode                                                                                                                                                                                                                                                             | -             |          |
| cellClassName     | Cell custom style                                           | (value: Dayjs) => Record\<string, boolean> \| undefined \| null                                                                                                                                                                                                                                          | -             |          |
| cellProps         | Cell custom property                                        | {<br/> onMouseEnter?: (<br/> v: Dayjs,<br/> e: React.MouseEvent\<HTMLElement>,<br/> args: Pick\<CellData, 'isCurrent' \| 'label'><br/> ) => void;<br/> onMouseLeave?: (<br/> v: Dayjs,<br/> e: React.MouseEvent\<HTMLElement>,<br/> args: Pick\<CellData, 'isCurrent' \| 'label'><br/> ) => void;<br/> } | -             |          |

### CellData

| Param     | Description | Type             | Default Value | Required |
| --------- | ----------- | ---------------- | ------------- | -------- |
| value     | -           | Dayjs            | -             | yes      |
| label     | -           | number \| string | -             | yes      |
| isCurrent | -           | boolean          | -             | yes      |
| key       | -           | string \| number | -             | yes      |

### OnPrevOrNext

```typescript
export type OnPrevOrNext = (value: Dayjs, options: { unit: ManipulateType; num: number }) => void;
```

### CalendarMode

```typescript
export type CalendarMode = 'month' | 'year';
```

### CalendarPanelMode

```typescript
export type CalendarPanelMode = 'date' | 'week' | 'month' | 'quarter' | 'year' | 'decade';
```

### CustomCellRender

```typescript
export type CustomCellRender = (value: Dayjs) => React.ReactNode;
```
