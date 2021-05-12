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
-   受浏览器限制，本功能支持到IE10+，IE下[#参考文档](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673531(v=vs.85>))。
## FAQ

### 为何嵌套自定义组件，间距没有生效？

自定义组件的间距是 `Box` 算出来，同style透传给子组件的，因此子组件需要至少透传style属性；
```jsx
// wrong
function Foo () {
  return <div />;
}

// correct
function Foo ({style}) {
  return <div style={style} />;
}
```

## API

### Box

| 参数        | 说明                                                                                                                              | 类型                             | 默认值    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------ |
| flex      | 布局属性                                                                                                                            | Array&lt;Number/String>/Number | -      |
| direction | 布局方向，默认为 column ，一个元素占据一整行<br><br>**可选值**:<br>'row', 'column', 'row-reverse'                                                    | Enum                           | column |
| wrap      | 是否折行 支持IE11+                                                                                                                    | Boolean                        | false  |
| spacing   | 元素之间的间距 [bottom&top, right&left]                                                                                                | Array&lt;Number>/Number        | -      |
| margin    | 设置 margin [bottom&top, right&left]                                                                                              | Array&lt;Number>/Number        | -      |
| padding   | 设置 padding [bottom&top, right&left]                                                                                             | Array&lt;Number>/Number        | -      |
| justify   | 沿着主轴方向，子元素们的排布关系 （兼容性同 justify-content ）<br><br>**可选值**:<br>'flex-start', 'center', 'flex-end', 'space-between', 'space-around' | Enum                           | -      |
| align     | 垂直主轴方向，子元素们的排布关系 （兼容性同 align-items ）<br><br>**可选值**:<br>'flex-start', 'center', 'flex-end', 'baseline', 'stretch'               | Enum                           | -      |
| component | 定制标签名， 例如section等                                                                                                               | String                         | 'div'  |
