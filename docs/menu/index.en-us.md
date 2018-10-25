# Menu

-   category: Components
-   family: DataDisplay
-   chinese: 菜单
-   type: 展示

---

## API

### Menu

| Param | Descripiton  | Type  | Default Value |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------- |
| children            | submenu and menu item                                                                                                                                                                                                                                                                                                                                                        | ReactNode    | -          |
| onItemClick         | callback function triggered when click the menu item<br><br>**signatures**:<br>Function(key: String, item: Object, event: Object) => void<br>**params**:<br>_key_: {String} key of clicked menu item<br>_item_: {Object} clicked menu item<br>_event_: {Object} clicked event                                                                                                                                                                 | Function     | () => {}   |
| openKeys            | keys of open submenu currently                                                                                                                                                                                                                                                                                                                                                | String/Array | -          |
| defaultOpenKeys     | keys of open submenu in default                                                                                                                                                                                                                                                                                                                                                  | String/Array | \[]        |
| defaultOpenAll      | open all submenus default, only when mode is set to 'inline' and openMode is set to 'multiple', priority is higher than defaultOpenKeys                                                                                                                                                                                                                                                                            | Boolean         | false      |
| onOpen              | callback function triggered when open or close the submenu<br>**signatures**:<br>Function(key: String, extra: Object) => void<br>**params**:<br>_key_: {String} keys of open submenu<br>_extra_: {Object} extra param<br>_extra.key_: {String} key of current operation submenu<br>_extra.open_: {Boolean} whether is open                                                                                                                                 | Function     | () => {}   |
| mode                | open mode of submenu<br><br>**options**:<br>'inline', 'popup'                                                                                                                                                                                                                                                                                                                   | Enum         | 'inline'   |
| triggerType         | open trigger type of submenu<br><br>**option**:<br>'click', 'hover'                                                                                                                                                                                                                                                                                                                  | Enum         | 'click'    |
| openMode            | expand mode of the inline submenu, expand a submenu or multiple submenus at the same time, it only works when mode is inline<br><br>**options**:<br>'single', 'multiple'                                                                                                                                                                                                                                                                   | Enum         | 'multiple' |
| inlineIndent        | indent of inline submenu                                                                                                                                                                                                                                                                                                                                                       | Number       | 20         |
| popupAutoWidth      | whether the width of the pop up submenu is equal to the parent menu item, if the width of the pop up submenu is smaller than the parent menu item, it will be the same as the parent menu item, otherwise do nothing.                                                                                                                                                                                                                                                                                                         | Boolean      | false      |
| popupAlign          | alignment of the pop up submenu<br><br>**options**:<br>'follow', 'outside'                                                                                                                                                                                                                                                                                                                  | Enum         | 'follow'   |
| popupProps          | properties of Popup                                                                                                                                                                                                                                                                                                                                                     | Object/Function       | {}          |
| popupClassName      | className of the pop up submenu                                                                                                                                                                                                                                                                                                                                             | String       | -          |
| popupStyle          | style of the pop up submenu                                                                                                                                                                                                                                                                                                                                                  | Object       | -          |
| selectedKeys        | keys of selected menu item currently                                                                                                                                                                                                                                                                                                                                                  | String/Array | -          |
| defaultSelectedKeys | keys of selected menu item in default                                                                                                                                                                                                                                                                                                                                                  | String/Array | \[]        |
| onSelect            | callback function triggered when select or unselect menu item<br><br>**signatures**:<br>Function(selectedKeys: Array, item: Object, extra: Object) => void<br>**params**:<br>_selectedKeys_: {Array} keys of selected menu item<br>_item_: {Object} current operation menu item<br>_extra_: {Object} extra params<br>_extra.select_: {Boolean} whether is selected<br>_extra.key_: {Array} key of current operation menu item<br>_extra.label_: {Object} label of current operation menu item<br>_extra.keyPath_: {Array} key path of current operation menu item | Function     | () => {}   |
| selectMode          | select mode, single or multiple, no value by default, not selectable<br><br>**options**:<br>'single', 'multiple'                                                                                                                                                                                                                                                                                                    | Enum         | -          |
| shallowSelect       | whether you can only select the first level menu item (you cannot select the menu item in the submenu)                                                                                                                                                                                                                                                                                                                                      | Boolean      | false      |
| hasSelectedIcon     | whether to show the selected icon, if it is set to false, it needs to match the background color when the configuration platform setting is selected to distinguish between                                                                                                                                                                                                                                                                                                                       | Boolean      | true       |
| direction           | direction of the menu's first level <br><br>**options**:<br>'ver', 'hoz'                                                                                                                                                                                                                                                                                                                       | Enum         | 'ver'      |
| hozAlign            | alignment of items and footer in the horizontal menu bar, only works when direction is set to 'hoz' and the header exists<br><br>**options**:<br>'left', 'right'                                                                                                                                                                                                                                                              | Enum            | 'left'     |
| header              | header of menu                                                                                                                                                                                                                                                                                                                                                         | ReactNode    | -          |
| footer              | footer of menu                                                                                                                                                                                                                                                                                                                                                         | ReactNode    | -          |
| autoFocus           | whether to get focus automatically                                                                                                                                                                                                                                                                                                                                                        | Boolean      | false      |
| focusedKey          | keys of the currently focused submenu or menu item                                                                                                                                                                                                                                                                                                                                            | String       | -          |

### Menu.Item

| Param | Descripiton  | Type  | Default Value |
| -------- | ------- | --------- | ----- |
| disabled | whether is disabled    | Boolean   | false |
| helper   | help text    | ReactNode | -     |
| children | content of menu item | ReactNode | -     |

### Menu.SubMenu

| Param | Descripiton  | Type  | Default Value |
| ---------- | ---------------------------------------------------------------- | --------- | --------------- |
| label      | label of submenu                                                             | ReactNode | -               |
| selectable | whether is selectable, it only works when set selectMode of Menu                            | Boolean   | false           |
| mode       | open mode of submenu, it will override the property with the same name on Menu<br><br>**options**:<br>'inline', 'popup' | Enum      | mode fo Menu |
| children   | menu item or submenu                                                      | ReactNode | -               |

### Menu.PopupItem

| Param | Descripiton  | Type  | Default Value |
| -------- | ------- | --------- | --- |
| label    | label of the parent item    | ReactNode | -   |
| children | content of the pop up | ReactNode | -   |

### Menu.CheckboxItem

> This subcomponent selection is not controlled by defaultSelectedKeys/selectedKeys. Please control the selected yourself.

| Param | Descripiton  | Type  | Default Value |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------- |
| checked       | whether is checked                                                                                                                                                   | Boolean   | false    |
| indeterminate | whether is indeterminate                                                                                                                                                 | Boolean   | false    |
| disabled      | whether is disabled                                                                                                                                                   | Boolean   | false    |
| onChange      | callback function triggered when check or uncheck menu item<br><br>**signatures**:<br>Function(checked: Boolean, event: Object) => void<br>**params**:<br>_checked_: {Boolean} whether is checked<br>_event_: {Object} checked event | Function  | () => {} |
| helper        | help text                                                                                                                                                   | ReactNode | -        |
| children      | content of menu check item                                                                                                                                                   | ReactNode | -        |

### Menu.RadioItem

> This subcomponent selection is not controlled by defaultSelectedKeys/selectedKeys. Please control the selected yourself.

| Param | Descripiton  | Type  | Default Value |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------- |
| checked  | whether is checked                                                                                                                                                   | Boolean   | false    |
| disabled | whether is disabled                                                                                                                                                   | Boolean   | false    |
| onChange | callback function triggered when check or uncheck menu item<br><br>**signatures**:<br>Function(checked: Boolean, event: Object) => void<br>**params**:<br>_checked_: {Boolean} whether is checked<br>_event_: {Object} checked event | Function  | () => {} |
| helper   | help text                                                                                                                                                   | ReactNode | -        |
| children | content of menu radio item                                                                                                                                                   | ReactNode | -        |

### Menu.Group

| Param | Descripiton  | Type  | Default Value |
| -------- | ---- | --------- | --- |
| label    | label of group | ReactNode | -   |
| children | menu items  | ReactNode | -   |

### Menu.Divider

<!-- api-extra-start -->

### Menu.create(props)

Create a context menu.

- the props argument can be passed to all supported props of Menu
- the props argument adds support for overlayProps to customize the overlay

<!-- api-extra-end -->

## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Up Arrow    | navigate to previous item                          |
| Down Arrow  | navigate to next item                          |
| Right Arrow | open the submenu, navigate to the first item of the submenu; horizontal menu bar first level, navigate to the right one |
| Left Arrow  | close the submenu, navigate to the parent menu; horizontal menu bar first level, navigation to the left one   |
| Enter       | open submenu and navigate to the first item of the submenu                |
| Esc         | close submenu and navigate to the parent menu item                  |
| Space       | toggle selected or checked                          |
