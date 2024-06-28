# CascaderSelect

-   category: Components
-   family: DataEntry
-   chinese: 级联选择
-   type: 基本

---

## Guide

### When To Use

CascaderSelect consists of Select and Cascader. Cascader are hidden in a pop up layer by default and are mostly used in form scenes.

## API

### CascaderSelect

Inherits partial props from Cascader, support passing props to Cascader: dataSource, useVirtual, multiple, canOnlyCheckLeaf,
checkStrictly, resultRender, expandedValue, defaultExpandedValue, expandTriggerType, onExpand, listStyle, listClassName, loadData, i
temRender, immutable. Support passing props to Select: other Select props except those listed above and those listed below.

| Param                | Description                                                                                         | Type                                                                                                                                               | Default Value | Required | Supported Version |
| -------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- | ----------------- |
| size                 | Size                                                                                                | 'small' \| 'medium' \| 'large'                                                                                                                     | 'medium'      |          | -                 |
| disabled             | Disabled                                                                                            | boolean                                                                                                                                            | false         |          | -                 |
| hasArrow             | HasArrow                                                                                            | boolean                                                                                                                                            | true          |          | -                 |
| hasBorder            | HasBorder                                                                                           | boolean                                                                                                                                            | true          |          | -                 |
| hasClear             | HasClear                                                                                            | boolean                                                                                                                                            | false         |          | -                 |
| readOnly             | ReadOnly, popup layer can be expanded but cannot be selected in read                                | boolean                                                                                                                                            | -             |          | -                 |
| defaultValue         | Default value(not controlled)                                                                       | string \| Array\<string>                                                                                                                           | -             |          | -                 |
| value                | Current value(controlled)                                                                           | string \| Array\<string>                                                                                                                           | -             |          | -                 |
| onChange             | Callback when selected value changes                                                                | (<br/> value: string \| Array\<string> \| null,<br/> data: CascaderDataItem \| Array\<CascaderDataItem> \| null,<br/> extra?: Extra<br/> ) => void | -             |          | -                 |
| changeOnSelect       | Whether to call onChange as soon as selected, this property only works in single selection mode     | boolean                                                                                                                                            | false         |          | -                 |
| displayRender        | Custom render function of selected result                                                           | (<br/> label: Array\<React.ReactNode>,<br/> data: CascaderSelectDataItem<br/> ) => React.ReactNode                                                 | -             |          | -                 |
| showSearch           | Show search box                                                                                     | boolean                                                                                                                                            | false         |          | -                 |
| filter               | Custom search function                                                                              | (searchValue: string, path: CascaderSelectDataItem[]) => boolean                                                                                   | -             |          | -                 |
| onSearch             | Callback when search value changes                                                                  | (value: string) => void                                                                                                                            | -             |          | 1.23              |
| resultAutoWidth      | Whether the search result list is the same width as the selection box                               | boolean                                                                                                                                            | true          |          | -                 |
| notFoundContent      | Content when no data                                                                                | React.ReactNode                                                                                                                                    | -             |          | -                 |
| header               | Custom dropdown header                                                                              | React.ReactNode                                                                                                                                    | -             |          | -                 |
| footer               | Custom dropdown footer                                                                              | React.ReactNode                                                                                                                                    | -             |          | -                 |
| defaultVisible       | Visible by default                                                                                  | boolean                                                                                                                                            | false         |          | -                 |
| visible              | Current visible                                                                                     | boolean                                                                                                                                            | -             |          | -                 |
| onVisibleChange      | -                                                                                                   | (visible: boolean, type?: CascaderSelectVisibleChangeType) => void                                                                                 | -             |          | -                 |
| popupProps           | Props object passed to Popup                                                                        | React.ComponentPropsWithRef\<typeof Popup>                                                                                                         | -             |          | -                 |
| isPreview            | Whether it is in preview mode                                                                       | boolean                                                                                                                                            | false         |          | -                 |
| renderPreview        | Custom preview                                                                                      | (<br/> value: CascaderSelectDataItem \| CascaderSelectDataItem[],<br/> props: CascaderSelectProps<br/> ) => React.ReactNode                        | -             |          | -                 |
| menuProps            | Props object passed to Cascader                                                                     | Omit\<CascaderProps, 'onSelect' \| 'onChange'>                                                                                                     | -             |          | -                 |
| autoClearSearchValue | Whether the current search will be cleared on selecting an item. Only applies when multiple is true | boolean                                                                                                                                            | false         |          | -                 |

<!-- api-extra-start -->

### Data structure of dataSource

```js
const dataSource = [
    {
        value: '2974',
        label: '西安',
        children: [
            { value: '2975', label: '西安市', disabled: true },
            { value: '2976', label: '高陵县', checkboxDisabled: true },
            { value: '2977', label: '蓝田县' },
            { value: '2978', label: '户县' },
            { value: '2979', label: '周至县' },
            { value: '4208', label: '灞桥区' },
            { value: '4209', label: '长安区' },
            { value: '4210', label: '莲湖区' },
            { value: '4211', label: '临潼区' },
            { value: '4212', label: '未央区' },
            { value: '4213', label: '新城区' },
            { value: '4214', label: '阎良区' },
            { value: '4215', label: '雁塔区' },
            { value: '4388', label: '碑林区' },
            { value: '610127', label: '其它区' },
        ],
    },
];
```

The custom attribute of item in the array is also transparently passed to the data parameter of the onChange function.

<!-- api-extra-end -->

## ARIA and KeyBoard

| 按键        | 说明                                                                                     |
| :---------- | :--------------------------------------------------------------------------------------- |
| Up Arrow    | Get the previous item focus of the current item of same level                            |
| Down Arrow  | Get the next item focus of the current item of same level                                |
| Left Arrow  | Enter the child element of the current item and get the first child element as the focus |
| Right Arrow | Returns the parent of the current item and gets the focus                                |
| Enter       | Open the directory or select current item                                                |
| Esc         | Close the directory                                                                      |
| SPACE       | Select current item                                                                      |
