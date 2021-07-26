
# 无障碍支持

- order: 30

对于必填项，在组件中要设置`aria-required`属性，并通过视觉设计上的高亮提示用户。 

:::lang=en-us
# Accessibility

- order: 30
  
For required fields, set the `aria-required` attribute in the component and prompt the user with a visual design highlight.

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
                    <FormItem required label="username:" name="a11yUsername" >
                        <Input placeholder="Please enter your username" id="a11yUsername" aria-required="true"   />
                    </FormItem>
                    <FormItem required label="Password:" name="a11yPassword">
                        <Input htmlType="password" placeholder="Please enter your password" id="a11yPassword"  aria-required="true" />
                    </FormItem>
                    <FormItem  
                        id="myDateInput-1"
                        required
                        label="Accessible Date 1 (YYYY/MM/DD):"
                        requiredMessage="Please select your date"
                        name="a11yDate" 
                    >
                        <DatePicker format="YYYY/MM/DD" inputProps={{"aria-required": "true", "id": "myDateInput-1"}}/> 
                    </FormItem>
                    <FormItem  
                        required
                        label="Accessible Date 2 (YYYY/MM/DD):"
                        requiredMessage="Please select your date"
                        name="a11yOtherDate" 
                    >
                        <DatePicker format="YYYY/MM/DD" dateInputAriaLabel="Date input format YYYY/MM/DD" inputProps={{"aria-required": "true", "aria-label": "Accessible Date 2"}}/> 
                    </FormItem>
                    <FormItem label="Switch:" name="a11ySwitch">
                        <Switch aria-label="Accessible Switch" defaultChecked/>
                    </FormItem>
                    <FormItem
                        required
                        label="gender:"
                        requiredMessage="Please select your gender"
                        name="a11ySex"
                    >
                        <RadioGroup>
                            <Radio value="male" aria-required="true">Male</Radio>
                            <Radio value="female" aria-required="true">Female</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="Language:" name="a11yLangs">
                        <Checkbox.Group aria-label="Please select a programming language">
                            <Checkbox value="python">python</Checkbox>
                            <Checkbox value="java">java</Checkbox>
                            <Checkbox value="angular">angular</Checkbox>
                            <Checkbox value="c">c</Checkbox>
                            <Checkbox value="other">other</Checkbox>
                        </Checkbox.Group>
                    </FormItem>
                    <FormItem label="upload:" name="a11yUpload">
                        <Upload.Card
                            listType="card"
                            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                            defaultValue={[]}
                            limit={2}
                        />
                    </FormItem>
                    <FormItem label="Note:" name="a11yRemark">
                        <Input.TextArea placeholder="description"/>
                    </FormItem>
                    <FormItem wrapperCol={{offset: 7}}>
                        <Form.Submit validate type="primary" onClick={this.submitHandle} style={{marginRight: 10}}>Submit</Form.Submit>
                        <Form.Reset >Reset</Form.Reset>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
ReactDOM.render(<Demo />, mountNode);
````