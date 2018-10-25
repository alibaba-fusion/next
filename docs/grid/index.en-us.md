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

## API

### Grid.Row

| Param | Descripiton  | Type  | Default Value |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| children   | content of the row                                                                                                                                                                         | ReactNode     | -         |
| gutter     | spacing of the columns                                                                                                                                                                       | String/Number | 0         |
| wrap       | whether the row is wrap while width overflow                                                                                                                                                             | Boolean       | false     |
| fixed      | whether the width of the row stays the same under a certain breakpoint (the default row width varies depending on the viewport)                                                                                                                                              | Boolean       | false     |
| fixedWidth | the width of the fixed row is the width of a certain breakpoint and it is not affected by the viewport.<br><br>**option**:<br>'xxs'(320px)<br>'xs'(480px)<br>'s'(720px)<br>'m'(990px)<br>'l'(1200px)<br>'xl'(1500px)                                          | Enum          | -         |
| align      | (IE9 is not supported) vertical alignment of columns<br><br>**option**:<br>'top'<br>'center'<br>'bottom'<br>'baseline'<br>'stretch'                | Enum          | 'stretch' |
| justify    | (IE9 is not supported) horizontal alignment of columns<br><br>**option**:<br>'start'<br>'center'<br>'end'<br>'space-between'<br>'space-around' | Enum          | 'start'   |
| hidden      | whether display or hide the row under different breakpoints.<br><br>**option**:<br>true(always hide)<br>false(always display)<br>'xs'(hide under xs breakpoint）<br>['xxs', 'xs', 's', 'm', 'l', 'xl']\(hide under xxs, xs, s, m, l, xl breakpoint） | Boolean/String/Array | -   |

### Grid.Col

| Param | Descripiton  | Type  | Default Value |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | --- |
| children    | content of the column                                                                                                                                                         | ReactNode            | -   |
| span        | width of the column<br><br>**option**:<br>1, 2, 3, ..., 22, 23, 24                                                                                                             | String/Number        | -   |
| fixedSpan   | width of the fixed column, the unit width is 20px<br><br>**option**:<br>1, 2, 3, ..., 28, 29, 30                                                                                             | String/Number        | -   |
| offset      | (IE9 is not supported) the offset of the column<br><br>**option**:<br>1, 2, 3, ..., 22, 23, 24                                                                                               | String/Number        | -   |
| fixedOffset | (IE9 is not supported) the fixed offset of the column, the unit width is 20px<br><br>**option**:<br>1, 2, 3, ..., 28, 29, 30                                                                               | String/Number        | -   |
| align       | (IE9 is not supported) vertical alignment of columns, it can override the Row's align property<br><br>**option**:<br>'top', 'center', 'bottom', 'baseline', 'stretch'                                                 | Enum                 | -   |
| hidden      | whether display or hide the column under different breakpoints.<br><br>**option**:<br>true(always hide)<br>false(always display)<br>'xs'(hide under xs breakpoint）<br>['xxs', 'xs', 's', 'm', 'l', 'xl']\(hide under xxs, xs, s, m, l, xl breakpoint） | Boolean/String/Array | -   |
| xxs         | >=320px, responsive grid, it can be a span string or an object with span and offset property                                                                                                  | String/Number/Object | -   |
| xs          | >=480px, responsive grid, it can be a span string or an object with span and offset property                                                                                                     | String/Number/Object | -   |
| s           | >=720px, responsive grid, it can be a span string or an object with span and offset property                                                                                                     | String/Number/Object | -   |
| m           | >=990px, responsive grid, it can be a span string or an object with span and offset property                                                                                                     | String/Number/Object | -   |
| l           | >=1200px, responsive grid, it can be a span string or an object with span and offset property                                                                                                    | String/Number/Object | -   |
| xl          | >=1500px, responsive grid, it can be a span string or an object with span and offset property                                                                                                    | String/Number/Object | -   |
| component   | render node 'div' | String | 'div' |
