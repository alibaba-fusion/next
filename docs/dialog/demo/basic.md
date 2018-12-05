# 基本

- order: 0

第一个对话框

:::lang=en-us
# Basic

- order: 0

First dialog
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

    onClose = reason => {
        console.log(reason);

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
                <Dialog
                    title="Welcome to Alibaba.com"
                    visible={this.state.visible}
                    onOk={this.onClose.bind(this, 'okClick')}
                    onCancel={this.onClose.bind(this, 'cancelClick')}
                    onClose={this.onClose}>
                    Start your business here by searching a popular product
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
