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

| Param           | Description                                                                                                             | Type             | Default Value | Required | Supported Version |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------- | -------- | ----------------- |
| media           | Media content                                                                                                           | ReactNode        | -             |          | -                 |
| title           | Title of card                                                                                                           | ReactNode        | -             |          | -                 |
| subTitle        | Sub title of card                                                                                                       | ReactNode        | -             |          | -                 |
| actions         | Actions of card                                                                                                         | ReactNode        | -             |          | -                 |
| showTitleBullet | If show title bullet                                                                                                    | boolean          | true          |          | -                 |
| showHeadDivider | If show head divider                                                                                                    | boolean          | true          |          | -                 |
| contentHeight   | Height of content                                                                                                       | string \| number | 120           |          | -                 |
| extra           | Extra of card header                                                                                                    | ReactNode        | -             |          | -                 |
| free            | Whether to open free mode, if opened, can not set title subTitle ..., must use Card.Header Card.Content ... to set Card | boolean          | false         |          | -                 |
| hasBorder       | Whether to show border                                                                                                  | boolean          | true          |          | 1.24              |

### Card.Media

| Param     | Description                 | Type        | Default Value | Required |
| --------- | --------------------------- | ----------- | ------------- | -------- |
| component | The html tag to be rendered | ElementType | 'div'         |          |
| image     | Media background image      | string      | -             |          |
| src       | Media source URL            | string      | -             |          |

### Card.Header

| Param     | Description                 | Type        | Default Value | Required |
| --------- | --------------------------- | ----------- | ------------- | -------- |
| title     | Title of card               | ReactNode   | -             |          |
| subTitle  | Sub Title of Card           | ReactNode   | -             |          |
| extra     | Extra of card header        | ReactNode   | -             |          |
| component | The html tag to be rendered | ElementType | 'div'         |          |

### Card.Content

| Param     | Description                 | Type        | Default Value | Required |
| --------- | --------------------------- | ----------- | ------------- | -------- |
| component | The html tag to be rendered | ElementType | 'div'         |          |

### Card.Divider

| Param     | Description                 | Type        | Default Value | Required |
| --------- | --------------------------- | ----------- | ------------- | -------- |
| component | The html tag to be rendered | ElementType | 'hr'          |          |
| inset     | Inset                       | boolean     | -             |          |

### Card.Actions

| Param     | Description                 | Type        | Default Value | Required |
| --------- | --------------------------- | ----------- | ------------- | -------- |
| component | The html tag to be rendered | ElementType | 'div'         |          |
