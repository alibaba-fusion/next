# Typography

-   category: Components
-   family: General
-   chinese: 排版
-   type: 基本

---

文本的基本格式。

## 何时使用

-   当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。

## API

### Typography

> 继承 Typography.Text API

| 参数        | 说明     | 类型     | 默认值       |
| --------- | ------ | ------ | --------- |
| component | 设置标签类型 | custom | 'article' |

### Typography.Paragraph

> 继承 Typography.Text 的 API

| 参数        | 说明     | 类型     | 默认值 |
| --------- | ------ | ------ | --- |
| component | 设置标签类型 | custom | 'p' |

### Typography.Text

| 参数        | 说明      | 类型      | 默认值    |
| --------- | ------- | ------- | ------ |
| delete    | 添加删除线样式 | Boolean | false  |
| mark      | 添加标记样式  | Boolean | false  |
| underline | 添加下划线样式 | Boolean | false  |
| strong    | 是否加粗    | Boolean | false  |
| code      | 添加代码样式  | Boolean | false  |
| component | 设置标签类型  | custom  | 'span' |

<!-- api-extra-start -->

### Typography.Title

> 分为 H1, H2, H3, H4, H5, H6 组件，代表不同层级的标题
> 继承 Typography.Text 的 API

<!-- api-extra-end -->
