# Affix

-   category: Components
-   family: Util
-   chinese: 固钉
-   type: 基本

---

将页面元素钉在可视范围。

## 何时使用

-   当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
-   页面可视范围过小时，慎用此功能以免遮挡页面内容。

## API

### Affix

| 参数         | 说明                                                                                                  | 类型                       | 默认值        | 是否必填 |
| ------------ | ----------------------------------------------------------------------------------------------------- | -------------------------- | ------------- | -------- |
| container    | 设置 Affix 需要监听滚动事件的容器元素<br/><br/>**签名**:<br/>**返回值**:<br/>目标容器元素             | () => Element \| Window    | () =\> window |          |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发                                                                      | number                     | -             |          |
| offsetBottom | 距离窗口底部达到指定偏移量后触发                                                                      | number                     | -             |          |
| onAffix      | 当元素的样式发生固钉样式变化时触发的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_affixed_: 是否固定 | (affixed: boolean) => void | -             |          |
| useAbsolute  | 是否启用绝对布局实现 affix                                                                            | boolean                    | -             |          |
| className    | 包裹 children 容器的类名                                                                              | string                     | -             |          |
| style        | 最外层容器的 style 样式                                                                               | React.CSSProperties        | -             |          |
