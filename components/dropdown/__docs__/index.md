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

继承 Popup 绝大多数属性，除了 canCloseByOutSideClick, autoFocus，以下列举为常用属性，其他可参考 Overlay 文档

| 参数            | 说明                                                                                                           | 类型                                              | 默认值                                       | 是否必填 |
| --------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------- | -------- |
| autoClose       | 开启后，children 不管是不是 Menu，点击后都默认关掉弹层（2.x 默认设置为 true）                                  | boolean                                           | false                                        |          |
| children        | 弹层内容                                                                                                       | React.ReactElement                                | -                                            | 是       |
| visible         | 弹层当前是否显示                                                                                               | boolean                                           | -                                            |          |
| align           | 弹层相对于触发元素的定位，详见 Overlay 的定位部分                                                              | string                                            | 'tl bl'                                      |          |
| offset          | 弹层相对于触发元素定位的微调                                                                                   | Array\<number>                                    | [0, 0]                                       |          |
| hasMask         | 是否显示遮罩                                                                                                   | boolean                                           | false                                        |          |
| animation       | 配置动画的播放方式，支持 \{in: 'enter-class', out: 'leave-class' \} 的对象参数，如果设置为 false，则不播放动画 | string \| false \| Record\<'in' \| 'out', string> | \{ in: 'expandInDown', out: 'expandOutUp' \} |          |
| trigger         | 触发弹层显示或者隐藏的元素                                                                                     | React.ReactElement                                | -                                            | 是       |
| triggerType     | 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，或者它们组成的数组，如 ['hover', 'click']               | PopupProps['triggerType']                         | 'hover'                                      |          |
| defaultVisible  | 弹层默认是否显示                                                                                               | boolean                                           | false                                        |          |
| onVisibleChange | 弹层显示或隐藏时触发的回调函数                                                                                 | PopupProps['onVisibleChange']                     | -                                            |          |
| disabled        | 设置此属性，弹层无法显示或隐藏                                                                                 | PopupProps['disabled']                            | false                                        |          |
| delay           | 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效                                 | PopupProps['delay']                               | 200                                          |          |

## 无障碍键盘操作指南

| 按键        | 说明                                                                           |
| :---------- | :----------------------------------------------------------------------------- |
| Up Arrow    | 垂直模式下，同级导航，导航到前一项                                             |
| Down Arrow  | 垂直模式下，同级导航，导航到后一项                                             |
| Right Arrow | 垂直模式下，打开子菜单，导航到子菜单第一项；水平模式下，同级导航，导航到后一项 |
| Left Arrow  | 垂直模式下，关闭子菜单，导航到父级菜单；水平模式下，同级导航，导航到前一项     |
| Enter       | 打开子菜单，导航到子菜单第一项                                                 |
| Esc         | 关闭子菜单，导航到父级菜单                                                     |
