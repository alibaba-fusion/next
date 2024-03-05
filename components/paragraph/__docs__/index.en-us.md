# Paragraph (UNSAFE)

-   category: Components
-   family: General
-   chinese: 段落
-   type: Basic

---

## Guide

Paragraphs are used to control the overall text visual of the page, and are mainly represented by the line spacing and text size.

## When to use

-   Page text display requires a consistent experience.
-   Generally, the row spacing between general short text and long text is different, and short text spacing will be smaller (usually less than three lines).

## API

### Paragraph

| Param     | Description                                                         | Type                | Default Value | Required |
| --------- | ------------------------------------------------------------------- | ------------------- | ------------- | -------- |
| className | Additional class name that will be appended to the root DOM element | string              | -             |          |
| type      | How to display the paragraph                                        | 'long' \| 'short'   | 'long'        |          |
| size      | The size of the component.                                          | 'medium' \| 'small' | 'medium'      |          |
