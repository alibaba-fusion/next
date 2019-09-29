# Typography

-   category: Components
-   family: General
-   chinese: 排版
-   type: Basic

---

Basic text writing, including headings, body text, lists, and more.

## When To Use

- When need to display title or paragraph contents in Articles/Blogs/Notes.

## API

### Typography

> Inherit the Typography.Text API

| 参数        | 说明     | 类型     | 默认值       |
| --------- | ------ | ------ | --------- |
| component | Set Element type | custom | 'article' |

### Typography.Paragraph

> Inherit the Typography.Text API

| 参数        | 说明                                                                 | 类型     | 默认值      |
| --------- | ------------------------------------------------------------------ | ------ | -------- |
| component | Set Element type                                                             | custom | 'p'      |

### Typography.Text

| 参数        | 说明      | 类型      | 默认值    |
| --------- | ------- | ------- | ------ |
| delete    | delete line style | Boolean | false  |
| mark      | mark style  | Boolean | false  |
| underline | underline style | Boolean | false  |
| strong    | bold style    | Boolean | false  |
| code      | code style  | Boolean | false  |
| component | Set Element type  | custom  | 'span' |

<!-- api-extra-start -->

### Typography.Title

> t is divided into H1, H2, H3, H4, H5, H6 components, representing different levels of headings.
> Inherit the Typography.Text API

<!-- api-extra-end -->

