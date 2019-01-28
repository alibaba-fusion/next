# 复杂功能(Field)

- order: 10

配合 `Field` 可以实现较复杂功能

:::lang=en-us
# use Field

- order: 10

Complex functions can be realized with `Field`


:::
---

````jsx
import { Form, Input, Radio, Field, Button } from '@alifd/next';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};

class BasicDemo extends React.Component {
    field = new Field(this);

    userExists(rule, value) {
        return new Promise((resolve, reject) => {
            if (!value) {
                resolve();
            } else {
                setTimeout(() => {
                    if (value === 'frank') {
                        reject([new Error('Sorry, this username is already occupied.')]);
                    } else {
                        resolve();
                    }
                }, 500);
            }
        });
    }

    checkPass(rule, value, callback) {
        const { validate } = this.field;
        if (value) {
            validate(['rePasswd']);
        }
        callback();
    }

    checkPass2(rule, value, callback) {
        const { getValue } = this.field;
        if (value && value !== getValue('passwd')) {
            return callback('Inconsistent password input twice!');
        } else {
            return callback();
        }
    }

    validate = () => {
        this.field.validate(['sex']);
    }

    render() {
        const {getState, getValue, getError} = this.field;

        return (
            <Form {...formItemLayout} field={this.field}>
                <FormItem
                    label="Username:"
                    hasFeedback
                    required
                    validator={this.userExists.bind(this)}
                    help={getState('username') === 'loading' ? 'Checking ...' : getError('username')}
                >
                    <Input placeholder="Input frank" name="username" />
                    <p>Hello {getValue('username')}</p>
                </FormItem>

                <FormItem
                    label="Password:"
                    hasFeedback
                    required
                    requiredMessage="Please enter password"
                    validator={this.checkPass.bind(this)}
                >
                    <Input htmlType="password" name="passwd" />
                </FormItem>

                <FormItem
                    label="Check your password:"
                    hasFeedback
                    required
                    requiredMessage="Enter your password again"
                    validator={this.checkPass2.bind(this)}
                >
                    <Input htmlType="password" placeholder="Enter the same password twice" name="rePasswd" />
                </FormItem>

                <FormItem
                    label="Gender:"
                    hasFeedback
                    required
                    requiredMessage="Please select your gender"
                >
                    <RadioGroup name="sex" >
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </RadioGroup>
                </FormItem>

                <FormItem wrapperCol={{ offset: 6 }} >
                    <Button onClick={this.validate}>Validate by Field</Button>
                    <Form.Submit validate type="primary" onClick={(v, e) => console.log(v, e)} style={{margin: '0 10px'}}>Submit</Form.Submit>
                    <Form.Reset >Reset</Form.Reset>
                </FormItem>
            </Form>
        );
    }
}


ReactDOM.render(<BasicDemo />, mountNode);
````
