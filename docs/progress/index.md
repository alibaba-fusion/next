# Progress

-   category: Components
-   family: DataDisplay
-   chinese: 进度指示器
-   type: 展示

---

## Guide

展示操作的当前进度。

### 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

-   操作在后台运行，需要耗费一定的客户端等待时间。
-   操作需要展示一个完成进度的百分比。

## API

### Progress

| 参数          | 说明                                                                                                                                              | 类型       | 默认值                                  |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------ |
| size        | 尺寸<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                                | Enum     | 'medium'                             |
| shape       | 形态<br><br>**可选值**:<br>'circle', 'line'                                                                                                          | Enum     | 'line'                               |
| percent     | 所占百分比                                                                                                                                           | Number   | 0                                    |
| state       | 进度状态, 显示优先级: color > progressive > state<br><br>**可选值**:<br>'normal', 'success', 'error'                                                        | Enum     | 'normal'                             |
| progressive | 是否为色彩阶段变化模式, 显示优先级: color > progressive > state                                                                                                 | Boolean  | false                                |
| hasBorder   | 是否添加 Border（只适用于 Line Progress)                                                                                                                 | Boolean  | false                                |
| textRender  | 文本渲染函数<br><br>**签名**:<br>Function(percent: Number) => ReactNode<br>**参数**:<br>_percent_: {Number} 当前的进度信息<br>**返回值**:<br>{ReactNode} 返回文本节点<br> | Function | percent => `${Math.floor(percent)}%` |
| color       | 进度条颜色, 显示优先级: color > progressive > state                                                                                                       | String   | ''                                   |
