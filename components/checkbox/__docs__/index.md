# Checkbox

-   category: Components
-   family: DataEntry
-   chinese: 复选按钮
-   type: 表单

---

多选框。

## 何时使用

-   在一组可选项中进行多项选择时；
-   单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## API

### Checkbox

| 参数                 | 说明                                                                                                                                         | 类型                                                                | 默认值 | 是否必填 | 支持版本 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------ | -------- | -------- |
| className            | 自定义类名                                                                                                                                   | string                                                              | -      |          | -        |
| id                   | checkbox id, 挂载在 input 上                                                                                                                 | string                                                              | -      |          | -        |
| style                | 自定义内联样式                                                                                                                               | React.CSSProperties                                                 | -      |          | -        |
| checked              | 选中状态                                                                                                                                     | boolean                                                             | -      |          | -        |
| value                | checkbox 的 value                                                                                                                            | IValue                                                              | -      |          | -        |
| name                 | name                                                                                                                                         | string                                                              | -      |          | -        |
| defaultChecked       | 默认选中状态                                                                                                                                 | boolean                                                             | false  |          | -        |
| disabled             | 禁用                                                                                                                                         | boolean                                                             | -      |          | -        |
| label                | 通过属性配置 label，                                                                                                                         | React.ReactNode                                                     | -      |          | -        |
| indeterminate        | Checkbox 的中间状态，只会影响到 Checkbox 的样式，并不影响其 checked 属性                                                                     | boolean                                                             | -      |          | -        |
| defaultIndeterminate | Checkbox 的默认中间态，只会影响到 Checkbox 的样式，并不影响其 checked 属性                                                                   | boolean                                                             | false  |          | -        |
| onChange             | 状态变化时触发的事件                                                                                                                         | (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void  | -      |          | -        |
| onMouseEnter         | 鼠标进入 enter 事件                                                                                                                          | (e: React.MouseEvent<HTMLInputElement \| HTMLLabelElement>) => void | -      |          | -        |
| onMouseLeave         | 鼠标离开 Leave 事件                                                                                                                          | (e: React.MouseEvent<HTMLInputElement \| HTMLLabelElement>) => void | -      |          | -        |
| isPreview            | 是否为预览态                                                                                                                                 | boolean                                                             | false  |          | 1.19     |
| renderPreview        | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>**参数**:<br/>_checked_: 是否选中<br/>_props_: 所有传入的参数<br/>**返回值**:<br/>定制渲染内容 | (checked: boolean, props: CheckboxProps) => React.ReactNode         | -      |          | 1.19     |

### Checkbox.Group

| 参数          | 说明                                                                                                                                                                       | 类型                                                                                                                                                     | 默认值 | 是否必填 | 支持版本 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- | -------- |
| className     | 自定义类名                                                                                                                                                                 | string                                                                                                                                                   | -      |          | -        |
| style         | 自定义内联样式                                                                                                                                                             | React.CSSProperties                                                                                                                                      | -      |          | -        |
| disabled      | 整体禁用                                                                                                                                                                   | boolean                                                                                                                                                  | -      |          | -        |
| dataSource    | 可选项列表                                                                                                                                                                 | Array<IValue> \| Array<CheckboxData>                                                                                                                     | -      |          | -        |
| value         | 被选中的值列表                                                                                                                                                             | IValue[] \| IValue                                                                                                                                       | -      |          | -        |
| defaultValue  | 默认被选中的值列表                                                                                                                                                         | IValue[] \| IValue                                                                                                                                       | -      |          | -        |
| name          | name                                                                                                                                                                       | string                                                                                                                                                   | -      |          | -        |
| children      | 通过子元素方式设置内部 checkbox                                                                                                                                            | React.ReactNode                                                                                                                                          | -      |          | -        |
| onChange      | 选中值改变时的事件                                                                                                                                                         | (value: IValue[], e: React.ChangeEvent<HTMLInputElement>) => void                                                                                        | -      |          | -        |
| direction     | 子项目的排列方式                                                                                                                                                           | 'hoz' \| 'ver'                                                                                                                                           | -      |          | -        |
| itemDirection | [废弃] 子项目的排列方式                                                                                                                                                    | 'hoz' \| 'ver'                                                                                                                                           | -      |          | -        |
| isPreview     | 是否为预览态                                                                                                                                                               | boolean                                                                                                                                                  | -      |          | 1.19     |
| renderPreview | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>**参数**:<br/>_previewed_: 预览值 [\{label: '', value:''\},...]<br/>_props_: 所有传入的参数<br/>**返回值**:<br/>定制渲染内容 | (<br/> previewed: {<br/> label: string \| React.ReactNode;<br/> value: string \| React.ReactNode;<br/> }[],<br/> props: object<br/> ) => React.ReactNode | -      |          | 1.19     |

### IValue

```typescript
export type IValue = string | number | boolean;
```

### CheckboxData

```typescript
export type CheckboxData = {
    value: IValue;
    label?: React.ReactNode;
    disabled?: boolean;
    [propName: string]: unknown;
};
```

## 无障碍键盘操作指南

| 按键  | 说明             |
| :---- | :--------------- |
| SPACE | 选择或取消当前项 |
