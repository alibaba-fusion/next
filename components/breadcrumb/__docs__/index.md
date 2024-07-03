# Breadcrumb

-   category: Components
-   family: Navigation
-   chinese: 面包屑
-   type: 导航
-   cols: 1

---

面包屑组件。

## 何时使用

用来告知用户当前的位置，以及当前页面在整个网站中的位置，属于一种辅助的导航方式，适用于清晰且具多层次结构的网站，每一层内容为层级归属关系，方便用户返回上一级或各个层级的页面。

## API

### Breadcrumb

| 参数            | 说明                                                               | 类型                                       | 默认值 | 是否必填 | 支持版本 |
| --------------- | ------------------------------------------------------------------ | ------------------------------------------ | ------ | -------- | -------- |
| children        | 面包屑子节点，需传入 Breadcrumb.Item                               | Array\<React.ReactNode> \| React.ReactNode | -      |          | -        |
| maxNode         | 面包屑最多显示个数，超出部分会被隐藏                               | number \| 'auto'                           | 100    |          | -        |
| showHiddenItems | 当超过的项被隐藏时，是否可通过点击省略号展示菜单（包含被隐藏的项） | boolean                                    | false  |          | 1.23     |
| popupContainer  | 弹层挂载的容器节点（在showHiddenItems为true时才有意义）            | DropdownProps['container']                 | -      |          | 1.23     |
| followTrigger   | 是否跟随trigger滚动（在showHiddenItems为true时才有意义）           | boolean                                    | -      |          | 1.23     |
| popupProps      | 添加到弹层上的属性（在showHiddenItems为true时才有意义）            | PopupProps                                 | -      |          | 1.23     |
| separator       | 分隔符，可以是文本或 Icon                                          | string \| React.ReactNode                  | -      |          | -        |
| component       | 设置标签类型                                                       | string \| (() => void)                     | 'nav'  |          | -        |

### Breadcrumb.Item

| 参数    | 说明                                                                     | 类型                                  | 默认值 | 是否必填 |
| ------- | ------------------------------------------------------------------------ | ------------------------------------- | ------ | -------- |
| link    | 面包屑节点链接，如果设置这个属性，则该节点为`<a />` ，否则是`<span />`   | string                                | -      |          |
| onClick | 元素点击事件<br/><br/>**签名**:<br/>**参数**:<br/>_e_: Click Mouse Event | React.MouseEventHandler\<HTMLElement> | -      |          |

## 无障碍键盘操作指南

| 按键 | 说明         |
| :--- | :----------- |
| Tab  | 切换到下一项 |
