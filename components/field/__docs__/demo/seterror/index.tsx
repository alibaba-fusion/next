import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Field } from '@alifd/next';

class App extends React.Component {
    field = new Field(this);

    validate = () => {
        console.log(this.field.getErrors());
        this.field.validate((error, values) => {
            // eslint-disable-next-line no-alert
            alert(JSON.stringify(error));
        });
    };

    render() {
        const { init, getError, setError, setErrors } = this.field;
        return (
            <div className="demo">
                <Input
                    {...init('input', {
                        rules: [
                            {
                                required: true,
                                pattern: /hello/,
                                message: 'must be hello',
                            },
                        ],
                    })}
                />
                <br />
                <span style={{ color: 'red' }}>{getError('input')}</span>

                <br />
                <Button
                    onClick={() => {
                        setError('input', 'set error 1');
                    }}
                >
                    setError
                </Button>

                <Button
                    onClick={() => {
                        setErrors({ input: 'set error 2' });
                    }}
                >
                    setErrors
                </Button>

                <Button
                    onClick={() => {
                        setErrors({ input: '' });
                    }}
                >
                    clear
                </Button>

                <br />
                <br />
                <Input {...init('input2')} />
                <br />
                <span style={{ color: 'red' }}>{getError('input2')}</span>
                <br />

                <Button
                    onClick={() => {
                        setError(
                            'input2',
                            'errors will be removed by onChange and shown on validate'
                        );
                    }}
                >
                    setError
                </Button>

                <Button onClick={this.validate}>validate</Button>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
