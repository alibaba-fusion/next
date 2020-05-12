# Form

-   category: Components
-   family: DataEntry
-   cols: 1
-   type: Form

---

## Guide

### When To Use

Form layout, validation, data submission operations used.

### Note

-   Components do not use the keyword `nodeName` as the name and input`s id.
-   Form uses `size="medium"` by default and controls the size of all components in the FormItem. If you want to modify the component size, set `<FormItem size="small" >`.
-   In the vertical layout form, if the text (generally `<p>` tag) or component deviates upwards, it can be adjusted with `className="next-form-text-align"`
-   It must be a component wrapped directly by `<FormItem>` to display the error message. If the error did not show, check whether there are multiple levels DOM. For example, `<FormItem><div><Input/></div></FormItem>` is unable to display error message.
-   could use `<Form field={false}>` to close inner field

## API

### Form

| Param | Descripiton  | Type  | Default Value |
| ------------------ | ------------------------------------------- | ---------- | ------------ |
| inline             | Inline form                                 | Boolean    | -           |
| size               | Customization of a single Item's size takes precedence over Form's size, and when the component is used with Item, the component itself sets the size attribute to be invalid. <br><br>**option**:<br>'large'<br>'medium'<br>'small' | Enum     | 'medium'                                               |
| fullWidth           | Set a single Item's is full width                                                                                                 | Boolean            | -     |
| labelAlign     | To set the position align of label. If labelcol and wrappercol are not set, the value is 'top' by default<br><br>**option**:<br>'top'<br>'left'<br>'inset'  | Enum     | 'left'           |
| labelTextAlign | To set the position align of text in label<br><br>**option**:<br>'left'<br>'right'                  | Enum     | -                   |
| field          | By the initialization of `new Field(this)`, set to Form right. Do not ignore specify this, when use validation on form.             | any      | -             |
| saveField      | save field which create by Form<br><br>**签名**:<br>Function() => void | Function | func.noop |
| labelCol       | Controls the labelCol of the first-level Item     | Object   | -             |
| wrapperCol     | Controls the wrapperCol of the first-level Item   | Object   | -             |
| onSubmit       | Trigget when submit with `htmlType="submit"` in the form <br><br>**signatures**:<br>Function() => void                                                     | Function | function preventDefault(e) {     e.preventDefault(); } |
| children       | Children components                | any      | -       |
| value          | The value data of then form               | Object   | -    |
| onChange       | Callback fuction trigget on form changed<br><br>**signatures**:<br>Function() => void | Function | func.noop |
| component      | The html tag to be rendered | String   | 'form' |
| responsive     | use ResponsiveGrid                                                                                                                                                                                                         | Boolean         | -                                                      |

### Form.Item

> Passing the wrapCol labelCol will use the Grid auxiliary layout; `labelAlign = 'top'` will force the Grid to be disabled

| Param | Descripiton  | Type  | Default Value |
| ------------------ | ------------------------------------------- | --------- | ----- |
| label          | To set the label of item                                        | ReactNode | -     |
| size           | Customization of Item's own size takes precedence over Form's size. when Form and Item both set the size, the component itself sets the size attribute to be invalid。<br><br>**option**:<br>'large', 'small', 'medium' | Enum      | -     |
| fullWidth           |  Set Input item is full width                                                                                                 | Boolean            | -     |
| labelCol       | To set label's layout same as `<Col>` setting the span offset, such as {span:8,offset:16}. It only valid in vertical forms.      | Object    | -     |
| wrapperCol     | When you need to set the layout style for the input control, use this property, use the same with the labelCol                            | Object    | -     |
| help           | Custom prompt information, if not set, it will be automatically generated according to the check rule.                                       | ReactNode | -     |
| validateState  | Set the validation state, if not set, it will be automatically generated according to the check rule<br><br>**option**:<br>'error'<br>'success'<br>'loading'             | Enum      | -     |
| hasFeedback    | Used with the validateState property, whether to display the success/loading check status icon. Currently only Input support                                                  | Boolean   | false |
| extra          | Additional prompt information, similar to help, can be used when error messages and prompts are required to appear at the same time. Behind the error message                                                                       | ReactNode | -     |
| labelAlign     | Position align of label. If labelcol and wrappercol are not set, the value is 'top' by default<br><br>**option**:<br>'top'<br>'left'<br>'inset'                                                     | Enum      | -     |
| labelTextAlign | Position align of label's text<br><br>**option**:<br>'left'<br>'right'                                                       | Enum      | -     |
| required | [validation] cannot be empty | Boolean | - |
| asterisk | required asterisk is displayed | Boolean | true |
| requiredMessage | required custom error message | String | - |
| requiredTrigger | required Custom Trigger | String/Array | - |
| min | [validation] Minimum | Number | - |
| minMessage | custom error message for `min`| String | - |
| minTrigger | Custom trigger mode for `min` | String/Array | - |
| max | [validation] Maximum | Number | - |
| maxMessage | custom error message for `max` | String | - |
| maxTrigger | Custom Trigger for `max` | String/Array | - |
| minLength | [validation] Minimum string length / Minimum number of arrays | Number | - |
| minLengthMessage | custom error message for `minLength`| String | - |
| minLengthTrigger | Custom Trigger for `minLength` | String/Array | - |
| maxLength | [validation] Max Length of String/Maximum Number of Arrays | Number | - |
| maxLengthMessage | custom error message for `maxLength` | String | - |
| maxLengthTrigger | Custom Trigger for `maxLength` | String/Array | - |
| length | [validation] exact length of string / exact number of arrays | Number | - |
| lengthMessage | custom error message for `length` | String | - |
| lengthTrigger | custom trigger method for `length` | String/Array | - |
| pattern | custom pattern yourself | pattern | -     |
| format | [validation] four common patterns<br><br>**optional values**:<br>'number', 'email', 'url', 'tel' | Enum | - |
| formatMessage | custom error message for `format` | String | - |
| formatTrigger | custom trigger mode for `format` | String/Array | - |
| validator | [validation] custom validation function <br><br> **signature **:<br>Function() => void | Function | - |
| autoValidate | validate while value changed | Boolean            | -     |
| colSpan             | when responsive，how many columns it takes                                                                                                       | Number             | -     |
| labelWidth          | when responsiv and label is left, what's the label's width                                                                                          | String/Number      | -     |


### Form.Reset

> Inherit the Button API

| Param | Descripiton  | Type  | Default Value |
| --------- | -------------------------------------------- | -------- | --------- |
| names     | Specify the reset field                                     | Array    | -         |
| onClick   | Callback function trigget after click Reset-Button<br><br>**signatures**:<br>Function() => void | Function | func.noop |
| toDefault | Reset to default value                                        | Boolean  | -         |
| field     | Specify field (No need in Form )                    | Object   | -         |

### Form.Submit

> Inherit the Button API

| Param | Descripiton  | Type  | Default Value |
| -------- | -------------------------------------------- | ------------- | --------- |
| onClick  | Callback function trigget after click Submit-Button <br><br>**signatures**:<br>Function(value: Object, errors: Object) => void<br>**params**:<br>_value_: {Object} values<br>_errors_: {Object} errors<br>_field_: {class} Field instance | Function      | func.noop |
| validate | Specify the field, whitch need validate.            | Boolean/Array | -         |
| field    | Specify field (No need in Form )                    | Object        | -         |

### Form.Error

> custom error message

| Param | Descripiton  | Type  | Default Value |
| -------- | ------------------------- | ------------------ | --- |
| name     | Specify the reset field                         | String/Array       | -   |
| field    | Specify field (No need in Form )   | Object             | -   |
| children | can be a ReactNode or a function(errors, state)                   | ReactNode/Function | -   |


## About Validation

-   Suggest put FormItem as one component, convenient error prompt follow component display.
-   The component must be the first child of the FormItem.
-   See the more validation's rules for the `Field` component documentation.

## Complex Form

If your form scene is very complex, such as dynamic rendering, a large number of fields, complex data structures, complex linkage verification, you can consider using uform, uform has encapsulated all the fusion components, to ensure that you use it out of the box
