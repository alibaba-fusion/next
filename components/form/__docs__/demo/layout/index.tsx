import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field, Input, Radio, Switch } from '@alifd/next';

function handleSubmit(v: unknown) {
    console.log(v);
}

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
};

const App = () => {
    const field = Field.useField({
        autoUnmount: false,
        values: { inline: false, labelAlign: 'left' },
    });
    const inline: boolean | undefined = field.getValue('inline');
    const labelAlign: 'left' | 'top' | 'inset' | undefined = inline
        ? 'left'
        : field.getValue('labelAlign');
    const layout = inline ? {} : formItemLayout;

    return (
        <Form field={field} inline={inline} labelAlign={labelAlign} {...layout}>
            <Form.Item label="Inline Layout" name="inline">
                <Switch />
            </Form.Item>

            {inline ? null : (
                <Form.Item label="Label align" name="labelAlign">
                    <Radio.Group shape="button">
                        <Radio value="left">left</Radio>
                        <Radio value="top">top</Radio>
                        <Radio value="inset">inset</Radio>
                    </Radio.Group>
                </Form.Item>
            )}

            <Form.Item label="Username:" name="inlineUser">
                <Input placeholder="first" />
            </Form.Item>
            <Form.Item label="Password:" hasFeedback={false} name="inlinePass">
                <Input.Password placeholder="Please enter your password!" />
            </Form.Item>

            <Form.Item label=" ">
                <Form.Submit onClick={handleSubmit}>Submit</Form.Submit>
            </Form.Item>
        </Form>
    );
};

ReactDOM.render(<App />, mountNode);
