# Timeline

-   category: Components
-   family: DataDisplay
-   chinese: 时间轴
-   type: 展示

---

垂直展示的时间流信息。

## 何时使用

-   当有一系列信息需要从上至下按时间排列时。
-   需要有一条时间轴进行视觉上的串联时。

## API

### Timeline

| 参数      | 说明                                        | 类型                  | 默认值 | 是否必填 | 支持版本 |
| --------- | ------------------------------------------- | --------------------- | ------ | -------- | -------- |
| fold      | 自定义折叠选项                              | Array\<FoldItem>      | -      |          | -        |
| className | 自定义类名                                  | string                | -      |          | -        |
| animation | 展示动画                                    | boolean               | true   |          | -        |
| mode      | 展示的模式，left 为左，alternate 为交替显示 | 'left' \| 'alternate' | 'left' |          | 1.23.18  |

### Timeline.Item

| 参数      | 说明                                        | 类型                                        | 默认值 | 是否必填 | 支持版本 |
| --------- | ------------------------------------------- | ------------------------------------------- | ------ | -------- | -------- |
| state     | 节点状态                                    | 'done' \| 'process' \| 'error' \| 'success' | 'done' |          | -        |
| icon      | 图标                                        | string                                      | -      |          | -        |
| dot       | 自定义时间轴节点                            | React.ReactNode                             | -      |          | -        |
| time      | 格式化后的时间                              | React.ReactNode                             | -      |          | -        |
| title     | 标题                                        | React.ReactNode                             | -      |          | -        |
| timeLeft  | 左侧时间                                    | React.ReactNode                             | -      |          | -        |
| content   | 右侧内容                                    | React.ReactNode                             | -      |          | -        |
| animation | 展示动画                                    | boolean                                     | true   |          | -        |
| mode      | 展示的模式，left 为左，alternate 为交替显示 | 'left' \| 'alternate'                       | 'left' |          | 1.23.18  |
