# Form

-   category: Components
-   family: DataEntry
-   chinese: 表单
-   cols: 1
-   type: 表单

---

表单组件。

## 何时使用

表单布局、校验、数据提交操作时用到。 组件的设计思想可以看这篇文章 <a href="https://zhuanlan.zhihu.com/p/56280821" target="_blank">https&#x3A;//zhuanlan.zhihu.com/p/56280821</a>

## 如何使用

-   组件不要使用关键字 `nodeName` 作为 name、id
-   Form 默认使用 `size=medium`, 并且会控制 FormItem 内所有组件的size。 如果想修改组件的size `<FormItem size="small" >`
-   在垂直表单中如果文字（一般 `<p>` 标签）或者组件向上偏离，可以通过 `className="next-form-text-align"` 辅助调整
-   必须是被 `<FormItem>`直接包裹的组件才能展示校验错误提示。如果界面不展示错误信息，请检查是否有多个层级。 比如 `<FormItem><div><Input/></div></FormItem>` 是无法展示校验信息的。
-   可以通过 `<Form field={false}>` 来关闭数据获取，变成一个纯布局组件

### 关于校验

-   建议一个FormItem放一个组件, 方便错误提示跟随组件展示
-   组件必须是FormItem的第一层子元素
-   详细校验请查看 `Field` 组件文档的 rules

### 复杂表单场景

如果您的表单场景非常复杂，比如动态渲染，大量字段，复杂数据结构，复杂联动校验，可以考虑使用 [formily](https://github.com/alibaba/formily)，formily已经封装了所有fusion组件，保证您开箱即用

## API

### Form

| 参数                      | 说明                                                                                                                                                                                                | 类型                                                                                                                         | 默认值                                               | 是否必填 | 支持版本 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------- | -------- |
| inline                    | 内联表单                                                                                                                                                                                            | boolean                                                                                                                      | -                                                    |          | -        |
| size                      | 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。                                                                                       | 'large' \| 'medium' \| 'small'                                                                                               | medium                                               |          | -        |
| fullWidth                 | 单个 Item 中表单类组件宽度是否是 100%                                                                                                                                                               | boolean                                                                                                                      | -                                                    |          | -        |
| labelAlign                | 标签的位置，如果不设置 labelCol 和 wrapperCol 那么默认是标签在上                                                                                                                                    | 'top' \| 'left' \| 'inset'                                                                                                   | left                                                 |          | -        |
| labelTextAlign            | 标签的左右对齐方式                                                                                                                                                                                  | 'left' \| 'right'                                                                                                            | -                                                    |          | -        |
| field                     | field 实例，传 false 会禁用 field                                                                                                                                                                   | false \| NextField \| null                                                                                                   | -                                                    |          | -        |
| saveField                 | 保存 Form 自动生成的 field 对象                                                                                                                                                                     | (field?: NextField \| null) => void                                                                                          | func.noop                                            |          | -        |
| labelCol                  | 控制第一级 Item 的 labelCol                                                                                                                                                                         | ColProps                                                                                                                     | -                                                    |          | -        |
| wrapperCol                | 控制第一级 Item 的 wrapperCol                                                                                                                                                                       | ColProps                                                                                                                     | -                                                    |          | -        |
| onSubmit                  | form 内有 `htmlType="submit"` 的元素的时候会触发                                                                                                                                                    | FormEventHandler\<HTMLFormElement>                                                                                           | function preventDefault(e) \{ e.preventDefault(); \} |          | -        |
| children                  | 子元素                                                                                                                                                                                              | ReactNode                                                                                                                    | -                                                    |          | -        |
| value                     | 表单数值                                                                                                                                                                                            | FieldValues                                                                                                                  | -                                                    |          | -        |
| onChange                  | 表单变化回调<br/><br/>**签名**:<br/>**参数**:<br/>_values_: 表单数值<br/>_item_: 表单项，item.name：发生变化的组件的名称，item.value：变化的组件的新数据，item.field：与变化的组件关联的 field 实例 | (<br/> values: FieldValues \| undefined,<br/> item: { name: string; value: string; field: NextField \| null }<br/> ) => void | func.noop                                            |          | -        |
| component                 | 设置标签类型                                                                                                                                                                                        | ElementType                                                                                                                  | 'form'                                               |          | -        |
| fieldOptions              | field 配置项，在 Form 初始化 field 实例时会用到                                                                                                                                                     | FieldOption                                                                                                                  | -                                                    |          | -        |
| device                    | 预设屏幕宽度                                                                                                                                                                                        | 'desktop' \| 'phone' \| 'tablet'                                                                                             | 'desktop'                                            |          | -        |
| responsive                | 是否开启内置的响应式布局（使用 ResponsiveGrid）                                                                                                                                                     | boolean                                                                                                                      | -                                                    |          | 1.19     |
| isPreview                 | 是否开启预览态                                                                                                                                                                                      | boolean                                                                                                                      | -                                                    |          | 1.19     |
| useLabelForErrorMessage   | 是否使用 label 替换校验信息的 name 字段                                                                                                                                                             | boolean                                                                                                                      | -                                                    |          | 1.20     |
| preferMarginToDisplayHelp | 倾向使用 item 的 margin 空间来展示 help                                                                                                                                                             | boolean                                                                                                                      | false                                                |          | 1.26.37  |
| colon                     | 表示是否显示 label 后面的冒号                                                                                                                                                                       | boolean                                                                                                                      | false                                                |          | 1.22     |
| disabled                  | 是否禁用                                                                                                                                                                                            | boolean                                                                                                                      | false                                                |          | -        |

### Form.Item

手动传递了 wrapCol labelCol 会使用 Grid 辅助布局; labelAlign='top' 会强制禁用 Grid

| 参数                      | 说明                                                                                                   | 类型                                           | 默认值 | 是否必填 | 支持版本 |
| ------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------ | -------- | -------- |
| labelCol                  | label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 \{span: 8, offset: 16\}，该项仅在垂直表单有效 | ColProps                                       | -      |          | -        |
| wrapperCol                | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol                                              | ColProps                                       | -      |          | -        |
| help                      | 自定义提示信息，如不设置，则会根据校验规则自动生成。                                                   | ReactNode                                      | -      |          | -        |
| name                      | 字段名，默认赋值给第一个子元素                                                                         | string                                         | -      |          | -        |
| extra                     | 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。位于错误信息后面       | ReactNode                                      | -      |          | -        |
| validateState             | 校验状态，如不设置，则会根据校验规则自动生成                                                           | 'error' \| 'success' \| 'loading' \| 'warning' | -      |          | -        |
| hasFeedback               | 配合 validateState 属性使用，是否展示 success/loading 的校验状态图标，目前只有 Input 支持              | boolean                                        | false  |          | -        |
| children                  | node 或者 function(values)                                                                             | ReactNode \| ((values: FieldValues) => void)   | -      |          | -        |
| fullWidth                 | 单个 Item 中表单类组件宽度是否是 100%                                                                  | boolean                                        | -      |          | -        |
| labelAlign                | 标签的位置，如果不设置 labelCol 和 wrapperCol 那么默认是标签在上                                       | 'top' \| 'left' \| 'inset'                     | -      |          | -        |
| labelTextAlign            | 标签的左右对齐方式                                                                                     | 'left' \| 'right'                              | -      |          | -        |
| required                  | [表单校验] 不能为空                                                                                    | boolean                                        | -      |          | -        |
| asterisk                  | required 的星号是否显示                                                                                | boolean                                        | -      |          | -        |
| requiredMessage           | required 自定义错误信息                                                                                | string                                         | -      |          | -        |
| requiredTrigger           | required 自定义触发方式，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...                 | string \| Array\<string>                       | -      |          | -        |
| min                       | [表单校验] 最小值                                                                                      | number                                         | -      |          | -        |
| max                       | [表单校验] 最大值                                                                                      | number                                         | -      |          | -        |
| minmaxMessage             | min/max 自定义错误信息                                                                                 | string                                         | -      |          | -        |
| minmaxTrigger             | min/max 自定义触发方式                                                                                 | string \| Array\<string>                       | -      |          | -        |
| minLength                 | [表单校验] 字符串最小长度 / 数组最小个数                                                               | number                                         | -      |          | -        |
| maxLength                 | [表单校验] 字符串最大长度 / 数组最大个数                                                               | number                                         | -      |          | -        |
| minmaxLengthMessage       | minLength/maxLength 自定义错误信息                                                                     | string                                         | -      |          | -        |
| minmaxLengthTrigger       | minLength/maxLength 自定义触发方式                                                                     | string \| Array\<string>                       | -      |          | -        |
| length                    | [表单校验] 字符串精确长度 / 数组精确个数                                                               | number                                         | -      |          | -        |
| lengthMessage             | length 自定义错误信息                                                                                  | string                                         | -      |          | -        |
| lengthTrigger             | length 自定义触发方式                                                                                  | string \| Array\<string>                       | -      |          | -        |
| pattern                   | 正则校验                                                                                               | unknown                                        | -      |          | -        |
| patternMessage            | pattern 自定义错误信息                                                                                 | string                                         | -      |          | -        |
| patternTrigger            | pattern 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...                    | string \| Array\<string>                       | -      |          | -        |
| format                    | [表单校验] 四种常用的 pattern                                                                          | 'number' \| 'email' \| 'url' \| 'tel'          | -      |          | -        |
| formatMessage             | format 自定义错误信息                                                                                  | string                                         | -      |          | -        |
| formatTrigger             | format 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...                     | string \| Array\<string>                       | -      |          | -        |
| validator                 | [表单校验] 自定义校验函数                                                                              | Validator                                      | -      |          | -        |
| validatorTrigger          | validator 自定义触发方式，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...                | string \| Array\<string>                       | -      |          | -        |
| autoValidate              | 是否修改数据时自动触发校验                                                                             | boolean                                        | -      |          | -        |
| device                    | 预设屏幕宽度                                                                                           | 'desktop' \| 'phone' \| 'tablet'               | -      |          | -        |
| colSpan                   | 在响应式布局模式下，表单项占多少列                                                                     | number                                         | -      |          | -        |
| labelWidth                | 在响应式布局下，且 label 在左边时，label 的宽度是多少                                                  | number \| string                               | 100    |          | -        |
| isPreview                 | 是否开启预览态                                                                                         | boolean                                        | -      |          | -        |
| renderPreview             | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 根据包裹的组件的 value 类型而决定 | (values: unknown) => unknown                   | -      |          | -        |
| errorMessageName          | 替代校验信息的 name 字段，useLabelForErrorMessage 开启的情况下比 label 优先级高                        | string                                         | -      |          | -        |
| useLabelForErrorMessage   | 是否使用 label 替换校验信息的 name 字段                                                                | boolean                                        | -      |          | -        |
| preferMarginToDisplayHelp | 倾向使用 item 的 margin 空间来展示 help                                                                | boolean                                        | false  |          | 1.26.37  |
| colon                     | 表示是否显示 label 后面的冒号                                                                          | boolean                                        | -      |          | -        |
| disabled                  | 是否禁用表单                                                                                           | boolean                                        | -      |          | -        |
| valueName                 | 子元素的 value 名称                                                                                    | string                                         | -      |          | -        |
| type                      | 表单类型                                                                                               | string                                         | -      |          | -        |

### Form.Submit

继承 Button API

| 参数     | 说明                                                                                                       | 类型                                                           | 默认值    | 是否必填 |
| -------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------- | -------- |
| onClick  | 点击提交后触发<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 数据<br/>_errors_: 错误数据<br/>_field_: 实例 | (value?: unknown, errors?: unknown, field?: NextField) => void | func.noop |          |
| validate | 是否校验/需要校验的 name 数组                                                                              | boolean \| Array\<string>                                      | -         |          |
| field    | 自定义 field (在 Form 内不需要设置)                                                                        | NextField                                                      | -         |          |

### Form.Reset

继承 Button API

| 参数      | 说明                                | 类型           | 默认值    | 是否必填 |
| --------- | ----------------------------------- | -------------- | --------- | -------- |
| names     | 自定义重置的字段                    | Array\<string> | -         |          |
| onClick   | 点击提交后触发                      | () => void     | func.noop |          |
| toDefault | 返回默认值                          | boolean        | -         |          |
| field     | 自定义 field (在 Form 内不需要设置) | NextField      | -         |          |

### Form.Error

自定义错误展示

| 参数     | 说明                                                     | 类型                                                                  | 默认值 | 是否必填 |
| -------- | -------------------------------------------------------- | --------------------------------------------------------------------- | ------ | -------- |
| name     | 表单名                                                   | string \| Array\<string>                                              | -      |          |
| field    | 自定义 field (在 Form 内不需要设置)                      | NextField                                                             | -      |          |
| children | 自定义错误渲染，可以是 node 或者 function(errors, state) | ReactNode \| ((errors: errorsGroup, state?: FieldState) => ReactNode) | -      |          |
