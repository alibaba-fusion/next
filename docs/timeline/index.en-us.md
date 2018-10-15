# Timeline

-   category: Components
-   family: DataDisplay
-   chinese: 时间轴
-   type: display

---

## Guide

Vertical display of time flow information.

### When to use

- When there is a series of information that needs to be ordered from top to bottom.
- There is a need to carry out a series of visual timeline time.

## API

### Timeline

| Parameters   | Description                                                                  | Type    | Default value |
| ---- | ------------------------------------------------------------------- | ----- | --- |
| fold | custom folding options, eg: `[{foldArea: [startIndex, endIndex], foldShow: boolean}]` | Array | \[] |

### Timeline.Item

| Parameters        | Description                                                            | Type        | Default value    |
| --------- | ------------------------------------------------------------- | --------- | ------ |
| state     | node state <br><br>**optional**:<br>'done', 'process', 'error', 'success' | Enum      | 'done' |
| icon      | icon                                                            | String    | -      |
| dot       | custom timeline node                                                      | ReactNode | -      |
| time      | formatted time                                                       | ReactNode | -      |
| title     | title                                                            | ReactNode | -      |
| timeLeft  |the time of timeline left                                                          | ReactNode | -      |
| content   | the content of timeline right                                                          | ReactNode | -      |
| animation | animation                                                            | Boolean   | true   |
