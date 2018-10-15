# 自定义底部

- order: 2

默认的 footer 为确定取消两个按钮，你可以自定义 footer 的内容。

:::lang=en-us
# Customize footer

- order: 2

The default footer is ok and cancel buttons, you can customize footer content.
:::
---

````jsx
import { Button, Dialog } from '@alifd/next';


class Demo extends React.Component {
    state = {
        visible: false
    };

    onOpen = () => {
        this.setState({
            visible: true
        });
    };

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.onOpen} type="primary">
                    Open dialog
                </Button>
                <Dialog title="Welcome to Alibaba.com"
                    footer={<Button warning type="primary" onClick={this.onClose}>Customize footer</Button>}
                    visible={this.state.visible}
                    onOk={this.onClose}
                    onCancel={this.onClose}
                    onClose={this.onClose}>
                    Start your business here by searching a popular product
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
