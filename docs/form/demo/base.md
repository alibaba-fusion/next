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
            <Form style={{width: '60%'}} {...formItemLayout} >
                <FormItem label="Username:" required requiredMessage="Please input your username!">
                    <Input name="baseUser" />
                </FormItem>
                <FormItem label="Password:" required requiredMessage="Please input your password!">
                    <Input.Password name="basePass" placeholder="Please Enter Password"/>
                </FormItem>
                <FormItem label=" "  >
                    <Checkbox name="agreement" defaultChecked>Agree</Checkbox>
                </FormItem>
                <FormItem label=" ">
                    <Form.Submit type="primary" validate onClick={this.handleSubmit} style={{marginRight: 8}}>Submit</Form.Submit>
                    <Form.Reset>Reset</Form.Reset>
                </FormItem>
            </Form>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
