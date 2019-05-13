# Web Accessibility Standard

# 1. WCAG 2.1
The W3C created a set of guidelines for making websites more accessible, the Web Content Accessibility Guidelines (WCAG) . The most recent version of the WCAG is version 2.1, which exists at the [official website](https://www.w3.org/TR/WCAG21/). This is used as the definitive guide for making a website accessible.

A very good introduction to the WCAG and Accessibility in general can be found [here](https://www.w3.org/WAI/fundamentals/accessibility-intro/).

There is currently no chinese translation for WCAG 2.1, but there is for WCAG 2.0 and it can be found [here](https://www.w3.org/Translations/WCAG20-zh/).

# 2. Types of A11y
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
