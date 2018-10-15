# Loading

-   category: Components
-   family: Feedback
-   chinese: 加载
-   type: 基本

---

## 开发指南

### 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

### 注意事项

Loading 默认使用 `display='inline-block'` 布局的方式包裹内部元素。

如果希望 `通栏包裹` 可以修改 `<Loading style={{display: 'block'}} />`

## API

### Loading

| 参数         | 说明                                                               | 类型      | 默认值      |
| ---------- | ---------------------------------------------------------------- | ------- | -------- |
| tip        | 自定义内容                                                            | any     | -        |
| size       | 设置动画尺寸<br><br>**可选值**:<br>'large'(大号)<br>'medium'(中号)            | Enum    | 'large'  |
| tipAlign   | 自定义内容位置<br><br>**可选值**:<br>'right'(出现在动画右边)<br>'bottom'(出现在动画下面) | Enum    | 'bottom' |
| visible    | loading 状态, 默认 true                                              | Boolean | true     |
| indicator  | 自定义动画                                                            | any     | -        |
| color      | 动画颜色                                                             | String  | -        |
| fullScreen | 全屏展示                                                             | Boolean | -        |
| children   | 子元素                                                              | any     | -        |
