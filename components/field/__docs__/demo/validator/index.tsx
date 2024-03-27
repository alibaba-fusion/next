import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Checkbox, Field } from '@alifd/next';

const CheckboxGroup = Checkbox.Group;

const list = [
    {
        value: 'apple',
        label: 'apple',
    },
    {
        value: 'pear',
        label: 'pear',
    },
    {
        value: 'orange',
        label: 'orange',
    },
];

type callbackInterface = (message?: string) => void;
class App extends React.Component {
    state = {
        checkboxStatus: true,
    };
    field = new Field(this, { scrollToFirstError: -10 });

    isChecked(rule: unknown, value: unknown, callback: callbackInterface) {
        if (!value) {
            return callback('consent agreement not checked ');
        } else {
            return callback();
        }
    }

    userName(rule: unknown, value: string, callback: callbackInterface) {
        if (value === 'frank') {
            setTimeout(() => callback('name existed'), 200);
        } else {
            setTimeout(() => callback(), 200);
        }
    }

    render() {
        const { init, validate, reset } = this.field;

        return (
            <div className="demo">
                <Input {...init('input', { initValue: 'delete all', rules: { required: true } })} />
                {this.field.getError('input') ? (
                    <span style={{ color: 'red' }}>{this.field.getError('input')!.join(',')}</span>
                ) : (
                    ''
                )}
                <br />
                <br />
                <Input
                    placeholder="try onBlur"
                    {...init('input1', {
                        rules: [
                            {
                                required: true,
                                message: 'can not be empty',
                                trigger: ['onBlur', 'onChange'],
                            },
                        ],
                    })}
                />
                {this.field.getError('input1') ? (
                    <span style={{ color: 'red' }}>{this.field.getError('input1')!.join(',')}</span>
                ) : (
                    ''
                )}
                <br />
                <br />
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
                <Input.TextArea
                    placeholder=">3 and <10"
                    {...init('textarea', {
                        rules: [
                            {
                                required: true,
                                minLength: 3,
                                maxLength: 10,
                            },
                        ],
                    })}
                />
                {this.field.getError('textarea') ? (
                    <span style={{ color: 'red' }}>
                        {this.field.getError('textarea')!.join(',')}
                    </span>
                ) : (
                    ''
                )}
                <br />
                <br />
                {this.state.checkboxStatus ? (
                    <div>
                        Array validate：
                        <CheckboxGroup
                            dataSource={list}
                            {...init('checkboxgroup', {
                                rules: [
                                    {
                                        required: true,
                                        type: 'array',
                                        message: 'choose one please',
                                    },
                                ],
                            })}
                            style={{ marginBottom: 10 }}
                        />
                        {this.field.getError('checkboxgroup') ? (
                            <span style={{ color: 'red' }}>
                                {this.field.getError('checkboxgroup')!.join(',')}
                            </span>
                        ) : (
                            ''
                        )}
                    </div>
                ) : null}
                <br />
                <br />
                <Button
                    type="primary"
                    onClick={() => {
                        validate((errors, values) => {
                            console.log(errors, values);
                        });
                    }}
                >
                    validate
                </Button>
                <Button
                    onClick={() => {
                        reset();
                    }}
                >
                    reset
                </Button>
                <Button
                    onClick={() => {
                        if (this.state.checkboxStatus) {
                            this.setState({ checkboxStatus: false });
                            this.field.remove('checkboxgroup');
                        } else {
                            this.setState({ checkboxStatus: true });
                        }
                    }}
                >
                    {this.state.checkboxStatus ? 'delete' : 'restore'}
                </Button>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
