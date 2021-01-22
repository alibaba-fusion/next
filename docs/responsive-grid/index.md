# ResponsiveGrid

-   category: Components
-   family: General
-   chinese: 栅格布局
-   type: 展示
-   version: 1.19

---

栅格布局，使用`display: grid`，1.19.0+ 添加本组件，目前不支持IE。

## 如何使用

-   PC first，其他屏幕支持自适应，因此默认情况下 `device` 处于 `desktop` 模式，此时 `columns` 为12列；
-   更改 `device` 参数为 `tablet` 后 `columns` 为8列；
-   更改 `device` 参数为 `phone` 后 `columns` 为4列，同时 Cell会根据内置规则进行自适应调配。

## API

### ResponsiveGrid

| 参数        | 说明                                                                               | 类型                      | 默认值       |
| --------- | -------------------------------------------------------------------------------- | ----------------------- | --------- |
| device    | 设备，用来做自适应，默认为 PC<br><br>**可选值**:<br>'phone'(手机)<br>'tablet'(平板)<br>'desktop'(PC) | Enum                    | 'desktop' |
| columns   | 分为几列， 默认是 12 列                                                                   | Number/String           | -         |
| gap       | 每个 cell 之间的间距， [bottom&top, right&left]                                          | Array&lt;Number>/Number | -         |
| component | 设置标签类型                                                                           | custom                  | 'div'     |
| dense     | 是否开启紧密模式，开启后尽可能能紧密填满，尽量不出现空格                                                     | Boolean                 | false     |

### ResponsiveGrid.Cell

| 参数        | 说明      | 类型            | 默认值   |
| --------- | ------- | ------------- | ----- |
| colSpan   | 横向，占据几列 | Number/Object | -     |
| rowSpan   | 纵向，占据几行 | Number        | -     |
| component | 设置标签类型  | custom        | 'div' |
