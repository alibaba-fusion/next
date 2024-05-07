# NumberPicker

-   category: Components
-   family: DataEntry
-   type: form

---

## Guide

### When to use

Number input and auto correct data.

### Attentions

1.  auto Correct may change the input value and make it different from the value which is from onChange.

2.  Some interval value may not trigger the onChange, For example:

    -   `0`=>`0.`=>`0.0`=>`0.01` the second & third step will not trigger onChange, because auto correct will let value always be '0'
    -   Assume min=10, `1`=>`12` the step one ,`1`, will not not trigger onChange, because the numbers are input one by one

3.  if input action does not trigger onChange, it will correct data and trigger onChange when it gets blur

## API

### NumberPicker

| Param             | Descripiton                                                                                                                                                                                        | Type          | Default Value |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------- |
| size              | size<br><br>**option**:<br>'large', 'medium'                                                                                                                                                       | Enum          | 'medium'      |
| type              | display type, fixed to inline when device is phone/tablet<br><br>**option**:<br>'normal'<br>'inline'                                                                                               | Enum          | 'normal'      |
| value             | current value                                                                                                                                                                                      | Number        | -             |
| defaultValue      | default value                                                                                                                                                                                      | Number        | 0             |
| disabled          | disabled or not                                                                                                                                                                                    | Boolean       | -             |
| step              | number changes per click                                                                                                                                                                           | Number/String | 1             |
| precision         | precision for decimals number                                                                                                                                                                      | Number        | 0             |
| editable          | editable or not                                                                                                                                                                                    | Boolean       | true          |
| autoFocus         | auto get focused or not                                                                                                                                                                            | Boolean       | -             |
| onChange          | callback when value changes<br><br>**signature**:<br>Function(value: Number, e: Event) => void<br>**params**:<br>_value_: {Number} data<br>_e_: {Event} DOM Event                                  | Function      | func.noop     |
| onKeyDown         | callback when key press<br><br>**signature**:<br>Function() => void                                                                                                                                | Function      | func.noop     |
| onBlur            | callback when lose focus<br><br>**signature**:<br>Function() => void                                                                                                                               | Function      | func.noop     |
| onCorrect         | callback when data are corrected<br><br>**signature**:<br>Function(obj: Object) => void<br>**params**:<br>_obj_: {Object} {currentValue,oldValue:String}                                           | Function      | func.noop     |
| max               | maximum value                                                                                                                                                                                      | Number        | Infinity      |
| min               | minimum value                                                                                                                                                                                      | Number        | -Infinity     |
| format            | format value for display<br><br>**signature**:<br>Function(value: Number) => String/Number<br>**params**:<br>_value_: {Number} current value<br>**return**:<br>{String/Number} formatted value<br> | Function      | -             |
| hasTrigger        | display btn trigger                                                                                                                                                                                | Boolean       | true          |
| alwaysShowTrigger | always show btn trigger without hover                                                                                                                                                              | Boolean       | false         |

## ARIA and KeyBoard

| KeyBoard   | Descripiton         |
| :--------- | :------------------ |
| Up Arrow   | increase the number |
| Down Arrow | decrease the number |
