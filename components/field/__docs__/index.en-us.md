# Field

-   category: Components
-   family: DataEntry
-   chinese: 表单辅助工具
-   cols: 1
-   type: 表单

---

## Development Guide

### When to use

Fields can be used to manage data when it comes to form data manipulation and validation. After being associated with a component, the form data can be automatically written back, read, and verified.

### Use caution

-   With Field `init` components, `value` `onChange` must be placed in init's third argument, otherwise it may be overridden by init.
-   `Form` has been deeply optimized with `Field` for `data acquisition` and `automatic verification prompt`. It is recommended to use `Field` in `Form`. Please check Form demo.
-   initValue The defaultValue of a similar component, which only takes effect when the component first renders (the ajax asynchronous invocation setting initValue may have missed the first render)
-   with `parseName=true` you could use `getValues` to get a struct value, but not work in `getValue` you still need pass complete key

### basic use

```
Class Demo extends React.Component {
    Field = new Field(this); // instance creation

    onClick = ()=>{
        Console.log(this.field.getValue('name'));
    }
    Render() {
        Const init = this.field.init;

        // Note: initValue will only be assigned when the component is first initialized. If you are using an asynchronous assignment, use setValue
        Return <div>
            <Input {...init('name',{initValue:'first value'})} />
            <button onClick={this.onClick>Get Data</button>
        </div>
    }
}
```

### update data

#### Event Updates

```
Class Demo extends React.Component {
    Field = new Field(this);

    onClick = ()=>{
        this.field.setValue('name', 'newvalue'); // Assignment will automatically trigger render
    }
    Render() {
        Const init = this.field.init;

        Return <div>
            <Input {...init('name')} />
            <button onClick={this.onClick}>Settings</button>
        </div>
    }
}
```

#### props update

```
Class Demo extends React.Component {
    Field = new Field(this);

    // Set the data before the component is mounted (this can be replaced with initValue)
    componentWillMount() {
        this.field.setValue('name', 'init Name')
    }
    // Receive data from props
    componentWillReceiveProps(nextProps) {
        this.field.setValue('name', nextProps.name)
    }
    Render() {
        Const init = this.field.init;

        Return <div>
            <Input {...init('name')} />
        </div>
    }
}
```

#### ajax update

```
Class Demo extends React.Component {
    Field = new Field(this);

    onClick = ()=>{
        Ajax({
            Url:'/demo.json',
            Success:(json)=>{
                // Update of assignment in callback event
                this.field.setValue('name',json.name);
            }
        });
    }
    Render() {
        Const init = this.field.init;

        Return <div>
            <Input {...init('name')} />
            <button onClick={this.onClick}>Settings</button>
        </div>
    }
}
```

#### onChange update monitoring

Two usages:

1. Unified management

```
Class Demo extends React.Component {
    Field = new Field(this,{
        onChange:(name, value) => {
          Switch(name) {
            Case 'name1':
              this.field.setValue('name2','value set by name1');
              Break;
            Case 'name2':
              this.field.setValue('name1','value set by name2');
              Break;
          }
        }
    });
    Render() {
        Const init = this.field.init;

        Return <div>
          <Input {...init('name1')} />
          <Input {...init('name2')} />
        </div>
    }
}
```

2. Individual management

```
Class Demo extends React.Component {
    Render() {
        Const init = this.field.init;

        Return <div>
          <Input {...init('name1',{
              Props:{
                onChange:(v)=>{
                  this.field.setValue('name2','value set by name1');
                }
              }
            })} />
          <Input {...init('name2',{
              Props:{
                onChange:(v)=>{
                  this.field.setValue('name1','value set by name2');
                }
              }
            })} />
        </div>
    }
}
```

For details, please check Demo Demo `Associate Control`

## API

<!-- api-extra-start -->

### initialization

```
Let myfield = new Field(this [,options]);

or with hooks

let myfield = Field.useField([options]); // react version must > 16.8
```

| Parameter | Description                                                  | Type            | Optional     | Default |
| --------- | ------------------------------------------------------------ | --------------- | ------------ | ------- |
| this      | The incoming call to this class                              | React.Component | must be set  |
| options   | Some event configuration, detailed parameters are as follows | Object          | Not required |         |

`options` configuration item

| Parameters         | Description                                                                                                                                                                                                                                     | Type                 | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------- |
| onChange           | all component changes will arrive here [setValue won't trigger the function]                                                                                                                                                                    | Function(name,value) |         |
| parseName          | Whether to translate `name` in `init(name)` (getValues ​​will convert a string with `.` to an object)                                                                                                                                           | Boolean              | false   |
| forceUpdate        | Only the components of PureComponent are recommended to open this forced refresh function, which will cause performance problems (500 components as an example: the render will cost 700ms when it is turned on, and 400ms if it is turned off) | Boolean              | false   |
| scrollToFirstError | scrolling field.validate scrolls to the first errored component, offsets if it is an integer                                                                                                                                                    | Boolean/Number       | true    |
| autoUnmount        | Automatically delete the Unmout element, if you want to keep the data can be set to false                                                                                                                                                       | Boolean              | true    |
| autoValidate       | Automatically validate while value changed                                                                                                                                                                                                      | Boolean              | true    |
| values             | initial value                                                                                                                                                                                                                                   | Object               |         |

#### API Interface

The api interface provided by the object after `new` (eg `myfield.getValues()`) (The api function starting with `set` should not be manipulated in render, which may trigger an infinite loop)

| Parameter        | Description                                                                                                                         | Type                                                                                                                                                          | Optional                       | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------- |
| init             | Initialize each component, [Detailed Parameters below] (#init))                                                                     | Function(name:String, option:Object)                                                                                                                          |                                |         |
| getValues ​​     | Get the value of a group of input controls. If no parameters are passed, get the values ​​of all components                         | Function([names: String[]])                                                                                                                                   |
| getValue         | get the value of a single input control                                                                                             | Function(name: String)                                                                                                                                        |
| setValues ​​     | Sets the value of a set of input controls (triggers render, follow the use of react time)                                           | Function(obj: Object)                                                                                                                                         |
| setValue         | Sets the value of a single input control (triggers render, follow the use of react time)                                            | Function(name: String, value)                                                                                                                                 |
| Validate         | Validate and retrieve the values ​​of a set of input fields and Error                                                               | Function([names: String[]], callback: Function(errors, values))                                                                                               |                                |         |
| getError         | Get Error of a Single Input Control                                                                                                 | Function(name: String)                                                                                                                                        |                                |         |
| getErrors        | Get Errors of a Group of Input Controls                                                                                             | Function([name: String])                                                                                                                                      |                                |         |
| setError         | Set Error for a Single Input Control                                                                                                | Function(name: String, errors:String/Array[String])                                                                                                           |                                |         |
| setErrors        | Set Errors of a Group of Input Controls                                                                                             | Function(obj: Object)                                                                                                                                         |                                |         |
| reset            | reset the value of a group of input controls, clear the checksum                                                                    | Function([names: String[]])                                                                                                                                   |                                |         |
| resetToDefault   | Resets the value of a group of input controls to the default                                                                        | Function([names: String[]])                                                                                                                                   |                                |         |
| getState         | Judge check status                                                                                                                  | Function(name: String)                                                                                                                                        | 'error' 'success' 'loading' '' | ''      |
| getNames         | Get the key of all components                                                                                                       | Function()                                                                                                                                                    |                                |         |
| remove           | Delete the data of a certain control or a group of controls. After deletion, the validate/value associated with it will be cleared. | Function(name: String/String[])                                                                                                                               |
| addArrayValue    | add data of name like name.{index}                                                                                                  | Function(key: String, index: Number, value1, value2, ...)                                                                                                     |                                |         |
| deleteArrayValue | delete data of name like name.{index}                                                                                               | Function(key: String, index: Number, howmany)                                                                                                                 |                                |         |
| watch            | watch field value changes                                                                                                           | Function(names: String[], callback: Function(name: String, value: any, oldValue: any, triggerType: 'init' \| 'change' \| 'setValue' \| 'unmount' \| 'reset')) |                                |         |

#### init

```
init(name, options, props)
```

| Parameter                 | Description                                                                                                                                                                | Type                                                                             | Optional | Default    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------- | ---------- | --- |
| name                      | Required unique input control symbol                                                                                                                                       | String                                                                           |
| options.valueName         | attribute name of the component value, such as Checkbox is `checked`, Input is `value`                                                                                     | String                                                                           |          | 'value'    |
| options.initValue         | The initial value of the component (the component will be read only when rendering for the first time, and later modifying this value is invalid), similar to defaultValue | any                                                                              |          |            |
| options.trigger           | Name of the event that triggered the data change                                                                                                                           | String                                                                           |          | 'onChange' |
| options.rules             | Checksum Rules                                                                                                                                                             | Array/Object                                                                     |          |            |     |
| options.getValueFormatter | custom way to get value from `onChange` event, Detailed usage see demo `custom data get`                                                                                   | Function(value, ...args) parameter order and components are exactly the same The |          |            |     |
| options.getValueFormatter | custom way to set value. Detailed usage see demo `custom data get`                                                                                                         | Function(values)                                                                 |          |            |     |
| props                     | Component-defined events can be written here                                                                                                                               | Object                                                                           |          |            |     |
| autoValidate              | Automatically validate while value changed                                                                                                                                 | Boolean                                                                          | true     |

return

```
{id,value,onChange}
```

#### rules

```
{
    rules:[{ required: true }]
}
```

multiple rule

```
{
    rules:[{required:true,trigger:'onBlur'},{pattern:/abcd/,message:'match abcd'},{validator:(rule, value, callback)=>{callback('got error')}}]
}
```

| Parameter | Description                                                                                                                   | Type                          | Optional                |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----------------------- | --------------------------------------------- | ------------------- |
| required  | cannot be empty                                                                                                               | Boolean                       | true                    | `undefined/null/"/[]` will trigger this rule) |
| pattern   | check regular expression                                                                                                      | regular                       |                         |                                               |
| minLength | Minimum string length / Minimum number of arrays                                                                              | Number                        |                         | String/Number/Array                           |
| maxLength | Maximum length of string / Maximum number of arrays                                                                           | Number                        |                         | String/Number/Array                           |
| length    | string exact length / exact number of arrays                                                                                  |                               | number                  |                                               | String/Number/Array |
| min       | Min                                                                                                                           | Number                        |                         | String/Number                                 |
| max       | maximum                                                                                                                       | Number                        |                         | String/Number                                 |
| format    | sum of common patterns                                                                                                        | String                        | url, email, tel, number | String                                        |
| validator | Custom validation, (don't forget to execute `callback()` when validation is successful, otherwise validation will not return) | Function(rule,value,callback) |
| trigger   | Name of the event that triggered the check                                                                                    | String/Array                  | onChange/onBlur/...     | onChange                                      |
| message   | error message                                                                                                                 | String                        |                         |                                               |

#### Field.useWatch

react hook for `field.watch`

```typescript
type WatchTriggerType = 'init' | 'change' | 'setValue' | 'unmount' | 'reset';
interface WatchCallback {
    (name: string, value: unknown, oldValue: unknown, triggerType: WatchTriggerType): void;
}
class Field {
    static useWatch: (field: Field, names: string[], callback: WatchCallback) => void;
}
```

<!-- api-extra-end -->

## Custom Component Access to Field Standards

-   Supports controlled mode (value+onChange) `Must`
         - value control component data display
         - onChange callback function when the component changes (the first parameter can be given to value)

-   One complete operation throws an onChange event
         For example, there is a process that indicates the status of the progress, it is recommended to increase the API `onProcess`; if there is a Start indicates the startup state, it is recommended to increase the API `onStart`

-   Clear data when `value={undefined}`, field's reset function will send undefined data to all components

```
componentWillReceiveProps(nextProps) {
    if ('value' in nextProps ) {
        this.setState({
           value: nextProps.value === undefined? []: nextProps.value   //  set value after clear
        })
    }
}
```

## Known Issues

-   Why doesn't the callback function enter the `this.field.validate` manually? A: Is it safe to define the validator method to ensure that the `callback` can be executed on any branch?
