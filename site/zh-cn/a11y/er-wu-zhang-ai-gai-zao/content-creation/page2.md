# 2. 元素的隐藏

## 1. 元素的隐藏

我们可以将元素的隐藏分为以下两类：

* 对正常用户不可见
* 对读屏软件不可见

为什么会有这两种不同的隐藏目的呢？

因为有的元素，我们希望视觉正常的用户能看见，比如说广告，但是这部分信息对于使用读屏软件的视障用户而言，会降低他们的浏览体验，因此我们需要设置这些元素对读屏软件不可见。

而有的元素，我们希望读屏软件能看的见，而对于正常用户是隐藏的，比如说badge信息，正常视觉用户可以非常直观的从页面上的badge图标提取信息，比如说有多少未看的信息，但是对于视觉障碍用户而言，我们需要额外增加一个元素来描述badge，使得他们在使用读屏软件时，能从这个元素获取badge的这部分信息，此时虽然这个元素为视障用户提供了必要的信息，但是却给正常用户带来冗余的信息。因此需要对正常用户设置隐藏。

综上，在考虑元素的隐藏问题时，需要考虑两个方面：是否对正常用户隐藏？是否对读屏软件隐藏？接下来，我们将从这两个方面介绍一些隐藏元素的方法与他们之间的差异。

## 2. 隐藏元素的方法及其差异

下表罗列了我们将要介绍的几种隐藏元素的方法及其差异。

| 序号 | 方法 | 对正常用户可见 | 对读屏软件可见 |
| :--- | :--- | :--- | :--- |
| 1 | 文本缩进 | 否 | 是 |
| 2 | 绝对定位+高度塌陷 | 否 | 是 |
| 3 | 绝对定位+远离屏幕 | 否 | 是 |
| 4 | hidden属性 | 否 | 否 |
| 5 | aria-hidden="true" | 是 | 否 |
| 6 | display:none | 否 | 否 |
| 7 | visibility:hidden | 否 | 否 |

下面详细介绍一下表中罗列的几种隐藏元素的实现方法以及一些需要注意的事项。

### 2.1. Text Indent 文本缩进

```css
.element-invisible {
  text-indent: -9999em;
  outline: 0;
}
```

这种方法无法用在RTL\(Right to Left\)语言中。

### 2.2. Position Absolute and Collapsed 绝对定位+高度塌陷

```css
.element-invisible {
  height: 0;
  overflow: hidden;
  position: absolute;
}
```

### 2.3. Position Absolute and Offscreen 绝对定位+远离屏幕

```css
.element-invisible {
  position: absolute;
  top: -999999em;
  left: auto;
  width: 1px;
  height: 1px;
  overflow:hidden;
}
```

### 2.4. hidden属性

```markup
<p hidden> hello a11y </p> // you can't see this, screen reader can't see this 
<p> hello alibaba </p>     // you can see this
```

在使用hidden属性时，所有用户都看不见当前的元素。

### 2.5. aria-hidden="true"

```markup
<p aria-hidden="true"> hello a11y </p> // you can see this, screen reader can't see this
```

aria-hidden对我们的无障碍页面优化很重要的一个特性，对于我们不想给展示给盲人的用户可以通过这个属性aria-hidden=“true”来隐藏，对盲人来讲相当于此元素不会被VoiceOver读出。

可以用来优化广告信息，或者对于盲人无用的信息。

### 2.6. display:none

```css
.element-invisible {
  display: none;
}
```

使用display:none可以隐藏元素，这个元素同时也不能被读屏器访问，且隐藏后不占据空间。

### 2.7. visibility:hidden

```css
.element-invisible {
  visibility: hidden;
}
```

使用visibility: hidden也可以隐藏元素，这个元素同时也不能被读屏器访问，但是与display: none不同的是，前者隐藏后占据空间。另外display: none和visibility: hidden可以对屏幕外的内容进行焦点管理，这部分内容的详细介绍在[焦点管理](https://yuque.antfin-inc.com/fusion-design-system/a11y/dn24ez)一文中详细介绍。

### 2.8. 小结

在上面罗列的7种隐藏元素的方法中，我们应该如何进行选择呢？其实非常简单，开发者可以直接根据`是否对正常用户可见`以及`是否对读屏软件可见`进行判断，从而在第2节开始的表格中直接选出适用的方法。

## 3. 参考资料

* [HTML5 Accessibility Chops: hidden and aria-hidden](https://developer.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)
* [无障碍开发系列之隐藏内容访问](https://blog.csdn.net/yc123h/article/details/51337398)
* [Hiding Content for Accessibility](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility)
* [Using CSS clip as an Accessible Method of Hiding Content](http://adaptivethemes.com/using-css-clip-as-an-accessible-method-of-hiding-content)
* [CSS 相对/绝对\(relative/absolute\)定位系列](https://www.zhangxinxu.com/wordpress/2011/03/css-相对绝对relativeabsolute定位系列（三）/)

