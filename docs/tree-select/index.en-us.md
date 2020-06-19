# TreeSelect

-   category: Components
-   family: DataEntry
-   chinese: 树型选择控件
-   type: 基本

---

## Guide

### When To Use

Like Select, TreeSelect can be used when the selected data structure is a tree structure, such as company hierarchy, subject system, category catalog, and so on.

## API

### TreeSelect

| Param | Descripiton  | Type  | Default Value |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------- |
| children                | tree nodes                                                                                                                                                                                                                                                      | ReactNode               | -           |
| size                    | size of selector<br><br>**options**:<br>'small', 'medium', 'large'                                                                                                                                                                                                      | Enum                    | 'medium'    |
| placeholder             | placeholder of selector                                                                                                                                                                                                                                                   | String                  | -           |
| disabled                | whether selector is disabled                                                                                                                                                                                                                                                     | Boolean                 | false       |
| hasArrow                | whether has arrow icon                                                                                                                                                                                                                                                   | Boolean                 | true        |
| hasBorder               | whether selector has border                                                                                                                                                                                                                                                    | Boolean                 | true        |
| label                   | custom inline label                                                                                                                                                                                                                                             | ReactNode               | -           |
| readOnly                | whether selector is read only, it can be expanded but cannot be selected under read only mode                                                                                                                                                                                                                                    | Boolean                 | -           |
| autoWidth               | whether the dropdown is aligned with the selector                                                                                                                                                                                                                                              | Boolean                 | true        |
| dataSource              | data source, this property has a higher priority than children                                                                                                                                                                                                                                    | Array&lt;Object>        | -           |
| value                   | (under control) current value                                                                                                                                                                                                                                                  | String/Array&lt;String> | -           |
| defaultValue            | (under uncontrol) default value                                                                                                                                                                                                                                                 | String/Array&lt;String> | null        |
| onChange                | callback triggered when value change<br><br>**signatures**:<br>Function(value: String/Array, data: Object/Array) => void<br>**params**:<br>_value_: {String/Array} selected value, a single value is returned when single select, and an array is returned when multiple select<br>_data_: {Object/Array} selected data, including value, label, pos, and key properties, returns a single value when single select, returns an array when multiple select, parent and child nodes are selected at the same time, only the parent node is returned. | Function                | () => {}    |
| showSearch              | whether to show the search box                                                                                                                                                                                                                                                  | Boolean                 | false       |
| onSearch                | callback triggered when search<br><br>**signatures**:<br>Function(keyword: String) => void<br>**params**:<br>_keyword_: {String} input keyword                                                                                                                                             | Function                | () => {}    |
| notFoundContent         | content without data                                                                                                                                                                                                                                                 | ReactNode               | 'Not Found' |
| multiple                | whether it support multiple selection                                                                                                                                                                                                                                                   | Boolean                 | false       |
| treeCheckable           | whether the tree in the dropdown supports the checkbox of the node                                                                                                                                                                                                                                       | Boolean                 | false       |
| treeCheckStrictly       | whether the checkbox of the node is controlled strictly (selection of parent and child nodes are no longer related)                                                                                                                                                                                                                        | Boolean                 | false       |
| treeCheckedStrategy     | defining the way to backfill when checked node <br><br>**options**:<br>'all' (return all checked nodes)<br>'parent' (only parent nodes are returned when parent and child nodes are checked) <br>'child' (only child nodes are returned when parent and child nodes are checked)                                                                                                                                                   | Enum                    | 'parent'    |
| treeDefaultExpandAll    | whether to expand all nodes by default                                                                                                                                                                                                                                         | Boolean                 | false       |
| treeDefaultExpandedKeys | keys of default expanded nodes                                                                                                                                                                                                                                       | Array&lt;String>        | \[]         |
| treeLoadData            | asynchronous data loading function, Please refer to [Tree's asynchronous loading data Demo](https://fusion.design/pc/component/basic/tree#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE)<br><br>**signatures**:<br>Function(node: ReactElement) => void<br>**params**:<br>_node_: {ReactElement} clicked node                       | Function                | -           |
| treeProps               | properties of Tree                                                                                                                                                                                                                                           | Object                  | {}          |
| defaultVisible          | whether the dropdown box is displayed in default                                                                                                                                                                                                                                               | Boolean                 | false       |
| visible                 | whether the dropdown box is displayed currently                                                                                                                                                                                                                                                | Boolean                 | -           |
| onVisibleChange         | callback triggered when open or close the dropdown<br><br>**signatures**:<br>Function(visible: Boolean, type: String) => void<br>**params**:<br>_visible_: {Boolean} whether is visible<br>_type_: {String} trigger type                                                                                            | Function                | () => {}    |
| popupStyle              | style of dropdown                                                                                                                                                                                                                                               | Object                  | -           |
| popupClassName          | class name of dropdown                                                                                                                                                                                                                                               | String                  | -           |
| popupContainer          | container of dropdown                                                                                                                                                                                                                                              | String/Function         | -           |
| popupProps              | properties of Popup                                                                                                                                                                                                                                          | Object                  | -           |
| followTrigger           | follow Trigger or not                | Boolean         | -                                         |
| useVirtual          | whether use virtual scroll                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Boolean         | false         |

<!-- api-extra-start -->

### TreeSelect.Node

| Param | Descripiton  | Type  | Default Value |
| ---------------- | ------------------------------- | --------- | ----- |
| children         | tree nodes                             | ReactNode | -     |
| label            | content of node                          | ReactNode | '---' |
| selectable       | set whether to support selecting node, override the Tree's selectable | Boolean   | -     |
| checkable        | set whether to support checking node, override the Tree's checkable | Boolean   | -     |
| editable         | set whether to support editing node, override the Tree's editable   | Boolean   | -     |
| draggable        | set whether to support dragging node, override the Tree's draggable  | Boolean   | -     |
| disabled         | whether node is disabled                        | Boolean   | false |
| checkboxDisabled | whether checkbox of node is disabled                      | Boolean   | false |
| isLeaf           | whether it is a leaf node and only works when loadData is set           | Boolean   | false |

### Data structure of dataSource

```js
const dataSource = [{
    label: 'A',
    value: '1',
    key: '1',
    selectable: false,
    children: [{
        label: 'AA',
        value: '2',
        key: '2',
        children: [{
            label: 'AAA',
            value: '4',
            key: '4',
            disableCheckbox: true
        }, {
            label: 'AAB',
            value: '5',
            key: '5',
            disabled: true
        }]
    }, {
        label: 'AB',
        value: '3',
        key: '3',
        children: [{
            label: 'ABA',
            value: '6',
            key: '6'
        }]
    }]
}];
```

If you do not pass the key, TreeSelect will use the internally calculated position string as the key. If you want to set an property such as treeDefaultExpandedKeys, pass the custom key. It's a good way that make the key same as the value.

<!-- api-extra-end -->


## ARIA and KeyBoard

| KeyBoard          | Descripiton   |
| :---------- | :------------------------------ |
| Enter | Open the selection tree or select the current item |
| Up Arrow |  Get the previous item focus of the current item of same level |
| Down Arrow  | Get the next item focus of the current item of same level |
| Right Arrow | Open the next subtree of the current element and focus on the first item|
| Left Arrow  | Return to the parent node of the current element and close the current subtree|
