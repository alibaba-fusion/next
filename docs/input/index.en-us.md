# Input

-   category: Components
-   family: DataEntry
-   type: Form

---

## Development Guide

### When to Use

Form Input, use it with Form components usually.

## API

### Input

| Param | Descripiton  | Type  | Default Value |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| value           | current value  | String/Number | -         |
| size            | Size<br><br>option:<br>'small'<br>'medium'<br>'large'   | Enum          | 'medium'  |
| defaultValue    | inital value    | String/Number | -         |
| onChange        | callback when value changes<br><br>**signature**:<br>Function(value: String, e: Event) => void<br>**params**:<br>_value_: {String} data<br>_e_: {Event} DOM Event Object  | Function      | func.noop |
| onKeyDown       | callback when on key down<br><br>**signature**:<br>Function(e: Event, opts: Object) => void <br>**params**:<br>_e_: {Event} DOM Event Object<br>_opts_: {Object} extended information：<br> - opts.overMaxLength: {Boolean} input has reached max length<br> - opts.beTrimed: {Boolean} input whitespace has been trimed  | Function       | func.noop           |
| disabled        | disabled state  | Boolean       | false     |
| maxLength       | max length  | Number        | null      |
| hasLimitHint    | limit max num of characters  | Boolean       | false     |
| cutString       | when maxLength is set, auto cut string  | Boolean       | true      |
| readOnly        | read only, forbid editing    | Boolean       | false     |
| trim            | onChange will  auto trim text                                                                                      | Boolean       | false     |
| placeholder     | place holder  | String        | -         |
| onFocus         | callback when input get focused<br><br>**signature**:<br>Function(e: Event) => void <br>**params**:<br>_e_: {Event} DOM Event Object  | Function      | func.noop |
| onBlur          | callback when input lose focused<br><br>**signature**:<br>Function(e: Event) => void <br>**params**:<br>_e_: {Event} DOM Event Object  | Function      | func.noop |
| getValueLength  | define the  value length caculation<br><br>**signature**:<br>Function(value: String) => Number<br>**params**:<br>_value_: {String} Data<br>returns:<br>{Number} caculated length<br> | Function      | func.noop |
| htmlType        | html input type     | String        | -         |
| state           | state<br><br>option:<br>'error'<br>'loading'<br>'success'    | Enum          | -         |
| label           | label    | ReactNode     | -         |
| hasClear        | clear button displays or not                                                      | Boolean       | -         |
| hasBorder       | input border displays or not                                                                                          | Boolean       | true      |
| onKeyDown       | callback when keyboard press down<br><br>**signature**:<br>Function() => void   | Function      | func.noop |
| onPressEnter    | callback when the enter key press down <br><br>**signature**:<br>Function() => void  | Function      | func.noop |
| hint            | watermark, a type of Icon, share a place with hasClear              | String        | -         |
| innerBefore     | Elements appended  before text                           | ReactNode     | -         |
| innerAfter      | Elements appended  after text                  | ReactNode     | -         |
| addonBefore     | Elements appended  before input                    | ReactNode     | -         |
| addonAfter      | Elements appended  after input                      | ReactNode     | -         |
| addonTextBefore | text appended  before input        | ReactNode     | -         |
| addonTextAfter  | text appended  before input                              | ReactNode     | -         |
| autoComplete    | require browser support                                            | String        | 'off'     |
| autoFocus       | require browser support                         | Boolean       | -         |

### Input.TextArea

| Param | Descripiton  | Type  | Default Value |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------- |
| value          | currentValue                                                           | String/Number  | -         |
| defaultValue   | inital value                                                                                          | String/Number  | -         |
| onChange       | callback when value changes<br><br>**signature**:<br>Function(value: String, e: Event) => void<br>**params**:<br>_value_: {String} Data<br>_e_: {Event} DOM Event   | Function       | func.noop |
| onKeyDown       | callback when on key down<br><br>**signature**:<br>Function(e: Event, opts: Object) => void <br>**params**:<br>_e_: {Event} DOM Event Object<br>_opts_: {Object} extended information：<br> - opts.overMaxLength: {Boolean} input has reached max length<br> - opts.beTrimed: {Boolean} input whitespace has been trimed  | Function       | func.noop           |
| disabled       | disabled state                                                                                    | Boolean        | false     |
| maxLength      | max length                                                                                                         | Number         | null      |
| hasLimitHint   | limit max num of characters                                                                                         | Boolean        | false     |
| cutString      | when maxLength is set, auto cut string                                                                           | Boolean        | true      |
| readOnly       | read only, forbid editing                                                                                       | Boolean        | false     |
| trim           | onChange will  auto trim text                                                                                    | Boolean        | false     |
| placeholder    | placeholder                                                                                                | String         | -         |
| onFocus         | callback when input get focused<br><br>**signature**:<br>Function() => void  | Function      | func.noop |
| onBlur          | callback when input lose focused<br><br>**signature**:<br>Function() => void   | Function      | func.noop |
| getValueLength  | define the  value length caculation<br><br>**signature**:<br>Function(value: String) => Number<br>**params**:<br>_value_: {String} Data<br>returns:<br>{Number} caculated length<br> | Function      | func.noop |
| htmlType        | html input type     | String        | -         |
| state           | state<br><br>option:<br>'error'<br>'loading'<br>'success'   | Enum          | -         |
| autoHeight     | height auto fit, exapmle: true / {minRows: 2, maxRows: 4}                                                                                                  | Boolean/Object | false     |
| rows           | multiline text height <br />(Never use `height` to controll textarea's height for compatibility with IE9/10)                                                                                  | Number         | 4         |

### Input.Group

| Param | Descripiton  | Type  | Default Value |
| -------------------- | ----------- | --------- | --- |
| addonBefore          | Elements appended  before input      | ReactNode | -   |
| addonBeforeClassName | Classnames before input, usually use for css | String    | -   |
| addonAfter           | Elements appended  after input     | ReactNode | -   |
| addonAfterClassName  | Classnames after input , usually use for css  | String    | -   |

## Input/TextArea Inner Methods(Got by refs)

| Param | Descripiton  | Type  | Default Value |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | -------- | --- |
| getInputNode | get truely input html dom node                                                                                           | Function |     |
| focus        | get foucs<br><br>**signature**:<br> Function(start:Number, end: Number)<br>**params**:<br>_start_: {Number} cursor postion<br>_end_: {Number} select end postion | Function |     |


## ARIA and KeyBoard
| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Enter       | Trigger the onKeyDown event    |
| Any       | Trigger the onChange event    |
