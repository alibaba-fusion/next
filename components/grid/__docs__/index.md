# Grid

-   category: Components
-   family: General
-   chinese: 栅格
-   type: 布局
-   cols: 1

---

栅格组件。

## 如何使用

-   此栅格系统提供了320，480，720, 990，1200，1500等几乎所有主流分辨率场景的响应规则。
-   响应式栅格采用24列栅格体系和5分比实现，以满足2，3，4，5，6分比布局等多种情况。
-   固定栅格采用 20px 宽度作为单位栅格， 推荐使用9，10，12，14，16，18，24，但同时也提供了从1到30的所有栅格，也可根据需求定制固定栅格列。
-   响应式断点阈值为：xss(320px), xs(480px), s(720px), m(990px), l(1200px), xl(1500px)。
-   基于Flex实现，对 IE9 通过 `display:table;` 兼容实现，但 IE9 仅支持基本的响应式布局（详情请参考 API 和 DEMO 的说明）。

## API

### Grid

### Row

| 参数       | 说明                                                         | 类型                                                              | 默认值 | 是否必填 |
| ---------- | ------------------------------------------------------------ | ----------------------------------------------------------------- | ------ | -------- |
| children   | 行内容                                                       | React.ReactNode                                                   | -      |          |
| gutter     | 列间隔                                                       | string \| number                                                  | 0      |          |
| wrap       | 列在行中宽度溢出后是否换行                                   | boolean                                                           | false  |          |
| fixed      | 行在某一断点下宽度是否保持不变（默认行宽度随视口变化而变化） | boolean                                                           | false  |          |
| fixedWidth | 固定行的宽度为某一断点的宽度，不受视口影响而变动             | BreakPoints                                                       | -      |          |
| align      | （不支持IE9浏览器）多列垂直方向对齐方式                      | 'top' \| 'center' \| 'bottom' \| 'baseline' \| 'stretch'          | -      |          |
| justify    | （不支持IE9浏览器）行内具有多余空间时的布局方式              | 'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around' | -      |          |
| hidden     | 行在不同断点下的显示与隐藏                                   | boolean \| string \| Array\<BreakPoints>                          | -      |          |
| component  | 指定以何种元素渲染该节点                                     | string \| FunctionComponent\<unknown> \| ComponentClass\<unknown> | 'div'  |          |

### Row.Col

| 参数        | 说明                                                                                                     | 类型                                                     | 默认值 | 是否必填 |
| ----------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------ | -------- |
| children    | 列内容                                                                                                   | React.ReactNode                                          | -      |          |
| span        | 列宽度                                                                                                   | string \| number                                         | -      |          |
| fixedSpan   | 固定列宽度                                                                                               | string \| number                                         | -      |          |
| offset      | （不支持IE9浏览器）列偏移                                                                                | string \| number                                         | -      |          |
| fixedOffset | （不支持IE9浏览器）固定列偏移，宽度值为20 \* 栅格数\<br\>\<br\>**可选值**:\<br\>1, 2, 3, ..., 28, 29, 30 | string \| number                                         | -      |          |
| align       | （不支持IE9浏览器）多列垂直方向对齐方式，可覆盖Row的align属性                                            | 'top' \| 'center' \| 'bottom' \| 'baseline' \| 'stretch' | -      |          |
| hidden      | 列在不同断点下的显示与隐藏                                                                               | boolean \| string \| Array\<BreakPoints>                 | -      |          |
| xxs         | \>=320px，响应式栅格                                                                                     | string \| number \| PointProps                           | -      |          |
| xs          | \>=480px，响应式栅格                                                                                     | string \| number \| PointProps                           | -      |          |
| s           | \>=720px，响应式栅格                                                                                     | string \| number \| PointProps                           | -      |          |
| m           | \>=990px，响应式栅格                                                                                     | string \| number \| PointProps                           | -      |          |
| l           | \>=1200px，响应式栅格                                                                                    | string \| number \| PointProps                           | -      |          |
| xl          | \>=1500px，响应式栅格                                                                                    | string \| number \| PointProps                           | -      |          |
| component   | 指定以何种元素渲染该节点，默认为 'div'                                                                   | Ele \| (() => Ele) \| string                             | 'div'  |          |
