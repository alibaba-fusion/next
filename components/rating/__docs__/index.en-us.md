# Rating

-   category: Components
-   family: DataEntry
-   chinese: 评分
-   type: Basic

---

## Guide

Rating component is usually used for customer feedback.

## API

### Rating

| Param         | Description                                                                                                                                                                                                         | Type                                                   | Default Value | Required |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------- | -------- |
| defaultValue  | Default value                                                                                                                                                                                                       | number                                                 | -             |          |
| value         | Value（controlled mode）                                                                                                                                                                                            | number                                                 | -             |          |
| size          | Size                                                                                                                                                                                                                | 'small' \| 'medium' \| 'large'                         | 'medium'      |          |
| count         | Full mark of rating                                                                                                                                                                                                 | number                                                 | 5             |          |
| showGrade     | Display grade or not                                                                                                                                                                                                | boolean                                                | false         |          |
| allowHalf     | Allow half star or not                                                                                                                                                                                              | boolean                                                | -             |          |
| allowClear    | Whether to allow clear when click again                                                                                                                                                                             | boolean                                                | false         |          |
| onChange      | Callback function on click star                                                                                                                                                                                     | (value: number) => void                                | -             |          |
| onHoverChange | Callback function on hover star                                                                                                                                                                                     | (value?: number) => void                               | -             |          |
| disabled      | Disabled or not                                                                                                                                                                                                     | boolean                                                | false         |          |
| isPreview     | Is preview mode or not                                                                                                                                                                                              | boolean                                                | false         |          |
| renderPreview | Render method when is preview mode.（Required when isPreview=true）<br/><br/>**signature**:<br/>**params**:<br/>_value_: Score<br/>_props_: The props of rating<br/>**return**:<br/>The render content when preview | (value: number, props: RatingProps) => React.ReactNode | -             |          |
| readAs        | Custom display of grade<br/><br/>**signature**:<br/>**params**:<br/>_val_: Score value<br/>**return**:<br/>Score label                                                                                              | (val: number) => React.ReactNode                       | -             |          |
| type          | -                                                                                                                                                                                                                   | string                                                 | -             |          |

## ARIA and KeyBoard

| KeyBoard    | Descripiton          |
| :---------- | :------------------- |
| Up Arrow    | increase star rating |
| Down Arrow  | decrease star rating |
| Right Arrow | increase star rating |
| Left Arrow  | decrease star rating |
