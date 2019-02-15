# Dropdown

-   category: Components
-   family: Util
-   chinese: 下拉菜单
-   type: Overlay

---

## Develop Guide

### When to Use

You can storage operation command with dropdown component when there are too much command. There will be a drop-down menu after you click or hover the trigger element. Then choose a command and run it.

## API

### Dropdown
> Dropdown component extends API of Popup component,  unless special note.

| Param | Descripiton  | Type  | Default Value |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------ |
| children        | content in overlay                                                                                                                                                                                            | ReactNode      | -                                          |
| visible         | overlay display or not now                                                                                                                                                                                        | Boolean        | -                                          |
| defaultVisible  | overlay display or not in default situation                                                                                                                                                                                        | Boolean        | false                                      |
| onVisibleChange | callback function when toggle visible of overlay<br><br>**signatures**:<br>Function(visible: Boolean, type: String, e: Object) => void<br>**params**:<br>_visible_: {Boolean} overlay display or not<br>_type_: {String} orign of trigger overlay toggle visible<br>_e_: {Object} DOM Event| Function       | func.noop                                  |
| trigger         | trigger element                                                                                                                                                                                   | ReactNode      | -                                          |
| triggerType     | operation type of trigger overlay toggle visible<br><br>**options**:<br>'hover', 'click', 'focus'                                                                                                                                     | Enum           | 'hover'                                    |
| disabled        | overlay can not toggle visible if you set disabled attribute                                                                                                                                                                                 | Boolean        | false                                      |
| align           | overlay position relative to trigger element, see details Overlay align                                                                  | String         | 'tl bl'                                    |
| offset          | overlay adjust position relative to trigger element                                                                                                                                                                                  | Array          | [0, 0]                                     |
| delay           | delay time of toggle overlay visible(unit: ms)，if triggerType value is 'hover', delay time will work                                                                                                        | Number         | 200                                        |
| autoFocus       | let element in overlay get focus or not after overlay was opened                                                                                                                                                                              | Boolean        | true                                       |
| hasMask         | display mask or not                                                                                                                                                                                          | Boolean        | false                                      |
| cache           | reserve child element or not after hidden overlay                                                                                                                                                                                      | Boolean        | false                                      |
| animation       | animation play mode, support object value: { in: 'enter-class', out: 'leave-class' }, there is no animation if set `false`                                                                                                                 | Object/Boolean | { in: 'expandInDown', out: 'expandOutUp' } |

## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Up Arrow    | navigate to previous item                          |
| Down Arrow  | navigate to next item                          |
| Right Arrow | open the submenu, navigate to the first item of the submenu; horizontal menu bar first level, navigate to the right one |
| Left Arrow  | close the submenu, navigate to the parent menu; horizontal menu bar first level, navigation to the left one   |
| Enter       | open submenu and navigate to the first item of the submenu                |
| Esc         | close submenu and navigate to the parent menu item                  |


