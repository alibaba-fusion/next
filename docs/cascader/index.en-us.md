# Cascader

-   category: Components
-   family: DataDisplay
-   chinese: 级联
-   type: 基本

---

## Guide

### When To Use

- Applies to the interactive way of selecting from a set of related data sets.
- Cascading is an effective method of saving screen space due to the hidden subset directory.
- The number of levels depends on the business needs, and it is not recommended to exceed 5 levels.
- Cascading is used for form scenes. It can be used independently on the page or in combination with other elements, such as cascading options.

## API

### Cascader

| Param           | Description                                                                                                                  | Type       | Default Value          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------ |
| dataSource           | data source, structure can refer to the following document                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Array&lt;Object>        | \[]                |
| defaultValue         | (under uncontrol) default value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | String/Array&lt;String> | null               |
| value                | (under control) current value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | String/Array&lt;String> | -                  |
| onChange             | callback triggered when value changes<br><br>**signatures**:<br>Function(value: String/Array, data: Object/Array, extra: Object) => void<br>**params**:<br>_value_: {String/Array} selected value, a single value is returned when single select, and an array is returned when multiple select<br>_data_: {Object/Array} selected data, including value, label, returns a single value when single select, returns an array when multiple select, parent and child nodes are selected at the same time, only the parent node is returned<br>_extra_: {Object} extra param<br>_extra.selectedPath_: {Array} path of the selected data when single selecte<br>_extra.checked_: {Boolean} whether is checked when multiple select<br>_extra.currentData_: {Object} current operation data when multiple select<br>_extra.checkedData_: {Array} all checked data when multiple select<br>_extra.indeterminateData_: {Array} indeterminate data when multile select | Function                | -                  |
| defaultExpandedValue | (under uncontrol) default expanded value, if not set, the component will be automatically set according to defaultValue/value                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Array&lt;String>        | -                  |
| expandedValue        | (under control) current expanded value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Array&lt;String>        | -                  |
| expandTriggerType    | expand trigger type<br><br>**options**:<br>'click', 'hover'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Enum                    | 'click'            |
| onExpand             | callback triggered when expand or collapse<br><br>**signatures**:<br>Function(expandedValue: Array) => void<br>**params**:<br>_expandedValue_: {Array} an array of list expanded values                                                                                                                                                                                                                                                                                                                                                                                                        | Function                | -                  |
| multiple             | whether is multiple select                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Boolean                 | false              |
| canOnlySelectLeaf    | whether only leaf nodes can be selected when single select                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Boolean                 | false              |
| canOnlyCheckLeaf     | whether only leaf nodes can be checked when multiple select                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Boolean                 | false              |
| checkStrictly        | whether selection of parent and child nodes are related                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Boolean                 | false              |
| listStyle            | style of list                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Object                  | -                  |
| listClassName        | class name of list                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | String                  | -                  |
| itemRender           | render function of item<br><br>**signatures**:<br>Function(data: Object) => ReactNode<br>**params**:<br>_data_: {Object} data<br>**returns**:<br>{ReactNode} content of item<br>                                                                                                                                                                                                                                                                                                                                                                                     | Function                | item => item.label |
| loadData             | asynchronous data loading function<br><br>**signatures**:<br>Function(data: Object) => void<br>**params**:<br>_data_: {Object} clicked item                                                                                                                                                                                                                                                                                                                                                                                                                       | Function                | -                  |

<!-- api-extra-start -->

### Data structure of dataSource

```js
const dataSource = [{
    value: '2974',
    label: 'A',
    children: [
        { value: '2975', label: 'B', disabled: true },
        { value: '2976', label: 'C', checkboxDisabled: true },
        { value: '2977', label: 'D' },
        { value: '2978', label: 'E' },
        { value: '2979', label: 'F' },
        { value: '4208', label: 'G' },
        { value: '4209', label: 'H' },
        { value: '4210', label: 'I' },
        { value: '4211', label: 'J' },
        { value: '4212', label: 'K' },
        { value: '4213', label: 'L' },
        { value: '4214', label: 'M' },
        { value: '4215', label: 'N' },
        { value: '4388', label: 'O' },
        { value: '610127', label: 'P' }
    ]
}];
```

The custom attribute of item in the array is also transparently passed to the data parameter of the onChange function.

<!-- api-extra-end -->



## ARIA and KeyBoard

| 按键          | 说明                              |
| :---------- | :------------------------------ |
| Up Arrow    | Get the previous item focus of the current item of same level   |
| Down Arrow  | Get the next item focus of the current item of same level  |
| Left Arrow  | Enter the child element of the current item and get the first child element as the focus |
| Right Arrow | Returns the parent of the current item and gets the focus |
| Esc         | Returns the parent of the current item and gets the focus   |
| SPACE       | Select current item     |

