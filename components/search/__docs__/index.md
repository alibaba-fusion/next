# Search

-   category: Components
-   family: DataEntry
-   chinese: 搜索
-   type: 表单
-   cols: 1

---

搜索组件。

## 何时使用

页面、表单数据搜索时使用。

## API

### Search

| 参数                   | 说明                                               | 类型                                                            | 默认值   | 是否必填 |
| ---------------------- | -------------------------------------------------- | --------------------------------------------------------------- | -------- | -------- |
| size                   | 大小                                               | 'large' \| 'medium'                                             | 'medium' |          |
| value                  | 搜索框数值                                         | string \| number                                                | -        |          |
| defaultValue           | 搜索框默认值                                       | string                                                          | -        |          |
| placeholder            | 默认提示                                           | string                                                          | -        |          |
| autoWidth              | 下拉菜单是否与选择器对齐                           | boolean                                                         | -        |          |
| label                  | 自定义内联 label                                   | React.ReactNode                                                 | -        |          |
| hasClear               | 是否显示清除按钮                                   | boolean                                                         | -        |          |
| state                  | 校验状态                                           | 'error' \| 'loading'                                            | -        |          |
| readOnly               | 是否只读，只读模式下可以展开弹层但不能选           | boolean                                                         | -        |          |
| disabled               | 是否禁用                                           | boolean                                                         | -        |          |
| visible                | 自定义渲染的的下拉框                               | boolean                                                         | -        |          |
| defaultVisible         | 弹层初始化是否显示                                 | boolean                                                         | -        |          |
| onVisibleChange        | 弹层显示或隐藏时触发的回调                         | (visible: boolean) => void                                      | -        |          |
| popupContainer         | 弹层挂载的容器节点                                 | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement) | -        |          |
| popupClassName         | 弹层的 className                                   | string                                                          | -        |          |
| popupStyle             | 弹层的内联样式                                     | React.CSSProperties                                             | -        |          |
| popupProps             | 添加到弹层上的属性                                 | PopupProps                                                      | -        |          |
| popupContent           | 自定义渲染的的下拉框                               | React.ReactNode                                                 | -        |          |
| filterLocal            | 是否使用本地过滤，在数据源为远程的时候需要关闭此项 | boolean                                                         | -        |          |
| filter                 | 选择器                                             | SelectProps['dataSource']                                       | -        |          |
| useVirtual             | 是否开启虚拟滚动模式                               | boolean                                                         | -        |          |
| dataSource             | 搜索框下拉联想列表                                 | AutoCompleteProps['dataSource']                                 | -        |          |
| itemRender             | 渲染 MenuItem 内容的方法                           | (item: Item) => React.ReactNode                                 | -        |          |
| onChange               | 输入关键字时的回掉                                 | AutoCompleteProps['onChange']                                   | -        |          |
| fillProps              | 填充到选择框里的值的 key，默认是 value             | string                                                          | -        |          |
| prefix                 | 样式前缀                                           | string                                                          | -        |          |
| shape                  | 形状                                               | 'normal' \| 'simple'                                            | 'normal' |          |
| type                   | 类型                                               | 'primary' \| 'secondary' \| 'normal' \| 'dark'                  | 'normal' |          |
| onSearch               | 点击搜索按钮触发的回调                             | (value: string, filterValue?: string) => void                   | -        |          |
| defaultFilterValue     | 选择器默认值                                       | string                                                          | -        |          |
| filterValue            | 选择器值                                           | string                                                          | -        |          |
| onFilterChange         | 选择器发生变化时回调                               | (filter: string) => void                                        | -        |          |
| searchText             | button 的内容                                      | React.ReactNode                                                 | -        |          |
| filterProps            | 选择器的props                                      | SelectProps                                                     | -        |          |
| buttonProps            | 按钮的额外属性                                     | ButtonProps                                                     | -        |          |
| hasIcon                | 是否显示搜索按钮                                   | boolean                                                         | -        |          |
| icons                  | 可配置的icons，包括 search 等                      | {<br/> search?: React.ReactNode;<br/> }                         | -        |          |
| followTrigger          | 是否跟随滚动                                       | boolean                                                         | -        |          |
| autoHighlightFirstItem | 是否自动高亮第一个元素                             | boolean                                                         | -        |          |
| onToggleHighlightItem  | 键盘上下键切换菜单高亮选项的回调                   | AutoCompleteProps['onToggleHighlightItem']                      | -        |          |

## Search 内部函数(通过refs获取)

| 参数  | 说明                                                                                                                                             | 类型     | 默认值 |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ |
| focus | 获取焦点<br><br>**签名**:<br> Function(start:Number, end: Number)<br>**参数**:<br>_start_: {Number} 光标起始位置<br>_end_: {Number} 选择结束位置 | Function |        |

## 无障碍键盘操作指南

| 按键  | 说明             |     |
| :---- | :--------------- | --- |
| Enter | 触发onSearch事件 |     |
