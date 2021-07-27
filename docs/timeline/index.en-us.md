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

| Param | Descripiton  | Type  | Default Value |
| ---- | ------------------------------------------------------------------- | ----- | --- |
| fold | custom folding options, eg: `[{foldArea: [startIndex, endIndex], foldShow: boolean}]` | Array | \[] |
| mode | mode show, eg: `left`.optional `left`, `alternate`                                    | String | 'left'   |

### Timeline.Item

| Param | Descripiton  | Type  | Default Value |
| --------- | ------------------------------------------------------------- | --------- | ------ |
| state     | node state <br><br>**optional**:<br>'done', 'process', 'error', 'success' | Enum      | 'done' |
| icon      | icon                                                            | String    | -      |
| dot       | custom timeline node                                                      | ReactNode | -      |
| time      | formatted time                                                       | ReactNode | -      |
| title     | title                                                            | ReactNode | -      |
| timeLeft  |the time of timeline left                                                          | ReactNode | -      |
| content   | the content of timeline right                                                          | ReactNode | -      |
| animation | animation                                                            | Boolean   | true   |
