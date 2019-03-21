<button>[回到页面内容指引](../content-creation.md)</button>
# 焦点简介

网页设计中常说的“焦点”可以理解为当前操作的对象。打个比方：某超链接获得了焦点，则回车后，浏览器会打开这个超链；再比如输入框获得焦点，我们即可在这输入框中输入文字，如果失去了焦点，就不能在这个输入框输入文字了。

一些用户几乎全靠键盘或其他输入设备来操作计算机。 对这些用户而言，焦点至关重要，因为这是他们到达所有屏幕元素的主要途径。 因此，Web AIM 检查清单才会在其第 2.1.1 节中指出，[所有页面功能应该都能使用键盘来执行](https://webaim.org/standards/wcag/checklist#sc2.1.1)，除非是手绘图这种无法使用键盘执行的操作。

## 什么是可聚焦？

文本字段、按钮和选择列表等内置的交互式 HTML 元素是隐式可聚焦元素，这意味着它们是自动插入到 Tab 键顺序中，并且内置了键盘事件处理，无需开发者进行干预。

但并非所有元素都是可聚焦元素；在我们按 Tab 键在页面上循环跳转时，段落、div等其他页面元素不会获得焦点，这是设计使然。一般我们不需要聚焦无法与用户进行交互的元素。

## DOM顺序

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

# 焦点管理手段

## 利用tabindex

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

# 失焦处理

常见的失去焦点的场景，比如像是点击按钮后，跳转到一个新的页面，如果此时键盘焦点没要明确地设置，焦点会仍然在前一个页面。那么当用户开始浏览到下一页面的时候，谁会知道焦点在哪里呢？

所以我们应该正确设置焦点，管理焦点移动到一个元素，以及从一个元素转移到另一个元素。毫不夸张的说，在正确构建无障碍单页面应用的过程中，这是最大的挑战之一。

## 焦点的操作方法

在我们开始处理失焦之前，让我们先了解一些对焦点的操作方法：
- 获得焦点元素
- 设置焦点元素
- 加载时自动获得焦点
- 焦点事件

### 获得焦点元素

主要可以通过以下两种方法可以获得当前焦点所在的位置：

Document 对象：
每个载入浏览器的 HTML 文档都会成为 Document 对象。Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。 提示：Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。

Window对象：
表示浏览器中打开的窗口。 注释：没有应用于 window 对象的公开标准，不过所有浏览器都支持该对象。 Window 对象表示一个浏览器窗口或一个框架。在客户端 JavaScript 中，Window 对象是全局对象，所有的表达式都在当前的环境中计算。也就是说，要引用当前窗口根本不需要特殊的语法，可以把那个窗口的属性作为全局变量来使用。例如，可以只写 document，而不必写 window.document。 同一时间一个document只能有一个元素成为焦点，这个焦点元素可以使用JavaScript访问,方法是：`document.activeElement`。

### 设置焦点元素

HTMLElement.setActive()

setActive()方法是IE独有的方法，这个方法的作用是把另一个frame或window中的某个元素设置为activeElement（焦点元素），但这个方法不会使document滚动到焦点元素。也就是说UI上没有变化，但另一个frame或window中的那个元素已经成为了activeElement（焦点元素）。

### 加载时自动获得焦点

Autofocus是一个boolean（布尔值，就真和假两个值）属性，规定当页面加载时按钮应当自动地获得焦点。

```
<button type="button" autofocus>按钮文本</button>
```

当有了autofocus属性，INPUT, TEXTAREA, 或 BUTTON元素都能在页面加载是被选中。例如谷歌的首页，人们99%的时间都是用它来搜索，所以页面一旦加载，光标必然定位在输入框里。 但如果使用纯显示元素，例如H1标记，autofocus属性并不好用。

### 焦点事件

一个元素成为active元素就等于获得了焦点，会触发这个元素的focus事件。有元素获得焦点，一般就有元素会失去焦点，失去焦点的元素触发blur事件。这两个事件几乎是同时发生的，但他们的执行顺序有区别，blur事件的监听方法先执行，然后才是focus事件的监听方法。 

元素在document没有加载完之前是不能获得焦点的，获得焦点的元素通过documnt.activeElement可以访问。


## 失焦处理方案

经过上面对焦点和焦点控制方法的介绍，我们有如下的方案来解决页面跳转后失焦的问题。

### 通过Autofocus属性处理失焦

比如说我们在页面跳转后，总是希望能让焦点处于我们新页面的搜索框上，这个时候我们可以设置我们的搜索框的autofocus属性为true即可。

```
<input type="search" autofocus="true" placeholder="enter your question" > 
```

### 添加快捷键处理失焦

当页面跳转后，用户不知道焦点处于什么位置时，我们可以提供键盘快捷键的方式让用户快速聚焦到某一特定的元素上，这可以通过accesskey属性来实现。主菜单与导航菜单使用accesskey,通常是不错的选择。

以下元素支持 accesskey 属性：a,area,button,input,label, legend以及textarea。

### 通过function ref处理失焦

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
# 参考资料
- http://simplyaccessible.com/article/react-a11y/ - 关于如何创建React无障碍应用
- http://docs.alibaba.net/accessibility/docs/demo/web/focus.md - 阿里云信息无障碍
- https://developers.google.com/web/fundamentals/accessibility/focus/?hl=zh-cn - 关于焦点的无障碍
- https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets - 键盘导航的JavaScript组件
- https://bitsofco.de/how-and-when-to-use-the-tabindex-attribute/ - How and when to use the tabindex attribute
- http://informationaccessibilityassociation.github.io/webAccessibility/keyboarduse/1_keyboarduse.html - 键盘事件无障碍使用总结