## 2.1 组件的使用

Fusion 基础组件已提供无障碍支持，所有非组件 API 属性，都可以透传至 DOM 元素。

根据组件的复杂程度，一些组件的默认设置直接支持无障碍，一些组件需要根据组件使用场景，由开发者自定义一些设置。组件可分为如下四类：

### 数据展示类

-   `Icon` - 图标类元素，
    _ 若为装饰性 icon，请设置`<Icon aria-hidden>` 或 `<Icon role="presentation">`
    _ 若有真实语义，请设置`aria-label`以描述 icon 行为`<Icon aria-label="xxx">`
-   `Badge` - 如需朗读含义，可通过 css 设置仅读屏软件可读的内容 [参考文档](https://fusion.design/component/slider)

-   `Slider`
    -   内容如需朗读，请自定义 alt 属性（若为 img）或 aria-label 属性 [参考文档](https://fusion.design/component/slider)
-   `Table` - 默认为纯数据展示的表格 - 若作为布局使用复杂功能，需自定义 role 等属性，[参考文档](https://fusion.design/component/table)
-   `Tag` - 删除类标签，删除按钮默认朗读为“删除”，可自定义文案，自定义方式参考[国际化语言包的设置](https://fusion.design/component/config-provider)
-   `Paragraph`, `Progress`, `Timeline`, `Collapse`

### 即时反馈类

-   `Message` - 默认 role="alert"，当出现在 document 中时，屏幕阅读器会优先朗读它的内容。 - 若为非典型使用，例如一直展示在页面上，请根据实际需求覆盖默认 role，`<Message role="" />`
-   `Balloon` - 传入 id 以支持无障碍（为支持 SSR，所以不默认生成 id） - 默认 role="tooltip"，若有高优先级，请根据实际需求覆盖默认 role - 简单文案描述推荐使用 Balloon.Tooltip，focus 后会自动展开 - 请务必设置可聚焦的 trigger 元素
-   `Dialog` - 默认 role="dialog"，若有高优先级，请根据实际需求覆盖默认 role - 可通过`autoFocus`开启默认聚焦，焦点为弹层内容上第一个可聚焦元素 `<Dialog autoFocus />` - 请务必设置可聚焦的 trigger 元素
-   `Overlay` - 可通过`autoFocus`开启默认聚焦，焦点为弹层内容上第一个可聚焦元素 `<Overlay autoFocus />` - 请务必设置可聚焦的 trigger 元素

### 菜单与导航类

-   菜单

    -   `Menu`
        -   支持键盘导航
        -   默认 role="menu"，子元素为"menuitem"，菜单自定义单选子元素为"menuitemradio"，菜单自定义多选子元素为"menuitemcheckbox"
        -   使用`selectMode`API 改变组件可选状态后，默认 role="listbox"，跟是否多选改变`aria-multiselectable`的值，子元素为“listitem”
        -   请根据实际需求覆盖默认 role `<Menu role="listbox" />` `<Menu.Item role="listitem" />`
    -   `Nav`
        -   默认 role="listbox"，子元素为"listitem"
        -   请根据实际需求覆盖默认 role `<Nav role="menu" />` `<Nav.Item role="menuitem" />`
    -   `Dropdown`
        -   请务必设置可聚焦的 trigger 元素
        -   弹层展开后会自动聚焦，可通过设置 autoFocus={false}禁用

-   导航
    -   `Tab`
        -   默认 role="tablist"，子元素为"tab"
        -   支持键盘导航
    -   `Pagination`
        -   朗读格式默认为“上一页，当前\${i}页”，可自定义文案，自定义方式参考[国际化语言包的设置](https://fusion.design/component/config-provider)
    -   `Step`、`Breadcrumb`
        -   默认`aria-current`标记当前步骤
    -

### 表单类

-   推荐： Form Field Input CheckBox Radio Switch Select NumberPicker Button
-   不推荐：TreeSelect CascaderSelect Cascader Range Rating DatePicker TimePicker Upload Transfer

    -   `Input`
        -   自动根据禁用状态设置`aria-disabled`
        -   请使用者根据具体场景，设置`aria-live`、`aria-label` [参考文档](https://fusion.design/component/input)
    -   `CheckBox` 基本无需使用者改动
        -   支持键盘导航
        -   根据选中状态更新`aria-checked`
    -   `Radio` 基本无需使用者改动
        -   支持键盘导航
        -   根据选中状态更新`aria-checked`
    -   `Switch`
        -   默认 role="switch"
        -   根据选中状态更新`aria-checked`
    -   `Button` `SplitButton` `MenuButton`

        -   默认使用`<button>`标签来渲染，可自定义标签类型`<Button component="a">`
        -   可通过配置设置自动聚焦，<MenuButton menuProps={{autoFocus: true}} /> <SplitButton menuProps={{autoFocus: true}} />

    -   `NumberPicker`
        -   支持键盘上下按键，增加、减少数字。
        -   开发者可通过传递`upBtnProps` `downBtnProps`参数，自定义增加减少按钮的`aria-label`文案，[参考文档](https://fusion.design/component/number-picker)。

    *   `Range` - 使用左右方向键去改变数值。
        -   默认 role=“slider”，滑动更新以下值`aira-valuenow`(定义当前值),`aria-valuetext`(可读的替代文本),`aria-valuemax`(最大值),`aria-valuemin`(最小值)
    *   `Rating`
        -   传入 id 支持无障碍。
        -   支持键盘操作
        -   通过 readAs 函数自定义展示/朗读的文案。
    *   `DatePicker`
        -   使用 role 为 grid,rowgroup,row 和 cell,并设置`aria-disabled`(是否为禁选择状态)与`aria-selected`(是否被选择)。
        -   建议给予充分的`aria-label`提示，鼓励用户按照指定格式手动输入日期
    *   `TimePicker` - 建议给予充分的`aria-label`提示，鼓励用户按照指定格式手动输入日期
        -   使用 role 为 listbox 和 option,设置 aria-selected,tabIndex。
    *   `Upload`
        -   设置 role 为 upload 和在 input 中设置 aria-hidden，不让屏幕阅读器读取。
        -   建议至少保留一种点击上传的途径
    *   `Transfer`
        -   使用 role 为 menu，menuitemcheckbox 和 aria-checked，tabIndex 属性。
        -   可自定义文案，自定义方式参考[国际化语言包的设置](https://fusion.design/component/config-provider)
        -   无障碍设计中，请尽可能地避免这一组件的使用
            -   `TreeSelect` `CascaderSelect` `Cascader` - 均支持方向键操作，上下按键为同级内容切换，左右按键为父子级切换.
        *   无障碍设计中，请尽可能地避免这些组件的使用
