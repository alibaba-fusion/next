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

| Param               | Description                                                                                                                                                                                       | Type                                                            | Default Value | Required |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------- | -------- |
| label               | The text in button                                                                                                                                                                                | React.ReactNode                                                 | -             |          |
| autoWidth           | If popup width equals to button width                                                                                                                                                             | boolean                                                         | true          |          |
| popupTriggerType    | Trigger type of popup                                                                                                                                                                             | 'click' \| 'hover'                                              | 'click'       |          |
| popupContainer      | Container of popup                                                                                                                                                                                | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement) | -             |          |
| visible             | Visible state of popup                                                                                                                                                                            | boolean                                                         | -             |          |
| defaultVisible      | Default visible state of popup                                                                                                                                                                    | boolean                                                         | -             |          |
| onVisibleChange     | Callback when visible state changes                                                                                                                                                               | (visible: boolean, type: string) => void                        | -             |          |
| popupStyle          | Custom style of popup                                                                                                                                                                             | React.CSSProperties                                             | -             |          |
| popupClassName      | Custom className of popup                                                                                                                                                                         | string                                                          | -             |          |
| popupProps          | Props of popup                                                                                                                                                                                    | PopupProps                                                      | -             |          |
| followTrigger       | Follow Trigger or not                                                                                                                                                                             | boolean                                                         | -             |          |
| defaultSelectedKeys | Default selected items, as Menu                                                                                                                                                                   | Array\<string>                                                  | []            |          |
| selectedKeys        | Selected items, as Menu                                                                                                                                                                           | string \| Array\<string>                                        | -             |          |
| selectMode          | Select mode of menu, see Menu                                                                                                                                                                     | 'single' \| 'multiple'                                          | -             |          |
| onItemClick         | Callback when click the menu item, see Menu<br/><br/>**signature**:<br/>**params**:<br/>_key_: Key of clicked menu item<br/>_item_: Clicked menu item instance<br/>_event_: Event object          | MenuProps['onItemClick']                                        | -             |          |
| onSelect            | Callback when select the menu, see Menu<br/><br/>**signature**:<br/>**params**:<br/>_selectedKeys_: Keys of selected menu items<br/>_item_: Current operation menu item<br/>_extra_: Extra params | MenuProps['onSelect']                                           | -             |          |
| menuProps           | Props of menu                                                                                                                                                                                     | MenuProps                                                       | -             |          |
