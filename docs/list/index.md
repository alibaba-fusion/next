# List

-   category: Components
-   family: DataDisplay
-   chinese: 列表
-   type: 展示

---

## 开发指南

1.19.4+ 版本支持

### 何时使用

最基础的列表展示，可承载文字、列表、图片、段落。

## API

### List

| 参数      | 说明                                        | 类型        | 默认值      |
| ------- | ----------------------------------------- | --------- | -------- |
| header  | 列表头部                                      | ReactNode | -        |
| size    | 列表尺寸<br><br>**可选值**:<br>'medium', 'small' | Enum      | 'medium' |
| footer  | 列表尾部                                      | ReactNode | -        |
| divider | 是否显示分割线                                   | Boolean   | true     |

### List.Item

| 参数          | 说明                  | 类型        | 默认值 |
| ----------- | ------------------- | --------- | --- |
| title       | 列表元素的标题             | ReactNode | -   |
| description | 列表元素的描述内容           | ReactNode | -   |
| media       | 列表元素的头像 / 图标 / 图片内容 | ReactNode | -   |
| extra       | 额外内容                | ReactNode | -   |
