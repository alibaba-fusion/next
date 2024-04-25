# Progress

-   category: Components
-   family: DataDisplay
-   chinese: 进度指示器
-   type: 展示

---

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

-   操作在后台运行，需要耗费一定的客户端等待时间。
-   操作需要展示一个完成进度的百分比。

## API

### Progress

| 参数            | 说明                                                                                                                              | 类型                                                           | 默认值                                    | 是否必填 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------- | -------- |
| shape           | 形态                                                                                                                              | 'circle' \| 'line'                                             | 'line'                                    |          |
| size            | 尺寸                                                                                                                              | 'small' \| 'medium' \| 'large'                                 | 'medium'                                  |          |
| percent         | 所占百分比                                                                                                                        | number                                                         | 0                                         |          |
| state           | 进度状态, 显示优先级: color \> progressive \> state                                                                               | 'normal' \| 'success' \| 'error'                               | 'normal'                                  |          |
| progressive     | 是否为色彩阶段变化模式, 显示优先级: color \> progressive \> state                                                                 | boolean                                                        | false                                     |          |
| hasBorder       | 是否添加 Border（只适用于 Line Progress)                                                                                          | boolean                                                        | false                                     |          |
| textRender      | 文本渲染函数<br/><br/>**签名**:<br/>**参数**:<br/>_percent_: 当前的进度信息<br/>_option_: 额外的参数<br/>**返回值**:<br/>文本节点 | (percent: number, option?: {rtl?: boolean}) => React.ReactNode | percent =\> \`$\{Math.floor(percent)\}%\` |          |
| color           | 进度条颜色, 显示优先级: color \> progressive \> state                                                                             | string                                                         | -                                         |          |
| backgroundColor | 背景色                                                                                                                            | string                                                         | -                                         |          |
