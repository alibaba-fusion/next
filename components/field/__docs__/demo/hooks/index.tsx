import ReactDOM from 'react-dom';
import React from 'react';
import { Input, Button, Field } from '@alifd/next';

function App() {
    const field = Field.useField() as Field;

    const { init, getError } = field;

    function onGetValue() {
        console.log(field.getValue('input'));
    }

    function onSetValue() {
        field.setValue('input', 'xyz');
    }

    return (
        <div className="demo">
            <Input
                {...init('input', {
                    initValue: 'test',
                    rules: [
                        {
                            required: true,
                            pattern: /hello/,
                            message: 'must be hello',
                        },
                    ],
                })}
            />
            <span style={{ color: 'red' }}>{getError('input')}</span>

            <br />
            <br />
            <Button onClick={onSetValue}> setValue </Button>
            <Button onClick={onGetValue}> getValue </Button>
            <br />
            <br />
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
