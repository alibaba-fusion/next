# Nav

-   category: Components
-   family: Navigation
-   chinese: 导航
-   type: 导航
-   cols: 1

---

## Guide

### When To Use

It provides top navigation and side navigation, the top navigation provides global categories and functions, and the side navigation provides a multi-level structure to store and arrange the site architecture.

### Note

-  iconOnly only works with the vertical direction.

-  The property of Nav inherits from Menu, so in addition to special instructions, you can use the API of Menu.

## API

### Nav

> The API inherits from `Menu`, please look at the `Menu` document

| Param | Descripiton  | Type  | Default Value |
| --------------- | ----------------------------------------------------------------------------------------------------- | --------- | ---------- |
| children        | navigation item and sub navigation                                                                                              | ReactNode | -          |
| type            | type of navigation<br><br>**option**:<br>'normal'<br>'primary'<br>'secondary'<br>'line'               | Enum      | 'normal'   |
| direction       | layout of navigation<br><br>**option**:<br>'hoz'<br>'ver'                                                        | Enum      | 'ver'      |
| hozAlign        | alignment of items in the horizontal nav bar, only works when direction is set to 'hoz' and the header exists<br><br>**options**:<br>'left', 'right'                                                                                                                                                                                                                                                              | Enum            | 'left'     |
| activeDirection | the active border direction of the selected item<br><br>**option**:<br>null<br>'top'<br>'bottom'<br>'left'<br>'right' | Enum      | when direction is 'hoz', the default value is 'bottom'. When direction is 'ver', the default value is 'left'.          |
| mode            | sub navigation open mode (horizontal navigation only supports pop up)<br><br>**option**:<br>'inline', 'popup'                                              | Enum      | 'inline'   |
| triggerType     | sub navigation open trigger<br><br>**option**:<br>'click', 'hover'                                                        | Enum      | 'click'    |
| inlineIndent    | inline sub navigation indent distance                                                                                             | Number    | 20         |
| defaultOpenAll  | open all subnavs default, only when mode is set to 'inline' and openMode is set to 'multiple'                                                                                                                                                                                                                                                                           | Boolean         | false      |
| openMode        | the open mode of inline sub navigation, expand a peer navigation or multiple navigations at the same level at same time, it only works in inline mode<br><br>**option**:<br>'single', 'multiple'     | Enum      | 'multiple' |
| selectedKeys        | keys of selected nav item currently                                                                                                                                                                                                                                                                                                                                                  | String/Array | -          |
| defaultSelectedKeys | keys of selected nav item in default                                                                                                                                                                                                                                                                                                                                                  | String/Array | \[]        |
| onSelect            | callback function triggered when select or unselect nav item<br><br>**signatures**:<br>Function(selectedKeys: Array, item: Object, extra: Object) => void<br>**params**:<br>_selectedKeys_: {Array} keys of selected nav item<br>_item_: {Object} current operation nav item<br>_extra_: {Object} extra params<br>_extra.select_: {Boolean} whether is selected<br>_extra.key_: {Array} key of current operation nav item<br>_extra.label_: {Object} label of current operation nav item<br>_extra.keyPath_: {Array} key path of current operation nav item | Function     | () => {}   |
| popupAlign      | pop up sub navigation alignment (horizontal navigation only supports follow)<br><br>**option**:<br>'follow', 'outside'                                    | Enum      | 'follow'   |
| popupClassName  | pop up navigation custom class name                                                                                           | String    | -          |
| iconOnly        | whether to show only icons                                                                                               | Boolean   | -          |
| hasArrow        | whether to display the right arrow (only works when iconOnly=true)                                                                       | Boolean   | true       |
| hasTooltip      | whether has tool tip (only works when iconOnly=true)                                                                   | Boolean   | false      |
| header          | custom navigation head                                                                                               | ReactNode | -          |
| footer          | custom navigation footer                                                                                                | ReactNode | -          |
| embeddable          | integrate with the background or not(which means no background/border/box-shadow etc.), usually used with Layout. You can also custom its height like`<Nav style={{lineHeight: '100px'}}>`                                                                                                                                                                                                                                                               | Boolean      | false                                                                 |

### Nav.Group

> The API inherits from `Menu.Group`, please look at the `Menu.Group` document

| Param | Descripiton  | Type  | Default Value |
| -------- | ------- | --------- | --- |
| label    | content of label    | ReactNode | -   |
| children | navigation item and sub navigation | ReactNode | -   |

### Nav.Item

> The API inherits from `Menu.Item`, please look at the `Menu.Item` document

| Param | Descripiton  | Type  | Default Value |
| -------- | ---------------------------------------------------------- | ---------------- | --- |
| icon     | custom icon, it can be type of Icon or such as `<Icon type="icon type" />` | String/ReactNode | -   |
| children | content of navigation item                                                       | ReactNode        | -   |

### Nav.PopupItem

> The API inherits from `Menu.PopupItem`, please look at the `Menu.PopupItem` document

| Param | Descripiton  | Type  | Default Value |
| -------- | ----------------------------------------------------------- | ---------------- | --- |
| icon     | custom icon, it can be type of Icon or such as `<Icon type="icon type" />` | String/ReactNode | -   |
| label    | content of label                                                        | ReactNode        | -   |
| children | popup content                                                        | ReactNode        | -   |

### Nav.SubNav

> The API inherits from `Menu.SubMenu`, please look at the `Menu.SubMenu` document

| Param | Descripiton  | Type  | Default Value |
| -------- | ---------------------------------------------------------- | ---------------- | --- |
| icon     | custom icon, it can be type of Icon or such as `<Icon type="icon type" />` | String/ReactNode | -   |
| label    | content of label                                                       | ReactNode        | -   |
| selectable | whether is selectable                                                       | Boolean          | false |
| children | navigation item and sub navigation                                                    | ReactNode        | -   |

## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Up Arrow    | navigate to previous item                          |
| Down Arrow  | navigate to next item                          |
| Right Arrow | open the submenu, navigate to the first item of the submenu; horizontal menu bar first level, navigate to the right one |
| Left Arrow  | close the submenu, navigate to the parent menu; horizontal menu bar first level, navigation to the left one   |
| Enter       | open submenu and navigate to the first item of the submenu                |
| Esc         | close submenu and navigate to the parent menu item                  |


