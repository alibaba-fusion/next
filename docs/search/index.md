# Search

-   category: Components
-   family: DataEntry
-   chinese: 搜索
-   type: 表单
-   cols: 1

---

## 开发指南

### 何时使用

页面、表单数据搜索时使用

## API

### Search

> 输入框部分继承 Select.AutoComplete 的能力，可以直接用AutoComplete 的 api

| 参数                     | 说明                                                                                                                                                    | 类型            | 默认值       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| size                   | 大小<br><br>**可选值**:<br>'large'('大')<br>'medium'('小')                                                                                                   | Enum          | 'medium'  |
| type                   | 类型 shape=normal: primary/secondary; shape=simple: normal/dark;<br><br>**可选值**:<br>'primary', 'secondary', 'normal', 'dark'                            | Enum          | 'normal'  |
| shape                  | 形状<br><br>**可选值**:<br>'normal', 'simple'                                                                                                              | Enum          | 'normal'  |
| defaultValue           | 搜索框默认值                                                                                                                                                | String        | -         |
| value                  | 搜索框数值                                                                                                                                                 | String/Number | -         |
| onChange               | 输入关键字时的回掉<br><br>**签名**:<br>Function(value: Object) => void<br>**参数**:<br>_value_: {Object} 输入值                                                       | Function      | func.noop |
| onSearch               | 点击搜索按钮触发的回调<br><br>**签名**:<br>Function(value: String, filterValue: String) => void<br>**参数**:<br>_value_: {String} 输入值<br>_filterValue_: {String} 选项值 | Function      | func.noop |
| defaultFilterValue     | 选择器默认值                                                                                                                                                | String        | -         |
| filter                 | 选择器                                                                                                                                                   | Array         | \[]       |
| filterValue            | 选择器值                                                                                                                                                  | String        | -         |
| onFilterChange         | 选择器发生变化时回调<br><br>**签名**:<br>Function(filter: Object) => void<br>**参数**:<br>_filter_: {Object} value                                                  | Function      | func.noop |
| dataSource             | 搜索框下拉联想列表                                                                                                                                             | Array         | -         |
| placeholder            | 默认提示                                                                                                                                                  | String        | -         |
| searchText             | button 的内容                                                                                                                                            | ReactNode     | -         |
| filterProps            | 选择器的props                                                                                                                                             | Object        | -         |
| buttonProps            | 按钮的额外属性                                                                                                                                               | Object        | {}        |
| popupContent           | 自定义渲染的的下拉框                                                                                                                                            | ReactNode     | -         |
| followTrigger          | 是否跟随滚动                                                                                                                                                | Boolean       | -         |
| visible                | 自定义渲染的的下拉框                                                                                                                                            | Boolean       | -         |
| hasClear               | 是否显示清除按钮                                                                                                                                              | Boolean       | false     |
| hasIcon                | 是否显示搜索按钮                                                                                                                                              | Boolean       | true      |
| disabled               | 是否禁用                                                                                                                                                  | Boolean       | false     |
| icons                  | 可配置的icons，包括 search 等                                                                                                                                 | Object        | {}        |
| autoHighlightFirstItem | 是否自动高亮第一个元素                                                                                                                                           | Boolean       | true      |

## Search 内部函数(通过refs获取)

| 参数    | 说明                                                                                                                           | 类型       | 默认值 |
| ----- | ---------------------------------------------------------------------------------------------------------------------------- | -------- | --- |
| focus | 获取焦点<br><br>**签名**:<br> Function(start:Number, end: Number)<br>**参数**:<br>_start_: {Number} 光标起始位置<br>_end_: {Number} 选择结束位置 | Function |     |

## ARIA and KeyBoard

| 按键    | 说明           |     |
| :---- | :----------- | --- |
| Enter | 触发onSearch事件 |     |
