# Grid

-   category: Components
-   family: General
-   chinese: 栅格
-   type: 布局
-   cols: 1

---

## Guide

### Basic Usage

This grid system provides response rules for almost all mainstream resolution scenes such as 320, 480, 720, 990, 1200, and 1500. The responsive grids are implemented using a 24-column and a 5-point to meet 2, 3, 4, 5, and 6 ratio layouts. The fixed grid uses a 20px width as the unit, it is recommended to use 9, 10, 12, 14, 16, 18, 24, but all from 1 to 30 are also available. You can also customize the fixed grid columns according to your requirements. The breakpoint are: xss(320px), xs(480px), s(720px), m(990px), l(1200px), xl(1500px). Based on the Flex implementation, IE9 is compatible with `display:table;`, but IE9 only supports basic responsive layouts (see API and DEMO for details).

### Accessibility

Though we have build-in support of a11y by adding `<Row>` and `<Col>` with `role="row"` and `role="gridcell"` respectively, in order to achieve more a11y compliance, developers are also expected to add `role="grid"` in the outer wrapper element, as this:

```
<div role="grid">
    <Row><Col span={6}>1</Col><Col span={6}>2</Col><Col span={6}>3</Col><Col span={6}>4</Col></Row>
    <Row><Col span={6} offset={6}>1</Col><Col span={6} offset={6}>2</Col></Row>
</div>
```

## API

### Grid

### Row

| Param      | Description                                                                                               | Type                                                              | Default Value | Required |
| ---------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------- | -------- |
| children   | Row content                                                                                               | React.ReactNode                                                   | -             |          |
| gutter     | Column spacing                                                                                            | string \| number                                                  | 0             |          |
| wrap       | Whether to wrap when the column width overflows in the row                                                | boolean                                                           | false         |          |
| fixed      | Whether the row width remains unchanged at a breakpoint (the default row width changes with the viewport) | boolean                                                           | false         |          |
| fixedWidth | The width of the fixed row is the width of a breakpoint, which is not affected by the viewport            | BreakPoints                                                       | -             |          |
| align      | (IE9 browser is not supported) Multi                                                                      | 'top' \| 'center' \| 'bottom' \| 'baseline' \| 'stretch'          | -             |          |
| justify    | (IE9 browser is not supported) Layout method when there is extra space in the row                         | 'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around' | -             |          |
| hidden     | Display and hide the row at different breakpoints                                                         | boolean \| string \| Array\<BreakPoints>                          | -             |          |
| component  | Specifies the element with which to render the node                                                       | string \| FunctionComponent\<unknown> \| ComponentClass\<unknown> | 'div'         |          |

### Row.Col

| Param       | Description                                                                                                                                      | Type                                                     | Default Value | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------- | -------- |
| children    | Column content                                                                                                                                   | React.ReactNode                                          | -             |          |
| span        | Column width                                                                                                                                     | string \| number                                         | -             |          |
| fixedSpan   | Fixed column width                                                                                                                               | string \| number                                         | -             |          |
| offset      | (IE9 browser is not supported) Column offset                                                                                                     | string \| number                                         | -             |          |
| fixedOffset | (IE9 browser is not supported) Fixed column offset, width value is 20 \* grid number\<br\>\<br\>**Optional values**:<br>1, 2, 3, ..., 28, 29, 30 | string \| number                                         | -             |          |
| align       | (IE9 browser is not supported) Multi                                                                                                             | 'top' \| 'center' \| 'bottom' \| 'baseline' \| 'stretch' | -             |          |
| hidden      | Display and hide the column at different breakpoints                                                                                             | boolean \| string \| Array\<BreakPoints>                 | -             |          |
| xxs         | \>=320px, responsive grid                                                                                                                        | string \| number \| PointProps                           | -             |          |
| xs          | \>=480px, responsive grid                                                                                                                        | string \| number \| PointProps                           | -             |          |
| s           | \>=720px, responsive grid                                                                                                                        | string \| number \| PointProps                           | -             |          |
| m           | \>=990px, responsive grid                                                                                                                        | string \| number \| PointProps                           | -             |          |
| l           | \>=1200px, responsive grid                                                                                                                       | string \| number \| PointProps                           | -             |          |
| xl          | \>=1500px, responsive grid                                                                                                                       | string \| number \| PointProps                           | -             |          |
| component   | Specifies the element with which to render the node, default is 'div'                                                                            | Ele \| (() => Ele) \| string                             | 'div'         |          |
