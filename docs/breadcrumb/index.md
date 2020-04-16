# Breadcrumb

-   category: Components
-   family: Navigation
-   chinese: 面包屑
-   type: 导航
-   cols: 1

---

## 开发指南

### 何时使用

用来告知用户当前的位置，以及当前页面在整个网站中的位置，属于一种辅助的导航方式，适用于清晰且具多层次结构的网站，每一层内容为层级归属关系，方便用户返回上一级或各个层级的页面。

## API

### Breadcrumb

| 参数        | 说明                                          | 类型               | 默认值   |
| --------- | ------------------------------------------- | ---------------- | ----- |
| children  | 面包屑子节点，需传入 Breadcrumb.Item                  | custom           | -     |
| maxNode   | 面包屑最多显示个数，超出部分会被隐藏, 设置为 auto 会自动根据父元素的宽度适配。 | Number/Enum      | 100   |
| separator | 分隔符，可以是文本或 Icon                             | ReactNode/String | -     |
| component | 设置标签类型                                      | String/Function  | 'nav' |

### Breadcrumb.Item

| 参数   | 说明                                           | 类型     | 默认值 |
| ---- | -------------------------------------------- | ------ | --- |
| link | 面包屑节点链接，如果设置这个属性，则该节点为`<a />` ，否则是`<span />` | String | -   |

## ARIA and KeyBoard

| 按键  | 说明     |
| :-- | :----- |
| Tab | 切换到下一项 |
