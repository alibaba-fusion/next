# Progress

-   category: Components
-   family: DataDisplay
-   chinese: 进度指示器
-   type: Display

---

## Guide

Progress used to show the progress of a task.

### When to Use

If a task will take long time to complete, it could be use a `Progress` to show the progress. Such as:

- For a background operation with long time
- For a operation need to show its percentage

## API

### Progress

| Param | Descripiton  | Type  | Default Value |
| ----------- |---------- | -------- | ----------- |
| size        | Size <br><br>**option**:<br>'small', 'medium', 'large'                                                                                                | Enum     | 'medium'                 |
| shape       | Shape <br><br>**option**:<br>'circle', 'line'                                                                                                          | Enum     | 'line'                   |
| percent     | Current percente of progress | Number   | 0                        |
| state       | State of progress <br><br>**option**:<br>'normal', 'success', 'error'   | Enum     | 'normal'                 |
| progressive | Progressive mode (with dynamic color) | Boolean  | false                    |
| hasBorder   | Has border for progress line  | Boolean  | false                    |
| textRender  | Text render<br><br>**签名**:<br>Function(percent: Number, option: Object) => ReactNode<br>**parameter**:<br>_percent_: {Number} current percent<br>_option_: {Object} option<br>**返回值**:<br>{ReactNode} text node<br> | Function | percent => `${Math.floor(percent)}%` |
