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

| 参数             | 说明                                                                                                              | 类型                                                         | 默认值          | 是否必填 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------------- | -------- |
| type             | 分页组件类型                                                                                                      | 'normal' \| 'simple' \| 'mini'                               | 'normal'        |          |
| shape            | 前进后退按钮样式                                                                                                  | 'normal' \| 'arrow-only' \| 'arrow-prev-only' \| 'no-border' | 'normal'        |          |
| size             | 分页组件大小                                                                                                      | 'small' \| 'medium' \| 'large'                               | 'medium'        |          |
| current          | （受控）当前页码                                                                                                  | number                                                       | 1               |          |
| defaultCurrent   | （非受控）初始页码                                                                                                | number                                                       | 1               |          |
| onChange         | 页码发生改变时的回调函数                                                                                          | (current: number, e: object) => void                         | -               |          |
| total            | 总记录数                                                                                                          | number                                                       | 100             |          |
| totalRender      | 总数的渲染函数                                                                                                    | (total: number, range: number[]) => void                     | -               |          |
| pageShowCount    | 页码显示的数量，更多的使用...代替                                                                                 | number                                                       | 5               |          |
| pageSize         | 一页中的记录数                                                                                                    | number                                                       | 10              |          |
| pageSizeSelector | 每页显示选择器类型                                                                                                | false \| 'filter' \| 'dropdown'                              | false           |          |
| pageSizeList     | 每页显示选择器可选值                                                                                              | Array\<number> \| Array\<{ label: string; value: number }>   | [5, 10, 20]     |          |
| pageNumberRender | 自定义页码渲染函数，函数作用于页码button以及当前页/总页数的数字渲染                                               | (index: number) => ReactNode                                 | index =\> index |          |
| pageSizePosition | 每页显示选择器在组件中的位置                                                                                      | 'start' \| 'end'                                             | 'start'         |          |
| useFloatLayout   | 存在每页显示选择器时是否使用浮动布局                                                                              | boolean                                                      | false           |          |
| onPageSizeChange | 每页显示记录数量改变时的回调函数                                                                                  | (pageSize: number) => void                                   | -               |          |
| hideOnlyOnePage  | 当分页数为1时，是否隐藏分页器                                                                                     | boolean                                                      | false           |          |
| showJump         | type 设置为 normal 时，在页码数超过5页后，会显示跳转输入框与按钮，当设置 showJump 为 false 时，不再显示该跳转区域 | boolean                                                      | true            |          |
| link             | 设置页码按钮的跳转链接，它的值为一个包含 \{page\} 的模版字符串，如：http://www.taobao.com/\{page\}                | string                                                       | -               |          |
| popupProps       | 弹层组件属性，透传给Popup                                                                                         | PopupProps                                                   | -               |          |
| selectProps      | 页码选择器下拉组件属性，透传给Select                                                                              | SelectProps                                                  | -               |          |

## 无障碍键盘操作指南

| 按键  | 说明     |
| :---- | :------- |
| Tab   | 切换页数 |
| Space | 按下按钮 |
| Enter | 按下按钮 |
