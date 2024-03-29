# Select

-   category: Components
-   family: DataEntry
-   chinese: 选择器
-   type: 表单

---

选择组件。

## 何时使用

-   Select 用于替代原生 select，在限定的可选项内进行选择，核心能力是 `选择`
-   AutoComplete 本质上是带输入提示的 Input 组件，核心能力是 `辅助输入`

## 如何使用

-   Select 优先使用 `value` 作为渲染的菜单项的 `key` 值，所以 `value` 不能重复，否则无法渲染下拉菜单。如果没有设置 `key` 则会使用默认的序列 `index` 作为 `key` 值，确保这些值不会发生重复。
-   `value` 使用字符串类型，不允许出现 `null/undefined/object/array` 类型数值
-   Select 同时支持 `children` 和 `dataSource` 作为数据源，如果同时设置，则以 children 为准。
-   自定义弹出层一定要透传 `props`，参考下方示例的 `弹层定制`（因为 Overlay 的弹层的动画是依靠 `className` 实现的，如果不透传 props 则会造成无法监听到动画播放结束的事件。）

## API

### Select

| 参数                   | 说明                                                                                                                                                                                                    | 类型                                                                                                                             | 默认值                                | 是否必填 | 支持版本 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------- | -------- |
| size                   | 选择器尺寸                                                                                                                                                                                              | 'small' \| 'medium' \| 'large'                                                                                                   | 'medium'                              |          | -        |
| children               | 子元素，详细使用方法参考 demo                                                                                                                                                                           | ReactElementWithTypeMark \| ReactElementWithTypeMark[]                                                                           | -                                     |          | -        |
| name                   | name                                                                                                                                                                                                    | string                                                                                                                           | -                                     |          | -        |
| value                  | 当前值，用于受控模式                                                                                                                                                                                    | DataSourceItem \| DataSourceItem[]                                                                                               | -                                     |          | -        |
| defaultValue           | 初始的默认值                                                                                                                                                                                            | DataSourceItem \| DataSourceItem[]                                                                                               | -                                     |          | -        |
| placeholder            | 没有值的时候的占位符                                                                                                                                                                                    | string                                                                                                                           | -                                     |          | -        |
| autoWidth              | 下拉菜单的宽度是否与选择器保持统一                                                                                                                                                                      | boolean                                                                                                                          | true                                  |          | -        |
| label                  | 自定义内联 label                                                                                                                                                                                        | React.ReactNode                                                                                                                  | -                                     |          | -        |
| hasClear               | 是否有清除按钮（单选模式有效）                                                                                                                                                                          | boolean                                                                                                                          | -                                     |          | -        |
| state                  | 校验状态                                                                                                                                                                                                | 'error' \| 'loading' \| 'success' \| 'warning'                                                                                   | -                                     |          | -        |
| readOnly               | 是否只读，只读模式下可以展开弹层但不能选                                                                                                                                                                | boolean                                                                                                                          | -                                     |          | -        |
| disabled               | 是否禁用选择器                                                                                                                                                                                          | boolean                                                                                                                          | -                                     |          | -        |
| visible                | 当前弹层是否显示                                                                                                                                                                                        | boolean                                                                                                                          | -                                     |          | -        |
| defaultVisible         | 弹层初始化是否显示                                                                                                                                                                                      | boolean                                                                                                                          | -                                     |          | -        |
| onVisibleChange        | 弹层显示或隐藏时触发的回调                                                                                                                                                                              | (visible: boolean, type?: VisibleChangeType) => void                                                                             | -                                     |          | -        |
| popupContainer         | 弹层挂载的容器节点                                                                                                                                                                                      | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement)                                                                  | -                                     |          | -        |
| popupClassName         | 弹层的 className                                                                                                                                                                                        | string                                                                                                                           | -                                     |          | -        |
| popupStyle             | 弹层的内联样式                                                                                                                                                                                          | React.CSSProperties                                                                                                              | -                                     |          | -        |
| popupProps             | 添加到弹层上的属性                                                                                                                                                                                      | PopupProps                                                                                                                       | -                                     |          | -        |
| followTrigger          | 是否跟随 trigger 滚动                                                                                                                                                                                   | boolean                                                                                                                          | -                                     |          | -        |
| popupContent           | 自定义弹层的内容                                                                                                                                                                                        | React.ReactNode                                                                                                                  | -                                     |          | -        |
| menuProps              | 弹层菜单属性                                                                                                                                                                                            | MenuProps                                                                                                                        | -                                     |          | 1.18     |
| filterLocal            | 是否使用本地过滤，在数据源为远程的时候需要关闭此项                                                                                                                                                      | boolean                                                                                                                          | true                                  |          | -        |
| filter                 | 本地过滤方法，返回一个 Boolean 值确定是否保留<br/><br/>**签名**:<br/>**参数**:<br/>_key_: 搜索关键字<br/>_item_: 渲染节点的 item                                                                        | (key: string \| number, item: ObjectItem) => boolean                                                                             | -                                     |          | -        |
| onToggleHighlightItem  | 键盘上下键切换菜单高亮选项的回调                                                                                                                                                                        | (highlightKey?: unknown, type?: HighlightChangeType) => void                                                                     | -                                     |          | -        |
| useVirtual             | 是否开启虚拟滚动模式                                                                                                                                                                                    | boolean                                                                                                                          | -                                     |          | -        |
| dataSource             | 传入的数据源，可以动态渲染子项                                                                                                                                                                          | Array\<DataSourceItem>                                                                                                           | -                                     |          | -        |
| itemRender             | 渲染 MenuItem 内容的方法<br/><br/>**签名**:<br/>**参数**:<br/>_item_: 渲染节点的 item<br/>_searchValue_: 搜索关键字（如果开启搜索）                                                                     | (item: ObjectItem, searchValue: string \| undefined) => React.ReactNode                                                          | -                                     |          | -        |
| mode                   | 选择器模式                                                                                                                                                                                              | 'single' \| 'multiple' \| 'tag'                                                                                                  | 'single'                              |          | -        |
| notFoundContent        | 弹层内容为空的文案                                                                                                                                                                                      | React.ReactNode                                                                                                                  | -                                     |          | -        |
| onChange               | Select 发生改变时触发的回调<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 选中的值<br/>_actionType_: 触发的方式，'itemClick', 'enter', 'tag'<br/>_item_: 选中的值的对象数据 (useDetailValue=false 有效) | (<br/> value: DataSourceItem \| DataSourceItem[],<br/> actionType: string,<br/> item?: ObjectItem \| ObjectItem[]<br/> ) => void | -                                     |          | -        |
| hasBorder              | 是否有边框                                                                                                                                                                                              | boolean                                                                                                                          | -                                     |          | -        |
| hasArrow               | 是否有下拉箭头                                                                                                                                                                                          | boolean                                                                                                                          | true                                  |          | -        |
| showSearch             | 展开后是否能搜索（tag 模式下固定为 true）                                                                                                                                                               | boolean                                                                                                                          | false                                 |          | -        |
| onSearch               | 当搜索框值变化时回调                                                                                                                                                                                    | (value: string, e: React.ChangeEvent\<HTMLInputElement>) => void                                                                 | -                                     |          | -        |
| onSearchClear          | 当搜索框值被清空时候的回调                                                                                                                                                                              | (actionType?: string) => void                                                                                                    | -                                     |          | -        |
| hasSelectAll           | 多选模式下是否有全选功能                                                                                                                                                                                | boolean \| string                                                                                                                | -                                     |          | -        |
| fillProps              | 填充到选择框里的值的 key                                                                                                                                                                                | string                                                                                                                           | -                                     |          | -        |
| useDetailValue         | onChange 返回的 value 使用 dataSource 的对象                                                                                                                                                            | boolean                                                                                                                          | -                                     |          | -        |
| cacheValue             | dataSource 变化的时是否保留已选的内容                                                                                                                                                                   | boolean                                                                                                                          | true                                  |          | -        |
| valueRender            | 自定义渲染 Select 选中值的效果                                                                                                                                                                          | (item: ObjectItem, props?: SelectProps) => React.ReactNode                                                                       | item =\> `item.label \|\| item.value` |          | -        |
| searchValue            | 受控搜索值，一般不需要设置                                                                                                                                                                              | string                                                                                                                           | -                                     |          | -        |
| tagInline              | 是否一行显示，仅在 mode 为 multiple 的时候生效                                                                                                                                                          | boolean                                                                                                                          | false                                 |          | -        |
| maxTagCount            | 最多显示多少个 tag                                                                                                                                                                                      | number                                                                                                                           | -                                     |          | -        |
| adjustTagSize          | tag 尺寸是否和 select 尺寸保持一致，仅在 multiple/tag 模式下有用                                                                                                                                        | boolean                                                                                                                          | false                                 |          | 1.24     |
| maxTagPlaceholder      | 隐藏多余 tag 时显示的内容，在 maxTagCount 生效时起作用<br/><br/>**签名**:<br/>**参数**:<br/>_selectedValues_: 当前已选中的元素<br/>_totalValues_: 总待选元素                                            | (<br/> selectedValues: ObjectItem[],<br/> totalValues: ObjectItem[]<br/> ) => React.ReactNode \| HTMLElement                     | -                                     |          | -        |
| hiddenSelected         | 选择后是否立即隐藏菜单 (mode=multiple/tag 模式生效)                                                                                                                                                     | boolean                                                                                                                          | -                                     |          | -        |
| showDataSourceChildren | 是否展示 dataSource 中 children                                                                                                                                                                         | boolean                                                                                                                          | true                                  |          | -        |
| onRemove               | tag 删除回调                                                                                                                                                                                            | (item: ObjectItem) => void                                                                                                       | -                                     |          | -        |
| onFocus                | Select 获得焦点时的回调                                                                                                                                                                                 | (e: React.FocusEvent\<HTMLInputElement>) => void                                                                                 | -                                     |          | -        |
| onBlur                 | Select 失去焦点时的回调                                                                                                                                                                                 | (e: React.FocusEvent\<HTMLInputElement>) => void                                                                                 | -                                     |          | -        |
| onKeyDown              | Select 触发键盘事件时的回调                                                                                                                                                                             | (e: React.KeyboardEvent\<HTMLElement>) => void                                                                                   | -                                     |          | -        |
| isPreview              | 是否为预览态                                                                                                                                                                                            | boolean                                                                                                                          | -                                     |          | -        |
| renderPreview          | 渲染预览态的内容<br/><br/>**签名**:<br/>**参数**:<br/>_values_: 选中的值<br/>_props_: 当前的属性                                                                                                        | (<br/> values: DataSourceItem \| DataSourceItem[],<br/> props?: SelectProps<br/> ) => React.ReactNode                            | -                                     |          | -        |
| autoHighlightFirstItem | 自动高亮第一个选项                                                                                                                                                                                      | boolean                                                                                                                          | true                                  |          | -        |
| highlightKey           | 高亮 key                                                                                                                                                                                                | string                                                                                                                           | -                                     |          | -        |
| defaultHighlightKey    | 默认高亮 key                                                                                                                                                                                            | string \| null                                                                                                                   | -                                     |          | -        |
| popupAutoFocus         | 展开下拉菜单时是否自动焦点到弹层                                                                                                                                                                        | boolean                                                                                                                          | false                                 |          | -        |
| popupComponent         | 渲染弹层使用的组件                                                                                                                                                                                      | React.FunctionComponent \| React.ComponentClass \| string                                                                        | -                                     |          | -        |
| tagClosable            | 是否可以关闭 tag                                                                                                                                                                                        | boolean                                                                                                                          | true                                  |          | 1.20     |

### Select.AutoComplete

| 参数                   | 说明                                               | 类型                                                            | 默认值   | 是否必填 |
| ---------------------- | -------------------------------------------------- | --------------------------------------------------------------- | -------- | -------- |
| size                   | 选择器尺寸                                         | 'small' \| 'medium' \| 'large'                                  | 'medium' |          |
| value                  | 当前值，用于受控模式                               | string \| number \| null                                        | -        |          |
| defaultValue           | 初始化的默认值                                     | string \| number                                                | -        |          |
| placeholder            | 没有值的时候的占位符                               | string                                                          | -        |          |
| autoWidth              | 下拉菜单的宽度是否与选择器保持统一                 | boolean                                                         | true     |          |
| label                  | 自定义内联 label                                   | React.ReactNode                                                 | -        |          |
| hasClear               | 是否有清除按钮（单选模式有效）                     | boolean                                                         | -        |          |
| state                  | 校验状态                                           | 'error' \| 'loading' \| 'success' \| 'warning'                  | -        |          |
| readOnly               | 是否只读，只读模式下可以展开弹层但不能选           | boolean                                                         | -        |          |
| disabled               | 是否禁用选择器                                     | boolean                                                         | -        |          |
| visible                | 当前弹层是否显示                                   | boolean                                                         | -        |          |
| defaultVisible         | 弹层初始化是否显示                                 | boolean                                                         | -        |          |
| onVisibleChange        | 弹层显示或隐藏时触发的回调                         | (visible: boolean, type?: VisibleChangeType) => void            | -        |          |
| popupContainer         | 弹层挂载的容器节点                                 | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement) | -        |          |
| popupClassName         | 弹层的 className                                   | string                                                          | -        |          |
| popupStyle             | 弹层的内联样式                                     | React.CSSProperties                                             | -        |          |
| popupProps             | 添加到弹层上的属性                                 | PopupProps                                                      | -        |          |
| popupContent           | 自定义弹层的内容                                   | React.ReactNode                                                 | -        |          |
| followTrigger          | 是否跟随 trigger 滚动                              | boolean                                                         | -        |          |
| filterLocal            | 是否使用本地过滤，在数据源为远程的时候需要关闭此项 | boolean                                                         | true     |          |
| filter                 | 本地过滤方法，返回一个 Boolean 值确定是否保留      | (key: string \| number, item: ObjectItem) => boolean            | -        |          |
| onToggleHighlightItem  | 键盘上下键切换菜单高亮选项的回调                   | (highlightKey: unknown, ...args: unknown[]) => void             | -        |          |
| useVirtual             | 是否开启虚拟滚动模式                               | boolean                                                         | -        |          |
| dataSource             | 传入的数据源，可以动态渲染子项                     | Array\<DataSourceItem>                                          | -        |          |
| itemRender             | 渲染 MenuItem 内容的方法                           | (item: ObjectItem) => React.ReactNode                           | -        |          |
| onChange               | AutoComplete 发生改变时触发的回调                  | (value: string, actionType: string, item?: ObjectItem) => void  | -        |          |
| onKeyDown              | -                                                  | (e: React.KeyboardEvent\<HTMLElement>) => void                  | -        |          |
| fillProps              | 填充到选择框里的值的 key                           | string                                                          | 'value'  |          |
| autoHighlightFirstItem | 自动高亮第一个选项                                 | boolean                                                         | true     |          |
| highlightKey           | 高亮 key                                           | string                                                          | -        |          |
| defaultHighlightKey    | 默认高亮 key                                       | string                                                          | -        |          |
| onFocus                | AutoComplete 获得焦点时的回调                      | InputProps['onFocus']                                           | -        |          |
| children               | 子元素，详细使用方法参考 demo                      | ReactElementWithTypeMark \| ReactElementWithTypeMark[]          | -        |          |
| highlightHolder        | 是否将当前高亮的选项作为 placeholder               | boolean                                                         | -        |          |

### Select.OptionGroup

| 参数  | 说明           | 类型            | 默认值 | 是否必填 |
| ----- | -------------- | --------------- | ------ | -------- |
| label | 设置分组的文案 | React.ReactNode | -      |          |

### Select.Option

| 参数     | 说明     | 类型                                             | 默认值 | 是否必填 |
| -------- | -------- | ------------------------------------------------ | ------ | -------- |
| value    | 选项值   | string \| number \| boolean \| null \| undefined | -      | 是       |
| disabled | 是否禁用 | boolean                                          | -      |          |

### ObjectItem

| 参数        | 说明 | 类型                                             | 默认值 | 是否必填 |
| ----------- | ---- | ------------------------------------------------ | ------ | -------- |
| value       | -    | string \| number \| boolean \| null \| undefined | -      |          |
| label       | -    | string \| number \| boolean                      | -      |          |
| color       | -    | string                                           | -      |          |
| disabled    | -    | boolean                                          | -      |          |
| children    | -    | DataSourceItem[]                                 | -      |          |
| title       | -    | string                                           | -      |          |
| \_\_isAddon | -    | boolean                                          | -      |          |

### DataSourceItem

```typescript
export type DataSourceItem = ObjectItem | string | boolean | number | null | undefined;
```

### VisibleChangeType

```typescript
export type VisibleChangeType =
    | 'itemClick'
    | 'enter'
    | 'esc'
    | 'keyDown'
    | 'selectAll'
    | 'update'
    | 'change'
    | 'tag';
```

### HighlightChangeType

```typescript
export type HighlightChangeType = 'up' | 'down' | 'autoFirstItem' | 'highlightKeyToNull';
```

## Select/AutoComplete 内部函数 (通过 refs 获取)

| 参数  | 说明                                                                                                                                             | 类型     | 默认值 |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ |
| focus | 获取焦点<br><br>**签名**:<br> Function(start:Number, end: Number)<br>**参数**:<br>_start_: {Number} 光标起始位置<br>_end_: {Number} 选择结束位置 | Function |        |

## 无障碍键盘操作指南

| 按键       | 说明                 |
| :--------- | :------------------- |
| Up Arrow   | 获取当前项前一项焦点 |
| Down Arrow | 获取当前项后一项焦点 |
| Enter      | 打开列表或选择当前项 |
| Esc        | 关闭列表             |
