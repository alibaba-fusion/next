# Range

-   category: Components
-   family: DataEntry
-   type: form

---

## Guide

Range

### When To Use

Range Component is used to select a value in a range by dragging slider. Normally, the minimal value of the range is placed on the leftmost, and the maximal is on the rightmost. Sometimes, icons can be placed at the ends to reflect the strength. Range Component is the best choice when setting volume, brightness or saturation that related to strength.

### Note

-   onChange is often used combined with value for controlling, and it can only be triggered after sliding.
-   On the other hand, onProcess is the wrong place to do the control, for it's triggered through the sliding process.

## API

### Range

| Param          | Description                                                                                                                                               | Type                                                          | Default Value     | Required |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ----------------- | -------- |
| slider         | Number of sliders                                                                                                                                         | 'single' \| 'double'                                          | 'single'          |          |
| min            | Minimal                                                                                                                                                   | number                                                        | 0                 |          |
| max            | Maximal                                                                                                                                                   | number                                                        | 100               |          |
| step           | Step of the range                                                                                                                                         | number                                                        | 1                 |          |
| value          | Current value                                                                                                                                             | RangeValueType                                                | -                 |          |
| defaultValue   | Default value                                                                                                                                             | RangeValueType                                                | -                 |          |
| marks          | Way to show the scale                                                                                                                                     | false \| number \| Array\<number> \| Record\<number, string>  | false             |          |
| marksPosition  | Position for the scale                                                                                                                                    | 'above' \| 'below'                                            | 'above'           |          |
| disabled       | Disabled                                                                                                                                                  | boolean                                                       | false             |          |
| onChange       | Callback function triggered when value change<br/><br/>**signature**:<br/>**params**:<br/>_value_: The changed value                                      | (value: RangeValueType) => void                               | () =\> void       |          |
| onProcess      | Callback triggered when slider being dragged, and used only for special need<br/><br/>**signature**:<br/>**params**:<br/>_value_: The changed value       | (value: RangeValueType) => void                               | () =\> void       |          |
| hasTip         | Whether to show tip                                                                                                                                       | boolean                                                       | true              |          |
| tipRender      | Custom tip content<br/><br/>**signature**:<br/>**params**:<br/>_value_: The changed value<br/>**return**:<br/>React.ReactNode                             | (value: number \| string) => React.ReactNode                  | (value) =\> value |          |
| reverse        | Reverse the selected part                                                                                                                                 | boolean                                                       | false             |          |
| pure           | Pure render or not                                                                                                                                        | boolean                                                       | false             |          |
| fixedWidth     | Drag a line with fixed width                                                                                                                              | boolean                                                       | false             |          |
| tooltipVisible | Tooltip always be visible or not                                                                                                                          | boolean                                                       | false             |          |
| isPreview      | Is preview or not                                                                                                                                         | boolean                                                       | false             |          |
| renderPreview  | Custom preview content<br/><br/>**signature**:<br/>**params**:<br/>_value_: The changed value<br/>_props_: RangeProps<br/>**return**:<br/>React.ReactNode | (value: RangeValueType, props: RangeProps) => React.ReactNode | -                 |          |

### RangeValueType

```typescript
export type RangeValueType = number | [number, number];
```

## ARIA and KeyBoard

| KeyBoard    | Descripiton                             |
| :---------- | :-------------------------------------- |
| Right Arrow | control the slider to move to the right |
| Left Arrow  | control the slider to move to the left  |
| Tab         | switch to other slider                  |
