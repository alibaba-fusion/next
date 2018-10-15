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

| params                   | desc                        | type         | default       |
| ------------------------ |---------------------------- | ------------ | ------------- |
| id                   | checkbox id, mounted on input                  | String   | -         |
| checked              | Set the status to be checked                      | Boolean  | -         |
| defaultChecked       | Set the default status to be checked              | Boolean  | false     |
| disabled             | Set the status to be disabled                     | Boolean  | -         |
| label                | Set the label by property                      | String   | -         |
| indeterminate        | The intermediate state of the Checkbox will only affect the style of the Checkbox and does not affect its checked property.                               | Boolean  | -         |
| defaultIndeterminate | Set the default status to intermediate, it will only affect the style of the Checkbox and does not affect its checked property.                      | Boolean  | false     |
| onChange             | Callback function triggered when the state changes<br><br>**signatures**:<br>Function(checked: Boolean, e: Event) => void<br>**params**:<br>_checked_: {Boolean} The checked value of the underlying checkbox input <br>_e_: {Event} Dom event object | Function | func.noop |
| onMouseEnter         | Callback function triggered when the mouse pointer enters the element.<br><br>**signatures**:<br>Function(e: Event) => void<br>**params**:<br>_e_: {Event} Dom event object                                               | Function | func.noop |
| onMouseLeave         | Callback function triggered  when the mouse pointer leaves the element.<br><br>**signatures**:<br>Function(e: Event) => void<br>**params**:<br>_e_: {Event} Dom event object                                         | Function | func.noop |

### Checkbox.Group

| params           | desc                                                | type     | default       |
| ---------------- | --------------------------------------------------- | -------- | ------------- |
| disabled     | Set the status of all checkbox in group to be checked   | Boolean    | -         |
| dataSource   | Optional list, data item can be String or Object, for example `['apple', 'pear', 'orange']` or `[{value: 'apple', label: 'Apple',}, {value: 'pear', label: 'Pear'}, {value: 'orange', label: 'Orange'}]` | Array&lt;any>          | \[]       |
| value        | The values of selected optional list              | Array/String/Number    | -         |
| defaultValue | The values of default selected optional list                                         | Array/String/Number    | -         |
| children     | To set nexted checkbox  by children components             | Array&lt;ReactElement> | -         |
| onChange     | Callback function triggered when the selected value changes<br><br>**signatures**:<br>Function(value: Array, e: Event) => void<br>**params**:<br>_value_: {Array} values of selected optional list <br>_e_: {Event} Dom event object                                | Function               | () => { } |
| itemDirection    | The direction of item's aligning<br>- hoz: horizonal (default)<br>- ver: vertical<br><br>**Allowed values**:<br>'hoz', 'ver'                                                 | Enum                                | 'hoz' |
