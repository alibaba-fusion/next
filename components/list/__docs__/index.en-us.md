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

| Param            | Description                                                                                                                                                  | Type                                               | Default Value | Required |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- | ------------- | -------- |
| header           | List header                                                                                                                                                  | ReactNode                                          | -             |          |
| footer           | List footer                                                                                                                                                  | ReactNode                                          | -             |          |
| size             | List size                                                                                                                                                    | 'medium' \| 'small'                                | 'medium'      |          |
| divider          | Whether to show the divider                                                                                                                                  | boolean                                            | true          |          |
| children         | -                                                                                                                                                            | ReactNode                                          | -             |          |
| dataSource       | List item data source                                                                                                                                        | DataItem[]                                         | -             |          |
| renderItem       | **signature**:<br/>**params**:<br/>_current_: The current item<br/>_index_: The index of the current item<br/>**return**:<br/>The ReactElement be customized | (current: DataItem, index: number) => ReactElement | -             |          |
| loading          | Loading state control                                                                                                                                        | boolean                                            | false         |          |
| loadingComponent | Custom Loading component<br/><br/>**signature**:<br/>**params**:<br/>_props_: Pass through props<br/>**return**:<br/>Custom Loading component                | (props: LoadingProps) => ReactElement              | -             |          |
| emptyContent     | The content displayed when the list is empty                                                                                                                 | ReactNode                                          | -             |          |

### List.Item

| Param       | Description                                        | Type      | Default Value | Required |
| ----------- | -------------------------------------------------- | --------- | ------------- | -------- |
| title       | The title of the list item                         | ReactNode | -             |          |
| description | The description of the list item                   | ReactNode | -             |          |
| media       | The avatar / icon / image content of the list item | ReactNode | -             |          |
| extra       | Extra content                                      | ReactNode | -             |          |
