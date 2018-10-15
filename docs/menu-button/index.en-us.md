# MenuButton

-   category: Components
-   family: General
-   chinese: 菜单按钮
-   type: Basic

---

## User Guide

MenuButton is a button which, when clicked or pressed, will show a context menu.

## API

### MenuButton

| Property               | Description                                                    | Type        | Default Value       |
| ---------------- | ----------------------------------------------------- | --------- | --------- |
| label            | The text in button     | ReactNode | -         |
| autoWidth        | If popup width equals to button width        | Boolean   | true      |
| popupTriggerType | Trigger type of popup<br><br>**option**:<br>'click', 'hover'            | Enum      | 'click'   |
| popupContainer   | Container of popup<br><br>**signature**:<br>Function() => void             | Function  | -         |
| visible          | Visible state of popup    | Boolean   | -         |
| defaultVisible   | Default visible state of popup | Boolean   | -         |
| onVisibleChange  | Callback when visible state changes <br><br>**signature**:<br>Function() => void    | Function  | func.noop |
| popupStyle       | Custom style of popup | Object    | -         |
| popupClassName   | Custom className of popup | String    | -         |
| popupProps       | Props of popup | Object    | -         |
| defaultSelectedKeys | Default selected items, as Menu                                | Array     | \[]       |
| selectedKeys        | Selected items, as Menu                                   | Array     | -         |
| selectMode       | Select mode of menu, see Menu                                        | String    | -         |
| onItemClick      | Callback when click the menu item, see Menu<br><br>**signature**:<br>Function() => void | Function  | func.noop |
| onSelect         | Callback when select the menu, see Menu<br><br>**signature**:<br>Function() => void  | Function  | func.noop |
| menuProps        | Props of menu  | Object    | {}         |
