# Search

-   category: Components
-   family: DataEntry
-   type: form
-   cols: 1

---

## Guide

### When to use

search data in forms or pages.

## API

### Search

| Param                  | Description                                                               | Type                                                            | Default Value | Required |
| ---------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------- | -------- |
| size                   | -                                                                         | 'large' \| 'medium'                                             | 'medium'      |          |
| value                  | -                                                                         | string \| number                                                | -             |          |
| defaultValue           | -                                                                         | string                                                          | -             |          |
| placeholder            | Default hint                                                              | string                                                          | -             |          |
| autoWidth              | -                                                                         | boolean                                                         | -             |          |
| label                  | -                                                                         | React.ReactNode                                                 | -             |          |
| hasClear               | Show clear button                                                         | boolean                                                         | -             |          |
| state                  | -                                                                         | 'error' \| 'loading'                                            | -             |          |
| readOnly               | -                                                                         | boolean                                                         | -             |          |
| disabled               | Disabled or not                                                           | boolean                                                         | -             |          |
| visible                | Is popupContent displayed                                                 | boolean                                                         | -             |          |
| defaultVisible         | -                                                                         | boolean                                                         | -             |          |
| onVisibleChange        | -                                                                         | (visible: boolean) => void                                      | -             |          |
| popupContainer         | -                                                                         | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement) | -             |          |
| popupClassName         | -                                                                         | string                                                          | -             |          |
| popupStyle             | -                                                                         | React.CSSProperties                                             | -             |          |
| popupProps             | -                                                                         | PopupProps                                                      | -             |          |
| popupContent           | Custom popup content                                                      | React.ReactNode                                                 | -             |          |
| filterLocal            | -                                                                         | boolean                                                         | -             |          |
| filter                 | Filter                                                                    | SelectProps['dataSource']                                       | -             |          |
| useVirtual             | -                                                                         | boolean                                                         | -             |          |
| dataSource             | Dropdown menu dataSource                                                  | AutoCompleteProps['dataSource']                                 | -             |          |
| itemRender             | -                                                                         | (item: Item) => React.ReactNode                                 | -             |          |
| onChange               | Callback when value changes                                               | AutoCompleteProps['onChange']                                   | -             |          |
| fillProps              | The key of the value filled in the selection box, the default is value    | string                                                          | -             |          |
| prefix                 | -                                                                         | string                                                          | -             |          |
| shape                  | Shape                                                                     | 'normal' \| 'simple'                                            | 'normal'      |          |
| type                   | -                                                                         | 'primary' \| 'secondary' \| 'normal' \| 'dark'                  | 'normal'      |          |
| onSearch               | Callback when search button clicked                                       | (value: string, filterValue?: string) => void                   | -             |          |
| defaultFilterValue     | DefaultFilterValue                                                        | string                                                          | -             |          |
| filterValue            | FilterValue                                                               | string                                                          | -             |          |
| onFilterChange         | Callback when filter changes                                              | (filter: string) => void                                        | -             |          |
| searchText             | SearchText                                                                | React.ReactNode                                                 | -             |          |
| filterProps            | FilterProps                                                               | SelectProps                                                     | -             |          |
| buttonProps            | Props for Button                                                          | ButtonProps                                                     | -             |          |
| hasIcon                | Show find button                                                          | boolean                                                         | -             |          |
| icons                  | Configurable icons, including search, etc                                 | {<br/> search?: React.ReactNode;<br/> }                         | -             |          |
| followTrigger          | Follow Trigger or not                                                     | boolean                                                         | -             |          |
| autoHighlightFirstItem | Whether to automatically highlight the first element                      | boolean                                                         | -             |          |
| onToggleHighlightItem  | Callback for keyboard up and down keys to switch menu highlighted options | AutoCompleteProps['onToggleHighlightItem']                      | -             |          |

## Search Inner Methods(Got by refs)

| Param | Descripiton                                                                                                                                                      | Type     | Default Value |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| focus | get foucs<br><br>**signature**:<br> Function(start:Number, end: Number)<br>**params**:<br>_start_: {Number} cursor postion<br>_end_: {Number} select end postion | Function |               |

## ARIA and KeyBoard

| KeyBoard | Descripiton                |
| :------- | :------------------------- |
| Tab      | Trigger the onSearch event |
