# Typography

-   category: Components
-   family: General
-   chinese: 排版
-   type: Basic

---

Basic text writing, including headings, body text, lists, and more.

## When To Use

-   When need to display title or paragraph contents in Articles/Blogs/Notes.

## API

### Typography

Inherit the Typography.Text API

| Param     | Description    | Type                                  | Default Value | Required |
| --------- | -------------- | ------------------------------------- | ------------- | -------- |
| component | Set Label Type | string \| React.JSX.IntrinsicElements | article       |          |

### Typography.Title

T is divided into H1, H2, H3, H4, H5, H6 components, representing different levels of headings

Inherit the Typography.Text API

### Typography.Paragraph

Inherit the Typography.Text API

| Param     | Description    | Type                                  | Default Value | Required |
| --------- | -------------- | ------------------------------------- | ------------- | -------- |
| component | Set Label Type | string \| React.JSX.IntrinsicElements | p             |          |

### Typography.Text

| Param     | Description                    | Type                                  | Default Value | Required |
| --------- | ------------------------------ | ------------------------------------- | ------------- | -------- |
| delete    | Add strikethrough style        | boolean                               | false         |          |
| mark      | Add markup style               | boolean                               | false         |          |
| underline | Add underline style            | boolean                               | false         |          |
| strong    | Bold or not                    | boolean                               | false         |          |
| code      | Add Code Style                 | boolean                               | false         |          |
| component | SetLabel Type                  | string \| React.JSX.IntrinsicElements | span          |          |
| rtl       | Whether to display in rtl mode | boolean                               | false         |          |
