# Transfer

-   category: Components
-   family: DataEntry
-   chinese: 穿梭框
-   type: 基本

---

## Guide

### When To Use

Move the items in two panels in an intuitive way to select.

## API

### Transfer

| Param               | Description                                                                                                                                                                                                                                                               | Type                                                                                                                                   | Default Value | Required |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| mode                | Move mode                                                                                                                                                                                                                                                                 | 'normal' \| 'simple'                                                                                                                   | 'normal'      |          |
| dataSource          | Data source                                                                                                                                                                                                                                                               | Array\<TransferDataItem>                                                                                                               | []            |          |
| value               | (under control) current value                                                                                                                                                                                                                                             | Array\<string>                                                                                                                         | -             |          |
| defaultValue        | (under uncontrolled) default value                                                                                                                                                                                                                                        | Array\<string>                                                                                                                         | []            |          |
| onChange            | Callback function triggered when value change<br/><br/>**signature**:<br/>**params**:<br/>_value_: Value of right panel<br/>_data_: Data of right panel<br/>_extra_: Extra parameters                                                                                     | (value: Array\<string>, data: Array\<TransferDataItem>, extra: ExtraOptions) => void                                                   | -             |          |
| onSelect            | Callback function triggered when item selected<br/><br/>**signature**:<br/>**params**:<br/>_sourceSelectedValue_: Value of checked items in source panel<br/>_targetSelectedValue_: Value of checked items in target panel<br/>_target_: Trigger panel `source \| target` | (<br/> sourceSelectedValue: Array\<string>,<br/> targetSelectedValue: Array\<string>,<br/> target: 'source' \| 'target'<br/> ) => void | -             |          |
| disabled            | Disable operations on transfer                                                                                                                                                                                                                                            | boolean                                                                                                                                | false         |          |
| leftDisabled        | Disable left panel                                                                                                                                                                                                                                                        | boolean                                                                                                                                | false         |          |
| rightDisabled       | Disable right panel                                                                                                                                                                                                                                                       | boolean                                                                                                                                | false         |          |
| itemRender          | Item render function<br/><br/>**signature**:<br/>**params**:<br/>_data_: Data<br/>**return**:<br/>Content of item                                                                                                                                                         | (data: TransferDataItem) => React.ReactNode                                                                                            | -             |          |
| showSearch          | Whether to show the search box                                                                                                                                                                                                                                            | boolean \| [leftPanel: boolean, rightPanel: boolean]                                                                                   | false         |          |
| searchProps         | Props passed to Search when showSearch is true                                                                                                                                                                                                                            | SearchProps \| [leftPanel: SearchProps, rightPanel: SearchProps]                                                                       | -             |          |
| filter              | Custom search function<br/><br/>**signature**:<br/>**params**:<br/>_searchedValue_: Search keyword<br/>_data_: Data<br/>**return**:<br/>Whether is matched                                                                                                                | (searchedValue: string, data: TransferDataItem) => boolean                                                                             | -             |          |
| onSearch            | Callback function triggered when search<br/><br/>**signature**:<br/>**params**:<br/>_searchedValue_: Search keyword<br/>_position_: Position of the search box                                                                                                            | (searchedValue: string, position: string) => void                                                                                      | -             |          |
| useVirtual          | Whether use virtual                                                                                                                                                                                                                                                       | boolean                                                                                                                                | -             |          |
| searchPlaceholder   | Placeholder of the search box                                                                                                                                                                                                                                             | string                                                                                                                                 | -             |          |
| notFoundContent     | Content when list is empty                                                                                                                                                                                                                                                | React.ReactNode \| [leftPanel: React.ReactNode, rightPanel: React.ReactNode]                                                           | 'Not Found'   |          |
| titles              | Title of the left and right panel                                                                                                                                                                                                                                         | [leftPanel: React.ReactNode, rightPanel: React.ReactNode]                                                                              | []            |          |
| operations          | Text of move buttons                                                                                                                                                                                                                                                      | [leftPanel: React.ReactNode, rightPanel: React.ReactNode]                                                                              | []            |          |
| defaultLeftChecked  | Default checked value of left panel                                                                                                                                                                                                                                       | Array\<string>                                                                                                                         | []            |          |
| defaultRightChecked | Default checked value of right panel                                                                                                                                                                                                                                      | Array\<string>                                                                                                                         | []            |          |
| listClassName       | Custom list class name                                                                                                                                                                                                                                                    | string                                                                                                                                 | -             |          |
| listStyle           | Custom list style                                                                                                                                                                                                                                                         | React.CSSProperties                                                                                                                    | -             |          |
| sortable            | Whether to allow drag and drop sort                                                                                                                                                                                                                                       | boolean                                                                                                                                | false         |          |
| onSort              | Callback function triggered when dragging sort<br/><br/>**signature**:<br/>**params**:<br/>_value_: Sorted value<br/>_position_: Position of the sorted panel, 'left' or 'right'                                                                                          | (value: Array\<string>, position: PositionType) => void                                                                                | -             |          |
| id                  | Unique id to make component accessible                                                                                                                                                                                                                                    | string                                                                                                                                 | -             |          |
| showCheckAll        | Whether show footer's check                                                                                                                                                                                                                                               | boolean                                                                                                                                | true          |          |
| children            | Customer panel                                                                                                                                                                                                                                                            | (props: TransferPanelProps) => React.ReactNode                                                                                         | -             |          |

### TransferDataItem

```typescript
export type TransferDataItem = {
    label: string | React.ReactNode;
    value: string;
    title?: string;
    disabled?: boolean;
    children?: TransferDataItem[];
    [key: string]: unknown;
};
```

### PositionType

```typescript
export type PositionType = 'left' | 'right';
```

### DragGapType

```typescript
export type DragGapType = 'before' | 'after';
```

### ExtraOptions

```typescript
export type ExtraOptions = {
    /**
     * 移动的方向，值为'left'或'right'
     * @en Move direction, 'left' or 'right'
     */
    direction: PositionType;
    /**
     * 左面板值
     * @en Data of left panel
     */
    leftValue: string[];
    /**
     * 左面板数据
     * @en Data of left panel
     */
    leftData: TransferDataItem[];
    /**
     * 发生移动的数据
     * @en Moved data
     */
    movedData: TransferDataItem[];
    /**
     * 发生移动的值
     * @en Moved value
     */
    movedValue: string[];
};
```

## ARIA and KeyBoard

| KeyBoard   | Descripiton                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------------- |
| Up Arrow   | Get the previous item focus of the current item                                                    |
| Down Arrow | Get the next item focus of the current item                                                        |
| Enter      | the item selected in the current list to move to another list                                      |
| Space      | Select or cancel the current item or the item selected in the current list to move to another list |
