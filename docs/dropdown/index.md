# Dropdown

-   category: Components
-   family: Util
-   chinese: 下拉菜单
-   type: 弹层

---

下拉弹窗组件。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## API

### Dropdown

> 继承 Popup 的 API，除非特别说明

| 参数              | 说明                                                                                                                                                                                                                                                | 类型             | 默认值                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------ |
| children        | 弹层内容                                                                                                                                                                                                                                              | ReactNode      | -                                          |
| visible         | 弹层当前是否显示                                                                                                                                                                                                                                          | Boolean        | -                                          |
| defaultVisible  | 弹层默认是否显示                                                                                                                                                                                                                                          | Boolean        | false                                      |
| onVisibleChange | 弹层显示或隐藏时触发的回调函数<br><br>**签名**:<br>Function(visible: Boolean, type: String) => void<br>**参数**:<br>_visible_: {Boolean} 弹层是否显示<br>_type_: {String} 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发 | Function       | func.noop                                  |
| trigger         | 触发弹层显示或者隐藏的元素                                                                                                                                                                                                                                     | ReactNode      | -                                          |
| triggerType     | 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，或者它们组成的数组，如 ['hover', 'click']                                                                                                                                                                                 | String/Array   | 'hover'                                    |
| disabled        | 设置此属性，弹层无法显示或隐藏                                                                                                                                                                                                                                   | Boolean        | false                                      |
| align           | 弹层相对于触发元素的定位, 详见 Overlay 的定位部分                                                                                                                                                                                                                    | String         | 'tl bl'                                    |
| offset          | 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量<br>e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px                                                                                                                                         | Array          | [0, 0]                                     |
| delay           | 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效                                                                                                                                                                                                 | Number         | 200                                        |
| autoFocus       | 弹层打开时是否让其中的元素自动获取焦点                                                                                                                                                                                                                               | Boolean        | -                                          |
| hasMask         | 是否显示遮罩                                                                                                                                                                                                                                            | Boolean        | false                                      |
| cache           | 隐藏时是否保留子节点                                                                                                                                                                                                                                        | Boolean        | false                                      |
| animation       | 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画                                                                                                                                                                   | Object/Boolean | { in: 'expandInDown', out: 'expandOutUp' } |

## 无障碍键盘操作指南

| 按键          | 说明                                      |
| :---------- | :-------------------------------------- |
| Up Arrow    | 垂直模式下，同级导航，导航到前一项                       |
| Down Arrow  | 垂直模式下，同级导航，导航到后一项                       |
| Right Arrow | 垂直模式下，打开子菜单，导航到子菜单第一项；水平模式下，同级导航，导航到后一项 |
| Left Arrow  | 垂直模式下，关闭子菜单，导航到父级菜单；水平模式下，同级导航，导航到前一项   |
| Enter       | 打开子菜单，导航到子菜单第一项                         |
| Esc         | 关闭子菜单，导航到父级菜单                           |
