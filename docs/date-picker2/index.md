# DatePicker2

-   category: Components
-   family: DataEntry
-   chinese: 日期选择框
-   type: 表单
-   version: 1.22.0

---

输入或选择日期的控件。当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 开发指南
### 从 `DatePicker` 升级到 `DatePicker2`
1.22版本增加当前组件

功能变化：
- 交互重构，面板和输入框分离，优化底部扩展等
- 使用 `dayjs` 日期库替换了 `moment`
- 新增`WeekPicker` 和 `QuarterPicker` 选择器
- 新增了 `preset` 属性，支持预设日期

API变化：
- 移除了 `defaultVisibleMonth` 属性，请使用 `defaultPanelValue` 替代（仅名字替换）
- 移除了 `footerRender` 属性，请使用 `extraFooterRender` 替代
- `showTime` 之前属性类型既支持 `Boolean` 也支持 `Object`；现升级为仅支持 `Boolean` 类型，使用 `timePanelProps` 来传入时分秒的时间选择属性
- `onChange` 和 `onOk` 等事件返回日期对象为 `Dayjs` 类型

### 国际化
日期的国际化包括组件的国际化跟[日期库`dayjs`的国际化](https://dayjs.gitee.io/docs/zh-CN/i18n/i18n)两部分。
```jsx
import { DatePicker2, ConfigProvider } from '@alifd/next';
import 'dayjs/locale/en'; // 组件库国际化
import en from '@alifd/next/lib/locale/en-us'; // 组件国际化

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
日期选择框分为 `DatePicker` 和 `RangePicker` 两种类型，分别又有 `date`、`month`、`year`, `week`, `quarter` 五种不同模式。
### 公共API

| 参数                  | 说明                                                                                                                                                                                                                                                                   | 类型             | 默认值          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------ |
| disabledDate        | 禁用日期函数<br><br>**签名**:<br>Function(value: Dayjs, view: String) => Boolean<br>**参数**:<br>_value_: {Dayjs} 日期值<br>_mode_: {String} 当前视图类型<br>**返回值**:<br>{Boolean} 是否禁用<br>                                                       | Function       | () => false  |
| dateCellRender      | 自定义日期渲染函数<br><br>**签名**:<br>Function(value: Object) => ReactNode<br>**参数**:<br>_value_: {Dayjs} 日期值<br>**返回值**:<br>{ReactNode} node节点<br>                                                                                                                   | Function       | -            |
| onPanelChange       | 日历面板切换的回调<br><br>**签名**:<br>Function(value: Dayjs, mode: String) => void<br>**参数**:<br>_value_: {Dayjs} 日期对象                                                                                                                                                                                                                                              | Function        | -            |
| showTime            | 是否使用时间控件                                                                                                                                                                                                          | Boolean | false        |
| resetTime           | 每次选择日期时是否重置时间                                                                                                                                                                                                                                    | Boolean        | false        |
| preset              | 预设日期快捷选择                                                                                                      | Object       | -            |
| extraFooterRender   | 自定义额外的页脚<br><br>**签名**:<br>Function() => ReactNode<br>**返回值**:<br>{ReactNode} 自定义的面板页脚组件<br>                                                                                                                                                                                    | Function       | () => null   |
| disabled            | 是否禁用                                                                                                                                                                                                                                                                 | Boolean        | false            |
| hasClear            | 是否显示清空按钮                                                                                                                                                                                                                                                             | Boolean        | true         |
| size                | 输入框尺寸<br><br>**可选值**:<br>`small`, `medium`, `large`                                                                                                                                                                                                                  | Enum           | `medium`     |
| inputReadOnly       | 只读                                                                                                                                                                                                                           | Boolean        | false     |
| inputProps          | 输入框其他属性                                                                                                                                                                                                                                                              | Object         | -            |
| visible             | 弹层显示状态                                                                                                                                                                                                                                                               | Boolean        | -            |
| defaultVisible      | 弹层默认是否显示                                                                                                                                                                                                                                                             | Boolean        | false        |
| onVisibleChange     | 弹层展示状态变化时的回调<br><br>**签名**:<br>Function(visible: Boolean) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否显示 | Function       | func.noop    |
| popupTriggerType    | 弹层触发方式<br><br>**可选值**:<br>'click', 'hover'                                                                                                                                                                                                                           | Enum           | 'click'      |
| popupAlign          | 弹层对齐方式,具体含义见 OverLay文档                                                                                                                                                                                                                                               | String         | 'tl tl'      |
| popupContainer      | 弹层容器                                                                                                                                                                                                                                                                 | any            | -            |
| popupStyle          | 弹层自定义样式                                                                                                                                                                                                                                                              | Object         | -            |
| popupClassName      | 弹层自定义样式类                                                                                                                                                                                                                                                             | String         | -            |
| popupProps          | 弹层其他属性                                                                                                                                                                                                                                                               | Object         | -            |
| followTrigger       | 是否跟随滚动                                                                                                                                                                                                                                                               | Boolean        | -            |
| popupProps          | 弹层其他属性                                                                                                                                                                                                                                                               | Object         | -            |
| isPreview           | 是否为预览态                                                                                                                                                                                                                                                               | Boolean        | -            |
| renderPreview       | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: Dayjs) => void<br>**参数**:<br>_value_: {Dayjs} 日期                                                                                                                                                         | Function       | -            |
| dateInputAriaLabel  | 日期输入框的 aria-label 属性                                                                                                                                                                                                                                                 | String         | -            |

### DatePicker2 (YearPicker/MonthPicker/WeekPicker/QuarterPicker)

| 参数                 | 说明                                                                                                                                                                                                                                             | 类型        | 默认值         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| placeholder        | 输入提示                                                                                                                                                                                                                                           | String    | -           |
| value              | 日期值（受控）                                                                                                                                                                                                                               | Dayjs/String    | -           |
| defaultValue       | 初始日期值                                                                                                                                                                                                                                | Dayjs/String    | -           |
| format             | 日期格式                                                                                                                                                                                                                            | String    | `YYYY-MM`   |
| onChange           | 日期值改变时的回调<br><br>**签名**:<br>Function(value: Dayjs/String) => void<br>**参数**:<br>_value_: {Dayjs/String} 日期值                                                                                                                      | Function  | func.noop   |
| onOk               | 点击确认按钮时的回调<br><br>**签名**:<br>Function() => Array<br>**返回值**:<br>{Array} 日期范围<br>                                                                                              | Function             | func.noop

### DatePicker2.RangePicker

| 参数                      | 说明                                                                                                                                                                                                                                      | 类型                   | 默认值
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------- |
| mode               | 日期面板的状态<br><br>**可选值**:<br>`date`、`month`、`year`, `week`, `quarter`                                                                                                                                                                    | Enum           | `date`     |
| placeholder        | 输入提示                                                                                                                                                                                                                                           | String | [String, String]    | -           |
| value              | 日期值（受控）                                                                                                                                                                                                               | [Dayjs, Dayjs]                | -    |
| defaultValue       | 初始日期值                                                                                                                                                                                                         | [Dayjs, Dayjs]                 | -    |
| format             | 日期格式                                                                                                                                                                                                                                    | String/Function               | `YYYY-MM`         |
| onChange           | 日期值改变时的回调<br><br>**签名**:<br>Function(value) => void<br>**参数**:<br>_value_: {[Dayjs, Dayjs]} 日期范围                                                                                                                      | Function  | func.noop   |
| onOk               | 点击确认按钮时的回调<br><br>**签名**:<br>Function(value) => void<br>**参数**:<br>_value_: {[Dayjs, Dayjs]} 日期范围<br>                                                                                              | Function             | func.noop
