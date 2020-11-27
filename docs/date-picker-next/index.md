# DatePicker

-   category: Components
-   family: DataEntry
-   chinese: 日期选择框
-   type: 表单

---

## Guide

输入或选择日期的控件。当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

### 日期选择模式

DatePicker/RangePicker 在交互上增加了**操作焦点**的设置，意味着，如果某个输入框处于 focus 态，那么当前选择的日期将会作用于该输入框对应的日期。

如上图所示，带时间的 RangePicker 有 4 个输入焦点，分别为开始日期、开始时间、结束日期、结束时间。当用户激活某个输入框时，此时下拉选择的日期将会作用域该输入框。同时设置了如下两个规则：

1.  已选定日期范围后，当焦点在开始日期时，如果即将选择的日期大于结束日期，将会重设开始日期。
2.  已选定日期范围后，当焦点在结束日期时，如果即将选择的日期小于开始日期，将会重设开始日期。

### 日期值的多语言

由于 Calendar 组件内部使用 moment 对象来设置日期（请使用最新版 moment），部分 Locale 读取自 moment，因此用户需要在外部使用时[正确的设置 moment 的 locale](http://momentjs.cn/docs/#/i18n/changing-locale/) 。

-   Q: 文档站点上看是中式日历，为什么我本地却是美式日历呢？如何进行多语言适配？<br/>
    A: 日期的多语言情况比较复杂，涉及到年、月、日、星期、阅读习惯等多方面(美式从周日到周六，中式从周一到周日)，因此我们借助了成熟的时间库 moment.js 来进行日期的多语言处理。
     moment.js 默认支持美式表达，如需中文等其他语言，请引入moment-with-locales.js语言包。

```js
import moment from 'moment';

moment.locale('zh-cn');
```

此外，当改变 moment 的全局 locale 时并不会修改之前的已有实例，例如：

```js
moment.locale('fr');
const m = moment(1316116057189);
m.fromNow(); // il y a une heure

moment.locale('en');
m.fromNow(); // il y a une heure
moment(1316116057189).fromNow(); // an hour ago
```

除了全局设置 moment 的多语言，还可以只对某个 moment 实例设置多语言。比如：

```js
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

| 参数                  | 说明                                                                                                                                                                                                                                                                   | 类型             | 默认值          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------ |
| label               | 输入框内置标签                                                                                                                                                                                                                                                              | ReactNode      | -            |
| size                | 输入框尺寸<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                                                                                                                                                  | Enum           | 'medium'     |
| state               | 输入框状态<br><br>**可选值**:<br>'success', 'loading', 'error'                                                                                                                                                                                                               | Enum           | -            |
| placeholder         | 输入提示                                                                                                                                                                                                                                                                 | String         | -            |
| defaultVisibleMonth | 默认展现的月<br><br>**签名**:<br>Function() => MomentObject<br>**返回值**:<br>{MomentObject} 返回包含指定月份的 moment 对象实例<br>                                                                                                                                                          | Function       | -            |
| value               | 日期值（受控）moment 对象                                                                                                                                                                                                                                                     | custom         | -            |
| defaultValue        | 初始日期值，moment 对象                                                                                                                                                                                                                                                      | custom         | -            |
| format              | 日期值的格式（用于限定用户输入和展示）                                                                                                                                                                                                                                                  | String         | 'YYYY-MM-DD' |
| showTime            | 是否使用时间控件，传入 TimePicker 的属性 { defaultValue, format, ... }                                                                                                                                                                                                             | Object/Boolean | false        |
| resetTime           | 每次选择日期时是否重置时间（仅在 showTime 开启时有效）                                                                                                                                                                                                                                     | Boolean        | false        |
| disabledDate        | 禁用日期函数<br><br>**签名**:<br>Function(日期值: MomentObject, view: String) => Boolean<br>**参数**:<br>_日期值_: {MomentObject} null<br>_view_: {String} 当前视图类型，year: 年， month: 月, date: 日<br>**返回值**:<br>{Boolean} 是否禁用<br>                                                       | Function       | () => false  |
| footerRender        | 自定义面板页脚<br><br>**签名**:<br>Function() => Node<br>**返回值**:<br>{Node} 自定义的面板页脚组件<br>                                                                                                                                                                                    | Function       | () => null   |
| onChange            | 日期值改变时的回调<br><br>**签名**:<br>Function(value: MomentObject/String) => void<br>**参数**:<br>_value_: {MomentObject/String} 日期值                                                                                                                                            | Function       | func.noop    |
| onOk                | 点击确认按钮时的回调<br><br>**签名**:<br>Function() => MomentObject/String<br>**返回值**:<br>{MomentObject/String} 日期值<br>                                                                                                                                                          | Function       | func.noop    |
| disabled            | 是否禁用                                                                                                                                                                                                                                                                 | Boolean        | -            |
| hasClear            | 是否显示清空按钮                                                                                                                                                                                                                                                             | Boolean        | true         |
| visible             | 弹层显示状态                                                                                                                                                                                                                                                               | Boolean        | -            |
| defaultVisible      | 弹层默认是否显示                                                                                                                                                                                                                                                             | Boolean        | false        |
| onVisibleChange     | 弹层展示状态变化时的回调<br><br>**签名**:<br>Function(visible: Boolean, type: String) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否显示<br>_type_: {String} 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发 | Function       | func.noop    |
| popupTriggerType    | 弹层触发方式<br><br>**可选值**:<br>'click', 'hover'                                                                                                                                                                                                                           | Enum           | 'click'      |
| popupAlign          | 弹层对齐方式,具体含义见 OverLay文档                                                                                                                                                                                                                                               | String         | 'tl tl'      |
| popupContainer      | 弹层容器                                                                                                                                                                                                                                                                 | any            | -            |
| popupStyle          | 弹层自定义样式                                                                                                                                                                                                                                                              | Object         | -            |
| popupClassName      | 弹层自定义样式类                                                                                                                                                                                                                                                             | String         | -            |
| popupProps          | 弹层其他属性                                                                                                                                                                                                                                                               | Object         | -            |
| followTrigger       | 是否跟随滚动                                                                                                                                                                                                                                                               | Boolean        | -            |
| inputProps          | 输入框其他属性                                                                                                                                                                                                                                                              | Object         | -            |
| dateCellRender      | 自定义日期渲染函数<br><br>**签名**:<br>Function(value: Object) => ReactNode<br>**参数**:<br>_value_: {Object} 日期值（moment对象）<br>**返回值**:<br>{ReactNode} null<br>                                                                                                                   | Function       | -            |
| monthCellRender     | 自定义月份渲染函数<br><br>**签名**:<br>Function(calendarDate: Object) => ReactNode<br>**参数**:<br>_calendarDate_: {Object} 对应 Calendar 返回的自定义日期对象<br>**返回值**:<br>{ReactNode} null<br>                                                                                            | Function       | -            |
| dateInputAriaLabel  | 日期输入框的 aria-label 属性                                                                                                                                                                                                                                                 | String         | -            |
| timeInputAriaLabel  | 时间输入框的 aria-label 属性                                                                                                                                                                                                                                                 | String         | -            |
| isPreview           | 是否为预览态                                                                                                                                                                                                                                                               | Boolean        | -            |
| renderPreview       | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: MomentObject) => void<br>**参数**:<br>_value_: {MomentObject} 日期                                                                                                                                                         | Function       | -            |

### DatePicker.MonthPicker

| 参数                 | 说明                                                                                                                                                                                                                                             | 类型        | 默认值         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| label              | 输入框内置标签                                                                                                                                                                                                                                        | ReactNode | -           |
| size               | 输入框尺寸<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                                                                                                                            | Enum      | 'medium'    |
| state              | 输入框状态<br><br>**可选值**:<br>'success', 'loading', 'error'                                                                                                                                                                                         | Enum      | -           |
| placeholder        | 输入提示                                                                                                                                                                                                                                           | String    | -           |
| defaultVisibleYear | 默认展现的年<br><br>**签名**:<br>Function() => MomentObject<br>**返回值**:<br>{MomentObject} 返回包含指定年份的 moment 对象实例<br>                                                                                                                                    | Function  | -           |
| value              | 日期值（受控）moment 对象                                                                                                                                                                                                                               | custom    | -           |
| defaultValue       | 初始日期值，moment 对象                                                                                                                                                                                                                                | custom    | -           |
| format             | 日期值的格式（用于限定用户输入和展示）                                                                                                                                                                                                                            | String    | 'YYYY-MM'   |
| disabledDate       | 禁用日期函数<br><br>**签名**:<br>Function(日期值: MomentObject, view: String) => Boolean<br>**参数**:<br>_日期值_: {MomentObject} null<br>_view_: {String} 当前视图类型，year: 年， month: 月, date: 日<br>**返回值**:<br>{Boolean} 是否禁用<br>                                 | Function  | () => false |
| footerRender       | 自定义面板页脚<br><br>**签名**:<br>Function() => Node<br>**返回值**:<br>{Node} 自定义的面板页脚组件<br>                                                                                                                                                              | Function  | () => null  |
| onChange           | 日期值改变时的回调<br><br>**签名**:<br>Function(value: MomentObject/String) => void<br>**参数**:<br>_value_: {MomentObject/String} 日期值                                                                                                                      | Function  | func.noop   |
| disabled           | 是否禁用                                                                                                                                                                                                                                           | Boolean   | -           |
| hasClear           | 是否显示清空按钮                                                                                                                                                                                                                                       | Boolean   | true        |
| visible            | 弹层显示状态                                                                                                                                                                                                                                         | Boolean   | -           |
| defaultVisible     | 弹层默认是否显示                                                                                                                                                                                                                                       | Boolean   | -           |
| onVisibleChange    | 弹层展示状态变化时的回调<br><br>**签名**:<br>Function(visible: Boolean, type: String) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否显示<br>_type_: {String} 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发 | Function  | func.noop   |
| popupTriggerType   | 弹层触发方式<br><br>**可选值**:<br>'click', 'hover'                                                                                                                                                                                                     | Enum      | 'click'     |
| popupAlign         | 弹层对齐方式, 具体含义见 OverLay文档                                                                                                                                                                                                                        | String    | 'tl tl'     |
| popupContainer     | 弹层容器                                                                                                                                                                                                                                           | any       | -           |
| popupStyle         | 弹层自定义样式                                                                                                                                                                                                                                        | Object    | -           |
| popupClassName     | 弹层自定义样式类                                                                                                                                                                                                                                       | String    | -           |
| popupProps         | 弹层其他属性                                                                                                                                                                                                                                         | Object    | -           |
| followTrigger      | 是否跟随滚动                                                                                                                                                                                                                                         | Boolean   | -           |
| inputProps         | 输入框其他属性                                                                                                                                                                                                                                        | Object    | -           |
| monthCellRender    | 自定义月份渲染函数<br><br>**签名**:<br>Function(calendarDate: Object) => ReactNode<br>**参数**:<br>_calendarDate_: {Object} 对应 Calendar 返回的自定义日期对象<br>**返回值**:<br>{ReactNode} null<br>                                                                      | Function  | -           |
| dateInputAriaLabel | 日期输入框的 aria-label 属性                                                                                                                                                                                                                           | String    | -           |
| isPreview          | 是否为预览态                                                                                                                                                                                                                                         | Boolean   | -           |
| renderPreview      | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: MomentObject) => void<br>**参数**:<br>_value_: {MomentObject} 月份                                                                                                                                   | Function  | -           |

### DatePicker.RangePicker

| 参数                      | 说明                                                                                                                                                                                                                                      | 类型                   | 默认值                                                                                          |          |           |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------- | -------- | --------- |
| size                    | 输入框尺寸<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                                                                                                                     | Enum                 | 'medium'                                                                                     |          |           |
| type                    | 日期范围类型<br><br>**可选值**:<br>'date', 'month', 'year'                                                                                                                                                                                       | Enum                 | 'date'                                                                                       |          |           |
| defaultVisibleMonth     | 默认展示的起始月份<br><br>**签名**:<br>Function() => MomentObject<br>**返回值**:<br>{MomentObject} 返回包含指定月份的 moment 对象实例<br>                                                                                                                          | Function             | -                                                                                            |          |           |
| value                   | 日期范围值数组 [moment, moment]                                                                                                                                                                                                                | Array                | -                                                                                            |          |           |
| defaultValue            | 初始的日期范围值数组 [moment, moment]                                                                                                                                                                                                             | Array                | -                                                                                            |          |           |
| format                  | 日期格式                                                                                                                                                                                                                                    | String               | -                                                                                            |          |           |
| showTime                | 是否使用时间控件，支持传入 TimePicker 的属性                                                                                                                                                                                                            | Object/Boolean       | false                                                                                        |          |           |
| resetTime               | 每次选择是否重置时间（仅在 showTime 开启时有效）                                                                                                                                                                                                           | Boolean              | false                                                                                        |          |           |
| disabledDate            | 禁用日期函数<br><br>**签名**:<br>Function(日期值: MomentObject, view: String) => Boolean<br>**参数**:<br>_日期值_: {MomentObject} null<br>_view_: {String} 当前视图类型，year: 年， month: 月, date: 日<br>**返回值**:<br>{Boolean} 是否禁用<br>                          | Function             | () => false                                                                                  |          |           |
| footerRender            | 自定义面板页脚<br><br>**签名**:<br>Function() => Node<br>**返回值**:<br>{Node} 自定义的面板页脚组件<br>                                                                                                                                                       | Function             | () => null                                                                                   |          |           |
| onChange                | 日期范围值改变时的回调 \[ MomentObject                                                                                                                                                                                                             | String, MomentObject | String ]<br><br>**签名**:<br>Function(value: Array) => void<br>**参数**:<br>_value_: {Array} 日期值 | Function | func.noop |
| onOk                    | 点击确认按钮时的回调 返回开始时间和结束时间`[ MomentObject|String, MomentObject|String ]`<br><br>**签名**:<br>Function() => Array<br>**返回值**:<br>{Array} 日期范围<br>                                                                                              | Function             | func.noop                                                                                    |          |           |
| label                   | 输入框内置标签                                                                                                                                                                                                                                 | ReactNode            | -                                                                                            |          |           |
| state                   | 输入框状态<br><br>**可选值**:<br>'error', 'loading', 'success'                                                                                                                                                                                  | Enum                 | -                                                                                            |          |           |
| disabled                | 是否禁用                                                                                                                                                                                                                                    | Boolean              | -                                                                                            |          |           |
| hasClear                | 是否显示清空按钮                                                                                                                                                                                                                                | Boolean              | true                                                                                         |          |           |
| visible                 | 弹层显示状态                                                                                                                                                                                                                                  | Boolean              | -                                                                                            |          |           |
| defaultVisible          | 弹层默认是否显示                                                                                                                                                                                                                                | Boolean              | false                                                                                        |          |           |
| onVisibleChange         | 弹层展示状态变化时的回调<br><br>**签名**:<br>Function(visible: Boolean, type: String) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否显示<br>_type_: {String} 触发弹层显示和隐藏的来源 okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发 | Function             | func.noop                                                                                    |          |           |
| popupTriggerType        | 弹层触发方式<br><br>**可选值**:<br>'click', 'hover'                                                                                                                                                                                              | Enum                 | 'click'                                                                                      |          |           |
| popupAlign              | 弹层对齐方式, 具体含义见 OverLay文档                                                                                                                                                                                                                 | String               | 'tl tl'                                                                                      |          |           |
| popupContainer          | 弹层容器                                                                                                                                                                                                                                    | any                  | -                                                                                            |          |           |
| popupStyle              | 弹层自定义样式                                                                                                                                                                                                                                 | Object               | -                                                                                            |          |           |
| popupClassName          | 弹层自定义样式类                                                                                                                                                                                                                                | String               | -                                                                                            |          |           |
| popupProps              | 弹层其他属性                                                                                                                                                                                                                                  | Object               | -                                                                                            |          |           |
| followTrigger           | 是否跟随滚动                                                                                                                                                                                                                                  | Boolean              | -                                                                                            |          |           |
| inputProps              | 输入框其他属性                                                                                                                                                                                                                                 | Object               | -                                                                                            |          |           |
| dateCellRender          | 自定义日期单元格渲染<br><br>**签名**:<br>Function() => void                                                                                                                                                                                         | Function             | -                                                                                            |          |           |
| monthCellRender         | 自定义月份渲染函数<br><br>**签名**:<br>Function(calendarDate: Object) => ReactNode<br>**参数**:<br>_calendarDate_: {Object} 对应 Calendar 返回的自定义日期对象<br>**返回值**:<br>{ReactNode} null<br>                                                               | Function             | -                                                                                            |          |           |
| startDateInputAriaLabel | 开始日期输入框的 aria-label 属性                                                                                                                                                                                                                  | String               | -                                                                                            |          |           |
| startTimeInputAriaLabel | 开始时间输入框的 aria-label 属性                                                                                                                                                                                                                  | String               | -                                                                                            |          |           |
| endDateInputAriaLabel   | 结束日期输入框的 aria-label 属性                                                                                                                                                                                                                  | String               | -                                                                                            |          |           |
| endTimeInputAriaLabel   | 结束时间输入框的 aria-label 属性                                                                                                                                                                                                                  | String               | -                                                                                            |          |           |
| isPreview               | 是否为预览态                                                                                                                                                                                                                                  | Boolean              | -                                                                                            |          |           |
| renderPreview           | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: Array) => void<br>**参数**:<br>_value_: {Array} 日期区间                                                                                                                                        | Function             | -                                                                                            |          |           |

### DatePicker.WeekPicker

| 参数                  | 说明                                                                                                                                                                                                                                                                   | 类型        | 默认值         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| label               | 输入框内置标签                                                                                                                                                                                                                                                              | ReactNode | -           |
| size                | 输入框尺寸<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                                                                                                                                                  | Enum      | 'medium'    |
| state               | 输入框状态<br><br>**可选值**:<br>'success', 'loading', 'error'                                                                                                                                                                                                               | Enum      | -           |
| placeholder         | 输入提示                                                                                                                                                                                                                                                                 | String    | -           |
| defaultVisibleMonth | 默认展现的月<br><br>**签名**:<br>Function() => MomentObject<br>**返回值**:<br>{MomentObject} 返回包含指定月份的 moment 对象实例<br>                                                                                                                                                          | Function  | -           |
| value               | 日期值（受控）moment 对象                                                                                                                                                                                                                                                     | custom    | -           |
| defaultValue        | 初始日期值，moment 对象                                                                                                                                                                                                                                                      | custom    | -           |
| format              | 日期值的格式（用于限定用户输入和展示）                                                                                                                                                                                                                                                  | String    | 'YYYY-wo'   |
| disabledDate        | 禁用日期函数<br><br>**签名**:<br>Function(日期值: MomentObject, view: String) => Boolean<br>**参数**:<br>_日期值_: {MomentObject} null<br>_view_: {String} 当前视图类型，year: 年， month: 月, date: 日<br>**返回值**:<br>{Boolean} 是否禁用<br>                                                       | Function  | () => false |
| footerRender        | 自定义面板页脚<br><br>**签名**:<br>Function() => Node<br>**返回值**:<br>{Node} 自定义的面板页脚组件<br>                                                                                                                                                                                    | Function  | () => null  |
| onChange            | 日期值改变时的回调<br><br>**签名**:<br>Function(value: MomentObject/String) => void<br>**参数**:<br>_value_: {MomentObject/String} 日期值                                                                                                                                            | Function  | func.noop   |
| disabled            | 是否禁用                                                                                                                                                                                                                                                                 | Boolean   | -           |
| hasClear            | 是否显示清空按钮                                                                                                                                                                                                                                                             | Boolean   | true        |
| visible             | 弹层显示状态                                                                                                                                                                                                                                                               | Boolean   | -           |
| defaultVisible      | 弹层默认是否显示                                                                                                                                                                                                                                                             | Boolean   | false       |
| onVisibleChange     | 弹层展示状态变化时的回调<br><br>**签名**:<br>Function(visible: Boolean, type: String) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否显示<br>_type_: {String} 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发 | Function  | func.noop   |
| popupTriggerType    | 弹层触发方式<br><br>**可选值**:<br>'click', 'hover'                                                                                                                                                                                                                           | Enum      | 'click'     |
| popupAlign          | 弹层对齐方式,具体含义见 OverLay文档                                                                                                                                                                                                                                               | String    | 'tl tl'     |
| popupContainer      | 弹层容器                                                                                                                                                                                                                                                                 | any       | -           |
| popupStyle          | 弹层自定义样式                                                                                                                                                                                                                                                              | Object    | -           |
| popupClassName      | 弹层自定义样式类                                                                                                                                                                                                                                                             | String    | -           |
| popupProps          | 弹层其他属性                                                                                                                                                                                                                                                               | Object    | -           |
| followTrigger       | 是否跟随滚动                                                                                                                                                                                                                                                               | Boolean   | -           |
| inputProps          | 输入框其他属性                                                                                                                                                                                                                                                              | Object    | -           |
| dateCellRender      | 自定义日期渲染函数<br><br>**签名**:<br>Function(value: Object) => ReactNode<br>**参数**:<br>_value_: {Object} 日期值（moment对象）<br>**返回值**:<br>{ReactNode} null<br>                                                                                                                   | Function  | -           |
| monthCellRender     | 自定义月份渲染函数<br><br>**签名**:<br>Function(calendarDate: Object) => ReactNode<br>**参数**:<br>_calendarDate_: {Object} 对应 Calendar 返回的自定义日期对象<br>**返回值**:<br>{ReactNode} null<br>                                                                                            | Function  | -           |
| isPreview           | 是否为预览态                                                                                                                                                                                                                                                               | Boolean   | -           |
| renderPreview       | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: MomentObject) => void<br>**参数**:<br>_value_: {MomentObject} 年份                                                                                                                                                         | Function  | -           |

### DatePicker.YearPicker

| 参数                 | 说明                                                                                                                                                                                                                                                 | 类型        | 默认值         |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| label              | 输入框内置标签                                                                                                                                                                                                                                            | ReactNode | -           |
| size               | 输入框尺寸<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                                                                                                                                | Enum      | 'medium'    |
| state              | 输入框状态<br><br>**可选值**:<br>'success', 'loading', 'error'                                                                                                                                                                                             | Enum      | -           |
| placeholder        | 输入提示                                                                                                                                                                                                                                               | String    | -           |
| value              | 日期值（受控）moment 对象                                                                                                                                                                                                                                   | custom    | -           |
| defaultValue       | 初始日期值，moment 对象                                                                                                                                                                                                                                    | custom    | -           |
| format             | 日期值的格式（用于限定用户输入和展示）                                                                                                                                                                                                                                | String    | 'YYYY'      |
| disabledDate       | 禁用日期函数<br><br>**签名**:<br>Function(日期值: MomentObject, view: String) => Boolean<br>**参数**:<br>_日期值_: {MomentObject} null<br>_view_: {String} 当前视图类型，year: 年， month: 月, date: 日<br>**返回值**:<br>{Boolean} 是否禁用<br>                                     | Function  | () => false |
| footerRender       | 自定义面板页脚<br><br>**签名**:<br>Function() => Node<br>**返回值**:<br>{Node} 自定义的面板页脚组件<br>                                                                                                                                                                  | Function  | () => null  |
| onChange           | 日期值改变时的回调<br><br>**签名**:<br>Function(value: MomentObject/String) => void<br>**参数**:<br>_value_: {MomentObject/String} 日期值                                                                                                                          | Function  | func.noop   |
| disabled           | 是否禁用                                                                                                                                                                                                                                               | Boolean   | -           |
| hasClear           | 是否显示清空按钮                                                                                                                                                                                                                                           | Boolean   | true        |
| visible            | 弹层显示状态                                                                                                                                                                                                                                             | Boolean   | -           |
| defaultVisible     | 弹层默认是否显示                                                                                                                                                                                                                                           | Boolean   | -           |
| onVisibleChange    | 弹层展示状态变化时的回调<br><br>**签名**:<br>Function(visible: Boolean, reason: String) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否显示<br>_reason_: {String} 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发 | Function  | func.noop   |
| popupTriggerType   | 弹层触发方式<br><br>**可选值**:<br>'click', 'hover'                                                                                                                                                                                                         | Enum      | 'click'     |
| popupAlign         | 弹层对齐方式, 具体含义见 OverLay文档                                                                                                                                                                                                                            | String    | 'tl tl'     |
| popupContainer     | 弹层容器                                                                                                                                                                                                                                               | any       | -           |
| popupStyle         | 弹层自定义样式                                                                                                                                                                                                                                            | Object    | -           |
| popupClassName     | 弹层自定义样式类                                                                                                                                                                                                                                           | String    | -           |
| popupProps         | 弹层其他属性                                                                                                                                                                                                                                             | Object    | -           |
| followTrigger      | 是否跟随滚动                                                                                                                                                                                                                                             | Boolean   | -           |
| inputProps         | 输入框其他属性                                                                                                                                                                                                                                            | Object    | -           |
| dateInputAriaLabel | 日期输入框的 aria-label 属性                                                                                                                                                                                                                               | String    | -           |
| isPreview          | 是否为预览态                                                                                                                                                                                                                                             | Boolean   | -           |
| renderPreview      | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: MomentObject) => void<br>**参数**:<br>_value_: {MomentObject} 年份                                                                                                                                       | Function  | -           |

## ARIA and KeyBoard

同选择框一样聚焦到 DatePiker 后，需要按下 `ENTER` 键打开弹出框，选择/输入日期， 通过 `TAB` 切换日期和时间输入框。

| 按键              | 说明                                            |
| :-------------- | :-------------------------------------------- |
| 数字键             | 需要手动输入日期，指定的日期格式                              |
| Enter           | 打开日期选择框或输入后选择日期                               |
| Esc             | 关闭日期选择框                                       |
| Up              | 输入上一天（Month Picker 则是上一个月， Year Picker 则是上一年） |
| Down            | 输入下一天（Month Picker 则是下一个月， Year Picker 则是下一年） |
| Page Up         | 输入上一月                                         |
| Page Down       | 输入下一月                                         |
| Alt + Page Up   | 输入上一年                                         |
| Alt + Page Down | 输入下一年                                         |
