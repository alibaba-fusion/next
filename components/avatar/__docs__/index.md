# Avatar

-   category: Components
-   family: DataDisplay
-   chinese: 头像
-   type: 展示
-   version: 1.19

---

头像组件，1.19.0+ 版本支持。

## 何时使用

用来代表用户或事物，支持图片、图标或字符展示。

## API

### Avatar

| 参数      | 说明                                                                              | 类型               | 默认值      |
| ------- | ------------------------------------------------------------------------------- | ---------------- | -------- |
| size    | 头像的大小                                                                           | Enum/Number      | 'medium' |
| shape   | 头像的形状<br/><br/>**可选值**:<br/>'circle'(圆形)<br/>'square'(方形)                       | Enum             | 'circle' |
| icon    | icon 类头像的图标类型，可设为 Icon 的 `type` 或 `ReactNode`                                   | ReactNode/String | -        |
| src     | 图片类头像的资源地址                                                                      | String           | -        |
| onError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为<br/><br/>**签名**:<br/>Function() => void | Function         | -        |
| alt     | 图像无法显示时的 alt 替代文本                                                               | String           | -        |
| srcSet  | 图片类头像响应式资源地址                                                                    | String           | -        |
