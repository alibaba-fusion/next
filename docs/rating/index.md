# Rating

-   category: Components
-   family: DataEntry
-   chinese: 评分
-   type: 基本

---

评分组件通常用于用户反馈场景。

## API

### Rating

| 参数            | 说明                                                                                                         | 类型       | 默认值        |
| ------------- | ---------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| defaultValue  | 默认值                                                                                                        | Number   | 0          |
| size          | 尺寸<br/><br/>**可选值**:<br/>'small', 'medium', 'large'                                                        | Enum     | 'medium'   |
| value         | 值                                                                                                          | Number   | -          |
| count         | 评分的总数                                                                                                      | Number   | 5          |
| showGrade     | 是否显示 grade                                                                                                 | Boolean  | false      |
| allowHalf     | 是否允许半星评分                                                                                                   | Boolean  | false      |
| allowClear    | 是否允许再次点击后清除                                                                                                | Boolean  | false       |
| onChange      | 用户点击评分时触发的回调<br/><br/>**签名**:<br/>Function(value: Number) => void<br/>**参数**:<br/>_value_: {Number} 评分值    | Function | func.noop  |
| onHoverChange | 用户hover评分时触发的回调<br/><br/>**签名**:<br/>Function(value: Number) => void<br/>**参数**:<br/>_value_: {Number} 评分值 | Function | func.noop  |
| disabled      | 是否禁用                                                                                                       | Boolean  | false      |
| readAs        | 评分文案生成方法，传入id支持无障碍时，读屏软件可读<br/><br/>**签名**:<br/>Function() => void                                         | Function | val => val |
| isPreview     | 是否为预览态                                                                                                     | Boolean  | false      |
| renderPreview | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>Function(value: number) => void<br/>**参数**:<br/>_value_: {number} 评分值     | Function | -          |
| readOnly      | 是否为只读态，效果上同 disabeld                                                                                       | Boolean  | false      |

## 无障碍键盘操作指南

| 按键          | 说明     |
| :---------- | :----- |
| Up Arrow    | 增加星级评分 |
| Down Arrow  | 减少星级评分 |
| Right Arrow | 增加星级评分 |
| Left Arrow  | 减少星级评分 |
