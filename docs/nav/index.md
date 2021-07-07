# Nav

-   category: Components
-   family: Navigation
-   chinese: 导航
-   type: 导航
-   cols: 1

---

## 何时使用

分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 如何使用

Nav 继承自 Menu，除特殊说明外，可使用 Menu 的 API。

## API

### Nav

> 继承自 `Menu` 的能力请查看 `Menu` 文档

| 参数                  | 说明                                                                                                                                                                                                                                                                                                                                                                            | 类型            | 默认值                                                                   | 版本支持 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------- | ---- |
| children            | 导航项和子导航                                                                                                                                                                                                                                                                                                                                                                       | ReactNode     | -                                                                     |      |
| type                | 导航类型<br/><br/>**可选值**:<br/>'normal'(普通)<br/>'primary'(主要)<br/>'secondary'(次要)<br/>'line'(线形)                                                                                                                                                                                                                                                                                  | Enum          | 'normal'                                                              |      |
| direction           | 导航布局<br/><br/>**可选值**:<br/>'hoz'(水平)<br/>'ver'(垂直)                                                                                                                                                                                                                                                                                                                            | Enum          | 'ver'                                                                 |      |
| hozAlign            | 横向导航条 items 和 footer 的对齐方向，在 direction 设置为 'hoz' 并且 header 存在时生效<br/><br/>**可选值**:<br/>'left', 'right'                                                                                                                                                                                                                                                                        | Enum          | 'left'                                                                |      |
| activeDirection     | 设置组件选中状态的 active 边方向<br/><br/>**可选值**:<br/>null(无)<br/>'top'(上)<br/>'bottom'(下)<br/>'left'(左)<br/>'right'(右)                                                                                                                                                                                                                                                                  | Enum          | 当 direction 为 'hoz' 时，默认值为 'bottom'，当 direction 为 'ver' 时，默认值为 'left' |      |
| mode                | 子导航打开的模式（水平导航只支持弹出）<br/><br/>**可选值**:<br/>'inline', 'popup'                                                                                                                                                                                                                                                                                                                   | Enum          | 'inline'                                                              |      |
| triggerType         | 子导航打开的触发方式<br/><br/>**可选值**:<br/>'click', 'hover'                                                                                                                                                                                                                                                                                                                             | Enum          | 'click'                                                               |      |
| inlineIndent        | 内联子导航缩进距离                                                                                                                                                                                                                                                                                                                                                                     | Number        | 20                                                                    |      |
| defaultOpenAll      | 首次渲染展开所有的子导航，只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效                                                                                                                                                                                                                                                                                                              | Boolean       | false                                                                 |      |
| openMode            | 内联子导航的展开模式，同时可以展开一个同级子导航还是多个同级子导航，该属性仅在 mode 为 inline 时生效<br/><br/>**可选值**:<br/>'single', 'multiple'                                                                                                                                                                                                                                                                          | Enum          | 'multiple'                                                            |      |
| selectedKeys        | 当前选中导航项的 key 值                                                                                                                                                                                                                                                                                                                                                                | String/Array  | -                                                                     |      |
| defaultSelectedKeys | 初始选中导航项的 key 值                                                                                                                                                                                                                                                                                                                                                                | String/Array  | \[]                                                                   |      |
| onSelect            | 选中或取消选中导航项触发的回调函数<br/><br/>**签名**:<br/>Function(selectedKeys: Array, item: Object, extra: Object) => void<br/>**参数**:<br/>_selectedKeys_: {Array} 选中的所有导航项的 key<br/>_item_: {Object} 选中或取消选中的导航项<br/>_extra_: {Object} 额外参数<br/>_extra.select_: {Boolean} 是否是选中<br/>_extra.key_: {Array} 导航项的 key<br/>_extra.label_: {Object} 导航项的文本<br/>_extra.keyPath_: {Array} 导航项 key 的路径 | Function      | -                                                                     |      |
| popupAlign          | 弹出子导航的对齐方式（水平导航只支持 follow ）<br/><br/>**可选值**:<br/>'follow', 'outside'                                                                                                                                                                                                                                                                                                         | Enum          | 'follow'                                                              |      |
| popupClassName      | 弹出子导航的自定义类名                                                                                                                                                                                                                                                                                                                                                                   | String        | -                                                                     |      |
| iconOnly            | 是否只显示图标                                                                                                                                                                                                                                                                                                                                                                       | Boolean       | -                                                                     |      |
| iconOnlyWidth       | iconOnly 模式下的宽度（仅在 iconOnly=true 时生效） 如果传入了iconOnlyWidth，那么会隐藏文本，例如 Nav.Item 的 label                                                                                                                                                                                                                                                                                          | String/Number | -                                                                     |      |
| hasArrow            | 是否显示右侧的箭头（仅在 iconOnly=true 时生效）                                                                                                                                                                                                                                                                                                                                               | Boolean       | true                                                                  |      |
| hasTooltip          | 是否有 ToolTips （仅在 iconOnly=true 时生效）                                                                                                                                                                                                                                                                                                                                           | Boolean       | false                                                                 |      |
| header              | 自定义导航头部                                                                                                                                                                                                                                                                                                                                                                       | ReactNode     | -                                                                     |      |
| footer              | 自定义导航尾部                                                                                                                                                                                                                                                                                                                                                                       | ReactNode     | -                                                                     |      |
| embeddable          | 是否开启嵌入式模式，一般用于Layout的布局中，开启后没有默认背景、外层border、box-shadow，可以配合`<Nav style={{lineHeight: '100px'}}>` 自定义高度                                                                                                                                                                                                                                                                        | Boolean       | false                                                                 | 1.18 |

### Nav.Group

> 继承自 `Menu.Group` 的能力请查看 `Menu.Group` 文档

| 参数       | 说明      | 类型        | 默认值 |
| -------- | ------- | --------- | --- |
| label    | 标签内容    | ReactNode | -   |
| children | 导航项和子导航 | ReactNode | -   |

### Nav.Item

> 继承自 `Menu.Item` 的能力请查看 `Menu.Item` 文档

| 参数       | 说明                                                         | 类型               | 默认值 |
| -------- | ---------------------------------------------------------- | ---------------- | --- |
| icon     | 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />` | String/ReactNode | -   |
| children | 导航内容                                                       | ReactNode        | -   |

### Nav.PopupItem

> 继承自 `Menu.PopupItem` 的能力请查看 `Menu.PopupItem` 文档

| 参数       | 说明                                                          | 类型               | 默认值 |
| -------- | ----------------------------------------------------------- | ---------------- | --- |
| icon     | 自定义图标，可以使用 Icon 的 type, 也可以使用组件 `<Icon type="icon type" />` | String/ReactNode | -   |
| label    | 标签内容                                                        | ReactNode        | -   |
| children | 弹出内容                                                        | ReactNode        | -   |

### Nav.SubNav

> 继承自 `Menu.SubMenu` 的能力请查看 `Menu.SubMenu` 文档

| 参数         | 说明                                                         | 类型               | 默认值   |
| ---------- | ---------------------------------------------------------- | ---------------- | ----- |
| icon       | 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="your type" />` | String/ReactNode | -     |
| label      | 标签内容                                                       | ReactNode        | -     |
| selectable | 是否可选                                                       | Boolean          | false |
| children   | 导航项和子导航                                                    | ReactNode        | -     |
| noIcon     | 是否需要提示当前项可展开的 icon，默认是有的                                   | Boolean          | -     |

## 无障碍键盘操作指南

| 按键          | 说明                              |
| :---------- | :------------------------------ |
| Up Arrow    | 导航到上一项                          |
| Down Arrow  | 导航到下一项                          |
| Right Arrow | 打开子菜单，导航到子菜单第一项；横向菜单条第一层，导航到右一项 |
| Left Arrow  | 关闭子菜单，导航到父级菜单；横向菜单条第一层，导航到左一项   |
| Enter       | 打开子菜单，导航到子菜单第一项                 |
| Esc         | 关闭子菜单，导航到父级菜单                   |

## FAQ

### 菜单的数据是移步获取的，当我拿到数据之后，发现设置的 `defaultOpenKeys` 不生效，有什么解决办法？

原因：defaultXXX系列API遵循React的设计规范，仅在组件第一次渲染的时候生效，所以`defaultOpenKeys`仅仅对Menu在didMount阶段拿到的Children生效，异步获取的信息不在这个阶段内，所以不生效。

解决方法：假设菜单信息是异步获取后塞到 menuData 变量中的，可以设置 `{menuData && <Menu />}`。
