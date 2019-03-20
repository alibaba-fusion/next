
在进行网站的无障碍改造时，我们还会遇到一些页面级别的设计处理，现将结合例子进行说明。

# 跳过多个页面重复出现的导航栏

每当页面载入时，读屏软件会从页面最顶部进行阅读，顶部往往是一些导航栏，这些导航栏在大多数页面中都是重复出现的。花费多余的时间阅读这些重复的内容会大大降低使用体验，因此我们需要设计一种方法，使得我们可以选择跳过这些重复的导航栏。

可以在https://webaim.org/ 、 https://github.com/ 等网站进行体验，网站首页加载完成后，按下Tab键，可以看到屏幕的左上角出现了：`Skip to Main Content`的按钮提示，通过回车或空格按下按钮，我们可以直接到达页面的主体内容区域位置，跳过导航栏。

根据页面的设计，我们分为两种情况进行无障碍的改进：
- 正常页面
- 单页面应用

## 正常页面（即anchor可用的页面）
这种情况下，我们可以用HTML+Css的方式，简单实现该功能。
- 原生标签`<a href="#targetId">` 直接定位到页面的指定区域
- 为`<a>`添加Css样式，只在特定情况下显示跳转提示
我们在HTML中加入一个简单的超链接：

但是我们并不希望这个提示始终显示在页面的左上角，因此我们通过CSS对其进行隐藏：

```
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

当我们第一次按下Tab键时，这个超链接它会获得焦点，:focus状态生效，因此出现在了页面的左上角。在包含正文内容信息的div中，我们会对其标注上 id="content" 。

## 单页应用
单页面应用（SinglePage Web Application，SPA）是一种从Web服务器加载的富客户端，单页面跳转仅刷新局部资源 ，公共资源(js、css等)仅需加载一次，因此页面片段间的切换快，用户体验良好。但是由于单页面的url模式不同于多页面的url模式，对`'domain.com/#content'`进行了拦截，上述采用`<a>`标签锚点的方式的跳转部分会失效，我们可以通过Js的方式来解决。

对于单页面应用的解决方案，可以参考[我们的支持fusion主题配置的无障碍模板](https://fusion.design/template/62)，具体代码可见[此链接](https://github.com/alibaba-fusion/materials/blob/master/scaffolds/next-single-page-a11y/src/components/skip-to/index.jsx)。

```
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
只有以下元素是天然可以被focus的，其他元素例如`<div>`，只有在设置tabindex的情况下(哪怕为负数)才可以被focus

- `<a>` elements with an href attribute
- `<link>` elements with an href attribute
- `<button>` elements
- `<input>` elements that are not type="hidden"
- `<select>` elements
- `<textarea>` elements

```
<a href="#main">jump to main</a>
<div>main<div>
<footer tabindex="-1">main<footer>
  
document.querySelector("a").focus();        // worked
document.querySelector("div").focus();		// not work
document.querySelector("footer").focus();	// worked
```

## 参考
- https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/
- https://bitsofco.de/how-and-when-to-use-the-tabindex-attribute/

# 隐藏元素的处理与差异


## 元素的隐藏

我们可以将元素的隐藏分为以下两类：
- 对正常用户不可见
- 对读屏软件不可见

为什么会有这两种不同的隐藏目的呢？

因为有的元素，我们希望视觉正常的用户能看见，比如说广告，但是这部分信息对于使用读屏软件的视障用户而言，会降低他们的浏览体验，因此我们需要设置这些元素对读屏软件不可见。

而有的元素，我们希望读屏软件能看的见，而对于正常用户是隐藏的，比如说badge信息，正常视觉用户可以非常直观的从页面上的badge图标提取信息，比如说有多少未看的信息，但是对于视觉障碍用户而言，我们需要额外增加一个元素来描述badge，使得他们在使用读屏软件时，能从这个元素获取badge的这部分信息，此时虽然这个元素为视障用户提供了必要的信息，但是却给正常用户带来冗余的信息。因此需要对正常用户设置隐藏。

综上，在考虑元素的隐藏问题时，需要考虑两个方面：是否对正常用户隐藏？是否对读屏软件隐藏？接下来，我们将从这两个方面介绍一些隐藏元素的方法与他们之间的差异。

## 隐藏元素的方法及其差异

下表罗列了我们将要介绍的几种隐藏元素的方法及其差异。

序号 | 方法 | 对正常用户可见 | 对读屏软件可见
--- | --- | --------------- | ---------------
1 | 文本缩进 | 否 | 是
2 | 绝对定位+高度塌陷 | 否 | 是
3 | 绝对定位+远离屏幕 | 否 | 是
4 | hidden属性 | 否 | 否
5 | aria-hidden="true" | 是 | 否
6 | display:none | 否 | 否
7 | visibility:hidden | 否 | 否



下面详细介绍一下表中罗列的几种隐藏元素的实现方法以及一些需要注意的事项。

### 1. Text Indent 文本缩进

```
.element-invisible {
  text-indent: -9999em;
  outline: 0;
}
```
这种方法无法用在RTL(Right to Left)语言中。

## 2. Position Absolute and Collapsed 绝对定位+高度塌陷

```
.element-invisible {
  height: 0;
  overflow: hidden;
  position: absolute;
}
```

### 3. Position Absolute and Offscreen 绝对定位+远离屏幕

```
.element-invisible {
  position: absolute;
  top: -999999em;
  left: auto;
  width: 1px;
  height: 1px;
  overflow:hidden;
}
```

### 4. hidden属性

```
<p hidden> hello a11y </p> // you can't see this, screen reader can't see this 
<p> hello alibaba </p>     // you can see this
```
在使用hidden属性时，所有用户都看不见当前的元素。

### 5. aria-hidden="true"

```
<p aria-hidden="true"> hello a11y </p> // you can see this, screen reader can't see this
```

aria-hidden对我们的无障碍页面优化很重要的一个特性，对于我们不想给展示给盲人的用户可以通过这个属性aria-hidden=“true”来隐藏，对盲人来讲相当于此元素不会被VoiceOver读出。

可以用来优化广告信息，或者对于盲人无用的信息。

### 6. display:none

```
.element-invisible {
  display: none;
}
```

使用display:none可以隐藏元素，这个元素同时也不能被读屏器访问，且隐藏后不占据空间。

### 7. visibility:hidden

```
.element-invisible {
  visibility: hidden;
}
```

使用visibility: hidden也可以隐藏元素，这个元素同时也不能被读屏器访问，但是与display: none不同的是，前者隐藏后占据空间。另外display: none和visibility: hidden可以对屏幕外的内容进行焦点管理，这部分内容的详细介绍在[焦点管理](https://yuque.antfin-inc.com/fusion-design-system/a11y/dn24ez)一文中详细介绍。


## 参考资料
- [HTML5 Accessibility Chops: hidden and aria-hidden](https://developer.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)
- [无障碍开发系列之隐藏内容访问](https://blog.csdn.net/yc123h/article/details/51337398)
- [Hiding Content for Accessibility](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility)
- [Using CSS clip as an Accessible Method of Hiding Content](http://adaptivethemes.com/using-css-clip-as-an-accessible-method-of-hiding-content)
- [CSS 相对/绝对(relative/absolute)定位系列](https://www.zhangxinxu.com/wordpress/2011/03/css-%E7%9B%B8%E5%AF%B9%E7%BB%9D%E5%AF%B9relativeabsolute%E5%AE%9A%E4%BD%8D%E7%B3%BB%E5%88%97%EF%BC%88%E4%B8%89%EF%BC%89/)

# 焦点管理

## 焦点简介

网页设计中常说的“焦点”可以理解为当前操作的对象。打个比方：某超链接获得了焦点，则回车后，浏览器会打开这个超链；再比如输入框获得焦点，我们即可在这输入框中输入文字，如果失去了焦点，就不能在这个输入框输入文字了。

一些用户几乎全靠键盘或其他输入设备来操作计算机。 对这些用户而言，焦点至关重要，因为这是他们到达所有屏幕元素的主要途径。 因此，Web AIM 检查清单才会在其第 2.1.1 节中指出，[所有页面功能应该都能使用键盘来执行](https://webaim.org/standards/wcag/checklist#sc2.1.1)，除非是手绘图这种无法使用键盘执行的操作。

### 什么是可聚焦？

文本字段、按钮和选择列表等内置的交互式 HTML 元素是隐式可聚焦元素，这意味着它们是自动插入到 Tab 键顺序中，并且内置了键盘事件处理，无需开发者进行干预。

但并非所有元素都是可聚焦元素；在我们按 Tab 键在页面上循环跳转时，段落、div等其他页面元素不会获得焦点，这是设计使然。一般我们不需要聚焦无法与用户进行交互的元素。

### DOM顺序

这里需要注意的是利用 CSS 更改元素在屏幕上的视觉位置时要小心。比如下面的这段代码，视觉上的button排布顺序与实际的Tab键聚焦顺序并不相同。

```
<button style="float: right">hello</button> // 此时按钮位于最右侧，但是按下tab键时是第一个被聚焦的
<button>world</button>                      // 此时按钮位于最左侧，但是按下tab键时是第二个被聚焦的
<button>!</button>
```

这可能使跳格顺序看似随机般地四处乱跳，令依赖键盘的用户感到困惑。因此，Web AIM 检查清单在第 1.3.2 节规定，[由代码顺序决定的读取和导航顺序应直观并合乎逻辑](https://webaim.org/standards/wcag/checklist#sc1.3.2)。

除此之外，如果有当前并未显示，但仍需包含在 DOM 中的内容（例如自适应侧边导航），该怎么办？ 

理想情况下，我们应该防止面板在位于屏幕之外时获得焦点，只允许它在用户可以与其进行交互时获得焦点。因为如果有这种位于屏幕之外时获得焦点的元素，当用户在页面中循环跳格时，看起来就好像焦点消失后又再次出现，这显然不是我们想要的效果。

<img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/slide-in-panel2.png?hl=zh-cn">
<img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/slide-in-panel3.png?hl=zh-cn">

解决方法也很简单：
- 我们可以对屏幕外获得焦点的元素设置 display: none 或 visibility: hidden
- 然后恢复其原来的设置 display: block 或 visibility: visible，最后再显示给用户。

关于如何发现哪个元素获得了焦点，我们可以利用控制台中的 document.activeElement 来了解。

## 焦点管理手段

### 利用tabindex

原生元素 DOM 位置提供的默认 Tab 键顺序虽然方便，但有时您需要修改 Tab 键顺序，而在 HTML 中对元素进行物理移动并不总是最优解决方案，甚至缺乏可行性。在此类情况下，可以利用 tabindex HTML 属性来显式设置元素的 Tab 键位置。

使用键盘上的tab键，可以按顺序切换当前焦点元素，而影响这个切换顺序的属性就是元素的tabindex属性。这个属性的取值范围是0到32767，如果赋值为负数则表示没有焦点标记，不对它进行切换。

但并不是所有元素设置了tabindex就一定可以使用tab键切换成为焦点，首先tabindex的值不能为负数，而且不能有disabled（无效）属性。另外，这个元素必须有对应的可获焦区域，而且支持tabindex属性。

通过下面的表格我们可以具体了解tabindex属性的功能：

tabindex属性 | 可通过鼠标或element.focus()获取焦点 | 可通过Tab键获取焦点
----------- | -------------------------------- | ---------------
未设置 | 保持默认行为 | 保持默认行为
负数（比如tabindex="-1") | 可以 | 不可以
0（tabindex="0"）| 可以 | 可以，获取顺序对应于文档中的位置
正数（比如tabindex="2"）| 可以 | 可以，数值越小越先获取

```
<span tabindex="0"> hello </span>                   // 鼠标点击与键盘控制均能获得焦点
<span> world ! </span>                              // 鼠标点击和键盘控制都不能获得焦点
<span tabindex="-1"> fusion design </span>          // 鼠标点击可以获取焦点，但是键盘控制不能获取焦点
<input id="age" type="text" tabindex="0" />         // 鼠标点击与键盘控制均能获得焦点
<input id="name" type="text" />                     // 鼠标点击与键盘控制均能获得焦点，因为input是隐式可聚焦元素
<input id="name2" type="text" tabindex="-1" />      // 鼠标点击可以获取焦点，但是键盘控制不能获取焦点
```

在上面的例子中，我们注意到像input元素无需设置tabindex也可以被tab键聚焦，像这些无需显式设置tabindex属性的元素还有很多，比如：
- 有href属性的a元素
- 有href属性的link元素
- button元素
- input元素（type不是hidden的）
- select元素
- textarea元素
- iframe元素

有关tabindex的设置对访问先后顺序的影响，可以查阅下表：

tabindex取值 | 由先到后的顺序
----------- | -----------
tabindex大于0 | 按tabindex从小到大顺序切换
tabindex相同 | 按元素在document中的出现顺序切换
tabindex为0，或没有设置tabindex，或tabindex不是有效整数（后两种等同于tabindex=0） | 按元素在document中的出现顺序切换

## 失焦处理

常见的失去焦点的场景，比如像是点击按钮后，跳转到一个新的页面，如果此时键盘焦点没要明确地设置，焦点会仍然在前一个页面。那么当用户开始浏览到下一页面的时候，谁会知道焦点在哪里呢？

所以我们应该正确设置焦点，管理焦点移动到一个元素，以及从一个元素转移到另一个元素。毫不夸张的说，在正确构建无障碍单页面应用的过程中，这是最大的挑战之一。

### 焦点的操作方法

在我们开始处理失焦之前，让我们先了解一些对焦点的操作方法：
- 获得焦点元素
- 设置焦点元素
- 加载时自动获得焦点
- 焦点事件

#### 获得焦点元素

主要可以通过以下两种方法可以获得当前焦点所在的位置：

Document 对象：
每个载入浏览器的 HTML 文档都会成为 Document 对象。Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。 提示：Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。

Window对象：
表示浏览器中打开的窗口。 注释：没有应用于 window 对象的公开标准，不过所有浏览器都支持该对象。 Window 对象表示一个浏览器窗口或一个框架。在客户端 JavaScript 中，Window 对象是全局对象，所有的表达式都在当前的环境中计算。也就是说，要引用当前窗口根本不需要特殊的语法，可以把那个窗口的属性作为全局变量来使用。例如，可以只写 document，而不必写 window.document。 同一时间一个document只能有一个元素成为焦点，这个焦点元素可以使用JavaScript访问,方法是：`document.activeElement`。

#### 设置焦点元素

HTMLElement.setActive()

setActive()方法是IE独有的方法，这个方法的作用是把另一个frame或window中的某个元素设置为activeElement（焦点元素），但这个方法不会使document滚动到焦点元素。也就是说UI上没有变化，但另一个frame或window中的那个元素已经成为了activeElement（焦点元素）。

#### 加载时自动获得焦点

Autofocus是一个boolean（布尔值，就真和假两个值）属性，规定当页面加载时按钮应当自动地获得焦点。

```
<button type="button" autofocus>按钮文本</button>
```

当有了autofocus属性，INPUT, TEXTAREA, 或 BUTTON元素都能在页面加载是被选中。例如谷歌的首页，人们99%的时间都是用它来搜索，所以页面一旦加载，光标必然定位在输入框里。 但如果使用纯显示元素，例如H1标记，autofocus属性并不好用。

#### 焦点事件

一个元素成为active元素就等于获得了焦点，会触发这个元素的focus事件。有元素获得焦点，一般就有元素会失去焦点，失去焦点的元素触发blur事件。这两个事件几乎是同时发生的，但他们的执行顺序有区别，blur事件的监听方法先执行，然后才是focus事件的监听方法。 

元素在document没有加载完之前是不能获得焦点的，获得焦点的元素通过documnt.activeElement可以访问。


### 失焦处理方案

经过上面对焦点和焦点控制方法的介绍，我们有如下的方案来解决页面跳转后失焦的问题。

#### 通过Autofocus属性处理失焦

比如说我们在页面跳转后，总是希望能让焦点处于我们新页面的搜索框上，这个时候我们可以设置我们的搜索框的autofocus属性为true即可。

```
<input type="search" autofocus="true" placeholder="enter your question" > 
```

#### 添加快捷键处理失焦

当页面跳转后，用户不知道焦点处于什么位置时，我们可以提供键盘快捷键的方式让用户快速聚焦到某一特定的元素上，这可以通过accesskey属性来实现。主菜单与导航菜单使用accesskey,通常是不错的选择。

以下元素支持 accesskey 属性：a,area,button,input,label, legend以及textarea。

#### 通过function ref处理失焦

举个例子，在跳转时，你可以将将焦点移动到页面最外层的父元素，比如说是一个`div`元素。在这里开始，你就可以浏览页面的其他内容，就像经历了一次浏览器的整体刷新。

- 在最外层的父`div`上创建一个叫`contentContainer`的`ref`。
- `aria-labelledby`属性值将关联页面的标题（可以是一个h1元素，其`id`为`pageHeading`），来帮助描述当前键盘焦点位置的上下文。

```
<div
    ref={(contentContainer) => { this.contentContainer = contentContainer; }} 
    tabIndex="-1" 
    aria-labelledby="pageHeading"
>
```

接下来我们借助`componentDidMount()`的生命周期方法就可以完成我们的焦点管理了。

```
componentDidMount() {
    this.contentContainer.focus();  // focus on the contentContainer while mounting the component
}
```

内容不断更新中……
## 参考资料
- http://simplyaccessible.com/article/react-a11y/ - 关于如何创建React无障碍应用
- http://docs.alibaba.net/accessibility/docs/demo/web/focus.md - 阿里云信息无障碍
- https://developers.google.com/web/fundamentals/accessibility/focus/?hl=zh-cn - 关于焦点的无障碍
- https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets - 键盘导航的JavaScript组件
- https://bitsofco.de/how-and-when-to-use-the-tabindex-attribute/ - How and when to use the tabindex attribute
- http://informationaccessibilityassociation.github.io/webAccessibility/keyboarduse/1_keyboarduse.html - 键盘事件无障碍使用总结

# 如何实现异步的内容更新与提醒
使用JavaScript，可以动态地更改页面的某些部分，而不需要重新加载整个页面，例如，动态地更新搜索结果列表，或者显示不需要用户交互的警告或通知。

虽然这些更改对于视觉正常的用户通常是可视的，但是对于使用读屏软件的用户来说，可能并不明显。

`ARIA live region`填补了这一空白，并提供了一种方式，能能通过辅助技术传达动态内容的更改。

## aria-live的简单应用

考虑到无需重新加载页面即可更新的动态内容，通常是一个区域，为了能使得这些内容的更新被使用读屏软件的用户知晓，我们应该将这些区域标记为live region。那么什么是live region？我们又应该如何进行设计呢？

下面是相关ARIA live region属性的列表及其描述。

aria-live属性值 | 使用场景
-------------- | ------
off | 默认值，表明一个区域不是实时的，不会报读变化
polite | 更新内容应当在适当时刻报读，比如在用户停止输入时
assertive | 立即向用户报读更新内容。由于这是突兀的， assertive值应当仅用于更新内容是重要的，应立即通知给用户的情况

比如在下面例子中的无序列表中的文本的增加或减少，都会在适当的时刻通知给用户。

```
<ul aria-live="polite">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>item 3</li>
</ul>
```

我们还需要通过`aria-controls`将控件与它所控制的区域关联起来。区域的标识就像div中的id一样，多个区域可以使用空格与控件关联，例如 aria-controls="myRegionID1 myRegionsID2"。

下面让我们看一个直观的例子，在这个例子中，我们使用下拉框来控制页面内容的更新，完整的代码与预览效果[请点击](https://codepen.io/skysuka/pen/VRWgVy)。

<img src="https://mdn.mozillademos.org/files/15815/Web_Accessibility_ARIA_ARIA_Live_Regions.png" alt="例子图片">

我们可以看到这是一个简单的页面，上半部分时选择行星，下半部分是对该行星的描述。当改变行星选项，并点击Go按钮时，下半部分的信息也会发生相应的变化，此时，读屏软件可以为我们读出下半部分已经发生变化的信息。

值得注意的是，由于我们设置了`aria-live="polite`，因此读屏器会等到用户暂停操作之后，再去宣读发生变化的内容。因此在下拉列表里进行选择时，并不会马上让读屏器宣布哪些内容发生了变化。

```
// HTML

<fieldset>
  <select id="planetsSelect" aria-controls="planetInfo">
    <option value="">Select a planet&hellip;</option>
    <option value="mercury">Mercury</option>
    <option value="mars">Mars</option>
  </select>
  <button id="renderPlanetInfoButton">Go</button>
</fieldset>

<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">No planet selected</h2>
  <p id="planetDescription">Select a planet to view its description</p>
</div>
```

## aria-live的其他注意事项

请参考[live regions 的高级应用](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#Advanced_Live_Regions)

## 参考资料
- [ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

# 设计建议
本文章主要指出一些我们应当避免的设计，并总结一些设计建议。

## 1. 应当慎重设计既可hover又可click的元素

同一个元素可被hover、可被click，但触发的效果不同，会对使用读屏软件的用户带来麻烦。

比如，比如对于登录按钮，当我的鼠标悬浮在登录按钮上时，可以出来登录菜单栏，当我们点击登录按钮时，可以进入个人中心，这样的设计对于视觉正常的用户而言，页面更加简洁明了。

但是对于需要使用读屏器的视觉障碍用户而言，体验感就不是那么好了，因为他们只能通过键盘进行操作，而键盘是无法模拟鼠标的hover这样的一个形态，因此上述页面对于使用读屏器的视觉障碍用户而言，就无法进入视觉用户可以通过hover而见到的登录菜单栏了，这样就直接影响了使用读屏器的这些用户的体验。

## 2. 尽量使用文本而不是文本图片

当我们在浏览网页的时候，偶尔会遇到图片无法加载的情况，此时比较好的现象是，在未加载出来的图片处出现了替代的文本，让我们知道这张原本应该出现的图片的含义，这可以通过在img中添加alt属性完成。在我们进行网页无障碍开发过程中，也需要对图片添加alt属性的描述，这样我们的视觉障碍用户在使用读屏软件时，也能了解到页面上图片所代表的内容。

而考虑到读屏软件用户的体验，在填写图片的alt属性时，我们需要遵循以下几点规则：
- 精确的传达出图片的内容和功能。
- 尽可能的简洁。
- 不要提供重复信息。
- 不要使用一些诸如“…的图片”这样的冗余语句。
- 不要在alt中添加换行符。
- 对于无意义的图片，alt=""。
- WCAG规定不允许使用文字图片，若是英文图片，转化为相应的英文文字，对于图片描述，转化为相应文字。

因此`图片+alt`的方式只适用于少量文本，大量的文字内容还是需要放在文本的位置处。

## 其他建议
- 合理使用aria-label，对于不能描述的，可以通过aria-label来加强描述
- input标签和textarea内使用placeholder作为默认提示语
- 对于“，”可以使语句朗读过程中出现停顿的效果，这样盲人体验更好
- 列表结构尽量使用ul、ol、dl结构组织内容，读屏软件可提示给用户该结构是由列表内容组成



不断补充中……
## 参考资料
- [Alternative Text](https://webaim.org/techniques/alttext/)
- [移动端h5无障碍优化](http://site.alibaba.net/accessibility/docs/demo/h5/list.html)