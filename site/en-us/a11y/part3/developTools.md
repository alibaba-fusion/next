# Tools and Resources
# 1. During Development
* `react-axe` npm package
* [Access Lint](https://www.accesslint.com/) - GitHub tool to lint changes on PRs
* [ESLint JSX A11y Plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y) - ESLint plugin for static analysis of JSX files for a11y compliance.

# 2. Vision Tools
* [I want to see like the colour blind](https://chrome.google.com/webstore/detail/i-want-to-see-like-the-co/jebeedfnielkcjlcokhiobodkjjpbjia) - Chrome plugin for testing various types of color blindness.
* [Color Contrast Analyzer](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll) - Chrome Plugin - great tool to test which text has enough contrast with its background to be legible. Can choose specific WCAG specification to test for. Can even be used for text in images.
* [NoCoffee](https://accessgarage.wordpress.com/) - Chrome plugin for testing the most visual disabilities of any other tool. Can test Low Acuity, Low Contrast Sensitivity, Colorblindness, Obstructed visual field, and other issues. Gives tester complete control over the severity of the issues.
* [Tota11y](https://khan.github.io/tota11y/) - Page bookmark that allows for interactive page element testing for things like contrast, heading structure, and link test. But the most intersting feature is the experimental "Screen Reader Wand" that shows what a screen reader would read when the mouse cursor hovers over a page element. Use with caution and only as a first step for screen reader testing.


# 3. Screen Readers
- Apple VoiceOver
- NVDA for Windows
- JAWS for Windows
- ChromeVox for Chrome Browser

# 4. Keyboard Accessiblity
- https://keycode.info/

# 5. Automated Checks
* [axe-core](https://github.com/dequelabs/axe-core) - Javascript library for automated a11y testing. Used by many companies and in many tools, such as Chrome DevTools. Also has a [Chrome Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)
* Chrome DevTools - Audit - Accessibility
* [Axe Chrome Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) - Plugin to run axe-core a11y tests.
* [Siteimprove Chrome Plugin](https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc) - Thorough tests with similar results to Chrome Audit and Axe, but what sets it apart is the analysis organization. The results are organized by the WCAG guidelines and can easily be adjust conformance level. Each error has a clickable link to highlight the element in the Chrome DevTools, so making changes is easy.
* [Akbar](http://howlowck.github.io/Akbar/) - Page bookmark that allows for testing a few vision related disabilities disables all non-keyboard actions for keyboard only testing.
* [Axegrinder](https://github.com/claflamme/axegrinder) - A CLI tool to crawl pages of a website and test each using Axe-core rules.
