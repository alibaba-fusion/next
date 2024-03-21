# Button

-   category: Components
-   family: General
-   chinese: 按钮
-   type: Form

---

Button used to trigger an action.

## Guide

### When To Use

Buttons are used for emphasizing important functions on your page.

## API

### Button

| Param     | Description                           | Type                                                                                                                                              | Default Value                                                                                                  | Required |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| type      | Typeo of button                       | 'primary' \| 'secondary' \| 'normal'                                                                                                              | 'normal'                                                                                                       |          |
| size      | Size of button                        | ButtonSize                                                                                                                                        | 'medium'                                                                                                       |          |
| icons     | Available icons in button             | { loading?: React.ReactNode }                                                                                                                     | -                                                                                                              |          |
| iconSize  | Size of icon in button                | \| number<br/> \| 'xxs'<br/> \| 'xs'<br/> \| 'small'<br/> \| 'medium'<br/> \| 'large'<br/> \| 'xl'<br/> \| 'xxl'<br/> \| 'xxxl'<br/> \| 'inherit' | 默认根据 size 自动映射，映射规则：<br/>size:large -\> `small`<br/>size:medium -\> `xs`<br/>size:small -\> `xs` |          |
| htmlType  | Original html type for button element | 'submit' \| 'reset' \| 'button'                                                                                                                   | 'button'                                                                                                       |          |
| component | The jsx tag to be rendered            | 'button' \| 'a' \| React.ComponentType\<unknown>                                                                                                  | -                                                                                                              |          |
| loading   | Loading state of a button             | boolean                                                                                                                                           | false                                                                                                          |          |
| ghost     | Setting ghost button                  | true \| false \| 'light' \| 'dark'                                                                                                                | false                                                                                                          |          |
| text      | Is text button                        | boolean                                                                                                                                           | false                                                                                                          |          |
| warning   | Is warning button                     | boolean                                                                                                                                           | false                                                                                                          |          |
| disabled  | Is disabled                           | boolean                                                                                                                                           | false                                                                                                          |          |
| onClick   | Callback of click event               | React.MouseEventHandler                                                                                                                           | -                                                                                                              |          |

### Button.Group

| Param | Description | Type       | Default Value | Required |
| ----- | ----------- | ---------- | ------------- | -------- |
| size  | -           | ButtonSize | -             |          |

### ButtonSize

```typescript
export type ButtonSize = 'small' | 'medium' | 'large';
```

## ARIA and KeyBoard

| KeyBoard | Descripiton               |
| :------- | :------------------------ |
| Enter    | Trigger the onClick event |
| SPACE    | Trigger the onClick event |
