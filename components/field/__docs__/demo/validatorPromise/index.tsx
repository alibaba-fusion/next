import ReactDOM from 'react-dom';
import React from 'react';
import { Input, Button, Checkbox, Field } from '@alifd/next';

class App extends React.Component {
    state = {
        checkboxStatus: true,
    };
    field = new Field(this, { scrollToFirstError: -10 });

    isChecked(_rule: unknown, value: string) {
        if (!value) {
            return Promise.reject('consent agreement not checked ');
        } else {
            return Promise.resolve(null);
        }
    }

    userName(_rule: unknown, value: string) {
        if (value === 'frank') {
            return new Promise((_resolve, reject) => {
                setTimeout(() => reject('name existed'), 200);
            });
        } else {
            return new Promise(resolve => {
                setTimeout(() => resolve(null), 200);
            });
        }
    }

    render() {
        const init = this.field.init;

        return (
            <div className="demo">
                <Input
                    defaultValue=""
                    placeholder="try frank"
                    {...init('username', {
                        rules: [
                            {
                                validator: this.userName,
                                trigger: ['onBlur', 'onChange'],
                            },
                        ],
                    })}
                />
                {this.field.getState('username') === 'loading' ? 'validating...' : ''}
                {this.field.getError('username') ? (
                    <span style={{ color: 'red' }}>
                        {this.field.getError('username')!.join(',')}
                    </span>
                ) : (
                    ''
                )}
                <br />
                <br />
                agreement:
                <Checkbox
                    {...init('checkbox', {
                        valueName: 'checked',
                        rules: [{ validator: this.isChecked }],
                    })}
                />
                {this.field.getError('checkbox') ? (
                    <span style={{ color: 'red' }}>
                        {this.field.getError('checkbox')!.join(',')}
                    </span>
                ) : (
                    ''
                )}
                <br />
                <br />
                <Button
                    type="primary"
                    onClick={() => {
                        this.field.validatePromise().then(({ errors, values }) => {
                            console.log(errors, values);
                        });
                    }}
                >
                    validate
                </Button>
                <Button
                    onClick={() => {
                        this.field.reset();
                    }}
                >
                    reset
                </Button>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
