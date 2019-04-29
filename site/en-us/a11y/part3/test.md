# How to Test

# 1. Benchmarking a Site

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

# 2. Vision Issues
- Screen Reader
-
