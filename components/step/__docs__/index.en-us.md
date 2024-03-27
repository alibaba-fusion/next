# Step

-   category: Components
-   family: Navigation
-   chinese: 步骤
-   type: display

---

## API

### Step

| Param          | Description                                                                                                                                                                                                                                                                        | Type                                                                                                                      | Default Value | Required |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| current        | Current step                                                                                                                                                                                                                                                                       | number                                                                                                                    | 0             |          |
| shape          | Shape                                                                                                                                                                                                                                                                              | StepShape                                                                                                                 | 'circle'      |          |
| direction      | Direction                                                                                                                                                                                                                                                                          | StepDirection                                                                                                             | 'hoz'         |          |
| labelPlacement | Content arrangement in horizontal layout                                                                                                                                                                                                                                           | StepDirection                                                                                                             | 'ver'         |          |
| readOnly       | Read only mode                                                                                                                                                                                                                                                                     | boolean                                                                                                                   | -             |          |
| animation      | Enable animation                                                                                                                                                                                                                                                                   | boolean                                                                                                                   | true          |          |
| itemRender     | Custom node render function<br/><br/>**signature**:<br/>**params**:<br/>_index_: Node index<br/>_status_: Node status<br/>_title_: Node title（only for `shape='circle'`）<br/>_content_: Node content（only for `shape='circle'`）<br/>**return**:<br/>Render content of the node | (<br/> index: number,<br/> status: StepStatus,<br/> title?: ReactNode,<br/> content?: ReactNode<br/> ) => React.ReactNode | -             |          |
| stretch        | Stretch the width                                                                                                                                                                                                                                                                  | boolean                                                                                                                   | false         |          |

### Step.Item

| Param      | Description                                                                                                                                                                                                                                                                                                              | Type                                                                                                                                  | Default Value | Required |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| status     | The status of a step, if not passed, is generated based on the current attribute of the outer Step                                                                                                                                                                                                                       | StepStatus                                                                                                                            | -             |          |
| title      | Title                                                                                                                                                                                                                                                                                                                    | React.ReactNode                                                                                                                       | -             |          |
| icon       | Icon                                                                                                                                                                                                                                                                                                                     | string                                                                                                                                | -             |          |
| content    | Content for vertical content filling, invalid when shape is arrow                                                                                                                                                                                                                                                        | React.ReactNode                                                                                                                       | -             |          |
| itemRender | Custom node render function (it will overwirde Step's itemRender)<br/><br/>**signature**:<br/>**params**:<br/>_index_: Node index<br/>_status_: Node status<br/>_title_: Node title（only for `shape='circle'`）<br/>_content_: Node content（only for `shape='circle'`）<br/>**return**:<br/>Render content of the node | (<br/> index: number,<br/> status: StepStatus,<br/> title?: React.ReactNode,<br/> content?: React.ReactNode<br/> ) => React.ReactNode | -             |          |
| percent    | Percent                                                                                                                                                                                                                                                                                                                  | number                                                                                                                                | -             |          |
| disabled   | Disabled                                                                                                                                                                                                                                                                                                                 | boolean                                                                                                                               | -             |          |
| onClick    | Callback when clicking on the step<br/><br/>**signature**:<br/>**params**:<br/>_index_: Node index                                                                                                                                                                                                                       | (index: number) => unknown                                                                                                            | -             |          |

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
