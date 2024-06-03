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

| Param             | Description                                                                                                  | Type                                                                                                                                                                            | Default Value | Required | Supported Version |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- | ----------------- |
| size              | Size                                                                                                         | 'large' \| 'medium' \| 'small'                                                                                                                                                  | 'medium'      |          | -                 |
| type              | Display type                                                                                                 | 'normal' \| 'inline'                                                                                                                                                            | 'normal'      |          | -                 |
| value             | Current value                                                                                                | number \| string                                                                                                                                                                | -             |          | -                 |
| defaultValue      | Default value                                                                                                | number \| string                                                                                                                                                                | -             |          | -                 |
| disabled          | Disabled or not                                                                                              | boolean                                                                                                                                                                         | -             |          | -                 |
| step              | Number changes per click                                                                                     | number \| string                                                                                                                                                                | 1             |          | -                 |
| precision         | Precision for decimals number                                                                                | number                                                                                                                                                                          | 0             |          | -                 |
| editable          | Editable or not                                                                                              | boolean                                                                                                                                                                         | true          |          | -                 |
| autoFocus         | Auto get focused or not                                                                                      | boolean                                                                                                                                                                         | -             |          | -                 |
| onChange          | Callback when value changes<br/><br/>**signature**:<br/>**params**:<br/>_value_: value<br/>_e_: e            | (value: number \| string \| undefined, e: (React.FocusEvent<HTMLInputElement> \| React.KeyboardEvent<HTMLInputElement>) & { triggerType: 'up' \| 'down' \| undefined }) => void | func.noop     |          | -                 |
| onKeyDown         | Callback when key press<br/><br/>**signature**:<br/>**params**:<br/>_e_: e                                   | InputProps['onKeyDown']                                                                                                                                                         | func.noop     |          | -                 |
| onFocus           | Callback when get focus<br/><br/>**signature**:<br/>**params**:<br/>_e_: e                                   | InputProps['onFocus']                                                                                                                                                           | -             |          | -                 |
| onBlur            | Callback when lose focus<br/><br/>**signature**:<br/>**params**:<br/>_e_: e                                  | InputProps['onBlur']                                                                                                                                                            | func.noop     |          | -                 |
| onCorrect         | Callback when data are corrected<br/><br/>**signature**:<br/>**params**:<br/>_obj_: obj                      | (obj: { currentValue: number \| string; oldValue: number \| string }) => void                                                                                                   | func.noop     |          | -                 |
| max               | Maximum value                                                                                                | number \| string                                                                                                                                                                | -             |          | -                 |
| min               | Minimum value                                                                                                | number \| string                                                                                                                                                                | -             |          | -                 |
| format            | Format value for display<br/><br/>**signature**:<br/>**params**:<br/>_value_: value                          | (value: string \| number) => string \| number                                                                                                                                   | -             |          | -                 |
| hasTrigger        | Display btn trigger                                                                                          | boolean                                                                                                                                                                         | true          |          | -                 |
| alwaysShowTrigger | Always show btn trigger without hover                                                                        | boolean                                                                                                                                                                         | false         |          | -                 |
| label             | Inline left label                                                                                            | React.ReactNode                                                                                                                                                                 | -             |          | -                 |
| innerAfter        | Inline right additional content                                                                              | React.ReactNode                                                                                                                                                                 | -             |          | -                 |
| upBtnProps        | Increase button props                                                                                        | ButtonProps                                                                                                                                                                     | -             |          | -                 |
| downBtnProps      | Decrease button props                                                                                        | ButtonProps                                                                                                                                                                     | -             |          | -                 |
| isPreview         | Is preview                                                                                                   | boolean                                                                                                                                                                         | -             |          | -                 |
| renderPreview     | Render content in preview mode<br/><br/>**signature**:<br/>**params**:<br/>_value_: value<br/>_props_: props | (value: number \| string, props: NumberPickerProps) => React.ReactNode                                                                                                          | -             |          | -                 |
| stringMode        | Enable big number support, input and output are all string types                                             | boolean                                                                                                                                                                         | false         |          | 1.24              |
| state             | State                                                                                                        | 'error' \| 'success'                                                                                                                                                            | -             |          | -                 |

## ARIA and KeyBoard

| KeyBoard   | Descripiton         |
| :--------- | :------------------ |
| Up Arrow   | increase the number |
| Down Arrow | decrease the number |
