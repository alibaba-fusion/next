# 响应式

- order: 7

可以通过配置 `labelCol` `wrapperCol` 的 `Grid.Col` 响应式属性实现响应式

:::lang=en-us
# Responsive

- order: 7

Response can be configured by `Grid.Col` property of `labelCol` `wrapperCol`.

:::
---

````jsx
import { Form, Input, Select } from '@alifd/next';


const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {xxs: 4, l: 4},
    wrapperCol: {xxs: 20, l: 16}
};

ReactDOM.render(<Form {...formItemLayout} >
    <FormItem label="userName:">
        <Input />
    </FormItem>
    <FormItem label="password:">
        <Input htmlType="password" name="pass" placeholder="Please Enter Password"/>
    </FormItem>
    <FormItem label="Country:">
        <Select placeholder="Please select a country" style={{width: '100%'}}>
            <option value="china">China</option>
            <option value="use">United States</option>
            <option value="japan">Japan</option>
            <option value="korean">South Korea</option>
            <option value="Thailand">Thailand</option>
        </Select>
    </FormItem>
    <FormItem label="Note:" help="something">
        <Input.TextArea placeholder="something" name="remark" />
    </FormItem>
    <FormItem label=" ">
        <Form.Submit>Submit</Form.Submit>
    </FormItem>
</Form>, mountNode);
````
