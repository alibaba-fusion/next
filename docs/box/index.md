# Box

-   category: Components
-   family: General
-   chinese: 弹性布局
-   type: 展示

---

## 开发指南

### 何时使用

用于弹性布局

## API

### Box

| 参数        | 说明                                                                               | 类型                             | 默认值    |
| --------- | -------------------------------------------------------------------------------- | ------------------------------ | ------ |
| flex      | 布局属性                                                                             | Array&lt;Number/String>/Number | -      |
| direction | 布局方向，默认为 column ，一个元素占据一整行<br><br>**可选值**:<br>'row', 'column'                    | Enum                           | column |
| wrap      | 是否折行                                                                             | Boolean                        | false  |
| spacing   | 元素之间的间距 [bottom&top, right&left]                                                 | Array&lt;Number>/Number        | -      |
| margin    | 设置 margin [bottom&top, right&left]                                               | Array&lt;Number>/Number        | -      |
| padding   | 设置 padding [bottom&top, right&left]                                              | Array&lt;Number>/Number        | -      |
| device    | 设备，用来做自适应，默认为 PC<br><br>**可选值**:<br>'phone'(手机)<br>'tablet'(平板)<br>'desktop'(PC) | Enum                           | -      |
