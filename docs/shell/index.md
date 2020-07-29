# Shell

-   category: Components
-   family: General
-   chinese: 框架
-   type: 布局

---

仅支持IE10+

## Guide

Shell 是整个应用的基础结构框架。它体现应用的结构形式和承载应用的基本能力，让用户可以在同一套框架下完成自己所有的操作。

### 何时使用

- Shell 应该根据业务实际诉求的复杂度进行配置；
- 同一个应用统一使用一套 Shell 框架，避免出现混乱问题；

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

其中 `<Shell.Content />` 采用Grid布局， 其他均为 Flex布局

## API

### Shell
| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| device             | 预设屏幕宽度，会影响`Navigation` `LocalNavigation` `Ancillary`等是否占据空间<br><br>**可选值**:<br>'phone', 'tablet', 'desktop'     | Enum         |  desktop    |
| type             | 样式类型，分浅色主题、深色主题、主题色主题<br><br>**可选值**:<br>'light', 'dark', 'brand'     | Enum         |  light    |
| fixedHeader   | 是否固定Header，采用sticky布局，不支持 IE11    | Boolean         | false     |

### Shell.Navigation
向子组件透传 isCollapse 的Context，表示当前是否处于折叠状态

| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| direction  | 方向<br><br>**可选值**:<br>'hoz', 'ver'    | Enum         |  hoz    |
| collapse   | 是否折叠(折叠成只有icon状态)   | Boolean         | false     |
| align   | 横向模式下，导航排布的位置<br><br>**可选值**:<br>'left', 'right', 'center'   | Enum        |  right  |
| onCollapseChange   | 默认按钮触发的展开收起状态   | Function        | () => {}   |
| trigger   | 菜单展开、收起的触发元素，默认在左上角，不想要可以设置 `null` 来去掉    | ReactNode         |      |
| fixed   | 是否固定，且需要在在 Shell fixedHeader时生效    | Boolean         | false     |


### Shell.LocalNavigation
| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | 是否折叠（完全收起）    | Boolean         | false     |
| onCollapseChange   | 默认按钮触发的展开收起状态   | Function        | () => {}   |

### Shell.ToolDock
| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | 是否折叠（完全收起）   | Boolean         | false     |
| onCollapseChange   | 默认按钮触发的展开收起状态   | Function        | () => {}   |
| fixed   | 是否固定，且需要在在 Shell fixedHeader时生效    | Boolean         | false     |

### Shell.Ancillary
| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | 是否折叠（完全收起）   | Boolean         | false     |
| onCollapseChange   | 默认按钮触发的展开收起状态   | Function        | () => {}   |


