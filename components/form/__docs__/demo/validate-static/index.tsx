import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, DatePicker, TimePicker, NumberPicker, Select } from '@alifd/next';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

ReactDOM.render(
    <Form {...formItemLayout}>
        <FormItem
            label="Input Error："
            validateState="error"
            help="Please enter a numeric and alphabetic string"
        >
            <Input defaultValue="Invalid choice" />
        </FormItem>

        <FormItem
            label="Loading："
            hasFeedback
            validateState="loading"
            help="Information Checking..."
        >
            <Input defaultValue="Checking" />
        </FormItem>

        <FormItem label="Success：" hasFeedback validateState="success">
            <Input defaultValue="Successful verification" />
        </FormItem>

        <FormItem label="Datepicker：" validateState="error" help="Please select the correct date">
            <DatePicker />
        </FormItem>

        <FormItem label="Timepicker：" validateState="error" help="Please select the correct time">
            <TimePicker />
        </FormItem>

        <FormItem label="Select：" validateState="error" help="Please select a country">
            <Select placeholder="Please select a country">
                <option value="china">China</option>
                <option value="use">United States</option>
                <option value="japan">Japan</option>
                <option value="korean">South Korea</option>
                <option value="Thailand">Thailand</option>
            </Select>
        </FormItem>

        <FormItem label="NumberPicker：" validateState="error">
            <NumberPicker defaultValue={0} />
        </FormItem>
    </Form>,
    mountNode
);
