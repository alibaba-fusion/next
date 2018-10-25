# Step

-   category: Components
-   family: Navigation
-   chinese: 步骤
-   type: display

---

## API

### Step

| Param | Descripiton  | Type  | Default Value |
| -------------- | ------------------------------------------------------ | -------- | ------------ |
| current        | current step                                           | Number   | 0            |
| shape          | shape<br><br>**optional**:<br>'circle', 'arrow', 'dot'         | Enum     | 'circle'     |
| direction      | dispaly direction<br><br>**optional**:<br>'horizontal', 'vertical'       | Enum     | 'horizontal' |
| labelPlacement | Content arrangement in horizontal layout<br><br>**optional**:<br>'horizontal', 'vertical' | Enum     | 'vertical'   |
| readOnly       | enable read-only mode                                                 | Boolean  | -            |
| animation      | enable animation                              | Boolean  | true         |
| itemRender     | custom node render function <br><br>**Function signature**:<br>Function(index: Number, status: String) => Node        | Function | -        |

### Step.Item


| Param | Descripiton  | Type  | Default Value |
| -------------- | ------------------------------------------------------ | -------- | ------------ |
| status         |The status of a step, if not passed, is generated based on the current attribute of the outer Step, with optional values `wait`, `process`, `finish`<br><br>**optional**:<br>'wait', 'process', 'finish'  | Enum      | -         |
| title          | title                                         | ReactNode | -         |
| percent        | percent                                         | Number | -         |
| icon           | icon         | String    | -         |
| content        | Content for vertical content filling | ReactNode | -         |
| disabled       | disable step node  | Boolean   | -         |
| itemRender     | custom node render function (it will overwirde Step's itemRender)<br>**Function signature**:<br>Function(index: Number, status: String) => Node        | Function | -         |
| onClick        | the callback when click to step node <br><br>**Function signature**:<br>Function(index: Number) => void<br>**Parameters**:<br>_index_: {Number} node index | Function  | () => { } |
