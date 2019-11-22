# ResponsiveGrid

-   category: Components
-   family: General
-   chinese: 栅格布局
-   type: 展示

---

## 开发指南

### 何时使用

栅格布局，使用css-grid

## API

### ResponsiveGrid

| 参数      | 说明                                                                               | 类型                      | 默认值       |
| ------- | -------------------------------------------------------------------------------- | ----------------------- | --------- |
| columns | 分为几列， 默认是 12 列                                                                   | Number/String           | -         |
| gap     | 每个 cell 之间的间距， [bottom&top, right&left]                                          | Array&lt;Number>/Number | -         |
| device  | 设备，用来做自适应，默认为 PC<br><br>**可选值**:<br>'phone'(手机)<br>'tablet'(平板)<br>'desktop'(PC) | Enum                    | 'desktop' |

### ResponsiveGrid.Cell

| 参数            | 说明                                                                              | 类型     | 默认值       |
| ------------- | ------------------------------------------------------------------------------- | ------ | --------- |
| device        | 设备，用来做自适应，默认为PC<br><br>**可选值**:<br>'phone'(手机)<br>'tablet'(平板)<br>'desktop'(PC) | Enum   | 'desktop' |
| colSpan       | 横向，占据几列                                                                         | Number | -         |
| tabletColSpan | 横向，在平板下占据几列                                                                     | Number | -         |
| phoneColSpan  | 横向，在手机下占据几列                                                                     | Number | -         |
