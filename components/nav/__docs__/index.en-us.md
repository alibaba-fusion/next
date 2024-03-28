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

-   iconOnly only works with the vertical direction.

-   The property of Nav inherits from Menu, so in addition to special instructions, you can use the API of Menu.

## API

### Nav

> The API inherits from `Menu`, please look at the `Menu` document

| Param               | Description                                                                                                                                                                                                                                                                                                                | Type                                                                                           | Default Value | Required | Supported Version |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------- | -------- | ----------------- |
| children            | Navigation item and sub navigation                                                                                                                                                                                                                                                                                         | React.ReactNode                                                                                | -             |          | -                 |
| defaultOpenAll      | Open all subnavs default, only when mode is set to 'inline' and openMode is set to 'multiple'                                                                                                                                                                                                                              | boolean                                                                                        | false         |          | -                 |
| mode                | Sub navigation open mode (horizontal navigation only supports pop up)                                                                                                                                                                                                                                                      | 'inline' \| 'popup'                                                                            | inline        |          | -                 |
| triggerType         | Sub navigation open trigger                                                                                                                                                                                                                                                                                                | 'click' \| 'hover'                                                                             | click         |          | -                 |
| openMode            | The open mode of inline sub navigation, expand a peer navigation or multiple navigations at the same level at same time, it only works in inline mode                                                                                                                                                                      | 'single' \| 'multiple'                                                                         | multiple      |          | -                 |
| inlineIndent        | Inline sub navigation indent distance                                                                                                                                                                                                                                                                                      | number                                                                                         | 20            |          | -                 |
| popupAlign          | Pop up sub navigation alignment (horizontal navigation only supports follow)                                                                                                                                                                                                                                               | 'follow' \| 'outside'                                                                          | follow        |          | -                 |
| popupClassName      | Pop up navigation custom class name                                                                                                                                                                                                                                                                                        | string                                                                                         | -             |          | -                 |
| selectedKeys        | Keys of selected nav item currently                                                                                                                                                                                                                                                                                        | string \| Array<string>                                                                        | -             |          | -                 |
| defaultSelectedKeys | Keys of selected nav item in default                                                                                                                                                                                                                                                                                       | string \| Array<string>                                                                        | []            |          | -                 |
| onSelect            | Callback function triggered when select or unselect nav item<br/><br/>**signature**:<br/>(selectedKeys: Array<string>, item?: React.ReactNode, extra?: SelectEventExtraOptions) => void<br/>**params**:<br/>_selectedKeys_: Keys of selected nav item<br/>_item_: Current operation nav item<br/>_extra_: Extra parameters | (selectedKeys: Array<string>, item?: React.ReactNode, extra?: SelectEventExtraOptions) => void | -             |          | -                 |
| direction           | Layout of navigation                                                                                                                                                                                                                                                                                                       | 'hoz' \| 'ver'                                                                                 | ver           |          | -                 |
| hozAlign            | Alignment of items in the horizontal nav bar, only works when direction is set to 'hoz' and the header exists                                                                                                                                                                                                              | 'left' \| 'right'                                                                              | left          |          | -                 |
| header              | Custom navigation head                                                                                                                                                                                                                                                                                                     | React.ReactNode                                                                                | -             |          | -                 |
| footer              | Custom navigation footer                                                                                                                                                                                                                                                                                                   | React.ReactNode                                                                                | -             |          | -                 |
| embeddable          | Whether to enable embedded mode                                                                                                                                                                                                                                                                                            | boolean                                                                                        | false         |          | 1.18              |
| type                | Type of navigation                                                                                                                                                                                                                                                                                                         | 'normal' \| 'primary' \| 'secondary' \| 'line'                                                 | normal        |          | -                 |
| activeDirection     | The active border direction of the selected item                                                                                                                                                                                                                                                                           | null \| 'top' \| 'bottom' \| 'left' \| 'right'                                                 | -             |          | -                 |
| iconOnly            | Whether to show only icons                                                                                                                                                                                                                                                                                                 | boolean                                                                                        | -             |          | -                 |
| iconTextOnly        | Whether to show text in iconOnly mode (only works when iconOnly=true)                                                                                                                                                                                                                                                      | boolean                                                                                        | -             |          | -                 |
| iconOnlyWidth       | IconOnly mode width (only works when iconOnly=true)                                                                                                                                                                                                                                                                        | number \| string                                                                               | -             |          | -                 |
| hasArrow            | Whether to show arrow (only works when iconOnly=true)                                                                                                                                                                                                                                                                      | boolean                                                                                        | true          |          | -                 |
| hasTooltip          | Whether to show tooltip (only works when iconOnly=true)                                                                                                                                                                                                                                                                    | boolean                                                                                        | false         |          | -                 |

### Nav.Group

> The API inherits from `Menu.Group`, please look at the `Menu.Group` document

| Param    | Description                        | Type            | Default Value | Required |
| -------- | ---------------------------------- | --------------- | ------------- | -------- |
| label    | Content of label                   | React.ReactNode | -             |          |
| children | Navigation item and sub navigation | React.ReactNode | -             |          |

### Nav.Item

> The API inherits from `Menu.Item`, please look at the `Menu.Item` document

| Param    | Description                                                     | Type                      | Default Value | Required |
| -------- | --------------------------------------------------------------- | ------------------------- | ------------- | -------- |
| icon     | Custom icon, can use Icon's type or `<Icon type="your type" />` | string \| React.ReactNode | -             |          |
| children | Content of navigation check item                                | React.ReactNode           | -             |          |

### Nav.PopupItem

> The API inherits from `Menu.PopupItem`, please look at the `Menu.PopupItem` document

| Param    | Description                                                     | Type                      | Default Value | Required |
| -------- | --------------------------------------------------------------- | ------------------------- | ------------- | -------- |
| label    | Content of label                                                | React.ReactNode           | -             |          |
| children | Content of popup                                                | React.ReactNode           | -             |          |
| icon     | Custom icon, can use Icon's type or `<Icon type="your type" />` | string \| React.ReactNode | -             |          |

### Nav.SubNav

> The API inherits from `Menu.SubMenu`, please look at the `Menu.SubMenu` document

| Param      | Description                                                     | Type                      | Default Value | Required |
| ---------- | --------------------------------------------------------------- | ------------------------- | ------------- | -------- |
| icon       | Custom icon, can use Icon's type or `<Icon type="your type" />` | string \| React.ReactNode | -             |          |
| label      | Content of label                                                | React.ReactNode           | -             |          |
| selectable | Whether is selectable                                           | boolean                   | false         |          |
| children   | Navigation item and sub navigation                              | React.ReactNode           | -             |          |
| noIcon     | Whether to show the icon of current item                        | boolean                   | -             |          |

### SelectEventExtraOptions

Options for {@link NavProps.onSelect}

```typescript
type SelectEventExtraOptions = {
    /**
     * 是否被选中
     * @en Whether is selected
     */
    select: boolean;
    /**
     * 导航项 key 的路径
     * @en Key path of current operation nav item
     */
    keyPath: string[];
    /**
     * 导航项的 key
     * @en Key of current operation nav item
     */
    key: string[];
    /**
     * 导航项的文本
     * @en Label of current operation nav item
     */
    label: string;
};
```

## ARIA and KeyBoard

| KeyBoard    | Descripiton                                                                                                             |
| :---------- | :---------------------------------------------------------------------------------------------------------------------- |
| Up Arrow    | navigate to previous item                                                                                               |
| Down Arrow  | navigate to next item                                                                                                   |
| Right Arrow | open the submenu, navigate to the first item of the submenu; horizontal menu bar first level, navigate to the right one |
| Left Arrow  | close the submenu, navigate to the parent menu; horizontal menu bar first level, navigation to the left one             |
| Enter       | open submenu and navigate to the first item of the submenu                                                              |
| Esc         | close submenu and navigate to the parent menu item                                                                      |
