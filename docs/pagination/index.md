# Pagination

-   category: Components
-   family: Navigation
-   chinese: 翻页器
-   cols: 1
-   type: 导航

---
分页器组件。

## 何时使用

在有大量内容展现需要进行分页加载处理的时候。

## API

### Pagination

| 参数               | 说明                                                                                                                                                                            | 类型                                | 默认值            |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | -------------- |
| size             | 分页组件大小<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                                                          | Enum                              | 'medium'       |
| type             | 分页组件类型<br><br>**可选值**:<br>'normal', 'simple', 'mini'                                                                                                                          | Enum                              | 'normal'       |
| shape            | 前进后退按钮样式<br><br>**可选值**:<br>'normal', 'arrow-only', 'arrow-prev-only', 'no-border'                                                                                            | Enum                              | 'normal'       |
| current          | （受控）当前页码                                                                                                                                                                      | Number                            | -              |
| defaultCurrent   | （非受控）初始页码                                                                                                                                                                     | Number                            | 1              |
| onChange         | 页码发生改变时的回调函数<br><br>**签名**:<br>Function(current: Number, e: Object) => void<br>**参数**:<br>_current_: {Number} 改变后的页码数<br>_e_: {Object} 点击事件对象                                 | Function                          | () => {}       |
| total            | 总记录数                                                                                                                                                                          | Number                            | 100            |
| totalRender      | 总数的渲染函数<br><br>**签名**:<br>Function(total: Number, range: Array) => void<br>**参数**:<br>_total_: {Number} 总数<br>_range_: {Array} 当前数据在总数中的区间                                    | Function                          | -              |
| pageShowCount    | 页码显示的数量，更多的使用...代替                                                                                                                                                            | Number                            | 5              |
| pageSize         | 一页中的记录数                                                                                                                                                                       | Number                            | 10             |
| pageSizeSelector | 每页显示选择器类型<br><br>**可选值**:<br>false, 'filter', 'dropdown'                                                                                                                      | Enum                              | false          |
| pageSizeList     | 每页显示选择器可选值                                                                                                                                                                    | Array&lt;Number>/Array&lt;Object> | [5, 10, 20]    |
| pageNumberRender | 自定义页码渲染函数，函数作用于页码button以及当前页/总页数的数字渲染<br><br>**签名**:<br>Function(index: Number) => ReactNode<br>**参数**:<br>_index_: {Number} 分页的页码，从1开始<br>**返回值**:<br>{ReactNode} 返回渲染结果<br> | Function                          | index => index |
| pageSizePosition | 每页显示选择器在组件中的位置<br><br>**可选值**:<br>'start', 'end'                                                                                                                              | Enum                              | 'start'        |
| useFloatLayout   | 存在每页显示选择器时是否使用浮动布局                                                                                                                                                            | Boolean                           | false          |
| onPageSizeChange | 每页显示记录数量改变时的回调函数<br><br>**签名**:<br>Function(pageSize: Number) => void<br>**参数**:<br>_pageSize_: {Number} 改变后的每页显示记录数                                                          | Function                          | () => {}       |
| hideOnlyOnePage  | 当分页数为1时，是否隐藏分页器                                                                                                                                                               | Boolean                           | false          |
| showJump         | type 设置为 normal 时，在页码数超过5页后，会显示跳转输入框与按钮，当设置 showJump 为 false 时，不再显示该跳转区域                                                                                                      | Boolean                           | true           |
| link             | 设置页码按钮的跳转链接，它的值为一个包含 {page} 的模版字符串，如：<https://www.taobao.com/{page}>                                                                                                          | String                            | -              |
| popupProps       | 弹层组件属性，透传给Popup                                                                                                                                                               | Object                            | -              |

## 无障碍键盘操作指南

| 按键    | 说明   |
| :---- | :--- |
| Tab   | 切换页数 |
| Space | 按下按钮 |
| Enter | 按下按钮 |
