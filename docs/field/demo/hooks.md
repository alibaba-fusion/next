# Hooks

- order: 12

在 functional component 里可使用 `Field.useField` 支持 hooks. `依赖: react@^16.8`

:::lang=en-us
# Hooks

- order: 12

`Field` exposes a React Hook `useField` as a static method. Takes in the `options` parameter used with `new Field(...)`. `dependencies: react@^16.8`


:::
---


````jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { Input, Button, Field } from '@alifd/next';

 
function NewApp() {
    const field = Field.useField({ values: { input: 'abc' }});

    const { init, setValue, reset } = field;

    function onGetValue() {
        console.log(field.getValue('input'));
    }

    function onSetValue() {
        field.setValue('input', 'xyz');
    }

    return (
        <div className="demo">
            <Input {...init('input', {initValue: 'test'})} />
            <Button onClick={onSetValue}> setValue </Button>
            <Button onClick={onGetValue}> getValue </Button>
            <br/><br/>
        </div>);
 }
 
 
ReactDOM.render(<NewApp/>, mountNode);
 
 ````
