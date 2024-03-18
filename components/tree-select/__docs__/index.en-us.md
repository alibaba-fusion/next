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

| Param                    | Description                                                                                                                                                                                                                                                                                     | Type                                                                                                           | Default Value                         | Required | Supported Version |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------- | ----------------- |
| children                 | Tree node                                                                                                                                                                                                                                                                                       | React.ReactNode                                                                                                | -                                     |          | -                 |
| size                     | Select size                                                                                                                                                                                                                                                                                     | 'small' \| 'medium' \| 'large'                                                                                 | 'medium'                              |          | -                 |
| placeholder              | Select placeholder                                                                                                                                                                                                                                                                              | string                                                                                                         | -                                     |          | -                 |
| disabled                 | Whether to be disabled                                                                                                                                                                                                                                                                          | boolean                                                                                                        | false                                 |          | -                 |
| hasArrow                 | Whether to show the arrow                                                                                                                                                                                                                                                                       | boolean                                                                                                        | true                                  |          | -                 |
| hasBorder                | Whether to show the border                                                                                                                                                                                                                                                                      | boolean                                                                                                        | true                                  |          | -                 |
| hasClear                 | Whether to show the clear button                                                                                                                                                                                                                                                                | boolean                                                                                                        | true                                  |          | -                 |
| label                    | Custom inline label                                                                                                                                                                                                                                                                             | React.ReactNode                                                                                                | -                                     |          | -                 |
| readOnly                 | Whether to be read-only (read                                                                                                                                                                                                                                                                   | boolean                                                                                                        | -                                     |          | -                 |
| autoWidth                | Whether the drop                                                                                                                                                                                                                                                                                | boolean                                                                                                        | true                                  |          | -                 |
| dataSource               | Data source (higher priority than children)                                                                                                                                                                                                                                                     | DataSourceItem[]                                                                                               | -                                     |          | -                 |
| value                    | Current value (Controlled)                                                                                                                                                                                                                                                                      | DataSourceItem[] \| DataSourceItem                                                                             | -                                     |          | -                 |
| defaultValue             | Default value (Uncontrolled)                                                                                                                                                                                                                                                                    | SelectProps['defaultValue']                                                                                    | null                                  |          | -                 |
| preserveNonExistentValue | Whether to display when value/defaultValue does not exist in dataSource                                                                                                                                                                                                                         | boolean                                                                                                        | false                                 |          | 1.25              |
| onChange                 | Callback when the selected value changes                                                                                                                                                                                                                                                        | (<br/> value: DataSourceItem[] \| DataSourceItem,<br/> data: ObjectItem[] \| ObjectItem \| null<br/> ) => void | () =\> \{\}                           |          | -                 |
| tagInline                | Whether to display on one line (only effective when multiple and treeCheckable are true)                                                                                                                                                                                                        | boolean                                                                                                        | false                                 |          | 1.25              |
| maxTagPlaceholder        | Content to display when hiding excess tags (effective when tagInline is true)<br/><br/>**signature**:<br/>**params**:<br/>_selectedValues_: Selected element<br/>_totalValues_: Total pending element, treeCheckedStrategy = 'parent' is undefined<br/>**return**:<br/>ReactNode or HTMLElement | (<br/> selectedValues: ObjectItem[],<br/> totalValues?: ObjectItem[]<br/> ) => React.ReactNode \| HTMLElement  | -                                     |          | 1.25              |
| autoClearSearch          | Whether to automatically clear searchValue                                                                                                                                                                                                                                                      | boolean                                                                                                        | true                                  |          | 1.26              |
| showSearch               | Whether to show the search box                                                                                                                                                                                                                                                                  | boolean                                                                                                        | false                                 |          | -                 |
| onSearch                 | Callback when input in search box changes                                                                                                                                                                                                                                                       | (keyword: string) => void                                                                                      | () =\> \{\}                           |          | -                 |
| notFoundContent          | Content to display when there is no data                                                                                                                                                                                                                                                        | React.ReactNode                                                                                                | 'Not Found'                           |          | -                 |
| multiple                 | Whether to support multiple selection                                                                                                                                                                                                                                                           | boolean                                                                                                        | false                                 |          | -                 |
| treeCheckable            | Whether the check box of the tree in the drop                                                                                                                                                                                                                                                   | boolean                                                                                                        | false                                 |          | -                 |
| treeCheckStrictly        | Whether the check box of the tree in the drop-down box is completely controlled (the parent                                                                                                                                                                                                     | boolean                                                                                                        | false                                 |          | -                 |
| treeCheckedStrategy      | Definition of how to fill in when selected                                                                                                                                                                                                                                                      | 'all' \| 'parent' \| 'child'                                                                                   | 'parent'                              |          | -                 |
| treeDefaultExpandAll     | Whether the tree in the drop                                                                                                                                                                                                                                                                    | boolean                                                                                                        | false                                 |          | -                 |
| treeDefaultExpandedKeys  | The array of keys of the nodes expanded by default in the tree in the drop                                                                                                                                                                                                                      | Array\<Key>                                                                                                    | []                                    |          | -                 |
| treeLoadData             | The function of asynchronous loading data in the tree in the drop                                                                                                                                                                                                                               | TreeProps['loadData']                                                                                          | -                                     |          | -                 |
| treeProps                | Pass                                                                                                                                                                                                                                                                                            | TreeProps                                                                                                      | \{\}                                  |          | -                 |
| defaultVisible           | Initial display state of the drop                                                                                                                                                                                                                                                               | boolean                                                                                                        | false                                 |          | -                 |
| visible                  | Current display state of the drop                                                                                                                                                                                                                                                               | boolean                                                                                                        | -                                     |          | -                 |
| onVisibleChange          | Callback when the drop                                                                                                                                                                                                                                                                          | (visible: boolean, type: string) => void                                                                       | () =\> \{\}                           |          | -                 |
| popupStyle               | Custom style object for the drop                                                                                                                                                                                                                                                                | React.CSSProperties                                                                                            | -                                     |          | -                 |
| popupClassName           | Custom class name for the drop                                                                                                                                                                                                                                                                  | string                                                                                                         | -                                     |          | -                 |
| popupContainer           | Mounting container node for the drop                                                                                                                                                                                                                                                            | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement)                                                | -                                     |          | -                 |
| popupProps               | Pass                                                                                                                                                                                                                                                                                            | PopupProps                                                                                                     | -                                     |          | -                 |
| followTrigger            | Whether to follow scrolling                                                                                                                                                                                                                                                                     | boolean                                                                                                        | -                                     |          | -                 |
| isPreview                | Whether it is in preview mode                                                                                                                                                                                                                                                                   | boolean                                                                                                        | -                                     |          | -                 |
| renderPreview            | Content rendered in preview mode                                                                                                                                                                                                                                                                | (data: ObjectItem[], props: TreeSelectProps) => React.ReactNode                                                | -                                     |          | -                 |
| useVirtual               | Whether to open virtual scrolling                                                                                                                                                                                                                                                               | boolean                                                                                                        | false                                 |          | -                 |
| filterLocal              | Whether to close local search                                                                                                                                                                                                                                                                   | boolean                                                                                                        | true                                  |          | -                 |
| immutable                | Whether it is immutable data                                                                                                                                                                                                                                                                    | boolean                                                                                                        | -                                     |          | 1.23              |
| clickToCheck             | Whether clicking on the text can be selected                                                                                                                                                                                                                                                    | boolean                                                                                                        | false                                 |          | -                 |
| valueRender              | Method for rendering Select area display content<br/><br/>**signature**:<br/>**params**:<br/>_item_: Extra item<br/>_itemPaths_: Extra item path<br/>**return**:<br/>Display content                                                                                                            | (item: TreeSelectState['\_k2n'][Key], itemPaths: ObjectItem[]) => React.ReactNode                              | (item) =\> item.label \|\| item.value |          | -                 |

<!-- api-extra-start -->

### TreeSelect.Node

| Param            | Descripiton                                                           | Type      | Default Value |
| ---------------- | --------------------------------------------------------------------- | --------- | ------------- |
| children         | tree nodes                                                            | ReactNode | -             |
| label            | content of node                                                       | ReactNode | '---'         |
| selectable       | set whether to support selecting node, override the Tree's selectable | Boolean   | -             |
| checkable        | set whether to support checking node, override the Tree's checkable   | Boolean   | -             |
| editable         | set whether to support editing node, override the Tree's editable     | Boolean   | -             |
| draggable        | set whether to support dragging node, override the Tree's draggable   | Boolean   | -             |
| disabled         | whether node is disabled                                              | Boolean   | false         |
| checkboxDisabled | whether checkbox of node is disabled                                  | Boolean   | false         |
| isLeaf           | whether it is a leaf node and only works when loadData is set         | Boolean   | false         |

### Data structure of dataSource

```js
const dataSource = [
    {
        label: 'A',
        value: '1',
        key: '1',
        selectable: false,
        children: [
            {
                label: 'AA',
                value: '2',
                key: '2',
                children: [
                    {
                        label: 'AAA',
                        value: '4',
                        key: '4',
                        disableCheckbox: true,
                    },
                    {
                        label: 'AAB',
                        value: '5',
                        key: '5',
                        disabled: true,
                    },
                ],
            },
            {
                label: 'AB',
                value: '3',
                key: '3',
                children: [
                    {
                        label: 'ABA',
                        value: '6',
                        key: '6',
                    },
                ],
            },
        ],
    },
];
```

If you do not pass the key, TreeSelect will use the internally calculated position string as the key. If you want to set an property such as treeDefaultExpandedKeys, pass the custom key. It's a good way that make the key same as the value.

<!-- api-extra-end -->

## ARIA and KeyBoard

| KeyBoard    | Descripiton                                                                    |
| :---------- | :----------------------------------------------------------------------------- |
| Enter       | Open the selection tree or select the current item                             |
| Up Arrow    | Get the previous item focus of the current item of same level                  |
| Down Arrow  | Get the next item focus of the current item of same level                      |
| Right Arrow | Open the next subtree of the current element and focus on the first item       |
| Left Arrow  | Return to the parent node of the current element and close the current subtree |
