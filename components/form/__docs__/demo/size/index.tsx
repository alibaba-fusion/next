import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Select, Radio, NumberPicker, DatePicker, Switch, Button } from '@alifd/next';

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

class Demo extends React.Component {
    state = {
        size: 'medium',
    };

    handleChange = v => {
        this.setState({
            size: v,
        });
    };

    render() {
        return (
            <div>
                <Form {...formItemLayout} size={this.state.size} style={{ maxWidth: '500px' }}>
                    <FormItem label="Size:">
                        <Radio.Group
                            shape="button"
                            value={this.state.size}
                            onChange={this.handleChange}
                        >
                            <Radio value="small">small</Radio>
                            <Radio value="medium">medium</Radio>
                            <Radio value="large">large</Radio>
                        </Radio.Group>
                    </FormItem>
                    <FormItem label="Input:">
                        <Input placeholder="Please enter your user name" id="userName" />
                    </FormItem>
                    <FormItem label="Select:">
                        <Select>
                            <Select.Option value="test">test</Select.Option>
                        </Select>
                    </FormItem>
                    <FormItem label="NumberPicker:">
                        <NumberPicker />
                    </FormItem>
                    <FormItem label="DatePicker:">
                        <DatePicker />
                    </FormItem>
                    <FormItem label="Switch:">
                        <Switch />
                    </FormItem>
                </Form>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
