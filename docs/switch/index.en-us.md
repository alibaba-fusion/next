# Switch

-   category: Components
-   family: DataEntry
-   type: form

---

## Guide

Switch Component

### When To Use

The Switch Component toggles the state. The options in the switch, as well as its state, should be clearly displayed with the accompanying inline label. Switch acts the same as the radio button, yet we should prefer switch cuz the latter is obsolete.

### Note

-   We should take into account the font size when using custom checkChildren and unCheckedChildren，cuz the width is limited and defaults to be 2 characters.

## API

### Switch

| Param | Descripiton  | Type  | Default Value |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |

| size              | size of switch<br><br>**option**:<br>'medium'<br>'small'                                                                              | Enum     | 'medium'  |
| checkedChildren   | content of 'on' state                                                                                                                                         | any      | -         |
| unCheckedChildren | content of 'off' state                                                                                                                                         | any      | -         |
| onChange          | callback triggered when state is toggled<br><br>**signature**:<br>Function(checked: Boolean, e: Event) => void<br>**parameter**:<br>_checked_: {Boolean} whether on<br>_e_: {Event} DOM Event | Function | () => { } |
| checked           | current value (for controlled one)                                                                                                                                 | Boolean  | -         |
| defaultChecked    | default value (for uncontrolled one)                                                                                                                                | Boolean  | -         |
| disabled          | disabled                                                                                                                                        | Boolean  | false     |
| onClick           | callback triggered when clicked<br><br>**signature**:<br>Function(e: Event) => void<br>**parameter**:<br>_e_: {Event} DOM Event                                                         | Function | -         |
| onKeyDown         | callback triggered when key is pressed<br><br>**signature**:<br>Function(e: Event) => void<br>**parameter**:<br>_e_: {Event} DOM Event                                                         | Function | -         |

## Keyboard Support

-   press enter to switch when focused

## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Enter       | toggle checked                |
| Space       | toggle checked                |