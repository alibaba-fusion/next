# Divider

-   category: Components
-   family: General
-   chinese: 分隔符
-   type: 展示

---

## 开发指南

区隔内容的分割线, 支持 1.19+

### 何时使用

对不同章节的文本段落进行分割。
对行内文字/链接进行分割，例如表格的操作列。

## API

### Divider

| 参数          | 说明                                                    | 类型      | 默认值      |
| ----------- | ----------------------------------------------------- | ------- | -------- |
| dashed      | 是否为虚线                                                 | Boolean | false    |
| direction   | 线是水平还是垂直类型<br><br>**可选值**:<br>'hoz', 'ver'            | Enum    | 'hoz'    |
| orientation | 分割线标题的位置<br><br>**可选值**:<br>'left', 'right', 'center' | Enum    | 'center' |
