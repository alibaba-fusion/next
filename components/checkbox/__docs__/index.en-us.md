# Checkbox

-   category: Components
-   family: DataEntry
-   type: Form Component

---

## Guide

Checkbox

### When to Use

Checkbox is used to verify which options you want selected from a group. If you have only a single option, do not use the checkbox, use the on/off switch.

## API

### Checkbox

| Param                | Description                                                                                                                                                    | Type                                                                | Default Value | Required | Supported Version |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------- | -------- | ----------------- |
| className            | ClassName                                                                                                                                                      | string                                                              | -             |          | -                 |
| id                   | Checkbox id, mounted on the input                                                                                                                              | string                                                              | -             |          | -                 |
| style                | Custom inline style                                                                                                                                            | React.CSSProperties                                                 | -             |          | -                 |
| checked              | Checked status                                                                                                                                                 | boolean                                                             | -             |          | -                 |
| value                | Checkbox value                                                                                                                                                 | IValue                                                              | -             |          | -                 |
| name                 | Name                                                                                                                                                           | string                                                              | -             |          | -                 |
| defaultChecked       | Default checked status                                                                                                                                         | boolean                                                             | false         |          | -                 |
| disabled             | Disabled                                                                                                                                                       | boolean                                                             | -             |          | -                 |
| label                | Label                                                                                                                                                          | React.ReactNode                                                     | -             |          | -                 |
| indeterminate        | Checkbox middle status, only affects the style of Checkbox, and does not affect its checked property                                                           | boolean                                                             | -             |          | -                 |
| defaultIndeterminate | Checkbox default middle status, only affects the style of Checkbox, and does not affect its checked property                                                   | boolean                                                             | false         |          | -                 |
| onChange             | Status change event                                                                                                                                            | (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void  | -             |          | -                 |
| onMouseEnter         | Mouse enter event                                                                                                                                              | (e: React.MouseEvent<HTMLInputElement \| HTMLLabelElement>) => void | -             |          | -                 |
| onMouseLeave         | Mouse leave event                                                                                                                                              | (e: React.MouseEvent<HTMLInputElement \| HTMLLabelElement>) => void | -             |          | -                 |
| isPreview            | Is preview                                                                                                                                                     | boolean                                                             | false         |          | 1.19              |
| renderPreview        | Custom rendering content<br/><br/>**signature**:<br/>**params**:<br/>_checked_: Is checked<br/>_props_: All props<br/>**return**:<br/>Custom rendering content | (checked: boolean, props: CheckboxProps) => React.ReactNode         | -             |          | 1.19              |

### Checkbox.Group

| Param         | Description                                                                                                                                                                                         | Type                                                                                                                                                     | Default Value | Required | Supported Version |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- | ----------------- |
| className     | Custom className                                                                                                                                                                                    | string                                                                                                                                                   | -             |          | -                 |
| style         | Custom inline style                                                                                                                                                                                 | React.CSSProperties                                                                                                                                      | -             |          | -                 |
| disabled      | Entirely disabled                                                                                                                                                                                   | boolean                                                                                                                                                  | -             |          | -                 |
| dataSource    | Option list                                                                                                                                                                                         | Array<IValue> \| Array<CheckboxData>                                                                                                                     | -             |          | -                 |
| value         | Selected value list                                                                                                                                                                                 | IValue[] \| IValue                                                                                                                                       | -             |          | -                 |
| defaultValue  | Default selected value list                                                                                                                                                                         | IValue[] \| IValue                                                                                                                                       | -             |          | -                 |
| name          | Name                                                                                                                                                                                                | string                                                                                                                                                   | -             |          | -                 |
| children      | Set internal checkbox through child elements                                                                                                                                                        | React.ReactNode                                                                                                                                          | -             |          | -                 |
| onChange      | Selected value change event                                                                                                                                                                         | (value: IValue[], e: React.ChangeEvent<HTMLInputElement>) => void                                                                                        | -             |          | -                 |
| direction     | Arrangement of subitems                                                                                                                                                                             | 'hoz' \| 'ver'                                                                                                                                           | -             |          | -                 |
| itemDirection | [Deprecated] Arrangement of subitems                                                                                                                                                                | 'hoz' \| 'ver'                                                                                                                                           | -             |          | -                 |
| isPreview     | Is preview                                                                                                                                                                                          | boolean                                                                                                                                                  | -             |          | 1.19              |
| renderPreview | Custom rendering content<br/><br/>**signature**:<br/>**params**:<br/>_previewed_: Previewed value [\{label: '', value:''\},...]<br/>_props_: All props<br/>**return**:<br/>Custom rendering content | (<br/> previewed: {<br/> label: string \| React.ReactNode;<br/> value: string \| React.ReactNode;<br/> }[],<br/> props: object<br/> ) => React.ReactNode | -             |          | 1.19              |

### IValue

```typescript
export type IValue = string | number | boolean;
```

### CheckboxData

```typescript
export type CheckboxData = {
    value: IValue;
    label?: React.ReactNode;
    disabled?: boolean;
    [propName: string]: unknown;
};
```

## ARIA and KeyBoard

| KeyBoard | Descripiton                       |
| :------- | :-------------------------------- |
| SPACE    | Select or cancel the current item |
