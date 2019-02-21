# Collapse

-   category: Components
-   family: DataDisplay
-   chinese: 折叠面板
-   type: Layout

---

## Guide

### When to use

When some earas may toggle between collapse state and expand state.
## API

### Collapse

| Param           | Description                                | Type       | Default Value          |
| ------------------- | -------------------------------------------------- | -------- | --------- |
| dataSource          | data model                                         | Array    | -         |
| defaultExpandedKeys | default expand panel keys                                           | Array    | -         |
| expandedKeys        | expand panel keys                                          | Array    | -         |
| onExpand            | callback when panel state changes<br><br>**signature**:<br>Function() => void | Function | func.noop |
| disabled            | disable all panel                                               | Boolean  | -         |
| accordion           | accordion mode, you can only open at most one panel             | Boolean  | false     |

### Collapse.Panel

| Param      | Description         | Type       | Default Value          |
| -------- | -------- | --------- | --- |
| disabled | disable this panel | Boolean   | -   |
| title    | panel title       | ReactNode | -   |

## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Tab       | navigate to the next collapse panel                |
| Space       | toggle expanded                          |