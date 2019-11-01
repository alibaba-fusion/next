
# 预览态

- order: 17

可以通过Form切换表单元素的预览态，切换前后布局结构相同

:::lang=en-us
# Preview

- order: 17

You can switch to preview state. Preview state and editor state share the same layout.

:::

---

````jsx
import { Form, Input, Switch, Rating, Grid, Field, Icon } from '@alifd/next';

const {Row, Col} = Grid;
const FormItem = Form.Item;
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
        size: 'medium',
        preview: false,
    };
    submitHandler = (e) => {
        console.log(e);
    };
    onPreviewChange = (checked) => {
        this.setState({
            preview: checked
        });
    };
    ratingPreview = (value) => {
        return <p>{value} {value > 2.5 ? <Icon type="smile" /> : <Icon type="cry"/>}</p>
    };
    render() {
        return (
            <div>
                <Form {...formItemLayout} isPreview={this.state.preview} size={this.state.size} style={{maxWidth: '800px'}}>
                    <FormItem label="preview: " style={{marginBottom: 0}}>
                        <Switch onChange={this.onPreviewChange} />
                    </FormItem>
                    <div style={{height: 1, width: '100%', margin: '20px 0'}}/>
                    <FormItem required label="Username:">
                        <Input defaultValue="Fusion" placeholder="Please enter your username" id="username" name="username" aria-required="true"   />
                    </FormItem>
                    <FormItem required label="Password:">
                        <Input defaultValue="Fusion@2019" htmlType="password" placeholder="Please enter your password" id="password" name="password" aria-required="true" />
                    </FormItem>

                    <FormItem required label="Rating:">
                        <Rating defaultValue={4.5} name="rate" isPreview aria-label="what's the rate score" />
                    </FormItem>

                    <FormItem required label="Custom Render Rating:">
                        <Rating defaultValue={4.5} name="rate2" isPreview aria-label="what's the rate2 score" renderPreview={this.ratingPreview}/>
                    </FormItem>

                    <FormItem label="Note:">
                        <Input.TextArea placeholder="description" name="a11yRemark" defaultValue="Fusion 是一套企业级中后台UI的解决方案，致力于解决设计师与前端在产品体验一致性、工作协同、开发效率方面的问题。通过协助业务线构建设计系统，提供系统化工具协助设计师前端使用设计系统，下游提供一站式设计项目协作平台；打通互联网产品从设计到开发的工作流。" />
                    </FormItem>
                    <FormItem wrapperCol={{offset: 7}}>
                        <Form.Submit validate type="primary" onClick={this.submitHandler}>Submit</Form.Submit>
                        <Form.Reset style={{marginLeft: 10}}>Reset</Form.Reset>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
ReactDOM.render(<Demo />, mountNode);
````
