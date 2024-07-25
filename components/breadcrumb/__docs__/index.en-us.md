# Breadcrumb

-   category: Components
-   family: Navigation
-   type: Nav
-   cols: 1

---

## Guide

### When to use

It is used to inform the user of the current position and the position of the current page in the entire site. It is an auxiliary navigation method and is applicable to a clear and multi-level structure of the website. Each layer of content is a hierarchical ownership relationship, which is convenient for users to return. One or all levels of pages.

## API

### Breadcrumb

| Param           | Description                                                                                                           | Type                                                                                                | Default Value | Required | Supported Version |
| --------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------- | -------- | ----------------- |
| children        | Children components, should be an Breadcrumb.Item                                                                     | \| Array\<React.ReactElement\<ItemProps> \| boolean \| null><br/> \| React.ReactElement\<ItemProps> | -             |          | -                 |
| maxNode         | The maximum number of breadcrumbs is displayed and the excess is hidden, can set auto compute maximum number          | number \| 'auto'                                                                                    | 100           |          | -                 |
| showHiddenItems | When the hidden items are exceeded, is it possible to click the ellipsis to display the menu (including hidden items) | boolean                                                                                             | false         |          | 1.23              |
| popupContainer  | The container node that the popup mounts (meaningful only when showHiddenItems is true)                               | DropdownProps['container']                                                                          | -             |          | 1.23              |
| followTrigger   | Whether to scroll with the trigger (meaningful only when showHiddenItems is true)                                     | boolean                                                                                             | -             |          | 1.23              |
| popupProps      | The attributes added to the popup (meaningful only when showHiddenItems is true)                                      | DropdownProps                                                                                       | -             |          | 1.23              |
| separator       | Separator, can be text or Icon                                                                                        | string \| React.ReactNode                                                                           | -             |          | -                 |
| component       | Set Element type                                                                                                      | React.ComponentType\<BreadcrumbProps> \| string                                                     | 'nav'         |          | -                 |

### Breadcrumb.Item

| Param   | Description                                                                                        | Type                                  | Default Value | Required |
| ------- | -------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------- | -------- |
| link    | The breadcrumb item link, if this property is set, the node is `<a />`, otherwise it is `<span />` | string                                | -             |          |
| onClick | Click event<br/><br/>**signature**:<br/>**params**:<br/>_e_: e                                     | React.MouseEventHandler\<HTMLElement> | -             |          |

## ARIA and KeyBoard

| KeyBoard | Descripiton         |
| :------- | :------------------ |
| Tab      | switch to next item |
