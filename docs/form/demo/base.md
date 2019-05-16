# 基本

- order: 0

拉伸浏览器的时候label宽度不变。

如果组件比较靠上，可以用 `className="next-form-text-align"` 做调整

:::lang=en-us
# Basic Usage

- order: 0

The width of the label does not change when the browser is stretched.

If the component is relatively high, you can use `className="next-form-text-align"` to adjust.

:::
---

````jsx
import { Form, Input, Checkbox } from '@alifd/next';


const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        fixedSpan: 10
    },
    wrapperCol: {
        span: 14
    }
};

class Demo extends React.Component {

    handleSubmit = (values) => {
        console.log('Get form value:', values);
    };

    render() {
        return (
            <Form style={{width: '60%'}} {...formItemLayout} >
                <FormItem label="baseUsername:">
                    <p>Fixed Name</p>
                </FormItem>
                <FormItem label="password:">
                    <Input htmlType="password" name="basePass" placeholder="Please Enter Password"/>
                </FormItem>
                <FormItem label="Note:" help="something">
                    <Input.TextArea placeholder="something" name="baseRemark" />
                </FormItem>
                <FormItem label="Agreement:">
                    <Checkbox name="baseAgreement" defaultChecked>Agree</Checkbox>
                </FormItem>
                <FormItem label=" ">
                    <Form.Submit onClick={this.handleSubmit}>Confirm</Form.Submit>
                </FormItem>
            </Form>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
