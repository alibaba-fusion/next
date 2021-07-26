# 基本

- order: 0

表单布局、编辑、提交、校验的基本使用

:::lang=en-us
# Basic Usage

- order: 0

basic usage of form edit/submit/validate

:::
---

````jsx
import { Form, Input, Checkbox } from '@alifd/next';


const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        fixedSpan: 8
    },
    wrapperCol: {
        span: 14
    }
};

class Demo extends React.Component {

    handleSubmit = (values, errors) => {
        console.log('value & errors', values, errors);
    };

    render() {
        return (
            <Form style={{width: '60%'}} {...formItemLayout} colon>
                <FormItem name="baseUser" label="Username" required requiredMessage="Please input your username!">
                    <Input />
                </FormItem>
                <FormItem name="basePass" label="Password" required requiredMessage="Please input your password!">
                    <Input.Password placeholder="Please Enter Password"/>
                </FormItem>
                <FormItem name="email" label="Email" format="email" requiredMessage="Please input your email!">
                    <Input placeholder="Please Enter Email"/>
                </FormItem>
                <FormItem name="phone" label="Phone Number" format="tel">
                    <Input placeholder="Please Enter phone number"/>
                </FormItem>
                <FormItem name="homepage" label="Homepage" format="url">
                    <Input defaultValue="https://" placeholder="e.g. https://www.taobao.com"/>
                </FormItem>
                <FormItem name="agreement" label=" "  colon={false}>
                    <Checkbox defaultChecked>Agree</Checkbox>
                </FormItem>
                <FormItem label=" " colon={false}>
                    <Form.Submit type="primary" validate onClick={this.handleSubmit} style={{marginRight: 8}}>Submit</Form.Submit>
                    <Form.Reset>Reset</Form.Reset>
                </FormItem>
            </Form>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
