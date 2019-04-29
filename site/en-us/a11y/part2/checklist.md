# Introduction

**Who:** Developers<br />**What:** Checklist of the most important web a11y elements. Much is taken directly from [https://a11yproject.com/checklist.html](https://a11yproject.com/checklist.html). Many additions are made to their categories and other categories are added.<br />**Why:** Easier than having a huge list of everything to include. For that you can check the [Web Accessibility Guidelines](https://yuque.antfin-inc.com/fusion-design-system/a11y/cyzv9o).

# Checklist

## Landmarks
ARIA Landmark roles can help assistive technology users to quickly navigate to and past blocks of content in a web interface.

- [ ] `role="region"` 

Only use `region` if no other role makes sense.

In HTML5, several of the landmark roles are implicit via the native structural elements which are supported by modern [desktop browsers](https://www.html5accessibility.com/). With that said, if you need to support older browsers, you'll want to check their support for landmark roles. If you find support to be lacking, then use the landmark roles regardless of the validation warnings. For more information, read [Quick Tip: ARIA Landmark Roles and HTML5 Implicit Mapping](https://a11yproject.com/posts/aria-landmark-roles/).<br />**Note:** When you [validate HTML](https://validator.w3.org/nu/) that utilizes most landmark roles, you'll receive a warning stating these roles are redundant.


- [ ] `header role="banner"`

A region of the page that is site focused. Typically your global page header.

- [ ] `nav role="navigation"`

Contains links to navigate to different pages of a website, screens of an application, or a sections within a single document.

- [ ] `main role="main"`

Wraps the focal content of document. Use only once.

- [ ] `article role="article"`

Represents an independent item of content. There may be many `article`s in a single document. `article`s are not considered landmarks, but screen readers may still surface `article`s when navigating by regions or landmarks in a document.

- [ ] `aside role="complementary"`

Supporting section related to the main content even when separated.

- [ ] `footer role="contentinfo"`

Contains information about the document (meta info, copyright, company info, etc).

- [ ] `form role="search"`

Add a `search` role to your primary search ([how to implement](http://adrianroselli.com/2015/08/where-to-put-your-search-role.html)).

## Roles

- [ ]  Ensure proper `role` attributes and related `aria-*` attributes are used when not using semantic markup

Use the [W3C ARIA in HTML document](https://www.w3.org/TR/html-aria/) to look up the correct `role` and `aria-*` attributes to replace a semantic tag. **Note:** Semantic HTML is always preferred because not all screen readers have full ARIA support.

## Language Attribute
Declaring a language attribute on the HTML element enables a screen reader to read out the text with correct pronunciation.

- [ ]  Each `html` tag should have a `lang` attribute

For Chinese use `zh-CN`, for English use `en`. Consult the W3C [Language Codes Spec](https://www.w3.org/International/articles/language-tags/). If you own the contents of an embedded iFrame, you should check that page's `html` tag.

## Document Outline

- [ ]  Use semantic headings and structure

- [ ]  Every page has a `main` tag, or a tag with `role="main"`  

- [ ]  Headers start from H1 and go in order (rephrase)

- [ ]  Markup order matches order of appearance on rendered page

## Links

- [ ]  Ensure links have `:focus` state.

- [ ]  Ensure links are recognizable (underlined).

- [ ]  Provide a “[Skip to main content](https://a11yproject.com/posts/skip-nav-links/)” link. 

Should only be visible to users navigating by keyboard.

- [ ]  Ensure links, not buttons, are used for navigation to other pages

## Buttons

- [ ]  If using non-semantic markup, must use `onkeydown` event handler.

Do not use `onkeypress` to trap key press events because IE does not fire keypress events for non-alphanumeric keys. 

- [ ]  Ensure all button labels are descriptive. Icon buttons should use `aria-label` or `aria-labelledby` when no text is visible inside the button.

## Images

- [ ]  Use appropriate `alt` text. Be accurate; be succinct; and don't be redundant

ALT text is a big topic. [Read this article on ALT text best practices](https://support.siteimprove.com/hc/en-gb/articles/115000013031-Accessibility-Image-Alt-text-best-practices) or [this article for a few helpful hints](https://a11yproject.com/posts/alt-text/).

## JavaScript

- [ ]  Unobtrusive JavaScript

Use unobtrusive JavaScript (never use inline scripting).

- [ ]  No-JS Alternatives

Provide alternatives for users who do not have JavaScript enabled and for environments where JavaScript is unavailable.

## Forms

- [ ]  Logical layout

Tab order of the form follows a logical pattern.

- [ ]  Associated `label` for all form controls (e.g. `input`, `select` etc.)

(e.g. `<label for="name">Name:</label><input id="name" type="text">`)

- [ ]  Make sure `placeholder` attributes are **not** being used in place of `label`tags. [WHATWG](https://www.whatwg.org/specs/web-apps/current-work/multipage/forms.html#attr-input-placeholder)

An exception to this rule would be smaller forms with one or two fields (eg. search or log in forms)

- [ ]  Group related form elements with `fieldset` and describe the group with `legend`

Important for `input type="radio"` and `input type="checkbox"`

- [ ]  Error text is displayed when an input fails validation

Use `aria-invalid` on the form inputs that fail validation

## Media (Audio and Video)

- [ ]  Provide text transcripts for deaf and hard of hearing users.
- [ ]  Synchronized subtitles for videos
- [ ]  Provide captions for text that appears on screen to aid blind users.

## Color and Contrast

- [ ]  Test color contrast

Best done early in the process, by ensuring that the foreground and background colors of your site have sufficient contrast you will help make your site more readable for everyone. [Contrast Ratio](https://leaverou.github.com/contrast-ratio/) is one tool for checking the contrast of your colors for both standard vision and color deficient user.

## Test for different types of color blindness.

- [ ]  Deuteranopia
- [ ]  Protanopia
- [ ]  Tritanopia

Test against different types of color blindness with a tool like [http://colorfilter.wickline.org](http://colorfilter.wickline.org/). If you are on a Mac, another option is [Michel Fortin's, Sim Daltonism](http://michelf.ca/projects/sim-daltonism/) color blindness simulator.

## Assistive Only Elements

- [ ]  Ensure elements only for use with Assistive Technology are not visible unless necessary. 

This can include skip links, additional text descriptions for visual elements, and hidden form elements. [Here is a common solution for elements only for screen readers](https://yuque.antfin-inc.com/fusion-design-system/a11y/cyzv9o#only-for-screen-reader).

## Testing
Navigate your site or application using a range of tools. For instance, using only a keyboard or a screen reader will help you understand how a blind, low-vision, or limited-mobility user will experience it.

- [ ]  Test using at least one screen reader.

There are a variety of screen readers with varying support and usage. Test with technology appropriate for the users, if not then test with a native screen reader such as Apple's VoiceOver.

- [ ]  Test using keyboard only

A site's interactive elements should be navigable using just a keyboard. It should not get stuck or select unnecessary elements.
