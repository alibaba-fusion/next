# 2. Hidden of Elements

## 1. Hidden of Elements

We can divide element concealment into the following two cases:

* Hidden for normal users
* Hidden for screen-reader

Why are there two different hidden purposes?

Because some elements, such as ads, are expected to be visible to users with normal vision, but this part of information will reduce the browsing experience for vision barrier users using screen-reader. Therefore, we need to make these elements invisible to screen-reader.

And some elements, we hope it is visible for screen-reader while invisible for normal users, such as the badge information, normal visual user can extract information from the badge icon on the page, such as how many unread message, but for vision barrier users, we need an extra element to describe the badge, makes them accessible when using screen-reader, although the element provides the necessary information for vision barrier users, it brings redundant information to the normal user. Therefore, we need to hide it for normal user.

To sum up, when considering the issue of element hiding, two aspects need to be considered: Is it hidden for normal users? Is it hidden for screen-reader? Next, we'll introduce some methods which can hide elements and the difference between them.

## 2. Methods to Hide Elements and Difference

The following table lists several methods of hiding elements that we will cover and their difference.

| Order | Method | Visible for Normal User? | Visible for Screen-Reader? |
| :--- | :--- | :--- | :--- |
| 1 | text indentation | No | Yes |
| 2 | Absolute position + Height collapse | No | Yes |
| 3 | Absolute position + Away from screen | No | Yes |
| 4 | hidden attribute | No | No |
| 5 | aria-hidden="true" | Yes | No |
| 6 | display:none | No | No |
| 7 | visibility:hidden | No | No |

### 2.1. Text Indent

```css
.element-invisible {
  text-indent: -9999em;
  outline: 0;
}
```

This method can't be used in RTL\(Right to Left\) language.

### 2.2. Position Absolute and Collapsed

```css
.element-invisible {
  height: 0;
  overflow: hidden;
  position: absolute;
}
```

### 2.3. Position Absolute and Offscreen

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

### 2.4. hidden attribute

```markup
<p hidden> hello a11y </p> // you can't see this, screen reader can't see this 
<p> hello alibaba </p>     // you can see this
```

The element will be invisible for all users if we use `hidden` attribute.

### 2.5. aria-hidden="true"

```markup
<p aria-hidden="true"> hello a11y </p> // you can see this, screen reader can't see this
```

`aria-hidden` is useful for accessibility, we can hide the element which we don't want to present to the blind, the element can't be read by screen-reader.

It can be used to optimize advertising messages, or useless information for blind people.

### 2.6. display:none

```css
.element-invisible {
  display: none;
}
```

Using `display:none` can hide the element, which is also not accessible by the screen-reader and takes up no space when hidden.

### 2.7. visibility:hidden

```css
.element-invisible {
  visibility: hidden;
}
```

We can use `visibility: hidden` to hide elements, which can't be read by screen-reader at the same time. But unlike `display: none`, it takes space when hidden.

### 2.8. Summary

Of the seven ways to hide elements listed above, how to choose? It's actually very simple, developers can choose according to whether `visible to normal users` and whether `visible to screen-reader`, and find the best way in the table above.

## 3. Reference

* [HTML5 Accessibility Chops: hidden and aria-hidden](https://developer.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)
* [Access to hidden content](https://blog.csdn.net/yc123h/article/details/51337398)
* [Hiding Content for Accessibility](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility)
* [Using CSS clip as an Accessible Method of Hiding Content](http://adaptivethemes.com/using-css-clip-as-an-accessible-method-of-hiding-content)
* [CSS relative/absolute position](https://www.zhangxinxu.com/wordpress/2011/03/css-相对绝对relativeabsolute定位系列（三）/)

