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

| Param               | Description                                      | Type                                         | Default Value | Required |
| ------------------- | ------------------------------------------------ | -------------------------------------------- | ------------- | -------- |
| dataSource          | Use data model to build                          | Array<DataItem>                              | -             |          |
| defaultExpandedKeys | Default expanded keys                            | KeyType[]                                    | -             |          |
| expandedKeys        | Controlled expanded keys                         | KeyType[]                                    | -             |          |
| onExpand            | Callback when the expanded state changes         | (expandedKeys: KeyType \| KeyType[]) => void | -             |          |
| disabled            | All disabled                                     | boolean                                      | -             |          |
| accordion           | Accordion mode, only one can be opened at a time | boolean                                      | false         |          |

### Collapse.Panel

| Param      | Description                     | Type                                                                                             | Default Value | Required |
| ---------- | ------------------------------- | ------------------------------------------------------------------------------------------------ | ------------- | -------- |
| disabled   | Whether to disable user actions | boolean                                                                                          | -             |          |
| title      | Title                           | React.ReactNode                                                                                  | -             |          |
| isExpanded | Whether to expand               | boolean                                                                                          | false         |          |
| onClick    | Click callback function         | \| ((e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>) => void)<br/> \| null | -             |          |

### KeyType

```typescript
export type KeyType = string | number;
```

### DataItem

```typescript
export type DataItem = {
    id?: string;
    title?: React.ReactNode;
    content?: React.ReactNode;
    disabled?: boolean;
    key?: KeyType;
    onClick?: (key: KeyType) => void;
    [propName: string]: unknown;
};
```

## ARIA and KeyBoard

| KeyBoard | Descripiton                         |
| :------- | :---------------------------------- |
| Tab      | navigate to the next collapse panel |
| Space    | toggle expanded                     |
