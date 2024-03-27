# Typography

-   category: Components
-   family: General
-   chinese: 排版
-   type: 基本
-   version: 1.18

---

文本的基本格式。

## 何时使用

-   当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。

## API

### Typography

继承 Typography.Text API

| 参数      | 说明         | 类型                                  | 默认值  | 是否必填 |
| --------- | ------------ | ------------------------------------- | ------- | -------- |
| component | 设置标签类型 | string \| React.JSX.IntrinsicElements | article |          |

### Typography.Title

分为 H1, H2, H3, H4, H5, H6 不同的组件，表示不同层级，继承 Typography.Text API

### Typography.Paragraph

继承 Typography.Text 的 API

| 参数      | 说明         | 类型                                  | 默认值 | 是否必填 |
| --------- | ------------ | ------------------------------------- | ------ | -------- |
| component | 设置标签类型 | string \| React.JSX.IntrinsicElements | p      |          |

### Typography.Text

| 参数      | 说明                | 类型                                  | 默认值 | 是否必填 |
| --------- | ------------------- | ------------------------------------- | ------ | -------- |
| delete    | 添加删除线样式      | boolean                               | false  |          |
| mark      | 添加标记样式        | boolean                               | false  |          |
| underline | 添加下划线样式      | boolean                               | false  |          |
| strong    | 是否加粗            | boolean                               | false  |          |
| code      | 添加代码样式        | boolean                               | false  |          |
| component | 设置标签类型        | string \| React.JSX.IntrinsicElements | span   |          |
| rtl       | 是否以 rtl 模式展示 | boolean                               | false  |          |
