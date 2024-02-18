# Step

-   category: Components
-   family: Navigation
-   chinese: 步骤
-   type: display

---

## API

### Step

| Param          | Description                                                                                           | Type                                                                        | Default Value | Required |
| -------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------- | -------- |
| current        | Current step                                                                                          | number                                                                      | 0             |          |
| shape          | Type                                                                                                  | 'circle' \| 'arrow' \| 'dot'                                                | 'circle'      |          |
| direction      | Direction                                                                                             | 'hoz' \| 'ver' \| string                                                    | 'ver'         |          |
| labelPlacement | Label placement                                                                                       | 'hoz' \| 'ver' \| string                                                    | 'ver'         |          |
| readOnly       | Read only mode                                                                                        | boolean                                                                     | -             |          |
| animation      | Enable animation                                                                                      | boolean                                                                     | true          |          |
| itemRender     | Custom node render function<br/><br/>**signature**:<br/>**params**:<br/>_arg1_: arg1<br/>_arg1_: arg1 | (index: number, status: 'wait' \| 'process' \| 'finish') => React.ReactNode | -             |          |
| stretch        | Stretch the width                                                                                     | boolean                                                                     | -             |          |

### Step.Item

| Param      | Description                                                                                                                                                   | Type                                                                                                                                                                  | Default Value | Required |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| status     | Status of the step, if not passed, it will be generated according to the current attribute of the outer Step, optional values are `wait`, `process`, `finish` | 'wait' \| 'process' \| 'finish'                                                                                                                                       | -             |          |
| title      | Title                                                                                                                                                         | React.ReactNode                                                                                                                                                       | -             |          |
| icon       | Icon                                                                                                                                                          | string                                                                                                                                                                | -             |          |
| content    | Content, invalid when shape is arrow                                                                                                                          | React.ReactNode                                                                                                                                                       | -             |          |
| itemRender | Custom node render function<br/><br/>**signature**:<br/>**params**:<br/>_index_: index<br/>_status_: status<br/>**return**:<br/>\{Node\} 节点的渲染结果       | (<br/> index: number,<br/> status?: 'wait' \| 'process' \| 'finish' \| string,<br/> title?: React.ReactNode,<br/> content?: React.ReactNode<br/> ) => React.ReactNode | -             |          |
| percent    | Percent                                                                                                                                                       | number                                                                                                                                                                | -             |          |
| disabled   | Disabled                                                                                                                                                      | boolean                                                                                                                                                               | -             |          |
| onClick    | Callback when clicking on the step<br/><br/>**signature**:<br/>**params**:<br/>_index_: index                                                                 | (index: number) => unknown                                                                                                                                            | () =\> \{\}   |          |
