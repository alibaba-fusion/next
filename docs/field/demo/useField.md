# 带有反应挂钩的功能组件

- order: 12

`Field` 将反应挂钩 `useField` 公开为静态方法。接受与 `new Field(...)` 一起使用的 `options` 参数。

:::lang=en-us
# Functional Component with React Hooks

- order: 12

`Field` exposes a React Hook `useField` as a static method. Takes in the `options` parameter used with `new Field(...)`. 


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
