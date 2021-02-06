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
import { Form, Input, Select, Radio, NumberPicker, DatePicker, Switch, Button } from '@alifd/next';


const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16}
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
                        <Radio.Group shape="button" value={this.state.size} onChange={this.handleChange}>
                            <Radio value="small">small</Radio>
                            <Radio value="medium">medium</Radio>
                            <Radio value="large">large</Radio>
                        </Radio.Group>
                    </FormItem>
                    <FormItem label="Input:">
                        <Input placeholder="Please enter your user name" id="userName" />
                    </FormItem>
                    <FormItem label="Select:">
                        <Select><Select.Option value="test">test</Select.Option></Select>
                    </FormItem>
                    <FormItem label="NumberPicker:">
                        <NumberPicker />
                    </FormItem>
                    <FormItem label="DatePicker:">
                        <DatePicker />
                    </FormItem>
                    <FormItem label="Switch:">
                        <Switch />
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
