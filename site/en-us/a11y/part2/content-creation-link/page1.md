# 1. Skip the Navigation Bar that Appears Repeatedly on Multiple Pages

## 1. Skip the Navigation Bar that Appears Repeatedly on Multiple Pages

Each time a page loads, the screen reader reads from the top of the page, often with navigation bars that are repeated in most pages. Spending extra time reading repetitive content can significantly reduce the experience, so we need to design a way to skip the repetitive navigation.

We can experience this design on sites such as [https://webaim.org/](https://webaim.org/),[https://github.com/](https://github.com/) . After completion of loading of the home page, press the Tab key, you can see a button on the top left corner of the screen: ` Skip to Main Content `, by pressing the button, we can get to the main content area of the page directly, skip the navigation bar.

According to the design of the page, we divide it into two cases for accessibility improvement:

* Normal Page
* Single Page Application

### 1.1 Normal Page (the anchor of the page is available)

In this case, we can use HTML+CSS to realize this function.

* Use `<a href="#targetId">` to navigate directly to the specified area of the page.
* Add CSS style for `<a>`, show jump prompt only in certain situations.

We add a simple hyperlinks in HTML, but we don't want this prompt to always appear in the top left corner of the page, so we hide it with CSS:

```markup
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

When we first hit the Tab key, the hyperlink takes the focus, `:focus` state takes effect and appears in the upper-left corner of the page. Within the `div` that contains the body content information, we will tag it with `id="content"`.

### 1.2 Single Page Application

SPA（SinglePage Web Application，SPA） is a kind of rich client which loads from the Web server, the single page forwarding only refreshes the local resources, the common resources \(js, CSS and so on \) only needs to load once, so the switch between page fragments is fast and the user experience is good. But because the single page url pattern is different from the url of the multi-page mode, it intercepts `'domain.com/#content`, the above `<a>` label anchor method will fail, we can solve it using JavaScript.

For the solutions of Single Page Applications, you can refer to [our configurable Fusion theme templates that support accessibility](https://fusion.design/template/62), get the source code from [this link](https://github.com/alibaba-fusion/materials/blob/master/scaffolds/next-single-page-a11y/src/components/skip-to/index.jsx)。

```javascript
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

Only the following elements can be focused naturally, other elements such as `<div>` can be focused only in the case of setting tabindex.

* `<a>` elements with an href attribute
* `<link>` elements with an href attribute
* `<button>` elements
* `<input>` elements that are not type="hidden"
* `<select>` elements
* `<textarea>` elements

```javascript
<a href="#main">jump to main</a>
<div>main<div>
<footer tabindex="-1">main<footer>

document.querySelector("a").focus();        // worked
document.querySelector("div").focus();        // not work
document.querySelector("footer").focus();    // worked
```

## 2. Reference

* [https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/](https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/)
* [https://bitsofco.de/how-and-when-to-use-the-tabindex-attribute/](https://bitsofco.de/how-and-when-to-use-the-tabindex-attribute/)

