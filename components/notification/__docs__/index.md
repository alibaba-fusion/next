# Notification

-   category: Components
-   family: Feedback
-   chinese: 通知
-   type: 展示
-   version: 1.18

---

全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

-   较为复杂的通知内容。
-   带有交互的通知，给出用户下一步的行动点。
-   系统主动推送。

## API

### Notification

| 参数    | 说明 | 类型                                               | 默认值 | 是否必填 |
| ------- | ---- | -------------------------------------------------- | ------ | -------- |
| config  | -    | (config: NotificationConfig) => NotificationConfig | -      | 是       |
| open    | -    | (options: NotificationOptions) => string           | -      | 是       |
| close   | -    | (key: string) => void                              | -      | 是       |
| destroy | -    | () => void                                         | -      | 是       |
| success | -    | (options: NotificationOptions) => string           | -      | 是       |
| error   | -    | (options: NotificationOptions) => string           | -      | 是       |
| warning | -    | (options: NotificationOptions) => string           | -      | 是       |
| notice  | -    | (options: NotificationOptions) => string           | -      | 是       |
| help    | -    | (options: NotificationOptions) => string           | -      | 是       |

### Notification.Config

| 参数         | 说明                               | 类型                                                     | 默认值                | 是否必填 |
| ------------ | ---------------------------------- | -------------------------------------------------------- | --------------------- | -------- |
| offset       | 对齐之后的偏移 [x, y]              | [number, number]                                         | [30, 30]              |          |
| maxCount     | 最多同时出现的个数, 默认不限制     | number                                                   | -                     |          |
| size         | 使用 `Message` 组件的              | 'large' \| 'medium'                                      | large                 |          |
| duration     | 默认自动关闭延时，单位毫秒         | number                                                   | 4500                  |          |
| getContainer | 配置渲染节点的输出位置             | () => HTMLElement                                        | `() => document.body` |          |
| placement    | 弹出位置，可选 `tl` `tr` `bl` `br` | 'topRight' \| 'topLeft' \| 'bottomLeft' \| 'bottomRight' | topRight              |          |

### NotificationOptions

| 参数      | 说明                                                                                                                                                | 类型              | 默认值      | 是否必填   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------- | ---------- | ------ | ------------------------------------------------------- | --------- | --- |
| key       | 当前通知唯一标志, 默认会自动生成                                                                                                                    | string            | -           |            |
| type      | 通知类型，`Notification.open`可选参数，可选值：`success`\\                                                                                          | `error`\\         | `warning`\\ | `notice`\\ | `help` | 'success' \| 'error' \| 'warning' \| 'notice' \| 'help' | `success` |     |
| title     | 通知提醒标题                                                                                                                                        | ReactNode         | -           |            |
| content   | 通知提醒内容                                                                                                                                        | ReactNode         | -           |            |
| icon      | 自定义图标                                                                                                                                          | string            | -           |            |
| duration  | 默认 4.5 秒后自动关闭，配置为 0 则不自动关闭（单位毫秒）                                                                                            | number            | 4500        |            |
| style     | 自定义内联样式 [详见](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | CSSProperties     | -           |            |
| className | 自定义 CSS class                                                                                                                                    | string            | -           |            |
| onClose   | 点击默认关闭按钮时触发的回调函数                                                                                                                    | () => void        | -           |            |
| onClick   | 点击通知时触发的回调函数                                                                                                                            | MouseEventHandler | -           |            |
