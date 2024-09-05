# Shell

-   category: Components
-   family: General
-   chinese: 框架
-   type: 布局

---

Support IE10+

## Guide

Shell is the infrastructure framework of the whole application. It embodies the structure of the application and the basic capabilities of the application, so that users can complete all their operations under the same framework.

### 何时使用

-   Shell should be configured according to the actual business requirements.
-   The same application uses a unified Shell framework to avoid confusion.

```jsx
<Shell>
    <Shell.Branding />
    <Shell.Navigation />
    <Shell.Action />

    <Shell.MultiTask />
    <Shell.LocalNavigation />

    <Shell.AppBar />
    <Shell.Content />
    <Shell.Footer />

    <Shell.Ancillary />
    <Shell.ToolDock>
        <Shell.ToolDockItem />
    </Shell.ToolDock>
</Shell>
```

`<Shell.Content />` uses css-grid, others are `display: flex`

## API

### Shell

| Param       | Description                                                                                      | Type                             | Default Value | Required |
| ----------- | ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------- | -------- |
| device      | Preset screen width, tt determines whether Navigation LocalNavigation Ancillarytake space or not | 'tablet' \| 'desktop' \| 'phone' | 'desktop'     |          |
| type        | Type of Shell                                                                                    | 'light' \| 'dark' \| 'brand'     | 'light'       |          |
| fixedHeader | Fixed header or not. Doesn't work under IE11                                                     | boolean                          | false         |          |

### Shell.Navigation

| Param            | Description                                                                                       | Type                          | Default Value | Required |
| ---------------- | ------------------------------------------------------------------------------------------------- | ----------------------------- | ------------- | -------- |
| direction        | Header or asider                                                                                  | 'hoz' \| 'ver'                | 'hoz'         |          |
| collapse         | Collapse or not                                                                                   | boolean                       | false         |          |
| align            | Arrangement of Navigation when direction is hoz                                                   | 'left' \| 'right' \| 'center' | 'right'       |          |
| onCollapseChange | This will be triggered when collapse changed by inner icon                                        | (collapse?: boolean) => void  | func.noop     |          |
| trigger          | Trigger of Shell.Navigation, it placed on top and left of the page, you can set null to remove it | ReactNode                     | -             |          |
| fixed            | Fixed or not, only worked when Shell fixedHeader is true                                          | boolean                       | false         |          |

### Shell.LocalNavigation

| Param            | Description                                                | Type                         | Default Value | Required |
| ---------------- | ---------------------------------------------------------- | ---------------------------- | ------------- | -------- |
| collapse         | Collapse or not                                            | boolean                      | false         |          |
| onCollapseChange | This will be triggered when collapse changed by inner icon | (collapse?: boolean) => void | func.noop     |          |

### Shell.ToolDock

| Param            | Description                                                | Type                         | Default Value | Required |
| ---------------- | ---------------------------------------------------------- | ---------------------------- | ------------- | -------- |
| collapse         | Collapse or not                                            | boolean                      | false         |          |
| onCollapseChange | This will be triggered when collapse changed by inner icon | (collapse?: boolean) => void | func.noop     |          |
| fixed            | Fixed or not, only worked when Shell fixedHeader is true   | boolean                      | false         |          |

### Shell.Ancillary

| Param            | Description                                                | Type                         | Default Value | Required |
| ---------------- | ---------------------------------------------------------- | ---------------------------- | ------------- | -------- |
| collapse         | Collapse or not                                            | boolean                      | false         |          |
| onCollapseChange | This will be triggered when collapse changed by inner icon | (collapse?: boolean) => void | func.noop     |          |
