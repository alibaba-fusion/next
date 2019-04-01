
# Fusion Accessibility Guide

Document Version: 0.2
# 1. A11y Basics

## 1.1. Terminology
There are lots of terms, acronyms, and abbreviations in the field of Accessibility.

- **A11y**
  -  Accessibility. The number 11 refers to the number of letters between the 'a' and the 'y'.
- **AT**
  - Assistive Technology. This refers to any technology used to assist users with disabilites in interacting with websites, applications, or other technologies. 
- **WCAG**
  - Web Content Accessibility Guidelines. See section 1.3
- **ADA** 
  - Americans with Disabilities Act.
- **ARIA**
  - Accessible Rich Internet Applications. See section 1.5
- **User Agent**
  - "any software that retrieves and presents Web content for users" [WCAG](https://www.w3.org/TR/WCAG21/#dfn-user-agents)
  - This includes, but is not limited to, web browsers, media players, and assistive technolgies.


Also very useful are:
- [WCAG 2.1 Glossary](https://www.w3.org/TR/WCAG21/#x6-glossary)
- [WAI-ARIA Important Terms](https://www.w3.org/TR/wai-aria-1.1/#x4-important-terms)

## 1.2. Background and Importance
> The power of the Web is in its universality.
> Access by everyone regardless of disability is an essential aspect.
> *<div style="text-align: right;">-Tim Berners-Lee, W3C Director and inventor of the World Wide Web</div>*

Accessibility is very important for making the utility of the Web open to everyone. In the USA there is very important legislation called the Americans with Disabilities Act (ADA) that says individuals cannot be discriminated against due to a disability that individual has. Another way of saying this is, if a user cannot perform a required act to interact with a company's service, that company must find another way for that user to get that service. This is most obvious for physical disabilities, such as adding wheelchair ramps to external stairs, but this also applies to digital services like websites. In recent years large companies have been sued for such reasons, for example Domino's Pizza [^1]. But these lawsuits are not limited to large companies, with over 1,000 suits filed in 2018 [^2].

Making a website more accessible is not just important to protect against potential legal action, it can improve customer satisfaction, reduce customer service inquiries, and potentially add or retain customers with accessibility impairments.

## 1.3. WCAG 2.1
The W3C created a set of guidelines for making websites more accessible, the Web Content Accessibility Guidelines (WCAG) . The most recent version of the WCAG is version 2.1, which exists at the [official website](https://www.w3.org/TR/WCAG21/). This is used as the definitive guide for making a website accessible.

A very good introduction to the WCAG and Accessibility in general can be found [here](https://www.w3.org/WAI/fundamentals/accessibility-intro/).

There is currently no chinese translation for WCAG 2.1, but there is for WCAG 2.0 and it can be found [here](https://www.w3.org/Translations/WCAG20-zh/).

## 1.4. Types of A11y
A11y problems can be grouped in many ways, and it helps to keep these various groups when designing and developing a website. Here are just a few:
* Impairment
  * Visual
  * Auditory
  * Cognitive
  * Neurolgical
  * Physical
  * Speech
* Principles (WCAG) [[link](https://www.w3.org/TR/WCAG20/#guidelines)]
  * **Perceivable** - Information and user interface components must be presentable to users in ways they can perceive.
  * **Operable** - User interface components and navigation must be operable.
  * **Understandable** - Information and the operation of user interface must be understandable.
  * **Robust** - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.
* Conformance Level (WCAG)
  * There are 3 levels: **A**, **AA**, and **AAA**
  * **A** is required for minimum level of conformance, tends to have very little impact on the design, and will likely not be visible to those not using ATs.
  * **AA** and **AAA** standards are progressively more restrictive. Meeting every standard may not be possible, so its not recommended to use these levels as a requirement
  * See [conformance requirements](https://www.w3.org/TR/WCAG20/#conformance-reqs)
* Level of Testability
  * **Completely Automated**
    * tests that can be run as part of an automated process.
    * E.g. unit test that checks if an image has `alt` text property.
  * **Partially Automated**
    * tests that require human input or interpretation of results, but are aided by some tool or automated process.
    * E.g. Using a Chrome plugin to test for foreground-background color contrast.
  * **Manual**
    * tests that require human input or interpretation.
    * E.g. Manually tabbing through a page to check the tab order makes logical sense.

## 1.5. ARIA Attributes
ARIA HTML attributes indicate to accessibility devices (e.g. screen readers) additional information about the webpage elements. This additional information is not meant to replace other information, for example, `aria-label` does not replace a `label` tag. Its important to note that the ARIA Spec is still a Working Draft and not all browsers implement these attributes. It may be necessary to have multiple attributes to handle a variety of browsers and the implementation may not be consistent. Below is a list of some of the most common `aria-*` attributes, but for a full list visit the official docs [here](https://www.w3.org/TR/html-aria/#docconformance).
* `role` - gives meaning to webpage landmarks. See [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles) for a full list.
* `aria-label` - gives a name to an element
* `aria-labelledby` - gives a name via existing text elsewhere on the page. Pass the `id` of that element
* `aria-hidden` - element is not visible and should not be read by accessibility API
* `aria-disabled` - element is visible, but is not editable or operable
* `aria-readonly` - element is visible and operable, but not editable
* `aria-required` - element is a required field

![accessibleelement.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185481/1548294765033-0e589abf-2f80-4016-8d80-33327fb19798.png) 

### 1.5.1. ARIA Resources
- [ARIA Cheatsheet](http://karlgroves-sandbox.com/CheatSheets/ARIA-Cheatsheet.html)
- https://dylanb.github.io/periodic-aria-roles.html
- https://www.w3.org/TR/wai-aria-1.1/
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
- https://www.w3.org/TR/html-aria/#docconformance


## 1.6. Accessibility Tree

Assistive Technologies do not interact directly with a webpage's DOM, instead interacting with something call the Accessibility Tree. Here is the sequence of events as described at [http://whatsock.com/training/](http://whatsock.com/training/) 

> 1. The browser builds a DOM using HTML markup from the server.
> 2. The browser builds an Accessibility Tree using the DOM.
> 3. Assistive Technologies interface with the Accessibility Tree to customize functionality for the user.
> 4. The DOM changes as users interact with dynamic content.
> 5. The browser responds to events caused by these DOM changes and updates the Accessibility Tree accordingly.
> 6. Assistive Technologies recognize that the Accessibility Tree has changed when related events are fired, and convey these changes to the user.

# 2. Guidelines
## 2.1. Overview

### 2.1.1. Conformance Level
For the purpose of Fusion products, the goal is to conform to Level A. A list of the WCAG guidelines grouped by Level can be found [[here](https://www.wuhcag.com/wcag-checklist/)]. Another source is the [offical WCAG quick reference website](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&levels=aa%2Caaa#top), which has the ability to filter by various parameters such as: level, technology, and tags.

In the future there will be a more detailed and customized list of WCAG guidelines that Fusion products must conform to. For now it is most important to get all fusion products to meet this minimum standard and to help developers understand what they must do to meet those standards. The below section will list guidelines with specific examples and suggestions. These are not exhaustive cases so it is important to the intent of each guideline and apply where necessary.

### 2.1.2. The 3 Groups

Accessibility for products developed with tools in the Fusion ecosystem can be difficult because there are many groups of people that can affect the end experience. The main groups are: designers, component developers, component users, and content creators. Each group should have a shared understanding of what a11y is, but they also have unique concerns that the other groups do not. One example is that the developers cannot make sure an image has a useful description, but can make it easy for content creators to enter or change an image's description. 

Below is a list of just some of the things each group controls.

Designers
- Colors and Themes
- Button Focus State
- Component Functionality

Web Component Developers
- Component default values
- Focusability
- Which parts of components can be modified by users
- Tab order within components

Web Component Users
- Order of components with the page or other custom components
- Content passed to display in components
- tab order between components

Content Creators
- Meaningful names and descriptions for images, buttons, form inputs, etc.
- Audio and Video media are captioned
- Text is understandable by the widest audience

The following sections discuss the minimum knowledge each of the 4 groups should understand.


## 2.2. Design
TODO
- What should a designer know so they can make accessible components?
- How do disabled users interact with the web? What interactions can they perform and what can they not?
- What types of visual disabilities are there and how do they impact usability?


## 2.3. Component Libraries

The following sections can be used as checklists for a11y compliance, holding mostly the same information. The first section (2.3.1) is organized by the WCAG Guideline, whereas the second (2.3.2) is organized more by the component and/or suggestion. Section 2.3.1 is likely more beneficial when doing a more in depth accounting of a website's a11y as it gives reason for the suggestion. Section 2.3.2 is likely more beneficial when actively developing as it is easier to find the suggestions that will help.


### 2.3.1. Suggestions By WCAG Guideline

This is a list of suggestions for meeting the level A guidelines presented by WCAG 2.1. This section is targeted to developers of web component libraries and so tries to focus on guidelines that those developers have control over. Level A guidelines not included in this section can be found in Section 2.4 Component Usage Guidelines, which is targeted to users of such component libraries.

* 1.1.1 – **Non-text Content **- Provide text alternatives for non-text content
  * About
    * Non-text content should have text content that matches the non-text content as accurately as possible.
    * It is not always necessary to have text content, for example decorative images and formatting.
  * Suggestions
    * Any element (buttons, divs, applets, etc.)
      * `aria-labelledby` attribute for when another element on the page gives the name of this element. Pass that element's `id` attribute. [[more info](https://www.w3.org/TR/WCAG20-TECHS/ARIA10.html)]
      * `aria-describedby` attribute, similar to `aria-labelledby`, but for when its a detailed description and not just a label.
    * Images that have meaning
      * `alt` attribute. Good rules for `alt` text are: be accurate; be succinct; and don't be redundant. 
      * `longdesc` attribute if the description is very long and should not always be read, and the description is contained in an external file that can be referenced.
    * Images that have no meaning (e.g. section separators)
      * set `alt=""`
  * Resources
    * [Alt Text Best Practices](https://support.siteimprove.com/hc/en-gb/articles/115000013031-Accessibility-Image-Alt-text-best-practices)
* 1.3.1 – **Info and Relationships** - Logical structure
  * About
    * "information and relationships that are implied by visual or auditory formatting are preserved when the presentation format changes" [^3]. 
    * This is an extension of rule 1.1.1 regarding non-text information. But here it makes important note regarding the structure of the information.
    * For example, changing the website's stylesheet for a user defined stylesheet should maintain the relationships between information
  * Suggestions
    * Use semantic markup when possible.
      * Use `<button>` instead of a `<div>` with a click handler when possible.
    * Use structural encoding (e.g. headings, paragraphs, lists, etc.) to indicate structure, rather than presentational encoding (e.g. color, size, borders, etc.).
      * Use the structural encoding as a basis for presentational encoding by setting CSS to use the structure. This allows for assistive technology to ignore or replace CSS stylesheets without losing structure.
    * Any element
      * `role` attribute on important landmarks to convey element purpose and expected interactions, see [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles) for a list of roles. Some common examples are `button`, `main`, and `Progressbar`. It is not necessary to have a `role` attribute if a semantically correct HTML tag is used. For example, a `<button>` tag does not need to be labeled as `role=button`. See [here](https://www.w3.org/TR/html-aria/#docconformance) for default `aria` attributes for HTML tags.
        * if multiple elements have the same role, `aria-label` or `aria-labelledby` shoud be used to say how they are different.
      * group items with `role=group`, `role=radiogroup`, or `role=rowgroup` to connect elements that are related that are not in otherwise meaningful groupings. For example, when working with multi-part inputs like a phone number:
      	```
      		<div role="group" aria-labelledby="phone"> 
      			<span id="phone">Phone Number</span>
				<input type="text" aria-required="true" title="Area Code" />-
      			<input type="text" aria-required="true" title="Local Phone Number" />
      		</div>
      * use `role=region` for when other roles do not make sense. Combine with `aria-label` or `aria-labelledby` to indicate the type of region.
    * When markup is used to emphasize something, also include text that indicates the reason for the emphasis.
      * For example, when bolding something to indicate it is new, also add the text "(New)"
* 1.3.2 – **Meaningful Sequence** - Present content in a meaningful order
  * About
    * Content should occur in a meaniful order so assistive technology can progress in a way that matches the visual presentation
  * Suggestions
    * Try to match visual and DOM order. Avoid using CSS to reposition elements in a way that breaks the DOM order.
    * use `tabindex` to make elements focusable and to specify the correct order.
      * values are integers and indicate the priority. If elements have the same value the first element in DOM order will be selected.
      * `tabindex=1` means it will be focused first.
      * `tabindex=0` means it is focusable, but has lowest priority level, so any positive integer element will occur before it.
* 1.4.1 – **Use of Colour** - Don’t use presentation that relies solely on colour
  * About
    * Color should not be the only means of presenting information or labeling a control.
    * Low-visibility users and color-blind users may have issues if color is the only indicator.
  * Suggetions
    * For control elements, use things such as size, shape, location, and text to convey the control's purpose for users of varying levels of assistive technology.
    * For information, convey the reason for the difference of color. For example, saying "Error" before the error message, not just displaying the text in red.
    * Foreground and background colors should have a contrast ratio of at least 3:1 to be visible for low-visibility users. 
    * More generally, information conveyed through visual means should also be indicated through text that can be used for low-visibility assistive technologies.

* 2.1.1 – **Keyboard**
  * About
    * "wherever possible, content can be operated through a keyboard or keyboard interface (so an alternate keyboard can be used). When content can be operated through a keyboard or alternate keyboard, it is operable by people with no vision (who cannot use devices such as mice that require eye-hand coordination) as well as by people who must use alternate keyboards or input devices that act as keyboard emulators"[^4].
    * Not all content needs to be selectable via keyboard, only content that can be operated on. If a user has no visual disabilities they will not want to select content that performs no action. For users with visual disabilities, screen readers will be used to read non-operable content.
  * Suggetions
    * see `tabindex` suggestions from guideline 1.3.2
    * Use HTML form elements, buttons, and links wherever possible to automatically make elements focusable.
    * Add keyboard-triggered event handlers where necessary. 
      * For example, a list can be reordered by dragging list elements. The list can also be reordered by selecting the target element and using a keyboard shortcut plus the arrow keys to reorder.
    * Use `onkeydown`, instead of `onkeypress`, to trap key press events. IE does not fire keypress events for non-alphanumeric keys.
    * Keyboard enter should act like mouse click.
  * Testing
    1. Identify all functionality on the content.
    2. Check that all functionality can be accessed using only the keyboard or keyboard interface.
  * Resources
    * https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
* 2.1.2 – **No Keyboard Trap**
  * About
    * Any element that can be selected using the keyboard should be able to navigated away using just the keyboard. If not, the user should be told of how to navigate away.
  * Suggetions
  * Testing [^5]
    1. Tab through content from start to finish.
    2. Check to see that keyboard focus is not trapped in any of the content.
    3. If keyboard focus appears to be trapped in any of the content, check that help information is available explaining how to exit the content and can be accessed via the keyboard.
* 2.4.3 – **Focus Order** - Logical order
  * About
    * Sequential navigation should be consistent with the meaning of the content.
    * The order of focusable elements should make sense.
  * Suggetions
    * Make DOM element order match the visual order
    * Use naturally focusable elements such as links and form elements
  * Testing
    1. Determine the expected sequence through the focusable elements
    2. Tab through the elements and check that the order of focusable elements matches the expected sequence
* 3.2.1 – **On Focus** - Elements do not change when they receive focus
  * About
    * When an elemented is focused on it should not trigger a change in context or any other unpredictable action. 
    * For example:
      * a form should not be submitted when the submit button is focused.
      * new windows should not be opened
      * focus should not change to another element
  * Suggetions
    * Switch any context changing "focus" actions to "activate" actions. In other words, if a user action causes a context change, the user should be aware of this action and choose to activate it.
  * Testing
    1. Tab through the page elements
    2. Check that no unpredictable events were triggered when any element was focused
* 3.2.2 – **On Input** - Elements do not change when they receive input
  * About
    * If user interaction causes a change in the context, that change should be clear and predictable. Users may be distracted by large changes or not aware of the change if it was not expected.
  * Suggetions
    * When user input causes display of more input options, make sure the selected input was clearly labeled
    * Pair context changes with clear actions that the user chose to make.
      * For example, for a calendar appointment creator, displaying appointment type specific options after the type is selected. The user is aware that additional options would display. An incorrect way to implement would be to open a new page as this change of context was not expected.
    * If a context change is going to be unexpected, the user should be given additional details to explain the change.
* 3.3.1 – **Error Identification** - Clearly identify input errors
  * About
  * Suggetions
    * Validate values of inputs during the user input to provide the quickest feedback.
    * Autofocus on inputs in error state when forms are submitted.
    * Provide a text description of the elements in error state and the reason for the error. For example:
      * List empty fields that are required
      * Explain that an input is in the wrong format and describe the correct format
      * Explain that an input is not in the list of acceptable values and either list the acceptable values or describe the rule for acceptable values
    * Use `aria-invalid` to indicate a field has failed validation if it is not indicated to all users by some other means. Pair it with `aria-describedby` to point to the error message.
      * For example:
        * add `aria-invalid` to fields labeled invalid by an icon so to indicated it is invalid to screen readers. 
        * its not necessary to use for `required` fields as they are automatically labeled invalid by the browser when not filled
    * When displaying a modal error alert use `role="alertdialog"` to explain the modal is an alert.
    * Use `role="alert"` on error message elements to have AT be immediately aware of changes to the element. This is the same as setting `aria-live="assertive"`. If you want the user to be alerted of the change after the current task is completed then use `aria-live="polite"`.
* 3.3.2 – **Labels or Instructions** - Label elements and give instructions
  * About
    * Clearly label input elements and describe the input that is expected
  * Suggetions
	* Use `aria-label`, `aria-labelledby`, or `aria-describedby` to describe the input.
	  * `aria-labelledby` can be very useful to combine existing screen text to fully describe the input. See [example](https://www.w3.org/TR/WCAG20-TECHS/ARIA9.html#ARIA9-ex1).
	* Use `role="group"` to group related elements and text. 
	* Use `<fieldset>` to connect a group of checkboxes or radio buttons. Include a descriptive `<legend>` tag at the top.
	* Position field labels close to fields they describe
	* Include input format in text description. For example, date format (mm/dd/yy).
	* For single element forms, you can use an appropriate submit button name next to the element to indicate the purpose of the element. For example, a search box with the following button labeled "Search".
* 4.1.1 – **Parsing** - No major code errors
  * About
    * Some AT can have issues when encountering markup that is not valid or well formed, even though the application (e.g. web browser) may be able to interpret and display correctly for most users.
  * Suggetions
    * Check HTML tags are correctly closed
    * HTML attributes are not duplicated and have values where ones are necessary
    * Use an HTML validation tool such as the online https://validator.w3.org/ or use an offline tool such as [HTMLHint](https://htmlhint.io/) which plugins for VSCode and other code editors
* 4.1.2 – **Name, Role, Value** - Build all elements for accessibility
  * About
    * All user interface components can have their name and role programmatically determined.
    * All user interface components can have their state, value, and properties programmatically set (wherever users are allowed to change such elements).
    * User agents should be notified of changes to the user interface components.
  * Suggetions
    * Use `aria-label` when visible labels are not possible.
    * For a component where the default role and properties do not match the component's, use appropriate values for `aria-*` and `role` attributes. It is important to include other `aria-*` attributes that match the state of the element for the `role`.
      * Example:
        * A `<span>` tag is used as a checkbox, so it was given `role="checkbox"`, `aria-checked="false"` and `aria-labelledby="checkbox-label"`.
    * If using `<frame>` or `<iframe>`, give it a title as to help users know if they want to access the contents.


### 2.3.2. Suggestions By Type and Other Tips

The suggestions in this section are designed for easy reference when developing. It includes all of the suggestions from the previous section and some new coding suggestions. In an effort to reduce duplicate suggestions some general rules are abstracted and placed higher on the list. Please scan the whole list for all suggestions that could relate to what is being developed. For example, an image can use the Image section, but also the Text Description section. 

#### General Suggestions

- Element use and/or purpose should be indicated by the markup or by `role` and `aria-label` attributes.
- Only elements that can be interacted with should be focusable via tabbing. 
  - Buttons, form elements, menu items, etc. should be focusable.
  - Paragraphs, spans, divs, etc. should only be focusable if clicking on them triggers an event.
- Interactable elements should perform predictably
  - When a user changes the state of an element, that state should persist when the user leaves that element, wherever this makes sense.
  - Input boxes keep the value that users last set
  - Links and buttons change to a "clicked" state, but otherwise don't change the value of clicking again
- `aria-live` and `role="alert"`
- Use Semantic HTML Tags wherever possible
- Make sure all HTML Tags are properly closed. The Browser will often handle things correctly, but AT may have additional issues.

* For control elements, use things such as size, shape, location, and text to convey the control's purpose for users of varying levels of assistive technology.
    * For information, convey the reason for the difference of color. For example, saying "Error" before the error message, not just displaying the text in red.
    * Foreground and background colors should have a contrast ratio of at least 3:1 to be visible for low-visibility users. 
    * More generally, information conveyed through visual means should also be indicated through text that can be used for low-visibility assistive technologies.

#### Text Descriptions

- For any element that does not have a visible text description it should have a value for one of the following:
  - `aria-label` - accepts text. Use only if the description is not repeated elsewhere on the page.
  - `aria-labelledby` - accepts `id` of another element that gives a label. [[more info about aria-labelledby](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA10.html)]
  - `aria-describedby` - accepts `id` of another element that gives a detailed description. If you supply this attribute it should also have one of the other attributes.
  - `alt` - if an image (see Image section)

Browsers create an accessibility tree from the DOM and this tree has a priority for determining the text used as the elements name. In Chrome the priority is:
1. `aria-labelledby`
2. `aria-label`
4. `<label for="xxx">` - only for use with inputs
5. `<input placeholder="xxx">` - only for use with inputs
6. `title` - not recommended since AT support is not consistent

**Note:** `aria-describedby` does not appear in this list because text for `aria-describedby` is read after the name and element type to give more information about the element and not to name the element. 

#### Tab Index

Outside of extreme cases, an element should only have a `tabindex` value of -1 or 0.

- An element should have `tabindex=0` value only if **ALL** of the following are true:
  - The element is not using semantic markup that by default has the element focusable.
  - The user can interact with the element, either changing its value (e.g. input) or using it to trigger an action (e.g. button). By extension, the element must not be disabled

- An element should have `tabindex=-1` value if **ANY** of the following are true:
  - The element uses markup that by default can be tabbed to, but it should not be.
  - The element's tab accessibility should be temporarily disabled or is only focused on programmatically. For example, an error message box when it does not content text.

#### Inputs and Clickable Elements

- All Inputs and Clickable elements
  - Use semantic markup that makes sense for the purpose
    - `<a>` tags for navigation to a location on the same or another page.
    - `<button>` tags for other actions
    - form elements that match the usage.
  - If semantic markup cannot be used appropriately, then use the appropriate `role` attribute. Consulte the [MDN ARIA Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles)
  - If using a `role` attribute other than the default, determine `aria-*` attributes related the to that role and assign meaningful values
    - E.g. `role="progressbar"` should be accompanied by `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and optionally with `aria-valuetext`. Consult Section 1.5 ARIA Attributes.
  - Form elements should be predictable, only changing due to user input and persisting that value when the user leaves. 
  - For key related events, use `onkeydown`, instead of `onkeypress`, to trap key press events. IE does not fire keypress events for non-alphanumeric keys.
- Buttons
  - text should be descriptive of the action that will be performed
  - if no text (e.g. an icon) it should have `aria-label` or `aria-labelledby` attribute
- Select Elements
  - Users may select the wrong item accidentally, so its good to pair it with a submit button rather than automatically sending actions. 
  - For example, a meeting calendar does not create the meeting when selecting the date, only after clicking a submit button at the end of the form.



#### Images
* Images that have meaning
	* `alt` attribute. Good rules for `alt` text are: be accurate; be succinct; and don't be redundant. 
    * `longdesc` attribute if the description is very long and should not always be read.
    * `aria-describedby` attribute, similar to `aria-labelledby`, but for when its a detailed description and not just a label.
* Images that have no meaning (e.g. section separators)
	* set `alt=""`

Deciding the `alt` text of an image is a common issue for websites and so there are some good resources to help. Here are two excellent resources:
- (A11y Project - Using alt text properly)[https://a11yproject.com/posts/alt-text/]
- (SiteImprove - Accessibility: Image Alt text best practices)[https://support.siteimprove.com/hc/en-gb/articles/115000013031-Accessibility-Image-Alt-text-best-practices]

#### Hide from Screen Reader

If something should not be read by a screen reader, any of the following can be used:
- CSS
 - `display: none`
 - `visibility: hidden`
 - `<input hidden>`

#### Only for Screen Reader

If something should only be read by a screen reader (not visible to other users), here is a common method
```
.screenreader {
	position: absolute;
	left: -10000px;
	width: 1px;
	height: 1px;
	overflow: hidden;
}
```

#### Modals
All modals should have headers 

#### Headings
If semantic tags cannot be used then set an appropriate `aria-level` value

#### iFrames and Applets

- Always supply a helpful title
	- Users should know the content of complex components like iFrames and Applets before they attempt to have screen readers dive into their contents.

#### Make Meaningful Groups
* if multiple elements have the same role, `aria-label` or `aria-labelledby` shoud be used to say how they are different.
      * group items with `role=group`, `role=radiogroup`, or `role=rowgroup` to connect elements that are related that are not in otherwise meaningful groupings. For example, when working with multi-part inputs like a phone number:
      	```
      		<div role="group" aria-labelledby="phone"> 
      			<span id="phone">Phone Number</span>
				<input type="text" aria-required="true" title="Area Code" />-
      			<input type="text" aria-required="true" title="Local Phone Number" />
      		</div>
      * use `role=region` for when other roles do not make sense. Combine with `aria-label` or `aria-labelledby` to indicate the type of region.




### 2.3.3 Checklist

- [ ] Todo

## 2.4. Component Usage

This list, together with Section 2.1.1, completes WCAG Level A guidelines. This section is ...

* 1.2.1 – **Audio-only and Video-only (Pre-recorded)** - Provide an alternative to video-only and audio-only content
* 1.2.2 – **Captions (Pre-recorded)** - Provide captions for videos with audio
* 1.2.3 – **Audio Description or Media Alternative (Pre-recorded)** - Video with audio has a second alternative
* 1.3.1 – **Info and Relationships** - Logical structure
  * Suggestions
    
* 1.3.3 – **Sensory Characteristics** - Use more than one sense for instructions
  * About
    * Reference to page elements should include more than just sensory description, they should also include text
      * For example, "Click the round button" is not enough information, but "Click on the round button labeled Go" is enough information for assistive technologies
* 1.4.2 – **Audio Control** - Don’t play audio automatically
  * About
    * If a long audio clip is playing it can affect the usability of the whole site for those that use screen readers.
  * Suggetions
    * For any audio that automatically plays on page load it should have the ability to pause and/or mute the audio
* 2.2.1 – **Timing Adjustable** - Time limits have user controls
  * About
    * Users with disabilities may require additional time to complete tasks
  * Suggetions
    * Allow users to set their own timeout duration at the beginning of the task
      * For example, allowing users to change a default step timer from 1 minute to 10 minutes.
    * Allow users to turn off time limits
      * For example, allowing users to turn of session timeout
* 2.2.2 – **Pause, Stop, Hide** - Provide user controls for moving content
  * About
    * Content that moves, blinks, or scrolls can be be difficult for some users to read and can also be problematic for screen readers.
    * This applies to Moving, Blinking, and Scrolling content that meets the following criteria:
      * starts automatically
      * lasts for more than 5 seconds
      * is presented in parallel with other content
    * This applies to Auto-updating content that meets the following criteria:
      * starts automatically
      * is presented in parallel with other content
  * Suggetions
    * Allow content to be paused and restarted from where it was paused
    * Allow users to choose the duration of auto-updating
    * Do not have elements that blink for more than 5 seconds
    * Allow users to disable all or some distracting animations
 * 2.3.1 – **Three Flashes or Below** - No content flashes more than three times per second
   * About
     * Seizures can be triggered in some users if content flashes too rapidly.
   * Suggetions
     * Keep flashing content to no more than 3 flashes per second.
     * Restrict flashing content to a small size
     * Reduce the contrast for flashing content
     * Allow users to prevent flashing from starting
     * Allow users to slow down the rate of flashing
   * Testing
     * Use the [Trace Center Photosensitive Epilepsy Analysis Tool (PEAT)](http://trace.umd.edu/peat), a Widows only application.
* 2.4.1 – **Bypass Blocks** - Provide a ‘Skip to Content’ link
  * About
  * Suggetions
* 2.4.2 – **Page Titled** - Use helpful and clear page titles
  * About
  * Suggetions
* 2.4.4 – **Link Purpose (In Context)** - Every link’s purpose is clear from its context
  * About
  * Suggetions
    * For links that go to other pages or documents, you can just use the title of that page or document
    * If the link is in a sentence then the sentence can describe the purpose for the link
* 3.1.1 – **Language of Page** - Page has a language assigned
  * About
  * Suggetions

## 2.5. Content Creation

### Checklist
- [Princeton Content Creator Checklist](https://ux.princeton.edu/accessibility/accessibility-checklist)
- [MSU A11y Checklist](https://webaccess.msu.edu/Help_and_Resources/checklist.html)



### Tips and Practice
- Skip navigation links https://yuque.antfin-inc.com/fusion-design-system/a11y/ko3ewf
- ARIA Live Regions https://yuque.antfin-inc.com/fusion-design-system/a11y/aarvbc
- Focus-visible Polyfill（blue outline）
- Show or not show https://yuque.antfin-inc.com/fusion-design-system/a11y/pt3ro8
- Suggestions https://yuque.antfin-inc.com/fusion-design-system/a11y/litc6p

# 3. Testing and Development
## 3.1. Tools and Resources
### 3.1.1. During Development
* `react-axe` npm package
* [Access Lint](https://www.accesslint.com/) - GitHub tool to lint changes on PRs
* [ESLint JSX A11y Plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y) - ESLint plugin for static analysis of JSX files for a11y compliance. 

### 3.1.2. Vision Tools
* [I want to see like the colour blind](https://chrome.google.com/webstore/detail/i-want-to-see-like-the-co/jebeedfnielkcjlcokhiobodkjjpbjia) - Chrome plugin for testing various types of color blindness.
* [Color Contrast Analyzer](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll) - Chrome Plugin - great tool to test which text has enough contrast with its background to be legible. Can choose specific WCAG specification to test for. Can even be used for text in images.
* [NoCoffee](https://accessgarage.wordpress.com/) - Chrome plugin for testing the most visual disabilities of any other tool. Can test Low Acuity, Low Contrast Sensitivity, Colorblindness, Obstructed visual field, and other issues. Gives tester complete control over the severity of the issues.
* [Tota11y](https://khan.github.io/tota11y/) - Page bookmark that allows for interactive page element testing for things like contrast, heading structure, and link test. But the most intersting feature is the experimental "Screen Reader Wand" that shows what a screen reader would read when the mouse cursor hovers over a page element. Use with caution and only as a first step for screen reader testing.


### 3.1.3. Screen Readers
- Apple VoiceOver
- NVDA for Windows
- JAWS for Windows
- ChromeVox for Chrome Browser

### 3.1.4. Keyboard Accessiblity
- https://keycode.info/

### 3.1.5. Automated Checks 
* [axe-core](https://github.com/dequelabs/axe-core) - Javascript library for automated a11y testing. Used by many companies and in many tools, such as Chrome DevTools. Also has a [Chrome Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)
* Chrome DevTools - Audit - Accessibility
* [Axe Chrome Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) - Plugin to run axe-core a11y tests.
* [Siteimprove Chrome Plugin](https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc) - Thorough tests with similar results to Chrome Audit and Axe, but what sets it apart is the analysis organization. The results are organized by the WCAG guidelines and can easily be adjust conformance level. Each error has a clickable link to highlight the element in the Chrome DevTools, so making changes is easy.
* [Akbar](http://howlowck.github.io/Akbar/) - Page bookmark that allows for testing a few vision related disabilities disables all non-keyboard actions for keyboard only testing.
* [Axegrinder](https://github.com/claflamme/axegrinder) - A CLI tool to crawl pages of a website and test each using Axe-core rules.

## 3.2. How to Test
### 3.2.1. Benchmarking a Site

It is helpful to have a number benchmark to understand how accessible a site is and to track progress. Raw counts of issues is simple and useful, but can be misleading if there lots of minor issues that don't have a major affect on the a11y. Weighted scoring solves this problem, but there are few tools that give such scores. The best and easiest is Chome's Lighthouse Accessibility Audit, and is a good place to start. 

Below is just one process of benchmarking a website's a11y.

1. Chrome Developer Tools -> Audit
   - **Desktop + Mobile** - have benchmarks for both mobile and desktop to capture both responsiveness and test mobile/desktop unique code for a11y
   - **Test all unique templates** - A good method is to make sure each page template should be covered by at least one audit. 
   - **Minimize Duplicate Audits** - Its also best to minimize the duplication to accurately capture improvements.
   - **Take Screenshots** - Screenshots are also useful as a reminder for the url and content at the time of the audit.
   - **Download the Audit** - The results of the audit can be downloaded in JSON format for later reference. 
   - **Capture Scores in Spreadsheet** - Use a spreadsheet to list and aggregate scores
2. Axe Chrome Plugin
   - **Same pages** - retest the pages testing with Chrome Audit
   - **Capture Raw Scores** - Record only the raw number of rule violations, both the types and the total count. E.g. if a page only had 10 violations of img-alt-text rule, the record would show 1 rule with 10 violations. The specific rules and elements that fail are useful, but harder to capture (other tools like axegrinder or axe-cli can help, but require additional processing to be useful).
3. Manual Testing
   - Keyboard Access
     - **List operable elements that cannot be reached or appear out of order** - Each operable element on a page should be accessible via the keyboard's 'Tab' key and in a logical order.
   - Screen Readers
     - **List operable elements with redundant or incorrect information** - elements should clearly and succinctly describe the selected element
     - Steps 1 and 2 will fail elements with no text description, but cannot check the content. 
     - A simple example is when an image's `alt` text has the word "image", which is redundant.
     - A more complex example is when an image is used as an icon inside of a button and the `alt` attribute of the image is the same as text inside the button, which results in the text being read twice by the screen reader.

### 3.2.2. Vision Issues
- Screen Reader
- 


## 3.3. 

# 4. More Resources
* [https://a11yproject.com/checklist.html](https://a11yproject.com/checklist.html)
* [https://a11yproject.com/resources](https://a11yproject.com/resources)
* [https://github.com/dequelabs/react-axe](https://github.com/dequelabs/react-axe)
* [https://dequeuniversity.com/rules/axe/3.1](https://dequeuniversity.com/rules/axe/3.1)
* [https://www.deque.com/blog/writing-automated-tests-accessibility/](https://www.deque.com/blog/writing-automated-tests-accessibility/)
* [https://github.com/dequelabs/axe-core/blob/master/doc/API.md](https://github.com/dequelabs/axe-core/blob/master/doc/API.md)
* [https://www.w3.org/WAI/fundamentals/accessibility-intro/](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
* [https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0)
* [ARIA: states_and_properties](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties)
* [How do they go online: China Internet Visually Impaired Users Basic Situation Report|2016]()
* [Alibaba Accessibility Docs](http://docs.alibaba.net/accessibility/docs/info/README.md)
* https://siteimprove.com/en-us/content-accessibility/accessibility-quiz/
* https://a11y-style-guide.com/style-guide/


[^1]: https://www.nydailynews.com/news/national/ny-news-dominos-pizza-blind-website-app-20190116-story.html)
[^2]: https://news.yahoo.com/ada-website-accessibility-suits-flood-055618044.html
[^3]: https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html
[^4]: https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html
[^5]: https://www.w3.org/TR/WCAG20-TECHS/G21.html
