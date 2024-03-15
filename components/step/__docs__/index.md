# Step

-   category: Components
-   family: Navigation
-   chinese: 步骤
-   type: 展示

---

引导用户按照流程完成任务的导航条。

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## API

### Step

| 参数           | 说明                                                                                                                                                                                                                                          | 类型                                                                                                                      | 默认值   | 是否必填 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| current        | 当前步骤                                                                                                                                                                                                                                      | number                                                                                                                    | 0        |          |
| shape          | 类型                                                                                                                                                                                                                                          | StepShape                                                                                                                 | 'circle' |          |
| direction      | 展示方向                                                                                                                                                                                                                                      | StepDirection                                                                                                             | 'hoz'    |          |
| labelPlacement | 横向布局时的内容排列方式                                                                                                                                                                                                                      | StepDirection                                                                                                             | 'ver'    |          |
| readOnly       | 是否只读模式                                                                                                                                                                                                                                  | boolean                                                                                                                   | -        |          |
| animation      | 是否开启动效                                                                                                                                                                                                                                  | boolean                                                                                                                   | true     |          |
| itemRender     | 自定义渲染节点<br/><br/>**签名**:<br/>**参数**:<br/>_index_: 节点索引<br/>_status_: 节点状态<br/>_title_: 节点标题，仅在 `shape='circle'` 时会传递<br/>_content_: 节点内容，仅在 `shape='circle'` 时会传递<br/>**返回值**:<br/>节点的渲染结果 | (<br/> index: number,<br/> status: StepStatus,<br/> title?: ReactNode,<br/> content?: ReactNode<br/> ) => React.ReactNode | -        |          |
| stretch        | 宽度是否横向拉伸                                                                                                                                                                                                                              | boolean                                                                                                                   | false    |          |

### Step.Item

| 参数       | 说明                                                                                                                                                                                                                                                                                | 类型                                                                                                                                  | 默认值 | 是否必填 |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- |
| status     | 步骤的状态，如不传，会根据外层的 Step 的 current 属性生成                                                                                                                                                                                                                           | StepStatus                                                                                                                            | -      |          |
| title      | 标题                                                                                                                                                                                                                                                                                | React.ReactNode                                                                                                                       | -      |          |
| icon       | 图标                                                                                                                                                                                                                                                                                | string                                                                                                                                | -      |          |
| content    | 内容填充，shape 为 arrow 时无效                                                                                                                                                                                                                                                     | React.ReactNode                                                                                                                       | -      |          |
| itemRender | StepItem 的自定义渲染，会覆盖父节点设置的 itemRender<br/><br/>**签名**:<br/>**参数**:<br/>_index_: 节点索引<br/>_status_: 节点状态<br/>_title_: 节点标题，仅在 `shape='circle'` 时会传递<br/>_content_: 节点内容，仅在 `shape='circle'` 时会传递<br/>**返回值**:<br/>节点的渲染结果 | (<br/> index: number,<br/> status: StepStatus,<br/> title?: React.ReactNode,<br/> content?: React.ReactNode<br/> ) => React.ReactNode | -      |          |
| percent    | 百分比                                                                                                                                                                                                                                                                              | number                                                                                                                                | -      |          |
| disabled   | 是否禁用                                                                                                                                                                                                                                                                            | boolean                                                                                                                               | -      |          |
| onClick    | 点击步骤时的回调<br/><br/>**签名**:<br/>**参数**:<br/>_index_: 节点索引                                                                                                                                                                                                             | (index: number) => unknown                                                                                                            | -      |          |

### StepDirection

```typescript
export type StepDirection = 'hoz' | 'ver';
```

### StepStatus

```typescript
export type StepStatus = 'wait' | 'process' | 'finish';
```

### StepShape

```typescript
export type StepShape = 'circle' | 'arrow' | 'dot';
```

## FAQ

### 为什么设置 Step 的展示方向不生效？

`Step`组件有三种类型（shape） `shape?: 'arrow' | 'circle' | 'dot';`, 其中：

-   `shape='arrow'` 只有一种模式；
-   `shape='circle'` 有两种方向；
    -   `direction='ver'` 垂直方向
    -   `direction='hoz'` 水平方向，根据文案与图标位置的不同分为两种模式
        -   `labelPlacement='hoz'` 文案与图标 左右布局
        -   `labelPlacement='ver'` 文案与图标 上下布局
-   `shape='dot'` 有两种方向；
    -   `direction='ver'` 垂直方向
    -   `direction='hoz'` 水平方向

如果发现 step 展示方向设置不生效，可先检查是否使用了正确的 API（比如`labelPlacement`就仅在`shape='circle'` `direction='hoz'`时才生效。
