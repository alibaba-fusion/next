# Affix

-   category: Components
-   family: Util
-   chinese: 固钉
-   type: 基本

---

将页面元素钉在可视范围。

## 何时使用

- 当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
- 页面可视范围过小时，慎用此功能以免遮挡页面内容。

## API

### Affix

| 参数           | 说明                                                                                                                     | 类型       | 默认值          |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | -------- | ------------ |
| container    | 设置 Affix 需要监听滚动事件的容器元素<br><br>**签名**:<br>Function() => ReactElement<br>**返回值**:<br>{ReactElement} 目标容器元素的实例<br>        | Function | () => window |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发                                                                                                       | Number   | -            |
| offsetBottom | 距离窗口底部达到制定偏移量后触发                                                                                                       | Number   | -            |
| onAffix      | 当元素的样式发生固钉样式变化时触发的回调函数<br><br>**签名**:<br>Function(affixed: Boolean) => void<br>**参数**:<br>_affixed_: {Boolean} 元素是否被固钉 | Function | func.noop    |
| useAbsolute  | 是否启用绝对布局实现 affix                                                                                                       | Boolean  | -            |
