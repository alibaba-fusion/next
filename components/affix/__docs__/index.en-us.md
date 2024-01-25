# Affix

-   category: Components
-   family: Util
-   chinese: 固钉
-   type: Basic

---

## Guide

### When to Use

The Affix component allows an element to become affixed (locked) to an area on the page. This is offten used with navigation menus or social icon buttons, to make them "stick" at specific area while scrolling up and down the page.

## API

### Affix

| Param        | Description                                                                                                     | Type                       | Default Value | Required |
| ------------ | --------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- | -------- |
| container    | The container for listening scroll events                                                                       | () => Element \| Window    | () =\> window |          |
| offsetTop    | Offset from top when event triggers                                                                             | number                     | -             |          |
| offsetBottom | Offset from bottom when event triggers                                                                          | number                     | -             |          |
| onAffix      | Callback when affix event triggers<br/><br/>**signature**:<br/>**params**:<br/>_affixed_: If element is affixed | (affixed: boolean) => void | -             |          |
| useAbsolute  | Enable absolute position                                                                                        | boolean                    | -             |          |
| className    | -                                                                                                               | string                     | -             |          |
| style        | -                                                                                                               | React.CSSProperties        | -             |          |
