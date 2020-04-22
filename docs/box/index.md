# Box

-   category: Components
-   family: General
-   chinese: 弹性布局
-   type: 展示

---

## 开发指南

### 何时使用

用于弹性布局, 1.19.0+ 添加，通过`display: flex`实现，受浏览器限制，本功能支持到IE10+, IE下参考文档 https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673531(v=vs.85)

## API

### Box

| 参数        | 说明                                                                                                                              | 类型                             | 默认值    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------ |
| flex      | 布局属性                                                                                                                            | Array&lt;Number/String>/Number | -      |
| direction | 布局方向，默认为 column ，一个元素占据一整行<br><br>**可选值**:<br>'row', 'column'                                                                   | Enum                           | column |
| wrap      | 是否折行 支持IE11+                                                                                                                           | Boolean                        | false  |
| spacing   | 元素之间的间距 [bottom&top, right&left]                                                                                                | Array&lt;Number>/Number        | -      |
| margin    | 设置 margin [bottom&top, right&left]                                                                                              | Array&lt;Number>/Number        | -      |
| padding   | 设置 padding [bottom&top, right&left]                                                                                             | Array&lt;Number>/Number        | -      |
| justify   | 沿着主轴方向，子元素们的排布关系 （兼容性同 justify-content ）<br><br>**可选值**:<br>'flex-start', 'center', 'flex-end', 'space-between', 'space-around' | Enum                           | -      |
| align     | 垂直主轴方向，子元素们的排布关系 （兼容性同 align-items ）<br><br>**可选值**:<br>'flex-start', 'center', 'flex-end', 'baseline', 'stretch'               | Enum                           | -      |
| component | 定制标签名， 例如section等                                                                                                               | String                         | 'div'  |
