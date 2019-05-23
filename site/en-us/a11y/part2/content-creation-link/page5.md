# 5. Design Suggestion

This article mainly points out some of the designs we should avoid and summarizes some design suggestions.

## 1. Elements that are both hoverable and clickable should be carefully designed

The same element can be hover or click, but the effect can be different and can be problematic for users who use screen-reader.

Take the login button as an example, when my mouse hovers over the login button, the login menu bar will appear, and when we click the login button, we can enter the personal center. Such a design makes the page more concise for users with normal vision.

But for screen-reader user, it is not so good, because they can only operate through the keyboard, the keyboard can't simulate mouse hover. So the above page is not user friendly for screen-reader user.


## 2. Use text instead of text images


When browsing the web, we occasionally encounter the situation that the image cannot be loaded. At this time, a better phenomenon is that the substitute text appears instead of unloaded image, so that we know the meaning of the image that should have appeared. This can be done by adding alt attribute in img.

In the process of web accessibility development, we also need to add the description of alt attribute to the image, so that screen-reader user can understand the content represented by the image on the page.

Considering the user experience of the screen-reader user, we need to follow the following rules when filling in the alt attribute of the image:

* Accurately convey the content and function of the image.
* Keep it as simple as possible.
* Don't provide duplicate information
* Don't use redundant statements like "image of...".
* Don't add line breaks to alt.
* For meaningless image, alt="".
* WCAG regulations that text images are not allowed. If it is an English image, it should be converted into the corresponding English text. For the image description, it should be converted into the corresponding text.

Therefore, the `image + alt` way is only applicable to a small amount of text, and a large amount of text content needs to be placed at the position of the text.

## 3. Reference

* [Alternative Text](https://webaim.org/techniques/alttext/)

