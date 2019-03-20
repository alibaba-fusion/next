#
 什么是WAI-ARIA

理想情况下，仅用原生的HTML就可以写出让屏幕阅读器可理解的语义化内容，但对于现代复杂的Web应用来说，更多动态交互的需求使得仅用原生的HTML无法继续满足无障碍需求，WAI-ARIA应运而生。

ARIA是"Accessible Rich Internet Applications"的缩写。它是W3C的Web无障碍推进组织(Web Accessibility Initiative / WAI)在2014年3月20日发布的可访问富互联网应用实现指南。它定义了一组可用于其他元素的HTML特性，用于提供额外的语义化以及改善缺乏的可访问性。


简单的总结一下：

- ARIA 是 W3C 的一个独立规范，帮助Web应用程序和Web页面变得更具可访问性
- ARIA 是对 HTML 语义化的补充。它具备比现有的 HTML 元素和属性更完善的表达能力，并让你页面中元素的关系和含义更明确
- ARIA 规范为浏览器和解析 HTML 文档的辅助性技术提供了一种可以让人们以多种方式访问和使用 Web 的标准方法

# WAI-ARIA的特性与使用

## ARIA特性介绍

ARIA由三部分组成：

- 角色
    - 这定义了元素是干什么的。许多「标志性的角色」，其实重复了HTML5 的结构元素的语义价值。例如 role="navigation" 是对`<nav>`的重复，这也有一些描述其他页面结构的（角色），例如 role="banner", role="search", role="tabgroup", role="tab" 等等。我们通常能从UI 层面找到它们。
- 属性
    - 我们能通过定义一些属性给元素，让他们具备更多的语义。
- 状态
    - 用于表达元素当前的条件的特殊属性，例如 aria-disabled="true"，屏幕阅读器就会这个表单禁止输入。

ARIA的属性和状态的差异之处就是：属性在应用的生命周期中不会改变，而状态可以，通常我们用编程的方法改变它，例如Javascript。




### ARIA 的角色role

下面的表格示意了部分HTML中元素如何使用ARIA的角色role，详细表格[请点击](https://www.w3cplus.com/wai-aria/wai-aria.html)。

role属性值 | 含义 | HTML示意 | 说明
--------- | --- | ------- | ----
button | 表示按钮 | `<span class="btn" role="button"></span>` | 使用span元素模拟按钮控件
heading | 表示标题 | `<div class="page-title" role="heading" aria-level="1"></div>` | 使用div模拟h1
alert | 表示警告 | `<div class="alert alert-warning" role="alert">...</div>` | ajax操作返回错误信息的div标签 如Bootstrap中的Alert组件

当然并不是所有的HTML元素都具有对应的ARIA的role，常用的标签元素对应的ARIA的role[请点击](https://www.w3cplus.com/wai-aria/wai-aria.html)。

### ARIA 的属性

下表介绍了部分ARIA相关属性的使用方法，详细表格[请点击](https://www.w3cplus.com/wai-aria/wai-aria.html)。

属性名 | 属性值 | HTML示意 | 说明
--------- | --- | ------- | ----
aria-activedescendant | 字符串(后代元素的id值) | `<div class="toolbar" aira-activedscendant ="button1"><img src="btn.png" role="button" id="button1"></div>` | aria-activedescendant属性定义了当工具栏获取焦点时，哪一个工具栏的子控件获取焦点。在这个示例中，id="button1"的按钮控件先获取焦点
aria-level | 数值，表示等级 | `<div role="heading" aria-level="2">次标题</div>` | 模拟h2标签元素

### ARIA 的状态

下表介绍了部分ARIA相关状态的使用方法。详细表格[请点击](https://www.w3cplus.com/wai-aria/wai-aria.html)。

属性状态 | 属性值 | HTML示意 | 说明
--------- | --- | ------- | ----
aria-hidden | 字符串。可选值为true和false, true表示元素隐藏(不可见)，false表示元素可见。 | `<div aria-hidden="false"></div> ` | 该属性使用非常普遍。几乎所有涉及到显示与隐藏这类交互或没有交互的地方都可以应用该属性。左边的示例HTML代码来自进度条进度值显示的div, 当前aria-hidden为false, 表示该进度值是可见的。
aria-pressed | 字符串。表示按下的状态，可选值有：true, false, mixed, undfined。默认为undfined, 表示按下状态未知；true表示元素往下（按钮按下）；false表示元素抬起；mixed表示元素同时有按下和没有按下的状态。 | `<div role="button" tabindex="0" aria-pressed="false" aria-disabled="false"></div>` | 左边HTML表示按钮已经按下，同时处于禁用状态。


##  ARIA使用规范（g b 原版的例子 + 嵌套关系 联系， aria -> role 宝藏i资源   http://whatsock.com/training/matrices/）

在上面的内容中我们介绍了如何使用ARIA，但是ARIA在HTML中使用有其自己的规范，并不是说在HTML中使用了ARIA，Web页面就无障碍化了，就提高了可访问性了。如果ARIA没有用好，反而会把你带到另一个坑中，使用你的页面可访问性更差。因此在使用ARIA时，我们需要注意以下几条使用规则：

- 当HTML元素具有语义化时，不应该重新去定义一个添加ARIA的角色、状态或属性的元素
- 不要改变元素原来的语义
- 所有的ARIA制作控件都必须具有键盘(keyboard)事件
- 不建议在可获取焦点元素(focusable)使用以下ARIA的角色：role=presentation或aria-hidden="true"，这样可能会导致一些用户无法获取焦点
- 所有交互元素应该有一个可访问的名称
- 加错不如不加 +++++

# 参考资料
- [WAI-ARIA basics](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility/WAI-ARIA_basics)
- [WAI-ARIA 无障碍Web规范](https://www.w3cplus.com/wai-aria/wai-aria.html)

