# Switch

-   category: Components
-   family: DataEntry
-   chinese: 开关组件
-   type: 表单

---

开关组件

## 何时使用

开/关切换器切换单个设置选项的状态。开关控制器中的选项，以及它所在的状态，应该用伴随的内联标签显示清楚。开关选择器具有和单选按钮一样的视觉属性。使用文本“开”和“关”滑动切换已经过时了。使用这里显示的开关选择器代替。

## 如何使用

对于 checkChildren 和 unCheckedChildren 的自定义要考虑文字大小，因为 switch 的宽度有限，默认一个汉字大小。如果设置成多个字或者英文要注意宽度控制。

## FAQ

1.23 版本增加了 `autoWidth` API，我们推荐用户默认开启，同时在 2.0 里也会默认设置为 true。开启后，原 `<Switch style={{display: 'block'}}>` 写法的用户可能会出现样式异常。

## API

### Switch

| 参数              | 说明                                                                                                                                                     | 类型                                                                                                                      | 默认值   | 是否必填 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| defaultChecked    | 开关是否打开默认值 (非受控)                                                                                                                              | boolean                                                                                                                   | false    |          |
| checked           | 开关是否打开（受控）                                                                                                                                     | boolean                                                                                                                   | -        |          |
| onChange          | 开关状态改变时事件<br/><br/>**签名**:<br/>**参数**:<br/>_checked_: 是否打开                                                                              | (<br/> checked: boolean,<br/> e: React.MouseEvent\<HTMLDivElement> \| React.KeyboardEvent\<HTMLDivElement><br/> ) => void | -        |          |
| size              | switch 的尺寸                                                                                                                                            | 'medium' \| 'small'                                                                                                       | 'medium' |          |
| loading           | 加载状态                                                                                                                                                 | boolean                                                                                                                   | false    |          |
| disabled          | 表示开关被禁用                                                                                                                                           | boolean                                                                                                                   | false    |          |
| autoWidth         | 宽度根据内容自适应                                                                                                                                       | boolean                                                                                                                   | false    |          |
| isPreview         | 是否预览模式                                                                                                                                             | boolean                                                                                                                   | false    |          |
| renderPreview     | 自定义预览态模式下渲染的内容<br/><br/>**签名**:<br/>**参数**:<br/>_checked_: 是否打开<br/>_props_: 组件参数对象<br/>**返回值**:<br/>预览模式下的渲染内容 | (checked: boolean, props: SwitchProps) => React.ReactNode                                                                 | -        |          |
| checkedChildren   | 打开时的内容                                                                                                                                             | React.ReactNode                                                                                                           | -        |          |
| unCheckedChildren | 关闭时的内容                                                                                                                                             | React.ReactNode                                                                                                           | -        |          |
| onClick           | 鼠标点击事件                                                                                                                                             | (e: React.MouseEvent\<HTMLDivElement> \| React.KeyboardEvent\<HTMLDivElement>) => void                                    | -        |          |
| onKeyDown         | 键盘按键事件                                                                                                                                             | (e: React.KeyboardEvent\<HTMLDivElement>) => void                                                                         | -        |          |

## 无障碍键盘操作指南

| 按键  | 说明         |
| :---- | :----------- |
| Enter | 切换选中状态 |
| SPACE | 切换选中状态 |
