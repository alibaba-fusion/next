# Button

-   category: Components
-   family: General
-   chinese: 按钮
-   type: 表单

---

按钮用于开始一个即时操作。

## 何时使用

-   标记一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## API

### Button

| 参数      | 说明                        | 类型                                                                                                                                              | 默认值                                                                                                         | 是否必填 |
| --------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| type      | 按钮的类型                  | 'primary' \| 'secondary' \| 'normal'                                                                                                              | 'normal'                                                                                                       |          |
| size      | 按钮的尺寸                  | ButtonSize                                                                                                                                        | 'medium'                                                                                                       |          |
| icons     | 按钮中可配置的 Icon         | { loading?: React.ReactNode }                                                                                                                     | -                                                                                                              |          |
| iconSize  | 按钮中 Icon 的尺寸          | \| number<br/> \| 'xxs'<br/> \| 'xs'<br/> \| 'small'<br/> \| 'medium'<br/> \| 'large'<br/> \| 'xl'<br/> \| 'xxl'<br/> \| 'xxxl'<br/> \| 'inherit' | 默认根据 size 自动映射，映射规则：<br/>size:large -\> `small`<br/>size:medium -\> `xs`<br/>size:small -\> `xs` |          |
| htmlType  | button 标签的 type 值       | 'submit' \| 'reset' \| 'button'                                                                                                                   | 'button'                                                                                                       |          |
| component | 最终渲染的 jsx 标签标签类型 | 'button' \| 'a' \| React.ComponentType\<unknown>                                                                                                  | -                                                                                                              |          |
| loading   | 设置按钮的载入状态          | boolean                                                                                                                                           | false                                                                                                          |          |
| ghost     | 是否为幽灵按钮              | true \| false \| 'light' \| 'dark'                                                                                                                | false                                                                                                          |          |
| text      | 是否为文本按钮              | boolean                                                                                                                                           | false                                                                                                          |          |
| warning   | 是否为警告按钮              | boolean                                                                                                                                           | false                                                                                                          |          |
| disabled  | 是否禁用                    | boolean                                                                                                                                           | false                                                                                                          |          |
| onClick   | 点击按钮的回调              | React.MouseEventHandler                                                                                                                           | -                                                                                                              |          |

### Button.Group

| 参数 | 说明                           | 类型       | 默认值 | 是否必填 |
| ---- | ------------------------------ | ---------- | ------ | -------- |
| size | 统一设置 Button 组件的按钮大小 | ButtonSize | -      |          |

### ButtonSize

按钮类型

```typescript
export type ButtonSize = 'small' | 'medium' | 'large';
```

## 无障碍键盘操作指南

| 按键  | 说明            |
| :---- | :-------------- |
| Enter | 触发onClick事件 |
| SPACE | 触发onClick事件 |
