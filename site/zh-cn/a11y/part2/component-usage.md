# 2. 步骤一：使用无障碍的 Fusion 组件

## 1. 使用无障碍的Fusion组件

Fusion 是一种旨在提升设计与开发之间 UI 构建效率的工作方式。我们致力于对无障碍的支持，其中 Fusion 基础组件已提供无障碍支持，开发者可以进行测试和使用，并提供[Fusion](https://fusion.design/component)无障碍使用和说明文档。所有非组件 API 属性都可以透传至 DOM 元素\(我们可以传递参数，修改aria和role属性\)。

经过上一章节的学习，对无障碍有初步的认识，如何进行改造呢，下面给出一些指引：

* 对于组件，我们为开发者内置role和特定aria-_属性，开发者也可以对非组件 API 属性都可以透传至 DOM 元素，进行修改 role 和 aria-_参数，但是要注意对应关系，请[参考](../yi-bei-jing-jie-shao/wai-aria.md)
* 对一些特殊的组件传递参数才能支持无障碍，设置`id`，`autoFocus`和传参数，如下：
  * id - `Balloon`，`Rating`
  * autoFocus - 弹层自动聚焦，例如`Dialog`，`Overlay`，`Dropdown`
  * 传参数 - 有些组件需要根据具体的业务，实现不同的可访问性，这里为开发者内置一些参数，想使用无障碍的时候，用户只需要根据现有的需求，选择对应的内置参数，例如设置 aria-label，以下组件需要用户传参数才支持无障碍组件如下：`NumberPicker`、`Transfer`
* 我们为开发者提供无障碍的使用文档，请[参考](https://fusion.design/component)组件 API 中`ARIA and KeyBoard`

## 2. 组件的分类

本部分介绍具体如何对组件改造，让开发者更好的使用组件可访问性，分如下四类：

### 2.1 数据展示类

* `Icon`
  * 图标类元素
  * 若为装饰性 icon，请设置`<Icon aria-hidden>` 或 `<Icon role="presentation">`
  * 若有真实语义，请设置`aria-label`以描述 icon 行为`<Icon aria-label="xxx">`
* `Badge`
  * 如需朗读含义，可通过 css 设置仅读屏软件可读的内容 [参考文档](https://fusion.design/component/basic/badge)
* `Slider`
  * 内容如需朗读，请自定义 alt 属性（若为 img）或 aria-label 属性 [参考文档](https://fusion.design/component/basic/slider)
* `Table`
  * 默认为纯数据展示的表格 - 若作为布局使用复杂功能，需自定义 role 等属性，[参考文档](https://fusion.design/component/basic/table)
* `Tag`
  * 删除类标签，删除按钮默认朗读为“删除”，可自定义文案，自定义方式参考[国际化语言包的设置](https://fusion.design/component/basic/config-provider)
* `Paragraph`、`Progress`、`Timeline`、`Collapse`

### 2.2 即时反馈类

* `Message`
  * 默认 role="alert"，当出现在 document 中时，屏幕阅读器会优先朗读它的内容。 
  * 若为非典型使用，例如一直展示在页面上，请根据实际需求覆盖默认 role，`<Message role="" />`
* `Balloon`
  * 传入 id 以支持无障碍（为支持 SSR，所以不默认生成 id） 
  * 默认 role="tooltip"，若有高优先级，请根据实际需求覆盖默认 role 
  * 简单文案描述推荐使用 Balloon.Tooltip，focus 后会自动展开 
  * 请务必设置可聚焦的 trigger 元素
* `Dialog`
  * 默认 role="dialog"，若有高优先级，请根据实际需求覆盖默认 role 
  * 可通过`autoFocus`开启默认聚焦，焦点为弹层内容上第一个可聚焦元素 `<Dialog autoFocus />` 
  * 请务必设置可聚焦的 trigger 元素
* `Overlay`
  * 可通过`autoFocus`开启默认聚焦，焦点为弹层内容上第一个可聚焦元素 `<Overlay autoFocus />` 
  * 请务必设置可聚焦的 trigger 元素

### 2.3 菜单与导航类

* 菜单
  * `Menu`
    * 支持键盘导航
    * 默认 role="menu"，子元素为"menuitem"，菜单自定义单选子元素为"menuitemradio"，菜单自定义多选子元素为"menuitemcheckbox"
    * 使用`selectMode`属性 改变组件可选状态后，默认 role="listbox"，根节点是否多选改变`aria-multiselectable`的值，子元素为“listitem”
    * 请根据实际需求覆盖默认 role `<Menu role="listbox" />` `<Menu.Item role="listitem" />`
  * `Nav`
    * 默认 role="listbox"，子元素为"listitem"
    * 请根据实际需求覆盖默认 role `<Nav role="menu" />` `<Nav.Item role="menuitem" />`
  * `Dropdown`
    * 请务必设置可聚焦的 trigger 元素
    * 弹层展开后会自动聚焦，可通过设置 autoFocus={false}禁用
* 导航
  * `Tab`
    * 默认 role="tablist"，子元素为"tab"
    * 支持键盘导航
  * `Pagination`
    * 朗读格式默认为“上一页，当前${i}页”，可自定义文案，自定义方式参考[国际化语言包的设置](https://fusion.design/component/basic/config-provider)
  * `Step`、`Breadcrumb`
    * 默认`aria-current`标记当前步骤

### 2.4 表单类

* 推荐： Form Field Input CheckBox Radio Switch Select NumberPicker Button Range Rating DatePicker TimePicker Upload
  * `Input`
    * 自动根据禁用状态设置`aria-disabled`
    * 请使用者根据具体场景，设置`aria-live`、`aria-label` [参考文档](https://fusion.design/component/basic/input)
  * `CheckBox` 基本无需使用者改动
    * 支持键盘导航
    * 根据选中状态更新`aria-checked`
  * `Radio` 基本无需使用者改动
    * 支持键盘导航
    * 根据选中状态更新`aria-checked`
  * `Switch`
    * 默认 role="switch"
    * 根据选中状态更新`aria-checked`
  * `Select`
    * 支持键盘操作，上下按键为前后内容切换
    * 根据所选中项，更新`aria-live`属性对应span标签内容
  * `NumberPicker`
    * 支持键盘上下按键，增加、减少数字。
    * 开发者可通过传递`upBtnProps` `downBtnProps`参数，自定义增加减少按钮的`aria-label`文案，[参考文档](https://fusion.design/component/basic/number-picker)  
  * `Button` `SplitButton` `MenuButton`
    * 默认使用`<button>`标签来渲染，可自定义标签类型`<Button component="a">`
    * 可通过配置设置自动聚焦，MenuButton与SplitButton组件设置menuProps属性，其中参数为对象`{autoFocus: true}`
  * `Range`
    * 使用左右方向键去改变数值
    * 默认 role=“slider”，滑动更新以下值`aira-valuenow`\(定义当前值\)，`aria-valuetext`\(可读的替代文本\)，`aria-valuemax`\(最大值\)，`aria-valuemin`\(最小值\)
  * `Rating`
    * 传入 id 支持无障碍
    * 支持键盘操作
    * 通过 readAs 函数自定义展示/朗读的文案
  * `DatePicker`
    * 使用 role 为 grid，rowgroup，row 和 cell，并设置`aria-disabled`\(是否为禁选择状态\)与`aria-selected`\(是否被选择\)。
    * 建议给予充分的`aria-label`提示，鼓励用户按照指定格式手动输入日期
  * `TimePicker` 
    * 建议给予充分的`aria-label`提示，鼓励用户按照指定格式手动输入日期
    * 使用 role 为 listbox 和 option，设置 aria-selected，tabIndex
  * `Upload`
    * 设置 role 为 upload 和在 input 中设置 aria-hidden，不让屏幕阅读器读取
    * 建议至少保留一种点击上传的途径
* 不推荐：TreeSelect CascaderSelect Cascader Transfer
  * `TreeSelect` `CascaderSelect` `Cascader`
    * 均支持方向键操作，上下按键为同级内容切换，左右按键为父子级切换.
    * 无障碍设计中，请尽可能地避免这些组件的使用
  * `Transfer`
    * 使用 role 为 menu，menuitemcheckbox 和 aria-checked，tabIndex 属性
    * 可自定义文案，自定义方式参考[国际化语言包的设置](https://fusion.design/component/basic/config-provider)。
    * 无障碍设计中，请尽可能地避免这一组件的使用

## 3. 参考文献

* [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/#region)
* [WCAG 2.0](https://www.w3.org/TR/WCAG20/)
* [WCAG 2.0 中文版](https://www.w3.org/Translations/WCAG20-zh/)
* [WCAG 2.1](https://www.w3.org/TR/WCAG21/)

