# Rating

-   category: Components
-   family: DataEntry
-   chinese: 评分
-   type: 基本

---

## Guide

评分组件通常用于用户反馈场景。

## API

### Rating

| 参数            | 说明                                                                                                    | 类型       | 默认值        |
| ------------- | ----------------------------------------------------------------------------------------------------- | -------- | ---------- |
| defaultValue  | 默认值                                                                                                   | Number   | 0          |
| size          | 尺寸<br><br>**可选值**:<br>'small', 'medium', 'large'                                                      | Enum     | 'medium'   |
| value         | 值                                                                                                     | Number   | -          |
| count         | 评分的总数                                                                                                 | Number   | 5          |
| showGrade     | 是否显示 grade                                                                                            | Boolean  | false      |
| allowHalf     | 是否允许半星评分                                                                                              | Boolean  | false      |
| onChange      | 用户点击评分时触发的回调<br><br>**签名**:<br>Function(value: String) => void<br>**参数**:<br>_value_: {String} 评分值    | Function | func.noop  |
| onHoverChange | 用户hover评分时触发的回调<br><br>**签名**:<br>Function(value: String) => void<br>**参数**:<br>_value_: {String} 评分值 | Function | func.noop  |
| disabled      | 是否禁用                                                                                                  | Boolean  | false      |
| readAs        | 传入id支持无障碍时，参数才有意义<br><br>**签名**:<br>Function() => void                                                | Function | val => val |
