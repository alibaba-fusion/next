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

-   交互重构，面板和输入框分离，优化底部扩展等
-   使用 `dayjs` 日期库替换了 `moment`
-   新增`WeekPicker` 和 `QuarterPicker` 选择器
-   新增了 `preset` 属性，支持预设日期

API变化：

-   移除了 `defaultVisibleMonth` 属性，请使用 `defaultPanelValue` 替代（仅名字替换）
-   移除了 `footerRender` 属性，请使用 `extraFooterRender` 替代
-   `showTime` 之前属性类型既支持 `Boolean` 也支持 `Object`；现升级为仅支持 `Boolean` 类型，使用 `timePanelProps` 来传入时分秒的时间选择属性
-   `onChange` 和 `onOk` 等事件返回日期对象为 `Dayjs` 类型

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

### DatePicker2

| 参数               | 说明                                                                                                                 | 类型                                                                                                 | 默认值   | 是否必填 |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------- | -------- |
| type               | 日期选择类型                                                                                                         | 'date' \| 'range'                                                                                    | 'date'   |          |
| mode               | 日期面板模式                                                                                                         | ModeType                                                                                             | 'date'   |          |
| value              | 时间值（Dayjs 对象或时间字符串，受控状态使用）                                                                       | string \| Dayjs \| null \| (Dayjs \| null \| string)[]                                               | -        |          |
| defaultValue       | 时间初值（Dayjs 对象或时间字符串，非受控状态使用）                                                                   | string \| Dayjs \| (Dayjs \| null \| string)[]                                                       | -        |          |
| defaultPanelValue  | 默认面板值                                                                                                           | Dayjs                                                                                                | -        |          |
| disabledDate       | 禁用日期函数<br/><br/>**签名**:<br/>**参数**:<br/>_value_: Dayjs<br/>_mode_: ModeType                                | (value: Dayjs, mode: ModeType) => boolean                                                            | -        |          |
| extraFooterRender  | 底部额外渲染                                                                                                         | React.ReactNode \| (() => React.ReactNode)                                                           | -        |          |
| preset             | 预设值                                                                                                               | PresetType \| PresetType[]                                                                           | -        |          |
| showTime           | 是否显示时间                                                                                                         | boolean                                                                                              | -        |          |
| showOk             | 是否显示确认按钮                                                                                                     | boolean                                                                                              | -        |          |
| resetTime          | 是否重置时间                                                                                                         | boolean                                                                                              | -        |          |
| timePanelProps     | 时间面板属性                                                                                                         | Partial\<TimePanelProps>                                                                             | -        |          |
| disabledTime       | 禁用时间                                                                                                             | object                                                                                               | -        |          |
| onOk               | 点击确认按钮时的回调<br/><br/>**签名**:<br/>**参数**:<br/>_value_: Dayjs \| Dayjs[]<br/>_strVal_: string \| string[] | ((value: Dayjs, strVal: string) => void) \| ((value: Array\<Dayjs>, strVal: Array\<string>) => void) | -        |          |
| onChange           | 值改变时的回调<br/><br/>**签名**:<br/>**参数**:<br/>_value_: Dayjs<br/>_strVal_: string                              | (value: Dayjs, strVal: string) => void                                                               | -        |          |
| onVisibleChange    | 面板visible切换时的回调<br/><br/>**签名**:<br/>**参数**:<br/>_visible_: boolean                                      | (visible: boolean) => void                                                                           | -        |          |
| onPanelChange      | 面板模式改变时的回调<br/><br/>**签名**:<br/>**参数**:<br/>_panelValue_: Dayjs<br/>_mode_: ModeType                   | (<br/> panelValue: Dayjs,<br/> mode: ModeType<br/> ) => void                                         | -        |          |
| format             | 日期格式                                                                                                             | string \| ((value: Dayjs) => string)                                                                 | 'YYYY-MM |          |
| outputFormat       | 输出格式：控制 onChange、onOk 事件的输出值格式                                                                       | string \| ((value: Dayjs) => string)                                                                 | -        |          |
| disabled           | 是否禁用                                                                                                             | boolean \| boolean[]                                                                                 | -        |          |
| state              | 日期选择状态                                                                                                         | 'success' \| 'loading' \| 'error'                                                                    | -        |          |
| size               | 日期选择框尺寸                                                                                                       | 'small' \| 'medium' \| 'large'                                                                       | -        |          |
| hasBorder          | 是否显示边框                                                                                                         | boolean                                                                                              | -        |          |
| inputProps         | 输入框属性                                                                                                           | InputProps                                                                                           | -        |          |
| inputReadOnly      | 输入框只读                                                                                                           | boolean                                                                                              | -        |          |
| hasClear           | 是否显示清空按钮                                                                                                     | boolean                                                                                              | -        |          |
| label              | 标签                                                                                                                 | React.ReactNode                                                                                      | -        |          |
| separator          | 分隔符                                                                                                               | React.ReactNode                                                                                      | -        |          |
| placeholder        | 输入框占位符                                                                                                         | string \| string[]                                                                                   | -        |          |
| visible            | 面板是否显示                                                                                                         | boolean                                                                                              | -        |          |
| defaultVisible     | 默认面板是否显示                                                                                                     | boolean                                                                                              | false    |          |
| trigger            | 触发元素                                                                                                             | React.ReactNode \| (() => React.ReactNode)                                                           | -        |          |
| popupTriggerType   | 弹层触发方式                                                                                                         | 'click' \| 'hover'                                                                                   | 'click'  |          |
| popupAlign         | 弹层对齐方式                                                                                                         | string                                                                                               | -        |          |
| popupContainer     | 弹层容器                                                                                                             | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement)                                      | -        |          |
| popupStyle         | 弹层样式                                                                                                             | React.CSSProperties                                                                                  | -        |          |
| popupClassName     | 弹层 className                                                                                                       | string                                                                                               | -        |          |
| popupProps         | 弹层属性                                                                                                             | PopupProps                                                                                           | -        |          |
| followTrigger      | 是否跟随滚动                                                                                                         | boolean                                                                                              | -        |          |
| popupComponent     | 弹层组件                                                                                                             | React.Component                                                                                      | -        |          |
| dateCellRender     | 日期单元格自定义渲染<br/><br/>**签名**:<br/>**参数**:<br/>_value_: Dayjs                                             | (value: Dayjs) => React.ReactNode                                                                    | -        |          |
| monthCellRender    | 月份单元格自定义渲染<br/><br/>**签名**:<br/>**参数**:<br/>_value_: Dayjs                                             | (value: Dayjs) => React.ReactNode                                                                    | -        |          |
| dateInputAriaLabel | 日期输入框 aria-label                                                                                                | string                                                                                               | -        |          |
| isPreview          | 是否为预览态                                                                                                         | boolean                                                                                              | -        |          |
| renderPreview      | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>**参数**:<br/>_value_: Dayjs \| Dayjs[]                                | (value: Dayjs \| Dayjs[]) => React.ReactNode                                                         | -        |          |
| onCalendarChange   | 日期面板值改变时的回调<br/><br/>**签名**:<br/>**参数**:<br/>_values_: Dayjs[]<br/>_formatString_: string[]           | (values: Dayjs[] \| null, formatString: string[]) => void                                            | -        |          |

### DatePicker2.RangePicker

| 参数               | 说明                                                                                                       | 类型                                                                                          | 默认值 | 是否必填 |
| ------------------ | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------ | -------- |
| value              | 时间值（受控状态使用）                                                                                     | Array\<ConfigType>                                                                            | -      |          |
| defaultValue       | 时间默认值                                                                                                 | Array\<ConfigType>                                                                            | -      |          |
| format             | 时间格式                                                                                                   | string \| ((value: Dayjs) => string) \| (string \| ((value: Dayjs) => string))[]              | -      |          |
| onOk               | 点击确认按钮时的回调                                                                                       | (value: Array\<Dayjs>, strVal: Array\<string>) => void                                        | -      |          |
| onChange           | 值改变时的回调                                                                                             | (value: Array\<Dayjs>, strVal: Array\<string>) => void                                        | -      |          |
| outputFormat       | 输出格式：控制 onChange、onOk 事件的输出值格式                                                             | \| string<br/> \| ((value: Dayjs) => string)<br/> \| (string \| ((value: Dayjs) => string))[] | -      |          |
| placeholder        | 输入框占位符                                                                                               | string \| Array\<string>                                                                      | -      |          |
| dateInputAriaLabel | 日期输入框 aria-label                                                                                      | Array\<string> \| string                                                                      | -      |          |
| disabled           | 是否禁用                                                                                                   | boolean \| boolean[]                                                                          | -      |          |
| onCalendarChange   | 日期面板值改变时的回调<br/><br/>**签名**:<br/>**参数**:<br/>_values_: Dayjs[]<br/>_formatString_: string[] | (values: [Dayjs, Dayjs], formatString: [string, string]) => void                              | -      |          |
