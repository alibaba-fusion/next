# Watch

- order: 13

使用 `field.watch` 或 `Field.useWatch` 来监听字段值变化. `Field.useWatch` 是一个react hook, 依赖 `react@^16.8`.

:::lang=en-us
# Watch

- order: 13

Use `field.watch` or `Field.useWatch` to watch the value change event of field. `Field.useWatch` is a react hook, depend `react@^16.8`.


:::
---


````jsx
import { Component, useState, useEffect } from 'react';
import { Switch, Input, Button, Field } from '@alifd/next';

function DemoForm({ showInput, field }) {
    const init = field.init;
    function onGetValue() {
        console.log(field.getValues());
    }

    function onSetValue() {
        field.setValues({
          switch: true,
          input: 'xyz'
        });
    }

    function onReset() {
        field.reset();
    }
    return (
        <div className="demo">
            <Switch {...init('switch', {valueName: 'checked'})}/>
            {showInput && <Input {...init('input', { initValue: 'test' })} />}

            <br/><br/>
            <Button onClick={onSetValue}> setValue </Button>
            <Button onClick={onGetValue}> getValue </Button>
            <Button onClick={onReset}> reset </Button>
            <br/><br/>
        </div>
    );
}

class ClassApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showInput: false,
        };
        this.field = new Field(this);
        this.unwatch = this.field.watch(['switch', 'input'], this.handleChange);
    }
    componentWillUnmount() {
        this.unwatch();
    }
    handleChange = (name, value, oldValue, triggerType) => {
        console.group('[detect change]');
        console.log('name: ', name);
        console.log('value: ', oldValue, ' -> ', value);
        console.log('triggerType: ', triggerType);
        console.groupEnd('[detect change]');

        if (name === 'switch') {
            // use switch value to control showInput
            this.setState({ showInput: value });
        }
    }
    render() {
        return <DemoForm field={this.field} showInput={this.state.showInput} />;
    }
}

function FunctionApp() {
    const [showInput, setShowInput] = useState(false);
    const field = Field.useField();
    Field.useWatch(field, ['switch', 'input'], (name, value, oldValue, triggerType) => {
        console.group('[detect change]');
        console.log('name: ', name);
        console.log('value: ', oldValue, ' -> ', value);
        console.log('triggerType: ', triggerType);
        console.groupEnd('[detect change]');

        if (name === 'switch') {
            // use switch value to control showInput
            setShowInput(value);
        }
    });

    return <DemoForm field={field} showInput={showInput} />;
}

function App() {
    return (
        <div>
            <h3>Class component</h3>
            <ClassApp/>
            <h3>Function component</h3>
            <FunctionApp/>
        </div>
    );
}

ReactDOM.render(<App/>, mountNode);

````

````css
.demo .next-btn {
    margin-right: 5px;
}
````