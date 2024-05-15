# ResponsiveGrid

-   category: Components
-   family: General
-   chinese: 栅格布局
-   type: Display

---

## Develop Guide

### When to Use

Based on `display: grid`, added in 1.19.0+, doesn't support IE yet.

## API

### ResponsiveGrid

| Param     | Description                                  | Type                              | Default Value | Required |
| --------- | -------------------------------------------- | --------------------------------- | ------------- | -------- |
| device    | Device for responsive C                      | 'phone' \| 'tablet' \| 'desktop'  | 'desktop'     |          |
| columns   | How many columns in total, 12 by default     | number \| string                  | '12'          |          |
| gap       | Gap among each cell [bottom&top, right&left] | Spacing                           | -             |          |
| component | The html tag to be rendered                  | keyof React.JSX.IntrinsicElements | 'div'         |          |
| dense     | Fill as closely as possible without spaces   | boolean                           | 'false'       |          |

### ResponsiveGrid.Cell

| Param     | Description                       | Type                                                                                         | Default Value | Required |
| --------- | --------------------------------- | -------------------------------------------------------------------------------------------- | ------------- | -------- |
| colSpan   | In hoz, how many columns it takes | \| number<br/> \| {<br/> desktop?: number;<br/> tablet?: number;<br/> phone?: number;<br/> } | -             |          |
| rowSpan   | In ver, how many rows it takes    | number                                                                                       | -             |          |
| component | The html tag to be rendered       | keyof React.JSX.IntrinsicElements                                                            | 'div'         |          |
