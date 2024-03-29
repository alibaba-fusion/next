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
</Select>
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

| Param                  | Description                                                                                                                                                                  | Type                                                                                                                             | Default Value                         | Required | Supported Version |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------- | ----------------- |
| size                   | Size                                                                                                                                                                         | 'small' \| 'medium' \| 'large'                                                                                                   | 'medium'                              |          | -                 |
| children               | Child elements, reference the demo for details                                                                                                                               | ReactElementWithTypeMark \| ReactElementWithTypeMark[]                                                                           | -                                     |          | -                 |
| name                   | Name                                                                                                                                                                         | string                                                                                                                           | -                                     |          | -                 |
| value                  | Current value, for controlled mode                                                                                                                                           | DataSourceItem \| DataSourceItem[]                                                                                               | -                                     |          | -                 |
| defaultValue           | Initial default value                                                                                                                                                        | DataSourceItem \| DataSourceItem[]                                                                                               | -                                     |          | -                 |
| placeholder            | Placeholder when no value                                                                                                                                                    | string                                                                                                                           | -                                     |          | -                 |
| autoWidth              | Whether the width of the drop                                                                                                                                                | boolean                                                                                                                          | true                                  |          | -                 |
| label                  | Custom inline label                                                                                                                                                          | React.ReactNode                                                                                                                  | -                                     |          | -                 |
| hasClear               | Whether to have a clear button (valid in single mode)                                                                                                                        | boolean                                                                                                                          | -                                     |          | -                 |
| state                  | Validation status                                                                                                                                                            | 'error' \| 'loading' \| 'success' \| 'warning'                                                                                   | -                                     |          | -                 |
| readOnly               | Whether it is read-only, read-only mode can expand the pop                                                                                                                   | boolean                                                                                                                          | -                                     |          | -                 |
| disabled               | Whether to disable the selector                                                                                                                                              | boolean                                                                                                                          | -                                     |          | -                 |
| visible                | Whether the pop                                                                                                                                                              | boolean                                                                                                                          | -                                     |          | -                 |
| defaultVisible         | Whether the pop                                                                                                                                                              | boolean                                                                                                                          | -                                     |          | -                 |
| onVisibleChange        | Callback when the pop                                                                                                                                                        | (visible: boolean, type?: VisibleChangeType) => void                                                                             | -                                     |          | -                 |
| popupContainer         | Popup mounting container                                                                                                                                                     | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement)                                                                  | -                                     |          | -                 |
| popupClassName         | Popup class name                                                                                                                                                             | string                                                                                                                           | -                                     |          | -                 |
| popupStyle             | Popup inline style                                                                                                                                                           | React.CSSProperties                                                                                                              | -                                     |          | -                 |
| popupProps             | Props added to the popup                                                                                                                                                     | PopupProps                                                                                                                       | -                                     |          | -                 |
| followTrigger          | Whether to follow the trigger scroll                                                                                                                                         | boolean                                                                                                                          | -                                     |          | -                 |
| popupContent           | Custom popup content                                                                                                                                                         | React.ReactNode                                                                                                                  | -                                     |          | -                 |
| menuProps              | Menu property                                                                                                                                                                | MenuProps                                                                                                                        | -                                     |          | 1.18              |
| filterLocal            | Use local filtering, when the data source is remote, you need to close this item                                                                                             | boolean                                                                                                                          | true                                  |          | -                 |
| filter                 | Local filtering method, return a Boolean value to determine whether to retain<br/><br/>**signature**:<br/>**params**:<br/>_key_: Search keyword<br/>_item_: Render node item | (key: string \| number, item: ObjectItem) => boolean                                                                             | -                                     |          | -                 |
| onToggleHighlightItem  | Callback when pressing keyboard up and down keys to switch the menu highlight option                                                                                         | (highlightKey?: unknown, type?: HighlightChangeType) => void                                                                     | -                                     |          | -                 |
| useVirtual             | Whether to enable virtual scrolling mode                                                                                                                                     | boolean                                                                                                                          | -                                     |          | -                 |
| dataSource             | Data source, can dynamically render child items                                                                                                                              | Array\<DataSourceItem>                                                                                                           | -                                     |          | -                 |
| itemRender             | Render MenuItem content method<br/><br/>**signature**:<br/>**params**:<br/>_item_: item<br/>_searchValue_: searchValue                                                       | (item: ObjectItem, searchValue: string \| undefined) => React.ReactNode                                                          | -                                     |          | -                 |
| mode                   | Select mode                                                                                                                                                                  | 'single' \| 'multiple' \| 'tag'                                                                                                  | 'single'                              |          | -                 |
| notFoundContent        | Popup content is empty text                                                                                                                                                  | React.ReactNode                                                                                                                  | -                                     |          | -                 |
| onChange               | Callback when Select changes<br/><br/>**signature**:<br/>**params**:<br/>_value_: value<br/>_actionType_: actionType<br/>_item_: item                                        | (<br/> value: DataSourceItem \| DataSourceItem[],<br/> actionType: string,<br/> item?: ObjectItem \| ObjectItem[]<br/> ) => void | -                                     |          | -                 |
| hasBorder              | Whether there is a border                                                                                                                                                    | boolean                                                                                                                          | -                                     |          | -                 |
| hasArrow               | Whether there is a drop                                                                                                                                                      | boolean                                                                                                                          | true                                  |          | -                 |
| showSearch             | Whether it can be searched after expansion (fixed in tag mode)                                                                                                               | boolean                                                                                                                          | false                                 |          | -                 |
| onSearch               | Callback when the search box value changes                                                                                                                                   | (value: string, e: React.ChangeEvent\<HTMLInputElement>) => void                                                                 | -                                     |          | -                 |
| onSearchClear          | Callback when the search box value is cleared                                                                                                                                | (actionType?: string) => void                                                                                                    | -                                     |          | -                 |
| hasSelectAll           | Whether there is a full selection function in multi                                                                                                                          | boolean \| string                                                                                                                | -                                     |          | -                 |
| fillProps              | The key to fill in the value of the selection box                                                                                                                            | string                                                                                                                           | -                                     |          | -                 |
| useDetailValue         | OnChange returns the value using the object of dataSource                                                                                                                    | boolean                                                                                                                          | -                                     |          | -                 |
| cacheValue             | Whether to retain the selected content when the dataSource changes                                                                                                           | boolean                                                                                                                          | true                                  |          | -                 |
| valueRender            | Custom rendering Select selected value effects                                                                                                                               | (item: ObjectItem, props?: SelectProps) => React.ReactNode                                                                       | item =\> `item.label \|\| item.value` |          | -                 |
| searchValue            | Controlled search value, generally does not need to set                                                                                                                      | string                                                                                                                           | -                                     |          | -                 |
| tagInline              | Whether it is displayed on one line, only in mode multiple                                                                                                                   | boolean                                                                                                                          | false                                 |          | -                 |
| maxTagCount            | Maximum number of tags to display                                                                                                                                            | number                                                                                                                           | -                                     |          | -                 |
| adjustTagSize          | Whether the tag size is consistent with the select size, only in multiple/tag mode                                                                                           | boolean                                                                                                                          | false                                 |          | 1.24              |
| maxTagPlaceholder      | Content to display when hidden excess tags<br/><br/>**signature**:<br/>**params**:<br/>_selectedValues_: Selected Value<br/>_totalValues_: Total Value                       | (<br/> selectedValues: ObjectItem[],<br/> totalValues: ObjectItem[]<br/> ) => React.ReactNode \| HTMLElement                     | -                                     |          | -                 |
| hiddenSelected         | Whether to hide the menu immediately after selection (effective in mode multiple/tag)                                                                                        | boolean                                                                                                                          | -                                     |          | -                 |
| showDataSourceChildren | Whether to show children in dataSource                                                                                                                                       | boolean                                                                                                                          | true                                  |          | -                 |
| onRemove               | Callback when tag is deleted                                                                                                                                                 | (item: ObjectItem) => void                                                                                                       | -                                     |          | -                 |
| onFocus                | Callback when Select gets focus                                                                                                                                              | (e: React.FocusEvent\<HTMLInputElement>) => void                                                                                 | -                                     |          | -                 |
| onBlur                 | Callback when Select loses focus                                                                                                                                             | (e: React.FocusEvent\<HTMLInputElement>) => void                                                                                 | -                                     |          | -                 |
| onKeyDown              | Callback when Select triggers keyboard events                                                                                                                                | (e: React.KeyboardEvent\<HTMLElement>) => void                                                                                   | -                                     |          | -                 |
| isPreview              | Whether it is a preview state                                                                                                                                                | boolean                                                                                                                          | -                                     |          | -                 |
| renderPreview          | Render preview content<br/><br/>**signature**:<br/>**params**:<br/>_values_: Value<br/>_props_: Props                                                                        | (<br/> values: DataSourceItem \| DataSourceItem[],<br/> props?: SelectProps<br/> ) => React.ReactNode                            | -                                     |          | -                 |
| autoHighlightFirstItem | Automatically highlight the first option                                                                                                                                     | boolean                                                                                                                          | true                                  |          | -                 |
| highlightKey           | Highlight key                                                                                                                                                                | string                                                                                                                           | -                                     |          | -                 |
| defaultHighlightKey    | Default highlight key                                                                                                                                                        | string \| null                                                                                                                   | -                                     |          | -                 |
| popupAutoFocus         | Whether to automatically focus to the popup when expanding the drop                                                                                                          | boolean                                                                                                                          | false                                 |          | -                 |
| popupComponent         | Component used to render the popup                                                                                                                                           | React.FunctionComponent \| React.ComponentClass \| string                                                                        | -                                     |          | -                 |
| tagClosable            | Whether tag can be closed                                                                                                                                                    | boolean                                                                                                                          | true                                  |          | 1.20              |

### Select.AutoComplete

| Param                  | Description                                                                          | Type                                                            | Default Value | Required |
| ---------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ------------- | -------- |
| size                   | Size                                                                                 | 'small' \| 'medium' \| 'large'                                  | 'medium'      |          |
| value                  | Current value, for controlled mode                                                   | string \| number \| null                                        | -             |          |
| defaultValue           | Initial default value                                                                | string \| number                                                | -             |          |
| placeholder            | Placeholder when no value                                                            | string                                                          | -             |          |
| autoWidth              | Whether the width of the drop                                                        | boolean                                                         | true          |          |
| label                  | Custom inline label                                                                  | React.ReactNode                                                 | -             |          |
| hasClear               | Whether to have a clear button (valid in single mode)                                | boolean                                                         | -             |          |
| state                  | Validation status                                                                    | 'error' \| 'loading' \| 'success' \| 'warning'                  | -             |          |
| readOnly               | Read                                                                                 | boolean                                                         | -             |          |
| disabled               | Whether to disable the selector                                                      | boolean                                                         | -             |          |
| visible                | Whether the pop                                                                      | boolean                                                         | -             |          |
| defaultVisible         | Whether the pop                                                                      | boolean                                                         | -             |          |
| onVisibleChange        | Callback when the pop                                                                | (visible: boolean, type?: VisibleChangeType) => void            | -             |          |
| popupContainer         | Popup mounting container                                                             | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement) | -             |          |
| popupClassName         | Popup class name                                                                     | string                                                          | -             |          |
| popupStyle             | Popup inline style                                                                   | React.CSSProperties                                             | -             |          |
| popupProps             | Props added to the popup                                                             | PopupProps                                                      | -             |          |
| popupContent           | Custom popup content                                                                 | React.ReactNode                                                 | -             |          |
| followTrigger          | Whether to follow the trigger scroll                                                 | boolean                                                         | -             |          |
| filterLocal            | Use local filtering, when the data source is remote, you need to close this item     | boolean                                                         | true          |          |
| filter                 | Local filtering method, return a Boolean value to determine whether to retain        | (key: string \| number, item: ObjectItem) => boolean            | -             |          |
| onToggleHighlightItem  | Callback when pressing keyboard up and down keys to switch the menu highlight option | (highlightKey: unknown, ...args: unknown[]) => void             | -             |          |
| useVirtual             | Whether to enable virtual scrolling mode                                             | boolean                                                         | -             |          |
| dataSource             | Data source, can dynamically render child items                                      | Array\<DataSourceItem>                                          | -             |          |
| itemRender             | Render MenuItem content                                                              | (item: ObjectItem) => React.ReactNode                           | -             |          |
| onChange               | Callback when AutoComplete changes                                                   | (value: string, actionType: string, item?: ObjectItem) => void  | -             |          |
| onKeyDown              | -                                                                                    | (e: React.KeyboardEvent\<HTMLElement>) => void                  | -             |          |
| fillProps              | The key to fill in the value of the selection box                                    | string                                                          | 'value'       |          |
| autoHighlightFirstItem | Automatically highlight the first option                                             | boolean                                                         | true          |          |
| highlightKey           | Highlight key                                                                        | string                                                          | -             |          |
| defaultHighlightKey    | Default highlight key                                                                | string                                                          | -             |          |
| onFocus                | Callback when AutoComplete gets focus                                                | InputProps['onFocus']                                           | -             |          |
| children               | Child elements, reference the demo for details                                       | ReactElementWithTypeMark \| ReactElementWithTypeMark[]          | -             |          |
| highlightHolder        | Whether to display the current highlighted option as a placeholder                   | boolean                                                         | -             |          |

### Select.OptionGroup

| Param | Description               | Type            | Default Value | Required |
| ----- | ------------------------- | --------------- | ------------- | -------- |
| label | Set the text of the group | React.ReactNode | -             |          |

### Select.Option

| Param    | Description        | Type                                             | Default Value | Required |
| -------- | ------------------ | ------------------------------------------------ | ------------- | -------- |
| value    | Option value       | string \| number \| boolean \| null \| undefined | -             | yes      |
| disabled | Whether to disable | boolean                                          | -             |          |

### ObjectItem

| Param       | Description | Type                                             | Default Value | Required |
| ----------- | ----------- | ------------------------------------------------ | ------------- | -------- |
| value       | -           | string \| number \| boolean \| null \| undefined | -             |          |
| label       | -           | string \| number \| boolean                      | -             |          |
| color       | -           | string                                           | -             |          |
| disabled    | -           | boolean                                          | -             |          |
| children    | -           | DataSourceItem[]                                 | -             |          |
| title       | -           | string                                           | -             |          |
| \_\_isAddon | -           | boolean                                          | -             |          |

### DataSourceItem

```typescript
export type DataSourceItem = ObjectItem | string | boolean | number | null | undefined;
```

### VisibleChangeType

```typescript
export type VisibleChangeType =
    | 'itemClick'
    | 'enter'
    | 'esc'
    | 'keyDown'
    | 'selectAll'
    | 'update'
    | 'change'
    | 'tag';
```

### HighlightChangeType

```typescript
export type HighlightChangeType = 'up' | 'down' | 'autoFirstItem' | 'highlightKeyToNull';
```

## Select/AutoComplete Inner Methods(Got by refs)

| Param | Descripiton                                                                                                                                                      | Type     | Default Value |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| focus | get foucs<br><br>**signature**:<br> Function(start:Number, end: Number)<br>**params**:<br>_start_: {Number} cursor postion<br>_end_: {Number} select end postion | Function |               |

## ARIA and KeyBoard

| 按键       | 说明                                            |
| :--------- | :---------------------------------------------- |
| Up Arrow   | Get the previous item focus of the current item |
| Down Arrow | Get the next item focus of the current item     |
| Enter      | Open the list or select current item            |
| Esc        | Close the list                                  |
