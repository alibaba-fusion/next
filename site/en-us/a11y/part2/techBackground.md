# 1. The Principle of Screen Reader

There are many accessibility assistive technologies, such as screen magnifier, screen reader, text-to-speech software, speech recognition software, etc. Among which screen reader is the most commonly used. Screen readers help blind or amblyopic people use apps by reading content displayed on the screen aloud.

There are many screen readers, for example:
* MAC
  * [VoiceOver](https://help.apple.com/voiceover/mac/10.14/)
* Windows:
  * [NVDA](https://www.nvaccess.org/)
  * JAWS
* Chrome Plugin
  * [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn)

Assistive Technologies do not interact directly with a webpage's DOM, instead interacting with something call the Accessibility Tree. Here is the sequence of events as described at [http://whatsock.com/training/](http://whatsock.com/training/)

> 1. The browser builds a DOM using HTML markup from the server.
> 2. The browser builds an Accessibility Tree using the DOM.
> 3. Assistive Technologies interface with the Accessibility Tree to customize functionality for the user.
> 4. The DOM changes as users interact with dynamic content.
> 5. The browser responds to events caused by these DOM changes and updates the Accessibility Tree accordingly.
> 6. Assistive Technologies recognize that the Accessibility Tree has changed when related events are fired, and convey these changes to the user.

# 2. WAI-ARIA Basics

ARIA HTML attributes indicate to accessibility devices (e.g. screen readers) additional information about the webpage elements. This additional information is not meant to replace other information, for example, `aria-label` does not replace a `label` tag. Its important to note that the ARIA Spec is still a Working Draft and not all browsers implement these attributes. It may be necessary to have multiple attributes to handle a variety of browsers and the implementation may not be consistent. Below is a list of some of the most common `aria-*` attributes, but for a full list visit the official docs [here](https://www.w3.org/TR/html-aria/#docconformance).
* `role` - gives meaning to webpage landmarks. See [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles) for a full list.
* `aria-label` - gives a name to an element
* `aria-labelledby` - gives a name via existing text elsewhere on the page. Pass the `id` of that element
* `aria-hidden` - element is not visible and should not be read by accessibility API
* `aria-disabled` - element is visible, but is not editable or operable
* `aria-readonly` - element is visible and operable, but not editable
* `aria-required` - element is a required field

![accessibleelement.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185481/1548294765033-0e589abf-2f80-4016-8d80-33327fb19798.png)

**More ARIA Resources**:
- [ARIA Cheatsheet](http://karlgroves-sandbox.com/CheatSheets/ARIA-Cheatsheet.html)
- https://dylanb.github.io/periodic-aria-roles.html
- https://www.w3.org/TR/wai-aria-1.1/
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
- https://www.w3.org/TR/html-aria/#docconformance
