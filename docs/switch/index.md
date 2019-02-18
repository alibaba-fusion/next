# Switch

-   category: Components
-   family: DataEntry
-   chinese: 开关组件
-   type: 表单

---

## 开发指南

开关组件

### 何时使用

开/关切换器切换单个设置选项的状态。开关控制器中的选项，以及它所在的状态，应该用伴随的内联标签显示清楚。开关选择器具有和单选按钮一样的视觉属性。使用文本“开”和“关”滑动切换已经过时了。使用这里显示的开关选择器代替。

### 使用注意

-   对于checkChildren和unCheckedChildren的自定义要考虑文字大小，因为switch的宽度有限，默认一个汉字大小。如果设置成多个字或者英文要注意宽度控制。

## API

### Switch

| 参数                | 说明                                                                                                                                             | 类型       | 默认值       |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| checkedChildren   | 打开时的内容                                                                                                                                         | any      | -         |
| size              | switch的尺寸<br><br>**可选值**:<br>'medium'(正常大小)<br>'small'(缩小版大小)                                                                                  | Enum     | 'medium'  |
| unCheckedChildren | 关闭时的内容                                                                                                                                         | any      | -         |
| onChange          | 开关状态改变是触发此事件<br><br>**签名**:<br>Function(checked: Boolean, e: Event) => void<br>**参数**:<br>_checked_: {Boolean} 是否为打开状态<br>_e_: {Event} DOM事件对象 | Function | () => { } |
| checked           | 开关当前的值(针对受控组件)                                                                                                                                 | Boolean  | -         |
| defaultChecked    | 开关默认值 (针对非受控组件)                                                                                                                                | Boolean  | -         |
| disabled          | 表示开关被禁用                                                                                                                                        | Boolean  | false     |
| onClick           | 鼠标点击事件<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} DOM事件对象                                                         | Function | -         |
| onKeyDown         | 键盘按键事件<br><br>**签名**:<br>Function(e: Event) => void<br>**参数**:<br>_e_: {Event} DOM事件对象                                                         | Function | -         |

## 键盘支持

-   支持键盘控制，tab选中后按回车进行状态切换。

## ARIA and KeyBoard

| 按键          | 说明                              |
| :---------- | :------------------------------ |
| Enter       | 切换选中状态                 |
| SPACE       | 切换选中状态                 |