# Icon

-   category: Components
-   family: General
-   chinese: 图标
-   type: 展示
-   cols: 1

---

## Q&A

-   Q: 如何添加自定义Icon呢？<br/>
    A: 默认提供部分基础 icon ，若要添加自定义 icon 可在 Fusion 设计中心新建主题，编辑主题中的Icon组件，完成后发布主题。每个主题是一个 npm 包，npm 包里面包含了主题变量、iconfont 地址等相关代码。在你的项目里引用该自定义主题包，更新主题包的版本即可（前提是你的项目/构建工具支持 Fusion 主题的使用）

### 注意事项

-   若为装饰性icon，请设置通过设置 `aria-hidden` 忽略；若为按钮类型icon，请务必设置 `role="button"` 和 `aria-label`

## API

### Icon

| 参数   | 说明                                                                                | 类型          | 默认值      |
| ---- | --------------------------------------------------------------------------------- | ----------- | -------- |
| size | 指定图标大小<br><br/>**可选值**<br/> xxs, xs, small, medium, large, xl, xxl, xxxl, inherit | Enum/Number | 'medium' |
| type | 指定显示哪种图标                                                                          | String      | -        |

<!-- api-extra-start -->

### Icon.createFromIconfontCN

通过自定义 iconfont源来使用使用svg格式的图片，默认有缓存处理

```js
import { Icon } from '@alifd/next';

const CustomIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js',
});

// 同 Icon 基础元素一样，有相同的 size 设定
ReactDOM.render(
    <div>
        <CustomIcon type="icon-store" size="small"/>
        <CustomIcon type="icon-gift"/>
        <CustomIcon type="icon-pic" size="large"/>
    </div>
, mountNode);
```

<!-- api-extra-end -->
