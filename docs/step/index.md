# Step

-   category: Components
-   family: Navigation
-   chinese: 步骤
-   type: 展示

---

## API

### Step

| 参数             | 说明                                                                                                                                                                                  | 类型       | 默认值      |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| current        | 当前步骤                                                                                                                                                                                | Number   | 0        |
| shape          | 类型<br><br>**可选值**:<br>'circle', 'arrow', 'dot'                                                                                                                                      | Enum     | 'circle' |
| direction      | 展示方向<br><br>**可选值**:<br>'hoz', 'ver'                                                                                                                                                | Enum     | 'hoz'    |
| labelPlacement | 横向布局时的内容排列<br><br>**可选值**:<br>'hoz', 'ver'                                                                                                                                          | Enum     | 'ver'    |
| readOnly       | 是否只读模式                                                                                                                                                                              | Boolean  | -        |
| animation      | 是否开启动效                                                                                                                                                                              | Boolean  | true     |
| itemRender     | StepItem 的自定义渲染<br><br>**签名**:<br>Function(index: Number, status: String) => Node<br>**参数**:<br>_index_: {Number} 节点索引<br>_status_: {String} 节点状态<br>**返回值**:<br>{Node} 节点的渲染结果<br> | Function | null     |

### Step.Item

| 参数         | 说明                                                                                                                                                                                                       | 类型        | 默认值       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| status     | 步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`<br><br>**可选值**:<br>'wait', 'process', 'finish'                                                                                     | Enum      | -         |
| title      | 标题                                                                                                                                                                                                       | ReactNode | -         |
| icon       | 图标                                                                                                                                                                                                       | String    | -         |
| content    | 内容，用于垂直状态下的内容填充                                                                                                                                                                                          | ReactNode | -         |
| itemRender | StepItem 的自定义渲染, 会覆盖父节点设置的itemRender<br><br>**签名**:<br>Function(index: Number, status: String) => Node<br>**参数**:<br>_index_: {Number} 节点索引<br>_status_: {String} 节点状态<br>**返回值**:<br>{Node} 节点的渲染结果<br> | Function  | -         |
| percent    | 百分比                                                                                                                                                                                                      | Number    | -         |
| disabled   | 是否禁用                                                                                                                                                                                                     | Boolean   | -         |
| onClick    | 点击步骤时的回调<br><br>**签名**:<br>Function(index: Number) => void<br>**参数**:<br>_index_: {Number} 节点索引                                                                                                          | Function  | () => { } |
## ARIA and KeyBoard

| 按键          | 说明                              |
| :---------- | :------------------------------ |
| Right Arrow | 导航到下一个step |
| Left Arrow  | 导航到上一个step   |
