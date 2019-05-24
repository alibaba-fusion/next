# Select

-   category: Components
-   family: DataEntry
-   chinese: 选择器
-   type: 表单

---
## Guide

### When to use

#### Select

If you don't expect the user-entered values ​​to take effect but just select, use Select. You can also use Select's showSearch property to filter.

### AutoComplete

AutoComplete retains the values ​​entered by the user, essentially the Input component, which extends the capabilities of autocomplete, so the properties of the Input component can be passed directly.

### common problem

#### There is a similar warning for `flatternChildren`

Select uses `value` as the key of the menu item by default. If the key value is not set, the default sequence index is used as the key value to ensure that these values ​​do not duplicate.

#### Use of dataSource

Select supports both children and dataSource as the data source in the props. If set at the same time, children will prevail.

Note: 1. Select uses `value` as the `key` value of the rendered menu item by default, so `value` cannot be repeated, otherwise the drop-down menu cannot be rendered. 2. Value does not allow null/undefined/object/array type values

1. The way `children`

```js
<Select>
    <Select.Option value="option1">option1</Select.Option>
    <Select.Option value="option2">option2</Select.Option>
    <Select.Option disabled>disabled</Select.Option>
</Select>;
```

2. The way `props`

```jsx
const dataSource = [
    {label:'option1', value:'option1'},
    {label:'option2', value:'option2'},
    {label:'disabled', disabled:true}
]
<Select dataSource={dataSource}/>
```

#### Customize Popup Layer

See the `Embedded layer customization` in the example. The only thing to notice is that the elements of `overlay` remember to pass through props.
This is because the layer's animation of the overlay is implemented by `className`. If you don't pass props, you will not be able to listen to the end of the animation.

## API

### Select
| Param | Descripiton  | Type  | Default Value |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ---------------------------------- |
|Size | selector size<br><br>**optional values**:<br>'small', 'medium', 'large' | Enum | 'medium' |
| value | Current value for controlled mode | any | - |
| defaultValue | initial default | any | - |
| onChange | Callback that fires when Select changes <br><br> **Signature**:<br>Function(value: mixed, actionType: String) => void<br>**Parameters**:<br> _value_: {mixed} Selected value <br>_actionType_: {String} Triggered, 'itemClick', 'enter', 'tag' <br> _item_: {mixed} value in dataSource(only useDetailValue=false) | Function | func.noop |
| placeholder | placeholder when there is no value | ReactNode | - |
| autoWidth | Drop-down menu to align with selector | Boolean | true |
| label | custom inline label | ReactNode | - |
| hasClear | Clear button | Boolean | - |
| state | validate state<br><br>**Optional**:<br>'error', 'loading' | Enum | - |
| readOnly | Is read-only, can be expanded in read-only mode but cannot be selected | Boolean | - |
| disabled | Disable selectors | Boolean | - |
| visible | The current shell is displayed | Boolean | - |
| defaultVisible | Does the layer initialization show | Boolean | - |
| onVisibleChange | Callback triggered when the layer is displayed or hidden <br><br> **Signature**:<br>Function(visible: Boolean) => void<br>**Parameters**:<br>_visible_: {Boolean} Does the shell display | Function | func.noop |
| popupContainer | shell container node | String/Function | - |
| popupClassName | className of the shell | any | - |
| popupStyle | Inline style of the shell | Object | - |
| popupProps | Attributes added to the shell | Object | {} |
| popupContent | Content of custom shell | ReactNode | - |
| filterLocal | Whether to use local filtering, turn this off when the data source is remote | Boolean | true |
| filter | A local filter method that returns a Boolean value to determine whether to keep <br><br>**Signature**:<br>Function() => void | Function | filter |
| dataSource | The incoming data source that can dynamically render children, as described in [DataSource Usage] (Use of #dataSource) | Array<Object/Boolean/Number/String> | - |
| itemRender | How to render MenuItem content <br><br><br><br><br><br><br>Function(item: Object, searchValue: String) => ReactNode<br>**Parameters:<br>_item_: {Object} Item for render node<br>_searchValue_: {String} Search keyword (if search is enabled) <br>**Return value:<br>{ReactNode} item node<br> | Function | - |
| mode | Selector mode <br><br>** Optional **:<br>'single', 'multiple', 'tag' | Enum | 'single' |
| notFoundContent | Empty copy of the shell content | ReactNode | 'No options' |
|hasBorder | Whether there is a border | Boolean | - |
| showSearch | Can search after expansion (fixed to true in tag mode) | Boolean | false |
| onSearch | Callback when the search box value changes <br><br> **Signature**:<br>Function(value: String) => void<br>**Parameters**:<br>_value_: {String } Data | Function | func.noop |
| onSearchClear | Callback when the search box value is cleared <br><br> **Signature**:<br>Function(value: String) => void<br>**Parameters**:<br/>_actionType_: {String} triggered method, 'itemClick', 'popupClose'  | Function | func.noop |
|hasSelectAll | Is there a Select All Function in Multiselect Mode | Boolean/String | - |
|fillProps | key to fill the value of the select box key?? | String | - |
|useDetailValue | value returned by onChange object using dataSource | Boolean | - |
|cacheValue | dataSource keeps the selected content | Boolean | true |
|valueRender | Methods for rendering Select to display content <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>** Parameters**:<br>_item_: {Object} Render node's item<br>**return value **:<br>{ReactNode} show content <br> | Function | item => item.label \|\| item.value |
| searchValue | Controlled search value, generally not set | String | - |
| maxTagTextLength      | max length of each tag                                                                                                                                                                                                                                               | Number                                 | -                                             |
| maxTagCount           | max count of tag can be show                                                                                                                                                                                                                                               | Number                                 | -                                             |
| maxTagPlaceholder     | if selected tags' length is over maxTagCount, what to show <br><br>**签名**:<br>Function() => void                                                                                                                                                                                 | Function                               | (selected, total) => `${selected} / ${total}` |
| onRemove | tag Delete callback <br><br><br>**Signature**:<br>Function(item: object) => void<br>**Parameters**:<br>_item_: {object} Render node's Item | Function | func.noop |
| onFocus         | focus event<br><br>**签名**:<br>Function() => void | Function | func.noop |
| onBlur          | blur event<br><br>**签名**:<br>Function() => void | Function | func.noop |
| onToggleHighlightItem | callback func while highlight item changed <br><br>**签名**:<br>Function() => void | Function| func.noop |
| hiddenSelected | hide menu after selected (only mode="multiple" or "tag") | Boolean                                | -                                  |

### Select.AutoComplete
| Param | Descripiton  | Type  | Default Value |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------- |
| size | selector size<br><br>**optional values**:<br>'small', 'medium', 'large' | Enum | 'medium' |
| value | current value for controlled mode | String/Number | - |
| defaultValue | Initialization Default | String/Number | - |
| onChange | Callback that fires when Select changes <br><br> **Signature**:<br>Function(value: mixed, actionType: String) => void<br>**Parameters**:<br> _value_: {mixed} selected value<br>_actionType_: {String} triggered method, 'itemClick', 'enter', 'change' | Function | - |
| placeholder | placeholder when there is no value | ReactNode | - |
| autoWidth | Drop-down menu to align with selector | Boolean | true |
| label | custom inline label | ReactNode | - |
| hasClear | Clear button | Boolean | - |
| state | validate state<br><br>**Optional**:<br>'error', 'loading' | Enum | - |
|readOnly | Is read-only, can be expanded in read-only mode but cannot be selected | Boolean | - |
|disabled | Disable selectors | Boolean | - |
| visible | The current shell is displayed | Boolean | - |
| defaultVisible | Does the layer initialization show | Boolean | - |
| popupContainer | shell container node | String/Function | - |
| popupClassName | className of the shell | any | - |
| popupStyle | Inline style of the shell | Object | - |
|popupProps | Attributes added to the shell | Object | {} |
| popupContent | Content of custom shell | ReactNode | - |
| filterLocal | Whether to use local filtering, turn this off when the data source is remote | Boolean | true |
| filter | Local filter method, returning a Boolean value to determine whether to keep <br><br>**Signature**:<br>Function() => void | Function | filter |
| dataSource | Incoming data source that can dynamically render children | Array&lt;Object/String> | - |
|itemRender | How to render MenuItem content <br><br>**Signature**:<br>Function(item: Object) => ReactNode<br>**Parameters**:<br>_item_: {Object} Rendering The node's item<br>**return value**:<br>{ReactNode} item node<br> | Function | - |
|fillProps | key?? of the value filled into the selection box, default value | String | 'value' |
| onToggleHighlightItem | callback func while highlight item changed <br><br>**签名**:<br>Function() => void | Function| func.noop |

### Select.OptionGroup

| Param | Descripiton  | Type  | Default Value |
| ----- | ------- | --------- | --- |
| label | Grouping text | ReactNode | - |

### Select.Option

| Param | Descripiton  | Type  | Default Value |
| -------- | ---- | ------- | --- |
| value | option value | any | - |
| disabled | disabled | Boolean | - |



## ARIA and KeyBoard

| 按键          | 说明                              |
| :---------- | :------------------------------ |
| Up Arrow    | Get the previous item focus of the current item |
| Down Arrow  | Get the next item focus of the current item |
| Enter       | Open the list or select current item    |
| Esc         | Close the list   |

