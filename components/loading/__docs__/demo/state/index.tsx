import React from 'react';
import ReactDOM from 'react-dom';
import { Loading, Form, Input, Button } from '@alifd/next';

const FormItem = Form.Item;

const layout = {
    labelCol: {
        fixedSpan: 4,
    },
    wrapperCol: {
        span: 18,
    },
};

class App extends React.Component {
    state = {
        visible: false,
    };

    setVisible(visible: boolean) {
        this.setState({
            visible,
        });
    }

    render() {
        const CustomForm = () => (
            <Form style={{ width: 500 }}>
                <FormItem label="Username" {...layout}>
                    <Input />
                </FormItem>
                <FormItem label="Password" {...layout}>
                    <Input htmlType="password" placeholder="please input" />
                </FormItem>
                <FormItem label="Detail" {...layout}>
                    <Input multiple />
                </FormItem>
            </Form>
        );
        const ControlButton = () => (
            <div style={{ paddingLeft: 80 }}>
                <Button onClick={this.setVisible.bind(this, true)} type="primary">
                    Submit
                </Button>
                <Button onClick={this.setVisible.bind(this, false)} style={{ marginLeft: 5 }}>
                    Cancel
                </Button>
            </div>
        );

        return (
            <div>
                <Loading visible={this.state.visible}>
                    <CustomForm />
                </Loading>
                <ControlButton />
            </div>
        );
    }
}
ReactDOM.render(<App />, mountNode);
