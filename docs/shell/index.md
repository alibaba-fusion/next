# Shell

-   category: Components
-   family: General
-   chinese: 框架
-   type: 布局

---

仅支持IE10+

## Guide

### 何时使用

中后台常用的布局组件

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
    </ Shell.ToolDock>
</Shell>
````

其中 `<Shell.Content />` 采用Grid布局， 其他均为 Flex布局

## API

### Shell
| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| device             | 预设屏幕宽度，会影响`Navigation` `LocalNavigation` `Ancillary`等是否占据空间<br><br>**可选值**:<br>'phone', 'tablet', 'desktop'     | Enum         |  desktop    |

### Shell.Navigation
向子组件透传 isCollapse 的Context，表示当前是否处于折叠状态

| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | 是否折叠(折叠成只有icon状态)   | Boolean         | false     |
| direction  | 方向<br><br>**可选值**:<br>'hoz', 'ver'    | Enum         |  hoz    |


### Shell.LocalNavigation
| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | 是否折叠（完全收起）    | Boolean         | false     |

### Shell.ToolDock
| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | 是否折叠（完全收起）   | Boolean         | false     |

### Shell.Ancillary
| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | 是否折叠（完全收起）   | Boolean         | false     |

