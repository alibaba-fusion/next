# 校验

- order: 9

基本的表单校验例子。

:::lang=en-us
# Validate

- order: 9

Basic usage of validation.
:::

---

````jsx
import { Form, Input, Field } from '@alifd/next';


const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};

class BasicDemo extends React.Component {
    field = new Field(this);

    render() {
        const {
            field,
            field: {
                init,
            }
        } = this;
        return (
            <Form {...formItemLayout} field={field} >

                <Form.Item label="test" key="test2">
                    <Input  {...init('input', {
                    rules: [{
                        validator(_rule, value, callback) {
                        callback(<span>This is a <em>CUSTOM</em> error</span>);
                        }
                    }]
                    })}  />
                </Form.Item>
                <FormItem wrapperCol={{ offset: 6 }} >
                    <Form.Submit validate type="primary">Submit</Form.Submit>
                    <Form.Reset >Reset</Form.Reset>
                </FormItem>
            </Form>
        );
    }
}

ReactDOM.render(<BasicDemo />, mountNode);
````
