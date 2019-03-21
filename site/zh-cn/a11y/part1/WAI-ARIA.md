<button>[回到首页](../index.md)</button>

<!-- TOC -->

-   [1. 什么是 WAI-ARIA](#1-什么是-wai-aria)
-   [2. WAI-ARIA 的组成与使用规范](#2-wai-aria-的组成与使用规范)
    -   [2.1 ARIA 的组成](#21-aria-的组成)
    -   [2.2 了解`role`与`aria-*`的对应关系](#22-了解role与aria-的对应关系)
    -   [2.3 了解 ARIA 的具体使用规则](#23-了解-aria-的具体使用规则)
        -   [规则 1：避免冗余信息](#规则-1避免冗余信息)
-   [参考资料](#参考资料)

<!-- /TOC -->

# 1. 什么是 WAI-ARIA

[ARIA](https://www.w3.org/TR/wai-aria-1.1/)是"Accessible Rich Internet Applications"的缩写。它是 W3C 的 Web 无障碍推进组织(Web Accessibility Initiative / WAI)在 2014 年 3 月 20 日发布的可访问富互联网应用实现指南。它定义了一组可用于其他元素的 HTML 特性，用于提供额外的语义化以及改善缺乏的可访问性。

[简单的总结一下](https://www.w3cplus.com/wai-aria/wai-aria.html)：

> -   ARIA 是 W3C 的一个独立规范，帮助 Web 应用程序和 Web 页面变得更具可访问性
> -   ARIA 是对 HTML 语义化的补充。它具备比现有的 HTML 语义化标签和属性更完善的表达能力，并让你页面中元素的关系和含义更明确
> -   ARIA 规范为浏览器和解析 HTML 文档的辅助性技术提供了一种可以让人们以多种方式访问和使用 Web 的标准方法

# 2. WAI-ARIA 的组成与使用规范

## 2.1 ARIA 的组成

ARIA 主要由两部分组成：

-   `role`
    -   角色，标记元素的作用
-   `aria-*`
    -   标记所在元素的属性、状态

下面是一些最常见的 aria-\*属性的列表，但是要获得完整的列表，请访问[官方文档](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles):

-   `aria-label` - 给出了元素的名字
-   `aria-labelledby` - 给出了页面上某处文本的名字，传递该元素`id`
-   `aria-hidden` - 不可见的元素，同时无法被 accessibility API 读取
-   `aria-disabled` - 可见元素，但是不能被编辑或操作
-   `aria-readonly` - 元素可见且能被操作，但是不能被编辑
-   `aria-required` - 元素是必填字段

需要注意的是，ARIA 规范仍然是一个工作草案，并不是所有的浏览器都实现这些属性（目前只有[Edge 浏览器做到了满分](https://www.html5accessibility.com/)），可能需要有多个属性来处理各种浏览器，并且实现上可能不一致。

在上面的内容中我们介绍了 ARIA 的组成，ARIA 在 HTML 中的使用有一定的规范，并不是说在 HTML 中使用了 ARIA，Web 页面就提高了可访问性了，就无障碍化了，如果 ARIA 没有用好，反而会把你带到另一个坑中，使你的页面可访问性更差。因此在使用 ARIA 时，我们需要仔细理解 ARIA 的使用规范。

## 2.2 了解`role`与`aria-*`的对应关系

使用 ARIA 的 role 时，我们需要注意两点：

-   `role`值的选取
-   每个`role`都有自己对应的一个或多个可选属性`aria-*`，

具体解释说明以上的两个注意点，关于第一点，`role`值不是胡乱取的，`role`的值可以是`alert`，`button`等等，可以参阅[此处](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles)获取完整 role 的可选值列表。

配合每个`role`的`aria-*`也不是随意选取的，比如`alert`这个 role 就只有以下三个 aria 属性：`aria-live`, `aria-atomic`, `aria-relevant`。您可以参阅[此处](http://whatsock.com/training/matrices/)获得完整的`role`与`aria-*`对应关系。

## 2.3 了解 ARIA 的具体使用规则

### 规则 1：避免冗余信息

当能找到原生的 HTML 元素，或者是带有相同语义或行为的属性时，不要继续添加 ARIA role

# 参考资料

-   [WAI-ARIA basics](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility/WAI-ARIA_basics)
-   [WAI-ARIA 无障碍 Web 规范](https://www.w3cplus.com/wai-aria/wai-aria.html)
-   [各浏览器的可访问性支持情况](https://www.html5accessibility.com/)
-   [ARIA 的使用规则](https://www.w3.org/TR/using-aria/#rule1)
