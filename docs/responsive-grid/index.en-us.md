# ResponsiveGrid

-   category: Components
-   family: General
-   chinese: 栅格布局
-   type: Display

---

## Develop Guide

### When to Use
Css-grid

## API

### ResponsiveGrid

| Param | Descripiton  | Type  | Default Value |
| ------- | -------------------------------------------------------------------------------- | ----------------------- | --------- |
| columns | how many columns in total, 12 by default                                                                   | Number/String           | -         |
| gap     | gap among each cell [bottom&top, right&left]                                          | Array&lt;Number>/Number | -         |
| device  | device for responsive C<br><br>**options**:<br>'phone'(手机)<br>'tablet'(平板)<br>'desktop'(PC) | Enum                    | 'desktop' |

### ResponsiveGrid.Cell

| Param | Descripiton  | Type  | Default Value |
| ------------- | ------------------------------------------------------------------------------- | ------ | --------- |
| device        | device for responsive<br><br>**options**:<br>'phone'(手机)<br>'tablet'(平板)<br>'desktop'(PC) | Enum   | 'desktop' |
| colSpan       | in hoz, how many columns it takes                                                                         | Number | -         |
| tabletColSpan | in hoz, how many columns it takes in tablet                                                                    | Number | -         |
| phoneColSpan  | in hoz, how many columns it takes in phone                                                                   | Number | -         |
