import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input } from '@alifd/next';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { fixedSpan: 3 },
    wrapperCol: { span: 20 },
};

class Demo extends React.Component {
    state = {
        code: '',
        second: 60,
    };

    handleSubmit = (values: unknown, errors: unknown) => {
        if (errors) {
            return;
        }
        console.log('Get form value:', values);
    };

    sendCode = (values: unknown, errors: unknown) => {
        if (errors) {
            return;
        }
        this.setState({
            code: Math.floor(Math.random() * (999999 - 99999 + 1) + 99999),
        });

        setInterval(() => {
            this.setState({
                second: this.state.second - 1,
            });
        }, 1000);
    };

    render() {
        const { code } = this.state;

        return (
            <Form
                style={{ width: 400 }}
                {...formItemLayout}
                labelTextAlign="left"
                size="large"
                labelAlign="inset"
            >
                <FormItem name="username" label="name" required asterisk={false}>
                    <Input trim defaultValue="frank" />
                </FormItem>
                <FormItem name="phone" label="phone" format="tel" required asterisk={false}>
                    <Input
                        trim
                        innerAfter={
                            <Form.Submit
                                text
                                type="primary"
                                disabled={!!code}
                                validate={['phone']}
                                onClick={this.sendCode}
                                style={{ marginRight: 10 }}
                            >
                                {code ? `retry after ${this.state.second}s` : 'send code'}
                            </Form.Submit>
                        }
                    />
                </FormItem>
                {this.state.code ? (
                    <FormItem name="code" label="code" required asterisk={false}>
                        <Input trim defaultValue={this.state.code} />
                    </FormItem>
                ) : null}

                <FormItem label=" ">
                    <Form.Submit
                        style={{ width: '100%' }}
                        type="primary"
                        validate
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </Form.Submit>
                </FormItem>
            </Form>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
