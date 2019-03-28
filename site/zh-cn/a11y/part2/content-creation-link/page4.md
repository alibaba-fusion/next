
# 1. 焦点简介

网页设计中常说的`焦点`可以理解为当前操作的对象。打个比方：某超链接获得了`焦点`，则回车后，浏览器会打开这个超链；再比如输入框获得`焦点`，我们即可在这输入框中输入文字，如果失去了`焦点`，就不能在这个输入框输入文字了。

一些用户（比如使用读屏软件的用户）几乎全靠键盘或其他输入设备来操作计算机。对这些用户而言，`焦点`至关重要，因为这是他们到达所有屏幕元素的主要途径。因此在一些无障碍页面检查的checklist中会指出[所有页面功能应该都能使用键盘来执行](https://webaim.org/standards/wcag/checklist#sc2.1.1)，除非是手绘图这种无法使用键盘执行的操作。

`焦点管理`做的比较好的网站，能让用户在`tab`键的帮助下，完全依靠键盘进行页面的浏览操作，比如像[阿联酋航空的订票官网](https://www.emirates.com/cn/chinese/)。

## 使元素获得焦点

在默认情况，只有如下元素可以通过`tab`键获得焦点：
-   有href属性的`a`
-   `button`
-   `input`
-   `select`
-   `textarea`

其他元素例如`div`、`span`等是无法通过`tab`键获得焦点的，那么怎么样才能获得焦点呢？我们可以为标签加入`tabindex`属性来使这些元素获得焦点：

```
<div tabindex="0">这是能获得焦点的div</div>
```

`tabindex`属性的取值范围是0到32767，如果赋值为负数则表示没有焦点标记，通过下面的表格我们可以具体了解`tabindex`属性不同取值时的功能：

| tabindex属性             | 是否可通过Tab键获取焦点          |
| ------------------------ | -------------------------------- |
| 负数（比如tabindex="-1") | 不可以                           |
| 0（tabindex="0"）        | 可以，获取顺序对应于文档中的位置 |
| 正数（比如tabindex="2"） | 可以，数值越小越先获取           |

```
<span tabindex="0"> hello </span>                   // 鼠标点击与键盘控制均能获得焦点
<span> world ! </span>                              // 鼠标点击和键盘控制都不能获得焦点
<span tabindex="-1"> fusion design </span>          // 鼠标点击可以获取焦点，但是键盘控制不能获取焦点
<input id="age" type="text" tabindex="0" />         // 鼠标点击与键盘控制均能获得焦点
<input id="name" type="text" />                     // 鼠标点击与键盘控制均能获得焦点，因为input是隐式可聚焦元素
<input id="name2" type="text" tabindex="-1" />      // 鼠标点击可以获取焦点，但是键盘控制不能获取焦点
```

# 2. 焦点管理

让我们先了解一些在焦点管理中，常用的对焦点的操作方法：
-   获得焦点元素
-   加载时自动获得焦点
-   焦点判断

## 2.1 获得焦点元素

我们可以通过`document.activeElement`记录下触发焦点的元素。知晓页面的焦点位置是十分有用的，在后面处理失焦时我们可以用到这一方法。

## 2.2 加载时自动获得焦点

`autofocus`是一个`boolean`属性，默认值为`true`，规定当页面加载时设置了该属性为`true`的元素自动获得焦点。

```
<button type="button" autofocus>按钮文本</button>
```

例如谷歌的首页，人们99%的时间都是用它来搜索，我们可以对搜索框的`input`元素设置`autofocus`属性，在页面加载时，光标就可以自动定位在输入框里，带来更好的用户体验。 

## 2.3 焦点判断

我们可以通过`document.hasFocus()`判断用户与页面是否处在交互状态，比如在一些在线笔试考试中，可以使用这个方法，在考生切换页面时弹出提示，告诉考生不要浏览其他页面。

# 3. 失焦处理方案

在单面应用中，我们会碰到页面跳转后失焦的问题，经过上面对焦点和焦点控制方法的介绍，我们有如下的方案来解决页面跳转后的失焦问题。

## 3.1 通过焦点返回方法处理失焦

焦点返回是个常用的操作，比如弹出一个对话框，关闭这个对话框后，我们需要焦点返回到之前触发的dom元素上，这样才能有一个良好的体验。这个方案的实现关键就是使用上面提到的`document.activeElement`：

```
// 获得当前的焦点位置
var lastfocus = document.activeElement;

// 打开对话框，关闭后聚焦到打开前的焦点
new dialog();
dialog.show();
dialog.hide(function(){
    lastfocus.focus();
});
```

## 3.2 通过`autofocus`属性处理失焦

比如说我们在页面跳转后，总是希望能让焦点处于我们新页面的搜索框上，这个时候我们可以设置我们的搜索框的`autofocus`属性为`true`即可。

```
<input type="search" autofocus="true" placeholder="enter your question" > 
```

## 3.3 添加快捷键处理失焦

当页面跳转后，用户不知道焦点处于什么位置时，我们可以提供键盘快捷键的方式让用户快速聚焦到某一特定的元素上，这可以通过`accesskey`属性来实现。主菜单与导航菜单使用`accesskey`，通常是不错的选择。

```
<a href="http://webaim.org/" accesskey="w">WebAIM.org</a> 
```

可通过`ctrl+alt+w` 或 `alt+w` 或 `alt+shift+w`来完成键盘快捷键聚焦的过程，以下元素支持`accesskey`属性：`a`, `area`, `button`, `input`, `label`以及`textarea`。

内容不断更新中……

# 4. 参考资料
-   [关于如何创建React无障碍应用](http://simplyaccessible.com/article/react-a11y/)
-   [关于焦点的无障碍](https://developers.google.com/web/fundamentals/accessibility/focus/?hl=zh-cn)
-   [键盘导航的JavaScript组件](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
-   [How and when to use the tabindex attribute](https://bitsofco.de/how-and-when-to-use-the-tabindex-attribute/)
-   [键盘事件无障碍使用总结](http://informationaccessibilityassociation.github.io/webAccessibility/keyboarduse/1_keyboarduse.html)
-   [无障碍开发系列之焦点管理](https://blog.csdn.net/yc123h/article/details/51337411)
-   [Keyboard Accessibility](https://webaim.org/techniques/keyboard/accesskey#spec)