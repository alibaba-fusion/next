# 自定义底部

- order: 2

默认的底部为确定取消两个按钮，可以通过 `okProps` 或 `cancelProps` 自定义按钮属性，或者通过 `footer` 属性完全自定义底部内容。

:::lang=en-us
# Customize footer

- order: 2

The default `footer` is ok and cancel buttons, you can customize `footer` content.
:::
---

````jsx
import { Button, Dialog } from '@alifd/next';


class Demo extends React.Component {
    state = {
        visible: false
    };

    onOpenFullyCustomized = () => {
        this.setState({
            fullyCustomizedVisible: true
        });
    };

    onCloseFullyCustomized = () => {
        this.setState({
            fullyCustomizedVisible: false
        });
    };

    onOpenTextCustomized = () => {
        this.setState({
            textCustomizedVisible: true
        });
    };

    onCloseTextCustomized = () => {
        this.setState({
            textCustomizedVisible: false
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.onOpenFullyCustomized} type="primary">
                    Fully Customized Footer
                </Button>
                <br/>
                <br/>
                <Dialog
                    title="Welcome to Alibaba.com"
                    footer={<Button warning type="primary" onClick={this.onCloseFullyCustomized}>Customize footer</Button>}
                    visible={this.state.fullyCustomizedVisible}
                    onOk={this.onCloseFullyCustomized}
                    onCancel={this.onCloseFullyCustomized}
                    onClose={this.onCloseFullyCustomized}>
                    Start your business here by searching a popular product
                </Dialog>
                <Button onClick={this.onOpenTextCustomized} type="primary">
                    Text Only Customize
                </Button>
                <Dialog
                    title="Welcome to Alibaba.com"
                    visible={this.state.textCustomizedVisible}
                    onOk={this.onCloseTextCustomized}
                    onCancel={this.onCloseTextCustomized}
                    onClose={this.onCloseTextCustomized}
                    okProps={{children: 'Custom OK', className: 'asdf'}}
                    cancelProps={{children: 'Custom Cancel'}}
                    >
                    Start your business here by searching a popular product
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
