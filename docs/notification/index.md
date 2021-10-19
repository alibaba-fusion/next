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

* 较为复杂的通知内容。
* 带有交互的通知，给出用户下一步的行动点。
* 系统主动推送。

## API


- `Notification.success(config)`
- `Notification.error(config)`
- `Notification.warning(config)`
- `Notification.notice(config)`
- `Notification.help(config)`
- `Notification.open(config)`
- `Notification.close(key: String)`
- `Notification.destroy()`

config 参数如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| key | 当前通知唯一标志, 默认会自动生成 | String | - |  |
| title | 通知提醒标题，必选 | String\|ReactNode | - |  |
| type | 通知类型，`Notification.open`可选参数，可选值：`success`\|`error`\|`warning`\|`notice`\|`help` | String | `success` |  |
| content | 通知提醒内容，必选 | String\|ReactNode | - |  |
| duration | 默认 4.5 秒后自动关闭，配置为 0 则不自动关闭 | Number | 4.5 |  |
| icon | 自定义图标 | ReactNode | - |  |
| style | 自定义内联样式 | [React.CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | - |  |
| className | 自定义 CSS class | String | - |  |
| onClose | 点击默认关闭按钮时触发的回调函数 | Function | - |  |
| onClick | 点击通知时触发的回调函数 | Function | - |  |

### 全局配置方法
提供全局配置方法，在调用前配置，全局一次生效。

- `Notification.config(options)`

```js
Notification.config({
  placement: 'bottomRight',
  duration: 3000,
});
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| duration | 默认自动关闭延时，单位秒 | Number | 4500 |  |
| maxCount | 最多同时出现的个数, 默认不限制 | Number | - |  |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |  |
| offset | 对齐之后的偏移 [x, y] | Array | [30, 30] |  |
| placement | 弹出位置，可选 `tl` `tr` `bl` `br` | String | topRight |  |
| size | 使用 `Message` 组件的 | String | large |  |
