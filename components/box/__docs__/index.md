# Box

-   category: Components
-   family: General
-   chinese: 弹性布局
-   type: 展示
-   version: 1.19

---

弹性布局组件，支持版本1.19.0+。

## 何时使用

-   用于弹性布局, 通过`display: flex`实现。
-   受浏览器限制，本功能支持到IE10+，IE下[#参考文档](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673531(v=vs.85%3E)>)。

## FAQ

### 为何嵌套自定义组件，间距没有生效？

自定义组件的间距是 `Box` 算出来，同style透传给子组件的，因此子组件需要至少透传style属性；

```jsx
// wrong
function Foo() {
    return <div />;
}

// correct
function Foo({ style }) {
    return <div style={style} />;
}
```

## API

### Box

| 参数      | 说明                                                            | 类型                                                                                                  | 默认值   | 是否必填 |
| --------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------- | -------- |
| flex      | 同 CSS 属性 `flex`，支持数组方式设置                            | \| CSS.Property.Flex<br/> \| [CSS.Property.FlexGrow, CSS.Property.FlexShrink, CSS.Property.FlexBasis] | -        |          |
| direction | 布局方向，同 CSS 属性 `flex-direction`                          | CSS.Property.FlexDirection                                                                            | 'column' |          |
| wrap      | 是否折行                                                        | boolean                                                                                               | false    |          |
| spacing   | 元素之间的间距                                                  | Spacing                                                                                               | -        |          |
| margin    | 容器外间距                                                      | Spacing                                                                                               | -        |          |
| padding   | 容器内间距                                                      | Spacing                                                                                               | -        |          |
| justify   | 沿着主轴方向，子元素们的排布关系，同 CSS 属性 `justify-content` | CSS.Property.JustifyContent                                                                           | -        |          |
| align     | 沿交叉轴方向，子元素们的排布关系，同 CSS 属性 `align-items`     | CSS.Property.AlignItems                                                                               | -        |          |
| component | 定制 JSX 标签名                                                 | keyof React.JSX.IntrinsicElements                                                                     | 'div'    |          |

### Spacing

```typescript
export type Spacing =
    | number
    | [topAndBottom: number, rightAndLeft: number]
    | [top: number, rightAndLeft: number, bottom: number]
    | [top: number, right: number, bottom: number, left: number];
```
