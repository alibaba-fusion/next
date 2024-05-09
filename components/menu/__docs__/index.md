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

| 参数                   | 说明                                                                                                                                                                          | 类型                                                                                                                   | 默认值     | 是否必填 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------- | -------- |
| children               | 菜单项和子菜单                                                                                                                                                                | React.ReactNode                                                                                                        | -          |          |
| openKeys               | 当前打开的子菜单的 key 值（受控）                                                                                                                                             | string \| string[]                                                                                                     | -          |          |
| defaultOpenKeys        | 初始打开的子菜单的 key 值（非受控）                                                                                                                                           | string \| string[]                                                                                                     | []         |          |
| defaultOpenAll         | 初始展开所有的子菜单，只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效，优先级高于 defaultOpenKeys                                                            | boolean                                                                                                                | false      |          |
| onOpen                 | 打开或关闭子菜单触发的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_keys_: 打开的所有子菜单的 key 值<br/>_extra_: 当前被操作子菜单的信息                                     | (keys: string[], extra: { key: string; open: boolean }) => void                                                        | -          |          |
| mode                   | 子菜单打开的模式                                                                                                                                                              | Mode                                                                                                                   | 'inline'   |          |
| triggerType            | 子菜单打开的触发行为                                                                                                                                                          | 'click' \| 'hover'                                                                                                     | 'click'    |          |
| openMode               | 展开内连子菜单的模式，同时可以展开一个子菜单还是多个子菜单，该属性仅在 mode 为 inline 时生效                                                                                  | 'single' \| 'multiple'                                                                                                 | 'multiple' |          |
| inlineIndent           | 内连子菜单缩进距离                                                                                                                                                            | number                                                                                                                 | 20         |          |
| popupAutoWidth         | 是否自动让弹层的宽度和菜单项保持一致                                                                                                                                          | boolean                                                                                                                | false      |          |
| popupAlign             | 弹层的对齐方式                                                                                                                                                                | 'follow' \| 'outside'                                                                                                  | 'follow'   |          |
| popupProps             | 弹层自定义 props                                                                                                                                                              | PopupProps \| ((popupItemProps: PopupItemProps) => PopupProps)                                                         | -          |          |
| popupClassName         | 弹出子菜单自定义 className                                                                                                                                                    | string                                                                                                                 | -          |          |
| popupStyle             | 弹出子菜单自定义 style                                                                                                                                                        | React.CSSProperties                                                                                                    | -          |          |
| selectedKeys           | 当前选中菜单项的 key 值（受控）                                                                                                                                               | string \| string[]                                                                                                     | -          |          |
| defaultSelectedKeys    | 初始选中菜单项的 key 值（非受控）                                                                                                                                             | string \| string[]                                                                                                     | -          |          |
| onSelect               | 选中或取消选中菜单项触发的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_selectedKeys_: 选中的所有菜单项的值<br/>_item_: 选中或取消选中的菜单项<br/>_extra_: 选中时的额外参数 | (selectedKeys: string[], item: SelectableItem, extra: SelectExtra) => void                                             | -          |          |
| selectMode             | 选中模式，单选还是多选，默认无值，不可选                                                                                                                                      | 'single' \| 'multiple'                                                                                                 | -          |          |
| shallowSelect          | 是否只能选择第一层菜单项（不能选择子菜单中的菜单项）                                                                                                                          | boolean                                                                                                                | false      |          |
| hasSelectedIcon        | 是否显示选中图标，如果设置为 false 需配合配置平台设置选中时的背景色以示区分                                                                                                   | boolean                                                                                                                | true       |          |
| isSelectIconRight      | 是否将选中图标居右，仅当 hasSelectedIcon 为 true 时生效。                                                                                                                     | boolean                                                                                                                | false      |          |
| direction              | 菜单第一层展示方向                                                                                                                                                            | 'ver' \| 'hoz'                                                                                                         | 'ver'      |          |
| hozAlign               | 横向菜单条 item 和 footer 的对齐方向，在 direction 设置为 'hoz' 并且 header 存在时生效                                                                                        | 'left' \| 'right'                                                                                                      | 'left'     |          |
| header                 | 自定义菜单头部                                                                                                                                                                | React.ReactNode                                                                                                        | -          |          |
| footer                 | 自定义菜单尾部                                                                                                                                                                | React.ReactNode                                                                                                        | -          |          |
| footerWrapperClassName | 自定义菜单尾部容器的 className                                                                                                                                                | string                                                                                                                 | -          |          |
| autoFocus              | 是否自动获得焦点                                                                                                                                                              | boolean                                                                                                                | false      |          |
| focusedKey             | 当前获得焦点的子菜单或菜单项 key 值                                                                                                                                           | string                                                                                                                 | -          |          |
| focusable              | 是否可以获得焦点                                                                                                                                                              | boolean                                                                                                                | true       |          |
| onItemFocus            | 菜单项获得焦点时的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_key_: 菜单项的 key<br/>_item_: 菜单项组件实例<br/>_event_: 事件对象                                          | (<br/> key: string,<br/> item: MenuItem,<br/> event: React.MouseEvent \| React.KeyboardEvent<br/> ) => void            | -          |          |
| onItemClick            | 点击菜单项触发的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_key_: 点击的菜单项的 key 值<br/>_item_: 点击的菜单项对象<br/>_event_: 事件对象                                 | (<br/> key: string,<br/> item: MenuItem,<br/> event: React.MouseEvent \| React.KeyboardEvent<br/> ) => void            | -          |          |
| onItemKeyDown          | 菜单项触发键盘按下的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_key_: 菜单项的 key 值<br/>_item_: 菜单项对象<br/>_event_: 事件对象                                         | (<br/> key: string \| null \| undefined,<br/> item: MenuItem,<br/> event: React.KeyboardEvent<br/> ) => void           | -          |          |
| embeddable             | 是否开启嵌入式模式，开启后没有默认背景、外层 border、box-shadow                                                                                                               | boolean                                                                                                                | false      |          |
| icons                  | 自定义内部使用的图标                                                                                                                                                          | {<br/> select?: React.ReactNode;<br/> }                                                                                | -          |          |
| hozInLine              | 横向菜单模式下，是否维持在一行，即超出一行折叠成 SubMenu 显示                                                                                                                 | boolean                                                                                                                | -          |          |
| renderMore             | 自定义渲染超出一行的菜单项（hozInLine = true 时生效）<br/><br/>**签名**:<br/>**参数**:<br/>_items_: 被折叠的菜单项<br/>**返回值**:<br/>渲染内容                               | (<br/> items?: React.ReactElement[]<br/> ) => React.ReactElement\<{ className?: string; style?: React.CSSProperties }> | -          |          |
| inlineArrowDirection   | 子菜单展开箭头的方向                                                                                                                                                          | 'down' \| 'right'                                                                                                      | 'down'     |          |
| labelToggleChecked     | 标签是否可触发 checked 状态变化                                                                                                                                               | boolean                                                                                                                | true       |          |
| expandAnimation        | 展开菜单时使用动画                                                                                                                                                            | boolean                                                                                                                | true       |          |
| itemClassName          | 菜单项的类型                                                                                                                                                                  | string                                                                                                                 | -          |          |
| flatenContent          | 将菜单项 DOM 结构平铺在容器内                                                                                                                                                 | boolean                                                                                                                | -          |          |

### Menu.SubMenu

| 参数                    | 说明                                                     | 类型            | 默认值 | 是否必填 |
| ----------------------- | -------------------------------------------------------- | --------------- | ------ | -------- |
| label                   | 标签内容                                                 | React.ReactNode | -      |          |
| selectable              | 是否可选，该属性仅在设置 Menu 组件 selectMode 属性后生效 | boolean         | false  |          |
| mode                    | 子菜单打开方式，如果设置会覆盖 Menu 上的同名属性         | Mode            | -      |          |
| children                | 菜单项或下一级子菜单                                     | React.ReactNode | -      |          |
| level                   | 菜单层级                                                 | number          | -      |          |
| noIcon                  | 是否没有图标                                             | boolean         | false  |          |
| subMenuContentClassName | 子菜单内容节点的类名                                     | string          | -      |          |

### Menu.PopupItem

| 参数        | 说明                                                     | 类型                  | 默认值 | 是否必填 |
| ----------- | -------------------------------------------------------- | --------------------- | ------ | -------- |
| label       | 标签内容                                                 | React.ReactNode       | -      |          |
| children    | 自定义弹层内容                                           | React.ReactNode       | -      |          |
| hasSubMenu  | 是否拥有子菜单                                           | boolean               | -      |          |
| triggerType | 子菜单打开的触发方式，如果设置会覆盖 Menu 上的同名属性   | 'click' \| 'hover'    | -      |          |
| align       | 弹层的对齐方式                                           | 'follow' \| 'outside' | -      |          |
| selectable  | 是否可选，该属性仅在设置 Menu 组件 selectMode 属性后生效 | boolean               | false  |          |
| autoWidth   | 是否自动让弹层的宽度和菜单项保持一致                     | boolean               | -      |          |

### Menu.CheckboxItem

该子组件选中情况不受 defaultSelectedKeys/selectedKeys 控制，请自行控制选中逻辑

| 参数          | 说明                                                                                                        | 类型                                                                                                             | 默认值 | 是否必填 |
| ------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------ | -------- |
| checked       | 是否选中                                                                                                    | boolean                                                                                                          | false  |          |
| indeterminate | 是否半选中                                                                                                  | boolean                                                                                                          | false  |          |
| disabled      | 是否禁用                                                                                                    | boolean                                                                                                          | false  |          |
| onChange      | 选中或取消选中触发的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_checked_: 是否选中<br/>_event_: 事件对象 | (<br/> checked: boolean,<br/> event: React.MouseEvent \| React.KeyboardEvent \| React.ChangeEvent<br/> ) => void | -      |          |
| helper        | 帮助文本                                                                                                    | React.ReactNode                                                                                                  | -      |          |
| children      | 标签内容                                                                                                    | React.ReactNode                                                                                                  | -      |          |

### Menu.RadioItem

该子组件选中情况不受 defaultSelectedKeys/selectedKeys 控制，请自行控制选中逻辑

| 参数     | 说明                                                                                                        | 类型                                                                       | 默认值 | 是否必填 |
| -------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------ | -------- |
| checked  | 是否选中                                                                                                    | boolean                                                                    | false  |          |
| disabled | 是否禁用                                                                                                    | boolean                                                                    | false  |          |
| onChange | 选中或取消选中触发的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_checked_: 是否选中<br/>_event_: 事件对象 | (checked: boolean, event: React.MouseEvent \| React.KeyboardEvent) => void | -      |          |
| helper   | 帮助文本                                                                                                    | React.ReactNode                                                            | -      |          |
| children | 标签内容                                                                                                    | React.ReactNode                                                            | -      |          |

### Menu.Group

| 参数     | 说明     | 类型                                   | 默认值 | 是否必填 |
| -------- | -------- | -------------------------------------- | ------ | -------- |
| label    | 标签内容 | React.ReactNode                        | -      |          |
| children | 菜单项   | React.ReactChild \| React.ReactChild[] | -      | 是       |

### Menu.Divider

分隔线

### SelectExtra

触发菜单选中状态变化时的额外信息

| 参数      | 说明                        | 类型              | 默认值 | 是否必填 |
| --------- | --------------------------- | ----------------- | ------ | -------- |
| key       | 被选中菜单的 key            | string            | -      | 是       |
| select    | 是否选中状态                | boolean           | -      | 是       |
| label     | 菜单的标签                  | React.ReactNode   | -      | 是       |
| keyPath   | 被操作菜单项的 key 全路径   | string[]          | -      | 是       |
| labelPath | 被操作菜单项的 label 全路径 | React.ReactNode[] | -      | 是       |

### Mode

子菜单打开的模式

```typescript
export type Mode = 'inline' | 'popup';
```

<!-- api-extra-start -->

### Menu.create(props)

创建上下文菜单。

-   props 参数可传入 Menu 所有支持的 props
-   props 额外支持 overlayProps，用来自定义 Menu 所在的弹层

<!-- api-extra-end -->

## 无障碍键盘操作指南

| 按键        | 说明                                                           |
| :---------- | :------------------------------------------------------------- |
| Up Arrow    | 导航到上一项                                                   |
| Down Arrow  | 导航到下一项                                                   |
| Right Arrow | 打开子菜单，导航到子菜单第一项；横向菜单条第一层，导航到右一项 |
| Left Arrow  | 关闭子菜单，导航到父级菜单；横向菜单条第一层，导航都左一项     |
| Enter       | 打开子菜单，导航到子菜单第一项                                 |
| Esc         | 关闭子菜单，导航到父级菜单                                     |
| SPACE       | 切换选中状态                                                   |
