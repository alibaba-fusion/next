# 校验提示

- order: 8

为 `<FormItem>` 定义 `state` 属性控制三种校验状态。

如果是  `<Input>` 组件, 可在`<FormItem>`上面添加 `hasFeedback` 控制图标的展示

**注意**: 反馈图标只对 `<Input />` 有效。

:::lang=en-us
# Valedation prompt

- order: 8

Define the `state` attribute for `<FormItem>` to control the three valedation states.

If it is an `<Input>` component, you can add `hasFeedback` to control icon on `<FormItem>`

**Note**: The feedback icon is only valid for `<Input />`.
:::
---

````jsx
import { Form, Input, DatePicker, TimePicker, NumberPicker, Select } from '@alifd/next';


const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};

ReactDOM.render(
    <Form {...formItemLayout}>
        <FormItem label="Input Error：" validateState="error" help="Please enter a numeric and alphabetic string">
            <Input defaultValue="Invalid choice"/>
        </FormItem>

        <FormItem label="Loading：" hasFeedback validateState="loading" help="Information Checking...">
            <Input defaultValue="Checking"/>
        </FormItem>

        <FormItem label="Success：" hasFeedback validateState="success">
            <Input defaultValue="Successful verification"/>
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
    </Form>
    , mountNode);
````
