# Card

-   category: Components
-   family: DataDisplay
-   chinese: 卡片
-   type: Basic

---

## Guide

A card is a piece of paper with unique related data taht servers as an entry point to more detailed information.

### When to Use

A card could contain a photo, text, and a link about a single subject.

## API

### Card

| Param     | Description           | Type            | Default Value  |
| --------------- | ------------ | ------------- | ---- |
| title           | Title of card | String        | -    |
| subTitle        | Sub title of card | String        | -    |
| showTitleBullet | If show title bullet | Boolean       | true |
| showHeadDivider | If show head divider | Boolean       | true |
| contentHeight   | Height of content  | String/Number | 120  |
| extra           | Extra of card header | ReactNode     | -    |
| media | Media content | ReactNode | - |
| actions | Actions of card | ReactNode | - |
| free | Whether to open free mode, if opened, can`t set title subTitle ..., must use Card.Header Card.Content ... to set Card | Boolean | - |

### Card.Actions

| 参数        | 说明     | 类型     | 默认值   |
| --------- | ------ | ------ | ----- |
| component | The html tag to be rendered | custom | 'div' |

### Card.Content

| 参数        | 说明     | 类型     | 默认值   |
| --------- | ------ | ------ | ----- |
| component | The html tag to be rendered | custom | 'div' |

### Card.Divider

| 参数        | 说明     | 类型     | 默认值  |
| --------- | ------ | ------ | ---- |
| component | The html tag to be rendered | custom | 'hr' |

### Card.Header

| 参数        | 说明           | 类型        | 默认值   |
| --------- | ------------ | --------- | ----- |
| title     | Title of card        | ReactNode | -     |
| subTitle  | Sub Title of Card       | ReactNode | -     |
| extra     | Extra of card header  | ReactNode | -     |
| component | The html tag to be rendered       | custom    | 'div' |

### Card.Media

| 参数        | 说明      | 类型     | 默认值   |
| --------- | ------- | ------ | ----- |
| component | The html tag to be rendered  | custom | 'div' |
| image     | Media  background image  | String | -     |
| src       | Media source URL | String | -     |
