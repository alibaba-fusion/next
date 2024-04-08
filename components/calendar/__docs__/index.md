# Calendar

-   category: Components
-   family: DataDisplay
-   chinese: 日历
-   type: 展示

---

按照日历形式展示数据的容器。

## 何时使用

日历组件是一个偏向于展示与受控的基础组件，可用于日程、课表、价格日历、农历展示等。

## 如何使用

日期值的多语言设置：由于 Calendar 组件内部使用 moment 对象来设置日期（请使用最新版 moment），部分 Locale 读取自 moment，因此用户需要在外部使用时[正确的设置 moment 的 locale](http://momentjs.cn/docs/#/i18n/changing-locale/) 。

```js
import moment from 'moment';

moment.locale('zh-cn');
```

## API

### Calendar

| 参数                 | 说明                                                                                             | 类型                                                    | 默认值                    | 是否必填 |
| -------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ------------------------- | -------- |
| defaultValue         | 默认选中的日期（moment 对象）                                                                    | Moment \| null                                          | -                         |          |
| shape                | 展现形态                                                                                         | 'card' \| 'fullscreen' \| 'panel'                       | 'fullscreen'              |          |
| value                | 选中的日期值 (moment 对象)                                                                       | Moment \| null                                          | -                         |          |
| mode                 | 面板模式                                                                                         | CalendarMode                                            | -                         |          |
| showOtherMonth       | 是否展示非本月的日期                                                                             | boolean                                                 | true                      |          |
| defaultVisibleMonth  | 默认展示的月份                                                                                   | () => void                                              | -                         |          |
| onModeChange         | 面板模式变化时的回调<br/><br/>**签名**:<br/>**参数**:<br/>_mode_: 对应面板模式 date, month, year | (mode: string) => void                                  | -                         |          |
| onSelect             | 选择日期单元格时的回调                                                                           | (value: Moment) => void                                 | -                         |          |
| onVisibleMonthChange | 展现的月份变化时的回调                                                                           | (value: Moment, reason: VisibleMonthChangeType) => void | -                         |          |
| dateCellRender       | 自定义日期渲染函数                                                                               | (value: Moment) => React.ReactNode                      | value =\> value.date()    |          |
| monthCellRender      | 自定义月份渲染函数                                                                               | (calendarDate: Moment) => React.ReactNode               | -                         |          |
| disabledDate         | 不可选择的日期                                                                                   | (calendarDate: Moment, view: string) => boolean         | -                         |          |
| className            | 自定义样式类                                                                                     | string                                                  | -                         |          |
| modes                | 面板可变化的模式列表，仅初始化时接收一次                                                         | CalendarMode[]                                          | ['date', 'month', 'year'] |          |
| format               | 日期值的格式（用于日期 title 显示的格式）                                                        | string                                                  | 'YYYY-MM                  |          |
| yearRange            | 年份范围，[START_YEAR, END_YEAR] (只在 shape 为‘card’, 'fullscreen' 下生效)                      | [number, number]                                        | -                         |          |

### Calendar.RangeCalendar

| 参数                 | 说明                                                                        | 类型                                                    | 默认值                 | 是否必填 |
| -------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------------- | -------- |
| mode                 | 面板模式                                                                    | CalendarMode                                            | 'date'                 |          |
| format               | 日期值的格式（用于日期 title 显示的格式）                                   | string                                                  | 'YYYY-MM               |          |
| dateCellRender       | 自定义日期渲染函数                                                          | (value: Moment) => React.ReactNode                      | value =\> value.date() |          |
| onSelect             | 选择日期单元格时的回调                                                      | (value: Moment) => void                                 | -                      |          |
| onVisibleMonthChange | 展现的月份变化时的回调                                                      | (value: Moment, reason: VisibleMonthChangeType) => void | -                      |          |
| showOtherMonth       | 是否展示非本月的日期                                                        | boolean                                                 | true                   |          |
| startValue           | 开始日期（moment 对象）                                                     | Moment \| null                                          | -                      |          |
| endValue             | 结束日期（moment 对象）                                                     | Moment \| null                                          | -                      |          |
| defaultStartValue    | 默认的开始日期（moment 对象）                                               | Moment \| null                                          | -                      |          |
| defaultEndValue      | 默认的结束日期（moment 对象）                                               | Moment \| null                                          | -                      |          |
| monthCellRender      | 自定义月份渲染函数                                                          | (calendarDate: Moment) => React.ReactNode               | -                      |          |
| defaultVisibleMonth  | 默认展示的月份                                                              | () => void                                              | -                      |          |
| disabledDate         | 不可选择的日期                                                              | (calendarDate: Moment, view: string) => boolean         | -                      |          |
| yearRange            | 年份范围，[START_YEAR, END_YEAR] (只在 shape 为‘card’, 'fullscreen' 下生效) | [number, number]                                        | -                      |          |

### CalendarMode

```typescript
export type CalendarMode = 'date' | 'month' | 'year';
```

### VisibleMonthChangeType

```typescript
export type VisibleMonthChangeType = 'cellClick' | 'buttonClick' | 'yearSelect' | 'monthSelect';
```
