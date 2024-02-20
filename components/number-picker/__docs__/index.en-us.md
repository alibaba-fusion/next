# NumberPicker

-   category: Components
-   family: DataEntry
-   type: form

---

## Guide

### When to use

Number input and auto correct data.

### Attentions

1.  auto Correct may change the input value and let it be diffrent with onChange return value。

2.  Some interval value may not trigger the onChange, For example：

    -   `0`=>`0.`=>`0.0`=>`0.01` the second & third step will not trigger onChange, because auto correct will let value always be '0'
    -   Assume min=10, `1`=>`12` the step one ,`1`, will not not trigger onChange, because the numbers are input one by one

3.  if input action does not trigger onChange, it will correct data and trigger onChange when it gets blur

## API

### NumberPicker

| Param             | Description                                                                                                       | Type                                                               | Default Value | Required | Supported Version |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------- | -------- | ----------------- |
| prefix            | Prefix                                                                                                            | string                                                             | 'next\-'      |          | -                 |
| type              | Set type (when device is phone, the type of NumberPicker is forced to normal and cannot be modified through type) | 'normal' \| 'inline'                                               | 'normal'      |          | -                 |
| size              | Size                                                                                                              | 'large' \| 'medium' \| 'small'                                     | 'medium'      |          | -                 |
| value             | Current value                                                                                                     | number \| string                                                   | -             |          | -                 |
| defaultValue      | Default value                                                                                                     | number \| string                                                   | -             |          | -                 |
| label             | Inline left label                                                                                                 | React.ReactNode                                                    | -             |          | -                 |
| innerAfter        | Inline right additional content                                                                                   | React.ReactNode                                                    | -             |          | -                 |
| disabled          | Is disabled                                                                                                       | boolean                                                            | -             |          | -                 |
| step              | Step                                                                                                              | number \| string                                                   | 1             |          | -                 |
| precision         | Decimal places                                                                                                    | number                                                             | 0             |          | -                 |
| editable          | Whether the user can enter                                                                                        | boolean                                                            | true          |          | -                 |
| autoFocus         | Auto focus                                                                                                        | boolean                                                            | -             |          | -                 |
| onChange          | Callback when the value changes<br/><br/>**signature**:<br/>**params**:<br/>_value_: value<br/>_e_: e             | (value: number \| string \| undefined, e: object) => void          | func.noop     |          | -                 |
| onKeyDown         | Key down<br/><br/>**signature**:<br/>**params**:<br/>_e_: e                                                       | (e: React.KeyboardEvent<HTMLInputElement>, ...args: any[]) => void | func.noop     |          | -                 |
| onFocus           | Focus<br/><br/>**signature**:<br/>**params**:<br/>_e_: e                                                          | (e: React.FocusEvent<HTMLInputElement>, ...args: any[]) => void    | -             |          | -                 |
| onBlur            | Blur<br/><br/>**signature**:<br/>**params**:<br/>_e_: e                                                           | (e: React.FocusEvent<HTMLInputElement>, ...args: any[]) => void    | func.noop     |          | -                 |
| onCorrect         | Callback after the value is corrected<br/><br/>**signature**:<br/>**params**:<br/>_obj_: obj                      | (obj: object) => void                                              | func.noop     |          | -                 |
| max               | Maximum                                                                                                           | number \| string                                                   | -             |          | -                 |
| min               | Minimum                                                                                                           | number \| string                                                   | -             |          | -                 |
| className         | Custom class                                                                                                      | string                                                             | -             |          | -                 |
| style             | Custom inline style                                                                                               | React.CSSProperties                                                | -             |          | -                 |
| format            | Format current value<br/><br/>**signature**:<br/>**params**:<br/>_value_: value                                   | (value: string \| number) => string \| number                      | -             |          | -                 |
| upBtnProps        | Increase button props                                                                                             | ButtonProps                                                        | -             |          | -                 |
| downBtnProps      | Decrease button props                                                                                             | ButtonProps                                                        | -             |          | -                 |
| alwaysShowTrigger | Control button always show or hide                                                                                | boolean                                                            | false         |          | -                 |
| isPreview         | Is preview                                                                                                        | boolean                                                            | -             |          | -                 |
| renderPreview     | Render content in preview mode<br/><br/>**signature**:<br/>**params**:<br/>_value_: value<br/>_props_: props      | (value: number \| string, props: object) => React.ReactNode        | -             |          | -                 |
| device            | Screen width                                                                                                      | 'phone' \| 'tablet' \| 'desktop'                                   | -             |          | -                 |
| hasTrigger        | Show click button                                                                                                 | boolean                                                            | true          |          | -                 |
| stringMode        | Enable big number support, input and output are all string types                                                  | boolean                                                            | false         |          | 1.24              |
| state             | State                                                                                                             | 'error' \| 'success' \| undefined                                  | -             |          | -                 |

## ARIA and KeyBoard

| KeyBoard   | Descripiton         |
| :--------- | :------------------ |
| Up Arrow   | increase the number |
| Down Arrow | decrease the number |
