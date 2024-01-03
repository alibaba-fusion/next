import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Select } from '@alifd/next';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { xxs: 4, l: 4 },
    wrapperCol: { xxs: 20, l: 16 },
};

ReactDOM.render(
    <Form {...formItemLayout}>
        <FormItem label="userName:">
            <Input />
        </FormItem>
        <FormItem label="password:" name="resPass">
            <Input htmlType="password" placeholder="Please Enter Password" />
        </FormItem>
        <FormItem label="Country:" name="country">
            <Select placeholder="Please select a country" style={{ width: '100%' }}>
                <option value="china">China</option>
                <option value="use">United States</option>
                <option value="japan">Japan</option>
                <option value="korean">South Korea</option>
                <option value="Thailand">Thailand</option>
            </Select>
        </FormItem>
        <FormItem label="Note:" help="something" name="resReremark">
            <Input.TextArea placeholder="something" />
        </FormItem>
        <FormItem label=" ">
            <Form.Submit>Submit</Form.Submit>
        </FormItem>
    </Form>,
    mountNode
);
