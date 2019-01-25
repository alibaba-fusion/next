# 标签内嵌

- order: 4

通过设置`labelAlign="inset"` (只适用于Input、Select组件，其他组件不适用)

:::lang=en-us
# Inset Label

- order: 4

By setting `labelAlign="inset"` (only applicable to Input, Select components, other components do not apply)

:::
---

````jsx
import { Form, Input, Select } from '@alifd/next';


const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
    labelCol: {fixedSpan: 4},
    wrapperCol: {span: 20}
};

ReactDOM.render(<div>

    <Form {...formItemLayout} labelAlign="inset" style={{maxWidth: '500px'}}>
        <FormItem label="User Name:">
            <Input placeholder="Please enter your name" id="userName" name="userName"/>
        </FormItem>
        <FormItem label="Password:" validateState="error">
            <Input htmlType="password" placeholder="Please enter your password" id="password" name="password"/>
        </FormItem>

        <FormItem label="Size：">
            <Select style={{width: '100%'}}>
                <Option value="small">small</Option>
                <Option value="medium">medium</Option>
                <Option value="large">large</Option>
            </Select>
        </FormItem>
    </Form>

    <br/><br/>

    <Form labelAlign="inset" inline>
        <FormItem label="User Name:">
            <Input placeholder="Enter your name" id="userName2" name="userName2"/>
        </FormItem>
        <FormItem label="Password:" validateState="error" help="Password is required!">
            <Input htmlType="password" placeholder="Enter your password" id="password2" name="password2"/>
        </FormItem>

        <FormItem label="Size:">
            <Select style={{width: 150}}>
                <Option value="small">small</Option>
                <Option value="medium">medium</Option>
                <Option value="large">large</Option>
            </Select>
        </FormItem>
    </Form>
</div>, mountNode);
````
