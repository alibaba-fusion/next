# TreeSelect

-   category: Components
-   family: DataEntry
-   chinese: 树型选择控件
-   type: 基本

---

树型选择控件。

## 何时使用

类似 `Select` 的选择控件，可选择的数据结构是一个树形结构时，可以使用 `TreeSelect`，例如公司层级、学科系统、分类目录等等。

## API

### TreeSelect

| 参数                     | 说明                                                                                                                                                                                                                                                   | 类型                                                                                                           | 默认值                                | 是否必填 | 支持版本 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------- | -------- |
| children                 | 树节点                                                                                                                                                                                                                                                 | React.ReactNode                                                                                                | -                                     |          | -        |
| size                     | 选择框大小                                                                                                                                                                                                                                             | 'small' \| 'medium' \| 'large'                                                                                 | 'medium'                              |          | -        |
| placeholder              | 选择框占位符                                                                                                                                                                                                                                           | string                                                                                                         | -                                     |          | -        |
| disabled                 | 是否禁用                                                                                                                                                                                                                                               | boolean                                                                                                        | false                                 |          | -        |
| hasArrow                 | 是否有下拉箭头                                                                                                                                                                                                                                         | boolean                                                                                                        | true                                  |          | -        |
| hasBorder                | 是否有边框                                                                                                                                                                                                                                             | boolean                                                                                                        | true                                  |          | -        |
| hasClear                 | 是否有清空按钮                                                                                                                                                                                                                                         | boolean                                                                                                        | true                                  |          | -        |
| label                    | 自定义内联 label                                                                                                                                                                                                                                       | React.ReactNode                                                                                                | -                                     |          | -        |
| readOnly                 | 是否只读，只读模式下可以展开弹层但不能选择                                                                                                                                                                                                             | boolean                                                                                                        | -                                     |          | -        |
| autoWidth                | 下拉框是否与选择器对齐                                                                                                                                                                                                                                 | boolean                                                                                                        | true                                  |          | -        |
| dataSource               | 数据源，该属性优先级高于 children                                                                                                                                                                                                                      | DataSourceItem[]                                                                                               | -                                     |          | -        |
| value                    | （受控）当前值                                                                                                                                                                                                                                         | DataSourceItem[] \| DataSourceItem                                                                             | -                                     |          | -        |
| defaultValue             | （非受控）默认值                                                                                                                                                                                                                                       | SelectProps['defaultValue']                                                                                    | null                                  |          | -        |
| preserveNonExistentValue | value/defaultValue 在 dataSource 中不存在时，是否展示                                                                                                                                                                                                  | boolean                                                                                                        | false                                 |          | 1.25     |
| onChange                 | 选中值改变时触发的回调函数                                                                                                                                                                                                                             | (<br/> value: DataSourceItem[] \| DataSourceItem,<br/> data: ObjectItem[] \| ObjectItem \| null<br/> ) => void | () =\> \{\}                           |          | -        |
| tagInline                | 是否一行显示，仅在 multiple 和 treeCheckable 为 true 时生效                                                                                                                                                                                            | boolean                                                                                                        | false                                 |          | 1.25     |
| maxTagPlaceholder        | 隐藏多余 tag 时显示的内容，在 tagInline 生效时起作用<br/><br/>**签名**:<br/>**参数**:<br/>_selectedValues_: 当前已选中的元素<br/>_totalValues_: 总待选元素，treeCheckedStrategy = 'parent' 时为 undefined<br/>**返回值**:<br/>ReactNode \| HTMLElement | (<br/> selectedValues: ObjectItem[],<br/> totalValues?: ObjectItem[]<br/> ) => React.ReactNode \| HTMLElement  | -                                     |          | 1.25     |
| autoClearSearch          | 是否自动清除 searchValue                                                                                                                                                                                                                               | boolean                                                                                                        | true                                  |          | 1.26     |
| showSearch               | 是否显示搜索框                                                                                                                                                                                                                                         | boolean                                                                                                        | false                                 |          | -        |
| onSearch                 | 在搜索框中输入时触发的回调函数                                                                                                                                                                                                                         | (keyword: string) => void                                                                                      | () =\> \{\}                           |          | -        |
| notFoundContent          | 无数据时显示内容                                                                                                                                                                                                                                       | React.ReactNode                                                                                                | 'Not Found'                           |          | -        |
| multiple                 | 是否支持多选                                                                                                                                                                                                                                           | boolean                                                                                                        | false                                 |          | -        |
| treeCheckable            | 下拉框中的树是否支持勾选节点的复选框                                                                                                                                                                                                                   | boolean                                                                                                        | false                                 |          | -        |
| treeCheckStrictly        | 下拉框中的树勾选节点复选框是否完全受控（父子节点选中状态不再关联）                                                                                                                                                                                     | boolean                                                                                                        | false                                 |          | -        |
| treeCheckedStrategy      | 定义选中时回填的方式                                                                                                                                                                                                                                   | 'all' \| 'parent' \| 'child'                                                                                   | 'parent'                              |          | -        |
| treeDefaultExpandAll     | 下拉框中的树是否默认展开所有节点                                                                                                                                                                                                                       | boolean                                                                                                        | false                                 |          | -        |
| treeDefaultExpandedKeys  | 下拉框中的树默认展开节点key的数组                                                                                                                                                                                                                      | Array\<Key>                                                                                                    | []                                    |          | -        |
| treeLoadData             | 下拉框中的树异步加载数据的函数，使用请参考[Tree的异步加载数据Demo](https://fusion.design/pc/component/basic/tree#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE)                                                                               | TreeProps['loadData']                                                                                          | -                                     |          | -        |
| treeProps                | 透传到 Tree 的属性对象                                                                                                                                                                                                                                 | TreeProps                                                                                                      | \{\}                                  |          | -        |
| defaultVisible           | 初始下拉框是否显示                                                                                                                                                                                                                                     | boolean                                                                                                        | false                                 |          | -        |
| visible                  | 当前下拉框是否显示                                                                                                                                                                                                                                     | boolean                                                                                                        | -                                     |          | -        |
| onVisibleChange          | 下拉框显示或关闭时触发事件的回调函数                                                                                                                                                                                                                   | (visible: boolean, type: string) => void                                                                       | () =\> \{\}                           |          | -        |
| popupStyle               | 下拉框自定义样式对象                                                                                                                                                                                                                                   | React.CSSProperties                                                                                            | -                                     |          | -        |
| popupClassName           | 下拉框样式自定义类名                                                                                                                                                                                                                                   | string                                                                                                         | -                                     |          | -        |
| popupContainer           | 下拉框挂载的容器节点                                                                                                                                                                                                                                   | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement)                                                | -                                     |          | -        |
| popupProps               | 透传到 Popup 的属性对象                                                                                                                                                                                                                                | PopupProps                                                                                                     | -                                     |          | -        |
| followTrigger            | 是否跟随滚动                                                                                                                                                                                                                                           | boolean                                                                                                        | -                                     |          | -        |
| isPreview                | 是否为预览态                                                                                                                                                                                                                                           | boolean                                                                                                        | -                                     |          | -        |
| renderPreview            | 预览态模式下渲染的内容                                                                                                                                                                                                                                 | (data: ObjectItem[], props: TreeSelectProps) => React.ReactNode                                                | -                                     |          | -        |
| useVirtual               | 是否开启虚拟滚动                                                                                                                                                                                                                                       | boolean                                                                                                        | false                                 |          | -        |
| filterLocal              | 是否关闭本地搜索                                                                                                                                                                                                                                       | boolean                                                                                                        | true                                  |          | -        |
| immutable                | 是否是不可变数据                                                                                                                                                                                                                                       | boolean                                                                                                        | -                                     |          | 1.23     |
| clickToCheck             | 点击文本是否可以勾选                                                                                                                                                                                                                                   | boolean                                                                                                        | false                                 |          | -        |
| valueRender              | 渲染 Select 区域展现内容的方法<br/><br/>**签名**:<br/>**参数**:<br/>_item_: 渲染项<br/>_itemPaths_: 渲染项在dataSource内的路径<br/>**返回值**:<br/>ReactNode - 展现内容                                                                                | (item: TreeSelectState['\_k2n'][Key], itemPaths: ObjectItem[]) => React.ReactNode                              | (item) =\> item.label \|\| item.value |          | -        |

<!-- api-extra-start -->

### TreeSelect.Node

| 参数             | 说明                                           | 类型      | 默认值 |
| ---------------- | ---------------------------------------------- | --------- | ------ |
| children         | 树节点                                         | ReactNode | -      |
| label            | 节点文本内容                                   | ReactNode | '---'  |
| selectable       | 单独设置是否支持选中，覆盖 Tree 的 selectable  | Boolean   | -      |
| checkable        | 单独设置是否出现复选框，覆盖 Tree 的 checkable | Boolean   | -      |
| editable         | 单独设置是否支持编辑，覆盖 Tree 的 editable    | Boolean   | -      |
| draggable        | 单独设置是否支持拖拽，覆盖 Tree 的 draggable   | Boolean   | -      |
| disabled         | 是否禁止节点响应                               | Boolean   | false  |
| checkboxDisabled | 是否禁止勾选节点复选框                         | Boolean   | false  |
| isLeaf           | 是否是叶子节点，设置 loadData 时生效           | Boolean   | false  |

### dataSource 数据结构

```js
const dataSource = [
    {
        label: '服装',
        value: '1',
        key: '1',
        selectable: false,
        children: [
            {
                label: '男装',
                value: '2',
                key: '2',
                children: [
                    {
                        label: '外套',
                        value: '4',
                        key: '4',
                        disableCheckbox: true,
                    },
                    {
                        label: '夹克',
                        value: '5',
                        key: '5',
                        disabled: true,
                    },
                ],
            },
            {
                label: '女装',
                value: '3',
                key: '3',
                children: [
                    {
                        label: '裙子',
                        value: '6',
                        key: '6',
                    },
                ],
            },
        ],
    },
];
```

如果不传入 key，TreeSelect 会使用内部计算出来的位置字符串作为 key 值，如果你想指定诸如 treeDefaultExpandedKeys 这样的属性，请传入自定义的 key 值，让它和 value 是一个值，是一个很好的办法。

<!-- api-extra-end -->

## 无障碍键盘操作指南

| 按键        | 说明                                   |
| :---------- | :------------------------------------- |
| Enter       | 打开选择树或选择某一项                 |
| Up Arrow    | 获取同级当前项前一项焦点               |
| Down Arrow  | 获取同级当前项后一项焦点               |
| Right Arrow | 打开当前元素的下一级子树并聚焦到第一项 |
| Left Arrow  | 返回到当前元素的父节点并关闭当前子树   |
