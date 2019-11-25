# Box

-   category: Components
-   family: General
-   chinese: 弹性布局
-   type: Display

---

## Develop Guide

### When to Use
Flex box, added in 1.19.0+

## API

### Box

| Param     | Description                                                                         | Type       | Default Value      |
| --------- | -------------------------------------------------------------------------------- | ------------------------------ | ------ |
| flex      | flex                                                                             | Array<Number/String>/Number | -      |
| direction | direction, column by default<br><br>**options**:<br>'row', 'column'                    | Enum                           | column |
| wrap      | wrap or not                                                                             | Boolean                        | false  |
| spacing   | spaceing of element [bottom&top, right&left]                                                 | Array<Number>/Number        | -      |
| margin    | css margin [bottom&top, right&left]                                               | Array<Number>/Number        | -      |
| padding   | css padding [bottom&top, right&left]                                              | Array<Number>/Number        | -      |
| device    | device for responsive <br><br>**options**:<br>'phone'(手机)<br>'tablet'(平板)<br>'desktop'(PC) | Enum                           | -      |
| justify   | justify-content <br><br>**options**:<br>'flex-start', 'center', 'flex-end', 'space-between', 'space-around' | Enum                           | -      |
| align     | align-items <br><br>**options**:<br>'flex-start', 'center', 'flex-end', 'baseline', 'stretch'               | Enum                           | -      |
