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
`<span className="next-sr-only">unread messages</span>`

## API

### Badge

| Param         | Description                                                                                                            | Type             | Default Value | Required |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------- | -------- |
| children      | Content of Badge based on                                                                                              | React.ReactNode  | -             |          |
| count         | Number to display, display overflowCount+ when count is greater than overflowCount, display none when count equal to 0 | number \| string | 0             |          |
| content       | Customized node content                                                                                                | React.ReactNode  | -             |          |
| overflowCount | Max number to display                                                                                                  | number \| string | 99            |          |
| dot           | Display a red dot, not a number                                                                                        | boolean          | false         |          |
| showZero      | Whether to show count when count is 0                                                                                  | boolean          | false         |          |
