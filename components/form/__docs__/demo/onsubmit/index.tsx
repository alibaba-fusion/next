import React, { type FormEvent, Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input } from '@alifd/next';

const FormItem = Form.Item;

class Demo extends Component {
    onSubmit(e: FormEvent) {
        e.preventDefault(); // form will auto submit if remove this line
        console.log('onsubmit');
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit.bind(this)}>
                <FormItem>
                    <Input placeholder="Enter Key can also trigger ‘onSubmit’" />
                </FormItem>
                <Form.Submit htmlType="submit">submit</Form.Submit>
            </Form>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
