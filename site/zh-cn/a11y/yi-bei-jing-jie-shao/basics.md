# 1. 无障碍背景

网络是对所有人开放的，可访问性（Accessibility）指的是让网站对尽可能多的人而言是可用的。无论有怎样身体条件、处于什么样的现实环境，比如有视觉障碍的人，坐轮椅的人，抱着婴儿的成人等，每一个人都应该拥有相同的机会能够访问网站，本文主要讨论 PC Web 的无障碍。

有障碍的访问用户可分为以下几类：

| 类型 | 举例 |
| :--- | :--- |
| 视觉障碍 | 色弱、色盲、完全失明 |
| 身体障碍 | 无法使用鼠标甚至键盘 |
| 认知障碍 | 学习困难或记忆力差 |
| 读写障碍 | 无法阅读，难以认字 |
| 听力障碍 | 耳聋，听不到或听不清 |

## 1. 无障碍领域的术语

在无障碍开发中，会经常碰到一些术语、首字母缩略词、缩写词。了解它们的含义更利于您之后的无障碍开发。

* A11y
  * 代表 Accessibility，数字 11 代表的是这个单词的字母 a 和字母 y 之间的 11 个字符
* W3C
  * World Wide Web Consortium，万维网联盟，互联网的主要国际标准组织。
* WAI
  * Web Accessibility Initiative, 无障碍网页倡议，由 W3C 发起的旨在改善残疾人对万维网的可访问性的倡议。
* WCAG
  * Web Content Accessibility Guidelines，网页内容可访问性指引，由 WAI 发布的 Web 可访问性指南。
* WAI-ARIA
  * Accessible Rich Internet Applications，W3C 发布的技术规范，指定如何增加网页的可访问性，特别是动态内容和用以下开发的用户界面组件
* AT
  * 代表 [Assistive Technology](https://en.wikipedia.org/wiki/Assistive_technology)，辅助技术，它是一个总括性术语包括助听器、轮椅、握笔器等。本文内主要指任何用于帮助残疾用户与网站、应用程序或其他技术进行交互的技术（比如屏幕放大镜，屏幕阅读器，文本转语音软件，语音识别软件等）
* User Agent
  * 为用户检索和显示 Web 内容的任何软件——根据 WCAG 的定义
  * 这包括但不限于 web 浏览器、媒体播放器和辅助技术
* Accessibility API
  * 可访问性 API
* Accessibility tree
  * 可访问性树

## 2. 屏幕阅读器及其原理

无障碍辅助技术有很多，比如屏幕放大镜，屏幕阅读器，文本转语音软件，语音识别软件等，其中最常使用的便是屏幕阅读器（screen reader）。屏幕阅读器通过大声播放屏幕上展示的内容，帮助盲人或弱视群体使用应用。

现在有很多屏幕阅读器，例如:

* MAC
  * [VoiceOver](https://help.apple.com/voiceover/mac/10.14/)
* Windows:
  * [NVDA](https://www.nvaccess.org/)：NVDA是一个免费开源的读屏软件
  * JAWS
* Chrome插件
  * [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn)：一款浏览器下使用的屏幕阅读器

[根据相关机构统计](https://webaim.org/projects/screenreadersurvey7/)，截止到 2017 年 10 月，约有 46%的用户使用 JAWS，32%用户使用 NVDA，12%的用户使用 VoiceOver。 **屏幕阅读器也是无障碍测试的主要工具。**

辅助技术通过 `可访问性树` 与页面进行交互，构建完整、健康的 `可访问性树` 是提高网站可访问的关键。 `可访问性树` 与 `DOM 树` 有什么关联呢？

其实，`可访问性树` 与 `DOM 树` 有着”如胶似漆“的关系，它们的响应变化顺序如下：

> 1. 浏览器使用服务器上的 HTML 标记构建 `DOM 树`
> 2. 浏览器使用 `DOM 树` 构建 `可访问性树`
> 3. 辅助技术与 `可访问性树` 进行交互，来完成用户的指令
> 4. 当用户产生动态内容交互时，`DOM 树`会发生变化
> 5. 浏览器响应由这些 `DOM 树` 更改引起的事件，并相应地更新`可访问性树`
> 6. 辅助技术发现`可访问性树`已更改的相关事件触发时，将这些更改信息传达给用户

因此如果页面语义不清晰时，浏览器构建出来的可访问性树就存在问题，使得屏幕阅读器这类的辅助技术无法有效进行访问，也就无法准确有效的读出用户界面上的内容。

理想情况下，仅用原生的 HTML 就可以写出让屏幕阅读器可理解的语义化内容，但对于现代复杂的 web 应用来说，仅有原生的 HTML 无法满足需求，WAI-ARIA 应运而生，它是 W3C 编写的一套规范，定义了一组可用于其他元素的 HTML 特性，用于提供额外的语义化以及改善缺乏的可访问性。

WAI-ARIA 将语义划分为角色、状态和属性三部分，通过为没有语义的标签添加 `role` `aria-*` 等属性，来向可访问性树解释当前元素是什么、在做什么、有怎样的状态变化，使得 Web 内容更容易被屏幕阅读器完整的访问。

那么 WAI-ARIA 具体是什么，我们又应该怎么使用它呢？请查阅下一篇[WAI-ARIA](wai-aria.md)

## 3. 参考资料

* [The Accessibility Tree](http://whatsock.com/training/)
* [使用 JAWS 测试 Web 应用的技巧](https://www.ibm.com/developerworks/cn/web/1010_sunqy_jaws/index.html)
* [AT\_support](https://www.w3.org/TR/wai-aria-1.1/#at_support)

