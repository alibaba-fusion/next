# Badge

-   category: Components
-   family: DataDisplay
-   chinese: 徽标数
-   type: Display

---

## Develop Guide

### When to Use

When we receive a new message, or our app/plugin/module should be update or upgrade.

## API

### Badge

| Property            | Description                                                   | Type            | Default  |
| ------------- | ----------------------------------------------------- | ------------- | ----- |
| children      | content of Badge based on                                               | ReactNode     | -     |
| count         | number to display, display ${overflowCount}+ when count is greater than overflowCount, display none when count equal to 0 | Number/String | 0     |
| content       | customized node content                                               | ReactNode     | -     |
| overflowCount | max number to display                                              | Number/String | 99    |
| dot           | display a red dot, not a number                                        | Boolean       | false |

