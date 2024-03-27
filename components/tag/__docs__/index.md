# Tag

-   category: Components
-   family: DataDisplay
-   chinese: 标签
-   type: 展示

---

标签用于标记事物的属性和维度，或者可以使用标签来对一组事物分类。

## 何时使用

-   用于标记事物的属性和维度。
-   进行分类。

## 如何使用

1.  虽然可以设置 `size` 属性取值 `large`，但该值只是为了兼容表单场景，实际取值时 `large` 等同于 `medium`。
2.  不建议在 Tag 中使用大段文本。

## API

### Tag

| 参数        | 说明                                                                          | 类型                                                                                                   | 默认值   | 是否必填 | 支持版本 |
| ----------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------- | -------- | -------- |
| type        | 标签的类型                                                                    | 'normal' \| 'primary'                                                                                  | 'normal' |          | -        |
| size        | 标签的尺寸                                                                    | 'small' \| 'medium' \| 'large'                                                                         | -        |          | -        |
| color       | 标签颜色，目前支持：blue、green、orange、red、turquoise、yellow 和 hex 颜色值 | string                                                                                                 | -        |          | 1.19.0   |
| animation   | 是否开启动效                                                                  | boolean                                                                                                | false    |          | -        |
| afterAppear | 标签出现动画结束后执行的回调                                                  | (node: HTMLElement) => void                                                                            | -        |          | -        |
| onClick     | 点击回调                                                                      | (<br/> event: React.MouseEvent\<HTMLDivElement> \| React.KeyboardEvent\<HTMLDivElement><br/> ) => void | -        |          | -        |

### Tag.Closeable

继承 Tag 的所有属性

| 参数       | 说明                                                                                                                       | 类型                                                     | 默认值 | 是否必填 |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------ | -------- |
| closeArea  | closeable 标签的 onClose 响应区域                                                                                          | CloseArea                                                | 'tail' |          |
| onClose    | 点击关闭按钮时的回调<br/><br/>**签名**:<br/>**参数**:<br/>_from_: 事件来源<br/>**返回值**:<br/>true 则关闭，false 阻止关闭 | (from: CloseArea, node?: HTMLElement \| null) => boolean | -      |          |
| afterClose | 标签关闭后执行的回调                                                                                                       | (node: HTMLElement \| null) => void                      | -      |          |

### Tag.Selectable

继承 Tag 的所有属性

| 参数           | 说明                             | 类型                                                                                                                      | 默认值 | 是否必填 |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------ | -------- |
| checked        | 标签是否被选中，受控用法         | boolean                                                                                                                   | -      |          |
| defaultChecked | 标签是否默认被选中，非受控用法。 | boolean                                                                                                                   | -      |          |
| onChange       | 选中状态变化时触发的事件         | (<br/> checked: boolean,<br/> e: React.MouseEvent\<HTMLDivElement> \| React.KeyboardEvent\<HTMLDivElement><br/> ) => void | -      |          |

### CloseArea

示例：

-   tag: 标签体
-   tail: 关闭按钮

```typescript
export type CloseArea = 'tag' | 'tail';
```

## 无障碍键盘操作指南

| 按键  | 说明                     |
| :---- | :----------------------- |
| SPACE | 选择，取消或删除当前标签 |
