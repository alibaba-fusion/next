# Table

-   category: Components
-   family: DataDisplay
-   chinese: 表格
-   cols: 1
-   type: 展示

---

## 开发指南

Table 负责将数据呈现为高度可定制和具备可访问性的 HTML 表格，其核心功能为将结构化的数据使用表格的方式展现，然后可以使用各种参数来向表格中加入一些特性，比如排序，过滤，滚动，锁列等。

### 基本使用

基本的 Table 包含行和列，使用 Table.Column 来定义列的信息，使用传入的 dataSource 属性数据来创建行。

下面的代码将会创建一行两列的数据表：

```js
import { Table } from '@alifd/next';

const dataSource = [{id: 1, time: '2016'}];
ReactDOM.render(
    <Table dataSource={dataSource}>
        <Table.Column title="Id" dataIndex="id"/>
        <Table.Column title="Time" dataIndex="time"/>
    </Table>, mountNode);
```

### 常见问题

-   Q: 通过 `rowSelection` 开启了选择模式，为什么选择任意一个都是全选？<br/>
      A: 给定的数据源中的属性需要有一个唯一标示该条数据的主键，默认值为id，可通过 `primaryKey` 更改 e.g.`<Table primaryKey='myId'></Table>`
-   Q: 还是 `rowSelection` 选择模式，如何设置默认选中/禁用呢？<br/>
      A: 通过受控模式，设置 `rowSelection` 属性的 `selectedRowKeys` 具体可搜索demo`选择可控`
-   Q: 能用什么样的方式支持行的双击事件/设置每一行的样式？处理整行点击呢？<br/>
      A: 通过 `getRowProps` 属性，重写行支持的原生属性，比如`className style onDoubleClick`等；通过 `onRowClick` 处理整行点击

#### 列配置

Table.Column 提供了非常多的配置属性用于自定义列，最常见的就是使用`cell`自定义单元格的渲染逻辑. 其他的配置选项可以参考下面的 Table.Column 的 API。

下面的代码会让`cell`根据值渲染不同的视图：

```js
import { Table } from '@alifd/next';

const dataSource = [{id: 1, time: '2016'}];
const renderTime = value => {
    if (value === '2016') {
        return '今年';
    }
    return value;
};
ReactDOM.render(
    <Table dataSource={dataSource}>
        <Table.Column title="Id" dataIndex="id"/>
        <Table.Column title="Time" dataIndex="time" cell={renderTime}/>
    </Table>, mountNode);
```

#### 多表头

使用 Table.ColumnGroup 包裹 Table.Column 来创建有多个表头的表格。

```js
import { Table } from '@alifd/next';

const dataSource = [{id: 1, time: '2016'}];
ReactDOM.render(
    <Table dataSource={dataSource}>
        <Table.ColumnGroup>
            <Table.Column title="Id" dataIndex="id"/>
            <Table.Column title="Time" dataIndex="time"/>
        </Table.ColumnGroup>
        <Table.ColumnGroup>
            <Table.Column title="Id" dataIndex="id"/>
        </Table.ColumnGroup>
    </Table>, mountNode);
```

### 已知问题

#### 分组 Table 不支持在 Hover 状态和选中状态下显示背景色，无法合并单元格

#### Table 锁列特性下面无法使用合并单元格功能

## API

### Table

| 参数                    | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 类型              | 默认值      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------- |
| dataSource            | 表格展示的数据源                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Array           | \[]      |
| onRowClick            | 点击表格每一行触发的事件<br><br>**签名**:<br>Function(record: Object, index: Number, e: Event) => void<br>**参数**:<br>_record_: {Object} 该行所对应的数据<br>_index_: {Number} 该行所对应的序列<br>_e_: {Event} DOM事件对象                                                                                                                                                                                                                                                                                                                                                                                                                               | Function        | () => {} |
| onRowMouseEnter       | 悬浮在表格每一行的时候触发的事件<br><br>**签名**:<br>Function(record: Object, index: Number, e: Event) => void<br>**参数**:<br>_record_: {Object} 该行所对应的数据<br>_index_: {Number} 该行所对应的序列<br>_e_: {Event} DOM事件对象                                                                                                                                                                                                                                                                                                                                                                                                                           | Function        | () => {} |
| onRowMouseLeave       | 离开表格每一行的时候触发的事件<br><br>**签名**:<br>Function(record: Object, index: Number, e: Event) => void<br>**参数**:<br>_record_: {Object} 该行所对应的数据<br>_index_: {Number} 该行所对应的序列<br>_e_: {Event} DOM事件对象                                                                                                                                                                                                                                                                                                                                                                                                                            | Function        | () => {} |
| onSort                | 点击列排序触发的事件<br><br>**签名**:<br>Function(dataIndex: String, order: String) => void<br>**参数**:<br>_dataIndex_: {String} 指定的排序的字段<br>_order_: {String} 排序对应的顺序, 有`desc`和`asc`两种                                                                                                                                                                                                                                                                                                                                                                                                                                             | Function        | () => {} |
| onFilter              | 点击过滤确认按钮触发的事件<br><br>**签名**:<br>Function(filterParams: Object) => void<br>**参数**:<br>_filterParams_: {Object} 过滤的字段信息                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Function        | () => {} |
| onResizeChange        | 重设列尺寸的时候触发的事件<br><br>**签名**:<br>Function(dataIndex: String, value: Number) => void<br>**参数**:<br>_dataIndex_: {String} 指定重设的字段<br>_value_: {Number} 列宽变动的数值                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Function        | () => {} |
| getRowProps           | 设置每一行的属性，如果返回值和其他针对行操作的属性冲突则无效。<br><br>**签名**:<br>Function(record: Object, index: Number) => Object<br>**参数**:<br>_record_: {Object} 该行所对应的数据<br>_index_: {Number} 该行所对应的序列<br>**返回值**:<br>{Object} 需要设置的行属性<br>                                                                                                                                                                                                                                                                                                                                                                                                       | Function        | () => {} |
| getCellProps          | 设置单元格的属性，通过该属性可以进行合并单元格<br><br>**签名**:<br>Function(rowIndex: Number, colIndex: Number, dataIndex: String, record: Object) => Object<br>**参数**:<br>_rowIndex_: {Number} 该行所对应的序列<br>_colIndex_: {Number} 该列所对应的序列<br>_dataIndex_: {String} 该列所对应的字段名称<br>_record_: {Object} 该行对应的记录<br>**返回值**:<br>{Object} 返回td元素的所支持的属性对象<br>                                                                                                                                                                                                                                                                                         | Function        | () => {} |
| hasBorder             | 表格是否具有边框                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Boolean         | true     |
| hasHeader             | 表格是否具有头部                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Boolean         | true     |
| isZebra               | 表格是否是斑马线                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Boolean         | false    |
| loading               | 表格是否在加载中                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Boolean         | false    |
| loadingComponent      | 自定义 Loading 组件<br>请务必传递 props, 使用方式： loadingComponent={props => &lt;Loading {...props}/>}<br><br>**签名**:<br>Function(props: Object) => void<br>**参数**:<br>_props_: {Object} 当前点击行的key                                                                                                                                                                                                                                                                                                                                                                                                                                  | Function        | -        |
| filterParams          | 当前过滤的的keys,使用此属性可以控制表格的头部的过滤选项中哪个菜单被选中,格式为 {dataIndex: {selectedKeys:\[]}}<br>示例:<br>假设要控制dataIndex为id的列的过滤菜单中key为one的菜单项选中<br>`<Table filterParams={{id: {selectedKeys: ['one']}}}/>`                                                                                                                                                                                                                                                                                                                                                                                                                                 | Object          | -        |
| sort                  | 当前排序的字段,使用此属性可以控制表格的字段的排序,格式为{dataIndex: 'asc'}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Object          | -        |
| emptyContent          | 设置数据为空的时候的表格内容展现                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ReactNode       | -        |
| primaryKey            | dataSource当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String          | 'id'     |
| expandedRowRender     | 额外渲染行的渲染函数<br><br>**签名**:<br>Function(record: Object, index: Number) => Element<br>**参数**:<br>_record_: {Object} 该行所对应的数据<br>_index_: {Number} 该行所对应的序列<br>**返回值**:<br>{Element} 渲染内容<br>                                                                                                                                                                                                                                                                                                                                                                                                                              | Function        | -        |
| expandedRowIndent     | 额外渲染行的缩进                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Array           | -        |
| openRowKeys           | 默认情况下展开的渲染行或者Tree, 传入此属性为受控状态                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Array           | -        |
| hasExpandedRowCtrl    | 是否显示点击展开额外渲染行的+号按钮                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Boolean         | -        |
| getExpandedColProps   | 设置额外渲染行的属性<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Function        | -        |
| onRowOpen             | 在额外渲染行或者Tree展开或者收起的时候触发的事件<br><br>**签名**:<br>Function(openRowKeys: Array, currentRowKey: String, expanded: Boolean, currentRecord: Object) => void<br>**参数**:<br>_openRowKeys_: {Array} 展开的渲染行的key<br>_currentRowKey_: {String} 当前点击的渲染行的key<br>_expanded_: {Boolean} 当前点击是展开还是收起<br>_currentRecord_: {Object} 当前点击额外渲染行的记录                                                                                                                                                                                                                                                                                            | Function        | -        |
| onExpandedRowClick    | 点击额外渲染行触发的事件<br><br>**签名**:<br>Function(record: Object, index: Number, e: Event) => void<br>**参数**:<br>_record_: {Object} 该行所对应的数据<br>_index_: {Number} 该行所对应的序列<br>_e_: {Event} DOM事件对象                                                                                                                                                                                                                                                                                                                                                                                                                               | Function        | -        |
| fixedHeader           | 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Boolean         | -        |
| maxBodyHeight         | 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Number/String   | -        |
| rowSelection          | 是否启用选择模式<br><br>**属性**:<br>_getProps_: {Function} `Function(record, index)=>Object` 获取selection的默认属性<br>_onChange_: {Function} `Function(selectedRowKeys:Array, records:Array)` 选择改变的时候触发的事件，**注意:** 其中records只会包含当前dataSource的数据，很可能会小于selectedRowKeys的长度。<br>_onSelect_: {Function} `Function(selected:Boolean, record:Object, records:Array)` 用户手动选择/取消选择某行的回调<br>_onSelectAll_: {Function} `Function(selected:Boolean, records:Array)` 用户手动选择/取消选择所有行的回调<br>_selectedRowKeys_: {Array} 设置了此属性,将rowSelection变为受控状态,接收值为该行数据的primaryKey的值<br>_mode_: {String} 选择selection的模式, 可选值为`single`, `multiple`，默认为`multiple` | Object          | -        |
| stickyHeader          | 表头是否是sticky                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Boolean         | -        |
| offsetTop             | 距离窗口顶部达到指定偏移量后触发                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Number          | -        |
| affixProps            | affix组件的的属性                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Object          | -        |
| indent                | 在tree模式下的缩进尺寸， 仅在isTree为true时候有效                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Number          | -        |
| isTree                | 开启Table的tree模式, 接收的数据格式中包含children则渲染成tree table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Boolean         | -        |
| useVirtual            | 是否开启虚拟滚动                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Boolean         | -        |
| rowHeight             | 设置行高                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Number/Function | -        |
| onBodyScroll          | 在内容区域滚动的时候触发的函数<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Function        | -        |
| expandedIndexSimulate | 开启时，getExpandedColProps() / getRowProps() / expandedRowRender() 的第二个参数 index (该行所对应的序列) 将按照01,2,3,4...的顺序返回，否则返回真实index(0,2,4,6... / 1,3,5,7...)                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Boolean         | false    |

### Table.Column

| 参数          | 说明                                                                                                  | 类型                              | 默认值            |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------------- | -------------- |
| dataIndex   | 指定列对应的字段，支持`a.b`形式的快速取值                                                                             | String                          | -              |
| cell        | 行渲染的逻辑<br>value, rowIndex, record, context四个属性只可读不可被更改<br>Function(value, index, record) => Element | ReactElement/ReactNode/Function | value => value |
| title       | 表头显示的内容<br>value, rowIndex, record, context四个属性只可读不可被更改                                             | ReactElement/ReactNode/Function | -              |
| sortable    | 是否支持排序                                                                                              | Boolean                         | -              |
| width       | 列宽，注意在锁列的情况下一定需要配置宽度                                                                                | Number/String                   | -              |
| align       | 单元格的对齐方式<br><br>**可选值**:<br>'left', 'center', 'right'                                               | Enum                            | -              |
| alignHeader | 单元格标题的对齐方式, 不配置默认读取align值<br><br>**可选值**:<br>'left', 'center', 'right'                              | Enum                            | -              |
| filters     | 生成标题过滤的菜单, 格式为`[{label:'xxx', value:'xxx'}]`                                                        | Array&lt;Object>                | -              |
| filterMode  | 过滤的模式是单选还是多选<br><br>**可选值**:<br>'single', 'multiple'                                                | Enum                            | 'multiple'     |
| lock        | 是否支持锁列,可选值为`left`,`right`, `true`                                                                   | Boolean/String                  | -              |
| resizable   | 是否支持列宽调整, 当该值设为true，table的布局方式会修改为fixed.                                                            | Boolean                         | false          |

### Table.ColumnGroup

| 参数    | 说明      | 类型                              | 默认值            |
| ----- | ------- | ------------------------------- | -------------- |
| title | 表头显示的内容 | ReactElement/ReactNode/Function | 'column-group' |

### Table.GroupHeader

| 参数                   | 说明                          | 类型                              | 默认值      |
| -------------------- | --------------------------- | ------------------------------- | -------- |
| cell                 | 行渲染的逻辑                      | ReactElement/ReactNode/Function | () => '' |
| hasChildrenSelection | 是否在Children上面渲染selection    | Boolean                         | false    |
| hasSelection         | 是否在GroupHeader上面渲染selection | Boolean                         | true     |

### Table.GroupFooter

| 参数   | 说明     | 类型                              | 默认值      |
| ---- | ------ | ------------------------------- | -------- |
| cell | 行渲染的逻辑 | ReactElement/ReactNode/Function | () => '' |
