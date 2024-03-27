# Cascader

-   category: Components
-   family: DataDisplay
-   chinese: 级联
-   type: Baisc

---

## Guide

### When To Use

-   Applies to the interactive way of selecting from a set of related data sets.
-   Cascading is an effective method of saving screen space due to the hidden subset directory.
-   The number of levels depends on the business needs, and it is not recommended to exceed 5 levels.
-   Cascading is used for form scenes. It can be used independently on the page or in combination with other elements, such as cascading options.

## API

### Cascader

| Param                | Description                                                                                                                                                                                                                                                                                                  | Type                                                                                                                              | Default Value                           | Required | Supported Version |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------- | ----------------- |
| dataSource           | Data source                                                                                                                                                                                                                                                                                                  | Array\<CascaderDataItem>                                                                                                          | []                                      |          | -                 |
| defaultValue         | Default value                                                                                                                                                                                                                                                                                                | string \| Array\<string>                                                                                                          | -                                       |          | -                 |
| value                | Current value                                                                                                                                                                                                                                                                                                | string \| Array\<string>                                                                                                          | -                                       |          | -                 |
| onChange             | Callback when value changed<br/><br/>**signature**:<br/>**params**:<br/>_value_: Selected value, single value when single select, array when multiple select<br/>_data_: Selected data, including value and label, single value when single select, array when multiple select<br/>_extra_: Extra parameters | (<br/> value: string \| Array\<string>,<br/> data: CascaderDataItem \| Array\<CascaderDataItem>,<br/> extra: Extra<br/> ) => void | -                                       |          | -                 |
| onSelect             | Callback when selected<br/><br/>**signature**:<br/>**params**:<br/>_v_: Selected value<br/>_data_: Selected data, including value and label<br/>_extra_: Extra parameters                                                                                                                                    | (v: string, data: CascaderDataItemWithPosInfo, extra: Extra) => void                                                              | -                                       |          | -                 |
| defaultExpandedValue | Default expanded value                                                                                                                                                                                                                                                                                       | Array\<string>                                                                                                                    | -                                       |          | -                 |
| expandedValue        | Current expanded value                                                                                                                                                                                                                                                                                       | Array\<string>                                                                                                                    | -                                       |          | -                 |
| expandTriggerType    | Expand trigger type                                                                                                                                                                                                                                                                                          | 'click' \| 'hover'                                                                                                                | 'click'                                 |          | -                 |
| onExpand             | Callback when expanded<br/><br/>**signature**:<br/>**params**:<br/>_expandedValue_: Expanded value                                                                                                                                                                                                           | (expandedValue: Array\<string>) => void                                                                                           | -                                       |          | -                 |
| useVirtual           | Use virtual scroll                                                                                                                                                                                                                                                                                           | boolean                                                                                                                           | false                                   |          | -                 |
| multiple             | Multiple                                                                                                                                                                                                                                                                                                     | boolean                                                                                                                           | false                                   |          | -                 |
| canOnlySelectLeaf    | Can only select leaf when single select                                                                                                                                                                                                                                                                      | boolean                                                                                                                           | false                                   |          | -                 |
| canOnlyCheckLeaf     | Can only check leaf when multiple select                                                                                                                                                                                                                                                                     | boolean                                                                                                                           | false                                   |          | -                 |
| checkStrictly        | Check parent and child not associated                                                                                                                                                                                                                                                                        | boolean                                                                                                                           | false                                   |          | -                 |
| listStyle            | List style                                                                                                                                                                                                                                                                                                   | React.CSSProperties                                                                                                               | -                                       |          | -                 |
| listClassName        | List class                                                                                                                                                                                                                                                                                                   | string                                                                                                                            | -                                       |          | -                 |
| itemRender           | List item render<br/><br/>**signature**:<br/>**params**:<br/>_data_: Data<br/>_props_: List item props<br/>**return**:<br/>List item content                                                                                                                                                                 | (data: CascaderDataItem, props: ItemProps) => React.ReactNode                                                                     | (item: CascaderDataItem) =\> item.label |          | -                 |
| loadData             | Async load data function<br/><br/>**signature**:<br/>**params**:<br/>_data_: Current click data<br/>_source_: Current click data, source is original object                                                                                                                                                  | (data: CascaderDataItem, source: CascaderDataItem) => Promise\<unknown>                                                           | -                                       |          | -                 |
| immutable            | Immutable                                                                                                                                                                                                                                                                                                    | boolean                                                                                                                           | false                                   |          | 1.23.0            |

### CascaderDataItem

```typescript
export type CascaderDataItem = {
    value: string;
    label?: string;
    disabled?: boolean;
    checkboxDisabled?: boolean;
    children?: Array<CascaderDataItem>;
    title?: string;
    [propName: string]: unknown;
};
```

### CascaderDataItemWithPosInfo

```typescript
export type CascaderDataItemWithPosInfo = CascaderDataItem & {
    /**
     * 位置信息
     */
    pos: string;
    _source: CascaderDataItem;
};
```

### Extra

```typescript
export type Extra = {
    /**
     * 单选时选中的数据的路径
     */
    selectedPath?: Array<CascaderDataItem>;
    /**
     * 多选时当前的操作是选中还是取消选中
     */
    checked?: boolean;
    /**
     * 多选时当前操作的数据
     */
    currentData?: CascaderDataItem;
    /**
     * 多选时所有被选中的数据
     */
    checkedData?: Array<CascaderDataItem>;
    /**
     * 多选时半选的数据
     */
    indeterminateData?: Array<CascaderDataItem>;
};
```

<!-- api-extra-start -->

### Data structure of dataSource

```js
const dataSource = [
    {
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
            { value: '610127', label: 'P' },
        ],
    },
];
```

The custom attribute of item in the array is also transparently passed to the data parameter of the onChange function.

<!-- api-extra-end -->

## ARIA and KeyBoard

| 按键        | 说明                                                                                     |
| :---------- | :--------------------------------------------------------------------------------------- |
| Left Arrow  | Get the previous item focus of the current item of same level                            |
| Right Arrow | Get the next item focus of the current item of same level                                |
| Tab         | Enter the child element of the current item and get the first child element as the focus |
| Esc         | Returns the parent of the current item and gets the focus                                |
| SPACE       | Select current item                                                                      |
