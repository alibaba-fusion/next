# Tag

-   category: Components
-   family: DataDisplay
-   chinese: 标签
-   type: 展示

---

## Guide

标签用于标记事物的属性和维度，或者可以使用标签来对一组事物分类。

### 何时使用

-   用于标记事物的属性和维度。
-   进行分类。

### 使用注意点

1.  虽然可以设置 `size` 属性取值 `large`，但该值只是为了兼容表单场景，实际取值时 `large` 等同于 `medium`。
2.  不建议在 Tag 中使用大段文本。

## API

### Tag

| 参数          | 说明                                                                                  | 类型       | 默认值       |
| ----------- | ----------------------------------------------------------------------------------- | -------- | --------- |
| size        | 标签的尺寸（large 尺寸为兼容表单场景 large = medium）<br><br>**可选值**:<br>'small', 'medium', 'large' | Enum     | 'medium'  |
| type        | 标签的类型<br><br>**可选值**:<br>'normal', 'primary'                                        | Enum     | 'normal'  |
| animation   | 是否开启动效                                                                              | Boolean  | false     |
| afterAppear | 标签出现动画结束后执行的回调<br><br>**签名**:<br>Function() => void                                 | Function | func.noop |
| onClick     | 点击回调<br><br>**签名**:<br>Function() => void                                           | Function | func.noop |

### Tag.Closeable

| 参数         | 说明                                                                                                                                                                           | 类型       | 默认值 |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --- |
| closeArea  | closeable 标签的 onClose 响应区域, tag: 标签体, tail(默认): 关闭按钮<br><br>**可选值**:<br>'tag', 'tail'                                                                                        | Enum     | -   |
| size       | 标签的尺寸（large 尺寸为兼容表单场景 large = medium）<br><br>**可选值**:<br>'small', 'medium', 'large'                                                                                          | Enum     | -   |
| onClose    | 点击关闭按钮时的回调<br><br>**签名**:<br>Function(from: String) => Boolean<br>**参数**:<br>_from_: {String} 事件来源, tag: 标签体点击, tail: 关闭按钮点击<br>**返回值**:<br>{Boolean} true则关闭, false阻止关闭<br> | Function | -   |
| afterClose | 标签关闭后执行的回调<br><br>**签名**:<br>Function() => void                                                                                                                              | Function | -   |
| onClick    | 点击回调<br><br>**签名**:<br>Function() => void                                                                                                                                    | Function | -   |

### Tag.Selectable

| 参数             | 说明                                                                                                                                           | 类型       | 默认值       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| checked        | 标签是否被选中，受控用法<br>tag checked or not, a controlled way                                                                                         | Boolean  | -         |
| defaultChecked | 标签是否默认被选中，非受控用法<br>tag checked or not by default, a uncontrolled way                                                                         | Boolean  | -         |
| onChange       | 选中状态变化时触发的事件<br><br>**签名**:<br>Function(checked: Boolean, e: Event) => void<br>**参数**:<br>_checked_: {Boolean} 是否选中<br>_e_: {Event} Dom 事件对象 | Function | func.noop |
| disabled       | 标签是否被禁用                                                                                                                                      | Boolean  | -         |

## ARIA and KeyBoard

| 按键    | 说明           |
| :---- | :----------- |
| SPACE | 选择,取消或删除当前标签 |
