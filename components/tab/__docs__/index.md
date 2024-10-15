# Tab

-   category: Components
-   family: Navigation
-   chinese: 选项卡
-   type: 导航

---

选项卡切换组件。

## 何时使用

TAB 让用户可以在不同子任务、视图、模式之间切换，它具有全局导航的作用，是全局功能的主要展示和切换区域，一个TAB标记一个核心功能，TAB之间可以快速点击切换。该窗口包含2个以上的选项卡，所有选项卡可以排列在一行中，即使该用户界面被本地化后也是如此。提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Fusion 提供了三级选项卡，分别用于不同的场景。

-   普通选项卡，引领整页面的内容，起导航的作用。
-   文本型选项卡。
-   包裹型选项卡，在页面结构中，只是局部展示，需要和其他内容结合出现。
-   胶囊型选项卡。

## 如何使用

如果您不想开启动效，可以通过设置 `animation` 属性值为 `false` 来关闭。

## API

### Tab

| 参数                | 说明                                                                                                                                                                                | 类型                                                                                                            | 默认值   | 是否必填 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| activeKey           | 被激活的选项卡的 key, 赋值则 tab 为受控组件，用户无法切换                                                                                                                           | string                                                                                                          | -        |          |
| defaultActiveKey    | 初始化时被激活的选项卡的 key                                                                                                                                                        | string                                                                                                          | -        |          |
| shape               | 外观形态                                                                                                                                                                            | 'pure' \| 'wrapped' \| 'text' \| 'capsule'                                                                      | 'pure'   |          |
| animation           | 是否开启动效                                                                                                                                                                        | boolean                                                                                                         | true     |          |
| excessMode          | 选项卡过多时的滑动模式                                                                                                                                                              | 'slide' \| 'dropdown'                                                                                           | 'slide'  |          |
| tabPosition         | 导航选项卡的位置，只适用于包裹型（wrapped）选项卡                                                                                                                                   | 'top' \| 'bottom' \| 'left' \| 'right'                                                                          | 'top'    |          |
| size                | 尺寸                                                                                                                                                                                | 'small' \| 'medium'                                                                                             | 'medium' |          |
| triggerType         | 激活选项卡的触发方式                                                                                                                                                                | 'hover' \| 'click'                                                                                              | 'click'  |          |
| lazyLoad            | 是否延迟加载 TabPane 的内容，默认开启，即不提前渲染                                                                                                                                 | boolean                                                                                                         | true     |          |
| unmountInactiveTabs | 是否自动卸载未处于激活状态的选项卡                                                                                                                                                  | boolean                                                                                                         | false    |          |
| navStyle            | 导航条的自定义样式                                                                                                                                                                  | CSSProperties                                                                                                   | -        |          |
| navClassName        | 导航条的自定义样式类                                                                                                                                                                | string                                                                                                          | -        |          |
| contentStyle        | 内容区容器的自定义样式                                                                                                                                                              | CSSProperties                                                                                                   | -        |          |
| contentClassName    | 内容区容器的自定义样式类                                                                                                                                                            | string                                                                                                          | -        |          |
| extra               | 导航栏附加内容                                                                                                                                                                      | ReactNode                                                                                                       | -        |          |
| disableKeyboard     | 禁用键盘事件                                                                                                                                                                        | boolean                                                                                                         | false    |          |
| onClick             | 点击单个选项卡时触发的回调                                                                                                                                                          | (key: string) => void                                                                                           | -        |          |
| onChange            | 选项卡发生切换时的事件回调<br/><br/>**签名**:<br/>**参数**:<br/>_key_: 改变后的 key                                                                                                 | (key: string) => void                                                                                           | -        |          |
| onClose             | 选项卡被关闭时的事件回调<br/><br/>**签名**:<br/>**参数**:<br/>_key_: 关闭的选项卡的 key                                                                                             | (key: string) => void                                                                                           | -        |          |
| tabRender           | 自定义选项卡模板渲染函数<br/><br/>**签名**:<br/>**参数**:<br/>_key_: 当前 Tab.Item 的 key 值<br/>_props_: 传给 Tab.Item 的所有属性键值对返回值<br/>**返回值**:<br/>- 返回自定义组件 | (key: string, props: Record\<string, unknown>) => ReactNode                                                     | -        |          |
| popupProps          | 弹层属性透传，只有当 excessMode 为 dropdown 时生效                                                                                                                                  | ComponentPropsWithRef\<typeof Popup>                                                                            | -        |          |
| icons               | 自定义 icon                                                                                                                                                                         | {<br/> dropdown?: string \| ReactNode;<br/> prev?: string \| ReactNode;<br/> next?: string \| ReactNode;<br/> } | -        |          |
| showAdd             | 展示新增按钮                                                                                                                                                                        | boolean                                                                                                         | -        |          |
| onAdd               | 新增的事件回调                                                                                                                                                                      | () => void                                                                                                      | -        |          |
| addIcon             | 自定义添加按钮                                                                                                                                                                      | ReactNode                                                                                                       | -        |          |

### Tab.Item

| 参数         | 说明                             | 类型                                                     | 默认值 | 是否必填 |
| ------------ | -------------------------------- | -------------------------------------------------------- | ------ | -------- |
| title        | 选项卡标题                       | ReactNode                                                | -      |          |
| closeable    | 单个选项卡是否可关闭             | boolean                                                  | false  |          |
| disabled     | 选项卡是否被禁用                 | boolean                                                  | false  |          |
| style        | 导航栏单个选项卡样式             | CSSProperties                                            | -      |          |
| className    | 导航栏单个选项卡样式类           | string                                                   | -      |          |
| onClick      | 导航栏单个选项卡点击时的回调     | (key: string, e: React.MouseEvent\<HTMLElement>) => void | -      |          |
| onMouseEnter | 导航栏单个选项卡鼠标移入时的回调 | (key: string, e: React.MouseEvent\<HTMLElement>) => void | -      |          |
| onMouseLeave | 导航栏单个选项卡鼠标移出时的回调 | (key: string, e: React.MouseEvent\<HTMLElement>) => void | -      |          |
| children     | 子元素                           | React.ReactNode                                          | -      |          |

## 无障碍键盘操作指南

| 按键        | 说明                 |
| :---------- | :------------------- |
| Right Arrow | 切换至前一项Tab.Item |
| Left Arrow  | 切换至后一项Tab.Item |
