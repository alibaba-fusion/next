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

| Property           | Description                                                                                                                  | Type       | Default Value          |
| ------------ | ------------------------------------------------------------------------------------------------------------------- | -------- | ------------ |
| container    | The container for listening scroll events<br><br>**signature**:<br>Function() => ReactElement<br>**return**:<br>{ReactElement} the instance of container<br>     | Function | () => window |
| offsetTop    | Offset from top when event triggers  | Number   | -       |
| offsetBottom | Offset from bottom when event triggers | Number   | -     |
| onAffix      | Callback when affix event triggers <br><br>**signature**:<br>Function(isAffixed: Boolean) => void<br>**parameters**:<br>_if element is affixed_: {Boolean} null | Function | func.noop    |
