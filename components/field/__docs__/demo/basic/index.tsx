import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Field } from '@alifd/next';

class App extends React.Component {
    field = new Field(this);

    onGetValue() {
        console.log(this.field.getValue('input'));
    }

    render() {
        const { init, setValue, reset } = this.field;

        return (
            <div className="demo">
                <Input {...init('input', { initValue: 'test' })} />
                <br />
                <br />
                <Button type="primary" onClick={this.onGetValue.bind(this)}>
                    getValue
                </Button>
                <Button type="primary" onClick={() => setValue('input', 'set me by click')}>
                    setValue
                </Button>
                <Button onClick={() => reset()}>reset</Button>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
