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

| 参数               | 说明                                                                                                                                                                                                                                                       | 类型        | 默认值          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------ |
| header           | 列表头部                                                                                                                                                                                                                                                     | ReactNode | -            |
| size             | 列表尺寸<br><br>**可选值**:<br>'medium', 'small'                                                                                                                                                                                                                | Enum      | 'medium'     |
| footer           | 列表尾部                                                                                                                                                                                                                                                     | ReactNode | -            |
| divider          | 是否显示分割线                                                                                                                                                                                                                                                  | Boolean   | true         |
| dataSource       | 列表数据源                                                                                                                                                                                                                                                    | Array     | -            |
| renderItem       | 当使用 dataSource 时，可以用 renderItem 自定义渲染列表项<br><br>**签名**:<br>Function(current: Any, index: Number) => void<br>**参数**:<br>_current_: {Any} 当前遍历的项<br>_index_: {Number} 当前遍历的项的索引                                                                            | Function  | item => item |
| loading          | 是否在加载中                                                                                                                                                                                                                                                   | Boolean   | false        |
| loadingComponent | 自定义 Loading 组件<br>请务必传递 props, 使用方式： loadingComponent={props => &lt;Loading {...props}/>}<br><br>**签名**:<br>Function(props: LoadingProps) => React.ReactNode<br>**参数**:<br>_props_: {LoadingProps} 需要透传给组件的参数<br>**返回值**:<br>{React.ReactNode} 展示的组件<br> | Function  | -            |
| emptyContent     | 设置数据为空的时候的表格内容展现                                                                                                                                                                                                                                         | ReactNode | -            |

### List.Item

| 参数          | 说明                  | 类型        | 默认值 |
| ----------- | ------------------- | --------- | --- |
| title       | 列表元素的标题             | ReactNode | -   |
| description | 列表元素的描述内容           | ReactNode | -   |
| media       | 列表元素的头像 / 图标 / 图片内容 | ReactNode | -   |
| extra       | 额外内容                | ReactNode | -   |
