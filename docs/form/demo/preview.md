
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
import { Form, Input, Switch, Rating, Grid, Field, Icon, Radio, Range, Checkbox, NumberPicker, Select, Upload } from '@alifd/next';


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
const fileList = [{
    uid: '0',
    name: 'IMG.png',
    state: 'done',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
}, {
    uid: '1',
    name: 'IMG.png',
    percent: 50,
    state: 'uploading',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
}, {
    uid: '2',
    name: 'IMG.png',
    state: 'error',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
}];

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
                        <Switch isPreview={false} onChange={this.onPreviewChange} />
                    </FormItem>
                    <div style={{height: 1, width: '100%', margin: '20px 0'}}/>
                    <FormItem required label="Username:">
                        <Input defaultValue="Fusion" placeholder="Please enter your username" id="username" name="username" aria-required="true"   />
                    </FormItem>
                    <FormItem required label="Password:">
                        <Input defaultValue="Fusion@2019" htmlType="password" placeholder="Please enter your password" id="password" name="password" aria-required="true" />
                    </FormItem>

                    <FormItem required label="Link:">
                        <Input name="link" addonTextBefore="http://" addonTextAfter=".com" defaultValue="alibaba" aria-label="input with config of addonTextBefore and addonTextAfter" />
                    </FormItem>

                    <FormItem required label="Number:">
                        <NumberPicker name="number" isPreview defaultValue={1} />
                    </FormItem>

                    <FormItem required label="autoComplete:">
                        <Select.AutoComplete name="autoComplete" isPreview defaultValue="selected" />
                    </FormItem>

                    <FormItem required label="multiple Select:">
                        <Select name="select" isPreview defaultValue={["a", "b"]} mode="multiple" >
                            <Select.Option value="a">a</Select.Option>
                            <Select.Option value="b">b</Select.Option>
                        </Select>
                    </FormItem>

                    <FormItem required label="Rating:">
                        <Rating defaultValue={4.5} name="rate" isPreview aria-label="what's the rate score" />
                    </FormItem>

                    <FormItem required label="Custom Render Rating:">
                        <Rating defaultValue={4.5} name="rate2" isPreview aria-label="what's the rate2 score" renderPreview={this.ratingPreview}/>
                    </FormItem>

                    <FormItem required label="Checkbox:">
                        <Checkbox.Group isPreview itemDirection="ver" value={['react', 'vue']}>
                            <Checkbox value="react">React</Checkbox>
                            <Checkbox value="vue">Vue</Checkbox>
                            <Checkbox value="angular">Angular</Checkbox>
                        </Checkbox.Group>
                    </FormItem>

                    <FormItem required label="Custom Render Rating:">
                        <Radio.Group
                            value="react"
                        >
                            <Radio value="react">React</Radio>
                            <Radio value="vue">Vue</Radio>
                            <Radio value="angular">Angular</Radio>
                        </Radio.Group>
                    </FormItem>
                    
                    <FormItem required label="Range:">
                        <Range slider="double" isPreview defaultValue={[10, 80]} />
                    </FormItem>

                    <FormItem label="Note:">
                        <Input.TextArea placeholder="description" name="a11yRemark" defaultValue="Fusion 是一套企业级中后台UI的解决方案，致力于解决设计师与前端在产品体验一致性、工作协同、开发效率方面的问题。通过协助业务线构建设计系统，提供系统化工具协助设计师前端使用设计系统，下游提供一站式设计项目协作平台；打通互联网产品从设计到开发的工作流。" />
                    </FormItem>

                    <FormItem label="Upload:">
                        <Upload defaultValue={fileList} listType="text" />
                    </FormItem>
                    <FormItem label="Upload:">
                        <Upload defaultValue={fileList} listType="image" />
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
