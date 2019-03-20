### Checklist

-   [Princeton Content Creator Checklist](https://ux.princeton.edu/accessibility/accessibility-checklist)
-   [MSU A11y Checklist](https://webaccess.msu.edu/Help_and_Resources/checklist.html)
-   [a11yproject Checklist](https://a11yproject.com/)

*   [ ] 是否声明了默认语言属性，lang 参数值遵循[ISO_639-1 规则](https://zh.wikipedia.org/wiki/ISO_639-1)
        `<html lang="en">`
*   [ ] 图片是否设置了 alt 属性或者 longdes 属性
        有含义的图片设置简短的 alt 属性，无含义图片设置空 alt 属性。
*   [ ] 表单元素的 label 是否遵循了约定关系[WCAG 用户输入目的的列表](https://w3c.github.io/WCAG21-zh/index.html#input-purposes)
        遵循这一规范有助于浏览器自动回填数据、屏幕阅读器更好地传达信息
*   [ ] 是否尽可能多的使用了语义化标签
        ``html <header> or role="banner" <nav> or role="navigation" <main> or role="main" <article> or role="article" <aside> or role="complementary" <footer> or role="contentinfo"`
*   [ ] 每个页面，是否有且仅有一个`<main>`标签或 role="main"的元素，并且的确为页面的主题内容

*   [ ] 代码的逻辑顺序与显示的顺序是否与保持一致

*   [ ] 跳转到其他页面使用的是 links(<a>) 而不是 button

*   [ ] 不使用语义化标签时，是否合理使用了`aria-*`与`role`来描述元素

*   [ ] 非语义标签的键盘事件捕获，是否用的是 onkeydown
        IE 浏览器不会为非字母数字键触发按键事件

*   [ ] 所有按钮的解释性文案是否都是可读的，icon 类按钮是否有`aria-label`或`aria-labelledby`来辅助描述

*   [ ] 是否能只借助辅助工具（屏幕阅读器）来使用网站的主要功能

*   [ ] 网站是否能被色盲、色弱用户正常使用
        可采用浏览器插件模拟色盲色弱用户
