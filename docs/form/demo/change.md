# 表单联动

- order: 8

当 value 发生变化时，控制其他组件

:::lang=en-us
# coordinated

- order: 8

control other component while value changed

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
                <FormItem label="userName:">
                    <Input name="username" placeholder="Please Enter UserName" defaultValue="frank"/>
                </FormItem>
                <FormItem label="Agreement:">
                    <Checkbox name="agreement" defaultChecked>Agree</Checkbox>
                </FormItem>
                <FormItem label=" ">
                    {
                        (values) => {
                            return values.agreement ? <p>{`${values.username} has agreen the aggreement`}</p>: null
                        }
                    }
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
