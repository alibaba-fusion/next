# Rating

-   category: Components
-   family: DataEntry
-   chinese: 评分
-   type: 基本

---

评分组件通常用于用户反馈场景。

## API

### Rating

| 参数          | 说明                                                                                                                                                                               | 类型                                                   | 默认值   | 是否必填 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | -------- | -------- |
| defaultValue  | 默认值                                                                                                                                                                             | number                                                 | -        |          |
| value         | 值（受控模式）                                                                                                                                                                     | number                                                 | -        |          |
| size          | 尺寸                                                                                                                                                                               | 'small' \| 'medium' \| 'large'                         | 'medium' |          |
| count         | 评分的总数                                                                                                                                                                         | number                                                 | 5        |          |
| showGrade     | 是否显示 grade                                                                                                                                                                     | boolean                                                | false    |          |
| allowHalf     | 是否允许半星评分                                                                                                                                                                   | boolean                                                | -        |          |
| allowClear    | 是否允许再次点击后清除                                                                                                                                                             | boolean                                                | false    |          |
| onChange      | 用户点击评分时触发的回调                                                                                                                                                           | (value: number) => void                                | -        |          |
| onHoverChange | 用户 hover 评分时触发的回调                                                                                                                                                        | (value?: number) => void                               | -        |          |
| disabled      | 是否禁用                                                                                                                                                                           | boolean                                                | false    |          |
| isPreview     | 是否为预览态                                                                                                                                                                       | boolean                                                | false    |          |
| renderPreview | 预览态模式下渲染的内容（isPreview 时必传，否则预览不生效）<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 评分值<br/>_props_: 组件参数对象<br/>**返回值**:<br/>预览模式下的渲染内容 | (value: number, props: RatingProps) => React.ReactNode | -        |          |
| readAs        | 评分文案生成方法，传入 id 支持无障碍时，读屏软件可读<br/><br/>**签名**:<br/>**参数**:<br/>_val_: 当前分值<br/>**返回值**:<br/>该分值的渲染文案                                     | (val: number) => React.ReactNode                       | -        |          |
| type          | -                                                                                                                                                                                  | string                                                 | -        |          |

## 无障碍键盘操作指南

| 按键        | 说明         |
| :---------- | :----------- |
| Up Arrow    | 增加星级评分 |
| Down Arrow  | 减少星级评分 |
| Right Arrow | 增加星级评分 |
| Left Arrow  | 减少星级评分 |
