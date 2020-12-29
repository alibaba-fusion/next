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

| 参数                   | 说明                                                                                                                                                                                                                                      | 类型               | 默认值                   |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | --------------------- |
| defaultValue         | 默认选中的日期（moment 对象）                                                                                                                                                                                                                      | custom           | -                     |
| shape                | 展现形态<br><br>**可选值**:<br>'card', 'fullscreen', 'panel'                                                                                                                                                                                   | Enum             | 'fullscreen'          |
| value                | 选中的日期值 (moment 对象)                                                                                                                                                                                                                      | custom           | -                     |
| mode                 | 面板模式                                                                                                                                                                                                                                    | Enum             | -                     |
| showOtherMonth       | 是否展示非本月的日期                                                                                                                                                                                                                              | Boolean          | true                  |
| defaultVisibleMonth  | 默认展示的月份<br><br>**签名**:<br>Function() => void                                                                                                                                                                                            | Function         | -                     |
| onSelect             | 选择日期单元格时的回调<br><br>**签名**:<br>Function(value: Object) => void<br>**参数**:<br>_value_: {Object} 对应的日期值 (moment 对象)                                                                                                                        | Function         | func.noop             |
| onModeChange         | 面板模式变化时的回调<br><br>**签名**:<br>Function(mode: String) => void<br>**参数**:<br>_mode_: {String} 对应面板模式 date month year                                                                                                                       | Function         | func.noop             |
| onVisibleMonthChange | 展现的月份变化时的回调<br><br>**签名**:<br>Function(value: Object, reason: String) => void<br>**参数**:<br>_value_: {Object} 显示的月份 (moment 对象)<br>_reason_: {String} 触发月份改变原因                                                                          | Function         | func.noop             |
| dateCellRender       | 自定义日期渲染函数<br><br>**签名**:<br>Function(value: Object) => ReactNode<br>**参数**:<br>_value_: {Object} 日期值（moment对象）<br>**返回值**:<br>{ReactNode} null<br>                                                                                      | Function         | value => value.date() |
| monthCellRender      | 自定义月份渲染函数<br><br>**签名**:<br>Function(calendarDate: Object) => ReactNode<br>**参数**:<br>_calendarDate_: {Object} 对应 Calendar 返回的自定义日期对象<br>**返回值**:<br>{ReactNode} null<br>                                                               | Function         | -                     |
| yearRange            | 年份范围，[START_YEAR, END_YEAR] \(只在shape 为 ‘card’, 'fullscreen' 下生效)                                                                                                                                                                       | Array&lt;Number> | -                     |
| disabledDate         | 不可选择的日期<br><br>**签名**:<br>Function(calendarDate: Object, view: String) => Boolean<br>**参数**:<br>_calendarDate_: {Object} 对应 Calendar 返回的自定义日期对象<br>_view_: {String} 当前视图类型，year: 年， month: 月, date: 日<br>**返回值**:<br>{Boolean} null<br> | Function         | -                     |
