# Slider

-   category: Components
-   family: DataDisplay
-   chinese: 图片轮播
-   type: 展示

---

轮播组件，就是以幻灯片的方式，在页面中横向展示诸多内容的组件。

## 何时使用

-   轮播内容相互独立，前后在内容以及数据上都不存在逻辑关系。
-   **单图轮播**：该样式通常用于承载运营banner，是一个位置相对固定的模块。
-   **多图轮播**：单元信息浏览

## 如何使用

1.  当轮播组件中只有一张图片的时候，轮播组件会隐藏导航锚点、禁止自动循环（即使上层设置了）、禁止拖拽播放（即使上层设置了）。
2.  如果您要将 Slider 放到 Dialog 中，此时你需要关闭 Dialog 的动画，避免 Slider 在计算内部元素宽度时造成出错。
3.  如果出现图片高度 1px 的问题，可以尝试在 `img` 标签的外部包裹一层 `div` 标签。

## API

### Slider

| 参数               | 说明                                                                                                                      | 类型                                                                        | 默认值   | 是否必填 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------- | -------- |
| className          | 自定义传入的样式                                                                                                          | string                                                                      | -        |          |
| adaptiveHeight     | 是否使用自适应高度                                                                                                        | boolean                                                                     | false    |          |
| animation          | 动效类型，默认是'slide'                                                                                                   | string \| boolean                                                           | 'slide'  |          |
| arrows             | 是否显示箭头                                                                                                              | boolean                                                                     | true     |          |
| arrowSize          | 导航箭头大小                                                                                                              | 'medium' \| 'large'                                                         | 'medium' |          |
| arrowPosition      | 导航箭头位置                                                                                                              | 'inner' \| 'outer'                                                          | 'inner'  |          |
| arrowDirection     | 导航箭头方向                                                                                                              | 'hoz' \| 'ver'                                                              | 'hoz'    |          |
| autoplay           | 是否自动播放                                                                                                              | boolean                                                                     | false    |          |
| autoplaySpeed      | 自动播放的速度                                                                                                            | number                                                                      | 3000     |          |
| prevArrow          | 前向箭头节点                                                                                                              | ReactElement                                                                | -        |          |
| nextArrow          | 后向箭头节点                                                                                                              | ReactElement                                                                | -        |          |
| centerMode         | 是否启用居中模式                                                                                                          | boolean                                                                     | false    |          |
| dots               | 是否显示导航锚点                                                                                                          | boolean                                                                     | true     |          |
| dotsDirection      | 导航锚点方向                                                                                                              | 'hoz' \| 'ver'                                                              | 'hoz'    |          |
| dotsRender         | 自定义导航锚点<br/><br/>**签名**:<br/>**参数**:<br/>_index_: 锚点编号<br/>_current_: 当前幻灯片编号                       | (index: number, current: number) => void                                    | -        |          |
| draggable          | 是否可拖拽                                                                                                                | boolean                                                                     | true     |          |
| infinite           | 是否使用无穷循环模式                                                                                                      | boolean                                                                     | true     |          |
| defaultActiveIndex | 初始被激活的轮播图                                                                                                        | number                                                                      | 0        |          |
| lazyLoad           | 是否启用懒加载                                                                                                            | boolean                                                                     | false    |          |
| slideDirection     | 轮播方向                                                                                                                  | 'hoz' \| 'ver'                                                              | 'hoz'    |          |
| slidesToShow       | 同时展示的图片数量                                                                                                        | number                                                                      | 1        |          |
| slidesToScroll     | 同时滑动的图片数量                                                                                                        | number                                                                      | 1        |          |
| speed              | 轮播速度                                                                                                                  | number                                                                      | 600      |          |
| activeIndex        | 跳转到指定的轮播图（受控）                                                                                                | number                                                                      | -        |          |
| triggerType        | 导航锚点触发方式                                                                                                          | 'click' \| 'hover'                                                          | 'click'  |          |
| onChange           | 轮播切换的回调函数                                                                                                        | (index: number) => void                                                     | -        |          |
| centerPadding      | center 模式下的边缘 padding 值 (px or %);                                                                                 | string                                                                      | '50px'   |          |
| cssEase            | CSS3 Animation Easing，默认‘ease’                                                                                         | string                                                                      | 'ease'   |          |
| focusOnSelect      | 多图轮播时，是否在点击选中后自动居中                                                                                      | boolean                                                                     | 'false'  |          |
| style              | 自定义样式                                                                                                                | CSSProperties                                                               | -        |          |
| waitForAnimate     | 是否等待动画结束后再执行动作                                                                                              | boolean                                                                     | true     |          |
| accessibility      | 是否启用无障碍支持，使用左右键可以切换轮播图                                                                              | boolean                                                                     | false    |          |
| children           | 子元素                                                                                                                    | ReactNode                                                                   | -        |          |
| dotsClass          | 导航锚点样式类名                                                                                                          | string                                                                      | -        |          |
| variableWidth      | Slider 在默认情况下会认为所有的子元素是等宽的。通过设置 `variableWidth` 为 `true`，您可以在 Slider 中放置不同宽度的图片。 | boolean                                                                     | -        |          |
| onBeforeChange     | 轮播切换前的回调函数                                                                                                      | (index: number, currentIndex?: number) => void                              | -        |          |
| swipe              | 是否启用滑动                                                                                                              | boolean                                                                     | true     |          |
| edgeEvent          | 在滑动到头时触发的回调函数                                                                                                | (swipeDirection: 'left' \| 'right') => void                                 | -        |          |
| edgeFriction       | 边缘摩擦系数，数值越大，滑动越慢                                                                                          | number                                                                      | 0.35     |          |
| swipeEvent         | 滑动事件回调函数                                                                                                          | (swipeDirection: 'left' \| 'right' \| 'vertical' \| 'down' \| 'up') => void | -        |          |
| pauseOnHover       | 在鼠标悬浮时自动停止轮播                                                                                                  | boolean                                                                     | false    |          |

## 说明

next-slider is forked from [react-slick](https://github.com/akiran/react-slick).
