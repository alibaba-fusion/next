# Pagination

-   category: Components
-   family: Navigation
-   cols: 1
-   type: Navigation

---

## Guide

### When To Use

When there is a lot of content to show when paged load processing is needed.

## API

### Pagination

| Param            | Description                                                                                                                                                                                                                                 | Type                                                         | Default Value   | Required |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------------- | -------- |
| type             | Set the type of Pagination component                                                                                                                                                                                                        | 'normal' \| 'simple' \| 'mini'                               | 'normal'        |          |
| shape            | Forward Back Button Style                                                                                                                                                                                                                   | 'normal' \| 'arrow-only' \| 'arrow-prev-only' \| 'no-border' | 'normal'        |          |
| size             | Set the size of Pagination                                                                                                                                                                                                                  | 'small' \| 'medium' \| 'large'                               | 'medium'        |          |
| current          | （controlled）Current page number                                                                                                                                                                                                           | number                                                       | 1               |          |
| defaultCurrent   | (uncontrolled）Initial page number                                                                                                                                                                                                          | number                                                       | 1               |          |
| onChange         | Callback function when page number changes                                                                                                                                                                                                  | (current: number, e: object) => void                         | -               |          |
| total            | Total pages number                                                                                                                                                                                                                          | number                                                       | 100             |          |
| totalRender      | The rendering functions of total number                                                                                                                                                                                                     | (total: number, range: number[]) => void                     | -               |          |
| pageShowCount    | The number of pages displayed, more use '...' instead                                                                                                                                                                                       | number                                                       | 5               |          |
| pageSize         | How many records in a page                                                                                                                                                                                                                  | number                                                       | 10              |          |
| pageSizeSelector | Set to display selector type per page size                                                                                                                                                                                                  | false \| 'filter' \| 'dropdown'                              | false           |          |
| pageSizeList     | Display selector selectable records                                                                                                                                                                                                         | Array\<number> \| Array\<{ label: string; value: number }>   | [5, 10, 20]     |          |
| pageNumberRender | Custom page number rendering function, function for page number button and digital rendering of current page/total page count                                                                                                               | (index: number) => ReactNode                                 | index =\> index |          |
| pageSizePosition | Set the position of pageSize selector                                                                                                                                                                                                       | 'start' \| 'end'                                             | 'start'         |          |
| useFloatLayout   | Is there a floating layout when pageSize selector is displayed                                                                                                                                                                              | boolean                                                      | false           |          |
| onPageSizeChange | The callback function trigget when the number of pageSize selector changes                                                                                                                                                                  | (pageSize: number) => void                                   | -               |          |
| hideOnlyOnePage  | Whether to hide the pager when the number of pages is 1                                                                                                                                                                                     | boolean                                                      | false           |          |
| showJump         | When the number of pagination is 1, if the hidden pager type is set to normal, after the page number exceeds 5 pages, the jump input box and button will be displayed. When showJump is set to false, the jump zone is no longer displayed. | boolean                                                      | true            |          |
| link             | Set the jump link url of the page number button. Its value is a template string containing \{page\}, such as：http://www.taobao.com/\{page\}                                                                                                | string                                                       | -               |          |
| popupProps       | Props for Popup                                                                                                                                                                                                                             | PopupProps                                                   | -               |          |
| selectProps      | Props for Select                                                                                                                                                                                                                            | SelectProps                                                  | -               |          |

## ARIA and KeyBoard

| KeyBoard | Descripiton      |
| :------- | :--------------- |
| Tab      | switch page      |
| Space    | click the button |
| Enter    | click the button |
