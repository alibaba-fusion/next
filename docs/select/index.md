# Select

-   category: Components
-   family: DataEntry
-   chinese: 选择器
-   type: 表单

---

## Guide

### 何时使用

#### Select

如果你不期望用户输入的值生效而仅仅是选择，那么使用 Select. 同时可以使用 Select 的 showSearch 属性进行过滤。

### AutoComplete

AutoComplete 会保留用户输入的值，本质上是 Input 组件，扩展了 autocomplete 的能力，所以 Input 组件的属性可以直接透传。

### 常见问题

#### 出现类似的`flatternChildren`的warning

Select 默认使用 `value` 作为菜单项的 key，如果没有设置 key 值，则使用默认的序列 index 作为 key 值，确保这些值不会发生重复。

#### dataSource的使用

Select 同时支持 children 和在 props 中传入 dataSource 作为数据源, 如果同时设置, 则以 children 为准.

注意：1. Select 默认使用 `value` 作为渲染的菜单项的 `key` 值，所以 `value` 不能重复, 否则无法渲染下拉菜单。2. value 不允许出现 null/undefined/object/array 类型数值

1.  `children`的方式

```js
<Select>
    <Select.Option value="option1">option1</Select.Option>
    <Select.Option value="option2">option2</Select.Option>
    <Select.Option disabled>disabled</Select.Option>
</Select>;
```

2.  `props`的方式

```js
const dataSource = [
    {label:'option1', value:'option1'},
    {label:'option2', value:'option2'},
    {label:'disabled', disabled:true}
];

<Select dataSource={dataSource}/>
```

#### 定制弹出层

参见示例中的 `弹层定制`。唯一需要注意的是 `overlay` 的元素记得透传 props.
这是因为 Overlay 的弹层的动画是依靠 `className` 实现的，如果不透传 props 则会造成无法监听到动画播放结束的事件。

## API

### Select

| 参数                     | 说明                                                                                                                                                                                                                                                        | 类型                                     | 默认值                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ---------------------------------- |
| size                   | 选择器尺寸<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                                                                                                                                       | Enum                                   | 'medium'                           |
| value                  | 当前值，用于受控模式                                                                                                                                                                                                                                                | any                                    | -                                  |
| defaultValue           | 初始的默认值                                                                                                                                                                                                                                                    | any                                    | -                                  |
| placeholder            | 没有值的时候的占位符                                                                                                                                                                                                                                                | String                                 | -                                  |
| autoWidth              | 下拉菜单是否与选择器对齐                                                                                                                                                                                                                                              | Boolean                                | true                               |
| label                  | 自定义内联 label                                                                                                                                                                                                                                               | ReactNode                              | -                                  |
| hasClear               | 是否有清除按钮（单选模式有效）                                                                                                                                                                                                                                           | Boolean                                | -                                  |
| state                  | 校验状态<br><br>**可选值**:<br>'error', 'loading'                                                                                                                                                                                                                | Enum                                   | -                                  |
| readOnly               | 是否只读，只读模式下可以展开弹层但不能选                                                                                                                                                                                                                                      | Boolean                                | -                                  |
| disabled               | 是否禁用选择器                                                                                                                                                                                                                                                   | Boolean                                | -                                  |
| visible                | 当前弹层是否显示                                                                                                                                                                                                                                                  | Boolean                                | -                                  |
| defaultVisible         | 弹层初始化是否显示                                                                                                                                                                                                                                                 | Boolean                                | -                                  |
| onVisibleChange        | 弹层显示或隐藏时触发的回调<br><br>**签名**:<br>Function(visible: Boolean, type: String) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否显示<br>_type_: {String} 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发           | Function                               | func.noop                          |
| popupContainer         | 弹层挂载的容器节点                                                                                                                                                                                                                                                 | any                                    | -                                  |
| popupClassName         | 弹层的 className                                                                                                                                                                                                                                             | any                                    | -                                  |
| popupStyle             | 弹层的内联样式                                                                                                                                                                                                                                                   | Object                                 | -                                  |
| popupProps             | 添加到弹层上的属性                                                                                                                                                                                                                                                 | Object                                 | {}                                 |
| followTrigger          | 是否跟随滚动                                                                                                                                                                                                                                                    | Boolean                                | -                                  |
| popupContent           | 自定义弹层的内容                                                                                                                                                                                                                                                  | ReactNode                              | -                                  |
| menuProps              | 添加到菜单上的属性                                                                                                                                                                                                                                                 | Object                                 | -                                  |
| filterLocal            | 是否使用本地过滤，在数据源为远程的时候需要关闭此项                                                                                                                                                                                                                                 | Boolean                                | true                               |
| filter                 | 本地过滤方法，返回一个 Boolean 值确定是否保留<br><br>**签名**:<br>Function() => void                                                                                                                                                                                          | Function                               | filter                             |
| onToggleHighlightItem  | 键盘上下键切换菜单高亮选项的回调<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                     | Function                               | func.noop                          |
| useVirtual             | 是否开启虚拟滚动模式                                                                                                                                                                                                                                                | Boolean                                | -                                  |
| dataSource             | 传入的数据源，可以动态渲染子项，详见 [dataSource的使用](#dataSource的使用)                                                                                                                                                                                                        | Array&lt;Object/Boolean/Number/String> | -                                  |
| itemRender             | 渲染 MenuItem 内容的方法<br><br>**签名**:<br>Function(item: Object, searchValue: String) => ReactNode<br>**参数**:<br>_item_: {Object} 渲染节点的item<br>_searchValue_: {String} 搜索关键字（如果开启搜索）<br>**返回值**:<br>{ReactNode} item node<br>                                   | Function                               | -                                  |
| mode                   | 选择器模式<br><br>**可选值**:<br>'single', 'multiple', 'tag'                                                                                                                                                                                                      | Enum                                   | 'single'                           |
| notFoundContent        | 弹层内容为空的文案                                                                                                                                                                                                                                                 | ReactNode                              | -                                  |
| isPreview              | 是否为预览态                                                                                                                                                                                                                                                    | Boolean                                | -                                  |
| renderPreview          | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: number) => void<br>**参数**:<br>_value_: {number} 评分值                                                                                                                                                         | Function                               | -                                  |
| autoHighlightFirstItem | 自动高亮第一个元素                                                                                                                                                                                                                                                 | Boolean                                | true                               |
| onChange               | Select发生改变时触发的回调<br><br>**签名**:<br>Function(value: mixed, actionType: String, item: mixed) => void<br>**参数**:<br>_value_: {mixed} 选中的值<br>_actionType_: {String} 触发的方式, 'itemClick', 'enter', 'tag'<br>_item_: {mixed} 选中的值的对象数据 (useDetailValue=false有效) | Function                               | -                                  |
| hasBorder              | 是否有边框                                                                                                                                                                                                                                                     | Boolean                                | -                                  |
| hasArrow               | 是否有下拉箭头                                                                                                                                                                                                                                                   | Boolean                                | true                               |
| showSearch             | 展开后是否能搜索（tag 模式下固定为true）                                                                                                                                                                                                                                  | Boolean                                | false                              |
| onSearch               | 当搜索框值变化时回调<br><br>**签名**:<br>Function(value: String) => void<br>**参数**:<br>_value_: {String} 数据                                                                                                                                                           | Function                               | func.noop                          |
| onSearchClear          | 当搜索框值被清空时候的回调<br><br>**签名**:<br>Function(actionType: String) => void<br>**参数**:<br>_actionType_: {String} 触发的方式, 'select'(选择清空), 'popupClose'(弹窗关闭清空)                                                                                                     | Function                               | func.noop                          |
| hasSelectAll           | 多选模式下是否有全选功能                                                                                                                                                                                                                                              | Boolean/String                         | -                                  |
| fillProps              | 填充到选择框里的值的 key                                                                                                                                                                                                                                          | String                                 | -                                  |
| useDetailValue         | onChange 返回的 value 使用 dataSource 的对象                                                                                                                                                                                                                      | Boolean                                | -                                  |
| cacheValue             | dataSource 变化的时是否保留已选的内容                                                                                                                                                                                                                                  | Boolean                                | true                               |
| valueRender            | 渲染 Select 展现内容的方法<br><br>**签名**:<br>Function(item: Object) => ReactNode<br>**参数**:<br>_item_: {Object} 渲染节点的item<br>**返回值**:<br>{ReactNode} 展现内容<br>                                                                                                      | Function                               | item => item.label \|\| item.value |
| searchValue            | 受控搜索值，一般不需要设置                                                                                                                                                                                                                                             | String                                 | -                                  |
| tagInline              | 是否一行显示，仅在 mode 为 multiple 的时候生效                                                                                                                                                                                                                           | Boolean                                | false                              |
| maxTagCount            | 最多显示多少个 tag                                                                                                                                                                                                                                               | Number                                 | -                                  |
| maxTagPlaceholder      | 隐藏多余 tag 时显示的内容，在 maxTagCount 生效时起作用<br><br>**签名**:<br>Function(selectedValues: number, totalValues: number) => void<br>**参数**:<br>_selectedValues_: {number} 当前已选中的元素<br>_totalValues_: {number} 总待选元素                                                   | Function                               | -                                  |
| hiddenSelected         | 选择后是否立即隐藏菜单 (mode=multiple/tag 模式生效)                                                                                                                                                                                                                      | Boolean                                | -                                  |
| onRemove               | tag 删除回调<br><br>**签名**:<br>Function(item: object) => void<br>**参数**:<br>_item_: {object} 渲染节点的item                                                                                                                                                        | Function                               | func.noop                          |
| onFocus                | 焦点事件<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                                 | Function                               | func.noop                          |
| onBlur                 | 失去焦点事件<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                               | Function                               | func.noop                          |
| popupAutoFocus         | 展开下拉菜单时是否自动焦点到弹层                                                                                                                                                                                                                                          | Boolean                                | false                              |

### Select.AutoComplete

| 参数                     | 说明                                                                                                                                                                                                                                              | 类型                      | 默认值       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------- |
| size                   | 选择器尺寸<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                                                                                                                             | Enum                    | 'medium'  |
| value                  | 当前值，用于受控模式                                                                                                                                                                                                                                      | String/Number           | -         |
| defaultValue           | 初始化的默认值                                                                                                                                                                                                                                         | String/Number           | -         |
| placeholder            | 没有值的时候的占位符                                                                                                                                                                                                                                      | String                  | -         |
| autoWidth              | 下拉菜单是否与选择器对齐                                                                                                                                                                                                                                    | Boolean                 | true      |
| label                  | 自定义内联 label                                                                                                                                                                                                                                     | ReactNode               | -         |
| hasClear               | 是否有清除按钮（单选模式有效）                                                                                                                                                                                                                                 | Boolean                 | -         |
| state                  | 校验状态<br><br>**可选值**:<br>'error', 'loading'                                                                                                                                                                                                      | Enum                    | -         |
| readOnly               | 是否只读，只读模式下可以展开弹层但不能选                                                                                                                                                                                                                            | Boolean                 | -         |
| disabled               | 是否禁用选择器                                                                                                                                                                                                                                         | Boolean                 | -         |
| visible                | 当前弹层是否显示                                                                                                                                                                                                                                        | Boolean                 | -         |
| defaultVisible         | 弹层初始化是否显示                                                                                                                                                                                                                                       | Boolean                 | -         |
| onVisibleChange        | 弹层显示或隐藏时触发的回调<br><br>**签名**:<br>Function(visible: Boolean, type: String) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否显示<br>_type_: {String} 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发 | Function                | func.noop |
| popupContainer         | 弹层挂载的容器节点                                                                                                                                                                                                                                       | any                     | -         |
| popupClassName         | 弹层的 className                                                                                                                                                                                                                                   | any                     | -         |
| popupStyle             | 弹层的内联样式                                                                                                                                                                                                                                         | Object                  | -         |
| popupProps             | 添加到弹层上的属性                                                                                                                                                                                                                                       | Object                  | {}        |
| followTrigger          | 是否跟随滚动                                                                                                                                                                                                                                          | Boolean                 | -         |
| popupContent           | 自定义弹层的内容                                                                                                                                                                                                                                        | ReactNode               | -         |
| menuProps              | 添加到菜单上的属性                                                                                                                                                                                                                                       | Object                  | -         |
| filterLocal            | 是否使用本地过滤，在数据源为远程的时候需要关闭此项                                                                                                                                                                                                                       | Boolean                 | true      |
| filter                 | 本地过滤方法，返回一个 Boolean 值确定是否保留<br><br>**签名**:<br>Function() => void                                                                                                                                                                                | Function                | filter    |
| onToggleHighlightItem  | 键盘上下键切换菜单高亮选项的回调<br><br>**签名**:<br>Function() => void                                                                                                                                                                                           | Function                | func.noop |
| useVirtual             | 是否开启虚拟滚动模式                                                                                                                                                                                                                                      | Boolean                 | -         |
| dataSource             | 传入的数据源，可以动态渲染子项                                                                                                                                                                                                                                 | Array&lt;Object/String> | -         |
| itemRender             | 渲染 MenuItem 内容的方法<br><br>**签名**:<br>Function(item: Object) => ReactNode<br>**参数**:<br>_item_: {Object} 渲染节点的 item<br>**返回值**:<br>{ReactNode} item node<br>                                                                                      | Function                | -         |
| isPreview              | 是否为预览态                                                                                                                                                                                                                                          | Boolean                 | -         |
| renderPreview          | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: number) => void<br>**参数**:<br>_value_: {number} 评分值                                                                                                                                               | Function                | -         |
| autoHighlightFirstItem | 自动高亮第一个元素                                                                                                                                                                                                                                       | Boolean                 | true      |
| onChange               | Select发生改变时触发的回调<br><br>**签名**:<br>Function(value: mixed, actionType: String, item: mixed) => void<br>**参数**:<br>_value_: {mixed} 选中的值<br>_actionType_: {String} 触发的方式, 'itemClick', 'enter', 'change'<br>_item_: {mixed} 选中的值的对象数据             | Function                | -         |
| fillProps              | 填充到选择框里的值的 key，默认是 value                                                                                                                                                                                                                      | String                  | 'value'   |

### Select.OptionGroup

| 参数    | 说明      | 类型        | 默认值 |
| ----- | ------- | --------- | --- |
| label | 设置分组的文案 | ReactNode | -   |

### Select.Option

| 参数       | 说明   | 类型      | 默认值 |
| -------- | ---- | ------- | --- |
| value    | 选项值  | any     | -   |
| disabled | 是否禁用 | Boolean | -   |

## Select/AutoComplete 内部函数(通过refs获取)

| 参数    | 说明                                                                                                                           | 类型       | 默认值 |
| ----- | ---------------------------------------------------------------------------------------------------------------------------- | -------- | --- |
| focus | 获取焦点<br><br>**签名**:<br> Function(start:Number, end: Number)<br>**参数**:<br>_start_: {Number} 光标起始位置<br>_end_: {Number} 选择结束位置 | Function |     |

## ARIA and KeyBoard

| 按键         | 说明         |
| :--------- | :--------- |
| Up Arrow   | 获取当前项前一项焦点 |
| Down Arrow | 获取当前项后一项焦点 |
| Enter      | 打开列表或选择当前项 |
| Esc        | 关闭列表       |
