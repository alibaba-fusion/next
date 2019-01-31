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

> Inhert from  Select.AutoComplete, you can use AutoComplete api directly

| Param | Descripiton  | Type  | Default Value |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| size               | size<br><br>**option**:<br>'large'<br>'medium'                                                                       | Enum          | 'medium'  |
| type               | type. when shape=normal, type options: primary/secondary; when shape=simple, type options: normal/dark;<br><br>**option**:<br>'primary', 'secondary', 'normal', 'dark' | Enum          | 'normal'  |
| shape              | shape<br><br>**option**:<br>'normal', 'simple'                                                                                   | Enum          | 'normal'  |
| defaultValue       | default value                                                                                                                    | String        | -         |
| value              | current value                                                                                                                      | String/Number | -         |
| onChange           | callback when value changes<br><br>**signature**:<br>Function() => void                                             | Function      | func.noop |
| onSearch           | callback when search button clicked<br><br>**signature**:<br>Function() => void                                     | Function      | func.noop |
| defaultFilterValue | default filter                                                                                                      | String        | -         |
| filter             | filter                                                                                                               | Array         | \[]       |
| filterValue        | filter value                                                                                                         | String        | -         |
| onFilterChange     | callback when filter changes<br><br>**signature**:<br>Function() => void                                             | Function      | func.noop |
| dataSource         | dropdown menu data source                                                                                            | Array         | -         |
| placeholder        | default hint                                                                                                                       | String        | -         |
| searchText         | button  text                                                                                                               | ReactNode     | -         |
| filterProps        | filter props                                                                                                                  | Object        | -         |
| buttonProps        | props for Button                                                                                                                    | Object        | {}        |
| popupContent       | custom popup menu                                                                                                                 | ReactNode     | -         |
| visible            | popupContent is displayed                                                                                                                 | Boolean       | -         |
| hasClear           | show clear text button                                                                                                                   | Boolean       | false     |
| disabled           | disabled or not                                                                                                                   | Boolean       | false     |



## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Tab       | Bind the onSearch event    |
