# Form

-   category: Components
-   family: DataEntry
-   chinese: 表单
-   cols: 1
-   type: 表单

---

## 开发指南

### 何时使用

表单布局、校验、数据提交操作时用到。 组件的设计思想可以看这篇文章 <a href="https://zhuanlan.zhihu.com/p/56280821" target="_blank">https&#x3A;//zhuanlan.zhihu.com/p/56280821</a>

### 注意事项

-   组件不要使用关键字 `nodeName` 作为 name、id
-   Form 默认使用 `size=medium`, 并且会控制 FormItem 内所有组件的size。 如果想修改组件的size `<FormItem size="small" >`
-   在垂直表单中如果文字（一般 `<p>` 标签）或者组件向上偏离，可以通过 `className="next-form-text-align"` 辅助调整
-   必须是被 `<FormItem>`直接包裹的组件才能展示校验错误提示。如果界面不展示错误信息，请检查是否有多个层级。 比如 `<FormItem><div><Input/></div></FormItem>` 是无法展示校验信息的。
-   可以通过 `<Form field={false}>` 来关闭数据获取，变成一个纯布局组件

## API

### Form

| 参数                      | 说明                                                                                                                                                                                                                                      | 类型              | 默认值                                                    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------ |
| inline                  | 内联表单                                                                                                                                                                                                                                    | Boolean         | -                                                      |
| size                    | 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。<br><br>**可选值**:<br>'large'(大)<br>'medium'(中)<br>'small'(小)                                                                                                    | Enum            | 'medium'                                               |
| fullWidth               | 单个 Item 中表单类组件宽度是否是100%                                                                                                                                                                                                                 | Boolean         | -                                                      |
| labelAlign              | 标签的位置, 如果不设置 labelCol 和 wrapperCol 那么默认是标签在上<br><br>**可选值**:<br>'top'(上)<br>'left'(左)<br>'inset'(内)                                                                                                                                     | Enum            | 'left'                                                 |
| labelTextAlign          | 标签的左右对齐方式<br><br>**可选值**:<br>'left'(左)<br>'right'(右)                                                                                                                                                                                    | Enum            | -                                                      |
| field                   | field 实例, 传 false 会禁用 field                                                                                                                                                                                                             | any             | -                                                      |
| saveField               | 保存 Form 自动生成的 field 对象<br><br>**签名**:<br>Function() => void                                                                                                                                                                             | Function        | func.noop                                              |
| labelCol                | 控制第一级 Item 的 labelCol                                                                                                                                                                                                                   | Object          | -                                                      |
| wrapperCol              | 控制第一级 Item 的 wrapperCol                                                                                                                                                                                                                 | Object          | -                                                      |
| onSubmit                | form内有 `htmlType="submit"` 的元素的时候会触发<br><br>**签名**:<br>Function() => void                                                                                                                                                               | Function        | function preventDefault(e) {     e.preventDefault(); } |
| children                | 子元素                                                                                                                                                                                                                                     | any             | -                                                      |
| value                   | 表单数值                                                                                                                                                                                                                                    | Object          | -                                                      |
| onChange                | 表单变化回调<br><br>**签名**:<br>Function(values: Object, item: Object) => void<br>**参数**:<br>_values_: {Object} 表单数据<br>_item_: {Object} 详细<br>_item.name_: {String} 变化的组件名<br>_item.value_: {String} 变化的数据<br>_item.field_: {Object} field 实例 | Function        | func.noop                                              |
| component               | 设置标签类型                                                                                                                                                                                                                                  | String/Function | 'form'                                                 |
| device                  | 预设屏幕宽度<br><br>**可选值**:<br>'phone', 'tablet', 'desktop'                                                                                                                                                                                  | Enum            | 'desktop'                                              |
| responsive              | 是否开启内置的响应式布局 （使用ResponsiveGrid）                                                                                                                                                                                                         | Boolean         | -                                                      |
| isPreview               | 是否开启预览态                                                                                                                                                                                                                                 | Boolean         | -                                                      |
| useLabelForErrorMessage | 是否使用 label 替换校验信息的 name 字段                                                                                                                                                                                                              | Boolean         | -                                                      |

### Form.Item

> 手动传递了 wrapCol labelCol 会使用 Grid 辅助布局; labelAlign='top' 会强制禁用 Grid

| 参数                      | 说明                                                                                                                      | 类型                 | 默认值   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------ | ----- |
| label                   | label 标签的文本                                                                                                             | ReactNode          | -     |
| size                    | 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。<br><br>**可选值**:<br>'large', 'small', 'medium' | Enum               | -     |
| labelCol                | label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效                                             | Object             | -     |
| wrapperCol              | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol                                                                                       | Object             | -     |
| help                    | 自定义提示信息，如不设置，则会根据校验规则自动生成.                                                                                              | ReactNode          | -     |
| extra                   | 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面                                                                    | ReactNode          | -     |
| validateState           | 校验状态，如不设置，则会根据校验规则自动生成<br><br>**可选值**:<br>'error'(失败)<br>'success'(成功)<br>'loading'(校验中)<br>'warning'(警告)               | Enum               | -     |
| hasFeedback             | 配合 validateState 属性使用，是否展示 success/loading 的校验状态图标, 目前只有Input支持                                                         | Boolean            | false |
| children                | node 或者 function(values)                                                                                                | ReactNode/Function | -     |
| fullWidth               | 单个 Item 中表单类组件宽度是否是100%                                                                                                 | Boolean            | -     |
| labelAlign              | 标签的位置, 如果不设置 labelCol 和 wrapperCol 那么默认是标签在上<br><br>**可选值**:<br>'top'(上)<br>'left'(左)<br>'inset'(内)                     | Enum               | -     |
| labelTextAlign          | 标签的左右对齐方式<br><br>**可选值**:<br>'left'(左)<br>'right'(右)                                                                    | Enum               | -     |
| required                | [表单校验] 不能为空                                                                                                             | Boolean            | -     |
| asterisk                | required 的星号是否显示                                                                                                        | Boolean            | -     |
| requiredMessage         | required 自定义错误信息                                                                                                        | String             | -     |
| requiredTrigger         | required 自定义触发方式                                                                                                        | String/Array       | -     |
| min                     | [表单校验] 最小值                                                                                                              | Number             | -     |
| max                     | [表单校验] 最大值                                                                                                              | Number             | -     |
| minmaxMessage           | min/max 自定义错误信息                                                                                                         | String             | -     |
| minmaxTrigger           | min/max 自定义触发方式                                                                                                         | String/Array       | -     |
| minLength               | [表单校验] 字符串最小长度 / 数组最小个数                                                                                                 | Number             | -     |
| maxLength               | [表单校验] 字符串最大长度 / 数组最大个数                                                                                                 | Number             | -     |
| minmaxLengthMessage     | minLength/maxLength 自定义错误信息                                                                                             | String             | -     |
| minmaxLengthTrigger     | minLength/maxLength 自定义触发方式                                                                                             | String/Array       | -     |
| length                  | [表单校验] 字符串精确长度 / 数组精确个数                                                                                                 | Number             | -     |
| lengthMessage           | length 自定义错误信息                                                                                                          | String             | -     |
| lengthTrigger           | length 自定义触发方式                                                                                                          | String/Array       | -     |
| pattern                 | 正则校验                                                                                                                    | any                | -     |
| patternMessage          | pattern 自定义错误信息                                                                                                         | String             | -     |
| patternTrigger          | pattern 自定义触发方式                                                                                                         | String/Array       | -     |
| format                  | [表单校验] 四种常用的 pattern<br><br>**可选值**:<br>'number', 'email', 'url', 'tel'                                                 | Enum               | -     |
| formatMessage           | format 自定义错误信息                                                                                                          | String             | -     |
| formatTrigger           | format 自定义触发方式                                                                                                          | String/Array       | -     |
| validator               | [表单校验] 自定义校验函数<br><br>**签名**:<br>Function() => void                                                                     | Function           | -     |
| validatorTrigger        | validator 自定义触发方式                                                                                                       | String/Array       | -     |
| autoValidate            | 是否修改数据时自动触发校验                                                                                                           | Boolean            | -     |
| device                  | 预设屏幕宽度<br><br>**可选值**:<br>'phone', 'tablet', 'desktop'                                                                  | Enum               | -     |
| colSpan                 | 在响应式布局模式下，表单项占多少列                                                                                                       | Number             | -     |
| labelWidth              | 在响应式布局下，且label在左边时，label的宽度是多少                                                                                          | String/Number      | 100   |
| isPreview               | 是否开启预览态                                                                                                                 | Boolean            | -     |
| renderPreview           | 预览态模式下渲染的内容<br><br>**签名**:<br>Function(value: any) => void<br>**参数**:<br>_value_: {any} 根据包裹的组件的 value 类型而决定            | Function           | -     |
| useLabelForErrorMessage | 是否使用 label 替换校验信息的 name 字段                                                                                              | Boolean            | -     |

### Form.Submit

> 继承 Button API

| 参数       | 说明                                                                                                                                                                           | 类型            | 默认值       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| onClick  | 点击提交后触发<br><br>**签名**:<br>Function(value: Object, errors: Object, field: class) => void<br>**参数**:<br>_value_: {Object} 数据<br>_errors_: {Object} 错误数据<br>_field_: {class} 实例 | Function      | func.noop |
| validate | 是否校验/需要校验的 name 数组                                                                                                                                                           | Boolean/Array | -         |
| field    | 自定义 field (在 Form 内不需要设置)                                                                                                                                                    | Object        | -         |

### Form.Reset

> 继承 Button API

| 参数        | 说明                                           | 类型       | 默认值       |
| --------- | -------------------------------------------- | -------- | --------- |
| names     | 自定义重置的字段                                     | Array    | -         |
| onClick   | 点击提交后触发<br><br>**签名**:<br>Function() => void | Function | func.noop |
| toDefault | 返回默认值                                        | Boolean  | -         |
| field     | 自定义 field (在 Form 内不需要设置)                    | Object   | -         |

### Form.Error

> 自定义错误展示

| 参数       | 说明                                           | 类型                 | 默认值 |
| -------- | -------------------------------------------- | ------------------ | --- |
| name     | 表单名                                          | String/Array       | -   |
| field    | 自定义 field (在 Form 内不需要设置)                    | Object             | -   |
| children | 自定义错误渲染, 可以是 node 或者 function(errors, state) | ReactNode/Function | -   |

## 关于校验

-   建议一个FormItem放一个组件, 方便错误提示跟随组件展示
-   组件必须是FormItem的第一层子元素
-   详细校验请查看 `Field` 组件文档的 rules

## 复杂表单场景

如果您的表单场景非常复杂，比如动态渲染，大量字段，复杂数据结构，复杂联动校验，可以考虑使用 [uform](https://github.com/alibaba/uform)，uform已经封装了所有fusion组件，保证您开箱即用
