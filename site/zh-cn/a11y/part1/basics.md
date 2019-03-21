<button>[回到首页](../index.md)</button>

无障碍是一个很大的课题，我们这里只讨论Web无障碍访问。

# 3. 无障碍领域的术语

在无障碍开发中，会经常碰到一些术语、首字母缩略词、缩写词。了解它们的含义更利于您之后的无障碍开发。

- A11y
    - 代表Accessibility，数字11代表的是这个单词的字母a和字母y之间的11个字符
- AT
    - 代表Assistive Technology，辅助技术，这是指任何用于帮助残疾用户与网站、应用程序或其他技术进行交互的技术（比如……）
- WCAG
    - Web Content Accessibility Guidelines，网页内容可访问性指引
- ADA
    - 美国残疾人法案
- ARIA
    - Accessible Rich Internet Applications，ARIA HTML属性向无障碍设备(例如屏幕阅读器)表明关于网页元素的额外信息。
- User Agent
    - 为用户检索和显示Web内容的任何软件——根据WCAG的定义
    - 这包括但不限于web浏览器、媒体播放器和辅助技术

其他常用术语可以继续参考：
- [WAI-ARIA Important Terms](https://www.w3.org/TR/wai-aria-1.1/#x4-important-terms)

# 1. 屏幕阅读器

在无障碍辅助技术中，最常使用的便是屏幕阅读器（screen reader）。屏幕阅读器通过大声播放屏幕上展示的内容，帮助盲人或弱视群体使用应用。

现在有很多屏幕阅读器，例如Windows的NVDA和JAWS，Chrome的ChromeVox，以及OS X的VoiceOver。据统计，截止到2017年10月，约有46%的用户使用JAWS，32%用户使用NVDA，12%的用户使用VoiceOver。同时，屏幕阅读器也是无障碍测试的主要工具。

## 1.1. 屏幕阅读器原理

所有屏幕阅读器的工作原理都是类似的，为了能够读出并且跟页面的内容进行交互，屏幕阅读器会把当前页面的快照存储起来放在自己的一个虚拟缓冲区内。

我们以使用范围最广的JAWS为例，JAWS 会有自己的一个光标在这个`虚拟缓冲区`内移动，当然用户是看不到这个光标的，只能通过 JAWS 读出来的内容来判断这个光标的位置，因此 JAWS 称其为虚拟光标。就是通过这个虚拟缓冲区才允许用户来控制页面的内容。如果没有这个虚拟缓冲区，读屏软件只能够访问能被 focus 到的元素，比如 input 或者 a 之类的，对于 span 或者 p 这样的元素内容则无法识别。没有这个虚拟缓冲区，用户也无法跟页面元素或者内容里面的子元素进行交互，诸如 image，list 和 table 一类的元素。

屏幕阅读器都有类似的虚拟缓冲区，只不过所称呼的名字可能不同。在 JAWS 里面，虚拟缓冲区指的就是 virtual Pc cursor mode，即 VPC。当用户打开 JAWS 浏览 HTML 文档时默认 VPC 模式是打开的，使用 INSERT+Z 就可以切换 VPC 模式。

# 2. Accessibility Tree（可访问性树）与 DOM
当在浏览器中加载网页时，它会解析页面的HTML标记并构建DOM作为页面的实时表示。DOM表示为树，顶级节点是documentElement。所有后续子节点表示从中分支出来的各种元素，包括HEAD和BODY。在BODY节点内，使用浏览器显示所有可视化呈现的内容。

然后，我们可以使用JavaScript来更改，添加或删除DOM中的节点，从而动态显示更改。使用JavaScript也可以使用DOM完成许多其他事情，例如添加，删除或触发事件以进行用户交互，通过AJAX从外部资源中提取内容，以便将其添加到DOM中。基本上，DOM是您与动态Web技术交互时所有操作发生的地方。

我们知道，当浏览器开始加载页面时，它构建一个DOM，如果此时有像屏幕阅读器这样的辅助技术在运行，它还会创建一个可访问性树。然后屏幕阅读器会通过查询可访问性树来检索信息并使其对用户可用。DOM本身无法直接访问可访问性树，此时也无法使用JavaScript访问可访问性树。

可访问性树与DOM的响应变化顺序如下：
- 浏览器使用服务器上的HTML标记构建DOM
- 浏览器使用DOM构建辅助功能树
- 辅助技术与辅助功能树交互，为用户自定义功能
- 当用户产生动态内容交互时，DOM会发生变化
- 浏览器响应由这些DOM更改引起的事件，并相应地更新辅助功能树
- 辅助技术认识到，当触发相关事件时，辅助功能树已更改，并将这些更改传达给用户


## 1.2. 衔接部分 （重）


再开发适配屏幕阅读器的Web时，相信每位开发者都会有下面的两个疑惑：

Q1: 什么样的document内容才能让读屏软件完美读取呢？

A1: 由语义化HTML标签、符合WAI-ARIA规范的内容构成即可。

Q2: 为什么满足这两项就可以让读屏软件完美读取呢？

A2: 屏幕阅读器的直接信息来源是操作系统和浏览器，语义化的HTML标签和符合WAI-ARIA规范的内容有助于他们通过辅助技术（assistive technologies）生成信息，包括对象的角色、属性和状态(参考)，以及它与内容中其他对象的关系等。这些信息以Accessibility APIs的形式高效可靠地暴露给屏幕阅读器，以便最终阅读。



# 4. 参考资料
- [The Accessibility Tree](http://whatsock.com/training/)
- [使用 JAWS 测试 Web 应用的技巧](https://www.ibm.com/developerworks/cn/web/1010_sunqy_jaws/index.html)
