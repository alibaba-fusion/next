import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Radio } from '@alifd/next';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

class BasicDemo extends React.Component {
    userExists(rule, value) {
        return new Promise((resolve, reject) => {
            if (!value) {
                resolve();
            } else {
                setTimeout(() => {
                    if (value === 'frank') {
                        reject([new Error('Sorry, this username is already exist.')]);
                    } else {
                        resolve();
                    }
                }, 500);
            }
        });
    }

    render() {
        return (
            <Form {...formItemLayout}>
                <FormItem
                    label="Account:"
                    hasFeedback
                    validator={this.userExists.bind(this)}
                    help=""
                    name="valUsername"
                >
                    <Input placeholder="Input frank" />
                    <Form.Error name="valUsername">
                        {(errors, state) => {
                            if (state === 'loading') {
                                return 'loading...';
                            } else {
                                return errors;
                            }
                        }}
                    </Form.Error>
                </FormItem>
                <FormItem label="Email:" hasFeedback required format="email" name="valEmail">
                    <Input placeholder="Both trigget onBlur and onChange" />
                </FormItem>

                <FormItem
                    label="Password:"
                    hasFeedback
                    required
                    requiredMessage="Please enter password"
                    name="valPasswd"
                >
                    <Input htmlType="password" />
                </FormItem>

                <FormItem
                    label="Gender:"
                    hasFeedback
                    required
                    requiredMessage="Please select your gender"
                    name="valSex"
                >
                    <RadioGroup>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </RadioGroup>
                </FormItem>

                <FormItem
                    label="Remarks:"
                    required
                    requiredMessage="Really do not intend to write anything?"
                    name="valTextarea"
                >
                    <Input.TextArea maxLength={20} showLimitHint placeholder="Everything is ok!" />
                </FormItem>

                <FormItem wrapperCol={{ offset: 6 }}>
                    <Form.Submit
                        validate
                        type="primary"
                        onClick={(v, e) => console.log(v, e)}
                        style={{ marginRight: 10 }}
                    >
                        Submit
                    </Form.Submit>
                    <Form.Reset>Reset</Form.Reset>
                </FormItem>
            </Form>
        );
    }
}

ReactDOM.render(<BasicDemo />, mountNode);
