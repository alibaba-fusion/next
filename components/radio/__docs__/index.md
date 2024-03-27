# Radio

-   category: Components
-   family: DataEntry
-   chinese: 单选框
-   type: 表单

---

单选框。

## 何时使用

-   单选框允许用户从一个数据集中选择单个选项。面向用户需要并排看到所有的可选项，并使用单选框进行排他操作的场景。

-   对于选项过多的场景，考虑使用下拉列表，相对于显示所有的选项占用更少的空间。

## API

### Radio

| 参数           | 说明                                                                                                                                           | 类型                                                                    | 默认值 | 是否必填 |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------ | -------- |
| id             | 组件 input 的 id                                                                                                                               | string                                                                  | -      |          |
| checked        | 设置 radio 是否选中                                                                                                                            | boolean                                                                 | -      |          |
| defaultChecked | 设置 radio 是否默认选中                                                                                                                        | boolean                                                                 | -      |          |
| label          | 通过属性配置 label                                                                                                                             | React.ReactNode                                                         | -      |          |
| onChange       | 选中状态变化时触发的事件<br/><br/>**签名**:<br/>**参数**:<br/>_checked_: 是否选中<br/>_event_: DOM 事件                                        | (checked: boolean, event: React.ChangeEvent\<HTMLInputElement>) => void | -      |          |
| onMouseEnter   | 鼠标进入 enter 事件                                                                                                                            | (e: React.MouseEvent\<HTMLInputElement>) => void                        | -      |          |
| onMouseLeave   | 鼠标离开事件                                                                                                                                   | (e: React.MouseEvent\<HTMLInputElement>) => void                        | -      |          |
| disabled       | radio 是否被禁用                                                                                                                               | boolean                                                                 | -      |          |
| value          | radio 的 value                                                                                                                                 | RadioValue                                                              | -      |          |
| name           | 表单项 name                                                                                                                                    | string                                                                  | -      |          |
| isPreview      | 是否开启预览态                                                                                                                                 | boolean                                                                 | -      |          |
| renderPreview  | 自定义预览态模式下渲染的内容<br/><br/>**签名**:<br/>**参数**:<br/>_checked_: 是否选中<br/>_props_: 所有传入的参数<br/>**返回值**:<br/>渲染内容 | (checked: boolean, props: RadioProps) => React.ReactNode                | -      |          |

### Radio.Group

| 参数          | 说明                                                                                                                                               | 类型                                                                        | 默认值   | 是否必填 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------- | -------- |
| name          | 表单 name                                                                                                                                          | string                                                                      | -        |          |
| value         | radio group 的选中项的值（受控）                                                                                                                   | RadioValue                                                                  | -        |          |
| defaultValue  | radio group 的默认值（非受控）                                                                                                                     | RadioValue                                                                  | -        |          |
| component     | 设置标签类型                                                                                                                                       | React.ElementType                                                           | 'div'    |          |
| onChange      | 选中值改变时的事件<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 选中的值<br/>_event_: Dom 事件对象                                                | (value: RadioValue, event: React.ChangeEvent\<HTMLInputElement>) => void    | -        |          |
| disabled      | 表示 radio 被禁用                                                                                                                                  | boolean                                                                     | -        |          |
| shape         | 展示类型                                                                                                                                           | 'normal' \| 'button'                                                        | -        |          |
| size          | 与 `shape` 属性配套使用，shape 设为 button 时有效                                                                                                  | 'large' \| 'medium' \| 'small'                                              | 'medium' |          |
| dataSource    | 可选项列表                                                                                                                                         | Array\<RadioValue> \| Array\<RadioValueItem>                                | -        |          |
| children      | 通过子元素方式设置内部 radio                                                                                                                       | React.ReactNode                                                             | -        |          |
| direction     | 子项目的排列方式                                                                                                                                   | 'hoz' \| 'ver'                                                              | -        |          |
| isPreview     | 是否开启预览态                                                                                                                                     | boolean                                                                     | -        |          |
| renderPreview | 自定义预览态模式下渲染的内容<br/><br/>**签名**:<br/>**参数**:<br/>_previewed_: 预览的数据项<br/>_props_: 预览项的参数<br/>**返回值**:<br/>渲染内容 | (previewed: RadioValueItem \| object, props: GroupProps) => React.ReactNode | -        |          |

### RadioValueItem

| 参数     | 说明 | 类型            | 默认值 | 是否必填 |
| -------- | ---- | --------------- | ------ | -------- |
| label    | -    | React.ReactNode | -      |          |
| value    | -    | RadioValue      | -      | 是       |
| disabled | -    | boolean         | -      |          |

### RadioValue

```typescript
export type RadioValue = string | number | boolean;
```

## 无障碍键盘操作指南

| 按键 | 说明                                                                                                         |
| :--- | :----------------------------------------------------------------------------------------------------------- |
| Tab  | 获取焦点，如果没有任何选中就是第一个，之后可以空格选中。如果有选中的就聚焦到选中项，然后通过左右键直接选中。 |
