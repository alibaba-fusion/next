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

| Param | Descripiton  | Type  | Default Value |
| ------------ | -------------------------------------------------------------------------------------------------- | -------- | --------- |
| defaultValue | default value                                                                                                | Number   | 0         |
| size         | size<br><br>**options**:<br>'small', 'medium', 'large'                                                   | Enum     | 'medium'  |
| value        | value                                                                                                  | Number   | -         |
| count        | full mark of rating                                                                                              | Number   | 5         |
| showGrade    | display grade or not                                                                                         | Boolean  | false     |
| allowHalf    | allow half start or not                                                                                         | Boolean  | false     |
| onChange     | callback function on click star<br><br>**signatures**:<br>Function(value: String) => void<br>**params**:<br>_value_: {String} score | Function | func.noop |
| onHoverChange     | callback function on hover star<br><br>**signatures**:<br>Function(value: String) => void<br>**params**:<br>_value_: {String} score | Function | func.noop |
| disabled     | disabled rate or not                                                                                               | Boolean  | false     |
| readAs        | make sense when you set id and enable accessibility<br><br>**signatures**:<br>Function() => void                                                | Function | val => val |
