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

-   We should take into account the font size when using custom checkChildren and unCheckedChildren, cuz the width is limited and defaults to be 2 characters.

## API

### Switch

| Param             | Description                                                                                                                                                                                  | Type                                                                                                                      | Default Value | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| defaultChecked    | Is default on（uncontrolled）                                                                                                                                                                | boolean                                                                                                                   | false         |          |
| checked           | Is on（controlled）                                                                                                                                                                          | boolean                                                                                                                   | -             |          |
| onChange          | Callback when state is changed<br/><br/>**signature**:<br/>**params**:<br/>_checked_: Is on                                                                                                  | (<br/> checked: boolean,<br/> e: React.MouseEvent\<HTMLDivElement> \| React.KeyboardEvent\<HTMLDivElement><br/> ) => void | -             |          |
| size              | Size of switch                                                                                                                                                                               | 'medium' \| 'small'                                                                                                       | 'medium'      |          |
| loading           | Is loading                                                                                                                                                                                   | boolean                                                                                                                   | false         |          |
| disabled          | Is disabled                                                                                                                                                                                  | boolean                                                                                                                   | false         |          |
| autoWidth         | Width adapts to content                                                                                                                                                                      | boolean                                                                                                                   | false         |          |
| isPreview         | Is preview mode                                                                                                                                                                              | boolean                                                                                                                   | false         |          |
| renderPreview     | Custom render method when is preview mode.<br/><br/>**signature**:<br/>**params**:<br/>_checked_: Is on<br/>_props_: The props of switch<br/>**return**:<br/>The render content when preview | (checked: boolean, props: SwitchProps) => React.ReactNode                                                                 | -             |          |
| checkedChildren   | Content of 'on' state                                                                                                                                                                        | React.ReactNode                                                                                                           | -             |          |
| unCheckedChildren | Content of 'off' state                                                                                                                                                                       | React.ReactNode                                                                                                           | -             |          |
| onClick           | -                                                                                                                                                                                            | (e: React.MouseEvent\<HTMLDivElement> \| React.KeyboardEvent\<HTMLDivElement>) => void                                    | -             |          |
| onKeyDown         | -                                                                                                                                                                                            | (e: React.KeyboardEvent\<HTMLDivElement>) => void                                                                         | -             |          |

## Keyboard Support

-   press enter to switch when focused

## ARIA and KeyBoard

| KeyBoard | Descripiton    |
| :------- | :------------- |
| Enter    | toggle checked |
| Space    | toggle checked |
