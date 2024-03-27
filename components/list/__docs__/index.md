# List

-   category: Components
-   family: DataDisplay
-   chinese: 列表
-   type: 展示

---

列表组件，1.19.4+ 版本支持。

## 何时使用

最基础的列表展示，可承载文字、列表、图片、段落。

## API

### List

| 参数             | 说明                                                                                                                                                                                                  | 类型                                               | 默认值   | 是否必填 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | -------- | -------- |
| header           | 列表头部                                                                                                                                                                                              | ReactNode                                          | -        |          |
| footer           | 列表尾部                                                                                                                                                                                              | ReactNode                                          | -        |          |
| size             | 列表尺寸                                                                                                                                                                                              | 'medium' \| 'small'                                | 'medium' |          |
| divider          | 是否显示分割线                                                                                                                                                                                        | boolean                                            | true     |          |
| children         | children                                                                                                                                                                                              | ReactNode                                          | -        |          |
| dataSource       | 列表项数据源                                                                                                                                                                                          | DataItem[]                                         | -        |          |
| renderItem       | 当使用 dataSource 时，可以用 renderItem 自定义渲染列表项<br/><br/>**签名**:<br/>**参数**:<br/>_current_: 当前遍历的项<br/>_index_: 当前遍历的项的索引<br/>**返回值**:<br/>- 自定义渲染的 ReactElement | (current: DataItem, index: number) => ReactElement | -        |          |
| loading          | loading 状态控制                                                                                                                                                                                      | boolean                                            | false    |          |
| loadingComponent | 自定义 Loading 组件<br/><br/>**签名**:<br/>**参数**:<br/>_props_: 透传 props<br/>**返回值**:<br/>- 自定义的 Loading 组件                                                                              | (props: LoadingProps) => ReactElement              | -        |          |
| emptyContent     | 当列表为空时显示的内容                                                                                                                                                                                | ReactNode                                          | -        |          |

### List.Item

| 参数        | 说明                             | 类型      | 默认值 | 是否必填 |
| ----------- | -------------------------------- | --------- | ------ | -------- |
| title       | 列表元素的标题                   | ReactNode | -      |          |
| description | 列表元素的描述内容               | ReactNode | -      |          |
| media       | 列表元素的头像 / 图标 / 图片内容 | ReactNode | -      |          |
| extra       | 额外内容                         | ReactNode | -      |          |
