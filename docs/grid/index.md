# Grid

-   category: Components
-   family: General
-   chinese: 栅格
-   type: 布局
-   cols: 1

---

## 开发指南

### 基本使用

此栅格系统提供了320，480，720, 990，1200，1500等几乎所有主流分辨率场景的响应规则。<br>
响应式栅格采用24列栅格体系和5分比实现，以满足2，3，4，5，6分比布局等多种情况。<br>
固定栅格采用 20px 宽度作为单位栅格， 推荐使用9，10，12，14，16，18，24，但同时也提供了从1到30的所有栅格，也可根据需求定制固定栅格列。<br>
响应式断点阈值为：xss(320px), xs(480px), s(720px), m(990px), l(1200px), xl(1500px)。<br />
基于Flex实现，对 IE9 通过 `display:table;` 兼容实现，但 IE9 仅支持基本的响应式布局（详情请参考 API 和 DEMO 的说明）。

### 无障碍

默认 `<Row>` 和 `<Col>` 会加上 `role="row"` 和 `role="gridcell"`, 但是为了完美的无障碍实现, 开发者还应该在外部容器加上 `role="grid"`。示例代码如下:

    <div role="grid">
        <Row><Col span={6}>1</Col><Col span={6}>2</Col><Col span={6}>3</Col><Col span={6}>4</Col></Row>
        <Row><Col span={6} offset={6}>1</Col><Col span={6} offset={6}>2</Col></Row>
    </div>

## API

### Grid.Row

| 参数         | 说明                                                                                                                                                                       | 类型                   | 默认值   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- | ----- |
| children   | 行内容                                                                                                                                                                      | ReactNode            | -     |
| gutter     | 列间隔                                                                                                                                                                      | String/Number        | 0     |
| wrap       | 列在行中宽度溢出后是否换行                                                                                                                                                            | Boolean              | false |
| fixed      | 行在某一断点下宽度是否保持不变（默认行宽度随视口变化而变化）                                                                                                                                           | Boolean              | false |
| fixedWidth | 固定行的宽度为某一断点的宽度，不受视口影响而变动<br><br>**可选值**:<br>'xxs'(320px)<br>'xs'(480px)<br>'s'(720px)<br>'m'(990px)<br>'l'(1200px)<br>'xl'(1500px)                                       | Enum                 | -     |
| align      | （不支持IE9浏览器）多列垂直方向对齐方式<br><br>**可选值**:<br>'top'(顶部对齐)<br>'center'(居中对齐)<br>'bottom'(底部对齐)<br>'baseline'(按第一行文字基线对齐)<br>'stretch'(未设置高度或设为 auto，将占满整个容器的高度)                | Enum                 | -     |
| justify    | （不支持IE9浏览器）行内具有多余空间时的布局方式<br><br>**可选值**:<br>'start'(左对齐)<br>'center'(居中对齐)<br>'end'(右对齐)<br>'space-between'(两端对齐，列之间间距相等)<br>'space-around'(每列具有相同的左右间距，行两端间距是列间距的二分之一) | Enum                 | -     |
| hidden     | 行在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl']\(在 xxs, xs, s, m, l, xl 断点下隐藏）              | Boolean/String/Array | -     |
| component  | 指定以何种元素渲染该节点<br>- 默认为 'div'                                                                                                                                              | String/Function      | 'div' |

### Grid.Col

| 参数          | 说明                                                                                                                                                          | 类型                   | 默认值   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ----- |
| children    | 列内容                                                                                                                                                         | ReactNode            | -     |
| span        | 列宽度<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24                                                                                                             | String/Number        | -     |
| fixedSpan   | 固定列宽度，宽度值为20 \* 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30                                                                                             | String/Number        | -     |
| offset      | （不支持IE9浏览器）列偏移<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24                                                                                                  | String/Number        | -     |
| fixedOffset | （不支持IE9浏览器）固定列偏移，宽度值为20 \* 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30                                                                                  | String/Number        | -     |
| align       | （不支持IE9浏览器）多列垂直方向对齐方式，可覆盖Row的align属性<br><br>**可选值**:<br>'top', 'center', 'bottom', 'baseline', 'stretch'                                                    | Enum                 | -     |
| hidden      | 列在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl']\(在 xxs, xs, s, m, l, xl 断点下隐藏） | Boolean/String/Array | -     |
| xxs         | >=320px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象                                                                                                     | String/Number/Object | -     |
| xs          | >=480px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象                                                                                                     | String/Number/Object | -     |
| s           | >=720px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象                                                                                                     | String/Number/Object | -     |
| m           | >=990px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象                                                                                                     | String/Number/Object | -     |
| l           | >=1200px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象                                                                                                    | String/Number/Object | -     |
| xl          | >=1500px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象                                                                                                    | String/Number/Object | -     |
| component   | 指定以何种元素渲染该节点，默认为 'div'                                                                                                                                      | String/Function      | 'div' |
