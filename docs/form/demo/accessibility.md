
# 无障碍

- order: 16

在开启屏幕阅读器时，表单的必填项需要提示，其中*号为必填项，使用以下几种方式处理： 

> 1. 在FormItem组件中设置required,label，在子组件中设置name,组件内部会实现label标签与组件自动关联，例如`Input`, `TextArea`等

> 2. 在组件中设置aria-required属性，提示为“必需”，例如`DatePicker`, `Checkbox`等

:::lang=en-us
# Accessibility

- order: 16
  
When the screen reader is turned on, the required fields of the form need to be prompted, The * is required and processed in the following ways:

> 1. Set required, label attribute in the FormItem component, set the name attribute in the child component, the label inside the component will be automatically associated with the component。such as `Input`, `TextArea`, etc.

> 2. Set the aria-required attribute in the component, the prompt is "required", such as `DatePicker`, `Checkbox`, etc.

:::

---

````jsx
import { Form, Input, Select, Radio, Checkbox, DatePicker, Switch, Upload, Grid, Field } from '@alifd/next';

const RadioGroup = Radio.Group;
const {Row, Col} = Grid;
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: {
        span: 7
    },
    wrapperCol: {
        span: 16
    }
};
class Demo extends React.Component {
    state = {
        size: 'medium'
    };
    submitHandle = (e) => {
        console.log(e);
    };
    render() {
        return (
            <div>
                <Form {...formItemLayout} size={this.state.size} style={{maxWidth: '800px'}}>
                    <FormItem required label="username:">
                        <Input placeholder="Please enter your user name" id="username" name="username"/>
                    </FormItem>
                    <FormItem required label="Password:">
                        <Input htmlType="password" placeholder="Please enter your password" id="password" name="password"/>
                    </FormItem>
                    <FormItem  
                        id="myDateInput-1"
                        required
                        label="Accessible Date 1 (YYYY/MM/DD):"
                        requiredMessage="Please select your date"
                    >
                        <DatePicker name="date" format="YYYY/MM/DD" inputProps={{"aria-required": "true", "id": "myDateInput-1"}}/> 
                    </FormItem>
                    <FormItem  
                        required
                        label="Accessible Date 2 (YYYY/MM/DD):"
                        requiredMessage="Please select your date"
                    >
                        <DatePicker name="otherDate" format="YYYY/MM/DD" dateInputAriaLabel="Date input format YYYY/MM/DD" inputProps={{"aria-required": "true", "aria-label": "Accessible Date 2"}}/> 
                    </FormItem>
                    <FormItem label="Switch:">
                        <Switch name="switch" aria-label="Accessible Switch" defaultChecked/>
                    </FormItem>
                    <FormItem
                        required
                        label="gender:"
                        requiredMessage="Please select your gender"
                    >
                        <RadioGroup name="sex">
                            <Radio value="male" aria-required="true">Male</Radio>
                            <Radio value="female" aria-required="true">Female</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="Language:">
                        <Checkbox.Group name="langs" aria-label="Please select a programming language">
                            <Checkbox value="python">python</Checkbox>
                            <Checkbox value="java">java</Checkbox>
                            <Checkbox value="angular">angular</Checkbox>
                            <Checkbox value="c">c</Checkbox>
                            <Checkbox value="other">other</Checkbox>
                        </Checkbox.Group>
                    </FormItem>
                    <FormItem label="upload:">
                        <Upload.Card
                            listType="card"
                            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                            defaultValue={[]}
                            limit={2}
                            name="upload"
                        />
                    </FormItem>
                    <FormItem label="Note:">
                        <Input.TextArea placeholder="description" name="remark"/>
                    </FormItem>
                    <FormItem wrapperCol={{offset: 5}}>
                        <Form.Submit validate type="primary" onClick={this.submitHandle} style={{marginRight: 7}}>Submit</Form.Submit>
                        <Form.Reset style={{marginLeft: 130}}>Reset</Form.Reset>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
ReactDOM.render(<Demo />, mountNode);
````