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

-   For a background operation with long time
-   For a operation need to show its percentage

## API

### Progress

| Param           | Description                                                                                                                                       | Type                                                           | Default Value                             | Required |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------- | -------- |
| shape           | Shape                                                                                                                                             | 'circle' \| 'line'                                             | 'line'                                    |          |
| size            | Size                                                                                                                                              | 'small' \| 'medium' \| 'large'                                 | 'medium'                                  |          |
| percent         | Current percente of progress                                                                                                                      | number                                                         | 0                                         |          |
| state           | State of progress, priority: color \> progressive \> state                                                                                        | 'normal' \| 'success' \| 'error'                               | 'normal'                                  |          |
| progressive     | Progressive mode (with dynamic color), priority: color \> progressive \> state                                                                    | boolean                                                        | false                                     |          |
| hasBorder       | Has border for progress line                                                                                                                      | boolean                                                        | false                                     |          |
| textRender      | Text render<br/><br/>**signature**:<br/>**params**:<br/>_percent_: Current percent<br/>_option_: Additional options<br/>**return**:<br/>Text node | (percent: number, option?: {rtl?: boolean}) => React.ReactNode | percent =\> \`$\{Math.floor(percent)\}%\` |          |
| color           | Progressbar color, priority: color \> progressive \> state                                                                                        | string                                                         | -                                         |          |
| backgroundColor | Background color                                                                                                                                  | string                                                         | -                                         |          |
