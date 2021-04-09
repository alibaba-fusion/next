# Menu

-   category: Components
-   family: DataDisplay
-   chinese: 菜单
-   type: 展示

---

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## API

### Menu

| 参数                  | 说明                                                                                                                                                                                                                                                                                                                                                              | 类型              | 默认值        | 版本支持 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------- | ---- |
| children            | 菜单项和子菜单                                                                                                                                                                                                                                                                                                                                                         | ReactNode       | -          |      |
| onItemClick         | 点击菜单项触发的回调函数<br><br>**签名**:<br>Function(key: String, item: Object, event: Object) => void<br>**参数**:<br>_key_: {String} 点击的菜单项的 key 值<br>_item_: {Object} 点击的菜单项对象<br>_event_: {Object} 点击的事件对象                                                                                                                                                                 | Function        | () => {}   |      |
| openKeys            | 当前打开的子菜单的 key 值                                                                                                                                                                                                                                                                                                                                                 | String/Array    | -          |      |
| defaultOpenKeys     | 初始打开的子菜单的 key 值                                                                                                                                                                                                                                                                                                                                                 | String/Array    | \[]        |      |
| defaultOpenAll      | 初始展开所有的子菜单，只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效，优先级高于 defaultOpenKeys                                                                                                                                                                                                                                                                            | Boolean         | false      |      |
| onOpen              | 打开或关闭子菜单触发的回调函数<br><br>**签名**:<br>Function(key: Array, extra: Object) => void<br>**参数**:<br>_key_: {Array} 打开的所有子菜单的 key 值<br>_extra_: {Object} 额外参数<br>_extra.key_: {String} 当前操作子菜单的 key 值<br>_extra.open_: {Boolean} 是否是打开                                                                                                                                   | Function        | () => {}   |      |
| mode                | 子菜单打开的模式<br><br>**可选值**:<br>'inline', 'popup'                                                                                                                                                                                                                                                                                                                   | Enum            | 'inline'   |      |
| triggerType         | 子菜单打开的触发行为<br><br>**可选值**:<br>'click', 'hover'                                                                                                                                                                                                                                                                                                                  | Enum            | 'click'    |      |
| openMode            | 展开内连子菜单的模式，同时可以展开一个子菜单还是多个子菜单，该属性仅在 mode 为 inline 时生效<br><br>**可选值**:<br>'single', 'multiple'                                                                                                                                                                                                                                                                   | Enum            | 'multiple' |      |
| inlineIndent        | 内连子菜单缩进距离                                                                                                                                                                                                                                                                                                                                                       | Number          | 20         |      |
| popupAutoWidth      | 是否自动让弹层的宽度和菜单项保持一致，如果弹层的宽度比菜单项小则和菜单项保持一致，如果宽度大于菜单项则不做处理                                                                                                                                                                                                                                                                                                         | Boolean         | false      |      |
| popupAlign          | 弹层的对齐方式<br><br>**可选值**:<br>'follow', 'outside'                                                                                                                                                                                                                                                                                                                  | Enum            | 'follow'   |      |
| popupProps          | 弹层自定义 props                                                                                                                                                                                                                                                                                                                                                     | Object/Function | {}         |      |
| popupClassName      | 弹出子菜单自定义 className                                                                                                                                                                                                                                                                                                                                              | String          | -          |      |
| popupStyle          | 弹出子菜单自定义 style                                                                                                                                                                                                                                                                                                                                                  | Object          | -          |      |
| selectedKeys        | 当前选中菜单项的 key 值                                                                                                                                                                                                                                                                                                                                                  | String/Array    | -          |      |
| defaultSelectedKeys | 初始选中菜单项的 key 值                                                                                                                                                                                                                                                                                                                                                  | String/Array    | \[]        |      |
| onSelect            | 选中或取消选中菜单项触发的回调函数<br><br>**签名**:<br>Function(selectedKeys: Array, item: Object, extra: Object) => void<br>**参数**:<br>_selectedKeys_: {Array} 选中的所有菜单项的值<br>_item_: {Object} 选中或取消选中的菜单项<br>_extra_: {Object} 额外参数<br>_extra.select_: {Boolean} 是否是选中<br>_extra.key_: {Array} 菜单项的 key<br>_extra.label_: {Object} 菜单项的文本<br>_extra.keyPath_: {Array} 菜单项 key 的路径 | Function        | () => {}   |      |
| selectMode          | 选中模式，单选还是多选，默认无值，不可选<br><br>**可选值**:<br>'single', 'multiple'                                                                                                                                                                                                                                                                                                    | Enum            | -          |      |
| shallowSelect       | 是否只能选择第一层菜单项（不能选择子菜单中的菜单项）                                                                                                                                                                                                                                                                                                                                      | Boolean         | false      |      |
| hasSelectedIcon     | 是否显示选中图标，如果设置为 false 需配合配置平台设置选中时的背景色以示区分                                                                                                                                                                                                                                                                                                                       | Boolean         | true       |      |
| isSelectIconRight   | 是否将选中图标居右，仅当 hasSelectedIcon 为true 时生效。<br>注意：SubMenu 上的选中图标一直居左，不受此API控制                                                                                                                                                                                                                                                                                       | Boolean         | false      |      |
| direction           | 菜单第一层展示方向<br><br>**可选值**:<br>'ver', 'hoz'                                                                                                                                                                                                                                                                                                                       | Enum            | 'ver'      |      |
| hozAlign            | 横向菜单条 item 和 footer 的对齐方向，在 direction 设置为 'hoz' 并且 header 存在时生效<br><br>**可选值**:<br>'left', 'right'                                                                                                                                                                                                                                                              | Enum            | 'left'     |      |
| hozInLine           | 横向菜单模式下，是否维持在一行，即超出一行折叠成 SubMenu 显示， 仅在 direction='hoz' mode='popup' 时生效                                                                                                                                                                                                                                                                                        | Boolean         | false      |      |
| header              | 自定义菜单头部                                                                                                                                                                                                                                                                                                                                                         | ReactNode       | -          |      |
| footer              | 自定义菜单尾部                                                                                                                                                                                                                                                                                                                                                         | ReactNode       | -          |      |
| autoFocus           | 是否自动获得焦点                                                                                                                                                                                                                                                                                                                                                        | Boolean         | false      |      |
| focusedKey          | 当前获得焦点的子菜单或菜单项 key 值                                                                                                                                                                                                                                                                                                                                            | String          | -          |      |
| embeddable          | 是否开启嵌入式模式，一般用于Layout的布局中，开启后没有默认背景、外层border、box-shadow，可以配合`<Menu style={{lineHeight: '100px'}}>` 自定义高度                                                                                                                                                                                                                                                         | Boolean         | false      | 1.18 |
| icons               | 可配置的icons，包括 select 等                                                                                                                                                                                                                                                                                                                                           | Object          | {}         |      |

### Menu.Item

| 参数       | 说明      | 类型        | 默认值   |
| -------- | ------- | --------- | ----- |
| disabled | 是否禁用    | Boolean   | false |
| helper   | 帮助文本    | ReactNode | -     |
| children | 菜单项标签内容 | ReactNode | -     |

### Menu.SubMenu

| 参数         | 说明                                                               | 类型        | 默认值             |
| ---------- | ---------------------------------------------------------------- | --------- | --------------- |
| label      | 标签内容                                                             | ReactNode | -               |
| selectable | 是否可选，该属性仅在设置 Menu 组件 selectMode 属性后生效                            | Boolean   | false           |
| mode       | 子菜单打开方式，如果设置会覆盖 Menu 上的同名属性<br><br>**可选值**:<br>'inline', 'popup' | Enum      | Menu 的 mode 属性值 |
| noIcon     | 是否需要提示当前项可展开的 icon，默认是有的                                         | Boolean   | false           |
| children   | 菜单项或下一级子菜单                                                       | ReactNode | -               |

### Menu.PopupItem

| 参数          | 说明                                             | 类型        | 默认值 |
| ----------- | ---------------------------------------------- | --------- | --- |
| label       | 标签内容                                           | ReactNode | -   |
| children    | 自定义弹层内容                                        | ReactNode | -   |
| triggerType | 子菜单打开的触发行为<br><br>**可选值**:<br>'click', 'hover' | Enum      | -   |

### Menu.CheckboxItem

> 该子组件选中情况不受 defaultSelectedKeys/selectedKeys 控制，请自行控制选中逻辑

| 参数            | 说明                                                                                                                                                     | 类型        | 默认值      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------- |
| checked       | 是否选中                                                                                                                                                   | Boolean   | false    |
| indeterminate | 是否半选中                                                                                                                                                  | Boolean   | false    |
| disabled      | 是否禁用                                                                                                                                                   | Boolean   | false    |
| onChange      | 选中或取消选中触发的回调函数<br><br>**签名**:<br>Function(checked: Boolean, event: Object) => void<br>**参数**:<br>_checked_: {Boolean} 是否选中<br>_event_: {Object} 选中事件对象 | Function  | () => {} |
| helper        | 帮助文本                                                                                                                                                   | ReactNode | -        |
| children      | 标签内容                                                                                                                                                   | ReactNode | -        |

### Menu.RadioItem

> 该子组件选中情况不受 defaultSelectedKeys/selectedKeys 控制，请自行控制选中逻辑

| 参数       | 说明                                                                                                                                                     | 类型        | 默认值      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------- |
| checked  | 是否选中                                                                                                                                                   | Boolean   | false    |
| disabled | 是否禁用                                                                                                                                                   | Boolean   | false    |
| onChange | 选中或取消选中触发的回调函数<br><br>**签名**:<br>Function(checked: Boolean, event: Object) => void<br>**参数**:<br>_checked_: {Boolean} 是否选中<br>_event_: {Object} 选中事件对象 | Function  | () => {} |
| helper   | 帮助文本                                                                                                                                                   | ReactNode | -        |
| children | 标签内容                                                                                                                                                   | ReactNode | -        |

### Menu.Group

| 参数       | 说明   | 类型        | 默认值 |
| -------- | ---- | --------- | --- |
| label    | 标签内容 | ReactNode | -   |
| children | 菜单项  | ReactNode | -   |

### Menu.Divider

<!-- api-extra-start -->

### Menu.create(props)

创建上下文菜单。

-   props 参数可传入 Menu 所有支持的 props
-   props 额外支持 overlayProps，用来自定义 Menu 所在的弹层

<!-- api-extra-end -->

## 无障碍键盘操作指南

| 按键          | 说明                              |
| :---------- | :------------------------------ |
| Up Arrow    | 导航到上一项                          |
| Down Arrow  | 导航到下一项                          |
| Right Arrow | 打开子菜单，导航到子菜单第一项；横向菜单条第一层，导航到右一项 |
| Left Arrow  | 关闭子菜单，导航到父级菜单；横向菜单条第一层，导航都左一项   |
| Enter       | 打开子菜单，导航到子菜单第一项                 |
| Esc         | 关闭子菜单，导航到父级菜单                   |
| SPACE       | 切换选中状态                          |
