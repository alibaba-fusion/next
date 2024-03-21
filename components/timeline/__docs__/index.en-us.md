# Timeline

-   category: Components
-   family: DataDisplay
-   chinese: 时间轴
-   type: display

---

## Guide

Vertical display of time flow information.

### When to use

-   When there is a series of information that needs to be ordered from top to bottom.
-   There is a need to carry out a series of visual timeline time.

## API

### Timeline

| Param     | Description            | Type                  | Default Value | Required | Supported Version |
| --------- | ---------------------- | --------------------- | ------------- | -------- | ----------------- |
| fold      | Custom folding options | Array\<FoldItem>      | -             |          | -                 |
| className | Custom className       | string                | -             |          | -                 |
| animation | Show animation         | boolean               | true          |          | -                 |
| mode      | Show mode              | 'left' \| 'alternate' | 'left'        |          | 1.23.18           |

### Timeline.Item

| Param     | Description    | Type                                        | Default Value | Required | Supported Version |
| --------- | -------------- | ------------------------------------------- | ------------- | -------- | ----------------- |
| state     | Node state     | 'done' \| 'process' \| 'error' \| 'success' | 'done'        |          | -                 |
| icon      | Icon           | string                                      | -             |          | -                 |
| dot       | Custom dot     | React.ReactNode                             | -             |          | -                 |
| time      | Formatted time | React.ReactNode                             | -             |          | -                 |
| title     | Title          | React.ReactNode                             | -             |          | -                 |
| timeLeft  | Left time      | React.ReactNode                             | -             |          | -                 |
| content   | Right content  | React.ReactNode                             | -             |          | -                 |
| animation | Show animation | boolean                                     | true          |          | -                 |
| mode      | Show mode      | 'left' \| 'alternate'                       | 'left'        |          | 1.23.18           |
