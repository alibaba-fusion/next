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

- Shell should be configured according to the actual business requirements.
- The same application uses a unified Shell framework to avoid confusion.

````jsx
<Shell>
    <Shell.Branding />
    <Shell.Navigation/>
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
````

`<Shell.Content />` uses css-grid, others are `display: flex`

## API

### Shell
| Param                | Description  | Type              | Default Value      |
| -------------------- | ------------ | ----------------- | ------------------ |
| device             | Preset screen width, tt determines whether `Navigation` `LocalNavigation` `Ancillary`take space or not<br><br>**option**:<br>'phone', 'tablet', 'desktop'     | Enum         |  desktop    |
| type             | type of Shell <br><br>**可选值**:<br>'light', 'dark', 'brand'     | Enum         |  light    |
| fixedHeader   | fixed header or not. Doesn't work under IE11    | Boolean         | false     |


### Shell.Navigation
It will tell his children whether it's collapse or not by `isCollapse` via Context.

| Param                | Description  | Type              | Default Value      |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | collapse or not  | Boolean         | false     |
| direction  | header or asider<br><br>**option**:<br>'hoz', 'ver'    | Enum         |  hoz    |
| align      | Arrangement of Navigation when direction is hoz<br><br>**option**:<br>'left', 'right', 'center'   | Enum        |  right  |
| onCollapseChange   | this will be triggered when collapse changed by inner icon   | Function        | () => {}   |
| trigger   | trigger of Shell.Navigation, it placed on top and left of the page, you can set `null` to remove it    | ReactNode         |      |
| fixed   | fixed or not, only worked when Shell fixedHeader is true   | Boolean         | false     |

### Shell.LocalNavigation
| Param                | Description  | Type              | Default Value      |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | collapse or not    | Boolean         | false     |
| onCollapseChange   | this will be triggered when collapse changed by inner icon   | Function        | () => {}   |

### Shell.ToolDock
| Param                | Description  | Type              | Default Value      |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | collapse or not   | Boolean         | false     |
| onCollapseChange   | this will be triggered when collapse changed by inner icon   | Function        | () => {}   |
| fixed   | fixed or not, only worked when Shell fixedHeader is true   | Boolean         | false     |

### Shell.Ancillary
| Param                | Description  | Type              | Default Value      |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | collapse or not   | Boolean         | false     |
| onCollapseChange   | this will be triggered when collapse changed by inner icon   | Function        | () => {}   |
