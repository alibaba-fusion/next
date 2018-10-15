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

| params              | desc                                               | type     | default   |
| ------------------- | -------------------------------------------------- | -------- | --------- |
| dataSource          | data model                                         | Array    | -         |
| defaultExpandedKeys | default expand panel keys                                           | Array    | -         |
| expandedKeys        | expand panel keys                                          | Array    | -         |
| onExpand            | callback when panel state changes<br><br>**signature**:<br>Function() => void | Function | func.noop |
| disabled            | disable all panel                                               | Boolean  | -         |
| accordion           | accordion mode, you can only open at most one panel             | Boolean  | false     |

### Collapse.Panel

| params   | desc     | type      | default |
| -------- | -------- | --------- | --- |
| disabled | disable this panel | Boolean   | -   |
| title    | panel title       | ReactNode | -   |
