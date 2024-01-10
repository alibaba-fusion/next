import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Input, Button, Field } from '@alifd/next';

function DemoForm({ showInput, field }: { showInput?: boolean; field: Field }) {
    const init = field.init;
    function onGetValue() {
        console.log(field.getValues());
    }

    function onSetValue() {
        field.setValues({
            switch: true,
            input: 'xyz',
        });
    }

    function onReset() {
        field.reset();
    }
    return (
        <div className="demo">
            <Switch {...init('switch', { valueName: 'checked' })} />
            {showInput && <Input {...init('input', { initValue: 'test' })} />}

            <br />
            <br />
            <Button onClick={onSetValue}> setValue </Button>
            <Button onClick={onGetValue}> getValue </Button>
            <Button onClick={onReset}> reset </Button>
            <br />
            <br />
        </div>
    );
}

class ClassApp extends Component<unknown, { showInput: boolean }> {
    field: Field;
    unwatch: () => unknown;
    constructor(props: unknown) {
        super(props);
        this.state = {
            showInput: false,
        };
        this.field = new Field(this);
        this.unwatch = this.field.watch(
            ['switch', 'input'],
            (name, value, oldValue, triggerType) => {
                console.group('[detect change]');
                console.log('name: ', name);
                console.log('value: ', oldValue, ' -> ', value);
                console.log('triggerType: ', triggerType);
                console.groupEnd();

                if (name === 'switch') {
                    // use switch value to control showInput
                    this.setState({ showInput: value as boolean });
                }
            }
        );
    }
    componentWillUnmount() {
        this.unwatch();
    }
    render() {
        return <DemoForm field={this.field} showInput={this.state.showInput} />;
    }
}

function FunctionApp() {
    const [showInput, setShowInput] = useState(false);
    const field = Field.useField() as Field;
    Field.useWatch(field, ['switch', 'input'], (name, value, oldValue, triggerType) => {
        console.group('[detect change]');
        console.log('name: ', name);
        console.log('value: ', oldValue, ' -> ', value);
        console.log('triggerType: ', triggerType);
        console.groupEnd();

        if (name === 'switch') {
            // use switch value to control showInput
            setShowInput(value as boolean);
        }
    });

    return <DemoForm field={field} showInput={showInput} />;
}

function App() {
    return (
        <div>
            <h3>Class component</h3>
            <ClassApp />
            <h3>Function component</h3>
            <FunctionApp />
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
