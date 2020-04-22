# List

-   category: Components
-   family: DataDisplay
-   chinese: 列表
-   type: Display

---

## Develop Guide

1.19.0+ supported

### When to Use

The content can consist of multiple elements of varying type and size.


## API

### List

| Param | Descripiton  | Type  | Default Value |
| ------- | ----------------------------------------- | --------- | -------- |
| header  | List header                                      | ReactNode | -        |
| size    | List size <br><br>**Options**:<br>'medium', 'small' | Enum      | 'medium' |
| footer  | List footer                                  | ReactNode | -        |
| divider | Toggles rendering of the divider the list item  | Boolean   | true     |

### List.Item

| Param | Descripiton  | Type  | Default Value |
| ----------- | ------------------- | --------- | --- |
| title       | 列表元素的标题             | ReactNode | -   |
| description | 列表元素的描述内容           | ReactNode | -   |
| media       | 列表元素的头像 / 图标 / 图片内容 | ReactNode | -   |
| extra       | 额外内容                | ReactNode | -   |
