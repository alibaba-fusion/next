# Badge

-   category: Components
-   family: DataDisplay
-   chinese: 徽标数
-   type: Display

---

## Develop Guide

### When to Use

When we receive a new message, or our app/plugin/module should be update or upgrade.

### Accessibility
You can add class as below, so that messages will not appear on pages, but can be read by screen reader.
`<span className="next-visually-hidden">unread messages</span>`

## API

### Badge

| Param | Descripiton  | Type  | Default Value |
| ------------- | ----------------------------------------------------- | ------------- | ----- |
| children      | content of Badge based on                                               | ReactNode     | -     |
| count         | number to display, display ${overflowCount}+ when count is greater than overflowCount, display none when count equal to 0 | Number/String | 0     |
| content       | customized node content                                               | ReactNode     | -     |
| overflowCount | max number to display                                              | Number/String | 99    |
| dot           | display a red dot, not a number                                        | Boolean       | false |