# Loading

-   category: Components
-   family: Feedback
-   chinese: 加载
-   type: basic

---

## Develop Guide

### When to use

When a part of page is waiting asynchronous data or is rendering, loading animate may reduce anxieties.

### Attentions

Loading use the layout `display='inline-block'` to wrap inner elements by default.

if you want `wrap all the element`, please use `<Loading style={{display: 'block'}} />`

## API

### Loading

| Param           | Description                                                                                                                                                                                          | Type                                        | Default Value | Required |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------- | -------- |
| tip             | Tip content                                                                                                                                                                                          | React.ReactNode \| string                   | -             |          |
| tipAlign        | Align of tip                                                                                                                                                                                         | 'right' \| 'bottom'                         | 'bottom'      |          |
| visible         | Loading status, default to true                                                                                                                                                                      | boolean                                     | true          |          |
| size            | Size of animation indicator                                                                                                                                                                          | 'large' \| 'medium'                         | 'large'       |          |
| indicator       | Custom animation indicator                                                                                                                                                                           | React.ReactNode                             | -             |          |
| color           | Color of animation indicator                                                                                                                                                                         | string                                      | -             |          |
| fullScreen      | Full screen display                                                                                                                                                                                  | boolean                                     | -             |          |
| disableScroll   | Is scrolling disabled, only effective in fullScreen mode                                                                                                                                             | boolean                                     | false         |          |
| children        | Child elements                                                                                                                                                                                       | React.ReactNode                             | -             |          |
| onVisibleChange | The callback function triggered when the loading layer request is closed in full screen mode<br/><br/>**signature**:<br/>**params**:<br/>_type_: The source of fan layer closure<br/>_e_: DOM events | (type: string, e: React.MouseEvent) => void | -             |          |
| safeNode        | Security node, only valid at fullScreen                                                                                                                                                              | PopupProps['safeNode']                      | -             |          |
