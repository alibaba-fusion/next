# Box

-   category: Components
-   family: General
-   chinese: 弹性布局
-   type: Display

---

## Develop Guide

### When to Use

Flex box, added in 1.19.0+, support IE10+
`display: flex` of IE docs: https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673531(v=vs.85)

## API

### Box

| Param     | Description                                                             | Type                                                                                                  | Default Value | Required |
| --------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------- | -------- |
| flex      | Same as css attribute `flex`, support array mode setting                | \| CSS.Property.Flex<br/> \| [CSS.Property.FlexGrow, CSS.Property.FlexShrink, CSS.Property.FlexBasis] | -             |          |
| direction | Layout direction, same as css attribute `flex                           | CSS.Property.FlexDirection                                                                            | 'column'      |          |
| wrap      | Wrap or not                                                             | boolean                                                                                               | false         |          |
| spacing   | Element spacing                                                         | Spacing                                                                                               | -             |          |
| margin    | Container outer spacing                                                 | Spacing                                                                                               | -             |          |
| padding   | Container inner spacing                                                 | Spacing                                                                                               | -             |          |
| justify   | The alignment of items on the main axis, same as css attribute `justify | CSS.Property.JustifyContent                                                                           | -             |          |
| align     | The alignment of items on the cross axis, same as css attribute `align  | CSS.Property.AlignItems                                                                               | -             |          |
| component | Custom JSX tag name                                                     | keyof React.JSX.IntrinsicElements                                                                     | 'div'         |          |

### Spacing

```typescript
export type Spacing =
    | number
    | [topAndBottom: number, rightAndLeft: number]
    | [top: number, rightAndLeft: number, bottom: number]
    | [top: number, right: number, bottom: number, left: number];
```
