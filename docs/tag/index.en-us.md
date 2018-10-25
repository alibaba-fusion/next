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

| Param | Descripiton  | Type  | Default Value |
| ----------- | ----------------------------------------------------------------------------------- | -------- | --------- |
| size        | size of tag（large = medium for compatible with form situation ）<br><br>**optional**:<br>'small', 'medium', 'large' | Enum     | 'medium'  |
| type        | type of tag <br><br>**optional**:<br>'normal', 'primary'                                        | Enum     | 'normal'  |
| animation   | enable animation or not                                                                           | Boolean  | false     |
| afterAppear | callback when animation ends<br><br>**signatures**:<br>Function() => void                                 | Function | func.noop |
| onClick     | callback when it is clicked<br><br>**signatures**:<br>Function() => void                                           | Function | func.noop |

### Tag.Closeable

| Param | Descripiton  | Type  | Default Value |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --- |
| closeArea  | area for responsing close action, tag: entire tag, tail(default): only the button at the end <br><br>**optional**:<br>'tag', 'tail'                                                                                         | Enum     | -   |
| size       | size of tag（large = medium for compatible with form situation ）<br><br>**optional**:<br>'small', 'medium', 'large'                                                                                         | Enum     | -   |
| onClose    | callback when closeArea is clicked<br><br>**signatures**:<br>Function(from: String) => Boolean<br>**params**:<br>_from_: {String} clicked place, tag: entire, tail: button at the end<br>**returns**:<br>{Boolean} true to close tag, false to prevent the close action<br> | Function | -   |
| afterClose | callback when tag has been closed <br><br>**signatures**:<br>Function() => void                                                                                                                              | Function | -   |
| onClick    | callback when tag is clicked<br><br>**signatures**:<br>Function() => void                                                                                                                                    | Function | -   |

### Tag.Selectable

| Param | Descripiton  | Type  | Default Value |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| checked        | check the tag, under controlled way                                                                                                                                 | Boolean  | -         |
| defaultChecked | tag is checked by default, under uncontrolled way                                                                                                                         | Boolean  | -         |
| onChange       | callback when check state changes <br><br>**signatures**:<br>Function(checked: Boolean, e: Event) => void<br>**params**:<br>_checked_: {Boolean} whether tag is checked or not <br>_e_: {Event} Dom Event Object | Function | func.noop |
| disabled       | disable tag                                                                                                                                      | Boolean  | -         |
