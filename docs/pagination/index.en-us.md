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

| Param | Descripiton  | Type  | Default Value |
| -------------------- | -------------------------------- | --------------- | --------------- |
| size             | Set the size of Pagination component<br><br>**option**:<br>'small', 'medium', 'large'              | Enum                              | 'medium'    |
| type             | Set the type of Pagination component<br><br>**option**:<br>'normal', 'simple', 'mini'                                                                                          | Enum                              | 'normal'    |
| shape            | Forward Back Button Style<br><br>**option**:<br>'normal', 'arrow-only', 'arrow-prev-only', 'no-border'                                                            | Enum                              | 'normal'    |
| current          | （controlled）Current page number                  | Number           | -           |
| defaultCurrent   | （uncontrolled）Initial page number                               | Number                            | 1           |
| onChange         | Callback function when page number changes<br><br>**signatures**:<br>Function(current: Number, e: Object) => void<br>**params**:<br>_current_: {Number} Changed number of pages<br>_e_: {Object} Click envent object | Function                          | () => {}    |
| total            | total pages number                             | Number                            | 100         |
| totalRender      | The rendering functions of total number <br><br>**signatures**:<br>Function(total: Number, range: Array) => void<br>**params**:<br>_total_: {Number} Total number<br>_range_: {Array} The intervals of current data in the total number    | Function                          | -           |
| pageShowCount    | The number of pages displayed, more use '...' instead      | Number    | 5           |
| pageSize         | How many records in a page                          | Number                            | 10          |
| pageSizeSelector | Set to display selector type per page size <br><br>**option**:<br>false, 'filter', 'dropdown'                                                                                      | Enum                              | false       |
| pageSizeList     | Display selector selectable records-number per page                                  | Array&lt;Number>/Array&lt;Object> | [5, 10, 20] |
| pageNumberRender | Custom page number rendering function, function for page number button and digital rendering of current page/total page count<br><br>**signatures**:<br>Function(index: Number) => ReactNode<br>**params**:<br>_index_: {Number} Page number of page, starting from 1<br>**return**:<br>{ReactNode} Return rendering results<br> | Function                          | index => index |
| pageSizePosition | Set the position of pageSize selector<br><br>**option**:<br>'start', 'end'                                                                                              | Enum                              | 'start'     |
| useFloatLayout   | Is there a floating layout when pageSize selector is displayed                  | Boolean                           | false       |
| onPageSizeChange |  The callback function trigget when the number of pageSize selector changes<br><br>**signatures**:<br>Function(pageSize: Number) => void<br>**params**:<br>_pageSize_: {Number} The number of pagesize changed                         | Function                          | () => {}    |
| hideOnlyOnePage  | Whether to hide the pager when the number of pages is 1                     | Boolean                           | false       |
| showJump         | When the number of pagination is 1, if the hidden pager type is set to normal, after the page number exceeds 5 pages, the jump input box and button will be displayed. When showJump is set to false, the jump zone is no longer displayed.                                                                      | Boolean                           | true        |
| link             | Set the jump link url of the page number button. Its value is a template string containing {page}, such as：<http://xxx.com/{page}>                                                                                  | String                            | -           |
