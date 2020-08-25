# List

-   category: Components
-   family: DataDisplay
-   chinese: 列表
-   type: Display

---

## Develop Guide

1.19.0+ supported

### When to Use

The content can consist of multiple elements of varying type and size.


## API

### List

| Param | Descripiton  | Type  | Default Value |
| ------- | ----------------------------------------- | --------- | -------- |
| header  | List header                                      | ReactNode | -        |
| size    | List size <br><br>**Options**:<br>'medium', 'small' | Enum      | 'medium' |
| footer  | List footer                                  | ReactNode | -        |
| divider | Toggles rendering of the divider the list item  | Boolean   | true     |
| dataSource       | datasource of List                                                                                                                                                                         | Array     | -            |
| renderItem       | when dataSource is set, you can custmize every item by `renderItem` <br><br>**signature**:<br>Function(current: Any, index: Number) => void<br>**params**:<br>_current_: {Any} current item<br>_index_: {Number} index of item | Function  | item => item |
| loading          | is loading                                                                                                                                                                        | Boolean   | false        |
| loadingComponent | custmize Loading Component<br> loadingComponent={props => &lt;Loading {...props}/>}<br><br>**signature**:<br>Function() => void                                                | Function  | -            |
| emptyContent     | content when list is empty                                                                                                                                                              | ReactNode | -            |


### List.Item

| Param | Descripiton  | Type  | Default Value |
| ----------- | ------------------- | --------- | --- |
| title       | title             | ReactNode | -   |
| description | description           | ReactNode | -   |
| media       | set avatar / image / icon | ReactNode | -   |
| extra       | extra content                | ReactNode | -   |
