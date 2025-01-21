# Table

-   category: Components
-   family: DataDisplay
-   chinese: 表格
-   cols: 1
-   type: 展示

---

展示行列数据。

## 何时使用

-   Table 负责将数据呈现为高度可定制和具备可访问性的 HTML 表格，其核心功能为将结构化的数据使用表格的方式展现；
-   可以使用各种参数来向表格中加入一些特性，比如排序，过滤，滚动，锁列等。

### Table.StickyLock

这是 `1.21` 版本推出的子组件，它与 `Table` 用法、API 完全一样，只是优化了锁列的实现，推荐升级。

区分如下：

-   旧版本锁列通过两层 dom 来模拟左、右锁列的列，因此滚动、行高的同步等都需要额外逻辑的，逻辑较重;
-   新版本 `Table.StickyLock` 通过 `position: sticky` 来实现锁列，滚动、行高等行为都通过浏览器实现，逻辑轻量;

建议用户在新的页面中使用 `Table.StickyLock`，如果没有深度的样式定制（例如选择到 `.next-table-lock-left` 这一层级）,也可以把现有的 `Table` 升级到 `Table.StickyLock`

## FAQ

### `rowSelection` 模式，选择任意一个都是全选？

给定的数据源中的属性需要有一个唯一标示该条数据的主键，默认值为 id，可通过 `primaryKey` 更改 e.g.`<Table primaryKey='myId'></Table>`。

### `rowSelection` 模式，如何设置默认选中/禁用？

通过受控模式，设置 `rowSelection.selectedRowKeys` 可以默认选中选中；通过 `rowSelection.getProps` 可以自定义每一行 checkbox 的 props，具体可搜索 demo`选择可控`。

### `rowSelection` 模式，如何屏蔽全选按钮/自定义全选按钮？

通过`rowSelection.titleProps` 可以自定义选择列的表头的 props，可通过 `style: {display: 'none'}` 屏蔽全选按钮；此外还有 `rowSelection.titleAddons` `rowSelection.columnProps`等属性，具体用法可搜索 demo `可选择`。

### 支持行的双击事件/设置每一行的样式？处理整行点击？

通过 `rowProps` 属性，重写行支持的原生属性，比如`className style onDoubleClick`等；通过 `onRowClick` 处理整行点击。

### 已知问题

-   分组 Table 不支持在 Hover 状态和选中状态下显示背景色，无法合并单元格；
-   分组 Table，`<Table fixedHeader/>` 没有效果，header 不会固定， `<Table fixedHeader stickyHeader />` 才有效果，header 可以 sticky 到页面上

## 如何使用

基本的 Table 包含行和列，使用 Table.Column 来定义列的信息，使用传入的 dataSource 属性数据来创建行。

下面的代码将会创建一行两列的数据表：

```jsx
import { Table } from '@alifd/next';

const dataSource = [{ id: 1, time: '2016' }];
ReactDOM.render(
    <Table.StickyLock dataSource={dataSource}>
        <Table.Column title="Id" dataIndex="id" />
        <Table.Column title="Time" dataIndex="time" />
    </Table.StickyLock>,
    mountNode
);
```

### 列配置

Table.Column 提供了非常多的配置属性用于自定义列，最常见的就是使用`cell`自定义单元格的渲染逻辑。其他的配置选项可以参考下面的 Table.Column 的 API。

下面的代码会让`cell`根据值渲染不同的视图：

```jsx
import { Table } from '@alifd/next';

const dataSource = [{ id: 1, time: '2016' }];
const renderTime = value => {
    if (value === '2016') {
        return '今年';
    }
    return value;
};
ReactDOM.render(
    <Table dataSource={dataSource}>
        <Table.Column title="Id" dataIndex="id" />
        <Table.Column title="Time" dataIndex="time" cell={renderTime} />
    </Table>,
    mountNode
);
```

### 多表头

使用 Table.ColumnGroup 包裹 Table.Column 来创建有多个表头的表格。

```jsx
import { Table } from '@alifd/next';

const dataSource = [{ id: 1, time: '2016' }];
ReactDOM.render(
    <Table dataSource={dataSource}>
        <Table.ColumnGroup>
            <Table.Column title="Id" dataIndex="id" />
            <Table.Column title="Time" dataIndex="time" />
        </Table.ColumnGroup>
        <Table.ColumnGroup>
            <Table.Column title="Id" dataIndex="id" />
        </Table.ColumnGroup>
    </Table>,
    mountNode
);
```

## API

### Table

| 参数                  | 说明                                                                                                                                                                                                   | 类型                                                                                                                                                                                                                                                                                                                                                                                                                | 默认值                       | 是否必填 | 支持版本 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- | -------- |
| size                  | 尺寸，small 为紧凑模式                                                                                                                                                                                 | 'small' \| 'medium'                                                                                                                                                                                                                                                                                                                                                                                                 | -                            |          | -        |
| className             | 自定义类名                                                                                                                                                                                             | string                                                                                                                                                                                                                                                                                                                                                                                                              | -                            |          | -        |
| style                 | 自定义内联样式                                                                                                                                                                                         | React.CSSProperties                                                                                                                                                                                                                                                                                                                                                                                                 | -                            |          | -        |
| columns               | 等同于写子组件 Table.Column，子组件优先级更高                                                                                                                                                          | Array\<NormalizedColumnProps>                                                                                                                                                                                                                                                                                                                                                                                       | -                            |          | -        |
| tableLayout           | 表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局                                                                                                                                      | 'fixed' \| 'auto'                                                                                                                                                                                                                                                                                                                                                                                                   | -                            |          | -        |
| tableWidth            | 表格的总长度，可以这么用：设置表格总长度、设置部分列的宽度，这样表格会按照剩余空间大小，自动其他列分配宽度                                                                                             | number                                                                                                                                                                                                                                                                                                                                                                                                              | -                            |          | -        |
| dataSource            | 表格展示的数据源                                                                                                                                                                                       | Array\<RecordItem>                                                                                                                                                                                                                                                                                                                                                                                                  | -                            |          | -        |
| hasBorder             | 表格是否具有边框                                                                                                                                                                                       | boolean                                                                                                                                                                                                                                                                                                                                                                                                             | true                         |          | -        |
| hasHeader             | 表格是否具有头部                                                                                                                                                                                       | boolean                                                                                                                                                                                                                                                                                                                                                                                                             | true                         |          | -        |
| isZebra               | 表格是否是斑马线                                                                                                                                                                                       | boolean                                                                                                                                                                                                                                                                                                                                                                                                             | false                        |          | -        |
| loading               | 表格是否在加载中                                                                                                                                                                                       | boolean                                                                                                                                                                                                                                                                                                                                                                                                             | false                        |          | -        |
| emptyContent          | 设置数据为空的时候的表格内容展现                                                                                                                                                                       | React.ReactNode                                                                                                                                                                                                                                                                                                                                                                                                     | -                            |          | -        |
| primaryKey            | dataSource 中的主键，如果给定的数据源中的属性不包含该主键，会造成所有行全部选中等一系列问题                                                                                                            | string                                                                                                                                                                                                                                                                                                                                                                                                              | 'id'                         |          | -        |
| onRowClick            | 点击表格每一行触发的事件                                                                                                                                                                               | (record: RecordItem, index: number, e: React.MouseEvent) => void                                                                                                                                                                                                                                                                                                                                                    | -                            |          | -        |
| onRowMouseEnter       | 悬浮在表格每一行的时候触发的事件                                                                                                                                                                       | (record: RecordItem, index: number, e: React.MouseEvent) => void                                                                                                                                                                                                                                                                                                                                                    | -                            |          | -        |
| onRowMouseLeave       | 离开表格每一行的时候触发的事件                                                                                                                                                                         | (record: RecordItem, index: number, e: React.MouseEvent) => void                                                                                                                                                                                                                                                                                                                                                    | -                            |          | -        |
| onSort                | 点击列排序触发的事件                                                                                                                                                                                   | (dataIndex: string, order: SortOrder, sort: { [key: string]: SortOrder }) => void                                                                                                                                                                                                                                                                                                                                   | -                            |          | -        |
| onFilter              | 点击过滤确认按钮触发的事件                                                                                                                                                                             | (filterParams: {<br/> [propName: string]: { selectedKeys: string[]; visible: boolean };<br/> }) => void                                                                                                                                                                                                                                                                                                             | -                            |          | -        |
| onResizeChange        | 重设列尺寸的时候触发的事件                                                                                                                                                                             | (dataIndex: string, value: number) => void                                                                                                                                                                                                                                                                                                                                                                          | -                            |          | -        |
| rowProps              | 设置每一行的属性，如果返回值和其他针对行操作的属性冲突则无效。                                                                                                                                         | (<br/> record: RecordItem,<br/> index: number<br/> ) => (Record\<string, unknown> & Partial\<RowProps>) \| undefined \| void                                                                                                                                                                                                                                                                                        | -                            |          | -        |
| cellProps             | 设置单元格的属性，通过该属性可以进行合并单元格                                                                                                                                                         | (<br/> rowIndex: number \| string,<br/> colIndex: number \| string,<br/> dataIndex: string,<br/> record: RecordItem<br/> ) =><br/> \| Partial\<<br/> Omit\<<br/> CellProps,<br/> \| 'prefix'<br/> \| 'pure'<br/> \| 'primaryKey'<br/> \| 'record'<br/> \| 'value'<br/> \| 'colIndex'<br/> \| 'rowIndex'<br/> \| 'align'<br/> \| 'locale'<br/> \| 'rtl'<br/> \| 'width'<br/> ><br/> ><br/> \| undefined<br/> \| void | -                            |          | -        |
| loadingComponent      | 自定义 Loading 组件                                                                                                                                                                                    | React.ElementType\<{ [prop: string]: unknown; className?: string }>                                                                                                                                                                                                                                                                                                                                                 | -                            |          | -        |
| filterParams          | 当前过滤的 keys，使用此属性可以控制表格的头部的过滤选项中哪个菜单被选中，格式为 \{dataIndex: \{selectedKeys:[]\}\}                                                                                     | { [propName: string]: { selectedKeys?: string[]; visible?: boolean } }                                                                                                                                                                                                                                                                                                                                              | -                            |          | -        |
| sort                  | 当前排序的字段，使用此属性可以控制表格的字段的排序，格式为\{dataIndex: 'asc'\}                                                                                                                         | { [key: string]: SortOrder }                                                                                                                                                                                                                                                                                                                                                                                        | -                            |          | -        |
| sortIcons             | 自定义排序按钮，例如上下排布的：`{desc: <Icon style={{top: '6px', left: '4px'}} type={'arrow-down'} size="small" />, asc: <Icon style={{top: '-6px', left: '4px'}} type={'arrow-up'} size="small" />}` | { desc?: React.ReactNode; asc?: React.ReactNode }                                                                                                                                                                                                                                                                                                                                                                   | -                            |          | -        |
| expandedRowRender     | 额外渲染行的渲染函数                                                                                                                                                                                   | (record: RecordItem, index: number) => React.ReactNode                                                                                                                                                                                                                                                                                                                                                              | -                            |          | -        |
| rowExpandable         | 设置行是否可展开，设置 false 为不可展开                                                                                                                                                                | (record: RecordItem, index: number) => boolean                                                                                                                                                                                                                                                                                                                                                                      | -                            |          | -        |
| expandedRowIndent     | 额外渲染行的缩进，包含两个数字，第一个数字为左侧缩进，第二个数字为右侧缩进                                                                                                                             | [number, number]                                                                                                                                                                                                                                                                                                                                                                                                    | stickyLock ? [0, 0] : [1, 0] |          | -        |
| openRowKeys           | 展开的行，传入后展开状态只受此属性控制                                                                                                                                                                 | Array\<string \| number \| null>                                                                                                                                                                                                                                                                                                                                                                                    | -                            |          | -        |
| defaultOpenRowKeys    | 默认展开的行                                                                                                                                                                                           | Array\<string \| number \| null>                                                                                                                                                                                                                                                                                                                                                                                    | -                            |          | 1.23.22  |
| hasExpandedRowCtrl    | 是否显示点击展开额外渲染行的 + 号按钮                                                                                                                                                                  | boolean                                                                                                                                                                                                                                                                                                                                                                                                             | true                         |          | -        |
| getExpandedColProps   | 设置额外的列属性                                                                                                                                                                                       | (<br/> record: RecordItem,<br/> index: number<br/> ) => React.DetailedHTMLProps\<React.HTMLAttributes\<HTMLSpanElement>, HTMLSpanElement> & {<br/> disabled?: boolean;<br/> }                                                                                                                                                                                                                                       | -                            |          | -        |
| onRowOpen             | 在额外渲染行或者树展开或者收起的时候触发的事件                                                                                                                                                         | (<br/> openRowKeys: Array\<string \| number \| null>,<br/> currentRowKey: string \| number,<br/> expanded: boolean,<br/> currentRecord: RecordItem<br/> ) => void                                                                                                                                                                                                                                                   | -                            |          | -        |
| onExpandedRowClick    | 点击额外渲染行触发的事件                                                                                                                                                                               | (record: RecordItem, index: number, e: React.MouseEvent) => void                                                                                                                                                                                                                                                                                                                                                    | -                            |          | -        |
| fixedHeader           | 表头是否固定，该属性配合 maxBodyHeight 使用，当内容区域的高度超过 maxBodyHeight 的时候，在内容区域会出现滚动条                                                                                         | boolean                                                                                                                                                                                                                                                                                                                                                                                                             | false                        |          | -        |
| maxBodyHeight         | 最大内容区域的高度，在`fixedHeader`为`true`的时候，超过这个高度会出现滚动条                                                                                                                            | number \| string                                                                                                                                                                                                                                                                                                                                                                                                    | 200                          |          | -        |
| rowSelection          | 是否启用选择模式                                                                                                                                                                                       | RowSelection \| null                                                                                                                                                                                                                                                                                                                                                                                                | -                            |          | -        |
| stickyHeader          | 表头是否是 sticky                                                                                                                                                                                      | boolean                                                                                                                                                                                                                                                                                                                                                                                                             | -                            |          | -        |
| offsetTop             | 表头在距离窗口顶部达到此属性指定的偏移量后触发 sticky，仅在 stickyHeader 为 true 的时候有效                                                                                                            | number                                                                                                                                                                                                                                                                                                                                                                                                              | -                            |          | -        |
| affixProps            | Affix 组件的的属性，stickyHeader 基于 Affix 组件实现。                                                                                                                                                 | AffixProps                                                                                                                                                                                                                                                                                                                                                                                                          | -                            |          | -        |
| indent                | 在 tree 模式下的缩进尺寸，仅在 isTree 为 true 时候有效                                                                                                                                                 | number                                                                                                                                                                                                                                                                                                                                                                                                              | 12                           |          | -        |
| isTree                | 开启 Table 的 tree 模式，接收的数据格式中包含 children 则渲染成 tree table                                                                                                                             | boolean                                                                                                                                                                                                                                                                                                                                                                                                             | -                            |          | -        |
| useVirtual            | 是否开启虚拟滚动                                                                                                                                                                                       | boolean                                                                                                                                                                                                                                                                                                                                                                                                             | -                            |          | -        |
| scrollToRow           | 滚动到指定行                                                                                                                                                                                           | number                                                                                                                                                                                                                                                                                                                                                                                                              | -                            |          | 1.22.15  |
| scrollToCol           | 滚动到指定列                                                                                                                                                                                           | number                                                                                                                                                                                                                                                                                                                                                                                                              | -                            |          | -        |
| rowHeight             | 设置行高                                                                                                                                                                                               | number \| (() => number)                                                                                                                                                                                                                                                                                                                                                                                            | -                            |          | -        |
| onBodyScroll          | 在内容区域滚动的时候触发的函数                                                                                                                                                                         | (start: number) => void                                                                                                                                                                                                                                                                                                                                                                                             | -                            |          | -        |
| expandedIndexSimulate | 开启时，getExpandedColProps() / getRowProps() / expandedRowRender() 的第二个参数 index (该行所对应的序列) 将按照 0,1,2,3,4...的顺序返回，否则返回真实 index(0,2,4,6... / 1,3,5,7...)                   | boolean                                                                                                                                                                                                                                                                                                                                                                                                             | false                        |          | -        |
| crossline             | 在 hover 时出现十字参考轴，适用于表头比较复杂，需要做表头分类的场景。                                                                                                                                  | boolean                                                                                                                                                                                                                                                                                                                                                                                                             | false                        |          | -        |
| keepForwardRenderRows | 虚拟滚动时向前保留渲染的行数                                                                                                                                                                           | number                                                                                                                                                                                                                                                                                                                                                                                                              | 10                           |          | -        |
| components            | 自定义组件，高级用法，用于替换 Table 内部的组件                                                                                                                                                        | {<br/> Cell?: CellLike;<br/> Filter?: FilterLike;<br/> Sort?: SortLike;<br/> Resize?: ResizeLike;<br/> Row?: RowLike;<br/> Header?: HeaderLike;<br/> Wrapper?: WrapperLike;<br/> Body?: BodyLike;<br/> }                                                                                                                                                                                                            | -                            |          | -        |

### Table.Column

| 参数            | 说明                                                                                                          | 类型                                                                                                   | 默认值                         | 是否必填 | 支持版本 |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------ | -------- | -------- |
| dataIndex       | 指定列对应的字段，支持`a.b`形式的快速取值                                                                     | string                                                                                                 | -                              |          | -        |
| cell            | 行渲染的逻辑                                                                                                  | \| React.ReactNode<br/> \| ((value: unknown, rowIndex: number, record: RecordItem) => React.ReactNode) | -                              |          | -        |
| title           | 表头显示的内容                                                                                                | React.ReactNode \| (() => React.ReactNode)                                                             | -                              |          | -        |
| htmlTitle       | 写到 header 单元格上的 title 属性                                                                             | string                                                                                                 | -                              |          | -        |
| sortable        | 是否支持排序                                                                                                  | boolean                                                                                                | -                              |          | -        |
| width           | 列宽，注意在锁列的情况下一定需要配置宽度                                                                      | number \| string                                                                                       | -                              |          | -        |
| align           | 单元格的对齐方式                                                                                              | 'left' \| 'center' \| 'right'                                                                          | -                              |          | -        |
| sortDirections  | 排序的方向。设置 ['desc', 'asc']，表示降序、升序。设置 ['desc', 'asc', 'default']，表示表示降序、升序、不排序 | Array\<SortOrder>                                                                                      | -                              |          | 1.23     |
| alignHeader     | 标题单元格的对齐方式，如果不配置，默认读取 align 值                                                           | 'left' \| 'center' \| 'right'                                                                          | -                              |          | -        |
| filters         | 生成标题过滤的菜单，格式为`[{label:'xxx', value:'xxx'}]`                                                      | FilterItem[]                                                                                           | -                              |          | -        |
| filterMode      | 过滤的模式是单选还是多选                                                                                      | 'single' \| 'multiple'                                                                                 | 'multiple'                     |          | -        |
| lock            | 是否支持锁列，可选值为`left`,`right`, `true`                                                                  | boolean \| 'left' \| 'right'                                                                           | -                              |          | -        |
| resizable       | 是否支持列宽调整，当该值设为 true，table 的布局方式会修改为 fixed.                                            | boolean                                                                                                | false                          |          | -        |
| asyncResizable  | （推荐使用）是否支持异步列宽调整，当该值设为 true，table 的布局方式会修改为 fixed.                            | boolean                                                                                                | false                          |          | 1.24     |
| colSpan         | header cell 横跨的格数，设置为 0 表示不出现此 th                                                              | number                                                                                                 | -                              |          | -        |
| wordBreak       | 设置该列单元格的 word-break 样式，对于 id 类、中文类适合用 all，对于英文句子适合用 word                       | 'all' \| 'word'                                                                                        | -                              |          | 1.23     |
| filterMenuProps | filter 模式下传递给 Menu 菜单的属性，默认继承 `Menu` 组件的 API                                               | MenuProps & { subMenuSelectable?: boolean }                                                            | \{ subMenuSelectable: false \} |          | -        |
| filterProps     | 传递给 Filter 的下拉组件的属性                                                                                | DropdownProps                                                                                          | -                              |          | -        |

### Table.ColumnGroup

| 参数  | 说明           | 类型                                       | 默认值 | 是否必填 |
| ----- | -------------- | ------------------------------------------ | ------ | -------- |
| title | 表头显示的内容 | React.ReactNode \| (() => React.ReactNode) | -      |          |

### Table.GroupHeader

| 参数                            | 说明                                                   | 类型                                                                       | 默认值 | 是否必填 |
| ------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------- | ------ | -------- |
| cell                            | 行渲染的逻辑                                           | React.ReactNode \| ((value: RecordItem, index: number) => React.ReactNode) | -      |          |
| hasChildrenSelection            | 是否在 Children 上面渲染 selection                     | boolean                                                                    | false  |          |
| hasSelection                    | 是否在 GroupHeader 上面渲染 selection                  | boolean                                                                    | true   |          |
| useFirstLevelDataWhenNoChildren | 当 dataSource 里没有 children 时，是否使用内容作为数据 | boolean                                                                    | false  |          |

### Table.GroupFooter

| 参数 | 说明         | 类型                                                                               | 默认值 | 是否必填 |
| ---- | ------------ | ---------------------------------------------------------------------------------- | ------ | -------- |
| cell | 行渲染的逻辑 | \| React.ReactNode<br/> \| ((value: RecordItem, index: number) => React.ReactNode) | -      |          |

### CellProps

| 参数                  | 说明 | 类型                                | 默认值 | 是否必填 |
| --------------------- | ---- | ----------------------------------- | ------ | -------- |
| pure                  | -    | boolean                             | -      |          |
| prefix                | -    | TableProps['prefix']                | -      | 是       |
| className             | -    | string                              | -      |          |
| value                 | -    | unknown                             | -      |          |
| record                | -    | RecordItem                          | -      |          |
| context               | -    | unknown                             | -      |          |
| colIndex              | -    | number                              | -      |          |
| rowIndex              | -    | number                              | -      |          |
| \_\_colIndex          | -    | number \| string                    | -      |          |
| style                 | -    | React.CSSProperties                 | -      |          |
| component             | -    | React.ElementType                   | -      |          |
| children              | -    | React.ReactNode                     | -      |          |
| innerStyle            | -    | React.CSSProperties                 | -      |          |
| \_\_normalized        | -    | boolean                             | -      |          |
| expandedIndexSimulate | -    | TableProps['expandedIndexSimulate'] | -      |          |
| getCellDomRef         | -    | React.LegacyRef\<HTMLDivElement>    | -      |          |
| primaryKey            | -    | TableProps['primaryKey']            | -      |          |
| rowSpan               | -    | number                              | -      |          |

### RowProps

| 参数         | 说明 | 类型                                                                | 默认值 | 是否必填 |
| ------------ | ---- | ------------------------------------------------------------------- | ------ | -------- |
| className    | -    | string                                                              | -      |          |
| rowIndex     | -    | number                                                              | -      | 是       |
| \_\_rowIndex | -    | number                                                              | -      | 是       |
| onClick      | -    | (record: RecordItem, rowIndex: number, e: React.MouseEvent) => void | -      | 是       |
| onMouseEnter | -    | (record: RecordItem, rowIndex: number, e: React.MouseEvent) => void | -      | 是       |
| onMouseLeave | -    | (record: RecordItem, rowIndex: number, e: React.MouseEvent) => void | -      | 是       |
| Cell         | -    | CellLike                                                            | -      | 是       |
| children     | -    | React.ReactNode                                                     | -      | 是       |
| record       | -    | RecordItem                                                          | -      | 是       |
| wrapper      | -    | (wrapper: React.ReactElement) => React.ReactNode                    | -      | 是       |

### RowSelection

| 参数            | 说明                                                                                                                   | 类型                                                                             | 默认值     | 是否必填 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------- | -------- |
| getProps        | 获取 selection 的默认属性                                                                                              | (record: RecordItem, index: number) => CheckboxProps \| RadioProps               | -          |          |
| onChange        | 选择改变的时候触发的事件，**注意:** 其中 records 只会包含当前 dataSource 的数据，很可能会小于 selectedRowKeys 的长度。 | (selectedRowKeys: Array\<string \| number>, records: Array\<RecordItem>) => void | -          |          |
| onSelect        | 用户手动选择/取消选择某行的回调                                                                                        | (selected: boolean, record: RecordItem, records: RecordItem[]) => void           | -          |          |
| onSelectAll     | 用户手动选择/取消选择所有行的回调                                                                                      | (selected: boolean, records: RecordItem[]) => void                               | -          |          |
| selectedRowKeys | 设置了此属性，将 rowSelection 变为受控状态，接收值为该行数据的 primaryKey 的值                                         | Array\<string \| number>                                                         | -          |          |
| mode            | 选择 selection 的模式                                                                                                  | 'single' \| 'multiple'                                                           | 'multiple' |          |
| titleProps      | 选择列表头的 props，仅在 `multiple` 模式下生效                                                                         | () => CheckboxProps                                                              | -          |          |
| columnProps     | 选择列的 props，例如锁列、对齐等，可使用 `Table.Column` 的所有参数                                                     | () => Partial\<ColumnProps>                                                      | -          |          |
| titleAddons     | 选择列表头添加的元素，在`single` `multiple` 下都生效                                                                   | () => React.ReactNode                                                            | -          |          |

### RecordItem

```typescript
export type RecordItem = Record<string, unknown> & { children?: RecordItem[] };
```

### SortOrder

```typescript
export type SortOrder = 'desc' | 'asc' | 'default';
```
