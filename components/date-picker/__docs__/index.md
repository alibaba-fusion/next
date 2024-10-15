# DatePicker

-   category: Components
-   family: DataEntry
-   chinese: 日期选择框
-   type: 表单

---

日期组件。

## 何时使用

输入或选择日期的控件。当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 如何使用

### 日期选择模式

DatePicker/RangePicker 在交互上增加了**操作焦点**的设置，意味着，如果某个输入框处于 focus 态，那么当前选择的日期将会作用于该输入框对应的日期。

如上图所示，带时间的 RangePicker 有 4 个输入焦点，分别为开始日期、开始时间、结束日期、结束时间。当用户激活某个输入框时，此时下拉选择的日期将会作用域该输入框。同时设置了如下两个规则：

1.  已选定日期范围后，当焦点在开始日期时，如果即将选择的日期大于结束日期，将会重设开始日期。
2.  已选定日期范围后，当焦点在结束日期时，如果即将选择的日期小于开始日期，将会重设开始日期。

### 日期值的多语言

由于 Calendar 组件内部使用 moment 对象来设置日期（请使用最新版 moment），部分 Locale 读取自 moment，因此用户需要在外部使用时[正确的设置 moment 的 locale](http://momentjs.cn/docs/#/i18n/changing-locale/) 。

Q: 文档站点上看是中式日历，为什么我本地却是美式日历呢？如何进行多语言适配？<br/>
A: 日期的多语言情况比较复杂，涉及到年、月、日、星期、阅读习惯等多方面 (美式从周日到周六，中式从周一到周日)，因此我们借助了成熟的时间库 moment.js 来进行日期的多语言处理。
moment.js 默认支持美式表达，如需中文等其他语言，请引入 moment-with-locales.js 语言包。

```jsx
import moment from 'moment';

moment.locale('zh-cn');
```

此外，当改变 moment 的全局 locale 时并不会修改之前的已有实例，例如：

```jsx
moment.locale('fr');
const m = moment(1316116057189);
m.fromNow(); // il y a une heure

moment.locale('en');
m.fromNow(); // il y a une heure
moment(1316116057189).fromNow(); // an hour ago
```

除了全局设置 moment 的多语言，还可以只对某个 moment 实例设置多语言。比如：

```jsx
const value = moment();
value.locale('fr'); // set this instance to use French
```

### Moment 对象和字符串

DatePicker 默认情况下接收和返回的数据类型都是 Moment 对象。为了便于用户的使用，DatePikcer 还支持直接传入字符串（组件内部仍然会格式化为 Moment 对象）。使用方法如下：

标准非受控

```jsx
<DatePicker onChange={val => console.log(val)} />
// select 2019-01-23
// >> MomentObject

<DatePicker defaultValue={moment()} onChange={val => console.log(val)} />
// select 2019-01-23
// >> MomentObject

<DatePicker defaultValue="2018-01-23" onChange={val => console.log(val)} />
// select 2019-01-23
// >> "2019-01-23"

<DatePicker defaultValue={moment(1581938105000)} onChange={val => console.log(val)} />
// select 2020-02-17
// >> "2020-02-17"
```

标准受控

```jsx
<DatePicker value={moment()} onChange={val => console.log(val)} />
// setProps({ value: moment().add(1, 'months') })
// >> MomentObject

<DatePicker value="2018-01-23" onChange={val => console.log(val)} />
// setProps({ value: '2019-01-23' })
// >> "2019-01-23"

<DatePicker value={moment(1581938105000)} onChange={val => console.log(val)} />
// setProps({ value: moment(1581938105000) })
// >> "2020-02-17"
```

## API

### DatePicker

| 参数                 | 说明                                                                     | 类型                                                               | 默认值   | 是否必填 |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------ | -------- | -------- |
| label                | 输入框内置标签                                                           | React.ReactNode                                                    | -        |          |
| state                | 输入框状态                                                               | 'success' \| 'loading' \| 'error'                                  | -        |          |
| placeholder          | 输入提示                                                                 | string                                                             | -        |          |
| defaultVisibleMonth  | 默认展现的月                                                             | () => Moment                                                       | -        |          |
| defaultVisibleYear   | 默认展现的年                                                             | () => Moment                                                       | -        |          |
| value                | 日期值（受控）moment 对象                                                | string \| Moment \| null                                           | -        |          |
| defaultValue         | 初始日期值，moment 对象                                                  | string \| Moment \| null                                           | -        |          |
| format               | 日期值的格式（用于限定用户输入和展示）                                   | string                                                             | 'YYYY-MM |          |
| showTime             | 是否使用时间控件，传入 TimePicker 的属性 \{ defaultValue, format, ... \} | TimePickerProps \| boolean                                         | false    |          |
| resetTime            | 每次选择日期时是否重置时间（仅在 showTime 开启时有效）                   | boolean                                                            | false    |          |
| disabledDate         | 禁用日期函数                                                             | (date: Moment, view: string) => boolean                            | -        |          |
| footerRender         | 自定义面板页脚                                                           | () => React.ReactNode                                              | -        |          |
| onChange             | 日期值改变时的回调                                                       | (value: string \| Moment \| null) => void                          | -        |          |
| onOk                 | 点击确认按钮时的回调                                                     | (value: string \| Moment \| null) => void                          | -        |          |
| size                 | 输入框尺寸                                                               | 'small' \| 'medium' \| 'large'                                     | 'medium' |          |
| disabled             | 是否禁用                                                                 | boolean                                                            | -        |          |
| hasClear             | 是否显示清空按钮                                                         | boolean                                                            | true     |          |
| visible              | 弹层显示状态                                                             | boolean                                                            | -        |          |
| defaultVisible       | 弹层默认是否显示                                                         | boolean                                                            | false    |          |
| onVisibleChange      | 弹层展示状态变化时的回调                                                 | (visible: boolean, reason: string) => void                         | -        |          |
| onVisibleMonthChange | 弹层展示月份变化时的回调                                                 | (value: Moment, reason: string) => void                            | -        |          |
| popupTriggerType     | 弹层触发方式                                                             | 'click' \| 'hover'                                                 | 'click'  |          |
| popupAlign           | 弹层对齐方式，具体含义见 OverLay 文档                                    | string                                                             | 'tl tl'  |          |
| popupContainer       | 弹层容器                                                                 | PopupProps['container']                                            | -        |          |
| popupStyle           | 弹层自定义样式                                                           | React.CSSProperties                                                | -        |          |
| popupClassName       | 弹层自定义样式类                                                         | string                                                             | -        |          |
| popupProps           | 弹层其他属性                                                             | React.PropsWithRef\<PopupProps>                                    | -        |          |
| inputProps           | 输入框其他属性                                                           | InputProps                                                         | -        |          |
| dateCellRender       | 自定义日期渲染函数                                                       | (calendarDate: Moment) => React.ReactNode                          | -        |          |
| monthCellRender      | 自定义月份渲染函数                                                       | (calendarDate: Moment) => React.ReactNode                          | -        |          |
| yearCellRender       | 自定义年份渲染函数                                                       | (calendarDate: Moment) => React.ReactNode                          | -        |          |
| dateInputAriaLabel   | 日期输入框的 aria-label 属性                                             | string                                                             | -        |          |
| timeInputAriaLabel   | 时间输入框的 aria-label 属性                                             | string                                                             | -        |          |
| isPreview            | 是否为预览态                                                             | boolean                                                            | -        |          |
| renderPreview        | 预览态定制渲染函数                                                       | (value: Moment \| null, props: DatePickerProps) => React.ReactNode | -        |          |
| followTrigger        | 是否跟随滚动                                                             | boolean                                                            | -        |          |
| popupComponent       | 自定义弹层                                                               | React.ComponentType\<unknown>                                      | -        |          |
| popupContent         | 自定义弹层内容                                                           | React.ReactElement                                                 | -        |          |
| disableChangeMode    | 禁用日期选择器的日期模式切换                                             | boolean                                                            | -        |          |
| yearRange            | 年份范围，[START_YEAR, END_YEAR]                                         | [start: number, end: number]                                       | -        |          |

### DatePicker.MonthPicker

| 参数               | 说明                                   | 类型                                                     | 默认值   | 是否必填 |
| ------------------ | -------------------------------------- | -------------------------------------------------------- | -------- | -------- |
| label              | 输入框内置标签                         | React.ReactNode                                          | -        |          |
| state              | 输入框状态                             | 'success' \| 'loading' \| 'error'                        | -        |          |
| placeholder        | 输入提示                               | string                                                   | -        |          |
| defaultVisibleYear | 默认展现的年                           | () => Moment \| null                                     | -        |          |
| value              | 日期值（受控）moment 对象              | string \| Moment \| null                                 | -        |          |
| defaultValue       | 初始日期值，moment 对象                | string \| Moment \| null                                 | -        |          |
| format             | 日期值的格式（用于限定用户输入和展示） | string                                                   | 'YYYY    |          |
| disabledDate       | 禁用日期函数                           | (date: Moment, view: string) => boolean                  | -        |          |
| footerRender       | 自定义面板页脚                         | () => React.ReactNode                                    | -        |          |
| onChange           | 日期值改变时的回调                     | (value: Moment \| string \| null) => void                | -        |          |
| size               | 输入框尺寸                             | 'small' \| 'medium' \| 'large'                           | 'medium' |          |
| disabled           | 是否禁用                               | boolean                                                  | -        |          |
| hasClear           | 是否显示清空按钮                       | boolean                                                  | true     |          |
| visible            | 弹层显示状态                           | boolean                                                  | -        |          |
| defaultVisible     | 弹层默认是否显示                       | boolean                                                  | -        |          |
| onVisibleChange    | 弹层展示状态变化时的回调               | (visible: boolean, reason: string) => void               | -        |          |
| popupTriggerType   | 弹层触发方式                           | 'click' \| 'hover'                                       | 'click'  |          |
| popupAlign         | 弹层对齐方式，具体含义见 OverLay 文档  | string                                                   | 'tl tl'  |          |
| popupContainer     | 弹层容器                               | PopupProps['container']                                  | -        |          |
| popupStyle         | 弹层自定义样式                         | React.CSSProperties                                      | -        |          |
| popupClassName     | 弹层自定义样式类                       | string                                                   | -        |          |
| popupProps         | 弹层其他属性                           | React.PropsWithRef\<PopupProps>                          | -        |          |
| popupComponent     | 自定义弹层                             | React.ComponentType\<unknown>                            | -        |          |
| popupContent       | 自定义弹层内容                         | React.ReactElement                                       | -        |          |
| followTrigger      | 是否跟随滚动                           | boolean                                                  | -        |          |
| inputProps         | 输入框其他属性                         | InputProps                                               | -        |          |
| monthCellRender    | 自定义月份渲染函数                     | (calendarDate: Moment) => React.ReactNode                | -        |          |
| dateInputAriaLabel | 日期输入框的 aria-label 属性           | string                                                   | -        |          |
| renderPreview      | 预览态定制渲染函数                     | (value: Moment \| null, props: MonthPickerProps) => void | -        |          |
| yearCellRender     | 自定义年份渲染函数                     | (calendarDate: Moment) => React.ReactNode                | -        |          |
| isPreview          | 是否为预览态                           | boolean                                                  | -        |          |

### DatePicker.RangePicker

| 参数                    | 说明                                                                     | 类型                                                                                                                                                              | 默认值   | 是否必填 |
| ----------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| type                    | 日期范围类型                                                             | 'date' \| 'month' \| 'year'                                                                                                                                       | -        |          |
| defaultVisibleMonth     | 默认展示的起始月份                                                       | () => Moment \| null                                                                                                                                              | -        |          |
| placeholder             | 输入提示                                                                 | Array\<string> \| string                                                                                                                                          | -        |          |
| value                   | 日期范围值数组 [moment, moment]                                          | [start: Moment \| string \| null \| undefined, end?: Moment \| string \| undefined \| null]                                                                       | -        |          |
| defaultValue            | 初始的日期范围值数组 [moment, moment]                                    | [<br/> start: Moment \| string \| null \| undefined,<br/> end?: Moment \| string \| undefined \| null,<br/> ]                                                     | -        |          |
| format                  | 日期值的格式（用于限定用户输入和展示）                                   | string                                                                                                                                                            | -        |          |
| showTime                | 是否使用时间控件，传入 TimePicker 的属性 \{ defaultValue, format, ... \} | \| (Omit\<TimePickerProps, 'defaultValue'> & {<br/> defaultValue?: Moment \| string \| null \| (Moment \| string \| null \| undefined)[];<br/> })<br/> \| boolean | false    |          |
| resetTime               | 每次选择日期时是否重置时间（仅在 showTime 开启时有效）                   | boolean                                                                                                                                                           | false    |          |
| disabledDate            | 禁用日期函数                                                             | (date: Moment, view: string) => boolean                                                                                                                           | -        |          |
| footerRender            | 自定义面板页脚                                                           | () => React.ReactNode                                                                                                                                             | -        |          |
| onChange                | 日期范围值改变时的回调                                                   | (value: (string \| Moment \| null \| undefined)[]) => void                                                                                                        | -        |          |
| onOk                    | 点击确认按钮时的回调 返回开始时间和结束时间                              | (value: (string \| Moment \| null \| undefined)[]) => void                                                                                                        | -        |          |
| label                   | 输入框内置标签                                                           | React.ReactNode                                                                                                                                                   | -        |          |
| state                   | 输入框状态                                                               | 'error' \| 'loading' \| 'success'                                                                                                                                 | -        |          |
| size                    | 输入框尺寸                                                               | 'small' \| 'medium' \| 'large'                                                                                                                                    | 'medium' |          |
| disabled                | 是否禁用                                                                 | boolean                                                                                                                                                           | -        |          |
| hasClear                | 是否显示清空按钮                                                         | boolean                                                                                                                                                           | true     |          |
| visible                 | 弹层显示状态                                                             | boolean                                                                                                                                                           | -        |          |
| defaultVisible          | 弹层默认是否显示                                                         | boolean                                                                                                                                                           | false    |          |
| onVisibleChange         | 弹层展示状态变化时的回调                                                 | (visible: boolean, reason: string) => void                                                                                                                        | -        |          |
| popupTriggerType        | 弹层触发方式                                                             | 'click' \| 'hover'                                                                                                                                                | 'click'  |          |
| popupAlign              | 弹层对齐方式，具体含义见 OverLay 文档                                    | string                                                                                                                                                            | 'tl tl'  |          |
| popupContainer          | 弹层容器                                                                 | PopupProps['container']                                                                                                                                           | -        |          |
| popupStyle              | 弹层自定义样式                                                           | React.CSSProperties                                                                                                                                               | -        |          |
| popupClassName          | 弹层自定义样式类                                                         | string                                                                                                                                                            | -        |          |
| popupProps              | 弹层其他属性                                                             | React.PropsWithRef\<PopupProps>                                                                                                                                   | -        |          |
| inputProps              | 输入框其他属性                                                           | InputProps                                                                                                                                                        | -        |          |
| dateCellRender          | 自定义日期渲染函数                                                       | () => void                                                                                                                                                        | -        |          |
| startDateInputAriaLabel | 开始日期输入框的 aria-label 属性                                         | string                                                                                                                                                            | -        |          |
| startTimeInputAriaLabel | 开始时间输入框的 aria-label 属性                                         | string                                                                                                                                                            | -        |          |
| endDateInputAriaLabel   | 结束日期输入框的 aria-label 属性                                         | string                                                                                                                                                            | -        |          |
| endTimeInputAriaLabel   | 结束时间输入框的 aria-label 属性                                         | string                                                                                                                                                            | -        |          |
| renderPreview           | 预览态定制渲染函数                                                       | (<br/> value: [Moment \| null, Moment \| null],<br/> props: RangePickerProps<br/> ) => React.ReactNode                                                            | -        |          |
| onVisibleMonthChange    | 展现的月份变化时的回调                                                   | RangeCalendarProps['onVisibleMonthChange']                                                                                                                        | -        |          |
| popupComponent          | 自定义弹层                                                               | React.ComponentType\<unknown>                                                                                                                                     | -        |          |
| popupContent            | 自定义弹层内容                                                           | React.ReactElement                                                                                                                                                | -        |          |
| monthCellRender         | 自定义月份渲染函数                                                       | (calendarDate: Moment) => React.ReactNode                                                                                                                         | -        |          |
| yearCellRender          | 自定义年份渲染函数                                                       | (calendarDate: Moment) => React.ReactNode                                                                                                                         | -        |          |
| followTrigger           | 是否跟随滚动                                                             | boolean                                                                                                                                                           | -        |          |
| isPreview               | 是否为预览态                                                             | boolean                                                                                                                                                           | -        |          |
| yearRange               | 年份范围，[START_YEAR, END_YEAR]                                         | [start: number, end: number]                                                                                                                                      | -        |          |
| disableChangeMode       | 禁用日期选择器的日期模式切换                                             | boolean                                                                                                                                                           | false    |          |

### DatePicker.YearPicker

| 参数               | 说明                                   | 类型                                                               | 默认值   | 是否必填 |
| ------------------ | -------------------------------------- | ------------------------------------------------------------------ | -------- | -------- |
| label              | 输入框内置标签                         | React.ReactNode                                                    | -        |          |
| state              | 输入框状态                             | 'success' \| 'loading' \| 'error'                                  | -        |          |
| placeholder        | 输入提示                               | string                                                             | -        |          |
| value              | 日期值（受控）moment 对象              | string \| Moment \| null                                           | -        |          |
| defaultValue       | 初始日期值，moment 对象                | string \| Moment \| null                                           | -        |          |
| format             | 日期值的格式（用于限定用户输入和展示） | string                                                             | 'YYYY'   |          |
| disabledDate       | 禁用日期函数                           | (date: Moment, view: string) => boolean                            | -        |          |
| footerRender       | 自定义面板页脚                         | () => React.ReactNode                                              | -        |          |
| onChange           | 日期值改变时的回调                     | (value: Moment \| string \| null) => void                          | -        |          |
| size               | 输入框尺寸                             | 'small' \| 'medium' \| 'large'                                     | 'medium' |          |
| disabled           | 是否禁用                               | boolean                                                            | -        |          |
| hasClear           | 是否显示清空按钮                       | boolean                                                            | true     |          |
| visible            | 弹层显示状态                           | boolean                                                            | -        |          |
| defaultVisible     | 弹层默认是否显示                       | boolean                                                            | -        |          |
| onVisibleChange    | 弹层展示状态变化时的回调               | (visible: boolean, reason: string) => void                         | -        |          |
| popupTriggerType   | 弹层触发方式                           | 'click' \| 'hover'                                                 | 'click'  |          |
| popupAlign         | 弹层对齐方式，具体含义见 OverLay 文档  | string                                                             | 'tl tl'  |          |
| popupContainer     | 弹层容器                               | PopupProps['container']                                            | -        |          |
| popupStyle         | 弹层自定义样式                         | React.CSSProperties                                                | -        |          |
| popupClassName     | 弹层自定义样式类                       | string                                                             | -        |          |
| popupProps         | 弹层其他属性                           | React.PropsWithRef\<PopupProps>                                    | -        |          |
| inputProps         | 输入框其他属性                         | InputProps                                                         | -        |          |
| dateInputAriaLabel | 日期输入框的 aria-label 属性           | string                                                             | -        |          |
| renderPreview      | 预览态定制渲染函数                     | (value: Moment \| null, props: DatePickerProps) => React.ReactNode | -        |          |
| popupComponent     | 自定义弹层                             | React.ComponentType\<unknown>                                      | -        |          |
| popupContent       | 自定义弹层内容                         | React.ReactElement                                                 | -        |          |
| followTrigger      | 是否跟随滚动                           | boolean                                                            | -        |          |
| yearCellRender     | 自定义年份渲染函数                     | (calendarDate: Moment) => React.ReactNode                          | -        |          |
| isPreview          | 是否为预览态                           | boolean                                                            | -        |          |

### DatePicker.WeekPicker

| 参数                 | 说明                                   | 类型                                                               | 默认值   | 是否必填 |
| -------------------- | -------------------------------------- | ------------------------------------------------------------------ | -------- | -------- |
| value                | 日期值（受控）moment 对象              | string \| Moment \| null                                           | -        |          |
| defaultValue         | 初始日期值，moment 对象                | string \| Moment \| null                                           | -        |          |
| visible              | 弹层显示状态                           | boolean                                                            | -        |          |
| defaultVisible       | 弹层默认是否显示                       | boolean                                                            | -        |          |
| format               | 日期值的格式（用于限定用户输入和展示） | string                                                             | 'GGGG    |          |
| onChange             | 日期值改变时的回调                     | (value: Moment \| string \| null) => void                          | -        |          |
| onVisibleChange      | 弹层展示状态变化时的回调               | (visible: boolean, reason: string) => void                         | -        |          |
| renderPreview        | 预览态定制渲染函数                     | (value: Moment \| null, props: DatePickerProps) => React.ReactNode | -        |          |
| dateCellRender       | 自定义日期渲染函数                     | (calendarDate: Moment) => React.ReactNode                          | -        |          |
| label                | 输入框内置标签                         | React.ReactNode                                                    | -        |          |
| state                | 输入框状态                             | 'success' \| 'loading' \| 'error'                                  | -        |          |
| defaultVisibleMonth  | 默认展现的月                           | () => Moment                                                       | false    |          |
| onVisibleMonthChange | 弹层展示月份变化时的回调               | (value: Moment, reason: string) => void                            | -        |          |
| disabledDate         | 禁用日期函数                           | (date: Moment, view: string) => boolean                            | -        |          |
| footerRender         | 自定义面板页脚                         | () => React.ReactNode                                              | -        |          |
| size                 | 输入框尺寸                             | 'small' \| 'medium' \| 'large'                                     | 'medium' |          |
| disabled             | 是否禁用                               | boolean                                                            | -        |          |
| hasClear             | 是否显示清空按钮                       | boolean                                                            | true     |          |
| popupTriggerType     | 弹层触发方式                           | 'click' \| 'hover'                                                 | 'click'  |          |
| popupAlign           | 弹层对齐方式，具体含义见 OverLay 文档  | string                                                             | 'tl tl'  |          |
| popupContainer       | 弹层容器                               | PopupProps['container']                                            | -        |          |
| popupStyle           | 弹层自定义样式                         | React.CSSProperties                                                | -        |          |
| popupClassName       | 弹层自定义样式类                       | string                                                             | -        |          |
| popupProps           | 弹层其他属性                           | React.PropsWithRef\<PopupProps>                                    | -        |          |
| popupComponent       | 自定义弹层                             | React.ComponentType\<unknown>                                      | -        |          |
| popupContent         | 自定义弹层内容                         | React.ReactElement                                                 | -        |          |
| followTrigger        | 是否跟随滚动                           | boolean                                                            | -        |          |
| inputProps           | 输入框其他属性                         | InputProps                                                         | -        |          |
| monthCellRender      | 自定义月份渲染函数                     | (calendarDate: Moment) => React.ReactNode                          | -        |          |
| yearCellRender       | 自定义年份渲染函数                     | (calendarDate: Moment) => React.ReactNode                          | -        |          |
| isPreview            | 是否为预览态                           | boolean                                                            | -        |          |

## 无障碍键盘操作指南

同选择框一样聚焦到 DatePiker 后，需要按下 `ENTER` 键打开弹出框，选择/输入日期，通过 `TAB` 切换日期和时间输入框。

| 按键            | 说明                                                            |
| :-------------- | :-------------------------------------------------------------- |
| 数字键          | 需要手动输入日期，指定的日期格式                                |
| Enter           | 打开日期选择框或输入后选择日期                                  |
| Esc             | 关闭日期选择框                                                  |
| Up              | 输入上一天（Month Picker 则是上一个月，Year Picker 则是上一年） |
| Down            | 输入下一天（Month Picker 则是下一个月，Year Picker 则是下一年） |
| Page Up         | 输入上一月                                                      |
| Page Down       | 输入下一月                                                      |
| Alt + Page Up   | 输入上一年                                                      |
| Alt + Page Down | 输入下一年                                                      |
