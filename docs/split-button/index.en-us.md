# SplitButton

-   category: Components
-   family: General
-   chinese: 分隔按钮
-   type: Basic

---

## User Guide

SplitButton is kind of GroupButton, only the icon part could be trigerred by user behavior.

## API

### SplitButton

| Param | Descripiton  | Type  | Default Value |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| size             | Size of button<br><br>**option**:<br>'small', 'medium', 'large'                                                                                                             | Enum      | 'medium'  |
| type             | Typeo of button<br><br>**option**:<br>'normal', 'primary', 'secondary'                                                                                                        | Enum      | 'normal'  |
| label            | Text in button | ReactNode | -         |
| component        | The html tag to be rendered<br><br>**option**:<br>'button', 'a'                                                                                                                          | Enum      | -         |
| ghost            | Setting ghost button <br><br>**option**:<br>'light', 'dark', false, true                                                                                                          | Enum      | -         |
| defaultSelectedKeys | Default selected items, as Menu                                                                                                                                           | Array     | \[]       |
| selectedKeys        | Selected items, as Menu                                                                                                                                              | Array     | -         |
| selectMode       | Select mode of menu<br><br>**option**:<br>'single', 'multiple'                                                                                                                  | Enum      | -         |
| onSelect         | Callback when select the menu，see Menu<br><br>**signature**:<br>Function() => void                                                                                                           | Function  | -         |
| onItemClick      | Callback when click the menu，see Menu<br><br>**signature**:<br>Function() => void                                                                                                           | Function  | -         |
| triggerProps     | The props of trigger element | Object    | -         |
| autoWidth        | If popup width equals to button width | Boolean   | true      |
| visible          | Visible state of the popup | Boolean   | -         |
| defaultVisible   | Default visible state of the popup  | Boolean   | -         |
| onVisibleChange  | Callback when visible state change<br><br>**signature**:<br>Function(visible: Boolean, reason: String) => void<br>**parameters**:<br>_visible_: {Boolean} visible state of the popup<br>_reason_: {String} reason to change visible state | Function  | func.noop |
| popupTriggerType | Trigger type of popup<br><br>**option**:<br>'click', 'hover'                                                                                                                      | Enum      | 'click'   |
| popupAlign       | Align of popup  | String    | 'tr br'   |
| popupStyle       | Custom style of popup  | Object    | -         |
| popupClassName   | Custom className of popup | String    | -         |
| popupProps       | Props of popup  | Object    | {}         |
