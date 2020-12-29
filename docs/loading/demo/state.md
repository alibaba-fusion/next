# 受控关闭加载

- order: 4

通过`visible`受控显示或关闭加载动画。

:::lang=en-us
# Loading State

- order: 4

Loading state can be toggle by `visible`。

:::
---

````jsx
import { Loading, Form, Input, Button } from '@alifd/next';


const FormItem = Form.Item;

const layout = {
    labelCol: {
        fixedSpan: 4
    },
    wrapperCol: {
        span: 18
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    setVisible(visible) {
        this.setState({
            visible
        });
    }
    
    render() {

        const CustomForm = () => (
            <Form style={{width: 500}}>
                <FormItem label="Username" {...layout} >
                    <Input />
                </FormItem>
                <FormItem label="Password" {...layout} >
                    <Input htmlType="password" placeholder="please input"/>
                </FormItem>
                <FormItem label="Detail" {...layout} >
                    <Input multiple />
                </FormItem>
            </Form>
        );
        const ControlButton = () => (        
            <div style={{paddingLeft: 80}}>
                <Button onClick={this.setVisible.bind(this, true)} type="primary">Submit</Button>
                <Button onClick={this.setVisible.bind(this, false)} style={{marginLeft: 5}}>Cancel</Button>
            </div>
        );

        return (<div>
            <Loading visible={this.state.visible} shape="fusion-reactor">
                <CustomForm />
            </Loading>
            <ControlButton />
        </div>);
    }
}
ReactDOM.render(<App/>, mountNode);
````
