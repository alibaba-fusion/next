# 1. 跳过多个页面重复出现的导航栏

## 1. 跳过多个页面重复出现的导航栏

每当页面载入时，读屏软件会从页面最顶部进行阅读，顶部往往是一些导航栏，这些导航栏在大多数页面中都是重复出现的。花费多余的时间阅读这些重复的内容会大大降低使用体验，因此我们需要设计一种方法，使得我们可以选择跳过这些重复的导航栏。

可以在[https://webaim.org/](https://webaim.org/) 、 [https://github.com/](https://github.com/) 等网站进行体验，网站首页加载完成后，按下 Tab 键，可以看到屏幕的左上角出现了：`Skip to Main Content`的按钮提示，通过回车或空格按下按钮，我们可以直接到达页面的主体内容区域位置，跳过导航栏。

根据页面的设计，我们分为两种情况进行无障碍的改进：

* 正常页面
* 单页面应用

### 1.1 正常页面（即 anchor 可用的页面）

这种情况下，我们可以用 HTML+Css 的方式，简单实现该功能。

* 原生标签`<a href="#targetId">` 直接定位到页面的指定区域
* 为`<a>`添加 Css 样式，只在特定情况下显示跳转提示

  我们在 HTML 中加入一个简单的超链接：

但是我们并不希望这个提示始终显示在页面的左上角，因此我们通过 CSS 对其进行隐藏：

```markup
<style>
.skip {
    position: absolute;
    top: -1000px;
    left: -1000px;
    height: 1px;
    width: 1px;
    text-align: left;
    overflow: hidden;
}
a.skip:active,
a.skip:focus,
a.skip:hover {
    left: 0;
    top: 0;
    width: auto;
    height: auto;
    overflow: visible;
}
</style>

<a href="#content" class="skip">Skip to content</a>

<div id="content">...</div>
```

当我们第一次按下 Tab 键时，这个超链接它会获得焦点，:focus 状态生效，因此出现在了页面的左上角。在包含正文内容信息的 div 中，我们会对其标注上 id="content" 。

### 1.2 单页应用

单页面应用（SinglePage Web Application，SPA）是一种从 Web 服务器加载的富客户端，单页面跳转仅刷新局部资源 ，公共资源\(js、css 等\)仅需加载一次，因此页面片段间的切换快，用户体验良好。但是由于单页面的 url 模式不同于多页面的 url 模式，对`'domain.com/#content'`进行了拦截，上述采用`<a>`标签锚点的方式的跳转部分会失效，我们可以通过 Js 的方式来解决。

对于单页面应用的解决方案，可以参考[我们的支持 fusion 主题配置的无障碍模板](https://fusion.design/template/62)，具体代码可见[此链接](https://github.com/alibaba-fusion/materials/blob/master/scaffolds/next-single-page-a11y/src/components/skip-to/index.jsx)。

```javascript
<a
    tabIndex="1"
    className="skip-to-main"
    onKeyDown={e => {
        if ([KEYCODE.ENTER, KEYCODE.SPACE].indexOf(e.keyCode) > -1) {
            const item = document.getElementById(dist || 'main');
            const savedTabIndex = item.getAttribute('tabindex');

            // this is important
            item.setAttribute('tabindex', '-1');
            item.focus();
            item.setAttribute('tabindex', savedTabIndex);
        }
    }}
>
    skip to main content
</a>
```

只有以下元素是天然可以被 focus 的，其他元素例如`<div>`，只有在设置 tabindex 的情况下\(哪怕为负数\)才可以被 focus

* `<a>` elements with an href attribute
* `<link>` elements with an href attribute
* `<button>` elements
* `<input>` elements that are not type="hidden"
* `<select>` elements
* `<textarea>` elements

```javascript
<a href="#main">jump to main</a>
<div>main<div>
<footer tabindex="-1">main<footer>

document.querySelector("a").focus();        // worked
document.querySelector("div").focus();        // not work
document.querySelector("footer").focus();    // worked
```

## 2. 参考资料

* [https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/](https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/)
* [https://bitsofco.de/how-and-when-to-use-the-tabindex-attribute/](https://bitsofco.de/how-and-when-to-use-the-tabindex-attribute/)

