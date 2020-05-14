# 尺寸

- order: 2

`size` 会强制设置 `FormItem` 下的所有组件的size

`labelAlign` label方位（如果不设置 labelCol 和 wrapperCol 那么默认是标签在上）

`labelTextAlign` 文字左右对齐方式

:::lang=en-us
# Size

- order: 2
`size` will specify the size of all components under `FormItem`;

`labelAlign`   Align of label. If labelcol and wrappercol are not set, the value is 'top' by default

`labelTextAlign` Align of text inlabel;

:::
---

````jsx
import { Form, Input, Select } from '@alifd/next';


const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 20}
};

class Demo extends React.Component {
    state = {
        size: 'medium'
    }

    handleChange = (v) => {
        this.setState({
            size: v
        });
    }

    render() {
        return (
            <div>
                <Form {...formItemLayout} size={this.state.size} style={{maxWidth: '500px'}}>
                    <FormItem label="Size:">
                        <Select value={this.state.size} onChange={this.handleChange} style={{width: '100%'}}>
                            <Option value="small">small</Option>
                            <Option value="medium">medium</Option>
                            <Option value="large">large</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Account:">
                        <Input placeholder="Please enter your user name" id="userName" name="userName"/>
                    </FormItem>
                    <FormItem required label="Password:">
                        <Input htmlType="password" placeholder="Please enter your password" id="password" name="password"/>
                    </FormItem>
                    <FormItem label="Password:" validateState="error">
                        <Input htmlType="password" placeholder="Check your password" id="rePass" name="rePass"/>
                    </FormItem>
                </Form>

                <br/><br/>

                <Form size={this.state.size} inline>
                    <FormItem label="Size:">
                        <Select style={{width: '100%'}} value={this.state.size} onChange={this.handleChange}>
                            <Option value="small">small</Option>
                            <Option value="medium">medium</Option>
                            <Option value="large">large</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Account:">
                        <Input placeholder="Please enter your user name" id="userName2" name="userName2"/>
                    </FormItem>
                    <FormItem label="Password:">
                        <Input htmlType="password" placeholder="Please enter your password" id="password2" name="password2"/>
                    </FormItem>
                    <FormItem label="Password:" validateState="error">
                        <Input htmlType="password" placeholder="Check your password" id="rePass2" name="rePass2"/>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.demo-ctl {
  background-color: #f1f1f1;
  padding: 10.0px;
  color: #0a7ac3;
  border-left: 4.0px solid #0d599a;
}
````
