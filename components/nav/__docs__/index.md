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

| 参数                | 说明                                                                                                                                                                                                                                                            | 类型                                                                                           | 默认值   | 是否必填 | 支持版本 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------- | -------- | -------- |
| children            | 导航项和子导航                                                                                                                                                                                                                                                  | React.ReactNode                                                                                | -        |          | -        |
| defaultOpenAll      | 初始展开所有的子导航                                                                                                                                                                                                                                            | boolean                                                                                        | false    |          | -        |
| mode                | 子导航打开的模式                                                                                                                                                                                                                                                | 'inline' \| 'popup'                                                                            | inline   |          | -        |
| triggerType         | 子导航打开的触发方式                                                                                                                                                                                                                                            | 'click' \| 'hover'                                                                             | click    |          | -        |
| openMode            | 内联子导航的展开模式，同时可以展开一个同级子导航还是多个同级子导航                                                                                                                                                                                              | 'single' \| 'multiple'                                                                         | multiple |          | -        |
| inlineIndent        | 内联子导航缩进距离                                                                                                                                                                                                                                              | number                                                                                         | 20       |          | -        |
| popupAlign          | 弹出子导航的对齐方式                                                                                                                                                                                                                                            | 'follow' \| 'outside'                                                                          | follow   |          | -        |
| popupClassName      | 弹出子导航的自定义类名                                                                                                                                                                                                                                          | string                                                                                         | -        |          | -        |
| selectedKeys        | 当前选中导航项的 key 值                                                                                                                                                                                                                                         | string \| Array<string>                                                                        | -        |          | -        |
| defaultSelectedKeys | 初始选中导航项的 key 值                                                                                                                                                                                                                                         | string \| Array<string>                                                                        | []       |          | -        |
| onSelect            | 选中或取消选中导航项触发的回调函数<br/><br/>**签名**:<br/>(selectedKeys: Array<string>, item?: React.ReactNode, extra?: SelectEventExtraOptions) => void<br/>**参数**:<br/>_selectedKeys_: 选中的导航项的 key 值<br/>_item_: 选中的导航项<br/>_extra_: 扩展参数 | (selectedKeys: Array<string>, item?: React.ReactNode, extra?: SelectEventExtraOptions) => void | -        |          | -        |
| direction           | 导航布局                                                                                                                                                                                                                                                        | 'hoz' \| 'ver'                                                                                 | ver      |          | -        |
| hozAlign            | 横向导航条 items 和 footer 的对齐方向                                                                                                                                                                                                                           | 'left' \| 'right'                                                                              | left     |          | -        |
| header              | 自定义导航头部                                                                                                                                                                                                                                                  | React.ReactNode                                                                                | -        |          | -        |
| footer              | 自定义导航尾部                                                                                                                                                                                                                                                  | React.ReactNode                                                                                | -        |          | -        |
| embeddable          | 是否开启嵌入式模式                                                                                                                                                                                                                                              | boolean                                                                                        | false    |          | 1.18     |
| type                | 导航类型                                                                                                                                                                                                                                                        | 'normal' \| 'primary' \| 'secondary' \| 'line'                                                 | normal   |          | -        |
| activeDirection     | 设置组件选中状态的 active 边方向                                                                                                                                                                                                                                | null \| 'top' \| 'bottom' \| 'left' \| 'right'                                                 | -        |          | -        |
| iconOnly            | 是否只显示图标                                                                                                                                                                                                                                                  | boolean                                                                                        | -        |          | -        |
| iconTextOnly        | iconOnly模式下是否展示文字                                                                                                                                                                                                                                      | boolean                                                                                        | -        |          | -        |
| iconOnlyWidth       | iconOnly 模式下的宽度                                                                                                                                                                                                                                           | number \| string                                                                               | -        |          | -        |
| hasArrow            | 是否显示右侧的箭头                                                                                                                                                                                                                                              | boolean                                                                                        | true     |          | -        |
| hasTooltip          | 是否有 ToolTips                                                                                                                                                                                                                                                 | boolean                                                                                        | false    |          | -        |

### Nav.Group

> 继承自 `Menu.Group` 的能力请查看 `Menu.Group` 文档

| 参数     | 说明           | 类型            | 默认值 | 是否必填 |
| -------- | -------------- | --------------- | ------ | -------- |
| label    | 标签内容       | React.ReactNode | -      |          |
| children | 导航项和子导航 | React.ReactNode | -      |          |

### Nav.Item

> 继承自 `Menu.Item` 的能力请查看 `Menu.Item` 文档

| 参数     | 说明       | 类型                      | 默认值 | 是否必填 |
| -------- | ---------- | ------------------------- | ------ | -------- |
| icon     | 自定义图标 | string \| React.ReactNode | -      |          |
| children | 导航内容   | React.ReactNode           | -      |          |

### Nav.PopupItem

> 继承自 `Menu.PopupItem` 的能力请查看 `Menu.PopupItem` 文档

| 参数     | 说明       | 类型                      | 默认值 | 是否必填 |
| -------- | ---------- | ------------------------- | ------ | -------- |
| label    | 标签内容   | React.ReactNode           | -      |          |
| children | 弹出内容   | React.ReactNode           | -      |          |
| icon     | 自定义图标 | string \| React.ReactNode | -      |          |

### Nav.SubNav

> 继承自 `Menu.SubMenu` 的能力请查看 `Menu.SubMenu` 文档

| 参数       | 说明                                        | 类型                      | 默认值 | 是否必填 |
| ---------- | ------------------------------------------- | ------------------------- | ------ | -------- |
| icon       | 自定义图标                                  | string \| React.ReactNode | -      |          |
| label      | 标签内容                                    | React.ReactNode           | -      |          |
| selectable | 是否可选                                    | boolean                   | false  |          |
| children   | 导航项和子导航                              | React.ReactNode           | -      |          |
| noIcon     | 是否需要提示当前项可展开的 icon，默认是有的 | boolean                   | -      |          |

### SelectEventExtraOptions

```typescript
type SelectEventExtraOptions = {
    /**
     * 是否被选中
     * @en Whether is selected
     */
    select: boolean;
    /**
     * 导航项 key 的路径
     * @en Key path of current operation nav item
     */
    keyPath: string[];
    /**
     * 导航项的 key
     * @en Key of current operation nav item
     */
    key: string[];
    /**
     * 导航项的文本
     * @en Label of current operation nav item
     */
    label: string;
};
```

## 无障碍键盘操作指南

| 按键        | 说明                                                           |
| :---------- | :------------------------------------------------------------- |
| Up Arrow    | 导航到上一项                                                   |
| Down Arrow  | 导航到下一项                                                   |
| Right Arrow | 打开子菜单，导航到子菜单第一项；横向菜单条第一层，导航到右一项 |
| Left Arrow  | 关闭子菜单，导航到父级菜单；横向菜单条第一层，导航到左一项     |
| Enter       | 打开子菜单，导航到子菜单第一项                                 |
| Esc         | 关闭子菜单，导航到父级菜单                                     |

## FAQ

### 菜单的数据是移步获取的，当我拿到数据之后，发现设置的 `defaultOpenKeys` 不生效，有什么解决办法？

原因：defaultXXX系列API遵循React的设计规范，仅在组件第一次渲染的时候生效，所以`defaultOpenKeys`仅仅对Menu在didMount阶段拿到的Children生效，异步获取的信息不在这个阶段内，所以不生效。

解决方法：假设菜单信息是异步获取后塞到 menuData 变量中的，可以设置 `{menuData && <Menu />}`。
