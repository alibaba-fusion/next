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

Step

| 参数           | 说明                                                                                                                                                                                                         | 类型                                                                        | 默认值   | 是否必填 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | -------- | -------- |
| current        | 当前步骤                                                                                                                                                                                                     | number                                                                      | 0        |          |
| direction      | 展示方向                                                                                                                                                                                                     | 'hoz' \| 'ver' \| string                                                    | 'ver'    |          |
| stretch        | 宽度是否横向拉伸                                                                                                                                                                                             | boolean                                                                     | -        |          |
| labelPlacement | 横向布局时( direction 为 hoz )的内容排列                                                                                                                                                                     | 'hoz' \| 'ver' \| string                                                    | 'ver'    |          |
| shape          | 类型                                                                                                                                                                                                         | 'circle' \| 'arrow' \| 'dot'                                                | 'circle' |          |
| readOnly       | 是否只读模式                                                                                                                                                                                                 | boolean                                                                     | -        |          |
| animation      | 是否开启动效                                                                                                                                                                                                 | boolean                                                                     | -        |          |
| className      | 自定义样式名                                                                                                                                                                                                 | string                                                                      | -        |          |
| itemRender     | StepItem 的自定义渲染<br/><br/>**签名**:<br/>**参数**:<br/>_arg1_: 参数1 index: Number 节点索引<br/>_arg1_: 参数1 status: 'wait' \| 'process' \| 'finish' 节点状态<br/>**返回值**:<br/>: Node 节点的渲染结果 | (index: number, status: 'wait' \| 'process' \| 'finish') => React.ReactNode | -        |          |

### Item

Step.Item

| 参数       | 说明                                                                                                                                                                                        | 类型                                                                                                                                                                  | 默认值      | 是否必填 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------- |
| status     | 步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`                                                                                             | 'wait' \| 'process' \| 'finish'                                                                                                                                       | -           |          |
| title      | 标题                                                                                                                                                                                        | React.ReactNode                                                                                                                                                       | -           |          |
| icon       | 图标                                                                                                                                                                                        | string                                                                                                                                                                | -           |          |
| content    | 内容填充, shape为 arrow 时无效                                                                                                                                                              | React.ReactNode                                                                                                                                                       | -           |          |
| itemRender | StepItem 的自定义渲染, 会覆盖父节点设置的itemRender<br/><br/>**签名**:<br/>**参数**:<br/>_index_: \{Number\} 节点索引<br/>_status_: \{String\} 节点状态<br/>**返回值**:<br/>React.ReactNode | (<br/> index: number,<br/> status?: 'wait' \| 'process' \| 'finish' \| string,<br/> title?: React.ReactNode,<br/> content?: React.ReactNode<br/> ) => React.ReactNode | -           |          |
| percent    | 百分比                                                                                                                                                                                      | number                                                                                                                                                                | -           |          |
| disabled   | 是否禁用                                                                                                                                                                                    | boolean                                                                                                                                                               | -           |          |
| onClick    | 点击步骤时的回调<br/>access onClick?: (index: number) =\> unknown;<br/><br/>**签名**:<br/>**参数**:<br/>_index_: 节点索引<br/>**返回值**:<br/>unknown                                       | (index: number) => unknown                                                                                                                                            | () =\> \{\} |          |
| className  | 自定义样式                                                                                                                                                                                  | string                                                                                                                                                                | -           |          |

## FAQ

### 为什么设置 Step 的展示方向不生效？

`Step`组件有三种类型（shape） `shape?: 'arrow' | 'circle' | 'dot';`, 其中:

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
