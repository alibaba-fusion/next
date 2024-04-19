# Calendar2

-   category: Components
-   family: DataDisplay
-   chinese: 日历2
-   type: 展示

---

按照日历形式展示数据的容器。

### 何时使用

1.22版本增加当前组件

日历组件是一个偏向于展示与受控的基础组件，可用于日程、课表、价格日历、农历展示等。

### 国际化

由于 `Calendar` 组件内部使用 `dayjs` 对象来设置日期（请使用最新版 dayjs），部分 `Locale` 读取自 [日期库`dayjs`的国际化](https://dayjs.gitee.io/docs/zh-CN/i18n/i18n)。

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

| 参数              | 说明                                   | 类型                                                                                                                                                                                                                                                                                                     | 默认值       | 是否必填 |
| ----------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- |
| defaultValue      | 默认选中的日期（dayjs 对象）           | ConfigType                                                                                                                                                                                                                                                                                               | -            |          |
| value             | 选中的日期值 (dayjs 对象)              | ConfigType                                                                                                                                                                                                                                                                                               | -            |          |
| defaultPanelValue | 面板默认显示的日期                     | ConfigType                                                                                                                                                                                                                                                                                               | -            |          |
| panelValue        | 面板显示的日期（受控）                 | ConfigType                                                                                                                                                                                                                                                                                               | -            |          |
| shape             | 展现形态                               | 'card' \| 'fullscreen' \| 'panel'                                                                                                                                                                                                                                                                        | 'fullscreen' |          |
| mode              | 日期模式                               | CalendarMode                                                                                                                                                                                                                                                                                             | 'month'      |          |
| panelMode         | 面板模式，未指定时会根据 mode 自动推断 | CalendarPanelMode                                                                                                                                                                                                                                                                                        | -            |          |
| onSelect          | 选择日期单元格时的回调                 | (value: Dayjs, strVal: string) => void                                                                                                                                                                                                                                                                   | -            |          |
| onChange          | 值改变时的回调                         | (value: Dayjs, strVal: string) => void                                                                                                                                                                                                                                                                   | -            |          |
| onPanelChange     | 日期面板变化回调                       | (value: Dayjs, mode: string, reason?: string) => void                                                                                                                                                                                                                                                    | -            |          |
| className         | 自定义样式类                           | string                                                                                                                                                                                                                                                                                                   | -            |          |
| dateCellRender    | 自定义日期渲染                         | CustomCellRender                                                                                                                                                                                                                                                                                         | -            |          |
| monthCellRender   | 自定义月份渲染函数                     | CustomCellRender                                                                                                                                                                                                                                                                                         | -            |          |
| yearCellRender    | 自定义年份渲染函数                     | CustomCellRender                                                                                                                                                                                                                                                                                         | -            |          |
| quarterCellRender | 自定义季度渲染函数                     | CustomCellRender                                                                                                                                                                                                                                                                                         | -            |          |
| disabledDate      | 不可选择的日期                         | (value: Dayjs, mode: CalendarPanelMode) => boolean                                                                                                                                                                                                                                                       | -            |          |
| onPrev            | 点击头部左单箭头时触发的回调           | OnPrevOrNext                                                                                                                                                                                                                                                                                             | -            |          |
| onNext            | 点击头部右单箭头时触发的回调           | OnPrevOrNext                                                                                                                                                                                                                                                                                             | -            |          |
| onSuperPrev       | 点击头部左双箭头时触发的回调           | OnPrevOrNext                                                                                                                                                                                                                                                                                             | -            |          |
| onSuperNext       | 点击头部右双箭头时触发的回调           | OnPrevOrNext                                                                                                                                                                                                                                                                                             | -            |          |
| headerRender      | 头部自定义渲染                         | (props: HeaderPanelProps) => React.ReactNode                                                                                                                                                                                                                                                             | -            |          |
| validValue        | 可选择的年份的有效区间                 | [Dayjs, Dayjs]                                                                                                                                                                                                                                                                                           | -            |          |
| renderHeaderExtra | 渲染头部额外内容                       | (props: HeaderPanelProps) => React.ReactNode                                                                                                                                                                                                                                                             | -            |          |
| cellClassName     | 单元格自定义样式                       | (value: Dayjs) => Record\<string, boolean> \| undefined \| null                                                                                                                                                                                                                                          | -            |          |
| cellProps         | 单元格自定义属性                       | {<br/> onMouseEnter?: (<br/> v: Dayjs,<br/> e: React.MouseEvent\<HTMLElement>,<br/> args: Pick\<CellData, 'isCurrent' \| 'label'><br/> ) => void;<br/> onMouseLeave?: (<br/> v: Dayjs,<br/> e: React.MouseEvent\<HTMLElement>,<br/> args: Pick\<CellData, 'isCurrent' \| 'label'><br/> ) => void;<br/> } | -            |          |

### CellData

| 参数      | 说明 | 类型             | 默认值 | 是否必填 |
| --------- | ---- | ---------------- | ------ | -------- |
| value     | -    | Dayjs            | -      | 是       |
| label     | -    | number \| string | -      | 是       |
| isCurrent | -    | boolean          | -      | 是       |
| key       | -    | string \| number | -      | 是       |

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
