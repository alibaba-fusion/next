# 水平

- order: 1

:::lang=en-us
# Horizontal

- order: 1
:::

---

````jsx
import { Form, Input } from '@alifd/next';


const FormItem = Form.Item;

function handleSubmit(v) {
    console.log(v);
}

ReactDOM.render(<div>
    <Form inline>
        <FormItem label="Username:">
            <FormItem >
                <Input name="first" style={{width: 80}} placeholder="first"/>
            </FormItem>
            <FormItem >
                <Input name="second" style={{width: 80}} placeholder="second"/>
            </FormItem>
        </FormItem>
        <FormItem label="Password:" required hasFeedback={false}>
            <Input htmlType="password" name="pass" placeholder="Please enter your password!"/>
        </FormItem>

        <FormItem label=" ">
            <Form.Submit onClick={handleSubmit}>Submit</Form.Submit>
        </FormItem>
    </Form>

</div>, mountNode);
````
