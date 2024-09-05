# Shell

-   category: Components
-   family: General
-   chinese: 框架
-   type: 布局

---

框架组件，仅支持IE10+。

## 何时使用

-   Shell 是整个应用的基础结构框架。
-   它体现应用的结构形式和承载应用的基本能力，让用户可以在同一套框架下完成自己所有的操作。

## 如何使用

-   Shell 应该根据业务实际诉求的复杂度进行配置；
-   同一个应用统一使用一套 Shell 框架，避免出现混乱问题。

## API

### Shell

| 参数        | 说明                                                                   | 类型                             | 默认值    | 是否必填 |
| ----------- | ---------------------------------------------------------------------- | -------------------------------- | --------- | -------- |
| device      | 预设屏幕宽度，会影响Navigation LocalNavigation Ancillary等是否占据空间 | 'tablet' \| 'desktop' \| 'phone' | 'desktop' |          |
| type        | 样式类型，分浅色主题、深色主题、主题色主题                             | 'light' \| 'dark' \| 'brand'     | 'light'   |          |
| fixedHeader | 是否固定Header，采用sticky布局，不支持 IE11                            | boolean                          | false     |          |

### Shell.Navigation

| 参数             | 说明                                                               | 类型                          | 默认值    | 是否必填 |
| ---------------- | ------------------------------------------------------------------ | ----------------------------- | --------- | -------- |
| direction        | 方向                                                               | 'hoz' \| 'ver'                | 'hoz'     |          |
| collapse         | 是否折叠(折叠成只有icon状态)                                       | boolean                       | false     |          |
| align            | 横向模式下，导航排布的位置                                         | 'left' \| 'right' \| 'center' | 'right'   |          |
| onCollapseChange | 默认按钮触发的展开收起状态                                         | (collapse?: boolean) => void  | func.noop |          |
| trigger          | 菜单展开、收起的触发元素，默认在左上角，不想要可以设置 null 来去掉 | ReactNode                     | -         |          |
| fixed            | 是否固定，且需要在在 Shell fixedHeader时生效                       | boolean                       | false     |          |

### Shell.LocalNavigation

| 参数             | 说明                       | 类型                         | 默认值    | 是否必填 |
| ---------------- | -------------------------- | ---------------------------- | --------- | -------- |
| collapse         | 是否折叠（完全收起）       | boolean                      | false     |          |
| onCollapseChange | 默认按钮触发的展开收起状态 | (collapse?: boolean) => void | func.noop |          |

### Shell.ToolDock

| 参数             | 说明                                         | 类型                         | 默认值    | 是否必填 |
| ---------------- | -------------------------------------------- | ---------------------------- | --------- | -------- |
| collapse         | 是否折叠（完全收起）                         | boolean                      | false     |          |
| onCollapseChange | 默认按钮触发的展开收起状态                   | (collapse?: boolean) => void | func.noop |          |
| fixed            | 是否固定，且需要在在 Shell fixedHeader时生效 | boolean                      | false     |          |

### Shell.Ancillary

| 参数             | 说明                       | 类型                         | 默认值    | 是否必填 |
| ---------------- | -------------------------- | ---------------------------- | --------- | -------- |
| collapse         | 是否折叠（完全收起）       | boolean                      | false     |          |
| onCollapseChange | 默认按钮触发的展开收起状态 | (collapse?: boolean) => void | func.noop |          |

## FAQ

### 有侧边栏的情况下，如何去掉左上角的side bar 展开、收起触发器？

设置 `<Shell.Navigation trigger={null}/>`

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

其中 `<Shell.Content />` 采用Grid布局， 其他均为 Flex布局。
