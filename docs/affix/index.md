# Affix

-   category: Components
-   family: Util
-   chinese: 固钉
-   type: 基本

---

## Guide

### 何时使用

当用户需要将某个组件固定在页面的某个位置时，可以使用 Affix 组件进行固定。

## API

### Affix

| 参数            | 说明                                                                                                                  | 类型       | 默认值          |
| ------------- | ------------------------------------------------------------------------------------------------------------------- | -------- | ------------ |
| container     | 设置 Affix 需要监听滚动事件的容器元素<br><br>**签名**:<br>Function() => ReactElement<br>**返回值**:<br>{ReactElement} 目标容器元素的实例<br>     | Function | () => window |
| offsetTop     | 距离窗口顶部达到指定偏移量后触发                                                                                                    | Number   | -            |
| offsetBottom  | 距离窗口底部达到制定偏移量后触发                                                                                                    | Number   | -            |
| onAffix       | 当元素的样式发生固钉样式变化时触发的回调函数<br><br>**签名**:<br>Function(元素是否被固钉: Boolean) => void<br>**参数**:<br>_元素是否被固钉_: {Boolean} null | Function | func.noop    |
| absoluteAffix | 是否启用绝对布局实现 affix                                                                                                    | Boolean  | -            |
