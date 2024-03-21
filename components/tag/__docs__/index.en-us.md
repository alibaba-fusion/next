# Tag

-   category: Components
-   family: DataDisplay
-   type: display

---

## Guide

Tags are used to mark something for its atrribute, or to classify things

### When to use

-   mark something
-   classification

### Attention

1. the attribute `size` can be set to `large`, but for compatible with form situation, `size` = `large` is actually equal to `size` = `medium`,
2. it is not recommanded to use large text inside Tag;

## API

### Tag

| Param       | Description                                                                                      | Type                                                                                                   | Default Value | Required | Supported Version |
| ----------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------- | -------- | ----------------- |
| type        | Type of tag                                                                                      | 'normal' \| 'primary'                                                                                  | 'normal'      |          | -                 |
| size        | The size of the tag                                                                              | 'small' \| 'medium' \| 'large'                                                                         | -             |          | -                 |
| color       | Tag color, currently supports: blue, green, orange, red, turquoise, yellow, and hex color values | string                                                                                                 | -             |          | 1.19.0            |
| animation   | Enable animation or not                                                                          | boolean                                                                                                | false         |          | -                 |
| afterAppear | Callback after the animation of the tag appears                                                  | (node: HTMLElement) => void                                                                            | -             |          | -                 |
| onClick     | Callback when it is clicked                                                                      | (<br/> event: React.MouseEvent\<HTMLDivElement> \| React.KeyboardEvent\<HTMLDivElement><br/> ) => void | -             |          | -                 |

### Tag.Closeable

Extends all props of `Tag`

| Param      | Description                                                                                                                                                                   | Type                                                     | Default Value | Required |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------- | -------- |
| closeArea  | The area which triggers onClose event for closeable tag                                                                                                                       | CloseArea                                                | 'tail'        |          |
| onClose    | Callback when closeArea is clicked<br/><br/>**signature**:<br/>**params**:<br/>_from_: Clicked place<br/>**return**:<br/>True to close tag, false to prevent the close action | (from: CloseArea, node?: HTMLElement \| null) => boolean | -             |          |
| afterClose | Callback when tag has been closed                                                                                                                                             | (node: HTMLElement \| null) => void                      | -             |          |

### Tag.Selectable

Extends all props of `Tag`

| Param          | Description                                               | Type                                                                                                                      | Default Value | Required |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| checked        | Whether the tag is checked, controlled usage              | boolean                                                                                                                   | -             |          |
| defaultChecked | Whether the tag is checked by default, uncontrolled usage | boolean                                                                                                                   | -             |          |
| onChange       | Callback when the checked state changes                   | (<br/> checked: boolean,<br/> e: React.MouseEvent\<HTMLDivElement> \| React.KeyboardEvent\<HTMLDivElement><br/> ) => void | -             |          |

### CloseArea

```typescript
export type CloseArea = 'tag' | 'tail';
```

## ARIA and KeyBoard

| KeyBoard | Descripiton                             |
| :------- | :-------------------------------------- |
| SPACE    | Select,cancel or delete the current tag |
