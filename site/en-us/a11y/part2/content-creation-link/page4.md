# 4. Focus management

## 1. Focus introduction

The `focus` can be understood as the object of the current operation. For example：A hyperlink gets the `focus`, after pressing the Enter key, the browser will open the hyperlink. Another example: when the input box gets the `focus`, we can enter text in this input box, if you lose the `focus`, you can not enter text in this input box.

Some users (such as users who use screen-reader) rely on keyboard or other input device to operate the computer. For these users, `focus` is important because it is the primary way they reach to all elements. Therefore, in some checklist of accessible page checking, it is indicated that [all page functions should be able to be performed via the keyboard](https://webaim.org/standards/wcag/checklist#sc2.1.1),
unless it's a hand-drawn drawing that can't be done with keyboard.

Web sites which do well in `focus management` can let users operate the web via `tab` key, such as [the united Arab emirates airline booking website](https://www.emirates.com/cn/chinese/).

### Make element focusable

By default, only the following elements can be focused by the `tab` key:

* The `a` tag of the href attribute
* `button`
* `input`
* `select`
* `textarea`

Other elements such as `div`, `span` wouldn't be captured with focus by `tab`, so how to get focus of this element? We can add the `tabindex` attribute to the element to get the focus:

```markup
<div tabindex="0">This is the div that gets the focus</div>
```

`tabindex` attribute value ranges from 0 to 32767, if the value is negative, it means there is no focus mark. Through the following table, we can specifically understand the function of the `tabindex` attribute when it takes different values:

| tabindex attribute | whether the focus can be obtained through the tab key|
| :--- | :--- |
| negative number（Such as tabindex = "1"\) | no |
| 0（tabindex="0"） | Yes, the order of acquisition corresponds to the location in the document |
| positive number（Such as tabindex="2"） | Yes, the smaller the value, the first to get |

```markup
<span tabindex="0"> hello </span>                   // Both mouse click and keyboard control get focus
<span> world ! </span>                              // Mouse clicks and keyboard controls can't get focus
<span tabindex="-1"> fusion design </span>          // Mouse clicks get focus, but keyboard controls can't get focus
<input id="age" type="text" tabindex="0" />         // Both mouse click and keyboard control get focus
<input id="name" type="text" />                     // Both mouse click and keyboard control get focus, Because input is an implicitly focusable element
<input id="name2" type="text" tabindex="-1" />      // Mouse clicks get focus, but keyboard controls can't get focus
```

## 2. Focus management

Let's first understand some common operations on focus in focus management:

* Get the element under focused state
* Automatically gets focus when loaded
* Focus judgment

### 2.1 Get the element under focused state

We can record the elements under focused state through `document.activeElement`. Knowing the focus position of the page is very useful, and we can use this method later when dealing with the problem of out of focus.

### 2.2 Automatically gets focus when loaded

`autofocus` is a `boolean` attribute, the default value is `true`, When the page loads, the element which has `autofocus=true` attribute receives focus automatically.

```markup
<button type="button" autofocus>button text</button>
```

Take Google home page as an example, 99% of the time people are using it to search, we can set search box `input` element's attribute `autofocus` to `true`, when the page is loaded, the cursor will automatically locate in the input box, brings a better user experience.

### 2.3 Focus judgment

We can use `document.hasFocus()` to determine if the user and page is interacting, such as in some online test, you can use this method, when the examinee switches the page, the prompt pops up, tell the examinee not to browse other pages.

 
## 3. Solution for lossing focus

In single page application, we will encounter the problem of out-of-focus after page forward. After the introduction of the focus and focus control method above, we have the following solution to solve the problem of out-of-focus after page forward. 

### 3.1 Using focus return method

Focus return is a common operation, such as a pop-up dialog box. After closing the dialog box, we need to return the focus to the dom element that was triggered before, and it will make a good user experience. The key point of the plan is to use the `document. ActiveElement` mentioned above:

```javascript
// Gets the current focus position
var lastfocus = document.activeElement;

// Open the dialog box, close it, the focus will come back to the origin element
new dialog();
dialog.show();
dialog.hide(function(){
    lastfocus.focus();
});
```

### 3.2 Using `autofocus` attribute

We always want to make the focus focus on the search box in our new page, we can set our search box's attribute `autofocus` to `true` to realize this function.


```markup
<input type="search" autofocus="true" placeholder="enter your question" >
```

### 3.3 Using shortcuts

After page jump, users don't know the location of focus, we can provide keyboard shortcuts which allow users to quickly focus on a particular element, this can be achieved by `accesskey` properties. The main menu and the navigation menu can use `accesskey`, which is usually a good choice.


```markup
<a href="http://webaim.org/" accesskey="w">WebAIM.org</a>
```

We can use `ctrl+alt+w` 、`alt+w` or `alt+shift+w` to realize the process of focuse, the following elements support `accesskey` attribute: `a`, `area`, `button`, `input`, `label` and `textarea`.


## 4. Reference

* [On how to create the React accessibility app](http://simplyaccessible.com/article/react-a11y/)
* [Accessibility of focus](https://developers.google.com/web/fundamentals/accessibility/focus/?hl=zh-cn)
* [JavaScript components for keyboard navigation](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
* [How and when to use the tabindex attribute](https://bitsofco.de/how-and-when-to-use-the-tabindex-attribute/)
* [Keyboard event accessibility summary](http://informationaccessibilityassociation.github.io/webAccessibility/keyboarduse/1_keyboarduse.html)
* [Accessibility development series focus management](https://blog.csdn.net/yc123h/article/details/51337411)
* [Keyboard Accessibility](https://webaim.org/techniques/keyboard/accesskey#spec)

