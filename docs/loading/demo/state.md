# 关闭加载

- order: 2

可切换加载状态。

:::lang=en-us
# Loading State

- order: 2

Loading state can be toggle。

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
        return (<div>
            <Loading visible={this.state.visible} shape="fusion-reactor">
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
            </Loading>
            <div style={{paddingLeft: 80}}>
                <Button onClick={this.setVisible.bind(this, true)} type="primary">Submit</Button>
                <Button onClick={this.setVisible.bind(this, false)} style={{marginLeft: 5}}>Cancel</Button>
            </div>
        </div>);
    }
}
ReactDOM.render(<App/>, mountNode);
````
