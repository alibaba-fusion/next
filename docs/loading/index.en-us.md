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

| Param | Descripiton  | Type  | Default Value |
| ---------- | -------------------------------------------------------------------------- | ------- | -------- |
| tip        | custom text in loading                                                                      | any     | -        |
| size       | the animation size<br><br>option:<br>'large'<br>'medium'             | Enum    | 'large'  |
| tipAlign   | tip location <br><br>option:<br>'right'(right side of animation)<br>'bottom'(bottom of animation) | Enum    | 'bottom' |
| visible    | loading state, default true                                                        | Boolean | true     |
| indicator  | custom  animation                                                                      | any     | -        |
| color      | animation color                                                                     | String  | -        |
| fullScreen | fullscreen display                                                                       | Boolean | -        |
| disableScroll | whether to disable page scrolling, only works when fullScreen is true                 | Boolean | false    |
| children   | children elements                                                                        | any     | -        |
