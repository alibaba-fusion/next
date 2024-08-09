import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Message } from '@alifd/next';

const Reset = Form.Reset;

const FormItem = Form.Item;

class Demo extends React.Component {
    handleSubmit = (values: { first?: string; second?: string }, errors: unknown) => {
        console.log('value & errors', values, errors);
        Message.success('values');
    };

    render() {
        return (
            <Form>
                <FormItem>
                    <Input name="first" defaultValue="test" />
                </FormItem>
                <FormItem>
                    <Input name="second" />
                </FormItem>
                <Reset toDefault names={['first']}>
                    click
                </Reset>
            </Form>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
