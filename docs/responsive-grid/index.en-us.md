# ResponsiveGrid

-   category: Components
-   family: General
-   chinese: 栅格布局
-   type: Display

---

## Develop Guide

### When to Use
Css-grid, added in 1.19.0+

## API

### ResponsiveGrid

| Param | Descripiton  | Type  | Default Value |
| ------- | -------------------------------------------------------------------------------- | ----------------------- | --------- |
| device  | device for responsive C<br><br>**options**:<br>'phone'(手机)<br>'tablet'(平板)<br>'desktop'(PC) | Enum                    | 'desktop' |
| columns | how many columns in total, 12 by default                                                                   | Number/String           | -         |
| gap     | gap among each cell [bottom&top, right&left]                                          | Array&lt;Number>/Number | -         |
| component | The html tag to be rendered | custom | 'div' |
| dense     | Fill as closely as possible without spaces                                                     | Boolean                 | false     |

### ResponsiveGrid.Cell

| Param | Descripiton  | Type  | Default Value |
| ------------- | ------------------------------------------------------------------------------- | ------ | --------- |
| colSpan       | in hoz, how many columns it takes                                         | Number/Object | -         |
| rowSpan       | in ver, how many rows it takes                                                                       | Number        | -         |
| component | The html tag to be rendered | custom | 'div' |

