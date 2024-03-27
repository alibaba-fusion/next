# Radio

-   category: Components
-   family: DataEntry
-   type: Form Component

---

## Guide

Radio

### When to use

Radio buttons allow the user to select a single option from data-set. User can use the radio button for exlusive opration and see all the options side by side. Otherwsie, consider using `<DropDown/>` that take up less space than showing all the option.

## API

### Radio

| Param          | Description                                                                                                                                                                                         | Type                                                                    | Default Value | Required |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------- | -------- |
| id             | Id of the input                                                                                                                                                                                     | string                                                                  | -             |          |
| checked        | To set radio button is checked                                                                                                                                                                      | boolean                                                                 | -             |          |
| defaultChecked | To set radio button default to be checked                                                                                                                                                           | boolean                                                                 | -             |          |
| label          | To set the radio label                                                                                                                                                                              | React.ReactNode                                                         | -             |          |
| onChange       | Callback on check state change<br/><br/>**signature**:<br/>**params**:<br/>_checked_: Is checked<br/>_event_: DOM event                                                                             | (checked: boolean, event: React.ChangeEvent\<HTMLInputElement>) => void | -             |          |
| onMouseEnter   | Callback on mouse enter                                                                                                                                                                             | (e: React.MouseEvent\<HTMLInputElement>) => void                        | -             |          |
| onMouseLeave   | Callback on mouse leave                                                                                                                                                                             | (e: React.MouseEvent\<HTMLInputElement>) => void                        | -             |          |
| disabled       | Set radio button disable to be used                                                                                                                                                                 | boolean                                                                 | -             |          |
| value          | Value of radio                                                                                                                                                                                      | RadioValue                                                              | -             |          |
| name           | Form item name                                                                                                                                                                                      | string                                                                  | -             |          |
| isPreview      | Set radio to preview state                                                                                                                                                                          | boolean                                                                 | -             |          |
| renderPreview  | Customized rendering content function in preview mode<br/><br/>**signature**:<br/>**params**:<br/>_checked_: Is checked<br/>_props_: The props of the radio<br/>**return**:<br/>The content of item | (checked: boolean, props: RadioProps) => React.ReactNode                | -             |          |

### Radio.Group

| Param         | Description                                                                                                                                                                                                               | Type                                                                        | Default Value | Required |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------- | -------- |
| name          | Form name                                                                                                                                                                                                                 | string                                                                      | -             |          |
| value         | The value of the Item witch is selected in radio group (controlled)                                                                                                                                                       | RadioValue                                                                  | -             |          |
| defaultValue  | The value of the Item witch is default selected in radio group (uncontrolled)                                                                                                                                             | RadioValue                                                                  | -             |          |
| component     | Specify jsx tag name                                                                                                                                                                                                      | React.ElementType                                                           | 'div'         |          |
| onChange      | Callback on value change<br/><br/>**signature**:<br/>**params**:<br/>_value_: The selected value<br/>_event_: Dom Event                                                                                                   | (value: RadioValue, event: React.ChangeEvent\<HTMLInputElement>) => void    | -             |          |
| disabled      | All the radios in group are disable to be used                                                                                                                                                                            | boolean                                                                     | -             |          |
| shape         | Shape type                                                                                                                                                                                                                | 'normal' \| 'button'                                                        | -             |          |
| size          | Used with `shape` prop，valid when shape is set to button                                                                                                                                                                 | 'large' \| 'medium' \| 'small'                                              | 'medium'      |          |
| dataSource    | List of options                                                                                                                                                                                                           | Array\<RadioValue> \| Array\<RadioValueItem>                                | -             |          |
| children      | To set radio button by setting children components                                                                                                                                                                        | React.ReactNode                                                             | -             |          |
| direction     | How items are arranged                                                                                                                                                                                                    | 'hoz' \| 'ver'                                                              | -             |          |
| isPreview     | -                                                                                                                                                                                                                         | boolean                                                                     | -             |          |
| renderPreview | Customized rendering content function in preview mode<br/><br/>**signature**:<br/>**params**:<br/>_previewed_: Previewed item data，<br/>_props_: The props of the previewed item<br/>**return**:<br/>The content of item | (previewed: RadioValueItem \| object, props: GroupProps) => React.ReactNode | -             |          |

### RadioValueItem

| Param    | Description | Type            | Default Value | Required |
| -------- | ----------- | --------------- | ------------- | -------- |
| label    | -           | React.ReactNode | -             |          |
| value    | -           | RadioValue      | -             | yes      |
| disabled | -           | boolean         | -             |          |

### RadioValue

```typescript
export type RadioValue = string | number | boolean;
```

## ARIA and KeyBoard

| KeyBoard | Descripiton                                                                                                                                                                                                   |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tab      | Get the focus, if there is no selection, it is the first one, then you can select it with a space. If it is selected, it will focus on the selected item, and then left-right will navigate and select radio. |
