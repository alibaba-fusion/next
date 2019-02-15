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

| Param | Descripiton  | Type  | Default Value |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | -------------- |
| slider        | number of sliders<br><br>**option**:<br>'single'<br>'double'                                                                                                                       | Enum                                   | 'single'       |
| min           | minimal value                                                                                                                                                                         | Number                                 | 0              |
| max           | maximal value                                                                                                                                                                         | Number                                 | 100            |
| step          | step of the range, which is positive integer and (max - min) can be divided by it                                                                                                                                       | Number                                 | 1              |
| value         | current value. It's in the form of `Number` when `slider` is `single` otherwise `[Number, Number]`                                                                   | Number/Array&lt;Number>                | -              |
| defaultValue  | default value. It's in the form of `Number` when `slider` is `single` otherwise `[Number, Number]`                                                                                         | Number/Array&lt;Number>                | -              |
| marks         | way to show the scale. (`false` means nothing, `array` means enum, `number` means equal division, and `object` means `key` as the mark with `value` as the value)                                                                                        | Boolean/Number/Array&lt;Number>/Object | false          |
| marksPosition | position for the scale<br><br>**option**:<br>'above', 'below'                                                                                                        | Enum                                   | 'above'        |
| disabled      | disabled                                                                                                                                                         | Boolean                                | false          |
| onChange      | callback triggered when value changes<br><br>**signature**:<br>Function(value: String/number) => void<br>**parameter**:<br>_value_: {String/number} null | Function                               | func.noop      |
| onProcess     | callback triggered when slider being dragged, and used only for special need<br><br>**signature**:<br>Function(value: String/number) => void<br>**parameter**:<br>_value_: {String/number} null                    | Function                               | func.noop      |
| hasTip        | whether to show tip                                                                                                                                                               | Boolean                                | true           |
| tipRender     | custom tip content<br><br>**signature**:<br>Function(value: Number/String) => ReactNode<br>**signature**:<br>_value_: {Number/String} value<br>**returns**:<br>{ReactNode} content<br>                     | Function                               | value => value |
| reverse       | reverse the selected part                                                                                                                                                                       | Boolean                                | false          |
| pure          | pure render or not                                                                                                                                                             | Boolean                                | false          |
| fixedWidth    | drag a line with fixed width. It considers `slider` as `double`, and `defaultValue` must be a interval.                                                                                                                                                                 | Boolean                                | false          |
| tooltipVisible| tooltip always be visible or not                                                                                                                                                              | Boolean                                | false          |

## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Control+Shift+Right Arrow    | control the slider to move to the right                         |
| Control+Shift+Left Arrow    | control the slider to move to the left                         |
| Tab       | switch to other slider                 |