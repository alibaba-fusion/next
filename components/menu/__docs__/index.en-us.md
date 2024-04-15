# Menu

-   category: Components
-   family: DataDisplay
-   chinese: 菜单
-   type: 展示

---

## API

### Menu

| Param                  | Description                                                                                                                                                                                                             | Type                                                                                                                   | Default Value | Required |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| children               | Submenu and menu item                                                                                                                                                                                                   | React.ReactNode                                                                                                        | -             |          |
| openKeys               | Keys of open submenu currently（controlled）                                                                                                                                                                            | string \| string[]                                                                                                     | -             |          |
| defaultOpenKeys        | Keys of open submenu in default（uncontrolled）                                                                                                                                                                         | string \| string[]                                                                                                     | []            |          |
| defaultOpenAll         | Open all submenus default, only when mode is set to 'inline' and openMode is set to 'multiple', priority is higher than defaultOpenKeys                                                                                 | boolean                                                                                                                | false         |          |
| onOpen                 | Callback function triggered when open or close the submenu<br/><br/>**signature**:<br/>**params**:<br/>_keys_: Keys of open submenu<br/>_extra_: Info of the operating submenu                                          | (keys: string[], extra: { key: string; open: boolean }) => void                                                        | -             |          |
| mode                   | Open mode of submenu                                                                                                                                                                                                    | Mode                                                                                                                   | 'inline'      |          |
| triggerType            | Open trigger type of submenu                                                                                                                                                                                            | 'click' \| 'hover'                                                                                                     | 'click'       |          |
| openMode               | Expand mode of the inline submenu, expand a submenu or multiple submenus at the same time, it only works when mode is inline                                                                                            | 'single' \| 'multiple'                                                                                                 | 'multiple'    |          |
| inlineIndent           | Indent of inline submenu                                                                                                                                                                                                | number                                                                                                                 | 20            |          |
| popupAutoWidth         | Whether the width of the pop up submenu is equal to the parent menu item.                                                                                                                                               | boolean                                                                                                                | false         |          |
| popupAlign             | Alignment of the pop up submenu                                                                                                                                                                                         | 'follow' \| 'outside'                                                                                                  | 'follow'      |          |
| popupProps             | Properties of Popup                                                                                                                                                                                                     | PopupProps \| ((popupItemProps: PopupItemProps) => PopupProps)                                                         | -             |          |
| popupClassName         | ClassName of the pop up submenu                                                                                                                                                                                         | string                                                                                                                 | -             |          |
| popupStyle             | Style of the pop up submenu                                                                                                                                                                                             | React.CSSProperties                                                                                                    | -             |          |
| selectedKeys           | Keys of selected menu item currently（controlled）                                                                                                                                                                      | string \| string[]                                                                                                     | -             |          |
| defaultSelectedKeys    | Keys of selected menu item in default（uncontrolled）                                                                                                                                                                   | string \| string[]                                                                                                     | -             |          |
| onSelect               | Callback function triggered when select or unselect menu item<br/><br/>**signature**:<br/>**params**:<br/>_selectedKeys_: Keys of selected menu items<br/>_item_: Current operation menu item<br/>_extra_: Extra params | (selectedKeys: string[], item: SelectableItem, extra: SelectExtra) => void                                             | -             |          |
| selectMode             | Select mode, single or multiple, no value by default, not selectable                                                                                                                                                    | 'single' \| 'multiple'                                                                                                 | -             |          |
| shallowSelect          | Whether you can only select the first level menu item (you cannot select the menu item in the submenu)                                                                                                                  | boolean                                                                                                                | false         |          |
| hasSelectedIcon        | Whether to show the selected icon, if it is set to false, it needs to match the background color when the configuration platform setting is selected to distinguish between                                             | boolean                                                                                                                | true          |          |
| isSelectIconRight      | Whether to set the selected icon on right side of menu, this only works when hasSelectedIcon is true                                                                                                                    | boolean                                                                                                                | false         |          |
| direction              | Direction of the menu's first level                                                                                                                                                                                     | 'ver' \| 'hoz'                                                                                                         | 'ver'         |          |
| hozAlign               | Alignment of items and footer in the horizontal menu bar, only works when direction is set to 'hoz' and the header exists                                                                                               | 'left' \| 'right'                                                                                                      | 'left'        |          |
| header                 | The header content of menu                                                                                                                                                                                              | React.ReactNode                                                                                                        | -             |          |
| footer                 | The footer content of menu                                                                                                                                                                                              | React.ReactNode                                                                                                        | -             |          |
| footerWrapperClassName | ClassName of the footer wrapper dom                                                                                                                                                                                     | string                                                                                                                 | -             |          |
| autoFocus              | Whether to get focus automatically                                                                                                                                                                                      | boolean                                                                                                                | false         |          |
| focusedKey             | Key of the currently focused submenu or menu item                                                                                                                                                                       | string                                                                                                                 | -             |          |
| focusable              | Is focusable                                                                                                                                                                                                            | boolean                                                                                                                | true          |          |
| onItemFocus            | Callback when some menu item focused<br/><br/>**signature**:<br/>**params**:<br/>_key_: Key of the menu item<br/>_item_: Instance of menu item<br/>_event_: The event object                                            | (<br/> key: string,<br/> item: MenuItem,<br/> event: React.MouseEvent \| React.KeyboardEvent<br/> ) => void            | -             |          |
| onItemClick            | Callback when menu item be clicked<br/><br/>**signature**:<br/>**params**:<br/>_key_: Key of clicked menu item<br/>_item_: Clicked menu item instance<br/>_event_: Event object                                         | (<br/> key: string,<br/> item: MenuItem,<br/> event: React.MouseEvent \| React.KeyboardEvent<br/> ) => void            | -             |          |
| onItemKeyDown          | Callback when menu item focused and keyboard down<br/><br/>**signature**:<br/>**params**:<br/>_key_: Key of the menu item<br/>_item_: Menu item instance<br/>_event_: Event object                                      | (<br/> key: string \| null \| undefined,<br/> item: MenuItem,<br/> event: React.KeyboardEvent<br/> ) => void           | -             |          |
| embeddable             | Integrate with the background or not(which means no background/border/box                                                                                                                                               | boolean                                                                                                                | false         |          |
| icons                  | Custom inner icons                                                                                                                                                                                                      | {<br/> select?: React.ReactNode;<br/> }                                                                                | -             |          |
| hozInLine              | Force display in one row, over items will collapse in SubMenu                                                                                                                                                           | boolean                                                                                                                | -             |          |
| renderMore             | Custom render more items（Only for hozInLine = true）<br/><br/>**signature**:<br/>**params**:<br/>_items_: The collapsed menu items<br/>**return**:<br/>More render content                                             | (<br/> items?: React.ReactElement[]<br/> ) => React.ReactElement\<{ className?: string; style?: React.CSSProperties }> | -             |          |
| inlineArrowDirection   | Arrow direction of sub menu                                                                                                                                                                                             | 'down' \| 'right'                                                                                                      | 'down'        |          |
| labelToggleChecked     | Can label trigger checked change                                                                                                                                                                                        | boolean                                                                                                                | true          |          |
| expandAnimation        | Enable animation when menu is expanding                                                                                                                                                                                 | boolean                                                                                                                | true          |          |
| itemClassName          | ClassName of menu items                                                                                                                                                                                                 | string                                                                                                                 | -             |          |
| flatenContent          | Flaten item doms inside the menu container                                                                                                                                                                              | boolean                                                                                                                | -             |          |

### Menu.SubMenu

| Param                   | Description                                                                    | Type            | Default Value | Required |
| ----------------------- | ------------------------------------------------------------------------------ | --------------- | ------------- | -------- |
| label                   | Label of submenu                                                               | React.ReactNode | -             |          |
| selectable              | Whether is selectable, it only works when set selectMode of Menu               | boolean         | false         |          |
| mode                    | Open mode of submenu, it will override the property with the same name on Menu | Mode            | -             |          |
| children                | Menu item or submenu                                                           | React.ReactNode | -             |          |
| level                   | -                                                                              | number          | -             |          |
| noIcon                  | No icon                                                                        | boolean         | false         |          |
| subMenuContentClassName | ClassName of the content node                                                  | string          | -             |          |

### Menu.PopupItem

| Param       | Description                                                               | Type                  | Default Value | Required |
| ----------- | ------------------------------------------------------------------------- | --------------------- | ------------- | -------- |
| label       | Label of the popup item                                                   | React.ReactNode       | -             |          |
| children    | Popup content                                                             | React.ReactNode       | -             |          |
| hasSubMenu  | -                                                                         | boolean               | -             |          |
| triggerType | Open trigger type of popup content                                        | 'click' \| 'hover'    | -             |          |
| align       | Alignment of the pop up submenu                                           | 'follow' \| 'outside' | -             |          |
| selectable  | Whether is selectable, it only works when set selectMode of Menu          | boolean               | false         |          |
| autoWidth   | Whether the width of the pop up submenu is equal to the parent menu item. | boolean               | -             |          |

### Menu.CheckboxItem

This subcomponent selection is not controlled by defaultSelectedKeys/selectedKeys. Please control the selected yourself.

| Param         | Description                                                                                                                                             | Type                                                                                                             | Default Value | Required |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| checked       | Whether is checked                                                                                                                                      | boolean                                                                                                          | false         |          |
| indeterminate | Whether is indeterminate                                                                                                                                | boolean                                                                                                          | false         |          |
| disabled      | Whether is disabled                                                                                                                                     | boolean                                                                                                          | false         |          |
| onChange      | Callback function triggered when check or uncheck menu item<br/><br/>**signature**:<br/>**params**:<br/>_checked_: Is checked<br/>_event_: Event object | (<br/> checked: boolean,<br/> event: React.MouseEvent \| React.KeyboardEvent \| React.ChangeEvent<br/> ) => void | -             |          |
| helper        | Help text                                                                                                                                               | React.ReactNode                                                                                                  | -             |          |
| children      | Content of menu check item                                                                                                                              | React.ReactNode                                                                                                  | -             |          |

### Menu.RadioItem

This subcomponent selection is not controlled by defaultSelectedKeys/selectedKeys. Please control the selected yourself.

| Param    | Description                                                                                                                                             | Type                                                                       | Default Value | Required |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- | -------- |
| checked  | Whether is checked                                                                                                                                      | boolean                                                                    | false         |          |
| disabled | Whether is disabled                                                                                                                                     | boolean                                                                    | false         |          |
| onChange | Callback function triggered when check or uncheck menu item<br/><br/>**signature**:<br/>**params**:<br/>_checked_: Is checked<br/>_event_: Event object | (checked: boolean, event: React.MouseEvent \| React.KeyboardEvent) => void | -             |          |
| helper   | Help text                                                                                                                                               | React.ReactNode                                                            | -             |          |
| children | Content of menu radio item                                                                                                                              | React.ReactNode                                                            | -             |          |

### Menu.Group

| Param    | Description    | Type                                   | Default Value | Required |
| -------- | -------------- | -------------------------------------- | ------------- | -------- |
| label    | Label of group | React.ReactNode                        | -             |          |
| children | Menu items     | React.ReactChild \| React.ReactChild[] | -             | yes      |

### Menu.Divider

Split line

### SelectExtra

The extra info when trigger select

| Param     | Description                                 | Type              | Default Value | Required |
| --------- | ------------------------------------------- | ----------------- | ------------- | -------- |
| key       | Key of menu item                            | string            | -             | yes      |
| select    | Is selected                                 | boolean           | -             | yes      |
| label     | The label of menu item                      | React.ReactNode   | -             | yes      |
| keyPath   | Full key paths of the operating menu item   | string[]          | -             | yes      |
| labelPath | Full label paths of the operating menu item | React.ReactNode[] | -             | yes      |

### Mode

Open mode of submenu

```typescript
export type Mode = 'inline' | 'popup';
```

<!-- api-extra-start -->

### Menu.create(props)

Create a context menu.

-   the props argument can be passed to all supported props of Menu
-   the props argument adds support for overlayProps to customize the overlay

<!-- api-extra-end -->

## ARIA and KeyBoard

| KeyBoard    | Descripiton                                                                                                             |
| :---------- | :---------------------------------------------------------------------------------------------------------------------- |
| Up Arrow    | navigate to previous item                                                                                               |
| Down Arrow  | navigate to next item                                                                                                   |
| Right Arrow | open the submenu, navigate to the first item of the submenu; horizontal menu bar first level, navigate to the right one |
| Left Arrow  | close the submenu, navigate to the parent menu; horizontal menu bar first level, navigation to the left one             |
| Enter       | open submenu and navigate to the first item of the submenu                                                              |
| Esc         | close submenu and navigate to the parent menu item                                                                      |
| Space       | toggle selected or checked                                                                                              |
