# 验证承诺

- order: 4

验证表单值，并在承诺中返回错误。也支持回调。如果回调返回承诺，承诺的结果将在 “验证” 函数的承诺中返回。

:::lang=en-us
# validate Promise

- order: 4

validate form values with errors returned wrapped in a promise. Also supports callbacks. If the callback returns a promise, the results of the promise will be returned in a promise from the `validate` function.

:::
---

````jsx
import ReactDOM from 'react-dom';
import React from 'react';
import { Input, Button, Checkbox } from '@alifd/next';
import Field from '@alifd/field';



const CheckboxGroup = Checkbox.Group;

const list = [
    {
        value: 'apple',
        label: 'apple'
    }, {
        value: 'pear',
        label: 'pear'
    }, {
        value: 'orange',
        label: 'orange'
    }
];

class App extends React.Component {
    state = {
        checkboxStatus: true
    }
    field = new Field(this, {scrollToFirstError: -10});

    isChecked(rule, value) {
        if (!value) {
            return Promise.reject('consent agreement not checked ')
        } else {
            return Promise.resolve(null);
        }
    }

    userName(rule, value) {
        if (value === 'frank') {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve('name existed'), 200);
            })
        } else {
            return new Promise((resolve) => {
                setTimeout(() => resolve(null), 200);
            })
        }
    }

    render() {
        const init = this.field.init;

        return (<div className="demo">
            <Input {...init('input', {initValue: 'delete all', rules: {required: true}})} />
            {this.field.getError('input') ?
                <span style={{color: 'red'}}>{this.field.getError('input').join(',')}</span> : ''}

            <br/>
            <br/>

            <Input placeholder="try onBlur" {...init('input1', {
                rules: [{
                    required: true,
                    message: 'can not be empty',
                    trigger: ['onBlur', 'onChange']
                }]
            })} />
            {this.field.getError('input1') ?
                <span style={{color: 'red'}}>{this.field.getError('input1').join(',')}</span> : ''}

            <br/>
            <br/>

            <Input defaultValue="" placeholder="try frank" {...init('username', {
                rules: [{
                    validator: this.userName,
                    trigger: ['onBlur', 'onChange']
                }]
            })} />
            {this.field.getState('username') === 'loading' ? 'validating...' : ''}
            {this.field.getError('username') ?
                <span style={{color: 'red'}}>{this.field.getError('username').join(',')}</span> : ''}

            <br/>
            <br/>

            agreement:
            <Checkbox {...init('checkbox', {
                valueName: 'checked',
                rules: [{validator: this.isChecked}]
            })} />
            {this.field.getError('checkbox') ?
                <span style={{color: 'red'}}>{this.field.getError('checkbox').join(',')}</span> : ''}

            <br/>
            <br/>

            <Input.TextArea placeholder=">3 and <10" {...init('textarea', {
                rules: [{
                    required: true,
                    minLength: 3,
                    maxLength: 10
                }]
            })} />
            {this.field.getError('textarea') ?
                <span style={{color: 'red'}}>{this.field.getError('textarea').join(',')}</span> : ''}

            <br/>
            <br/>

            {this.state.checkboxStatus ? <div>
                Array validate：
                <CheckboxGroup dataSource={list} {...init('checkboxgroup', {
                    rules: [{
                        required: true,
                        type: 'array',
                        message: 'choose one please'
                    }]
                })} style={{marginBottom: 10}}/>
                {this.field.getError('checkboxgroup') ?
                    <span style={{color: 'red'}}>{this.field.getError('checkboxgroup').join(',')}</span> : ''}
            </div> : null}

            <br/>
            <br/>

            <Button type="primary" onClick={() => {
                this.field.validatePromise().then(({errors, values}) => {
                    console.log(errors, values);
                });
            }}>validate</Button>
            <Button onClick={() => {
                this.field.reset();
            }}>reset</Button>

            <Button onClick={() => {
                if (this.state.checkboxStatus) {
                    this.setState({checkboxStatus: false});
                    this.field.remove('checkboxgroup');
                } else {
                    this.setState({checkboxStatus: true});
                }

            }}>{this.state.checkboxStatus ? 'delete' : 'restore'}</Button>
        </div>);
    }
}

ReactDOM.render(<App/>, mountNode);
````

````css
.demo .next-btn {
    margin-right: 5px;
}
````
