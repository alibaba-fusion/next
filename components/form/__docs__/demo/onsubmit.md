# 回车提交

- order: 7

需要Form里面有 htmlType="submit" 的元素

:::lang=en-us
# Trigger on Press the Enter key

- order: 7

Requires htmlType="submit" element in Form
:::
---

````jsx
import { Form, Input } from '@alifd/next';


const FormItem = Form.Item;

class Demo extends React.Component {
    onSubmit(e) {
        e.preventDefault(); // form will auto submit if remove this line
        console.log('onsubmit');
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit.bind(this)}>
                <FormItem >
                    <Input placeholder="Enter Key can also trigger ‘onSubmit’"/>
                </FormItem>
                <Form.Submit htmlType="submit">submit</Form.Submit>
            </Form>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
