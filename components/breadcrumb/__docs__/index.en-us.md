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

| Param           | Description                                                                                                                  | Type       | Default Value          |
| --------- | -------------------------- | --------- | ------------------------------ |
| children  | Children components, hsould be an Breadcrumb.Item | custom    | -                              |
| maxNode   | The maximum number of breadcrumbs is displayed and the excess is hidden, can set auto compute  maximum number         | Number    | 100, 'auto'                        |
| separator | Separator, can be text or Icon            | ReactNode | &lt;Icon type="arrow-right" /> |
| component | Set Element type                     | String/Function | 'nav'                          |
  
### Breadcrumb.Item

| Param           | Description                                                                                                                  | Type       | Default Value          |
| ---- | -------------------------------------------- | ------ | --- |
| link | The breadcrumb item link, if this property is set, the node is `<a />`, otherwise it is `<span />` | String | -   |
| onClick   | Click event | Function (event: MouseEvent) => void 
## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Tab    | switch to next item                          |
